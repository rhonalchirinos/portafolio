import Image from 'next/image'
import { FaPython } from 'react-icons/fa'

import type { Language } from '@/i18n/translations'

type PythonHeroSectionProps = {
  language: Language
}

const pythonTools = ['Django', 'FastAPI', 'Flask', 'Pandas', 'NumPy', 'Pytest', 'Poetry', 'Jupyter']

export function PythonHeroSection({ language }: PythonHeroSectionProps) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full bg-sky-50 px-4 py-2 text-sky-700">
            <FaPython className="text-xl" />
            <span className="text-sm font-semibold uppercase tracking-[0.25em]">Python</span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold text-slate-900 md:text-5xl">Python</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            {language === 'es'
              ? 'Python nacio a finales de los 80 por iniciativa de Guido van Rossum y se publico oficialmente en 1991 con una idea clara: ofrecer un lenguaje legible, expresivo y practico para resolver problemas reales. Tambien se volvio influyente por su filosofia de codigo claro, su tipado dinamico y un ecosistema enorme que lo hizo fuerte tanto en automatizacion como en web, ciencia de datos e inteligencia artificial.'
              : 'Python emerged in the late 1980s under Guido van Rossum and was officially released in 1991 with a clear goal: to offer a readable, expressive, and practical language for solving real problems. It later became highly influential thanks to its emphasis on clear code, dynamic typing, and a vast ecosystem that made it strong across automation, web development, data science, and artificial intelligence.'}
          </p>

          <div className="mt-6 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              {language === 'es' ? 'Frameworks y herramientas clave' : 'Key frameworks and tools'}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {pythonTools.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 p-4">
          <Image
            src="/python.webp"
            alt={language === 'es' ? 'Seccion de Python' : 'Python section'}
            width={1200}
            height={800}
            className="h-4/5 w-4/5 rounded-[1.25rem] object-contain"
          />
        </div>
      </div>
    </section>
  )
}
