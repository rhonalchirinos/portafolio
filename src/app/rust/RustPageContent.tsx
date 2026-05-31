'use client'

import { useLanguage } from '@/components/LanguageToggle'
import type { Language } from '@/i18n/translations'
import type { Publication } from '@/modules/rust/domain/publication'
import { RustEditorialArchiveSection } from './components/RustEditorialArchiveSection'
import { RustHeroSection } from './components/RustHeroSection'
import { RustLearningPathSection } from './components/RustLearningPathSection'
import { RustProfessionalUseSection } from './components/RustProfessionalUseSection'

type Props = {
  publicationsByLanguage: Record<Language, Publication[]>
}

export default function RustPageContent({ publicationsByLanguage }: Props) {
  const { language } = useLanguage()
  const publications = publicationsByLanguage[language]

  return (
    <div className="section-theme pb-20">
      <RustHeroSection language={language} />

      <RustEditorialArchiveSection language={language} publications={publications} />

      <section className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <RustLearningPathSection language={language} />
        <RustProfessionalUseSection language={language} />
      </section>
    </div>
  )
}
