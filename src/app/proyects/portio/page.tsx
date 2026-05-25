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
        heroLabel={content.hero.label}
        heroTitle={content.hero.title}
        heroDescription={content.hero.description}
        heroBody={content.hero.body}
        primaryActionLabel={content.hero.primaryActionLabel}
        secondaryActionLabel={content.hero.secondaryActionLabel}
        purposeLabel={content.hero.purposeLabel}
        purposeDescription={content.hero.purposeDescription}
        approachLabel={content.hero.approachLabel}
        approachDescription={content.hero.approachDescription}
      />

      <PortioBusinessSection
        businessSectionLabel={content.business.sectionLabel}
        businessSectionTitle={content.business.sectionTitle}
        businessSectionDescription={content.business.sectionDescription}
        productHighlights={content.business.productHighlights}
        functionalFlow={content.business.functionalFlow}
        valueLabel={content.business.valueLabel}
        operationLabel={content.business.operationLabel}
        operationTitle={content.business.operationTitle}
        operationDescription={content.business.operationDescription}
        impactLabel={content.business.impactLabel}
        impactTitle={content.business.impactTitle}
        impactParagraphs={content.business.impactParagraphs}
      />

      <div className="relative my-14 md:my-20">
        <div className="mx-auto h-px w-full max-w-5xl bg-[linear-gradient(90deg,transparent,var(--portio-primary),transparent)] opacity-15" />
      </div>

      <PortioTechnicalSection
        technicalSectionLabel={content.technical.sectionLabel}
        technicalSectionTitle={content.technical.sectionTitle}
        technicalSectionDescription={content.technical.sectionDescription}
        architectureFlow={content.technical.architectureFlow}
        frontendStack={content.technical.frontendStack}
        backendStack={content.technical.backendStack}
        routeMap={content.technical.routeMap}
        architectureLabel={content.technical.architectureLabel}
        architectureTitle={content.technical.architectureTitle}
        architectureDescription={content.technical.architectureDescription}
        architectureDiagramLabel={content.technical.architectureDiagramLabel}
        frontendLabel={content.technical.frontendLabel}
        frontendTitle={content.technical.frontendTitle}
        frontendDescription={content.technical.frontendDescription}
        backendLabel={content.technical.backendLabel}
        backendTitle={content.technical.backendTitle}
        backendDescription={content.technical.backendDescription}
        routeMapLabel={content.technical.routeMapLabel}
        routeMapTitle={content.technical.routeMapTitle}
        routeMapDescription={content.technical.routeMapDescription}
      />
    </div>
  )
}
