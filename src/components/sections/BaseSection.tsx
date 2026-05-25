import type { ElementType, HTMLAttributes, ReactNode } from 'react'

type BaseSectionTone = 'default' | 'soft' | 'hero' | 'gradient'
type BaseSectionPadding = 'md' | 'lg'

type BaseSectionProps<T extends ElementType = 'section'> = {
  as?: T
  children: ReactNode
  className?: string
  tone?: BaseSectionTone
  padding?: BaseSectionPadding
} & Omit<HTMLAttributes<HTMLElement>, 'children' | 'className'>

const toneClassNames: Record<BaseSectionTone, string> = {
  default: 'section-card',
  soft: 'section-card section-card-soft',
  hero: 'section-card section-card-hero',
  gradient: 'section-card section-card-gradient',
}

const paddingClassNames: Record<BaseSectionPadding, string> = {
  md: 'p-8',
  lg: 'p-8 md:p-10',
}

function joinClassNames(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(' ')
}

export function BaseSection<T extends ElementType = 'section'>({
  as,
  children,
  className,
  tone = 'default',
  padding = 'md',
  ...props
}: BaseSectionProps<T>) {
  const Component = (as ?? 'section') as ElementType

  return (
    <Component className={joinClassNames(toneClassNames[tone], paddingClassNames[padding], className)} {...props}>
      {children}
    </Component>
  )
}
