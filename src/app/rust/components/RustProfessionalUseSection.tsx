import type { Language } from '@/i18n/translations'
import { BaseSection } from '@/components/sections/BaseSection'

type RustProfessionalUseSectionProps = {
  language: Language
}

export function RustProfessionalUseSection({ language }: RustProfessionalUseSectionProps) {
  const items =
    language === 'es'
      ? [
          'CLI rapidas para automatizacion y tooling interno',
          'Servicios backend con foco en rendimiento y seguridad',
          'Herramientas de infraestructura, redes y observabilidad',
          'WebAssembly para ejecutar logica Rust en el navegador',
          'Sistemas donde importa controlar memoria y concurrencia',
        ]
      : [
          'Fast CLIs for automation and internal tooling',
          'Backend services focused on performance and safety',
          'Infrastructure, networking, and observability tooling',
          'WebAssembly for running Rust logic in the browser',
          'Systems where memory and concurrency control matter',
        ]

  return (
    <BaseSection as="article">
      <p className="section-kicker text-sm font-semibold uppercase tracking-[0.25em]">
        {language === 'es' ? 'Uso profesional' : 'Professional use'}
      </p>
      <h2 className="section-title mt-3 text-3xl font-semibold">
        {language === 'es' ? 'Donde entra Rust' : 'Where Rust fits'}
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
