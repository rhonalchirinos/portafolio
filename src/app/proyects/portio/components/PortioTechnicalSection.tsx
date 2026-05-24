type PortioTechnicalSectionProps = {
  technicalSectionLabel: string
  technicalSectionTitle: string
  technicalSectionDescription: string
  architectureFlow: string[]
  frontendStack: string[]
  backendStack: string[]
  routeMap: Array<{ route: string; detail: string }>
  architectureLabel: string
  architectureTitle: string
  architectureDescription: string
  architectureDiagramLabel: string
  frontendLabel: string
  frontendTitle: string
  frontendDescription: string
  backendLabel: string
  backendTitle: string
  backendDescription: string
  routeMapLabel: string
  routeMapTitle: string
  routeMapDescription: string
}

export function PortioTechnicalSection({
  technicalSectionLabel,
  technicalSectionTitle,
  technicalSectionDescription,
  architectureFlow,
  frontendStack,
  backendStack,
  routeMap,
  architectureLabel,
  architectureTitle,
  architectureDescription,
  architectureDiagramLabel,
  frontendLabel,
  frontendTitle,
  frontendDescription,
  backendLabel,
  backendTitle,
  backendDescription,
  routeMapLabel,
  routeMapTitle,
  routeMapDescription,
}: PortioTechnicalSectionProps) {
  return (
    <section className="relative mt-14">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--portio-accent)]">
          {technicalSectionLabel}
        </p>
        <h2 className="mt-3 text-4xl font-semibold text-[color:var(--portio-primary)]">{technicalSectionTitle}</h2>
        <p className="mt-4 text-base leading-8 text-[color:var(--portio-text-muted)]">
          {technicalSectionDescription}
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-[2rem] border border-[color:var(--portio-primary)]/10 bg-[linear-gradient(160deg,var(--portio-architecture-gradient-start),var(--portio-architecture-gradient-end))] p-8 text-white shadow-[0_18px_42px_rgba(8,27,41,0.26)]">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--portio-accent)]">
            {architectureLabel}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[color:var(--portio-light)]">{architectureTitle}</h2>
          <p className="mt-4 text-base leading-8 text-white/78">{architectureDescription}</p>

          <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-[color:var(--portio-white-glass)] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--portio-accent)]">
              {architectureDiagramLabel}
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
            {frontendLabel}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[color:var(--portio-primary)]">{frontendTitle}</h2>
          <p className="mt-4 text-base leading-8 text-[color:var(--portio-text-muted)]">{frontendDescription}</p>
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
            {backendLabel}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[color:var(--portio-primary)]">{backendTitle}</h2>
          <p className="mt-4 text-base leading-8 text-[color:var(--portio-text-muted)]">{backendDescription}</p>
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
            {routeMapLabel}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[color:var(--portio-primary)]">{routeMapTitle}</h2>
          <p className="mt-4 text-base leading-8 text-[color:var(--portio-text-muted)]">{routeMapDescription}</p>
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
