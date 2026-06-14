import { SiRust } from 'react-icons/si'

import { BaseSection } from '@/components/sections/BaseSection'
import type { Language } from '@/i18n/translations'

type RustHeroSectionProps = {
  language: Language
}

const rustTopics = ['Ownership', 'Borrowing', 'Cargo', 'Clippy', 'rustfmt', 'Traits', 'Lifetimes', 'Tokio']

export function RustHeroSection({ language }: RustHeroSectionProps) {
  return (
    <BaseSection tone="hero" padding="lg">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-[color:var(--app-border-strong)] bg-[color:var(--app-surface-strong)] px-4 py-2 text-[color:var(--app-accent)] shadow-sm">
            <SiRust className="text-xl" />
            <span className="text-sm font-semibold uppercase tracking-[0.25em]">Rust</span>
          </div>

          <h1 className="section-title mt-6 text-4xl font-semibold md:text-5xl">Rust</h1>
          <p className="section-text mt-5 max-w-3xl text-lg leading-8">
            {language === 'es'
              ? 'Rust es un lenguaje de sistemas moderno orientado a rendimiento, seguridad de memoria y herramientas solidas desde el inicio. Esta seccion organiza notas introductorias para empezar con el lenguaje y entender sus conceptos base sin perderse en teoria innecesaria.'
              : 'Rust is a modern systems language focused on performance, memory safety, and strong tooling from the start. This section organizes introductory notes so you can begin with the language and understand its core ideas without getting lost in unnecessary theory.'}
          </p>

          <div className="mt-6 max-w-3xl">
            <p className="section-muted text-xs font-semibold uppercase tracking-[0.22em]">
              {language === 'es' ? 'Temas clave' : 'Key topics'}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {rustTopics.map((item) => (
                <span
                  key={item}
                  className="section-tag rounded-full px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.18em]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="section-media-frame flex min-h-[280px] items-center justify-center rounded-[1.75rem] p-8">
          <div className="flex h-44 w-44 items-center justify-center rounded-full border border-white/20 bg-black/20">
            <SiRust className="text-[7rem] text-white" />
          </div>
        </div>
      </div>
    </BaseSection>
  )
}
