import IbzaSubPage from '../../components/ibza/IbzaSubPage'
import IbzaCycleOrbit from '../../components/ibza/IbzaCycleOrbit'
import { brand } from '../../data/ibza'

export const metadata = {
  title: 'iBzA Cycle — Next-Gen Cycle Brand | iBzA by TheLaraib',
  description:
    'iBzA Cycle — a bold next-gen cycle brand built around design, awareness and everyday performance. Part of the iBzA ecosystem by TheLaraib.',
}

const SPECS = [
  { code: 'SPEC-01', title: 'Engineered Frame', desc: 'Lightweight, durable and built for control on every kind of road.' },
  { code: 'SPEC-02', title: 'Bold Identity', desc: 'A cycle that looks as sharp as it rides — unmistakably iBzA.' },
  { code: 'SPEC-03', title: 'Everyday Performance', desc: 'Comfort, speed and reliability tuned for daily riders and explorers.' },
  { code: 'SPEC-04', title: 'Awareness Built In', desc: 'A brand that promotes a healthier, more conscious way to move.' },
]

export default function IbzaCyclePage() {
  return (
    <IbzaSubPage
      code="PRD-01"
      kicker="MOBILITY / HARDWARE"
      title="@iBzA"
      highlight="Cycle"
      status="LIVE"
    >
      <p className="max-w-2xl text-base leading-8 text-[var(--ibza-text-dim)] sm:text-lg">
        @iBzA Cycle is a bold next-gen cycle brand — engineered for design, awareness
        and everyday performance. Explore the system below, then ride into the store.
      </p>

      {/* Orbit experience */}
      <div className="ibza-panel ibza-frame relative mt-12 overflow-hidden rounded-[2rem] p-4 sm:p-8">
        <div className="ibza-grid-bg pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative">
          <span className="ibza-tag">// FEATURE ORBIT · LIVE SYSTEM</span>
          <div className="mt-4">
            <IbzaCycleOrbit />
          </div>
        </div>
      </div>

      {/* Specs */}
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {SPECS.map((s) => (
          <div key={s.code} className="ibza-panel ibza-frame rounded-3xl p-7">
            <span className="ibza-tag ibza-glow-amber">{s.code}</span>
            <h3 className="ibza-mono mt-4 text-xl font-bold text-white">{s.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--ibza-text-dim)]">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Store CTA */}
      <div className="ibza-panel-strong ibza-frame mt-12 rounded-3xl p-8 text-center">
        <p className="ibza-tag inline-flex items-center gap-2">
          <span className="ibza-ping"><span /><span /></span> STORE ONLINE
        </p>
        <h3 className="ibza-mono mt-4 text-2xl font-bold text-white">Ready to ride @iBzA Cycle?</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[var(--ibza-text-dim)]">
          The store is live. Browse models, check pricing and grab yours.
        </p>
        <a
          href={brand.cycleStore}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--ibza-amber)] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-black transition hover:scale-105"
        >
          Visit the Store →
        </a>
      </div>
    </IbzaSubPage>
  )
}
