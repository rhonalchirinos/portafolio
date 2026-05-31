'use client'

import { useLanguage } from '@/components/LanguageToggle'
import type { Language } from '@/i18n/translations'
import type { Publication } from '@/modules/docker/domain/publication'
import { DockerEditorialArchiveSection } from './components/DockerEditorialArchiveSection'
import { DockerHeroSection } from './components/DockerHeroSection'

type Props = {
  publicationsByLanguage: Record<Language, Publication[]>
}

export default function DockerPageContent({ publicationsByLanguage }: Props) {
  const { language } = useLanguage()
  const publications = publicationsByLanguage[language]

  return (
    <div className="section-theme pb-20">
      <DockerHeroSection language={language} />
      <DockerEditorialArchiveSection language={language} publications={publications} />
    </div>
  )
}
