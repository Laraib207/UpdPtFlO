import './globals.css'
import type { ReactNode } from 'react'
import HeaderWorking from '../components/HeaderWorking'

export const metadata = {
  title: 'Laraib |@iBzA| Technology Enthusiast & Developer',
  description: 'Personal portfolio built with Next.js and Tailwind CSS',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-800">
        <HeaderWorking />
        <main className="max-w-6xl mx-auto px-6 md:px-8">
          {children}
        </main>
      </body>
    </html>
  )
}
