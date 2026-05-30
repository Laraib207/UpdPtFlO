import IbzaSubPage from '../../components/ibza/IbzaSubPage'

export const metadata = {
  title: 'iBzA Flying Buds — Arcade Game | iBzA by TheLaraib',
  description:
    'iBzA Flying Buds — an original arcade-style game built in-house, part of the iBzA ecosystem by TheLaraib. Launching as a standalone game world.',
}

export default function IbzaFlyingBudsPage() {
  return (
    <IbzaSubPage
      code="PRD-04"
      kicker="GAME / INTERACTIVE"
      title="iBzA"
      highlight="Flying Buds"
      status="IN R&D"
    >
      <p className="max-w-2xl text-base leading-8 text-[var(--ibza-text-dim)] sm:text-lg">
        iBzA Flying Buds is an original arcade-style game — fun, fast, and built fully
        in-house. It's getting its own standalone world inside the iBzA universe.
        The game design is in progress.
      </p>

      <div className="ibza-panel-strong ibza-frame mt-12 flex flex-col items-center justify-center rounded-3xl px-6 py-16 text-center">
        <div className="ibza-spin-slow text-6xl">🪽</div>
        <p className="ibza-tag mt-6 ibza-flicker">GAME ENGINE :: INITIALIZING</p>
        <h3 className="ibza-mono mt-4 text-3xl font-bold text-white">Game world under construction</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[var(--ibza-text-dim)]">
          Mechanics, levels and controls are being designed. Drop your idea and you'll
          be first to play when it goes live.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--ibza-amber)] px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-black transition hover:scale-105"
          >
            Get Early Access →
          </a>
          <a
            href="/#ecosystem"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--ibza-line-strong)] px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white/5"
          >
            Back to Universe
          </a>
        </div>
      </div>
    </IbzaSubPage>
  )
}
