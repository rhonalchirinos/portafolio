import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

import { BaseSection } from '@/components/sections/BaseSection'
import type { Language } from '@/i18n/translations'
import type { Publication } from '@/modules/rust/domain/publication'

type RustEditorialArchiveSectionProps = {
  language: Language
  publications: Publication[]
}

export function RustEditorialArchiveSection({ language, publications }: RustEditorialArchiveSectionProps) {
  return (
    <BaseSection className="mt-8">
      <div className="max-w-3xl">
        <p className="section-kicker text-sm font-semibold uppercase tracking-[0.25em]">
          {language === 'es' ? 'Publicaciones' : 'Publications'}
        </p>
        <h2 className="section-title mt-3 text-3xl font-semibold md:text-4xl">
          {language === 'es' ? 'Archivo editorial de Rust' : 'Rust editorial archive'}
        </h2>
      </div>

      <div className="mt-8 grid gap-5 xl:grid-cols-3">
        {publications.map((publication) => (
          <article
            key={publication.slug}
            className="section-panel flex h-full flex-col rounded-[1.75rem] p-6"
          >
            <p className="section-muted text-xs font-semibold uppercase tracking-[0.2em]">{publication.badge}</p>
            <h3 className="section-title mt-3 text-2xl font-semibold">{publication.title}</h3>
            <p className="section-text mt-3 text-sm leading-7">{publication.excerpt}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {publication.topics.map((topic) => (
                <span
                  key={topic}
                  className="section-tag section-tag-plain rounded-full px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.2em]"
                >
                  {topic}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-6">
              <Link
                href={`/rust/${publication.slug}`}
                className="clear-button inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition"
              >
                {language === 'es' ? 'Leer publicacion' : 'Read article'}
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </BaseSection>
  )
}
