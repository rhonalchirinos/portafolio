type PortioTechnicalSectionProps = {
  architectureFlow: string[]
  frontendStack: string[]
  backendStack: string[]
  routeMap: Array<{ route: string; detail: string }>
}

export function PortioTechnicalSection({
  architectureFlow,
  frontendStack,
  backendStack,
  routeMap,
}: PortioTechnicalSectionProps) {
  return (
    <section className="relative mt-14">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--portio-accent)]">
          Seccion tecnica
        </p>
        <h2 className="mt-3 text-4xl font-semibold text-[color:var(--portio-primary)]">Portio desde la ingenieria</h2>
        <p className="mt-4 text-base leading-8 text-[color:var(--portio-text-muted)]">
          Esta parte resume la base tecnica del proyecto: stack de interfaz, servicios cloud, arquitectura serverless
          y rutas funcionales visibles en la aplicacion productiva.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-[2rem] border border-[color:var(--portio-primary)]/10 bg-[linear-gradient(160deg,var(--portio-dark),var(--portio-primary))] p-8 text-white shadow-[0_18px_42px_rgba(8,27,41,0.26)]">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--portio-accent)]">
            Arquitectura
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[color:var(--portio-light)]">Base tecnica de la solucion</h2>
          <p className="mt-4 text-base leading-8 text-white/78">
            Portio conecta una experiencia de producto con autenticacion, backend serverless, persistencia e
            integraciones que respaldan el seguimiento nutricional y el enriquecimiento de informacion con IA.
          </p>

          <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-[color:var(--portio-white-glass)] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--portio-accent)]">
              Diagrama de arquitectura
            </p>
            <div className="mt-4 grid gap-3">
              {architectureFlow.map((item, index) => (
                <div key={item} className="grid gap-3">
                  <div className="rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/88">
                    {item}
                  </div>
                  {index < architectureFlow.length - 1 && (
                    <div className="flex justify-center text-[color:var(--portio-accent)]">↓</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </article>

        <article className="rounded-[2rem] border border-[color:var(--portio-primary)]/10 bg-[color:var(--portio-surface)] p-8 shadow-[0_14px_34px_rgba(20,48,74,0.06)]">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--portio-secondary)]">
            Frontend
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[color:var(--portio-primary)]">Experiencia y cliente</h2>
          <p className="mt-4 text-base leading-8 text-[color:var(--portio-text-muted)]">
            La interfaz esta construida para registrar comidas, revisar progreso y operar la plataforma con una
            experiencia fluida, apoyada por un stack moderno del lado del cliente.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {frontendStack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[color:var(--portio-primary)]/10 bg-[color:var(--portio-surface-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--portio-secondary)]"
              >
                {item}
              </span>
            ))}
          </div>
        </article>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="rounded-[2rem] border border-[color:var(--portio-primary)]/10 bg-[color:var(--portio-surface)] p-8 shadow-[0_14px_34px_rgba(20,48,74,0.06)]">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--portio-secondary)]">
            Backend
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[color:var(--portio-primary)]">Servicios y cloud</h2>
          <p className="mt-4 text-base leading-8 text-[color:var(--portio-text-muted)]">
            El backend esta montado sobre una base serverless en AWS, con servicios administrados para autenticacion,
            API, persistencia, almacenamiento y una estructura pensada para evolucionar el dominio.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {backendStack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[color:var(--portio-primary)]/10 bg-[color:var(--portio-surface-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--portio-secondary)]"
              >
                {item}
              </span>
            ))}
          </div>
        </article>

        <article className="rounded-[2rem] border border-[color:var(--portio-primary)]/10 bg-[color:var(--portio-surface)] p-8 shadow-[0_14px_34px_rgba(20,48,74,0.06)]">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--portio-secondary)]">
            Mapa funcional
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[color:var(--portio-primary)]">Rutas detectadas</h2>
          <p className="mt-4 text-base leading-8 text-[color:var(--portio-text-muted)]">
            El bundle productivo expone una aplicacion con rutas concretas, lo que confirma que el proyecto ya cubre
            mas que una demo visual y tiene flujos operativos definidos.
          </p>
          <div className="mt-6 space-y-3">
            {routeMap.map((item) => (
              <div
                key={item.route}
                className="rounded-[1.25rem] border border-[color:var(--portio-primary)]/10 bg-[color:var(--portio-surface-soft)] p-4"
              >
                <p className="text-sm font-semibold text-[color:var(--portio-primary)]">{item.route}</p>
                <p className="mt-1 text-sm leading-6 text-[color:var(--portio-text-muted)]">{item.detail}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
