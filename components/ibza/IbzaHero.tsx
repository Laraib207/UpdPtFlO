'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { brand } from '../../data/ibza'

export default function IbzaHero() {
  return (
    <section className="ibza-scanlines relative flex min-h-[100svh] items-center overflow-hidden px-5 pt-28 pb-16 sm:px-8">
      {/* backdrop layers */}
      <div className="ibza-grid-bg absolute inset-0" />
      <div className="pointer-events-none absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-[var(--ibza-amber)] opacity-[0.10] blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[var(--ibza-teal)] opacity-[0.08] blur-[150px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
        {/* LEFT — text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 flex flex-wrap items-center gap-3"
          >
            <span className="ibza-chip inline-flex items-center gap-2">
              <span className="ibza-rec" /> REC · {brand.caseId}
            </span>
            <span className="ibza-tag">TOP SECRET // OPERATOR DOSSIER</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="ibza-display text-[15vw] leading-[0.85] sm:text-7xl lg:text-[7.5rem]"
          >
            <span className="block text-white">{brand.operator}</span>
            <span className="block ibza-glow-amber">/ @iBzA</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-7 max-w-xl text-base leading-8 text-[var(--ibza-text-dim)] sm:text-lg"
          >
            {brand.role}. {brand.tagline} Based in {brand.location}.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--ibza-amber)] px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.2em] text-black transition hover:scale-[1.03]"
            >
              Initiate Contact
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#archive"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--ibza-line-strong)] px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white/5"
            >
              Open Mission Archive
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3"
          >
            <span className="ibza-tag inline-flex items-center gap-2 text-[var(--ibza-teal)]">
              <span className="ibza-ping"><span /><span /></span>
              {brand.status}
            </span>
          </motion.div>
        </div>

        {/* RIGHT — ID card */}
        <motion.div
          initial={{ opacity: 0, y: 28, rotate: -1 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="ibza-panel-strong ibza-frame relative mx-auto w-full max-w-sm rounded-3xl p-5"
        >
          <div className="mb-4 flex items-center justify-between">
            <span className="ibza-tag">ID_CARD :: ISO_FACE 99.9%</span>
            <span className="ibza-rec" />
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--ibza-line)]">
            <Image
              src="/brand/ibza-icon.svg"
              alt="@iBzA — TheLaraib official logo"
              fill
              className="object-contain p-8"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--ibza-void)] via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 ibza-tag ibza-glow-amber">{brand.name} // VISUAL_ID</div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 ibza-mono text-[11px]">
            <div className="rounded-lg border border-[var(--ibza-line)] px-3 py-2">
              <p className="text-[var(--ibza-text-faint)]">CLASS</p>
              <p className="mt-1 text-white">FULL-STACK</p>
            </div>
            <div className="rounded-lg border border-[var(--ibza-line)] px-3 py-2">
              <p className="text-[var(--ibza-text-faint)]">LEVEL</p>
              <p className="mt-1 text-white">FOUNDER</p>
            </div>
            <div className="rounded-lg border border-[var(--ibza-line)] px-3 py-2">
              <p className="text-[var(--ibza-text-faint)]">LANG_1</p>
              <p className="mt-1 text-white">HI · NATIVE</p>
            </div>
            <div className="rounded-lg border border-[var(--ibza-line)] px-3 py-2">
              <p className="text-[var(--ibza-text-faint)]">LANG_2</p>
              <p className="mt-1 text-white">EN · FLUENT</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 ibza-tag flex items-center gap-2">
        <span className="h-8 w-[1px] bg-[var(--ibza-line-strong)]" /> SCROLL TO DECRYPT
      </div>
    </section>
  )
}
