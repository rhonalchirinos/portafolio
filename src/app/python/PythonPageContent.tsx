'use client'

import { useLanguage } from '@/components/LanguageToggle'
import type { Language } from '@/i18n/translations'
import type { Publication } from '@/modules/python/domain/publication'
import { PythonEditorialArchiveSection } from './components/PythonEditorialArchiveSection'
import { PythonHeroSection } from './components/PythonHeroSection'
import { PythonLearningPathSection } from './components/PythonLearningPathSection'
import { PythonProfessionalUseSection } from './components/PythonProfessionalUseSection'

type Props = {
  publicationsByLanguage: Record<Language, Publication[]>
}

export default function PythonPageContent({ publicationsByLanguage }: Props) {
  const { language } = useLanguage()
  const publications = publicationsByLanguage[language]

  return (
    <div className="section-theme pb-20">
      <PythonHeroSection language={language} />

      <PythonEditorialArchiveSection language={language} publications={publications} />

      <section className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <PythonLearningPathSection language={language} />
        <PythonProfessionalUseSection language={language} />
      </section>
    </div>
  )
}
