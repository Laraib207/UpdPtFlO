'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import CustomCursor from './CustomCursor'

// The home page ("/") and all iBzA ecosystem pages render their own
// immersive nav + cursor. Everywhere else we keep the standard site
// chrome (global header + cursor).
export default function SiteChrome() {
  const pathname = usePathname()
  const isImmersive = pathname === '/' || pathname.startsWith('/ibza-')

  if (isImmersive) return null

  return (
    <>
      <CustomCursor />
      <Header />
    </>
  )
}
