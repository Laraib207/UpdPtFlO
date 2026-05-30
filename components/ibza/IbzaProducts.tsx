'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { products, brand } from '../../data/ibza'

const statusColor: Record<string, string> = {
  LIVE: 'var(--ibza-teal)',
  'LAUNCHING SOON': 'var(--ibza-teal)',
  'COMING SOON': 'var(--ibza-amber)',
  'IN R&D': 'var(--ibza-amber)',
  CONCEPT: 'var(--ibza-text-faint)',
}

export default function IbzaProducts() {
  return (
    <section id="ecosystem" className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="ibza-tag">SECTOR: BRAND ECOSYSTEM</span>
            <h2 className="ibza-display mt-3 text-4xl text-white sm:text-6xl">
              The <span className="ibza-glow-amber">{brand.name}</span> Universe
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[var(--ibza-text-dim)]">
            {brand.name} isn't just a portfolio — it's a launchpad. One identity,
            many products, all engineered to make a mark.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => {
            const inner = (
              <>
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[var(--ibza-amber)] opacity-0 blur-3xl transition group-hover:opacity-10" />

                <div className="flex items-center justify-between">
                  <span className="ibza-tag ibza-glow-amber">{p.code}</span>
                  <span
                    className="ibza-mono rounded-full px-2.5 py-1 text-[9px] uppercase tracking-[0.16em]"
                    style={{ color: statusColor[p.status], border: `1px solid ${statusColor[p.status]}55` }}
                  >
                    {p.status}
                  </span>
                </div>

                <h3 className="ibza-mono mt-6 text-2xl font-bold text-white">{p.name}</h3>
                <p className="ibza-tag mt-1 normal-case text-[var(--ibza-text-faint)]">{p.category}</p>
                <p className="mt-4 text-sm leading-7 text-[var(--ibza-text-dim)]">{p.desc}</p>

                <p className="mt-6 inline-flex items-center gap-2 ibza-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ibza-amber)]">
                  {p.cta}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </p>
              </>
            )

            const cardClass =
              'ibza-panel ibza-frame group relative block overflow-hidden rounded-3xl p-7 transition hover:border-[var(--ibza-line-strong)]'

            return (
              <motion.div
                key={p.code}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-70px' }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
              >
                {p.external ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
                    {inner}
                  </a>
                ) : (
                  <Link href={p.href} className={cardClass}>
                    {inner}
                  </Link>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
