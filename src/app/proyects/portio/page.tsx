'use client'

import { useLanguage, useTheme } from '@/components/LanguageToggle'
import { portioDarkThemeStyle, portioLightThemeStyle } from './components/portio-theme'
import { getPortioPageContent } from './components/portio-content'
import { PortioBusinessSection } from './components/PortioBusinessSection'
import { PortioHeroSection } from './components/PortioHeroSection'
import { PortioTechnicalSection } from './components/PortioTechnicalSection'

export default function PortioPage() {
  const { language } = useLanguage()
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const portioThemeStyle = isDark ? portioDarkThemeStyle : portioLightThemeStyle
  const content = getPortioPageContent(language)

  return (
    <div style={portioThemeStyle}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-5%] top-8 h-56 w-56 rounded-full bg-[color:var(--portio-surface-soft)] blur-3xl" />
        <div className="absolute right-0 top-28 h-72 w-72 rounded-full bg-[color:var(--portio-surface-tint)] blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-48 w-48 rounded-full bg-[color:var(--portio-light-soft)] blur-3xl" />
      </div>

      <PortioHeroSection
        hero={content.hero}
      />

      <PortioBusinessSection
        business={content.business}
      />

      <div className="relative my-14 md:my-20">
        <div className="mx-auto h-px w-full max-w-5xl bg-[linear-gradient(90deg,transparent,var(--portio-primary),transparent)] opacity-15" />
      </div>

      <PortioTechnicalSection
        technical={content.technical}
      />
    </div>
  )
}
