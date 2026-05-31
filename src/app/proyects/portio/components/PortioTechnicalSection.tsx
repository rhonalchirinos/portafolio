import { PortioCard } from './PortioCard'
import { PortioSectionHeader } from './PortioSectionHeader'
import type { PortioTechnicalContent } from './portio-types'

type PortioTechnicalSectionProps = {
  technical: PortioTechnicalContent
}

export function PortioTechnicalSection({ technical }: PortioTechnicalSectionProps) {
  return (
    <section className="relative mt-14">
      <PortioSectionHeader
        label={technical.sectionLabel}
        title={technical.sectionTitle}
        description={technical.sectionDescription}
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <PortioCard tone="dark">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--portio-accent)]">
            {technical.architectureLabel}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[color:var(--portio-light)]">{technical.architectureTitle}</h2>
          <p className="mt-4 text-base leading-8 text-white/78">{technical.architectureDescription}</p>

          <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-[color:var(--portio-white-glass)] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--portio-accent)]">
              {technical.architectureDiagramLabel}
            </p>
            <div className="mt-4 grid gap-3">
              {technical.architectureFlow.map((item, index) => (
                <div key={item} className="grid gap-3">
                  <div className="rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/88">
                    {item}
                  </div>
                  {index < technical.architectureFlow.length - 1 && (
                    <div className="flex justify-center text-[color:var(--portio-accent)]">↓</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </PortioCard>

        <PortioCard>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--portio-secondary)]">
            {technical.frontendLabel}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[color:var(--portio-primary)]">{technical.frontendTitle}</h2>
          <p className="mt-4 text-base leading-8 text-[color:var(--portio-text-muted)]">{technical.frontendDescription}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {technical.frontendStack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[color:var(--portio-primary)]/10 bg-[color:var(--portio-surface-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--portio-secondary)]"
              >
                {item}
              </span>
            ))}
          </div>
        </PortioCard>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <PortioCard>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--portio-secondary)]">
            {technical.backendLabel}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[color:var(--portio-primary)]">{technical.backendTitle}</h2>
          <p className="mt-4 text-base leading-8 text-[color:var(--portio-text-muted)]">{technical.backendDescription}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {technical.backendStack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[color:var(--portio-primary)]/10 bg-[color:var(--portio-surface-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--portio-secondary)]"
              >
                {item}
              </span>
            ))}
          </div>
        </PortioCard>

        <PortioCard>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--portio-secondary)]">
            {technical.routeMapLabel}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[color:var(--portio-primary)]">{technical.routeMapTitle}</h2>
          <p className="mt-4 text-base leading-8 text-[color:var(--portio-text-muted)]">{technical.routeMapDescription}</p>
          <div className="mt-6 space-y-3">
            {technical.routeMap.map((item) => (
              <div
                key={item.route}
                className="rounded-[1.25rem] border border-[color:var(--portio-primary)]/10 bg-[color:var(--portio-surface-soft)] p-4"
              >
                <p className="text-sm font-semibold text-[color:var(--portio-primary)]">{item.route}</p>
                <p className="mt-1 text-sm leading-6 text-[color:var(--portio-text-muted)]">{item.detail}</p>
              </div>
            ))}
          </div>
        </PortioCard>
      </div>
    </section>
  )
}
