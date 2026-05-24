'use client'

import { FaAws } from 'react-icons/fa'

import { useLanguage } from '@/components/LanguageToggle'

export default function AwsPage() {
  const { language } = useLanguage()

  return (
    <div className="portfolio-theme pb-20">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sky-300">
              <FaAws className="text-xl" />
              <span className="mono-badge text-sm font-semibold uppercase">AWS</span>
            </div>
            <h1 className="mt-6 text-4xl font-semibold text-slate-900 md:text-5xl">AWS</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              {language === 'es'
                ? 'Esta area resume infraestructura y servicios cloud orientados a backend: compute, API management, almacenamiento, autenticacion y patrones serverless listos para operacion real.'
                : 'This area summarizes cloud infrastructure and backend-oriented services: compute, API management, storage, authentication, and serverless patterns ready for real-world operations.'}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Lambda', 'API Gateway', 'DynamoDB', 'Cognito', 'S3', 'SAM'].map((item) => (
                <span
                  key={item}
                  className="mono-badge rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <article className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
              {language === 'es' ? 'Mapa cloud' : 'Cloud map'}
            </p>
            <div className="diagram-grid mt-5">
              {(
                language === 'es'
                  ? ['Cliente', 'API Gateway', 'Lambda', 'DynamoDB / S3', 'Observabilidad']
                  : ['Client', 'API Gateway', 'Lambda', 'DynamoDB / S3', 'Observability']
              ).map((item, index) => (
                <div key={item} className="grid gap-3">
                  <div className="diagram-node">
                    <p className="mono-badge text-xs font-semibold uppercase text-sky-300">
                      {language === 'es' ? `Nodo ${index + 1}` : `Node ${index + 1}`}
                    </p>
                    <p className="mt-2 text-base font-semibold text-slate-900">{item}</p>
                  </div>
                  {index < 4 && <div className="flex justify-center text-sky-300">↓</div>}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
