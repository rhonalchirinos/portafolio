import type { Language } from '@/i18n/translations'

type PythonLearningPathSectionProps = {
  language: Language
}

export function PythonLearningPathSection({ language }: PythonLearningPathSectionProps) {
  const steps =
    language === 'es'
      ? ['Fundamentos', 'Entorno', 'Paquetes', 'Buenas practicas', 'Automatizacion']
      : ['Fundamentals', 'Environment', 'Packages', 'Best practices', 'Automation']

  return (
    <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-700">
        {language === 'es' ? 'Flujo' : 'Flow'}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-slate-900">
        {language === 'es' ? 'Ruta de aprendizaje' : 'Learning path'}
      </h2>
      <div className="diagram-grid mt-6">
        {steps.map((item, index) => (
          <div key={item} className="grid gap-3">
            <div className="diagram-node">
              <p className="mono-badge text-xs font-semibold uppercase text-sky-300">
                {language === 'es' ? `Paso ${index + 1}` : `Step ${index + 1}`}
              </p>
              <p className="mt-2 text-base font-semibold text-slate-900">{item}</p>
            </div>
            {index < steps.length - 1 && <div className="flex justify-center text-sky-300">↓</div>}
          </div>
        ))}
      </div>
    </article>
  )
}
