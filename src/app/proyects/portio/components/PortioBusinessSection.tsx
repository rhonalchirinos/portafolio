import { PortioCard } from './PortioCard'
import { PortioSectionHeader } from './PortioSectionHeader'
import type { PortioBusinessContent } from './portio-types'

type PortioBusinessSectionProps = {
  business: PortioBusinessContent
}

export function PortioBusinessSection({ business }: PortioBusinessSectionProps) {
  return (
    <section className="relative mt-10">
      <PortioSectionHeader
        label={business.sectionLabel}
        title={business.sectionTitle}
        description={business.sectionDescription}
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {business.productHighlights.map((item) => (
          <PortioCard key={item.title}>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--portio-accent)]">
              {business.valueLabel}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[color:var(--portio-primary)]">{item.title}</h2>
            <p className="mt-4 text-base leading-8 text-[color:var(--portio-text-muted)]">{item.description}</p>
          </PortioCard>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <PortioCard>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--portio-secondary)]">
            {business.operationLabel}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[color:var(--portio-primary)]">{business.operationTitle}</h2>
          <p className="mt-4 text-base leading-8 text-[color:var(--portio-text-muted)]">
            {business.operationDescription}
          </p>
          <div className="mt-6 grid gap-3">
            {business.functionalFlow.map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-[1.25rem] border border-[color:var(--portio-primary)]/10 bg-[color:var(--portio-surface-soft)] p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color:var(--portio-accent)] text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <span className="text-sm leading-6 text-[color:var(--portio-text)]">{item}</span>
              </div>
            ))}
          </div>
        </PortioCard>

        <PortioCard tone="gradient">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--portio-accent)]">
            {business.impactLabel}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[color:var(--portio-primary)]">{business.impactTitle}</h2>
          <div className="mt-4 space-y-4 text-base leading-8 text-[color:var(--portio-text-muted)]">
            {business.impactParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </PortioCard>
      </div>
    </section>
  )
}
