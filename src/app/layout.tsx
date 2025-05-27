import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Menu from './Components/Menu'

const robotoFont = localFont({
  src: './fonts/Roboto/Roboto-Light.ttf',
  variable: '--font-roboto-normal',
})

const robotoFontBlod = localFont({
  src: './fonts/Roboto/Roboto-Bold.ttf',
  variable: '--font-roboto-bold',
})

const valeraFont = localFont({
  src: './fonts/varela-round/varela-round-regular.ttf',
  variable: '--font-valera-round',
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
      <body className={`${robotoFont.variable}  ${robotoFontBlod.variable} ${valeraFont.variable} antialiased`}>
        <main className="mx-auto">
          <div className="flex">
            <div className="hidden sm:block w-1/5 md:w-1/5 lg:w-1/6 bg-white rounded-lg shadow-md">
              <Menu />
            </div>
            <div className="sm:w-max md:w-2/4 lg:w-4/5 ">{children}</div>
            <div className="hidden sm:block w-1/5 md:w-1/5 lg:w-1/6 bg-white p-4 rounded-lg shadow-md">Publicidad</div>
          </div>
        </main>
        <footer className="bg-stone-950 p-4 text-center text-gray-50 items-center	flex justify-center h-16">
          <p className="text-sm font-bold">Copyright © 2025 RHO | Powered by Rhonal Chirinos</p>
        </footer>
      </body>
    </html>
  )
}
