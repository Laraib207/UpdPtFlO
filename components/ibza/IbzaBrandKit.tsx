'use client'

import Image from 'next/image'

type Asset = {
  label: string
  file: string
  note: string
  bg: 'dark' | 'light'
  wide?: boolean
}

const ASSETS: Asset[] = [
  { label: '@iBzA — Icon', file: '/brand/ibza-icon.svg', note: 'App icon / favicon / profile', bg: 'dark' },
  { label: '@iBzA — Icon (on light)', file: '/brand/ibza-icon.svg', note: 'Works on light surfaces too', bg: 'light' },
  { label: '@iBzA — Wordmark', file: '/brand/ibza-wordmark.svg', note: 'Header / letterhead / docs', bg: 'dark', wide: true },
  { label: 'Flying Buds — Icon', file: '/brand/flybuds-icon.svg', note: 'Game icon / app store', bg: 'dark' },
  { label: 'Flying Buds — Icon (on light)', file: '/brand/flybuds-icon.svg', note: 'Works on light surfaces too', bg: 'light' },
  { label: 'Flying Buds — Wordmark', file: '/brand/flybuds-wordmark.svg', note: 'Game header / banner', bg: 'dark', wide: true },
]

// Convert an SVG asset to a PNG download at a chosen size.
async function downloadPng(file: string, size = 1024) {
  const res = await fetch(file)
  const svgText = await res.text()
  const blob = new Blob([svgText], { type: 'image/svg+xml;charset=utf-8' })
  const url = URL.createObjectURL(blob)

  const img = new window.Image()
  await new Promise<void>((resolve, reject) => {
    img.onload = () => resolve()
    img.onerror = reject
    img.src = url
  })

  const ratio = img.width && img.height ? img.height / img.width : 1
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = Math.round(size * ratio)
  const ctx = canvas.getContext('2d')
  if (ctx) ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
  URL.revokeObjectURL(url)

  const a = document.createElement('a')
  a.href = canvas.toDataURL('image/png')
  a.download = file.split('/').pop()!.replace('.svg', `-${size}.png`)
  a.click()
}

export default function IbzaBrandKit() {
  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2">
        {ASSETS.map((a, i) => (
          <div
            key={a.label + i}
            className={`ibza-frame relative overflow-hidden rounded-3xl border border-[var(--ibza-line)] ${
              a.wide ? 'sm:col-span-2' : ''
            }`}
          >
            <div
              className={`flex items-center justify-center p-10 ${
                a.bg === 'light' ? 'bg-[#f3eee3]' : 'bg-[#070a10]'
              }`}
            >
              <Image
                src={a.file}
                alt={a.label}
                width={a.wide ? 460 : 150}
                height={a.wide ? 130 : 150}
                className="h-auto"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--ibza-line)] px-5 py-4">
              <div>
                <p className="ibza-mono text-sm font-bold text-white">{a.label}</p>
                <p className="ibza-tag mt-1 normal-case">{a.note}</p>
              </div>
              <div className="flex gap-2">
                <a
                  href={a.file}
                  download
                  className="ibza-mono rounded-full border border-[var(--ibza-line-strong)] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/5"
                >
                  SVG
                </a>
                <button
                  onClick={() => downloadPng(a.file, 1024)}
                  className="ibza-mono rounded-full bg-[var(--ibza-amber)] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-black transition hover:scale-105"
                >
                  PNG
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* palette */}
      <h2 className="ibza-display mt-16 text-3xl text-white sm:text-4xl">
        Brand <span className="ibza-glow-amber">palette</span>
      </h2>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { name: 'Void', hex: '#050608' },
          { name: 'Amber', hex: '#F6B53C' },
          { name: 'Teal', hex: '#1AA589' },
          { name: 'Alert', hex: '#FF4D4D' },
        ].map((c) => (
          <div key={c.hex} className="ibza-panel overflow-hidden rounded-2xl">
            <div className="h-20" style={{ background: c.hex }} />
            <div className="px-4 py-3">
              <p className="ibza-mono text-sm font-bold text-white">{c.name}</p>
              <p className="ibza-tag mt-1">{c.hex}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
