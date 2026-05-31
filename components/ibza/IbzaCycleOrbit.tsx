'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Rotating orbit adapted from the Feature Planet concept,
// re-themed around iBzA Cycle branding. Each orbiting node is a
// cycle feature / brand value instead of a tech skill.
const RINGS = [
  {
    id: 1,
    label: 'CORE',
    color: 'var(--ibza-amber)',
    nodes: [
      { name: 'Lightweight Frame', angle: 0 },
      { name: 'Aero Design', angle: 72 },
      { name: 'Smart Brakes', angle: 144 },
      { name: 'All-Terrain Grip', angle: 216 },
      { name: 'Long-Range', angle: 288 },
    ],
  },
  {
    id: 2,
    label: 'BRAND',
    color: 'var(--ibza-teal)',
    nodes: [
      { name: 'Awareness', angle: 30 },
      { name: 'Performance', angle: 90 },
      { name: 'Identity', angle: 150 },
      { name: 'Sustainable', angle: 210 },
      { name: 'Bold', angle: 270 },
      { name: 'Everyday', angle: 330 },
    ],
  },
]

export default function IbzaCycleOrbit() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div className="relative mx-auto aspect-square w-full max-w-2xl">
      {RINGS.map((ring, ringIndex) => {
        const radius = 44 - ringIndex * 14
        const duration = 46 + ringIndex * 18

        return (
          <motion.div
            key={ring.id}
            className="absolute inset-0"
            style={{ padding: `${50 - radius}%` }}
            animate={{ rotate: ringIndex % 2 === 0 ? 360 : -360 }}
            transition={{ duration, repeat: Infinity, ease: 'linear' }}
          >
            <div
              className="absolute inset-0 rounded-full border"
              style={{ borderColor: ring.color, opacity: 0.32 }}
            />

            {ring.nodes.map((node) => {
              const a = (node.angle * Math.PI) / 180
              const x = 50 + Math.cos(a) * radius
              const y = 50 + Math.sin(a) * radius

              return (
                <motion.div
                  key={node.name}
                  className="absolute"
                  style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                  animate={{ rotate: ringIndex % 2 === 0 ? -360 : 360 }}
                  transition={{ duration, repeat: Infinity, ease: 'linear' }}
                  onMouseEnter={() => setHovered(node.name)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="ibza-mono cursor-pointer whitespace-nowrap rounded-full border border-[var(--ibza-line-strong)] bg-[var(--ibza-panel)] px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-[var(--ibza-text-dim)] backdrop-blur-xl"
                  >
                    {node.name}
                  </motion.div>

                  <AnimatePresence>
                    {hovered === node.name && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="ibza-tag absolute left-1/2 top-full mt-2 -translate-x-1/2"
                        style={{ color: ring.color }}
                      >
                        {ring.label}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </motion.div>
        )
      })}

      {/* center hub */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="ibza-panel-strong flex h-28 w-28 flex-col items-center justify-center rounded-full sm:h-36 sm:w-36"
        >
          <span className="ibza-glow-amber text-3xl">◆</span>
          <span className="ibza-mono mt-1 text-[10px] uppercase tracking-[0.2em] text-white">@iBzA</span>
          <span className="ibza-tag mt-0.5">CYCLE</span>
        </motion.div>
      </div>
    </div>
  )
}
