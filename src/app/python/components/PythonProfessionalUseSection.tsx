import type { Language } from '@/i18n/translations'
import { BaseSection } from '@/components/sections/BaseSection'

type PythonProfessionalUseSectionProps = {
  language: Language
}

export function PythonProfessionalUseSection({ language }: PythonProfessionalUseSectionProps) {
  const items =
    language === 'es'
      ? [
          'Automatizacion de tareas y scripts internos',
          'APIs backend con Flask, Django o FastAPI',
          'Procesamiento de datos y pipelines',
          'Testing, tooling y control de calidad',
          'Integracion con cloud, IA y serverless',
        ]
      : [
          'Task automation and internal scripts',
          'Backend APIs with Flask, Django, or FastAPI',
          'Data processing and pipelines',
          'Testing, tooling, and quality control',
          'Integration with cloud, AI, and serverless workflows',
        ]

  return (
    <BaseSection as="article">
      <p className="section-kicker text-sm font-semibold uppercase tracking-[0.25em]">
        {language === 'es' ? 'Uso profesional' : 'Professional use'}
      </p>
      <h2 className="section-title mt-3 text-3xl font-semibold">
        {language === 'es' ? 'Donde entra Python' : 'Where Python fits'}
      </h2>
      <div className="mt-6 grid gap-3">
        {items.map((item) => (
          <div key={item} className="section-panel rounded-[1.25rem] p-4">
            <p className="section-text text-sm leading-7">{item}</p>
          </div>
        ))}
      </div>
    </BaseSection>
  )
}
