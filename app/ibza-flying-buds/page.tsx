import IbzaSubPage from '../../components/ibza/IbzaSubPage'
import { flyBudsUrl } from '../../data/ibza'

export const metadata = {
  title: 'iBzA Flying Buds — Play the Arcade Flight Game | iBzA by TheLaraib',
  description:
    'Play iBzA Flying Buds — an original arcade-style flight game built in-house by TheLaraib. Tap to fly, dodge the obstacles, beat your high score. Part of the iBzA ecosystem.',
  keywords: [
    'iBzA Flying Buds',
    'iBzA game',
    'TheLaraib game',
    'flappy style game',
    'arcade browser game',
    'play online game',
  ],
}

const HOWTO = [
  { code: 'CTRL-01', title: 'Tap to Fly', desc: 'Tap, click or press SPACE to flap and lift the bird up.' },
  { code: 'CTRL-02', title: 'Dodge Obstacles', desc: 'Variable-height obstacles keep coming — slip through the gaps.' },
  { code: 'CTRL-03', title: 'Beat Your Best', desc: 'Live score and survival timer track every run. Chase the record.' },
]

export default function IbzaFlyingBudsPage() {
  return (
    <IbzaSubPage
      code="PRD-04"
      kicker="GAME / INTERACTIVE"
      title="@iBzA"
      highlight="Flying Buds"
      status="LIVE"
    >
      <p className="max-w-2xl text-base leading-8 text-[var(--ibza-text-dim)] sm:text-lg">
        @iBzA Flying Buds is an original arcade-style flight game — fun, fast, and built
        fully in-house. It now lives as its own standalone world inside the @iBzA universe.
        Launch it and see how long you can stay airborne.
      </p>

      {/* PLAY CTA */}
      <div className="ibza-panel-strong ibza-frame mt-12 flex flex-col items-center justify-center rounded-3xl px-6 py-14 text-center">
        <div className="ibza-spin-slow text-6xl">🪽</div>
        <p className="ibza-tag mt-6 inline-flex items-center gap-2">
          <span className="ibza-ping"><span /><span /></span> GAME ONLINE
        </p>
        <h3 className="ibza-mono mt-4 text-3xl font-bold text-white">Ready for takeoff?</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[var(--ibza-text-dim)]">
          Launch @iBzA Flying Buds in a new window and start your flight. Light/dark mode,
          sound and live scoring included.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={flyBudsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--ibza-amber)] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-black transition hover:scale-105"
          >
            ▶ Play Now
          </a>
          <a
            href="/#ecosystem"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--ibza-line-strong)] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white/5"
          >
            Back to Universe
          </a>
        </div>
      </div>

      {/* Live embedded preview */}
      <div className="mt-12">
        <p className="ibza-tag mb-4">// LIVE PREVIEW · PLAYABLE BELOW</p>
        <div className="ibza-frame relative overflow-hidden rounded-3xl border border-[var(--ibza-line-strong)]">
          <iframe
            src={flyBudsUrl}
            title="iBzA Flying Buds — playable preview"
            className="h-[640px] w-full"
            loading="lazy"
            allow="autoplay"
          />
        </div>
        <p className="ibza-tag mt-3 text-center">
          Trouble loading? <a href={flyBudsUrl} target="_blank" rel="noopener noreferrer" className="ibza-glow-amber">Open in full screen →</a>
        </p>
      </div>

      {/* How to play */}
      <h2 className="ibza-display mt-16 text-3xl text-white sm:text-4xl">
        How to <span className="ibza-glow-amber">play</span>
      </h2>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {HOWTO.map((h) => (
          <div key={h.code} className="ibza-panel rounded-3xl p-7">
            <span className="ibza-tag ibza-glow-amber">{h.code}</span>
            <h3 className="ibza-mono mt-4 text-lg font-bold text-white">{h.title}</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--ibza-text-dim)]">{h.desc}</p>
          </div>
        ))}
      </div>
    </IbzaSubPage>
  )
}
