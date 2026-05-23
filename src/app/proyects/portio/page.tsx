import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

import { portioThemeStyle } from './components/portio-theme'
import { PortioBusinessSection } from './components/PortioBusinessSection'
import { PortioTechnicalSection } from './components/PortioTechnicalSection'

const productHighlights = [
  {
    title: 'Registro nutricional continuo',
    description:
      'La propuesta central es convertir el registro de comidas en un historial util, con contexto, frecuencia y porciones en lugar de entradas aisladas.',
  },
  {
    title: 'Recomendaciones asistidas por IA',
    description:
      'La aplicacion usa el historial alimenticio, objetivos y patrones del usuario para generar sugerencias accionables y planes mas relevantes.',
  },
  {
    title: 'Seguimiento con criterio profesional',
    description:
      'Portio funciona como apoyo del nutricionista: centraliza la informacion del paciente, ordena el seguimiento diario y facilita mejores ajustes profesionales, pero no reemplaza la evaluacion clinica.',
  },
]

const functionalFlow = [
  'El usuario registra comidas, horarios, porciones y contexto de cada ingesta.',
  'La plataforma organiza ese historial y muestra progreso, patrones y desbalances.',
  'Con esos datos, el sistema genera recomendaciones y planes ajustados al perfil.',
  'El nutricionista revisa toda la informacion consolidada para entender la evolucion real.',
  'Con esa evidencia puede ajustar indicaciones, prioridades y seguimiento con mejor criterio.',
  'El proceso convierte datos diarios en decisiones nutricionales mejor fundamentadas.',
]

const frontendStack = [
  'React',
  'TypeScript',
  'Vite',
  'TanStack Router',
  'Zustand',
  'Recharts',
  'i18next',
  'AWS Amplify',
  'Tailwind CSS',
]

const backendStack = [
  'Python',
  'AWS SAM',
  'AWS Lambda',
  'Amazon API Gateway',
  'Amazon DynamoDB',
  'Amazon Cognito',
  'Amazon S3',
  'Arquitectura orientada a dominio',
  'Integracion con IA',
]

const routeMap = [
  { route: '/', detail: 'Landing con foco en nutricion, IA y acompanamiento profesional.' },
  { route: '/dashboard', detail: 'Resumen operativo del seguimiento del usuario.' },
  { route: '/meals', detail: 'Consulta del historial de comidas y navegacion del registro.' },
  { route: '/meals/new', detail: 'Carga de nuevas comidas dentro del flujo principal.' },
  { route: '/user', detail: 'Perfil fisico, objetivos y contexto del usuario.' },
  { route: '/plans', detail: 'Planes nutricionales, recomendaciones e insumos sugeridos.' },
  { route: '/login', detail: 'Acceso autenticado al sistema.' },
]

const architectureFlow = [
  'Usuario',
  'Frontend web de Portio',
  'Autenticacion',
  'API serverless',
  'Logica nutricional',
  'Persistencia e IA',
  'Nutricionista',
]

export default function PortioPage() {
  return (
    <div
      style={portioThemeStyle}
      className="relative overflow-hidden rounded-[2.25rem] border border-[color:var(--portio-light)] bg-[color:var(--portio-background)] px-4 pb-20 pt-4 text-[color:var(--portio-text)] shadow-[0_24px_80px_rgba(20,48,74,0.08)] md:px-6"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-5%] top-8 h-56 w-56 rounded-full bg-[color:var(--portio-surface-soft)] blur-3xl" />
        <div className="absolute right-0 top-28 h-72 w-72 rounded-full bg-[color:var(--portio-surface-tint)] blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-48 w-48 rounded-full bg-[color:var(--portio-light-soft)] blur-3xl" />
      </div>

      <section className="relative overflow-hidden rounded-[2rem] border border-[color:var(--portio-light)] bg-[linear-gradient(135deg,var(--portio-hero-gradient-start),var(--portio-surface),var(--portio-hero-gradient-end))] p-8 shadow-[0_18px_50px_rgba(20,48,74,0.08)] md:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--portio-accent)]">
              Healthtech project
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-[color:var(--portio-primary)] md:text-5xl">Portio</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[color:var(--portio-text-muted)]">
              Portio es una aplicacion healthtech para seguimiento nutricional que combina registro de comidas,
              visualizacion de progreso, perfil fisico del usuario y recomendaciones asistidas por IA dentro de un
              flujo claro y orientado a decision.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[color:var(--portio-text-muted)]">
              El proyecto une producto y arquitectura: ayuda a registrar habitos, detectar patrones, ordenar el
              progreso del paciente y transformar esa informacion en recomendaciones accionables que un nutricionista
              puede revisar para tomar mejores decisiones.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="https://portio.rhodeveloper.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--portio-accent)] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(240,138,93,0.28)] transition hover:brightness-105"
              >
                Ver aplicacion
                <FaArrowUpRightFromSquare className="text-xs" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--portio-primary)]/10 bg-[color:var(--portio-surface)] px-5 py-3 text-sm font-semibold text-[color:var(--portio-primary)] transition hover:bg-[color:var(--portio-light-wash)]"
              >
                Volver al inicio
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.75rem] border border-[color:var(--portio-primary)]/10 bg-[color:var(--portio-surface)] p-6 shadow-[0_12px_30px_rgba(20,48,74,0.06)]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--portio-secondary)]">
                Proposito
              </p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--portio-text-muted)]">
                Ayudar a las personas a perder peso y mejorar su calidad de vida mediante seguimiento diario, mejores
                recomendaciones y mejor informacion para el trabajo del nutricionista.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-[color:var(--portio-primary)]/10 bg-[color:var(--portio-surface-soft)] p-6 shadow-[0_12px_30px_rgba(20,48,74,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--portio-secondary)]">
                Enfoque
              </p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--portio-text-muted)]">
                Una sola entrada de portfolio que muestra producto, experiencia de usuario y base tecnica en AWS.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PortioBusinessSection productHighlights={productHighlights} functionalFlow={functionalFlow} />

      <div className="relative my-14 md:my-20">
        <div className="mx-auto h-px w-full max-w-5xl bg-[linear-gradient(90deg,transparent,var(--portio-primary),transparent)] opacity-15" />
      </div>

      <PortioTechnicalSection
        architectureFlow={architectureFlow}
        frontendStack={frontendStack}
        backendStack={backendStack}
        routeMap={routeMap}
      />
    </div>
  )
}
