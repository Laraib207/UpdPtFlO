import './globals.css'
import type { ReactNode } from 'react'
import SiteChrome from '../components/SiteChrome'
import { ThemeProvider } from '../context/ThemeContext'

export const metadata = {
  metadataBase: new URL('https://thelaraib.com'),
  title: 'iBzA — TheLaraib | Full-Stack Developer, Brand & Growth Studio',
  description:
    'iBzA by TheLaraib (Laraib Siddiqui) — full-stack development, brand identity, and digital marketing & growth. Building web apps, brands, and lead-generating systems from Noida, India.',
  keywords: [
    'TheLaraib',
    'iBzA',
    'full stack developer India',
    'full stack developer Noida',
    'brand strategy',
    'digital marketing',
    'Next.js developer',
    'React developer',
    'web developer Bihar',
    'freelance developer India',
    'growth strategist',
  ],
  authors: [{ name: 'Laraib Siddiqui' }],
  openGraph: {
    title: 'iBzA — TheLaraib | Full-Stack Developer & Growth Studio',
    description:
      'Full-stack development, brand identity, and digital marketing. Building products, brands, and lead-generating systems.',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 1200, alt: 'iBzA — TheLaraib' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iBzA — TheLaraib | Full-Stack Developer & Growth Studio',
    description:
      'Full-stack development, brand identity, and digital marketing. Building products, brands, and lead-generating systems.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="theme-body antialiased">
        <ThemeProvider>
          <SiteChrome />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}