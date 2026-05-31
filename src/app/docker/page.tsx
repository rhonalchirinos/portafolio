import DockerPageContent from './DockerPageContent'
import { publicationRepository } from '@/modules/docker/infrastructure/file-system-publication-repository'

export default function DockerPage() {
  const publicationsByLanguage = {
    es: publicationRepository.findAll('es'),
    en: publicationRepository.findAll('en'),
  }

  return <DockerPageContent publicationsByLanguage={publicationsByLanguage} />
}
