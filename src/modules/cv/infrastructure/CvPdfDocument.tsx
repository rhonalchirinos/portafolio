import path from 'node:path'

import { Document, Font, Link, Page, StyleSheet, Text, View } from '@react-pdf/renderer'

import type { Cv } from '@/modules/cv/domain/cv'

function interFont(weight: 400 | 600 | 700) {
  return path.join(process.cwd(), 'node_modules', '@fontsource', 'inter', 'files', `inter-latin-${weight}-normal.woff`)
}

Font.register({
  family: 'Inter',
  fonts: [
    { src: interFont(400), fontWeight: 400 },
    { src: interFont(600), fontWeight: 600 },
    { src: interFont(700), fontWeight: 700 },
  ],
})

Font.registerHyphenationCallback((word) => [word])

const styles = StyleSheet.create({
  page: { padding: 43, fontFamily: 'Inter', color: '#374151', fontSize: 10.5, lineHeight: 1.32 },
  header: { borderBottomWidth: 1, borderBottomColor: '#d1d5db', paddingBottom: 12, marginBottom: 14 },
  name: { fontSize: 25, lineHeight: 1.1, fontWeight: 700, color: '#16324B', marginBottom: 4 },
  headline: { fontSize: 11, lineHeight: 1.3, fontWeight: 600, color: '#1F2937' },
  credential: { color: '#2563EB', marginTop: 5 },
  contact: { color: '#596579', marginTop: 8 },
  links: { marginTop: 4 },
  linksLabel: { color: '#596579' },
  section: { marginBottom: 14 },
  sectionTitle: { color: '#16324B', fontSize: 12.5, fontWeight: 700, marginBottom: 6 },
  paragraph: { marginBottom: 4, textAlign: 'justify' },
  entry: { marginTop: 10 },
  entryTitle: { fontSize: 11, fontWeight: 700, color: '#1F2937', marginBottom: 2 },
  entryMeta: { flexDirection: 'row', justifyContent: 'space-between', gap: 12, marginBottom: 4 },
  organization: { color: '#596579' },
  period: { color: '#596579', textAlign: 'right' },
  bullet: { marginLeft: 10, marginBottom: 2, textAlign: 'justify' },
  strong: { color: '#1F2937', fontWeight: 700 },
  link: { color: '#2563EB', textDecoration: 'underline' },
})

function renderTextWithLinks(text: string) {
  return text.split(/(\[[^\]]+\]\(https?:\/\/[^\s)]+\)|\*\*[^*]+\*\*|https?:\/\/[^\s]+)/g).map((part, index) => {
    const markdownLink = part.match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/)

    if (markdownLink) {
      return (
        <Link key={`${markdownLink[2]}-${index}`} src={markdownLink[2]} style={styles.link}>
          {markdownLink[1]}
        </Link>
      )
    }

    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <Text key={`${part}-${index}`} style={styles.strong}>
          {part.slice(2, -2)}
        </Text>
      )
    }

    return part.startsWith('http') ? (
      <Link key={`${part}-${index}`} src={part} style={styles.link}>
        {part}
      </Link>
    ) : (
      part
    )
  })
}

export function CvPdfDocument({ cv }: { cv: Cv }) {
  return (
    <Document title={`${cv.name} - CV`} author={cv.name}>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{cv.name}</Text>
          <Text style={styles.headline}>{cv.headline}</Text>
          {cv.featuredCredential && (
            <Text style={styles.credential}>
              {cv.featuredCredential.label} ·{' '}
              <Link src={cv.featuredCredential.url} style={styles.link}>
                {cv.credentialActionLabel}
              </Link>
            </Text>
          )}
          {(cv.location || cv.email) && (
            <Text style={styles.contact}>
              {cv.location}
              {cv.location && cv.email && ' | '}
              {cv.email && (
                <Link src={`mailto:${cv.email}`} style={styles.link}>
                  {cv.email}
                </Link>
              )}
            </Text>
          )}
          {cv.links.length > 0 && (
            <Text style={styles.links}>
              <Text style={styles.linksLabel}>{cv.linksLabel}: </Text>
              {cv.links.map((link, index) => (
                <Link key={link.url} src={link.url} style={styles.link}>
                  {index > 0 ? ` | ${link.label}` : link.label}
                </Link>
              ))}
            </Text>
          )}
        </View>

        {cv.summary.length > 0 && (
          <View style={styles.section}>
            {cv.summary.map((paragraph) => (
              <Text key={paragraph} style={styles.paragraph}>
                {renderTextWithLinks(paragraph)}
              </Text>
            ))}
          </View>
        )}

        {cv.sections.map((section) => (
          <CvSectionView key={section.title} section={section} />
        ))}
      </Page>
    </Document>
  )
}

function CvSectionView({ section }: { section: Cv['sections'][number] }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{section.title}</Text>
      {section.paragraphs.map((paragraph) => (
        <Text key={paragraph} style={styles.paragraph}>
          {renderTextWithLinks(paragraph)}
        </Text>
      ))}
      {section.bullets.map((bullet) => (
        <Text key={bullet} style={styles.bullet}>
          • {renderTextWithLinks(bullet)}
        </Text>
      ))}
      {section.entries.map((entry) => (
        <CvEntryView key={`${entry.title}-${entry.organization}-${entry.period}`} entry={entry} />
      ))}
    </View>
  )
}

function CvEntryView({ entry }: { entry: Cv['sections'][number]['entries'][number] }) {
  const [firstBullet, ...remainingBullets] = entry.bullets
  const keepTogether = entry.organization?.includes('Vivo Conecta')

  return (
    <View style={styles.entry} wrap={keepTogether ? false : undefined}>
      <View wrap={false}>
        <Text style={styles.entryTitle}>{entry.title}</Text>
        {(entry.organization || entry.period) && (
          <View style={styles.entryMeta}>
            <Text style={styles.organization}>{entry.organization}</Text>
            <Text style={styles.period}>{entry.period}</Text>
          </View>
        )}
        {entry.paragraphs.map((paragraph) => (
          <Text key={paragraph} style={styles.paragraph}>
            {renderTextWithLinks(paragraph)}
          </Text>
        ))}
        {firstBullet && <Text style={styles.bullet}>• {renderTextWithLinks(firstBullet)}</Text>}
      </View>
      {remainingBullets.map((bullet) => (
        <Text key={bullet} style={styles.bullet}>
          • {renderTextWithLinks(bullet)}
        </Text>
      ))}
    </View>
  )
}
