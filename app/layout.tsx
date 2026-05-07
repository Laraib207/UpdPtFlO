import './globals.css'
import type { ReactNode } from 'react'
import Header from '../components/Header'
import CustomCursor from '../components/CustomCursor'
import { ThemeProvider } from '../context/ThemeContext'

export const metadata = {
  title: 'Laraib Siddiqui — Interactive Developer Portfolio',
  description:
    'A cinematic portfolio built with Next.js, Tailwind CSS, and Framer Motion.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="theme-body antialiased">
        <ThemeProvider>
          <CustomCursor />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}