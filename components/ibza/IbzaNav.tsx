'use client'

import { useEffect, useState } from 'react'
import { brand } from '../../data/ibza'
import IbzaThemeToggle from './IbzaThemeToggle'

const LINKS = [
  { href: '#services', label: 'Skillset' },
  { href: '#archive', label: 'Archive' },
  { href: '#ecosystem', label: 'Ecosystem' },
  { href: '#profile', label: 'Operator' },
  { href: '#contact', label: 'Contact' },
]

export default function IbzaNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed left-0 top-0 z-50 w-full px-3 pt-3 sm:px-6 sm:pt-5">
      <div className="mx-auto max-w-7xl">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
            scrolled ? 'ibza-panel-strong shadow-[0_10px_40px_rgba(0,0,0,0.5)]' : ''
          }`}
        >
          <a href="#top" className="ibza-mono flex items-center gap-2 text-sm font-bold uppercase tracking-[0.28em] text-[var(--ibza-text)]">
            <span className="ibza-glow-amber">◆</span> {brand.name}
            <span className="hidden text-[var(--ibza-text-faint)] sm:inline">/ {brand.operator}</span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="ibza-mono text-[11px] uppercase tracking-[0.2em] text-[var(--ibza-text-dim)] transition hover:text-[var(--ibza-text)]"
              >
                {l.label}
              </a>
            ))}
            <IbzaThemeToggle />
            <a
              href="#contact"
              className="ibza-mono rounded-full bg-[var(--ibza-amber)] px-5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-black transition hover:scale-105"
            >
              Hire Me
            </a>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <IbzaThemeToggle />
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="ibza-mono flex h-10 w-10 items-center justify-center rounded-full border border-[var(--ibza-line-strong)] text-[var(--ibza-text)]"
            >
              <div className="relative h-5 w-5">
                <span
                  className={`absolute left-0 h-[2px] w-5 rounded bg-current transition-all duration-300 ${
                    open ? 'top-[9px] rotate-45' : 'top-1'
                  }`}
                />
                <span
                  className={`absolute left-0 top-[9px] h-[2px] w-5 rounded bg-current transition-all duration-300 ${
                    open ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 h-[2px] w-5 rounded bg-current transition-all duration-300 ${
                    open ? 'top-[9px] -rotate-45' : 'top-[17px]'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {open && (
          <div className="ibza-panel-strong mt-2 rounded-3xl p-3 md:hidden">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="ibza-mono block rounded-2xl px-4 py-3 text-[12px] uppercase tracking-[0.2em] text-[var(--ibza-text-dim)] transition hover:bg-[var(--ibza-hover)] hover:text-[var(--ibza-text)]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="ibza-mono mt-1 block rounded-2xl bg-[var(--ibza-amber)] px-4 py-3 text-center text-[12px] font-bold uppercase tracking-[0.18em] text-black"
            >
              Hire Me
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
