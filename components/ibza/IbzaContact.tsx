'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { brand } from '../../data/ibza'

export default function IbzaContact() {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [message, setMessage] = useState('')

  const composed = `Project Brief from ${name || 'a visitor'}:\n\n${message}\n\nReach me at: ${contact}`

  const mailHref = `mailto:${brand.email}?subject=${encodeURIComponent(
    `New Project Enquiry — ${name || 'iBzA Lead'}`
  )}&body=${encodeURIComponent(composed)}`

  const waHref = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(composed)}`

  return (
    <section id="contact" className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="ibza-panel-strong ibza-frame relative overflow-hidden rounded-[2.5rem] p-8 sm:p-12"
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[var(--ibza-amber)] opacity-10 blur-[120px]" />

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            {/* LEFT — pitch */}
            <div>
              <span className="ibza-tag inline-flex items-center gap-2">
                <span className="ibza-rec" /> SECURE LINE · CHANNEL OPEN
              </span>

              <h2 className="ibza-display mt-6 text-4xl text-white sm:text-5xl">
                What if we <span className="ibza-glow-amber">built</span> something together?
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-[var(--ibza-text-dim)]">
                Got a product, a brand, or a launch in mind? Drop a brief and let's turn
                it into a system that actually generates results.
              </p>

              <div className="mt-8 space-y-3 ibza-mono text-[12px]">
                <a href={`mailto:${brand.email}`} className="flex items-center gap-3 text-[var(--ibza-text-dim)] transition hover:text-white">
                  <span className="ibza-glow-amber">✉</span> {brand.email}
                </a>
                <a href={brand.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[var(--ibza-text-dim)] transition hover:text-white">
                  <span className="ibza-glow-amber">◆</span> GitHub / @Laraib207
                </a>
                <p className="flex items-center gap-3 text-[var(--ibza-text-dim)]">
                  <span className="ibza-glow-amber">⌖</span> {brand.location} → Worldwide
                </p>
              </div>
            </div>

            {/* RIGHT — form */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                window.location.href = mailHref
              }}
              className="ibza-panel rounded-3xl p-6"
            >
              <p className="ibza-tag mb-5">// TRANSMISSION FORM</p>

              <div className="space-y-4">
                <div>
                  <label className="ibza-tag normal-case">Your Name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="e.g. Aman Verma"
                    className="ibza-mono mt-2 w-full rounded-xl border border-[var(--ibza-line)] bg-black/30 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--ibza-amber)]"
                  />
                </div>

                <div>
                  <label className="ibza-tag normal-case">Email / Phone</label>
                  <input
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                    placeholder="How should I reach you?"
                    className="ibza-mono mt-2 w-full rounded-xl border border-[var(--ibza-line)] bg-black/30 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--ibza-amber)]"
                  />
                </div>

                <div>
                  <label className="ibza-tag normal-case">Project Brief</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    placeholder="Tell me what you want to build..."
                    className="ibza-mono mt-2 w-full resize-none rounded-xl border border-[var(--ibza-line)] bg-black/30 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--ibza-amber)]"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="flex-1 rounded-full bg-[var(--ibza-amber)] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-black transition hover:scale-[1.02]"
                >
                  Send via Email →
                </button>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-full border border-[var(--ibza-line-strong)] px-6 py-3.5 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white/5"
                >
                  Send via WhatsApp
                </a>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
