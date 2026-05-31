import './globals.css'
import type { ReactNode } from 'react'
import SiteChrome from '../components/SiteChrome'
import { ThemeProvider } from '../context/ThemeContext'

export const metadata = {
  metadataBase: new URL('https://thelaraib.com'),
  title: 'iBzA — TheLaraib | Full-Stack Developer, Brand Strategist & Creative Thinker',
  description:
    'iBzA by TheLaraib (Laraib Siddiqui) — full-stack developer, brand strategist and creative thinker. I build standout portfolios, web apps, brand identities and lead-generating growth systems. Available for projects worldwide, based in Noida, India.',
  applicationName: 'iBzA — TheLaraib',
  keywords: [
    // Brand
    'iBzA',
    'TheLaraib',
    'iBzA TheLaraib',
    'Laraib Siddiqui',
    'iBzA studio',
    // Core roles (lead intent)
    'full stack developer',
    'full stack developer India',
    'full stack developer Noida',
    'freelance web developer',
    'hire web developer India',
    'portfolio website developer',
    'Next.js developer',
    'React developer',
    'web app developer',
    // Branding + growth (high-intent)
    'brand identity designer',
    'branding expert',
    'digital marketing expert',
    'growth strategist',
    'business growth consultant',
    'creative technologist',
    'great thinker',
    'product launch',
    // Local
    'web developer Bihar',
    'developer Aurangabad',
  ],
  authors: [{ name: 'Laraib Siddiqui', url: 'https://github.com/Laraib207' }],
  creator: 'TheLaraib (Laraib Siddiqui)',
  publisher: 'iBzA',
  category: 'technology',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'iBzA — TheLaraib | Full-Stack Developer, Brand Strategist & Creative Thinker',
    description:
      'Full-stack development, bold brand identity, and digital marketing & growth. I build portfolios, products and lead-generating systems that leave a mark.',
    url: 'https://thelaraib.com',
    siteName: 'iBzA — TheLaraib',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og-image.png', width: 1200, height: 1200, alt: 'iBzA — TheLaraib logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iBzA — TheLaraib | Developer, Brand Strategist & Creative Thinker',
    description:
      'Full-stack development, brand identity, and digital marketing. Building products, brands, and lead-generating systems.',
    images: ['/og-image.png'],
  },
}

// Structured data (JSON-LD) — helps Google show the brand logo, name
// and rich info in search results (like a knowledge panel).
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Laraib Siddiqui',
  alternateName: 'TheLaraib',
  url: 'https://thelaraib.com',
  image: 'https://thelaraib.com/og-image.png',
  logo: 'https://thelaraib.com/icon.png',
  jobTitle: 'Full-Stack Developer · Brand & Growth Strategist',
  worksFor: { '@type': 'Organization', name: 'iBzA', logo: 'https://thelaraib.com/icon.png' },
  brand: { '@type': 'Brand', name: 'iBzA' },
  address: { '@type': 'PostalAddress', addressLocality: 'Noida', addressCountry: 'India' },
  email: 'mailto:laraibsiddiqui10ki@gmail.com',
  sameAs: ['https://github.com/Laraib207'],
  knowsAbout: [
    'Full-Stack Development',
    'Next.js',
    'React',
    'Brand Identity',
    'Digital Marketing',
    'Growth Strategy',
  ],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="theme-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <SiteChrome />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}