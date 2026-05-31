export type PublicationSection = {
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

export type Publication = {
  slug: string
  order: number
  badge: string
  title: string
  excerpt: string
  description: string
  readingTime: string
  image: string
  topics: string[]
  sections: PublicationSection[]
}
