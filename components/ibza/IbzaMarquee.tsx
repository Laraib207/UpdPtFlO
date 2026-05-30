'use client'

import { marqueeWords } from '../../data/ibza'

export default function IbzaMarquee() {
  const row = [...marqueeWords, ...marqueeWords]
  return (
    <div className="relative overflow-hidden border-y border-[var(--ibza-line)] bg-[var(--ibza-panel)] py-4">
      <div className="ibza-marquee-track">
        {row.map((word, i) => (
          <span key={i} className="ibza-mono mx-6 text-sm uppercase tracking-[0.25em] text-[var(--ibza-text-dim)]">
            <span className="mr-6 ibza-glow-amber">◆</span>
            {word}
          </span>
        ))}
      </div>
    </div>
  )
}
