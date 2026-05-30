import IbzaSubPage from '../../components/ibza/IbzaSubPage'
import { brand, timeline } from '../../data/ibza'

export const metadata = {
  title: 'The iBzA Story — TheLaraib | From Aurangabad to Noida',
  description:
    'The story behind iBzA and TheLaraib (Laraib Siddiqui) — a self-driven journey from Aurangabad, Bihar to building a digital brand ecosystem in Noida, India.',
}

const CHAPTERS = [
  {
    code: 'CH-01',
    title: 'The Origin',
    text: `It started in ${'Aurangabad, Bihar'} — a small town, a big screen, and a curiosity for how things on the internet are built. No shortcuts, just self-driven learning and a refusal to stay average.`,
  },
  {
    code: 'CH-02',
    title: 'The Craft',
    text: 'Years of writing code, breaking things, and rebuilding them better. From first lines of HTML to shipping full-stack web apps with React, Next.js and Node — the craft became an obsession.',
  },
  {
    code: 'CH-03',
    title: 'The Brand',
    text: `Code alone wasn't enough. ${brand.name} was born — a brand that fuses engineering with identity and growth. ${brand.acronym}.`,
  },
  {
    code: 'CH-04',
    title: 'The Structure',
    text: `Now in ${'Noida'}, the mission is to build a real structure: a multi-product ecosystem and a studio that helps others launch, grow, and make their own mark.`,
  },
]

export default function IbzaStoryPage() {
  return (
    <IbzaSubPage
      code={brand.caseId}
      kicker="SUBJECT BACKGROUND"
      title="The iBzA"
      highlight="Story"
      status="DECRYPTED"
    >
      <p className="max-w-2xl text-base leading-8 text-[var(--ibza-text-dim)] sm:text-lg">
        Every brand has an origin. This is mine — {brand.fullName}, the operator
        behind {brand.name}.
      </p>

      {/* Chapters */}
      <div className="mt-12 space-y-5">
        {CHAPTERS.map((c) => (
          <div key={c.code} className="ibza-panel ibza-frame rounded-3xl p-7">
            <div className="flex items-center gap-3">
              <span className="ibza-tag ibza-glow-amber">{c.code}</span>
              <h3 className="ibza-mono text-xl font-bold text-white">{c.title}</h3>
            </div>
            <p className="mt-4 text-sm leading-8 text-[var(--ibza-text-dim)] sm:text-base">{c.text}</p>
          </div>
        ))}
      </div>

      {/* Field log */}
      <h2 className="ibza-display mt-16 text-3xl text-white sm:text-4xl">
        Field <span className="ibza-glow-amber">Log</span>
      </h2>
      <div className="ibza-panel mt-6 rounded-3xl p-7">
        <div className="space-y-5">
          {timeline.map((t) => (
            <div key={t.label} className="flex gap-4">
              <span className="ibza-mono w-24 shrink-0 text-[11px] text-[var(--ibza-amber)]">{t.range}</span>
              <div className="border-l border-[var(--ibza-line)] pl-4">
                <p className="ibza-mono text-sm font-bold text-white">{t.label}</p>
                <p className="mt-1 text-xs leading-6 text-[var(--ibza-text-dim)]">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ibza-panel-strong ibza-frame mt-12 rounded-3xl p-8 text-center">
        <h3 className="ibza-mono text-2xl font-bold text-white">Want to be part of the next chapter?</h3>
        <a
          href="/#contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--ibza-amber)] px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-black transition hover:scale-105"
        >
          Let's Talk →
        </a>
      </div>
    </IbzaSubPage>
  )
}
