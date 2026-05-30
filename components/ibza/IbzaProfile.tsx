'use client'

import { motion } from 'framer-motion'
import { brand, skills, timeline, stats } from '../../data/ibza'

export default function IbzaProfile() {
  return (
    <section id="profile" className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <span className="ibza-tag">CASE FILE: {brand.caseId} · SUBJECT PROFILE</span>
          <h2 className="ibza-display mt-3 text-4xl text-white sm:text-6xl">
            The <span className="ibza-glow-amber">Operator</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* LEFT — statement + stats */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="ibza-panel rounded-3xl p-7"
          >
            <p className="ibza-tag ibza-glow-amber">// COMPETENCE ANALYSIS [READ ONLY]</p>
            <p className="mt-5 text-lg leading-8 text-[var(--ibza-text)]">
              I'm <span className="ibza-glow-amber">{brand.fullName}</span> — a full-stack
              developer obsessed with the fusion of clean engineering and bold brand impact.
              I don't just ship websites; I build complete digital systems: the product, the
              brand around it, and the growth engine that brings in leads.
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--ibza-text-dim)]">
              {brand.name} is my launchpad — a multi-product ecosystem rising from {brand.origin}{' '}
              to {brand.location}. {brand.acronym}.
            </p>

            <a
              href="/ibza-story"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--ibza-line-strong)] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white/5"
            >
              Read the Full Story →
            </a>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-[var(--ibza-line)] p-4 text-center">
                  <p className="ibza-mono text-2xl font-bold ibza-glow-amber">{s.value}</p>
                  <p className="ibza-tag mt-1 normal-case">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — timeline + skills */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="ibza-panel rounded-3xl p-7">
              <p className="ibza-tag">// FIELD LOG [EXPERIENCE]</p>
              <div className="mt-5 space-y-5">
                {timeline.map((t) => (
                  <div key={t.label} className="flex gap-4">
                    <span className="ibza-mono w-24 shrink-0 text-[11px] text-[var(--ibza-amber)]">
                      {t.range}
                    </span>
                    <div className="border-l border-[var(--ibza-line)] pl-4">
                      <p className="ibza-mono text-sm font-bold text-white">{t.label}</p>
                      <p className="mt-1 text-xs leading-6 text-[var(--ibza-text-dim)]">{t.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="ibza-panel rounded-3xl p-7">
              <p className="ibza-tag">// EQUIPMENT INVENTORY</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.hard.map((s) => (
                  <span
                    key={s}
                    className="ibza-mono rounded-full border border-[var(--ibza-line)] bg-white/[0.02] px-3 py-1.5 text-[11px] text-[var(--ibza-text-dim)] transition hover:border-[var(--ibza-amber)] hover:text-white"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.soft.map((s) => (
                  <span
                    key={s}
                    className="ibza-mono rounded-full px-3 py-1.5 text-[11px] text-[var(--ibza-teal)]"
                  >
                    + {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
