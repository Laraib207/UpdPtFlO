'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { projects, type IbzaProject } from '../../data/ibza'

const statusColor: Record<IbzaProject['status'], string> = {
  LIVE: 'var(--ibza-teal)',
  DEPLOYED: 'var(--ibza-amber)',
  'IN DEVELOPMENT': '#9b8cff',
  CONCEPT: 'var(--ibza-text-faint)',
}

export default function IbzaArchive() {
  const [active, setActive] = useState<IbzaProject | null>(null)

  return (
    <section id="archive" className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="ibza-tag inline-flex items-center gap-2">
              <span className="ibza-ping"><span /><span /></span> SECTOR: WEB · SCANNING ACTIVE
            </span>
            <h2 className="ibza-display mt-3 text-4xl text-white sm:text-6xl">
              Mission <span className="ibza-glow-amber">Archive</span>
            </h2>
          </div>
          <p className="ibza-mono text-[11px] text-[var(--ibza-text-faint)]">
            {projects.length} FILES // CLICK TO DECRYPT
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.button
              key={p.code}
              onClick={() => setActive(p)}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="ibza-panel ibza-frame group relative overflow-hidden rounded-3xl p-3 text-left transition hover:border-[var(--ibza-line-strong)]"
            >
              <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${p.fit === 'contain' ? 'bg-white/[0.06]' : ''}`}>
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  className={`transition duration-700 group-hover:scale-105 ${
                    p.fit === 'contain' ? 'object-contain p-6' : 'object-cover'
                  } ${
                    p.classified
                      ? 'blur-md brightness-50'
                      : p.fit === 'contain'
                      ? ''
                      : 'grayscale group-hover:grayscale-0'
                  }`}
                />
                {p.fit !== 'contain' && (
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--ibza-void)] via-transparent to-transparent" />
                )}

                <span className="absolute left-3 top-3 ibza-tag ibza-glow-amber">{p.code}</span>
                <span
                  className="absolute right-3 top-3 ibza-mono rounded-full px-2.5 py-1 text-[9px] uppercase tracking-[0.16em]"
                  style={{ color: statusColor[p.status], border: `1px solid ${statusColor[p.status]}55` }}
                >
                  {p.status}
                </span>

                {p.classified && (
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ibza-mono text-[11px] uppercase tracking-[0.3em] text-white/80">
                    [ CLASSIFIED ]
                  </span>
                )}
              </div>

              <div className="px-2 pb-1 pt-4">
                <p className="ibza-tag">{p.category}</p>
                <h3 className="ibza-mono mt-1 text-xl font-bold text-white">{p.title}</h3>
                <p className="mt-3 inline-flex items-center gap-2 ibza-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ibza-amber)]">
                  [ Click to Decrypt ]
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* DECRYPT MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="ibza-scanlines fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="ibza-panel-strong ibza-frame relative w-full max-w-2xl overflow-hidden rounded-3xl"
            >
              <div className="flex items-center justify-between border-b border-[var(--ibza-line)] px-6 py-4">
                <span className="ibza-tag ibza-glow-amber">{active.code} · DECRYPTED</span>
                <button
                  onClick={() => setActive(null)}
                  className="ibza-mono text-[11px] uppercase tracking-[0.2em] text-[var(--ibza-text-dim)] hover:text-white"
                >
                  CLOSE [ESC] ✕
                </button>
              </div>

              <div className={`relative aspect-[16/9] w-full overflow-hidden ${active.fit === 'contain' ? 'bg-white/[0.06]' : ''}`}>
                <Image
                  src={active.cover}
                  alt={active.title}
                  fill
                  className={`${active.fit === 'contain' ? 'object-contain p-8' : 'object-cover'} ${active.classified ? 'blur-md brightness-50' : ''}`}
                />
                {active.fit !== 'contain' && (
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--ibza-panel)] to-transparent" />
                )}
              </div>

              <div className="p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="ibza-tag">{active.category}</span>
                  <span className="ibza-tag">· {active.year}</span>
                  <span
                    className="ibza-mono rounded-full px-2.5 py-0.5 text-[9px] uppercase tracking-[0.16em]"
                    style={{ color: statusColor[active.status], border: `1px solid ${statusColor[active.status]}55` }}
                  >
                    {active.status}
                  </span>
                </div>

                <h3 className="ibza-mono mt-3 text-3xl font-bold text-white">{active.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--ibza-text-dim)]">{active.summary}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {active.stack.map((s) => (
                    <span
                      key={s}
                      className="ibza-mono rounded-full border border-[var(--ibza-line)] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[var(--ibza-text-dim)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {active.link && (
                  <a
                    href={active.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--ibza-amber)] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-black transition hover:scale-[1.03]"
                  >
                    {active.link.includes('github.com') ? 'View on GitHub →' : 'Visit Live Site →'}
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
