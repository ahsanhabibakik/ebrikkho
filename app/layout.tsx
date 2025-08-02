import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ebrikkho',
  description: 'A modern web application built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
