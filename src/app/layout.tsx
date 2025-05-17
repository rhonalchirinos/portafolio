import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

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
      <body className={`${robotoFont.variable}  ${robotoFontBlod.variable} antialiased`}>{children}</body>
    </html>
  )
}
