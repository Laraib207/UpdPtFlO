'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement | null
      if (!target) return

      const interactive = target.closest('a, button')
      setIsPointer(Boolean(interactive))
    }

    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <>
      <div
        className="pointer-events-none fixed left-0 top-0 z-[999] hidden md:block rounded-full border border-white/30 mix-blend-difference transition-[width,height,transform,background-color,border-color] duration-200 ease-out"
        style={{
          width: isPointer ? 56 : 22,
          height: isPointer ? 56 : 22,
          transform: `translate(${position.x - (isPointer ? 28 : 11)}px, ${position.y - (isPointer ? 28 : 11)}px)`,
          backgroundColor: isPointer ? 'rgba(255,255,255,0.08)' : 'transparent',
        }}
      />
      <div
        className="pointer-events-none fixed left-0 top-0 z-[1000] hidden md:block h-1.5 w-1.5 rounded-full bg-white transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${position.x - 3}px, ${position.y - 3}px)`,
        }}
      />
    </>
  )
}