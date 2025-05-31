import type { Metadata } from 'next'
import './globals.css'
import Menu from './Components/Menu'
import SearchNavBar from './Components/SearchNavBar'
import { Poppins } from 'next/font/google'

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
        <main className="min-h-screen flex">
          <div className="md:w-44 w-44 lg:w-64 xl:w-64 2xl::w-64 bg-indigo-950 hidden sm:block fixed h-screen left-0 top-0 z-50">
            <Menu />
          </div>
          <div className="flex-grow sm:ml-64 overflow-auto">
            <div className="max-w-7xl w-full mx-auto">
              <div className="min-h-[calc(100vh-4rem)] mx-6">
                <div className="flex justify-end">
                  <SearchNavBar />
                </div>
                <div className="pt-16">{children}</div>
              </div>
            </div>
          </div>
          <div className="w-48 hidden sm:block">Publicidad</div>
        </main>
      </body>
    </html>
  )
}
