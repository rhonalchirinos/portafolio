'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaArrowUpRightFromSquare, FaCertificate } from 'react-icons/fa6'

import { portioDarkThemeStyle, portioLightThemeStyle } from '@/app/proyects/portio/components/portio-theme'
import { useLanguage, useTheme } from '@/components/LanguageToggle'
import { dockerPublicationMetadata } from '@/modules/docker/content/publication-metadata'

export default function Home() {
  const { language } = useLanguage()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const heroSectionClassName = isDark
    ? 'overflow-hidden rounded-[2rem] border border-slate-200 bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.18),transparent_30%),linear-gradient(135deg,#0f1b2f_0%,#101a2c_48%,#14233d_100%)] text-slate-900 shadow-xl'
    : 'overflow-hidden rounded-[2rem] border border-slate-200 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(191,219,254,0.38),transparent_24%),linear-gradient(135deg,#ffffff_0%,#f8fbff_48%,#eef5ff_100%)] text-slate-900 shadow-xl'

  const heroEyebrowClassName = isDark ? 'text-sm font-semibold uppercase tracking-[0.3em] text-sky-300' : 'text-sm font-semibold uppercase tracking-[0.3em] text-sky-700'
  const heroTitleClassName = isDark
    ? 'mt-5 max-w-3xl text-4xl font-semibold leading-tight text-balance text-white md:text-5xl'
    : 'mt-5 max-w-3xl text-4xl font-semibold leading-tight text-balance text-slate-900 md:text-5xl'
  const heroSubtitleClassName = isDark ? 'mt-3 text-lg font-medium text-slate-200 md:text-xl' : 'mt-3 text-lg font-medium text-slate-700 md:text-xl'
  const heroBodyClassName = isDark
    ? 'mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg'
    : 'mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg'
  const heroLinksClassName = isDark ? 'mt-10 flex flex-wrap gap-3 text-sm text-slate-300' : 'mt-10 flex flex-wrap gap-3 text-sm text-slate-600'
  const portraitGlowClassName = isDark
    ? 'absolute left-1/2 top-6 h-52 w-52 -translate-x-1/2 rounded-full bg-sky-300/20 blur-3xl'
    : 'absolute left-1/2 top-6 h-52 w-52 -translate-x-1/2 rounded-full bg-sky-200/40 blur-3xl'
  const portraitCardClassName = isDark
    ? 'relative w-full rounded-[1.75rem] border border-slate-200 bg-[#101a2c] p-4 backdrop-blur sm:max-w-sm sm:rounded-[2rem] sm:p-5'
    : 'relative w-full rounded-[1.75rem] border border-slate-200 bg-white/85 p-4 backdrop-blur sm:max-w-sm sm:rounded-[2rem] sm:p-5'
  const portraitFrameClassName = isDark ? 'rounded-[1.35rem] bg-[#17233a] p-3 sm:rounded-[1.5rem]' : 'rounded-[1.35rem] bg-slate-100 p-3 sm:rounded-[1.5rem]'
  const portraitMetaClassName = isDark ? 'mt-5 grid gap-3 text-sm text-slate-200' : 'mt-5 grid gap-3 text-sm text-slate-700'
  const featuredCardStyle = {
    ...(isDark ? portioDarkThemeStyle : portioLightThemeStyle),
    borderColor: isDark ? 'var(--portio-secondary)' : 'rgba(99, 102, 241, 0.18)',
    background: isDark
      ? 'linear-gradient(135deg, #2a1f3d 0%, #4b2f5f 48%, #7a4968 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8f5ff 44%, #efeafe 100%)',
    color: isDark ? 'var(--portio-surface)' : '#1e1b4b',
    boxShadow: isDark ? '0 24px 60px -24px rgba(20, 48, 74, 0.45)' : '0 24px 60px -28px rgba(79, 70, 229, 0.18)',
  }
  const featuredAccentColor = isDark ? 'var(--portio-accent)' : '#7c3aed'
  const featuredTitleClassName = isDark
    ? 'mt-3 text-3xl font-semibold text-[color:var(--portio-primary)] md:text-4xl'
    : 'mt-3 text-3xl font-semibold text-slate-900 md:text-4xl'
  const featuredBodyColor = isDark ? 'var(--portio-light)' : '#475569'
  const featuredBadgeStyle = {
    borderColor: isDark ? 'rgba(255, 231, 199, 0.18)' : 'rgba(124, 58, 237, 0.14)',
    backgroundColor: isDark ? 'rgba(255, 231, 199, 0.08)' : 'rgba(124, 58, 237, 0.06)',
    color: isDark ? 'var(--portio-light)' : '#5b21b6',
  }
  const featuredSecondaryButtonStyle = {
    borderColor: isDark ? 'rgba(255, 231, 199, 0.2)' : 'rgba(99, 102, 241, 0.16)',
    backgroundColor: isDark ? 'rgba(255, 253, 248, 0.06)' : 'rgba(255, 255, 255, 0.72)',
    color: isDark ? '#ffffff' : '#312e81',
  }
  const featuredPanelStyle = {
    borderColor: isDark ? 'rgba(255, 231, 199, 0.16)' : 'rgba(99, 102, 241, 0.14)',
    backgroundColor: isDark ? 'rgba(255, 253, 248, 0.08)' : 'rgba(255, 255, 255, 0.68)',
  }
  const certificationsCardClassName = isDark
    ? 'rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm'
    : 'rounded-[2rem] border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-indigo-50 p-8 shadow-sm'
  const certificationsItemClassName = isDark
    ? 'rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-sky-300 hover:bg-slate-50'
    : 'rounded-2xl border border-slate-200 bg-white/80 p-4 transition hover:border-sky-300 hover:bg-white'

  const capabilities = [
    {
      title: language === 'es' ? 'Backend' : 'Backend',
      description:
        language === 'es'
          ? 'Dise\u00f1o APIs, organizo l\u00f3gica de negocio e integro servicios con foco en claridad, mantenibilidad y escalabilidad.'
          : 'I design APIs, organize business logic, and integrate services with a focus on clarity, maintainability, and scalability.',
    },
    {
      title: language === 'es' ? 'DevOps' : 'DevOps',
      description:
        language === 'es'
          ? 'Trabajo con contenedores, automatizaci\u00f3n y flujos reproducibles para simplificar despliegues y entornos.'
          : 'I work with containers, automation, and reproducible workflows to simplify deployments and environments.',
    },
    {
      title: language === 'es' ? 'Cloud' : 'Cloud',
      description:
        language === 'es'
          ? 'Exploro soluciones en la nube y pr\u00e1cticas de infraestructura que conectan desarrollo con operaci\u00f3n real.'
          : 'I explore cloud solutions and infrastructure practices that connect development with real-world operations.',
    },
  ]

  const featuredProjects = [
    {
      title: 'Portio',
      description:
        language === 'es'
          ? 'Plataforma healthtech para seguimiento nutricional, registro de comidas, metricas corporales y analisis asistido por IA a partir de imagenes de platos.'
          : 'Healthtech platform for nutritional tracking, meal logging, body metrics and AI-assisted analysis from dish images.',
      href: '/proyects/portio',
      stack: ['Healthtech', 'React', 'Python', 'AWS'],
    },
  ]

  const dockerPublicationEntries = Object.entries(dockerPublicationMetadata[language]).sort(
    ([, left], [, right]) => left.order - right.order,
  )

  const projectArchive = [
    {
      title:
        language === 'es'
          ? 'Primera publicacion editorial: certificacion Python'
          : 'First editorial publication: Python certification',
      description:
        language === 'es'
          ? 'Una guia larga con todo el contenido base que necesitas estudiar para preparar una certificacion inicial de Python.'
          : 'A long-form guide with the core content you need to study for an entry-level Python certification.',
      href: '/python',
      stack: ['Editorial', 'Python', 'PCEP'],
      github: undefined,
    },
    ...dockerPublicationEntries.map(([slug, publication]) => ({
      title: publication.title,
      description: publication.excerpt,
      href: `/docker/${slug}`,
      stack: publication.topics,
      github: undefined,
    })),
  ]

  return (
    <div className="portfolio-theme pb-20 pt-8">
      <section className={heroSectionClassName}>
        <div className="grid gap-10 px-5 py-8 sm:px-6 sm:py-10 md:px-12 lg:grid-cols-[1.4fr_0.9fr] lg:px-14 lg:py-14">
          <div className="relative z-10">
            <p className={heroEyebrowClassName}>
              {language === 'es' ? 'Portafolio y diario t\u00e9cnico' : 'Portfolio and technical journal'}
            </p>
            <h1 className={heroTitleClassName}>
              Rhonal Chirinos
            </h1>
            <p className={heroSubtitleClassName}>
              {language === 'es'
                ? 'Senior Backend Engineer especializado en microservicios, integraciones, AWS y sistemas escalables.'
                : 'Senior Backend Engineer specialized in microservices, integrations, AWS and scalable systems.'}
            </p>
            <p className={heroBodyClassName}>
              {language === 'es'
                ? 'Dise\u00f1o APIs, automatizo procesos y construyo soluciones backend para productos reales.'
                : 'I design APIs, automate processes and build backend solutions for real products.'}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#projects"
                className="clear-button inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition"
              >
                {language === 'es' ? 'Ver proyectos' : 'View projects'}
                <FaArrowRight />
              </Link>
              <Link
                href="/rhonalchirinos.pdf?dl=1"
                className="ghost-button inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition"
              >
                {language === 'es' ? 'Descargar CV' : 'Download CV'}
              </Link>
            </div>

            <div className={heroLinksClassName}>
              <Link
                href="https://github.com/rhonalchirinos"
                target="_blank"
                rel="noopener noreferrer"
                className="ghost-button inline-flex items-center gap-2 rounded-full px-4 py-2 transition"
              >
                <FaGithub />
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/rhonal/"
                target="_blank"
                rel="noopener noreferrer"
                className="ghost-button inline-flex items-center gap-2 rounded-full px-4 py-2 transition"
              >
                <FaLinkedin />
                LinkedIn
              </Link>
              <Link
                href="/rhonalchirinos.pdf?dl=1"
                className="ghost-button inline-flex items-center gap-2 rounded-full px-4 py-2 transition"
              >
                {language === 'es' ? 'Ver CV' : 'View resume'}
              </Link>
              <Link
                href="https://www.credly.com/users/rhonalchirinos"
                target="_blank"
                rel="noopener noreferrer"
                className="ghost-button inline-flex items-center gap-2 rounded-full px-4 py-2 transition"
              >
                Credly
                <FaArrowUpRightFromSquare className="text-xs" />
              </Link>
            </div>
          </div>

          <div className="relative flex items-end justify-center lg:justify-end">
            <div className={portraitGlowClassName} />
            <div className={portraitCardClassName}>
              <div className={portraitFrameClassName}>
                <Image
                  src="/m2.jpeg"
                  alt="Rhonal Chirinos"
                  width={720}
                  height={720}
                  className="h-auto w-full rounded-[1.25rem] object-cover"
                  priority
                />
              </div>
              <div className={portraitMetaClassName}>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-sky-700">
                    {language === 'es' ? 'Enfoque' : 'Focus'}
                  </p>
                  <p className="mt-2 text-sm font-medium leading-7 sm:text-base">
                    {language === 'es'
                      ? 'Backend, contenedores, automatizaci\u00f3n y aprendizaje aplicado.'
                      : 'Backend, containers, automation and applied learning.'}
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-sky-700">
                    {language === 'es' ? 'Enfoque' : 'Approach'}
                  </p>
                  <p className="mt-2 text-sm font-medium leading-7 sm:text-base">
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
              : 'A selection of exercises and technical work that reflects how I build, document, and solve problems.'}
          </p>
        </div>

        <div className="mt-8 grid gap-6">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-[2rem] border p-8 shadow-xl"
              style={featuredCardStyle}
            >
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <p
                    className="text-sm font-semibold uppercase tracking-[0.25em]"
                    style={{ color: featuredAccentColor }}
                  >
                    {language === 'es' ? 'Proyecto destacado' : 'Featured project'}
                  </p>
                  <h3 className={featuredTitleClassName}>{project.title}</h3>
                  <p className="mt-5 max-w-2xl text-base leading-8" style={{ color: featuredBodyColor }}>
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.2em]"
                        style={featuredBadgeStyle}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href={project.href || '#'}
                      className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition"
                      style={{ backgroundColor: 'var(--portio-accent)', color: 'var(--portio-dark)' }}
                    >
                      {language === 'es' ? 'Ver proyecto' : 'View project'}
                      <FaArrowRight className="text-xs" />
                    </Link>
                    <Link
                      href="https://portio.rhodeveloper.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition"
                      style={featuredSecondaryButtonStyle}
                    >
                      {language === 'es' ? 'Abrir aplicacion' : 'Open application'}
                      <FaArrowUpRightFromSquare className="text-xs" />
                    </Link>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div
                    className="rounded-[1.5rem] border p-5"
                    style={featuredPanelStyle}
                  >
                    <p
                      className="text-xs font-semibold uppercase tracking-[0.2em]"
                      style={{ color: featuredAccentColor }}
                    >
                      Frontend
                    </p>
                    <p className="mt-3 text-sm leading-7" style={{ color: featuredBodyColor }}>
                      {language === 'es'
                        ? 'React, TypeScript, Vite, TanStack Router, Zustand, Recharts, i18next, Amplify y Tailwind CSS.'
                        : 'React, TypeScript, Vite, TanStack Router, Zustand, Recharts, i18next, Amplify, and Tailwind CSS.'}
                    </p>
                  </div>
                  <div
                    className="rounded-[1.5rem] border p-5"
                    style={featuredPanelStyle}
                  >
                    <p
                      className="text-xs font-semibold uppercase tracking-[0.2em]"
                      style={{ color: featuredAccentColor }}
                    >
                      Backend
                    </p>
                    <p className="mt-3 text-sm leading-7" style={{ color: featuredBodyColor }}>
                      {language === 'es'
                        ? 'Python, AWS SAM, Lambda, API Gateway, DynamoDB, Cognito, S3 y servicios de IA para analisis asistido.'
                        : 'Python, AWS SAM, Lambda, API Gateway, DynamoDB, Cognito, S3, and AI services for assisted analysis.'}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-700">
            {language === 'es' ? 'Prácticas' : 'Practices'}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">
            {language === 'es' ? 'Stack profesional de trabajo' : 'Professional delivery stack'}
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              language === 'es' ? 'Clean code y revisión técnica' : 'Clean code and technical review',
              language === 'es' ? 'Arquitectura hexagonal y dominio' : 'Hexagonal architecture and domain',
              language === 'es' ? 'Testing unitario e integración' : 'Unit and integration testing',
              language === 'es' ? 'CI/CD y despliegue automatizado' : 'CI/CD and automated deployment',
              language === 'es' ? 'Observabilidad y trazabilidad' : 'Observability and traceability',
              language === 'es' ? 'Cloud compute y servicios administrados' : 'Cloud compute and managed services',
              language === 'es' ? 'Uso de servicios como colas e IA' : 'Using services such as queues and AI',
            ].map((item) => (
              <div key={item} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm leading-7 text-slate-600">{item}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-700">
            {language === 'es' ? 'Archivo de proyectos' : 'Project archive'}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
            {language === 'es' ? 'Otros trabajos y publicaciones' : 'Other work and publications'}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            {language === 'es'
              ? 'Ejercicios, publicaciones y piezas tecnicas que complementan el proyecto principal y muestran otras areas de practica.'
              : 'Exercises, publications, and technical pieces that complement the main project and showcase other areas of practice.'}
          </p>
        </div>

        <div className="mt-8 grid gap-5 xl:grid-cols-2">
          {projectArchive.map((project) => (
            <article
              key={project.title}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-600"
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
                  className="clear-button inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition"
                >
                  {language === 'es' ? 'Ver detalle' : 'See detail'}
                  <FaArrowRight className="text-xs" />
                </Link>
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ghost-button inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition"
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

      <section className="mt-16">
        <article className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-700">
            {language === 'es' ? 'C\u00f3mo trabajo' : 'How I work'}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">
            {language === 'es' ? 'C\u00f3mo trabajo' : 'How I work'}
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            {language === 'es'
              ? 'Trabajo con una mentalidad de backend cloud profesional: priorizo clean code, arquitectura clara y decisiones que faciliten mantener, escalar y operar sistemas reales.'
              : 'I work with a professional cloud-backend mindset: I prioritize clean code, clear architecture, and decisions that make real systems easier to maintain, scale, and operate.'}
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            {language === 'es'
              ? 'Aplico principios como arquitectura hexagonal, testing automatizado, integraciones resilientes, cloud computing, observabilidad, CI/CD, seguridad basica y diseno de APIs para construir soluciones utiles y listas para produccion.'
              : 'I apply principles such as hexagonal architecture, automated testing, resilient integrations, cloud computing, observability, CI/CD, basic security, and API design to build useful, production-ready solutions.'}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              'Clean Code',
              'Hexagonal Architecture',
              'Testing',
              'Cloud Computing',
              'Microservices',
              'API Design',
              'CI/CD',
              'Observability',
              'Security',
              'Scalability',
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-slate-600"
              >
                {item}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <article className={certificationsCardClassName}>
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
          <div className="mt-5 grid gap-3">
            <Link
              href="https://www.credly.com/badges/f78ce3c3-6a5b-499c-b9fb-790002032c95"
              target="_blank"
              rel="noopener noreferrer"
              className={certificationsItemClassName}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {language === 'es' ? 'Credencial 01' : 'Credential 01'}
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                [PCEP-30-02] PCEP™ - Certified Entry-Level Python Programmer
              </p>
              <p className="mt-2 text-sm text-slate-600">
                {language === 'es'
                  ? 'Conocimiento de fundamentos de programacion, sintaxis y semantica de Python, tareas de codificacion esenciales y uso de la libreria estandar.'
                  : 'Knowledge of programming fundamentals, Python syntax and semantics, essential coding tasks, and use of the Python Standard Library.'}
              </p>
            </Link>
            <Link
              href="https://www.credly.com/badges/cdeaf800-c8c5-489e-bad0-6bec8b9383fd"
              target="_blank"
              rel="noopener noreferrer"
              className={certificationsItemClassName}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {language === 'es' ? 'Credencial 02' : 'Credential 02'}
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900">AWS Certified Cloud Practitioner</p>
              <p className="mt-2 text-sm text-slate-600">
                {language === 'es'
                  ? 'Comprension fundamental de servicios de TI en AWS Cloud, fluidez cloud y conocimiento base para identificar servicios esenciales en proyectos sobre AWS.'
                  : 'Foundational understanding of IT services in the AWS Cloud, cloud fluency, and core knowledge to identify the essential AWS services required for AWS-focused projects.'}
              </p>
            </Link>
          </div>
          <Link
            href="https://www.credly.com/users/rhonalchirinos"
            target="_blank"
            rel="noopener noreferrer"
            className="clear-button mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition"
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
            {language === 'es' ? 'Formaci\u00f3n visible, trabajo verificable' : 'Visible learning, verifiable work'}
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            {language === 'es'
              ? 'El objetivo no es solo listar tecnologias, sino mostrar evidencia. Por eso el sitio ahora conecta proyectos, notas t\u00e9cnicas y credenciales en un mismo recorrido: lo que estudio, lo que construyo y lo que puedo demostrar.'
              : 'The goal is not just to list technologies, but to show evidence. That is why the site now connects projects, technical notes and credentials in the same journey: what I study, what I build and what I can demonstrate.'}
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {language === 'es' ? 'Proyectos' : 'Projects'}
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                {language === 'es' ? 'Implementaci\u00f3n real' : 'Real implementation'}
              </p>
            </div>
            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {language === 'es' ? 'Notas' : 'Notes'}
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                {language === 'es' ? 'Aprendizaje aplicado' : 'Applied learning'}
              </p>
            </div>
            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {language === 'es' ? 'Certificaciones' : 'Certifications'}
              </p>
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
              {language === 'es' ? 'Sigamos la conversaci\u00f3n' : "Let's keep the conversation going"}
          </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {language === 'es'
                ? 'Si quieres ver m\u00e1s detalle sobre mi experiencia, mis proyectos o mi forma de trabajar, puedes revisar mi perfil, explorar mis repositorios o descargar mi CV.'
                : 'If you want to see more details about my experience, my projects or my way of working, you can check my profile, explore my repositories or download my CV.'}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/rhonalchirinos.pdf?dl=1"
              className="clear-button inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition"
            >
              {language === 'es' ? 'Ver CV' : 'View resume'}
            </Link>
            <Link
              href="https://github.com/rhonalchirinos"
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-button inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition"
            >
              {language === 'es' ? 'Ir a GitHub' : 'Go to GitHub'}
            </Link>
            <Link
              href="/rhonalchirinos.pdf?dl=1"
              className="ghost-button inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition"
            >
              {language === 'es' ? 'Descargar CV' : 'Download CV'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
