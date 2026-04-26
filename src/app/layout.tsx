import '@css/globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import Menu from '@components/Menu'
import { Poppins } from 'next/font/google'
import MenuPhone from '@components/MenuPhone'
import { LanguageProvider, LanguageToggle } from '@/components/LanguageToggle'

const font = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Programando ando!!!',
  description: '........',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-slate-50 antialiased`}>
        <LanguageProvider>
          <main className="min-h-screen">
            <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
              <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
                <Link href="/" className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-950 text-sm font-bold text-white">
                    RC
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">Portfolio</p>
                    <p className="text-lg font-semibold text-slate-900">Rhonal Chirinos</p>
                  </div>
                </Link>
                <div className="relative">
                  <MenuPhone />
                </div>
                <LanguageToggle />
                <Menu />
              </div>
            </header>

            <div className="mx-auto max-w-7xl px-5 pb-12 pt-6 lg:px-8">{children}</div>
          </main>
        </LanguageProvider>
      </body>
    </html>
  )
}
