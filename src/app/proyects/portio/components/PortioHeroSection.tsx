import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

type PortioHeroSectionProps = {
  heroLabel: string
  heroTitle: string
  heroDescription: string
  heroBody: string
  primaryActionLabel: string
  secondaryActionLabel: string
  purposeLabel: string
  purposeDescription: string
  approachLabel: string
  approachDescription: string
}

export function PortioHeroSection({
  heroLabel,
  heroTitle,
  heroDescription,
  heroBody,
  primaryActionLabel,
  secondaryActionLabel,
  purposeLabel,
  purposeDescription,
  approachLabel,
  approachDescription,
}: PortioHeroSectionProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-[color:var(--portio-light)] bg-[linear-gradient(135deg,var(--portio-hero-gradient-start),var(--portio-surface),var(--portio-hero-gradient-end))] p-8 shadow-[0_18px_50px_rgba(20,48,74,0.08)] md:p-10">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--portio-accent)]">
            {heroLabel}
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[color:var(--portio-primary)] md:text-5xl">{heroTitle}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[color:var(--portio-text-muted)]">{heroDescription}</p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[color:var(--portio-text-muted)]">{heroBody}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="https://portio.rhodeveloper.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--portio-accent)] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(240,138,93,0.28)] transition hover:brightness-105"
            >
              {primaryActionLabel}
              <FaArrowUpRightFromSquare className="text-xs" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--portio-primary)]/10 bg-[color:var(--portio-surface)] px-5 py-3 text-sm font-semibold text-[color:var(--portio-primary)] transition hover:bg-[color:var(--portio-light-wash)]"
            >
              {secondaryActionLabel}
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[1.75rem] border border-[color:var(--portio-primary)]/10 bg-[color:var(--portio-surface)] p-6 shadow-[0_12px_30px_rgba(20,48,74,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--portio-secondary)]">
              {purposeLabel}
            </p>
            <p className="mt-3 text-sm leading-7 text-[color:var(--portio-text-muted)]">{purposeDescription}</p>
          </div>
          <div className="rounded-[1.75rem] border border-[color:var(--portio-primary)]/10 bg-[color:var(--portio-surface-soft)] p-6 shadow-[0_12px_30px_rgba(20,48,74,0.05)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--portio-secondary)]">
              {approachLabel}
            </p>
            <p className="mt-3 text-sm leading-7 text-[color:var(--portio-text-muted)]">{approachDescription}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
