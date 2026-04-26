'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight, FaAws, FaDocker, FaGithub, FaLinkedin, FaPython } from 'react-icons/fa'
import { FaArrowUpRightFromSquare, FaCertificate } from 'react-icons/fa6'
import { SiKubernetes } from 'react-icons/si'

import { useLanguage } from '@/components/LanguageToggle'
import { dockerExercises } from '@/data/data'

export default function Home() {
  const { language } = useLanguage()

  const capabilities = [
    {
      title: language === 'es' ? 'Backend' : 'Backend',
      description:
        language === 'es'
          ? 'Dise\u00f1o APIs, organizo l\u00f3gica de negocio e integro servicios con foco en claridad, mantenibilidad y escalabilidad.'
          : 'Design APIs, organize business logic and integrate services with focus on clarity, maintainability and scalability.',
    },
    {
      title: language === 'es' ? 'DevOps' : 'DevOps',
      description:
        language === 'es'
          ? 'Trabajo con contenedores, automatizaci\u00f3n y flujos reproducibles para simplificar despliegues y entornos.'
          : 'Work with containers, automation and reproducible flows to simplify deployments and environments.',
    },
    {
      title: language === 'es' ? 'Cloud' : 'Cloud',
      description:
        language === 'es'
          ? 'Exploro soluciones en la nube y pr\u00e1cticas de infraestructura que conectan desarrollo con operaci\u00f3n real.'
          : 'Explore cloud solutions and infrastructure practices that connect development with real operation.',
    },
  ]

  const featuredProjects = [
    {
      title: language === 'es' ? 'API ligera en Docker' : 'Lightweight API in Docker',
      description:
        language === 'es'
          ? 'Una API optimizada para ocupar menos de 20 MB usando multi-stage build, una imagen m\u00ednima y un flujo claro de construcci\u00f3n.'
          : 'An optimized API to use less than 20 MB using multi-stage build, a minimal image and a clear build flow.',
      href: dockerExercises[0].devto,
      github: dockerExercises[0].github,
      stack: ['Docker', 'Go', 'Alpine'],
    },
    {
      title: language === 'es' ? 'Cluster Docker Swarm de 3 nodos' : '3-node Docker Swarm Cluster',
      description:
        language === 'es'
          ? 'Un ejercicio de orquestaci\u00f3n para entender nodos, coordinaci\u00f3n de servicios y operaci\u00f3n distribuida en contenedores.'
          : 'An orchestration exercise to understand nodes, service coordination and distributed operation in containers.',
      href: dockerExercises[2].devto,
      github: dockerExercises[2].github,
      stack: ['Docker Swarm', 'Cluster', 'Containers'],
    },
    {
      title: language === 'es' ? 'Reverse proxy para microservicios' : 'Reverse proxy for microservices',
      description:
        language === 'es'
          ? 'Configuraci\u00f3n de un proxy para enrutar multiples servicios y acercar la arquitectura a un escenario mas realista.'
          : 'Configuration of a proxy to route multiple services and bring the architecture to a more realistic scenario.',
      href: dockerExercises[3].devto,
      github: dockerExercises[3].github,
      stack: ['NGINX', 'Docker Compose', 'Microservices'],
    },
    {
      title:
        language === 'es'
          ? 'Primera publicacion editorial: certificacion Python'
          : 'First editorial publication: Python certification',
      description:
        language === 'es'
          ? 'Una guia larga con todo el contenido base que necesitas estudiar para preparar una certificacion inicial de Python.'
          : 'A long guide with all the base content you need to study to prepare for an initial Python certification.',
      href: '/python',
      stack: ['Editorial', 'Python', 'PCEP'],
    },
  ]

  const notes = [
    {
      title: 'Python',
      description:
        language === 'es'
          ? 'Fundamentos, ejercicios y apuntes orientados a reforzar bases de programacion.'
          : 'Fundamentals, exercises and notes aimed at reinforcing programming foundations.',
      href: '/python',
      icon: <FaPython className="text-2xl text-sky-700" />,
    },
    {
      title: 'Docker',
      description:
        language === 'es'
          ? 'Contenedores, imagenes, volumenes, swarm y practicas enfocadas en despliegue.'
          : 'Containers, images, volumes, swarm and deployment-focused practices.',
      href: '/docker',
      icon: <FaDocker className="text-2xl text-sky-600" />,
    },
    {
      title: 'AWS',
      description:
        language === 'es'
          ? 'Espacio para consolidar experiencia cloud y documentar servicios clave.'
          : 'Space to consolidate cloud experience and document key services.',
      href: '/aws',
      icon: <FaAws className="text-2xl text-amber-500" />,
    },
    {
      title: 'Kubernetes',
      description:
        language === 'es'
          ? 'Ruta de aprendizaje para orquestacion, despliegues y operacion en clusters.'
          : 'Learning path for orchestration, deployments and operation in clusters.',
      href: '/kubernetes',
      icon: <SiKubernetes className="text-2xl text-cyan-600" />,
    },
  ]

  return (
    <div className="pb-20 pt-8">
      <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-100 via-white to-sky-50 text-slate-900 shadow-xl">
        <div className="grid gap-10 px-8 py-10 md:px-12 lg:grid-cols-[1.4fr_0.9fr] lg:px-14 lg:py-14">
          <div className="relative z-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
              {language === 'es' ? 'Portafolio y diario t\u00e9cnico' : 'Portfolio and technical journal'}
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-balance md:text-5xl">
              Rhonal Chirinos
            </h1>
            <p className="mt-3 text-lg font-medium text-slate-700 md:text-xl">
              {language === 'es'
                ? 'Software Developer enfocado en backend, contenedores y cloud.'
                : 'Software Developer focused on backend, containers and cloud.'}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              {language === 'es'
                ? 'Construyo soluciones pr\u00e1cticas, documento procesos t\u00e9cnicos y convierto aprendizaje en implementaciones reales. Este espacio reune proyectos, ejercicios y notas que muestran como trabajo y como pienso la ingenier\u00eda.'
                : 'I build practical solutions, document technical processes and convert learning into real implementations. This space brings together projects, exercises and notes that show how I work and how I think about engineering.'}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                {language === 'es' ? 'Ver proyectos' : 'View projects'}
                <FaArrowRight />
              </Link>
              <Link
                href="/rhonalchirinos.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                {language === 'es' ? 'Descargar CV' : 'Download CV'}
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
                {language === 'es' ? 'Ver perfil' : 'View profile'}
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
                  <p className="text-xs uppercase tracking-[0.25em] text-sky-700">
                    {language === 'es' ? 'Enfoque' : 'Focus'}
                  </p>
                  <p className="mt-2 text-base font-medium">
                    {language === 'es'
                      ? 'Backend, contenedores, automatizaci\u00f3n y aprendizaje aplicado.'
                      : 'Backend, containers, automation and applied learning.'}
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-sky-700">
                    {language === 'es' ? 'Enfoque' : 'Approach'}
                  </p>
                  <p className="mt-2 text-base font-medium">
                    {language === 'es'
                      ? 'Pr\u00e1ctica t\u00e9cnica, documentaci\u00f3n clara y soluciones orientadas a implementaci\u00f3n.'
                      : 'Technical practice, clear documentation and implementation-oriented solutions.'}
                  </p>
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
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-700">
            {language === 'es' ? 'Muestra t\u00e9cnica' : 'Technical showcase'}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
            {language === 'es' ? 'Proyectos destacados' : 'Featured projects'}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            {language === 'es'
              ? 'Una selecci\u00f3n de ejercicios y trabajos t\u00e9cnicos que reflejan mi forma de construir, documentar y resolver problemas.'
              : 'A selection of exercises and technical work that reflect my way of building, documenting and solving problems.'}
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
                  {language === 'es' ? 'Ver detalle' : 'See detail'}
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
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-700">
            {language === 'es' ? 'C\u00f3mo trabajo' : 'How I work'}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">
            {language === 'es' ? 'C\u00f3mo trabajo' : 'How I work'}
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            {language === 'es'
              ? 'Me interesa construir software claro, mantenible y cercano a escenarios reales. Uso este sitio para mostrar proyectos, documentar aprendizajes y convertir pr\u00e1ctica t\u00e9cnica en evidencia visible.'
              : 'I am interested in building clear, maintainable software close to real scenarios. I use this site to showcase projects, document learnings and convert technical practice into visible evidence.'}
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            {language === 'es'
              ? 'Mas que acumular tecnologias, me interesa entender como se disenan, despliegan y sostiene solutions utiles. Por eso este portfolio mezcla perfil profesional, pr\u00e1ctica t\u00e9cnica y documentaci\u00f3n.'
              : 'More than accumulating technologies, I am interested in understanding how useful solutions are designed, deployed and sustained. That is why this portfolio mixes professional profile, technical practice and documentation.'}
          </p>
        </article>

        <article className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
            {language === 'es' ? 'Notas y aprendizaje' : 'Notes and learning'}
          </p>
          <h2 className="mt-3 text-3xl font-semibold">
            {language === 'es' ? 'Notas y documentaci\u00f3n t\u00e9cnica' : 'Notes and technical documentation'}
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            {language === 'es'
              ? 'Tambi\u00e9n uso este espacio como laboratorio t\u00e9cnico para organizar apuntes, ejercicios y documentaci\u00f3n pr\u00e1ctica sobre las tecnologias que estudio y aplico.'
              : 'I also use this space as a technical lab to organize notes, exercises and practical documentation on the technologies I study and apply.'}
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
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-700">
                {language === 'es' ? 'Certificaciones' : 'Certifications'}
              </p>
              <h2 className="mt-1 text-3xl font-semibold text-slate-900">
                {language === 'es' ? 'Credenciales y badges' : 'Credentials and badges'}
              </h2>
            </div>
          </div>
          <p className="mt-5 text-base leading-8 text-slate-600">
            {language === 'es'
              ? 'Tambi\u00e9n documento mi progreso profesional a trav\u00e9s de certificaciones y badges. Uso Credly para centralizar credenciales verificables y dejar visible la evoluci\u00f3n de mi perfil t\u00e9cnico.'
              : 'I also document my professional progress through certifications and badges. I use Credly to centralize verifiable credentials and make the evolution of my technical profile visible.'}
          </p>
          <Link
            href="https://www.credly.com/users/rhonalchirinos"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-indigo-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-900"
          >
            {language === 'es' ? 'Ver perfil en Credly' : 'View Credly profile'}
            <FaArrowUpRightFromSquare className="text-xs" />
          </Link>
        </article>

        <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-700">
            {language === 'es' ? 'Se\u00f1al profesional' : 'Professional signal'}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">
            {language === 'es' ? 'Formaci\u00f3n visible, trabajo verificable' : 'Visible formation, verifiable work'}
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            {language === 'es'
              ? 'El objetivo no es solo listar tecnologias, sino mostrar evidencia. Por eso el sitio ahora conecta proyectos, notas t\u00e9cnicas y credenciales en un mismo recorrido: lo que estudio, lo que construyo y lo que puedo demostrar.'
              : 'The goal is not just to list technologies, but to show evidence. That is why the site now connects projects, technical notes and credentials in the same journey: what I study, what I build and what I can demonstrate.'}
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Projects</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                {language === 'es' ? 'Implementaci\u00f3n real' : 'Real implementation'}
              </p>
            </div>
            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Notes</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                {language === 'es' ? 'Aprendizaje aplicado' : 'Applied learning'}
              </p>
            </div>
            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Certifications</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                {language === 'es' ? 'Credenciales verificables' : 'Verifiable credentials'}
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="mt-16 rounded-[2rem] border border-slate-200 bg-gradient-to-r from-white to-slate-100 px-8 py-10 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-700">
              {language === 'es' ? 'Siguiente paso' : 'Next step'}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">
              {language === 'es' ? 'Sigamos la conversaci\u00f3n' : "Let's keep the conversation"}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {language === 'es'
                ? 'Si quieres ver m\u00e1s detalle sobre mi experiencia, mis proyectos o mi forma de trabajar, puedes revisar mi perfil, explorar mis repositorios o descargar mi CV.'
                : 'If you want to see more details about my experience, my projects or my way of working, you can check my profile, explore my repositories or download my CV.'}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/profile"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-900"
            >
              {language === 'es' ? 'Ver perfil' : 'View profile'}
            </Link>
            <Link
              href="https://github.com/rhonalchirinos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-500"
            >
              {language === 'es' ? 'Ir a GitHub' : 'Go to GitHub'}
            </Link>
            <Link
              href="/rhonalchirinos.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-500"
            >
              {language === 'es' ? 'Descargar CV' : 'Download CV'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
