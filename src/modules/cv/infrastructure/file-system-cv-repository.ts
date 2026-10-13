import fs from 'node:fs'
import path from 'node:path'

import { parse } from 'yaml'

import type { Language } from '@/i18n/translations'
import type { Cv, CvEntry, CvLink, CvSection } from '@/modules/cv/domain/cv'

type FrontMatter = {
  name?: unknown
  headline?: unknown
  email?: unknown
  location?: unknown
  links?: unknown
  featuredCredential?: unknown
}

function requiredString(value: unknown, field: string) {
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(`CV front matter requires a ${field} string`)
  }

  return value.trim()
}

function optionalString(value: unknown) {
  return typeof value === 'string' && value.trim() !== '' ? value.trim() : undefined
}

function parseLink(value: unknown): CvLink {
  if (!value || typeof value !== 'object') {
    throw new Error('Each CV link must be an object')
  }

  const { label, url } = value as Record<string, unknown>
  return {
    label: requiredString(label, 'link label'),
    url: requiredString(url, 'link url'),
  }
}

function parseLinks(value: unknown): CvLink[] {
  return Array.isArray(value) ? value.map(parseLink) : []
}

function parseOptionalLink(value: unknown) {
  return value === undefined ? undefined : parseLink(value)
}

function splitFrontMatter(source: string) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/)

  if (!match) {
    throw new Error('CV Markdown must begin with YAML front matter')
  }

  return {
    frontMatter: parse(match[1]) as FrontMatter,
    body: source.slice(match[0].length),
  }
}

function parseMarkdown(source: string): Cv {
  const { frontMatter, body } = splitFrontMatter(source)
  const summary: string[] = []
  const sections: CvSection[] = []
  let currentSection: CvSection | null = null
  let currentEntry: CvEntry | null = null
  let paragraphLines: string[] = []

  const flushParagraph = () => {
    if (paragraphLines.length === 0) {
      return
    }

    const paragraph = paragraphLines.join(' ')
    if (currentEntry) {
      currentEntry.paragraphs.push(paragraph)
    } else if (currentSection) {
      currentSection.paragraphs.push(paragraph)
    } else {
      summary.push(paragraph)
    }
    paragraphLines = []
  }

  for (const rawLine of body.split(/\r?\n/)) {
    const line = rawLine.trim()

    if (line.startsWith('## ')) {
      flushParagraph()
      currentSection = { title: line.slice(3).trim(), paragraphs: [], bullets: [], entries: [] }
      sections.push(currentSection)
      currentEntry = null
      continue
    }

    if (line.startsWith('### ') && currentSection) {
      flushParagraph()
      const [title, organization, period] = line
        .slice(4)
        .split('|')
        .map((part) => part.trim())
      currentEntry = {
        title,
        organization: organization || undefined,
        period: period || undefined,
        paragraphs: [],
        bullets: [],
      }
      currentSection.entries.push(currentEntry)
      continue
    }

    if (line.startsWith('- ')) {
      flushParagraph()
      const bullet = line.slice(2).trim()
      if (currentEntry) {
        currentEntry.bullets.push(bullet)
      } else if (currentSection) {
        currentSection.bullets.push(bullet)
      }
      continue
    }

    if (line === '') {
      flushParagraph()
      continue
    }

    if (!line.startsWith('# ')) {
      paragraphLines.push(line)
    }
  }

  flushParagraph()

  return {
    name: requiredString(frontMatter.name, 'name'),
    headline: requiredString(frontMatter.headline, 'headline'),
    email: optionalString(frontMatter.email),
    location: optionalString(frontMatter.location),
    links: parseLinks(frontMatter.links),
    featuredCredential: parseOptionalLink(frontMatter.featuredCredential),
    summary,
    sections,
  }
}

export function getCv(language: Language) {
  const filePath = path.join(process.cwd(), 'src/modules/cv/content', `${language}.md`)
  return parseMarkdown(fs.readFileSync(filePath, 'utf8'))
}
