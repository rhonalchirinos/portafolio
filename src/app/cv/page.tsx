import { CvPageContent } from '@/app/cv/CvPageContent'
import { getCv } from '@/modules/cv/infrastructure/file-system-cv-repository'

export const dynamic = 'force-dynamic'

export default function CvPage() {
  return <CvPageContent cvByLanguage={{ es: getCv('es'), en: getCv('en') }} />
}
