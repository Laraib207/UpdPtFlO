'use client'

import { useEffect, useState } from 'react'
import { useTheme } from '../../context/ThemeContext'

export default function IbzaThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="ibza-mono flex h-9 w-9 items-center justify-center rounded-full border border-[var(--ibza-line-strong)] text-[13px] text-[var(--ibza-text)] transition hover:bg-[var(--ibza-hover)]"
    >
      {mounted ? (theme === 'dark' ? '☀' : '☾') : '◐'}
    </button>
  )
}
