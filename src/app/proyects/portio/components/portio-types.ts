export type Highlight = {
  title: string
  description: string
}

export type RouteMapItem = {
  route: string
  detail: string
}

export type PortioHeroContent = {
  label: string
  title: string
  description: string
  body: string
  primaryActionLabel: string
  secondaryActionLabel: string
  purposeLabel: string
  purposeDescription: string
  approachLabel: string
  approachDescription: string
}

export type PortioBusinessContent = {
  sectionLabel: string
  sectionTitle: string
  sectionDescription: string
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

export type PortioTechnicalContent = {
  sectionLabel: string
  sectionTitle: string
  sectionDescription: string
  architectureFlow: string[]
  frontendStack: string[]
  backendStack: string[]
  routeMap: RouteMapItem[]
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

export type PortioPageContent = {
  hero: PortioHeroContent
  business: PortioBusinessContent
  technical: PortioTechnicalContent
}
