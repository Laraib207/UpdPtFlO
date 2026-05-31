import IbzaSubPage from '../../components/ibza/IbzaSubPage'

export const metadata = {
  title: 'iBzA Drink — Premium Hydration Bottle | iBzA by TheLaraib',
  description:
    'iBzA Drink — a premium water bottle and hydration brand with bold, clean design. Part of the iBzA ecosystem by TheLaraib.',
}

const FEATURES = [
  { code: 'H2O-01', title: 'Pure & Clean', desc: 'Designed for everyday hydration with a focus on purity and a refreshing experience.' },
  { code: 'H2O-02', title: 'Bold Identity', desc: 'A water bottle that stands out — minimal, premium, and unmistakably iBzA.' },
  { code: 'H2O-03', title: 'Built to Carry', desc: 'Ergonomic, durable and made to move with you — gym, desk, road, anywhere.' },
  { code: 'H2O-04', title: 'Sustainable Intent', desc: 'A brand built with awareness — reusable design that respects the planet.' },
]

export default function IbzaDrinkPage() {
  return (
    <IbzaSubPage
      code="PRD-02"
      kicker="BEVERAGE / HYDRATION"
      title="@iBzA"
      highlight="Drink"
      status="COMING SOON"
    >
      <p className="max-w-2xl text-base leading-8 text-[var(--ibza-text-dim)] sm:text-lg">
        @iBzA Drink is more than a bottle — it's a hydration brand. Premium build,
        clean lines, and a bold identity that turns a daily habit into a statement.
        The first product in the @iBzA beverage line is in the works.
      </p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {FEATURES.map((f) => (
          <div key={f.code} className="ibza-panel ibza-frame rounded-3xl p-7">
            <span className="ibza-tag ibza-glow-amber">{f.code}</span>
            <h3 className="ibza-mono mt-4 text-xl font-bold text-white">{f.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--ibza-text-dim)]">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="ibza-panel-strong ibza-frame mt-12 rounded-3xl p-8 text-center">
        <p className="ibza-tag">// NOTIFY PROTOCOL</p>
        <h3 className="ibza-mono mt-4 text-2xl font-bold text-white">Be first to grab @iBzA Drink</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[var(--ibza-text-dim)]">
          Launching soon. Want early access or a wholesale enquiry? Open a transmission.
        </p>
        <a
          href="/#contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--ibza-amber)] px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-black transition hover:scale-105"
        >
          Notify Me →
        </a>
      </div>
    </IbzaSubPage>
  )
}
