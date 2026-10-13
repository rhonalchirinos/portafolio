import { renderToBuffer } from '@react-pdf/renderer'

import { CvPdfDocument } from '@/modules/cv/infrastructure/CvPdfDocument'
import { getCv } from '@/modules/cv/infrastructure/file-system-cv-repository'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const language = searchParams.get('lang') === 'en' ? 'en' : 'es'
  const download = searchParams.get('download') === '1'
  const cv = getCv(language)
  const pdf = await renderToBuffer(<CvPdfDocument cv={cv} />)
  const filename = `rhonal-chirinos-cv-${language}.pdf`

  return new Response(new Uint8Array(pdf), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `${download ? 'attachment' : 'inline'}; filename="${filename}"`,
      'Cache-Control': 'no-store',
    },
  })
}
