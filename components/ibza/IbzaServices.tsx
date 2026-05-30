'use client'

import { motion } from 'framer-motion'
import { services } from '../../data/ibza'

export default function IbzaServices() {
  return (
    <section id="services" className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="ibza-tag">SECTOR: CAPABILITIES</span>
            <h2 className="ibza-display mt-3 text-4xl text-white sm:text-6xl">
              Operational <span className="ibza-glow-amber">Skillset</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[var(--ibza-text-dim)]">
            Four core units. One operator. Built to take a brand from raw idea to
            launched, lead-generating system.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((svc, i) => (
            <motion.article
              key={svc.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="ibza-panel group relative overflow-hidden rounded-3xl p-7 transition hover:border-[var(--ibza-line-strong)]"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--ibza-amber)] opacity-0 blur-3xl transition group-hover:opacity-10" />
              <div className="flex items-center justify-between">
                <span className="ibza-tag ibza-glow-amber">{svc.id}</span>
                <span className="ibza-mono text-[11px] text-[var(--ibza-text-faint)]">
                  0{i + 1} / 0{services.length}
                </span>
              </div>

              <h3 className="ibza-mono mt-6 text-2xl font-bold text-white">{svc.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--ibza-text-dim)]">{svc.desc}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="ibza-mono rounded-full border border-[var(--ibza-line)] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[var(--ibza-text-dim)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
