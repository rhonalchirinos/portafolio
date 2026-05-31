import PythonPageContent from './PythonPageContent'
import { publicationRepository } from '@/modules/python/infrastructure/file-system-publication-repository'

export default function PythonPage() {
  const publicationsByLanguage = {
    es: publicationRepository.findAll('es'),
    en: publicationRepository.findAll('en'),
  }

  return <PythonPageContent publicationsByLanguage={publicationsByLanguage} />
}
