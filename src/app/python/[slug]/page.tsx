import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import HighlightBlock from '@/components/HighlightBlock'
import { pythonPublicationRepository } from '@/modules/python/infrastructure/in-memory-python-publication-repository'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return pythonPublicationRepository.findAll().map((publication) => ({
    slug: publication.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const publication = pythonPublicationRepository.findBySlug(slug)

  if (!publication) {
    return { title: 'Python' }
  }

  return {
    title: `${publication.title} | Python`,
    description: publication.excerpt,
  }
}

export default async function PythonPublicationPage({ params }: Props) {
  const { slug } = await params
  const publication = pythonPublicationRepository.findBySlug(slug)

  if (!publication) {
    notFound()
  }

  const publications = pythonPublicationRepository.findAll()
  const currentIndex = publications.findIndex((item) => item.slug === publication.slug)
  const nextPublication = publications[currentIndex + 1] ?? null

  return (
    <article className="pb-20">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <Link
          href="/python"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
        >
          <FaArrowLeft className="text-xs" />
          Volver a Python
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-700">{publication.badge}</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">{publication.title}</h1>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">{publication.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {publication.topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
                >
                  {topic}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{publication.readingTime}</p>
          </div>

          <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 p-4">
            <Image
              src={publication.image}
              alt={publication.title}
              width={1200}
              height={800}
              className="h-full w-full rounded-[1.25rem] object-cover"
            />
          </div>
        </div>
      </section>

      <div className="mt-8 space-y-6">
        {publication.sections.map((section) => (
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
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Nota importante</p>
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

      {nextPublication && (
        <section className="mt-8 rounded-[2rem] border border-slate-200 bg-gradient-to-r from-slate-50 to-sky-50 p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-700">Siguiente lectura</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">{nextPublication.title}</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{nextPublication.excerpt}</p>
          <Link
            href={`/python/${nextPublication.slug}`}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-indigo-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-900"
          >
            Ir a la siguiente publicacion
            <FaArrowRight className="text-xs" />
          </Link>
        </section>
      )}
    </article>
  )
}
