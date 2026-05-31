import fs from 'node:fs'
import path from 'node:path'

import type { Language } from '@/i18n/translations'
import type { Publication } from '@/modules/python/domain/publication'
import { pythonPublicationMetadata } from '@/modules/python/content/publication-metadata'
import type { PublicationRepository } from '@/modules/python/domain/publication-repository'

const SUPPORTED_EXTENSIONS = new Set(['.md'])

function createSectionId(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function parseMarkdownSections(lines: string[]) {
  const sections: Publication['sections'] = []
  let currentSection: Publication['sections'][number] | null = null
  let paragraphBuffer: string[] = []
  let bulletBuffer: string[] = []
  let noteBuffer: string[] = []
  let codeLanguage: string | null = null
  let codeLines: string[] = []

  const flushParagraphs = () => {
    if (!currentSection || paragraphBuffer.length === 0) {
      paragraphBuffer = []
      return
    }

    currentSection.paragraphs = [...(currentSection.paragraphs ?? []), paragraphBuffer.join(' ')]
    paragraphBuffer = []
  }

  const flushBullets = () => {
    if (!currentSection || bulletBuffer.length === 0) {
      bulletBuffer = []
      return
    }

    currentSection.bullets = [...(currentSection.bullets ?? []), ...bulletBuffer]
    bulletBuffer = []
  }

  const flushNotes = () => {
    if (!currentSection || noteBuffer.length === 0) {
      noteBuffer = []
      return
    }

    currentSection.note = noteBuffer.join(' ')
    noteBuffer = []
  }

  const flushCode = () => {
    if (!currentSection || !codeLanguage) {
      codeLines = []
      return
    }

    currentSection.code = {
      language: codeLanguage,
      content: codeLines.join('\n'),
    }
    codeLanguage = null
    codeLines = []
  }

  const flushAllBuffers = () => {
    flushParagraphs()
    flushBullets()
    flushNotes()
    flushCode()
  }

  for (const line of lines) {
    if (codeLanguage) {
      if (line.startsWith('```')) {
        flushCode()
      } else {
        codeLines.push(line)
      }

      continue
    }

    if (line.startsWith('## ')) {
      flushAllBuffers()
      currentSection = {
        id: createSectionId(line.slice(3).trim()),
        title: line.slice(3).trim(),
      }
      sections.push(currentSection)
      continue
    }

    if (!currentSection) {
      continue
    }

    if (line.startsWith('```')) {
      flushParagraphs()
      flushBullets()
      flushNotes()
      codeLanguage = line.slice(3).trim() || 'text'
      codeLines = []
      continue
    }

    if (line.startsWith('- ')) {
      flushParagraphs()
      flushNotes()
      bulletBuffer.push(line.slice(2).trim())
      continue
    }

    if (line.startsWith('> ')) {
      flushParagraphs()
      flushBullets()
      noteBuffer.push(line.slice(2).trim())
      continue
    }

    if (line.trim() === '') {
      flushParagraphs()
      flushBullets()
      flushNotes()
      continue
    }

    paragraphBuffer.push(line.trim())
  }

  flushAllBuffers()

  return sections
}

function readPublicationPayload(filePath: string, language: Language) {
  const slug = path.basename(filePath, path.extname(filePath))
  const source = fs.readFileSync(filePath, 'utf8')
  const metadata = pythonPublicationMetadata[language][slug]

  if (!metadata) {
    throw new Error(`Missing metadata for ${language}/${slug}`)
  }

  const lines = source.split(/\r?\n/)
  const titleLine = lines.find((line) => line.startsWith('# '))
  const bodyStartIndex = titleLine ? lines.findIndex((line) => line === titleLine) + 1 : 0
  const bodyLines = lines.slice(bodyStartIndex)
  const sections = parseMarkdownSections(bodyLines)

  if (sections.length === 0) {
    throw new Error(`No sections parsed for ${language}/${slug}`)
  }

  return {
    slug,
    order: metadata.order,
    badge: metadata.badge,
    title: metadata.title,
    excerpt: metadata.excerpt,
    description: metadata.description,
    readingTime: metadata.readingTime,
    image: metadata.image,
    topics: metadata.topics,
    sections,
  } satisfies Publication
}

function getContentDirectory(language: Language) {
  return path.join(process.cwd(), 'src/modules/python/content', language)
}

function isPublicationFile(fileName: string) {
  return SUPPORTED_EXTENSIONS.has(path.extname(fileName))
}

function sortPublications(publications: Publication[]) {
  return [...publications].sort((left, right) => left.order - right.order)
}

export class FileSystemPublicationRepository implements PublicationRepository {
  private readonly cache = new Map<Language, Publication[]>()

  findAll(language: Language) {
    const cached = this.cache.get(language)

    if (cached) {
      return cached
    }

    const contentDirectory = getContentDirectory(language)
    const publications = fs
      .readdirSync(contentDirectory)
      .filter(isPublicationFile)
      .map((fileName) => path.join(contentDirectory, fileName))
      .map((filePath) => readPublicationPayload(filePath, language))

    const sortedPublications = sortPublications(publications)
    this.cache.set(language, sortedPublications)

    return sortedPublications
  }

  findBySlug(slug: string, language: Language) {
    return this.findAll(language).find((publication) => publication.slug === slug) ?? null
  }
}

export const publicationRepository = new FileSystemPublicationRepository()
