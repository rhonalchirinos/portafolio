import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import PythonPublicationContent from './PythonPublicationContent'
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
    <PythonPublicationContent publication={publication} nextPublication={nextPublication} />
  )
}
