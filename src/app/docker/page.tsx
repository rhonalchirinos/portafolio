'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight, FaDocker } from 'react-icons/fa'

import { useLanguage } from '@/components/LanguageToggle'
import { dockerExercises } from '@/data/data'

const dockerHighlights = [
  'Containers',
  'Images',
  'Compose',
  'Swarm',
  'Volumes',
  'NGINX',
  'DevOps',
  'Networking',
]

const dockerArchive = [
  {
    badge: 'Ejercicio 01',
    title: 'API ligera en Docker',
    excerpt:
      'Construccion de una API menor a 20 MB usando multi-stage build, Alpine y un flujo claro de empaquetado.',
    href: dockerExercises[0].devto,
    github: dockerExercises[0].github,
    topics: ['Docker', 'API', 'Go', 'Alpine'],
  },
  {
    badge: 'Ejercicio 02',
    title: 'Volumenes para MySQL, PostgreSQL y MariaDB',
    excerpt:
      'Persistencia de datos en contenedores con una comparacion practica entre motores relacionales y montaje de volumenes.',
    href: dockerExercises[1].devto,
    github: dockerExercises[1].github,
    topics: ['Docker', 'MySQL', 'Postgres', 'MariaDB', 'Volumes'],
  },
  {
    badge: 'Ejercicio 03',
    title: 'Cluster Docker Swarm de 3 nodos',
    excerpt:
      'Configuracion de un cluster distribuido para entender nodos, coordinacion de servicios y operacion de workloads.',
    href: dockerExercises[2].devto,
    github: dockerExercises[2].github,
    topics: ['Docker Swarm', 'Cluster', 'Containers'],
  },
  {
    badge: 'Ejercicio 04',
    title: 'Reverse proxy para microservicios',
    excerpt:
      'Enrutamiento de multiples servicios con NGINX, Docker Compose y Swarm para acercar la arquitectura a un escenario real.',
    href: dockerExercises[3].devto,
    github: dockerExercises[3].github,
    topics: ['NGINX', 'Compose', 'Swarm', 'Microservices'],
  },
]

export default function DockerPage() {
  const { language } = useLanguage()

  return (
    <div className="portfolio-theme pb-20">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full bg-sky-50 px-4 py-2 text-sky-700">
              <FaDocker className="text-xl" />
              <span className="text-sm font-semibold uppercase tracking-[0.25em]">Docker</span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold text-slate-900 md:text-5xl">Docker</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              {language === 'es'
                ? 'Esta seccion funciona como un archivo tecnico sobre Docker. Reune ejercicios reales, notas operativas y piezas enfocadas en imagenes minimas, persistencia, redes, proxy y despliegue de servicios.'
                : 'This section works as a technical archive for Docker. It brings together real exercises, operational notes, and pieces focused on minimal images, persistence, networking, proxying, and service deployment.'}
            </p>

            <div className="mt-6 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                {language === 'es' ? 'Temas y herramientas clave' : 'Key topics and tools'}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {dockerHighlights.map((item) => (
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
              src="/docker.webp"
              alt={language === 'es' ? 'Seccion de Docker' : 'Docker section'}
              width={1200}
              height={800}
              className="h-4/5 w-4/5 rounded-[1.25rem] object-contain"
            />
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-700">
            {language === 'es' ? 'Publicaciones' : 'Publications'}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
            {language === 'es' ? 'Archivo editorial de Docker' : 'Docker editorial archive'}
          </h2>
        </div>

        <div className="mt-8 grid gap-5 xl:grid-cols-2">
          {dockerArchive.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{item.badge}</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.excerpt}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                <Link
                  href={item.href || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clear-button inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition"
                >
                  {language === 'es' ? 'Leer publicacion' : 'Read article'}
                  <FaArrowRight className="text-xs" />
                </Link>
                {item.github && (
                  <Link
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ghost-button inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition"
                  >
                    GitHub
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  )
}
