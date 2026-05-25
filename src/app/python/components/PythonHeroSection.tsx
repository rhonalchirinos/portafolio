import Image from 'next/image'
import { FaPython } from 'react-icons/fa'

import { BaseSection } from '@/components/sections/BaseSection'
import type { Language } from '@/i18n/translations'

type PythonHeroSectionProps = {
  language: Language
}

const pythonTools = ['Django', 'FastAPI', 'Flask', 'Pandas', 'NumPy', 'Pytest', 'Poetry', 'Jupyter']

export function PythonHeroSection({ language }: PythonHeroSectionProps) {
  return (
    <BaseSection tone="hero" padding="lg">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="section-badge px-4 py-2">
            <FaPython className="text-xl" />
            <span className="text-sm font-semibold uppercase tracking-[0.25em]">Python</span>
          </div>

          <h1 className="section-title mt-6 text-4xl font-semibold md:text-5xl">Python</h1>
          <p className="section-text mt-5 max-w-3xl text-lg leading-8">
            {language === 'es'
              ? 'Python nacio a finales de los 80 por iniciativa de Guido van Rossum y se publico oficialmente en 1991 con una idea clara: ofrecer un lenguaje legible, expresivo y practico para resolver problemas reales. Tambien se volvio influyente por su filosofia de codigo claro, su tipado dinamico y un ecosistema enorme que lo hizo fuerte tanto en automatizacion como en web, ciencia de datos e inteligencia artificial.'
              : 'Python emerged in the late 1980s under Guido van Rossum and was officially released in 1991 with a clear goal: to offer a readable, expressive, and practical language for solving real problems. It later became highly influential thanks to its emphasis on clear code, dynamic typing, and a vast ecosystem that made it strong across automation, web development, data science, and artificial intelligence.'}
          </p>

          <div className="mt-6 max-w-3xl">
            <p className="section-muted text-xs font-semibold uppercase tracking-[0.22em]">
              {language === 'es' ? 'Frameworks y herramientas clave' : 'Key frameworks and tools'}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {pythonTools.map((item) => (
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

        <div className="section-media-frame relative flex items-center justify-center overflow-hidden rounded-[1.75rem] p-4">
          <Image
            src="/python.webp"
            alt={language === 'es' ? 'Seccion de Python' : 'Python section'}
            width={1200}
            height={800}
            className="h-4/5 w-4/5 rounded-[1.25rem] object-contain"
          />
        </div>
      </div>
    </BaseSection>
  )
}
