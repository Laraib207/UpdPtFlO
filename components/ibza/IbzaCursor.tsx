'use client'

import { useEffect, useRef, useState } from 'react'

export default function IbzaCursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    setEnabled(true)

    let rx = window.innerWidth / 2
    let ry = window.innerHeight / 2
    let mx = rx
    let my = ry
    let raf = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (dot.current) {
        dot.current.style.transform = `translate(${mx}px, ${my}px)`
      }
    }

    const loop = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      if (ring.current) {
        ring.current.style.transform = `translate(${rx}px, ${ry}px)`
      }
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[120] -ml-[2px] -mt-[2px] h-1 w-1 rounded-full"
        style={{ background: 'var(--ibza-amber)' }}
      />
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[120] -ml-4 -mt-4 flex h-8 w-8 items-center justify-center"
      >
        <div className="h-8 w-8 rounded-full border" style={{ borderColor: 'var(--ibza-line-strong)' }} />
        <div className="absolute h-[1px] w-3" style={{ background: 'var(--ibza-amber)', opacity: 0.6 }} />
        <div className="absolute h-3 w-[1px]" style={{ background: 'var(--ibza-amber)', opacity: 0.6 }} />
      </div>
    </>
  )
}
