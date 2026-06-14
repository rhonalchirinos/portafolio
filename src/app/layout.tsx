import '@css/globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import Menu from '@components/Menu'
import { Fira_Code, IBM_Plex_Sans, Inter, JetBrains_Mono } from 'next/font/google'
import MenuPhone from '@components/MenuPhone'
import { LanguageProvider, LanguageToggle, ThemeProvider, ThemeToggle } from '@/components/LanguageToggle'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm-plex-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

const firaCode = Fira_Code({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
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
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${ibmPlexSans.variable} ${jetbrainsMono.variable} ${firaCode.variable} antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            <main className="min-h-screen">
              <header className="sticky top-0 z-50 border-b border-[color:var(--header-border)] bg-[color:var(--header-surface)] backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8 lg:py-5">
                  <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[color:var(--header-border)] bg-[color:var(--header-chip)] text-sm font-bold text-[color:var(--header-chip-text)]">
                      RC
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">Portfolio</p>
                      <p className="text-lg font-semibold text-[color:var(--header-text)]">Rhonal Chirinos</p>
                    </div>
                  </Link>
                  <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <LanguageToggle />
                    <div className="relative lg:hidden">
                      <MenuPhone />
                    </div>
                  </div>
                  <Menu />
                </div>
              </header>

              <div className="mx-auto max-w-7xl px-5 pb-16 pt-8 lg:px-8">{children}</div>
            </main>
          </LanguageProvider>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
