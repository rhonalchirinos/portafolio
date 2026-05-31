'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import HighlightBlock from '@/components/HighlightBlock'
import { useLanguage } from '@/components/LanguageToggle'
import { BaseSection } from '@/components/sections/BaseSection'
import type { Language } from '@/i18n/translations'
import type { Publication } from '@/modules/docker/domain/publication'

type Props = {
  publicationByLanguage: Record<Language, Publication>
  nextPublicationByLanguage: Record<Language, Publication> | null
}

export default function DockerPublicationContent({ publicationByLanguage, nextPublicationByLanguage }: Props) {
  const { language } = useLanguage()
  const publication = publicationByLanguage[language]
  const nextPublication = nextPublicationByLanguage ? nextPublicationByLanguage[language] : null

  return (
    <article className="section-theme pb-20">
      <BaseSection padding="lg">
        <Link
          href="/docker"
          className="ghost-button inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition"
        >
          <FaArrowLeft className="text-xs" />
          {language === 'es' ? 'Volver a Docker' : 'Back to Docker'}
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="section-kicker text-sm font-semibold uppercase tracking-[0.25em]">
              {publication.badge}
            </p>
            <h1 className="section-title mt-4 text-4xl font-semibold md:text-5xl">{publication.title}</h1>
            <p className="section-text mt-5 max-w-4xl text-lg leading-8">{publication.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {publication.topics.map((topic) => (
                <span
                  key={topic}
                  className="section-tag mono-badge rounded-full px-3 py-1 text-xs font-semibold uppercase"
                >
                  {topic}
                </span>
              ))}
            </div>

            <p className="section-muted mt-4 text-sm font-semibold uppercase tracking-[0.2em]">
              {publication.readingTime}
            </p>
          </div>

          <div className="section-media-frame relative overflow-hidden rounded-[1.75rem] p-4">
            <Image
              src={publication.image}
              alt={publication.title}
              width={1200}
              height={800}
              className="h-full w-full rounded-[1.25rem] object-cover"
            />
          </div>
        </div>
      </BaseSection>

      <div className="mt-8 space-y-6">
        {publication.sections.map((section) => (
          <BaseSection key={section.id}>
            <h2 className="section-title text-3xl font-semibold">{section.title}</h2>

            {section.paragraphs && (
              <div className="section-text mt-4 space-y-4 text-base leading-8">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}

            {section.bullets && (
              <ul className="section-text mt-5 list-disc space-y-3 pl-6 text-base leading-8">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}

            {section.note && (
              <div className="section-note mt-6 rounded-[1.5rem] p-5">
                <p className="section-kicker text-sm font-semibold uppercase tracking-[0.2em]">
                  {language === 'es' ? 'Nota importante' : 'Important note'}
                </p>
                <p className="section-text mt-2 text-sm leading-7">{section.note}</p>
              </div>
            )}

            {section.code && (
              <div className="mt-6">
                {section.code.caption && (
                  <p className="section-muted mb-3 text-sm font-semibold uppercase tracking-[0.2em]">
                    {section.code.caption}
                  </p>
                )}
                <HighlightBlock language={section.code.language}>{section.code.content}</HighlightBlock>
              </div>
            )}
          </BaseSection>
        ))}
      </div>

      {nextPublication && (
        <BaseSection className="mt-8" tone="gradient">
          <p className="section-kicker text-sm font-semibold uppercase tracking-[0.25em]">
            {language === 'es' ? 'Siguiente lectura' : 'Next read'}
          </p>
          <h2 className="section-title mt-3 text-3xl font-semibold">{nextPublication.title}</h2>
          <p className="section-text mt-4 max-w-3xl text-base leading-8">{nextPublication.excerpt}</p>
          <Link
            href={`/docker/${nextPublication.slug}`}
            className="clear-button mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition"
          >
            {language === 'es' ? 'Ir a la siguiente publicacion' : 'Go to the next article'}
            <FaArrowRight className="text-xs" />
          </Link>
        </BaseSection>
      )}
    </article>
  )
}
