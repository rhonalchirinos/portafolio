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
      <body
        className={`${robotoFont.variable}  ${robotoFontBlod.variable} ${valeraFont.variable} bg-slate-50 antialiased`}
      >
        <main className="mx-auto">
          <div className="flex">
            <div className="hidden sm:block w-1/5 md:w-1/5 lg:w-1/6 bg-indigo-950">
              <Menu />
            </div>
            <div className="sm:w-max md:w-2/4 lg:w-4/5 mx-4 px-5">
              <div className="w-full max-w-sm min-w-[200px]">
                <div className="relative">
                  <input
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="UI Kits, Dashboards..."
                  />
                  <button
                    className="absolute top-1 right-1 font-bold flex items-center rounded bg-indigo-950 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Search
                  </button>
                </div>
              </div>
              <div>{children}</div>
            </div>
            <div className="hidden sm:block w-1/5 md:w-1/5 lg:w-1/6 bg-indigo p-4 bg-slate-50">Publicidad</div>
          </div>
        </main>
        <footer className="bg-stone-950 p-4 text-center text-gray-50 items-center	flex justify-center h-16">
          <p className="text-sm font-bold">Copyright © 2025 RHO | Powered by Rhonal Chirinos</p>
        </footer>
      </body>
    </html>
  )
}
