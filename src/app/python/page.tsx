'use client'

import { useLanguage } from '@/components/LanguageToggle'
import { pythonPublicationRepository } from '@/modules/python/infrastructure/in-memory-python-publication-repository'
import { localizePythonPublications } from '@/modules/python/infrastructure/python-publication-localization'
import { PythonEditorialArchiveSection } from './components/PythonEditorialArchiveSection'
import { PythonHeroSection } from './components/PythonHeroSection'
import { PythonLearningPathSection } from './components/PythonLearningPathSection'
import { PythonProfessionalUseSection } from './components/PythonProfessionalUseSection'

const publications = pythonPublicationRepository.findAll()

export default function PythonPage() {
  const { language } = useLanguage()
  const localizedPublications = localizePythonPublications(publications, language)

  return (
    <div className="section-theme pb-20">
      <PythonHeroSection language={language} />

      <PythonEditorialArchiveSection language={language} publications={localizedPublications} />

      <section className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <PythonLearningPathSection language={language} />
        <PythonProfessionalUseSection language={language} />
      </section>
    </div>
  )
}
