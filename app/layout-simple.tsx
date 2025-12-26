import './globals.css'
import type { ReactNode } from 'react'
import HeaderSimple from '../components/HeaderSimple'

export const metadata = {
  title: 'Laraib | | @iBzA | Technology Enthusiast & Developer',
  description: 'Personal portfolio built with Next.js and Tailwind CSS',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-800">
        <HeaderSimple />
        <main className="max-w-6xl mx-auto px-6 md:px-8">
          {children}
        </main>
      </body>
    </html>
  )
}
