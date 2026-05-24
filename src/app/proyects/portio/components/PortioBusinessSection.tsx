type Highlight = {
  title: string
  description: string
}

type PortioBusinessSectionProps = {
  businessSectionLabel: string
  businessSectionTitle: string
  businessSectionDescription: string
  productHighlights: Highlight[]
  functionalFlow: string[]
  valueLabel: string
  operationLabel: string
  operationTitle: string
  operationDescription: string
  impactLabel: string
  impactTitle: string
  impactParagraphs: string[]
}

export function PortioBusinessSection({
  businessSectionLabel,
  businessSectionTitle,
  businessSectionDescription,
  productHighlights,
  functionalFlow,
  valueLabel,
  operationLabel,
  operationTitle,
  operationDescription,
  impactLabel,
  impactTitle,
  impactParagraphs,
}: PortioBusinessSectionProps) {
  return (
    <section className="relative mt-10">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--portio-accent)]">
          {businessSectionLabel}
        </p>
        <h2 className="mt-3 text-4xl font-semibold text-[color:var(--portio-primary)]">{businessSectionTitle}</h2>
        <p className="mt-4 text-base leading-8 text-[color:var(--portio-text-muted)]">
          {businessSectionDescription}
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {productHighlights.map((item) => (
          <article
            key={item.title}
            className="rounded-[2rem] border border-[color:var(--portio-primary)]/10 bg-[color:var(--portio-surface)] p-8 shadow-[0_14px_34px_rgba(20,48,74,0.06)]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--portio-accent)]">
              {valueLabel}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[color:var(--portio-primary)]">{item.title}</h2>
            <p className="mt-4 text-base leading-8 text-[color:var(--portio-text-muted)]">{item.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-[2rem] border border-[color:var(--portio-primary)]/10 bg-[color:var(--portio-surface)] p-8 shadow-[0_14px_34px_rgba(20,48,74,0.06)]">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--portio-secondary)]">
            {operationLabel}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[color:var(--portio-primary)]">{operationTitle}</h2>
          <p className="mt-4 text-base leading-8 text-[color:var(--portio-text-muted)]">
            {operationDescription}
          </p>
          <div className="mt-6 grid gap-3">
            {functionalFlow.map((item, index) => (
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
        </article>

        <article className="rounded-[2rem] border border-[color:var(--portio-light)] bg-[linear-gradient(135deg,var(--portio-light-soft),var(--portio-surface),var(--portio-hero-gradient-end))] p-8 shadow-[0_16px_36px_rgba(20,48,74,0.06)]">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--portio-accent)]">
            {impactLabel}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[color:var(--portio-primary)]">{impactTitle}</h2>
          <div className="mt-4 space-y-4 text-base leading-8 text-[color:var(--portio-text-muted)]">
            {impactParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
