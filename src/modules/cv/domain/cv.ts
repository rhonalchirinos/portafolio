export type CvLink = {
  label: string
  url: string
}

export type CvEntry = {
  title: string
  organization?: string
  period?: string
  paragraphs: string[]
  bullets: string[]
}

export type CvSection = {
  title: string
  paragraphs: string[]
  bullets: string[]
  entries: CvEntry[]
}

export type Cv = {
  name: string
  headline: string
  email?: string
  location?: string
  links: CvLink[]
  featuredCredential?: CvLink
  summary: string[]
  sections: CvSection[]
}
