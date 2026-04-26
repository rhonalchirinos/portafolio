import type { PythonPublication } from './python-publication'

export interface PythonPublicationRepository {
  findAll(): PythonPublication[]
  findBySlug(slug: string): PythonPublication | null
}
