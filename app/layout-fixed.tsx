import './globals.css'
import type { ReactNode } from 'react'
import Header from '../components/Header'
import ThemeProvider from '../context/ThemeContext'

export const metadata = {
  title: 'Laraib | | @iBzA | Technology Enthusiast & Developer',
  description: 'Personal portfolio built with Next.js and Tailwind CSS',
}

function LayoutContent({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-800 dark:bg-slate-900 dark:text-white transition-colors duration-300">
        <ThemeProvider>
          <Header />
          <main className="max-w-6xl mx-auto px-6 md:px-8">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return <LayoutContent>{children}</LayoutContent>
}
