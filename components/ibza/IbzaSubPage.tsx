'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import IbzaCursor from './IbzaCursor'
import IbzaThemeToggle from './IbzaThemeToggle'
import { brand } from '../../data/ibza'

type Props = {
  code: string
  kicker: string
  title: string
  highlight?: string
  status: string
  children: React.ReactNode
}

// Shared Tech-Noir shell for all iBzA ecosystem sub-pages.
export default function IbzaSubPage({ code, kicker, title, highlight, status, children }: Props) {
  return (
    <div className="ibza-scope relative min-h-screen overflow-x-hidden">
      <IbzaCursor />

      {/* top bar */}
      <div className="fixed left-0 top-0 z-50 w-full px-3 pt-3 sm:px-6 sm:pt-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full ibza-panel-strong px-5 py-3">
          <Link href="/" className="ibza-mono flex items-center gap-2 text-sm font-bold uppercase tracking-[0.24em] text-[var(--ibza-text)]">
            <span className="transition-transform hover:-translate-x-1">←</span>
            <span className="ibza-glow-amber">◆</span> {brand.name}
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/#ecosystem"
              className="ibza-mono hidden text-[11px] uppercase tracking-[0.2em] text-[var(--ibza-text-dim)] transition hover:text-[var(--ibza-text)] sm:inline"
            >
              Universe
            </Link>
            <Link
              href="/#contact"
              className="ibza-mono hidden text-[11px] uppercase tracking-[0.2em] text-[var(--ibza-text-dim)] transition hover:text-[var(--ibza-text)] sm:inline"
            >
              Contact
            </Link>
            <IbzaThemeToggle />
          </div>
        </div>
      </div>

      <div className="ibza-grid-bg pointer-events-none fixed inset-0 opacity-40" />

      <main className="ibza-scanlines relative px-5 pt-32 pb-24 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="ibza-chip">{code}</span>
              <span className="ibza-tag">{kicker}</span>
              <span className="ibza-tag inline-flex items-center gap-2 text-[var(--ibza-teal)]">
                <span className="ibza-ping"><span /><span /></span> {status}
              </span>
            </div>

            <h1 className="ibza-display mt-6 text-5xl text-[var(--ibza-text)] sm:text-7xl">
              {title} {highlight && <span className="ibza-glow-amber">{highlight}</span>}
            </h1>
          </motion.div>

          <div className="mt-12">{children}</div>
        </div>
      </main>
    </div>
  )
}
