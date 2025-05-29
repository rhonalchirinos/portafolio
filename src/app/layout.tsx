import type { Metadata } from 'next'
import './globals.css'
import Menu from './Components/Menu'
import SearchNavBar from './Components/SearchNavBar'

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
      <body className={`bg-slate-50 antialiased`}>
        <main className="min-h-screen flex">
          <div className="w-64 bg-indigo-950 hidden sm:block">
            <Menu />
          </div>
          <div className="flex-grow mx-4 px-5 overflow-auto">
            <div className="max-w-7xl w-full mx-auto px-4 py-8">
              <SearchNavBar />
              <div className="min-h-[calc(100vh-4rem)]">{children}</div>
            </div>
          </div>
          <div className="w-48 hidden sm:block">Publicidad</div>
        </main>
      </body>
    </html>
  )
}
