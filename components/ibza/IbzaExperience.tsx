'use client'

import { useState } from 'react'
import IbzaBoot from './IbzaBoot'
import IbzaCursor from './IbzaCursor'
import IbzaNav from './IbzaNav'
import IbzaHero from './IbzaHero'
import IbzaMarquee from './IbzaMarquee'
import IbzaServices from './IbzaServices'
import IbzaArchive from './IbzaArchive'
import IbzaProducts from './IbzaProducts'
import IbzaProfile from './IbzaProfile'
import IbzaContact from './IbzaContact'
import IbzaFooter from './IbzaFooter'
import IbzaWhatsApp from './IbzaWhatsApp'

export default function IbzaExperience() {
  const [booted, setBooted] = useState(false)

  return (
    <div id="top" className="ibza-scope relative min-h-screen overflow-x-hidden">
      <IbzaBoot onDone={() => setBooted(true)} />
      <IbzaCursor />
      <IbzaNav />

      <main className={`transition-opacity duration-700 ${booted ? 'opacity-100' : 'opacity-0'}`}>
        <IbzaHero />
        <IbzaMarquee />
        <IbzaServices />
        <IbzaArchive />
        <IbzaProducts />
        <IbzaProfile />
        <IbzaContact />
        <IbzaFooter />
      </main>

      <IbzaWhatsApp />
    </div>
  )
}
