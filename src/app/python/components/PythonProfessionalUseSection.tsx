import type { Language } from '@/i18n/translations'

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
    <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-700">
        {language === 'es' ? 'Uso profesional' : 'Professional use'}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-slate-900">
        {language === 'es' ? 'Donde entra Python' : 'Where Python fits'}
      </h2>
      <div className="mt-6 grid gap-3">
        {items.map((item) => (
          <div key={item} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm leading-7 text-slate-600">{item}</p>
          </div>
        ))}
      </div>
    </article>
  )
}
