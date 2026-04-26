import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight, FaAws, FaDocker, FaGithub, FaLinkedin, FaPython } from 'react-icons/fa'
import { FaArrowUpRightFromSquare, FaCertificate } from 'react-icons/fa6'
import { SiKubernetes } from 'react-icons/si'

import { dockerExercises } from '@/data/data'

const capabilities = [
  {
    title: 'Backend',
    description:
      'Diseno APIs, organizo logica de negocio e integro servicios con foco en claridad, mantenibilidad y escalabilidad.',
  },
  {
    title: 'DevOps',
    description:
      'Trabajo con contenedores, automatizacion y flujos reproducibles para simplificar despliegues y entornos.',
  },
  {
    title: 'Cloud',
    description:
      'Exploro soluciones en la nube y practicas de infraestructura que conectan desarrollo con operacion real.',
  },
]

const featuredProjects = [
  {
    title: 'API ligera en Docker',
    description:
      'Una API optimizada para ocupar menos de 20 MB usando multi-stage build, una imagen minima y un flujo claro de construccion.',
    href: dockerExercises[0].devto,
    github: dockerExercises[0].github,
    stack: ['Docker', 'Go', 'Alpine'],
  },
  {
    title: 'Cluster Docker Swarm de 3 nodos',
    description:
      'Un ejercicio de orquestacion para entender nodos, coordinacion de servicios y operacion distribuida en contenedores.',
    href: dockerExercises[2].devto,
    github: dockerExercises[2].github,
    stack: ['Docker Swarm', 'Cluster', 'Containers'],
  },
  {
    title: 'Reverse proxy para microservicios',
    description:
      'Configuracion de un proxy para enrutar multiples servicios y acercar la arquitectura a un escenario mas realista.',
    href: dockerExercises[3].devto,
    github: dockerExercises[3].github,
    stack: ['NGINX', 'Docker Compose', 'Microservices'],
  },
  {
    title: 'Primera publicacion editorial: certificacion Python',
    description:
      'Una guia larga con todo el contenido base que necesitas estudiar para preparar una certificacion inicial de Python.',
    href: '/python',
    stack: ['Editorial', 'Python', 'PCEP'],
  },
]

const notes = [
  {
    title: 'Python',
    description: 'Fundamentos, ejercicios y apuntes orientados a reforzar bases de programacion.',
    href: '/python',
    icon: <FaPython className="text-2xl text-sky-700" />,
  },
  {
    title: 'Docker',
    description: 'Contenedores, imagenes, volumenes, swarm y practicas enfocadas en despliegue.',
    href: '/docker',
    icon: <FaDocker className="text-2xl text-sky-600" />,
  },
  {
    title: 'AWS',
    description: 'Espacio para consolidar experiencia cloud y documentar servicios clave.',
    href: '/aws',
    icon: <FaAws className="text-2xl text-amber-500" />,
  },
  {
    title: 'Kubernetes',
    description: 'Ruta de aprendizaje para orquestacion, despliegues y operacion en clusters.',
    href: '/kubernetes',
    icon: <SiKubernetes className="text-2xl text-cyan-600" />,
  },
]

export default function Home() {
  return (
    <div className="pb-20 pt-8">
      <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-100 via-white to-sky-50 text-slate-900 shadow-xl">
        <div className="grid gap-10 px-8 py-10 md:px-12 lg:grid-cols-[1.4fr_0.9fr] lg:px-14 lg:py-14">
          <div className="relative z-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">Portfolio and technical journal</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-balance md:text-5xl">
              Rhonal Chirinos
            </h1>
            <p className="mt-3 text-lg font-medium text-slate-700 md:text-xl">
              Software Developer enfocado en backend, contenedores y cloud.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Construyo soluciones practicas, documento procesos tecnicos y convierto aprendizaje en implementaciones
              reales. Este espacio reune proyectos, ejercicios y notas que muestran como trabajo y como pienso la
              ingenieria.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                Ver proyectos
                <FaArrowRight />
              </Link>
              <Link
                href="/rhonalchirinos.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Descargar CV
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-600">
              <Link
                href="https://github.com/rhonalchirinos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-4 py-2 transition hover:border-sky-400 hover:text-sky-700"
              >
                <FaGithub />
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/rhonal/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-4 py-2 transition hover:border-sky-400 hover:text-sky-700"
              >
                <FaLinkedin />
                LinkedIn
              </Link>
              <Link
                href="/profile"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-4 py-2 transition hover:border-sky-400 hover:text-sky-700"
              >
                Ver perfil
              </Link>
              <Link
                href="https://www.credly.com/users/rhonalchirinos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-4 py-2 transition hover:border-sky-400 hover:text-sky-700"
              >
                Credly
                <FaArrowUpRightFromSquare className="text-xs" />
              </Link>
            </div>
          </div>

          <div className="relative flex items-end justify-center">
            <div className="absolute left-1/2 top-6 h-52 w-52 -translate-x-1/2 rounded-full bg-sky-200/70 blur-3xl" />
            <div className="relative w-full max-w-sm rounded-[2rem] border border-slate-200 bg-white/80 p-5 backdrop-blur">
              <div className="rounded-[1.5rem] bg-slate-200/90 p-3">
                <Image
                  src="/me.webp"
                  alt="Rhonal Chirinos"
                  width={720}
                  height={720}
                  className="h-auto w-full rounded-[1.25rem] object-cover"
                  priority
                />
              </div>
              <div className="mt-5 grid gap-3 text-sm text-slate-700">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-sky-700">Focus</p>
                  <p className="mt-2 text-base font-medium">Backend, contenedores, automatizacion y aprendizaje aplicado.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-sky-700">Approach</p>
                  <p className="mt-2 text-base font-medium">Practica tecnica, documentacion clara y soluciones orientadas a implementacion.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {capabilities.map((capability) => (
          <article key={capability.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-700">{capability.title}</p>
            <p className="mt-4 text-base leading-7 text-slate-600">{capability.description}</p>
          </article>
        ))}
      </section>

      <section id="projects" className="mt-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-700">Technical showcase</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">Proyectos destacados</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Una seleccion de ejercicios y trabajos tecnicos que reflejan mi forma de construir, documentar y resolver
            problemas.
          </p>
        </div>

        <div className="mt-8 grid gap-5 xl:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-slate-900">{project.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={project.href || '#'}
                  target={project.href?.startsWith('http') ? '_blank' : '_self'}
                  rel={project.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-900"
                >
                  Ver detalle
                  <FaArrowRight className="text-xs" />
                </Link>
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
                  >
                    <FaGithub />
                    GitHub
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-700">How I work</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">Como trabajo</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Me interesa construir software claro, mantenible y cercano a escenarios reales. Uso este sitio para mostrar
            proyectos, documentar aprendizajes y convertir practica tecnica en evidencia visible.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Mas que acumular tecnologias, me interesa entender como se disenan, despliegan y sostienen soluciones
            utiles. Por eso este portfolio mezcla perfil profesional, practica tecnica y documentacion.
          </p>
        </article>

        <article className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Notes and learning</p>
          <h2 className="mt-3 text-3xl font-semibold">Notas y documentacion tecnica</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Tambien uso este espacio como laboratorio tecnico para organizar apuntes, ejercicios y documentacion
            practica sobre las tecnologias que estudio y aplico.
          </p>
          <div className="mt-8 grid gap-4">
            {notes.map((note) => (
              <Link
                key={note.title}
                href={note.href}
                className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-4 transition hover:border-sky-300/50 hover:bg-white/10"
              >
                <div className="mt-1">{note.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold">{note.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{note.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-indigo-50 p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-950 text-white">
              <FaCertificate className="text-xl" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-700">Certifications</p>
              <h2 className="mt-1 text-3xl font-semibold text-slate-900">Credenciales y badges</h2>
            </div>
          </div>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Tambien documento mi progreso profesional a traves de certificaciones y badges. Uso Credly para centralizar
            credenciales verificables y dejar visible la evolucion de mi perfil tecnico.
          </p>
          <Link
            href="https://www.credly.com/users/rhonalchirinos"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-indigo-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-900"
          >
            Ver perfil en Credly
            <FaArrowUpRightFromSquare className="text-xs" />
          </Link>
        </article>

        <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-700">Professional signal</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">Formacion visible, trabajo verificable</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            El objetivo no es solo listar tecnologias, sino mostrar evidencia. Por eso el sitio ahora conecta proyectos,
            notas tecnicas y credenciales en un mismo recorrido: lo que estudio, lo que construyo y lo que puedo
            demostrar.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Projects</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">Implementacion real</p>
            </div>
            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Notes</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">Aprendizaje aplicado</p>
            </div>
            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Certifications</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">Credenciales verificables</p>
            </div>
          </div>
        </article>
      </section>

      <section className="mt-16 rounded-[2rem] border border-slate-200 bg-gradient-to-r from-white to-slate-100 px-8 py-10 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-700">Next step</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Sigamos la conversacion</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Si quieres ver mas detalle sobre mi experiencia, mis proyectos o mi forma de trabajar, puedes revisar mi
              perfil, explorar mis repositorios o descargar mi CV.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/profile"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-900"
            >
              Ver perfil
            </Link>
            <Link
              href="https://github.com/rhonalchirinos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-500"
            >
              Ir a GitHub
            </Link>
            <Link
              href="/rhonalchirinos.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-500"
            >
              Descargar CV
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
