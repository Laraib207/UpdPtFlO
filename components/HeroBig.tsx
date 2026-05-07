// 'use client'

// import { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'

// export default function HeroBig() {
//   const [position, setPosition] = useState({ x: 50, y: 50 })

//   useEffect(() => {
//     const move = (e: MouseEvent) => {
//       const x = (e.clientX / window.innerWidth) * 100
//       const y = (e.clientY / window.innerHeight) * 100
//       setPosition({ x, y })
//     }

//     window.addEventListener('mousemove', move)
//     return () => window.removeEventListener('mousemove', move)
//   }, [])

//   return (
//     <section className="noise-overlay relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white flex items-end">
//       <div
//         className="pointer-events-none absolute inset-0 opacity-90"
//         style={{
//           background: `radial-gradient(circle at ${position.x}% ${position.y}%, rgba(255,255,255,0.16), rgba(255,255,255,0.05) 16%, rgba(10,10,10,0.96) 36%, rgba(10,10,10,1) 60%)`,
//         }}
//       />

//       <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_20%,transparent_80%,rgba(255,255,255,0.03))]" />

//       <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-8 pb-16 md:pb-20 pt-32">
//         <motion.div
//           initial={{ opacity: 0, y: 28 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//           className="mb-10"
//         >
//          <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-white/45 mb-6">
//   Laraib Siddiqui
// </p>
// <p className="text-[13px] md:text-[15px] uppercase tracking-[0.3em] text-white/40 mb-8">
//   Full-Stack Developer
// </p>

//           <div className="overflow-hidden">
//             <motion.h1
//               initial={{ opacity: 0, y: 80 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
//               className="hero-title text-[15vw] md:text-[9rem] font-semibold"
//             >
//               DIGITAL
//             </motion.h1>
//           </div>

//           <div className="overflow-hidden">
//             <motion.h1
//               initial={{ opacity: 0, y: 80 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
//               className="text-[15vw] md:text-[9rem] leading-[0.88] font-semibold tracking-[-0.05em]"
//             >
//               EXPERIENCE
//             </motion.h1>
//           </div>

//           <div className="mt-10 max-w-2xl">
//             <motion.p
//               initial={{ opacity: 0, y: 22 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.35 }}
//               className="text-base md:text-xl leading-8 text-white/62"
//             >
//             I craft cinematic digital experiences with motion, structure, and a strong visual point of view.
//             </motion.p>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 18 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.45, duration: 0.8 }}
//           className="flex flex-wrap items-center gap-4 md:gap-6"
//         >
//           <a
//             href="#work"
//             className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-300"
//           >
//             Selected Work
//           </a>
//           <a
//             href="#contact"
//             className="inline-flex items-center text-sm uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-300"
//           >
//             Let’s Talk
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   )
// }



// 'use client'

// import Link from 'next/link'
// import { useEffect, useState } from 'react'

// export default function HeroBig() {
//   const [position, setPosition] = useState({ x: 50, y: 30 })

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const x = (e.clientX / window.innerWidth) * 100
//       const y = (e.clientY / window.innerHeight) * 100
//       setPosition({ x, y })
//     }

//     window.addEventListener('mousemove', handleMouseMove)
//     return () => window.removeEventListener('mousemove', handleMouseMove)
//   }, [])

//   return (
//     <section className="relative min-h-screen overflow-hidden">
//       <div
//         className="pointer-events-none absolute inset-0 transition-all duration-300"
//         style={{
//           background: `radial-gradient(circle at ${position.x}% ${position.y}%, var(--spotlight-a), var(--spotlight-b) 32%)`,
//         }}
//       />

//       <div className="max-w-6xl mx-auto px-6 md:px-8 pt-36 md:pt-44 pb-20 md:pb-24 relative z-10">
//         <div className="max-w-5xl">
//           <p className="text-xs md:text-sm uppercase tracking-[0.4em] theme-text-muted mb-5">
//             Laraib Siddiqui
//           </p>

//           <p className="text-[13px] md:text-[15px] uppercase tracking-[0.3em] theme-text-muted mb-8">
//             Full-Stack Developer
//           </p>

//           <h1 className="hero-title text-5xl sm:text-6xl md:text-8xl font-semibold leading-[0.9] theme-text-primary max-w-5xl">
//             I craft cinematic digital experiences with motion, structure, and a strong visual point of view.
//           </h1>

//           <p className="mt-8 text-base md:text-xl leading-8 max-w-2xl theme-text-secondary">
//             I build premium frontend interfaces, modern brand websites, and polished portfolio experiences that feel intentional, contemporary, and distinct.
//           </p>

//           <div className="mt-12 flex flex-wrap items-center gap-4">
//             <Link
//               href="/work"
//               className="inline-flex items-center rounded-full px-7 py-4 text-sm uppercase tracking-[0.2em] transition-all duration-300"
//               style={{
//                 background: 'var(--text-primary)',
//                 color: 'var(--bg)',
//               }}
//             >
//               View Work
//             </Link>

//             <Link
//               href="/contact"
//               className="theme-button inline-flex items-center rounded-full px-7 py-4 text-sm uppercase tracking-[0.2em]"
//             >
//               Contact Me
//             </Link>
//           </div>

//           <div className="mt-16 flex items-center justify-between md:justify-start gap-8">
//             <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] theme-text-muted">
//               <span
//                 className="h-2 w-2 rounded-full"
//                 style={{ background: 'var(--text-muted)' }}
//               />
//               <span>Open for work</span>
//             </div>

//             <div className="hidden md:flex flex-col items-center gap-2 theme-text-muted">
//               <span className="text-xs uppercase tracking-[0.25em]">Scroll</span>
//               <div
//                 className="w-px h-12"
//                 style={{
//                   background:
//                     'linear-gradient(to bottom, var(--text-muted), transparent)',
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }




'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function HeroBig() {
  const [position, setPosition] = useState({ x: 50, y: 30 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      setPosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${position.x}% ${position.y}%, var(--spotlight-a), var(--spotlight-b) 32%)`,
        }}
      />

      <div className="hero-photo-shell">
        <div className="hero-glow" />
        <img
          src="/images/LaRaiBB.png"
          alt="Laraib Siddiqui portrait"
          className="hero-photo"
          loading="eager"
          decoding="async"
        />
        <div className="hero-photo-overlay" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-36 md:pt-44 pb-20 md:pb-24 relative z-10">
        <div className="max-w-5xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.4em] theme-text-muted mb-5">
            Laraib Siddiqui
          </p>

          <p className="text-[13px] md:text-[15px] uppercase tracking-[0.3em] theme-text-muted mb-8">
            Full-Stack Developer
          </p>

          <h1 className="hero-title text-5xl sm:text-6xl md:text-8xl font-semibold leading-[0.9] theme-text-primary max-w-4xl">
            I craft digital experiences with motion, clarity, and modern frontend precision.
          </h1>

          <p className="mt-8 text-base md:text-xl leading-8 max-w-2xl theme-text-secondary">
            I build premium frontend interfaces, portfolio websites, and polished
            product experiences that feel intentional across both desktop and mobile.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              href="/work"
              className="inline-flex items-center rounded-full px-7 py-4 text-sm uppercase tracking-[0.2em] transition-all duration-300"
              style={{
                background: 'var(--text-primary)',
                color: 'var(--bg)',
              }}
            >
              View Work
            </Link>

            <Link
              href="/contact"
              className="theme-button inline-flex items-center rounded-full px-7 py-4 text-sm uppercase tracking-[0.2em]"
            >
              Contact Me
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            <div className="theme-card-strong rounded-[22px] px-5 py-5">
              <p className="text-[11px] uppercase tracking-[0.25em] theme-text-muted mb-2">
                Focus
              </p>
              <p className="text-sm theme-text-secondary">
                Next.js, React, UI systems, and motion-driven frontend work.
              </p>
            </div>

            <div className="theme-card-strong rounded-[22px] px-5 py-5">
              <p className="text-[11px] uppercase tracking-[0.25em] theme-text-muted mb-2">
                Approach
              </p>
              <p className="text-sm theme-text-secondary">
                Clean structure, responsive layouts, and strong visual hierarchy.
              </p>
            </div>

            <div className="theme-card-strong rounded-[22px] px-5 py-5">
              <p className="text-[11px] uppercase tracking-[0.25em] theme-text-muted mb-2">
                Availability
              </p>
              <p className="text-sm theme-text-secondary">
                Open for freelance, contract, and full-time opportunities.
              </p>
            </div>
          </div>

          <div className="mt-14 flex items-center justify-between md:justify-start gap-8">
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] theme-text-muted">
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: 'var(--text-muted)' }}
              />
              <span>Open for work</span>
            </div>

            <div className="hidden md:flex flex-col items-center gap-2 theme-text-muted">
              <span className="text-xs uppercase tracking-[0.25em]">Scroll</span>
              <div
                className="w-px h-12"
                style={{
                  background:
                    'linear-gradient(to bottom, var(--text-muted), transparent)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}