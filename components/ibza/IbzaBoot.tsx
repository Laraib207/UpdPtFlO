'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { bootLines, brand } from '../../data/ibza'

export default function IbzaBoot({ onDone }: { onDone: () => void }) {
  const [visibleCount, setVisibleCount] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (visibleCount >= bootLines.length) {
      const t = setTimeout(() => {
        setDone(true)
        setTimeout(onDone, 700)
      }, 600)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setVisibleCount((c) => c + 1), 360)
    return () => clearTimeout(t)
  }, [visibleCount, onDone])

  const progress = Math.round((visibleCount / bootLines.length) * 100)

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="ibza-scanlines fixed inset-0 z-[100] flex items-center justify-center bg-[var(--ibza-void)] px-6"
        >
          <div className="ibza-grid-bg absolute inset-0 opacity-40" />
          <div className="relative w-full max-w-xl">
            <div className="mb-6 flex items-center justify-between">
              <span className="ibza-tag">{brand.caseId} // BOOT SEQUENCE</span>
              <span className="ibza-tag ibza-glow-amber">{progress}%</span>
            </div>

            <div className="ibza-panel-strong ibza-frame rounded-2xl p-6">
              <div className="space-y-2">
                {bootLines.slice(0, visibleCount).map((line, i) => (
                  <motion.p
                    key={line}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="ibza-mono text-[12px] text-[var(--ibza-text-dim)]"
                  >
                    <span className="ibza-glow-amber">›</span>{' '}
                    {line}
                    {i === visibleCount - 1 && (
                      <span className="ml-1 inline-block h-3 w-2 translate-y-[2px] bg-[var(--ibza-amber)]" />
                    )}
                  </motion.p>
                ))}
              </div>

              <div className="mt-6 h-1 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg,var(--ibza-amber),var(--ibza-teal))' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>

            <p className="ibza-tag mt-5 text-center ibza-flicker">
              @iBzA SECURE TERMINAL · OPERATOR {brand.operator.toUpperCase()}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
