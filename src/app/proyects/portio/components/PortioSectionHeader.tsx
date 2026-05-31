type PortioSectionHeaderProps = {
  label: string
  title: string
  description: string
}

export function PortioSectionHeader({ label, title, description }: PortioSectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--portio-accent)]">
        {label}
      </p>
      <h2 className="mt-3 text-4xl font-semibold text-[color:var(--portio-primary)]">{title}</h2>
      <p className="mt-4 text-base leading-8 text-[color:var(--portio-text-muted)]">{description}</p>
    </div>
  )
}
