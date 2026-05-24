'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import HighlightBlock from '@/components/HighlightBlock'
import { useLanguage } from '@/components/LanguageToggle'
import type { PythonPublication } from '@/modules/python/domain/python-publication'
import { localizePythonPublication } from '@/modules/python/infrastructure/python-publication-localization'

type Props = {
  publication: PythonPublication
  nextPublication: PythonPublication | null
}

export default function PythonPublicationContent({ publication, nextPublication }: Props) {
  const { language } = useLanguage()
  const localizedPublication = localizePythonPublication(publication, language)
  const localizedNextPublication = nextPublication ? localizePythonPublication(nextPublication, language) : null

  return (
    <article className="portfolio-theme pb-20">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <Link
          href="/python"
          className="ghost-button inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition"
        >
          <FaArrowLeft className="text-xs" />
          {language === 'es' ? 'Volver a Python' : 'Back to Python'}
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-700">
              {localizedPublication.badge}
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">{localizedPublication.title}</h1>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">{localizedPublication.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {localizedPublication.topics.map((topic) => (
                <span
                  key={topic}
                  className="mono-badge rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase text-slate-500"
                >
                  {topic}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              {localizedPublication.readingTime}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 p-4">
            <Image
              src={localizedPublication.image}
              alt={localizedPublication.title}
              width={1200}
              height={800}
              className="h-full w-full rounded-[1.25rem] object-cover"
            />
          </div>
        </div>
      </section>

      <div className="mt-8 space-y-6">
        {localizedPublication.sections.map((section) => (
          <section key={section.id} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold text-slate-900">{section.title}</h2>

            {section.paragraphs && (
              <div className="mt-4 space-y-4 text-base leading-8 text-slate-600">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}

            {section.bullets && (
              <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-8 text-slate-600">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}

            {section.note && (
              <div className="mt-6 rounded-[1.5rem] border border-sky-200 bg-sky-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                  {language === 'es' ? 'Nota importante' : 'Important note'}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">{section.note}</p>
              </div>
            )}

            {section.code && (
              <div className="mt-6">
                {section.code.caption && (
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {section.code.caption}
                  </p>
                )}
                <HighlightBlock language={section.code.language}>{section.code.content}</HighlightBlock>
              </div>
            )}
          </section>
        ))}
      </div>

      {localizedNextPublication && (
        <section className="mt-8 rounded-[2rem] border border-slate-200 bg-gradient-to-r from-slate-50 to-sky-50 p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-700">
            {language === 'es' ? 'Siguiente lectura' : 'Next read'}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">{localizedNextPublication.title}</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{localizedNextPublication.excerpt}</p>
          <Link
            href={`/python/${localizedNextPublication.slug}`}
            className="clear-button mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition"
          >
            {language === 'es' ? 'Ir a la siguiente publicacion' : 'Go to the next article'}
            <FaArrowRight className="text-xs" />
          </Link>
        </section>
      )}
    </article>
  )
}
