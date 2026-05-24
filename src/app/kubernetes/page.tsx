'use client'

import { GiCubeforce } from 'react-icons/gi'

import { useLanguage } from '@/components/LanguageToggle'

export default function KubernetesPage() {
  const { language } = useLanguage()

  return (
    <div className="portfolio-theme pb-20">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sky-300">
              <GiCubeforce className="text-xl" />
              <span className="mono-badge text-sm font-semibold uppercase">Kubernetes</span>
            </div>
            <h1 className="mt-6 text-4xl font-semibold text-slate-900 md:text-5xl">Kubernetes</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              {language === 'es'
                ? 'Este frente esta reservado para notas de orquestacion, despliegue declarativo, networking interno y operacion de workloads distribuidos sobre clusters.'
                : 'This area is reserved for notes on orchestration, declarative deployment, internal networking, and the operation of distributed workloads across clusters.'}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Pods', 'Deployments', 'Services', 'Ingress', 'ConfigMaps', 'Scaling'].map((item) => (
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
              {language === 'es' ? 'Ruta de despliegue' : 'Deployment path'}
            </p>
            <div className="diagram-grid mt-5">
              {(
                language === 'es'
                  ? ['Manifest', 'Scheduler', 'Replica set de pods', 'Service mesh / ingress', 'Metricas de runtime']
                  : ['Manifest', 'Scheduler', 'Pod replica set', 'Service mesh / ingress', 'Runtime metrics']
              ).map(
                (item, index) => (
                  <div key={item} className="grid gap-3">
                    <div className="diagram-node">
                      <p className="mono-badge text-xs font-semibold uppercase text-sky-300">
                        {language === 'es' ? `Paso ${index + 1}` : `Step ${index + 1}`}
                      </p>
                      <p className="mt-2 text-base font-semibold text-slate-900">{item}</p>
                    </div>
                    {index < 4 && <div className="flex justify-center text-sky-300">↓</div>}
                  </div>
                ),
              )}
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
