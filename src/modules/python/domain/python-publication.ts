export type PythonPublicationSection = {
  id: string
  title: string
  paragraphs?: string[]
  bullets?: string[]
  note?: string
  code?: {
    language: string
    content: string
    caption?: string
  }
}

export type PythonPublication = {
  slug: string
  order: number
  badge: string
  title: string
  excerpt: string
  description: string
  readingTime: string
  image: string
  topics: string[]
  sections: PythonPublicationSection[]
}
