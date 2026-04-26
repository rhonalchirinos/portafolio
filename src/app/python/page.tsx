import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight, FaPython } from 'react-icons/fa'

import { pythonPublicationRepository } from '@/modules/python/infrastructure/in-memory-python-publication-repository'

const publications = pythonPublicationRepository.findAll()

export default function PythonPage() {
  return (
    <div className="pb-20">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full bg-sky-50 px-4 py-2 text-sky-700">
              <FaPython className="text-xl" />
              <span className="text-sm font-semibold uppercase tracking-[0.25em]">Python</span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold text-slate-900 md:text-5xl">Python</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Esta seccion funciona como una linea editorial de publicaciones sobre Python. Reune guias utiles, notas
              importantes y piezas enfocadas en fundamentos, buenas practicas y flujo de trabajo real.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              La idea no es acumular apuntes sueltos, sino construir publicaciones con contexto, criterio tecnico y
              contenido que realmente valga la pena consultar de nuevo.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 p-4">
            <Image
              src="/python.webp"
              alt="Python section"
              width={1200}
              height={800}
              className="h-full w-full rounded-[1.25rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-700">Publicaciones</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">Archivo editorial de Python</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Cada publicacion vive en su propia pagina y aborda un tema concreto. La primera esta orientada a
            certificacion, la segunda a entornos virtuales y la tercera a manejo de dependencias con `pip`.
          </p>
        </div>

        <div className="mt-8 grid gap-5 xl:grid-cols-3">
          {publications.map((publication) => (
            <article
              key={publication.slug}
              className="flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{publication.badge}</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">{publication.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{publication.excerpt}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {publication.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-6">
                <Link
                  href={`/python/${publication.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-indigo-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-900"
                >
                  Leer publicacion
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
