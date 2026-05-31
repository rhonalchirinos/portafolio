import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import RustPublicationContent from './RustPublicationContent'
import { publicationRepository } from '@/modules/rust/infrastructure/file-system-publication-repository'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return publicationRepository.findAll('es').map((publication) => ({
    slug: publication.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const publication = publicationRepository.findBySlug(slug, 'es')

  if (!publication) {
    return { title: 'Rust' }
  }

  return {
    title: `${publication.title} | Rust`,
    description: publication.excerpt,
  }
}

export default async function RustPublicationPage({ params }: Props) {
  const { slug } = await params
  const publicationEs = publicationRepository.findBySlug(slug, 'es')
  const publicationEn = publicationRepository.findBySlug(slug, 'en')

  if (!publicationEs || !publicationEn) {
    notFound()
  }

  const spanishPublications = publicationRepository.findAll('es')
  const currentIndex = spanishPublications.findIndex((item) => item.slug === publicationEs.slug)
  const nextPublicationEs = spanishPublications[currentIndex + 1] ?? null
  const nextPublicationEn = nextPublicationEs ? publicationRepository.findBySlug(nextPublicationEs.slug, 'en') : null

  return (
    <RustPublicationContent
      publicationByLanguage={{ es: publicationEs, en: publicationEn }}
      nextPublicationByLanguage={
        nextPublicationEs && nextPublicationEn
          ? { es: nextPublicationEs, en: nextPublicationEn }
          : null
      }
    />
  )
}
