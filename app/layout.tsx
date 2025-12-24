import './globals.css'
import type { ReactNode } from 'react'
import Header from '../components/Header'
import ThemeProvider from '../context/ThemeContext'

export const metadata = {
  title: 'Laraib | @iBzA | Technology Enthusiast & Developer',
  description: 'Personal portfolio built with Next.js and Tailwind CSS. Showcasing projects, skills, and services offered by Laraib.',
  other: {
    'google-site-verification': '9kYS-oeaGcTlgCSF_f4zeecc2RpfbWbav5awcDmeGaw',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="transition-colors duration-300">
        {/* inline theme script to avoid flash */}
        <script dangerouslySetInnerHTML={{__html: `(function(){try{const t=localStorage.getItem("theme");if(t){document.documentElement.classList.add(t);}else if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches){document.documentElement.classList.add("dark");}}catch(e){} })()`}} />
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
