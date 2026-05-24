import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

import type { Language } from '@/i18n/translations'
import type { PythonPublication } from '@/modules/python/domain/python-publication'

type PythonEditorialArchiveSectionProps = {
  language: Language
  publications: PythonPublication[]
}

export function PythonEditorialArchiveSection({ language, publications }: PythonEditorialArchiveSectionProps) {
  return (
    <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-700">
          {language === 'es' ? 'Publicaciones' : 'Publications'}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
          {language === 'es' ? 'Archivo editorial de Python' : 'Python editorial archive'}
        </h2>
      </div>

      <div className="mt-8 grid gap-5 xl:grid-cols-3">
        {publications.map((publication) => (
          <article
            key={publication.slug}
            className="flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{publication.badge}</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900">{publication.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{publication.excerpt}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {publication.topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
                >
                  {topic}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-6">
              <Link
                href={`/python/${publication.slug}`}
                className="clear-button inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition"
              >
                {language === 'es' ? 'Leer publicacion' : 'Read article'}
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
