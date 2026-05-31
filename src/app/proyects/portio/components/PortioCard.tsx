import type { ReactNode } from 'react'

type PortioCardTone = 'default' | 'soft' | 'gradient' | 'dark'

type PortioCardProps = {
  children: ReactNode
  className?: string
  tone?: PortioCardTone
}

const toneClassNames: Record<PortioCardTone, string> = {
  default:
    'border border-[color:var(--portio-primary)]/10 bg-[color:var(--portio-surface)] shadow-[0_14px_34px_rgba(20,48,74,0.06)]',
  soft:
    'border border-[color:var(--portio-primary)]/10 bg-[color:var(--portio-surface-soft)] shadow-[0_12px_30px_rgba(20,48,74,0.05)]',
  gradient:
    'border border-[color:var(--portio-light)] bg-[linear-gradient(135deg,var(--portio-light-soft),var(--portio-surface),var(--portio-hero-gradient-end))] shadow-[0_16px_36px_rgba(20,48,74,0.06)]',
  dark:
    'border border-[color:var(--portio-primary)]/10 bg-[linear-gradient(160deg,var(--portio-architecture-gradient-start),var(--portio-architecture-gradient-end))] text-white shadow-[0_18px_42px_rgba(8,27,41,0.26)]',
}

function joinClassNames(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(' ')
}

export function PortioCard({ children, className, tone = 'default' }: PortioCardProps) {
  return <article className={joinClassNames('rounded-[2rem] p-8', toneClassNames[tone], className)}>{children}</article>
}
