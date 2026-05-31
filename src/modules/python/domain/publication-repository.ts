import type { Language } from '@/i18n/translations'
import type { Publication } from './publication'

export interface PublicationRepository {
  findAll(language: Language): Publication[]
  findBySlug(slug: string, language: Language): Publication | null
}
