'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { brand } from '../../data/ibza'

export default function IbzaFooter() {
  return (
    <footer className="relative border-t border-[var(--ibza-line)] px-5 pt-20 pb-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Mastermind feature */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]"
        >
          {/* Portrait */}
          <div className="relative mx-auto w-full max-w-xs">
            <div className="ibza-frame relative overflow-hidden rounded-[1.75rem] border border-[var(--ibza-line-strong)]">
              <div className="relative aspect-[3/4]">
                <Image
                  src="/images/intro-side.jpg"
                  alt={`${brand.fullName} — the mastermind behind iBzA`}
                  fill
                  className="object-cover grayscale transition duration-700 hover:grayscale-0"
                />
                {/* cinematic gradient + tint */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--ibza-void)] via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-0 mix-blend-overlay" style={{ background: 'radial-gradient(circle at 50% 30%, rgba(246,181,60,0.18), transparent 60%)' }} />
              </div>

              {/* nameplate */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="ibza-tag">// THE</p>
                <p className="ibza-display text-2xl ibza-glow-amber">MASTERMIND</p>
              </div>
            </div>

            {/* gold accent ring */}
            <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] opacity-40" style={{ background: 'radial-gradient(circle, var(--ibza-amber-soft), transparent 70%)' }} />
          </div>

          {/* Statement */}
          <div>
            <p className="ibza-tag">CASE FILE: {brand.caseId} · ARCHITECT</p>
            <h2 className="ibza-display mt-4 text-3xl text-[var(--ibza-text)] sm:text-5xl">
              {brand.operator}
            </h2>
            <p className="mt-3 ibza-mono text-sm text-[var(--ibza-amber)]">{brand.fullName}</p>

            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--ibza-text-dim)]">
              The mind behind every line of code, every brand decision, and every
              product in the {brand.name} universe. Built from {brand.origin}, operating
              from {brand.location} — one operator, full ownership, relentless execution.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`mailto:${brand.email}`}
                className="ibza-mono rounded-full bg-[var(--ibza-amber)] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-black transition hover:scale-105"
              >
                Work With Me →
              </a>
              <a
                href={brand.github}
                target="_blank"
                rel="noopener noreferrer"
                className="ibza-mono rounded-full border border-[var(--ibza-line-strong)] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ibza-text)] transition hover:bg-[var(--ibza-hover)]"
              >
                [ GitHub ]
              </a>
            </div>
          </div>
        </motion.div>

        {/* bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[var(--ibza-line)] pt-8 sm:flex-row">
          <p className="ibza-tag">© 2026 {brand.name} · {brand.operator}</p>
          <p className="ibza-tag">{brand.acronym}</p>
          <p className="ibza-tag">{brand.location} → WORLDWIDE</p>
        </div>
      </div>
    </footer>
  )
}
