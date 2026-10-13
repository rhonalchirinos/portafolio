'use client'

import Link from 'next/link'

import { useLanguage } from '@/components/LanguageToggle'
import type { Cv } from '@/modules/cv/domain/cv'

function renderTextWithLinks(text: string) {
  return text.split(/(\[[^\]]+\]\(https?:\/\/[^\s)]+\)|\*\*[^*]+\*\*|https?:\/\/[^\s]+)/g).map((part, index) => {
    const markdownLink = part.match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/)

    if (markdownLink) {
      return (
        <a
          key={`${markdownLink[2]}-${index}`}
          href={markdownLink[2]}
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4"
        >
          {markdownLink[1]}
        </a>
      )
    }

    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>
    }

    return part.startsWith('http') ? (
      <a key={`${part}-${index}`} href={part} target="_blank" rel="noreferrer" className="underline underline-offset-4">
        {part}
      </a>
    ) : (
      part
    )
  })
}

export function CvPageContent({ cvByLanguage }: { cvByLanguage: Record<'es' | 'en', Cv> }) {
  const { language } = useLanguage()
  const cv = cvByLanguage[language]
  const pdfUrl = `/api/cv.pdf?lang=${language}`

  return (
    <article className="section-theme mx-auto max-w-4xl pb-16 pt-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <Link href="/" className="ghost-button rounded-full px-4 py-2 text-sm font-semibold">
          {language === 'es' ? 'Volver al portafolio' : 'Back to portfolio'}
        </Link>
        <div className="flex gap-3">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noreferrer"
            className="ghost-button rounded-full px-4 py-2 text-sm font-semibold"
          >
            {language === 'es' ? 'Abrir PDF para imprimir' : 'Open PDF to print'}
          </a>
          <a href={`${pdfUrl}&download=1`} className="clear-button rounded-full px-4 py-2 text-sm font-semibold">
            {language === 'es' ? 'Descargar PDF' : 'Download PDF'}
          </a>
        </div>
      </div>

      <div className="section-card p-7 sm:p-10">
        <header className="border-b border-[color:var(--app-border)] pb-6">
          <h1 className="section-title text-4xl font-semibold">{cv.name}</h1>
          <p className="section-kicker mt-2 text-lg font-semibold">{cv.headline}</p>
          {cv.featuredCredential && (
            <p className="section-text mt-2 text-sm font-semibold">
              {cv.featuredCredential.label} ·{' '}
              <a
                href={cv.featuredCredential.url}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                {language === 'es' ? 'Ver credencial' : 'View credential'}
              </a>
            </p>
          )}
          <div className="section-text mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {cv.email && <span>{cv.email}</span>}
            {cv.location && <span>{cv.location}</span>}
            {cv.links.length > 0 && <span>Enlaces:</span>}
            {cv.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                {link.label}
              </a>
            ))}
          </div>
        </header>

        {cv.summary.length > 0 && (
          <section className="section-text mt-7 space-y-4 leading-7">
            {cv.summary.map((paragraph) => (
              <p key={paragraph}>{renderTextWithLinks(paragraph)}</p>
            ))}
          </section>
        )}

        <div className="mt-8 space-y-8">
          {cv.sections.map((section) => (
            <section
              key={section.title}
              className={
                section.title === 'Certificaciones destacadas'
                  ? 'rounded-2xl border border-slate-200 bg-slate-50 p-5'
                  : undefined
              }
            >
              <h2 className="section-title text-2xl font-semibold">{section.title}</h2>
              <div className="section-text mt-3 space-y-3 leading-7">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{renderTextWithLinks(paragraph)}</p>
                ))}
                {section.bullets.length > 0 && (
                  <ul className="list-disc space-y-2 pl-5">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{renderTextWithLinks(bullet)}</li>
                    ))}
                  </ul>
                )}
              </div>
              {section.entries.map((entry) => (
                <article
                  key={`${entry.title}-${entry.organization}-${entry.period}`}
                  className={
                    section.title === 'Certificaciones destacadas' ? 'mt-4 border-t border-slate-200 pt-4' : 'mt-5'
                  }
                >
                  <h3 className="section-title text-lg font-semibold">{entry.title}</h3>
                  {(entry.organization || entry.period) && (
                    <div className="section-muted mt-1 flex flex-wrap justify-between gap-x-4 gap-y-1 text-sm font-medium">
                      <p>{entry.organization}</p>
                      <p>{entry.period}</p>
                    </div>
                  )}
                  <div className="section-text mt-2 space-y-3 leading-7">
                    {entry.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{renderTextWithLinks(paragraph)}</p>
                    ))}
                    {entry.bullets.length > 0 && (
                      <ul className="list-disc space-y-2 pl-5">
                        {entry.bullets.map((bullet) => (
                          <li key={bullet}>{renderTextWithLinks(bullet)}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </section>
          ))}
        </div>
      </div>
    </article>
  )
}
