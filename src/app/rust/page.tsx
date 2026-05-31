import RustPageContent from './RustPageContent'
import { publicationRepository } from '@/modules/rust/infrastructure/file-system-publication-repository'

export default function RustPage() {
  const publicationsByLanguage = {
    es: publicationRepository.findAll('es'),
    en: publicationRepository.findAll('en'),
  }

  return <RustPageContent publicationsByLanguage={publicationsByLanguage} />
}
