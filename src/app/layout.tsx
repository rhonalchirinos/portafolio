import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Link from 'next/link'

const robotoFont = localFont({
  src: './fonts/Roboto/Roboto-Light.ttf',
  variable: '--font-roboto-normal',
})

const robotoFontBlod = localFont({
  src: './fonts/Roboto/Roboto-Bold.ttf',
  variable: '--font-roboto-bold',
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
      <body className={`${robotoFont.variable}  ${robotoFontBlod.variable} antialiased`}>
        <main className="container mx-auto p-4 ">
          <Link className="text-blue-500 hover:underline" href="/">
            <h1 className="text-3xl font-bold mb-4">Welcome to RHO</h1>
          </Link>
          <div className="flex ">
            <div className="flex w-2 md:w-32 lg:w-64">
              <nav>
                <ul className="list-none">
                  <li className="mb-2">
                    <Link className="text-blue-500 hover:underline" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link className="text-blue-500 hover:underline" href="/python">
                      Python
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link className="text-blue-500 hover:underline" href="/docker">
                      Docker
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link className="text-blue-500 hover:underline" href="/docker">
                      Kubernates
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link className="text-blue-500 hover:underline" href="/docker">
                      AWS
                    </Link>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-blue-500 hover:underline">
                      Gaussian
                    </a>
                  </li>
                  <li className="mb-2">
                    <Link className="text-blue-500 hover:underline" href="/profile">
                      My Profile
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="w-5/6">{children}</div>
          </div>
        </main>
        <footer className="bg-stone-950 p-4 text-center text-gray-50 items-center	flex justify-center h-16">
          <p className="text-sm font-bold">Copyright © 2025 RHO | Powered by Rhonal Chirinos</p>
        </footer>
      </body>
    </html>
  )
}
