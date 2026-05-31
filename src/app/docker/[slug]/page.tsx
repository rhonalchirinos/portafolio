import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import DockerPublicationContent from './DockerPublicationContent'
import { publicationRepository } from '@/modules/docker/infrastructure/file-system-publication-repository'

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
    return { title: 'Docker' }
  }

  return {
    title: `${publication.title} | Docker`,
    description: publication.excerpt,
  }
}

export default async function DockerPublicationPage({ params }: Props) {
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
    <DockerPublicationContent
      publicationByLanguage={{ es: publicationEs, en: publicationEn }}
      nextPublicationByLanguage={
        nextPublicationEs && nextPublicationEn
          ? { es: nextPublicationEs, en: nextPublicationEn }
          : null
      }
    />
  )
}
