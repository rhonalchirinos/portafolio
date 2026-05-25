import type { Language } from '@/i18n/translations'
import { BaseSection } from '@/components/sections/BaseSection'

type PythonLearningPathSectionProps = {
  language: Language
}

export function PythonLearningPathSection({ language }: PythonLearningPathSectionProps) {
  const steps =
    language === 'es'
      ? ['Fundamentos', 'Entorno', 'Paquetes', 'Buenas practicas', 'Automatizacion']
      : ['Fundamentals', 'Environment', 'Packages', 'Best practices', 'Automation']

  return (
    <BaseSection as="article">
      <p className="section-kicker text-sm font-semibold uppercase tracking-[0.25em]">
        {language === 'es' ? 'Flujo' : 'Flow'}
      </p>
      <h2 className="section-title mt-3 text-3xl font-semibold">
        {language === 'es' ? 'Ruta de aprendizaje' : 'Learning path'}
      </h2>
      <div className="diagram-grid mt-6">
        {steps.map((item, index) => (
          <div key={item} className="grid gap-3">
            <div className="diagram-node">
              <p className="mono-badge section-muted text-xs font-semibold uppercase">
                {language === 'es' ? `Paso ${index + 1}` : `Step ${index + 1}`}
              </p>
              <p className="section-title mt-2 text-base font-semibold">{item}</p>
            </div>
            {index < steps.length - 1 && <div className="section-muted flex justify-center">↓</div>}
          </div>
        ))}
      </div>
    </BaseSection>
  )
}
