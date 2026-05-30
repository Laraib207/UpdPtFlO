import IbzaSubPage from '../../components/ibza/IbzaSubPage'
import { services } from '../../data/ibza'

export const metadata = {
  title: 'iBzA Studio — Web, Brand & Growth | iBzA by TheLaraib',
  description:
    'iBzA Studio by TheLaraib — full-stack development, brand identity, and digital marketing & growth for businesses. Websites, web apps, and lead-generating systems.',
}

const PROCESS = [
  { step: '01', title: 'Discover', desc: 'We map your goal, audience and what success actually looks like.' },
  { step: '02', title: 'Design & Build', desc: 'Brand, UI and a fast, scalable build — engineered, not just decorated.' },
  { step: '03', title: 'Launch & Grow', desc: 'Ship it, then drive leads with SEO, content and performance marketing.' },
]

export default function IbzaStudioPage() {
  return (
    <IbzaSubPage
      code="PRD-03"
      kicker="DIGITAL / SERVICES"
      title="iBzA"
      highlight="Studio"
      status="LAUNCHING SOON"
    >
      <p className="max-w-2xl text-base leading-8 text-[var(--ibza-text-dim)] sm:text-lg">
        iBzA Studio is the services arm — where I help businesses build websites,
        web apps, brands and the marketing systems that turn visitors into clients.
        One operator, full ownership, end-to-end execution.
      </p>

      {/* Services */}
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {services.map((svc) => (
          <div key={svc.id} className="ibza-panel ibza-frame rounded-3xl p-7">
            <span className="ibza-tag ibza-glow-amber">{svc.id}</span>
            <h3 className="ibza-mono mt-4 text-xl font-bold text-white">{svc.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--ibza-text-dim)]">{svc.desc}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {svc.tags.map((t) => (
                <span
                  key={t}
                  className="ibza-mono rounded-full border border-[var(--ibza-line)] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[var(--ibza-text-dim)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Process */}
      <h2 className="ibza-display mt-16 text-3xl text-white sm:text-4xl">
        How we <span className="ibza-glow-amber">work</span>
      </h2>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {PROCESS.map((p) => (
          <div key={p.step} className="ibza-panel rounded-3xl p-7">
            <p className="ibza-mono text-3xl font-bold ibza-glow-amber">{p.step}</p>
            <h3 className="ibza-mono mt-4 text-lg font-bold text-white">{p.title}</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--ibza-text-dim)]">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="ibza-panel-strong ibza-frame mt-16 rounded-3xl p-8 text-center">
        <p className="ibza-tag">// SECURE LINE OPEN</p>
        <h3 className="ibza-mono mt-4 text-2xl font-bold text-white">Have a project in mind?</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[var(--ibza-text-dim)]">
          Let's turn your idea into a system that looks premium and actually converts.
        </p>
        <a
          href="/#contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--ibza-amber)] px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-black transition hover:scale-105"
        >
          Start a Project →
        </a>
      </div>
    </IbzaSubPage>
  )
}
