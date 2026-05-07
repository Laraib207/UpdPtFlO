import Link from 'next/link'
import { notFound } from 'next/navigation'
import FooterSite from '../../../components/FooterSite'
import { projects } from '../../../data/projects'

type PageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function WorkDetailPage({ params }: PageProps) {
  const project = projects.find((item) => item.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <main className="theme-body min-h-screen pt-32 md:pt-40">
        <section className="max-w-6xl mx-auto px-6 md:px-8 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <p className="text-xs tracking-[0.35em] uppercase theme-text-muted">
                Case Study
              </p>
            </div>

            <div className="md:col-span-8">
              <p className="text-xs md:text-sm uppercase tracking-[0.3em] theme-text-muted mb-5">
                {project.category} · {project.year}
              </p>

              <h1 className="hero-title text-4xl md:text-7xl font-semibold leading-[0.95] max-w-5xl theme-text-primary">
                {project.title}
              </h1>

              <p className="mt-8 text-base md:text-xl leading-8 max-w-3xl theme-text-secondary">
                {project.intro}
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 md:px-8 pb-10 md:pb-16">
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-8">
              <div className="theme-card-strong rounded-[32px] p-6 md:p-10 min-h-[320px] flex items-end">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] theme-text-muted mb-4">
                    Project Snapshot
                  </p>
                  <h2 className="text-2xl md:text-4xl font-semibold leading-tight theme-text-primary max-w-2xl">
                    Built to balance strong personal branding with premium frontend presentation.
                  </h2>
                </div>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="theme-card rounded-[32px] p-6 md:p-8 h-full">
                <p className="text-xs uppercase tracking-[0.28em] theme-text-muted mb-5">
                  Details
                </p>

                <div className="space-y-5">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] theme-text-muted mb-2">
                      Role
                    </p>
                    <p className="theme-text-secondary text-sm leading-7">
                      {project.role}
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] theme-text-muted mb-2">
                      Duration
                    </p>
                    <p className="theme-text-secondary text-sm leading-7">
                      {project.duration}
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] theme-text-muted mb-2">
                      Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-2 rounded-full text-xs theme-text-primary"
                          style={{
                            background: 'var(--button-muted-bg)',
                            border: '1px solid var(--border-soft)',
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={project.liveUrl}
                      className="theme-button inline-flex items-center rounded-full px-5 py-3 text-xs uppercase tracking-[0.2em]"
                    >
                      Live Preview
                    </a>
                    <a
                      href={project.githubUrl}
                      className="theme-button inline-flex items-center rounded-full px-5 py-3 text-xs uppercase tracking-[0.2em]"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="theme-section max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.35em] theme-text-muted">
                Overview
              </p>
            </div>

            <div className="md:col-span-8">
              <p className="text-base md:text-lg leading-8 max-w-3xl theme-text-secondary">
                {project.overview}
              </p>
            </div>
          </div>
        </section>

        <section className="theme-section max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.35em] theme-text-muted">
                Challenge
              </p>
            </div>

            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-5xl font-semibold leading-tight max-w-4xl theme-text-primary">
                The problem that needed clarity, structure, and better presentation.
              </h2>

              <p className="mt-8 text-base md:text-lg leading-8 max-w-3xl theme-text-secondary">
                {project.challenge}
              </p>
            </div>
          </div>
        </section>

        <section className="theme-section max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.35em] theme-text-muted">
                Solution
              </p>
            </div>

            <div className="md:col-span-8">
              <div className="grid gap-5">
                {project.solution.map((item, index) => (
                  <div key={index} className="theme-card rounded-[24px] p-6 md:p-7">
                    <p className="text-[11px] uppercase tracking-[0.25em] theme-text-muted mb-3">
                      Step 0{index + 1}
                    </p>
                    <p className="text-base md:text-lg leading-8 theme-text-secondary">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="theme-section max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.35em] theme-text-muted">
                Results
              </p>
            </div>

            <div className="md:col-span-8">
              <div className="grid md:grid-cols-3 gap-5">
                {project.results.map((item, index) => (
                  <div key={index} className="theme-card-strong rounded-[24px] p-6 md:p-7">
                    <p className="text-[11px] uppercase tracking-[0.25em] theme-text-muted mb-3">
                      Outcome 0{index + 1}
                    </p>
                    <p className="text-sm md:text-base leading-8 theme-text-secondary">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="theme-section max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-28">
          <div className="theme-card-strong rounded-[32px] p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.35em] theme-text-muted mb-5">
              Next Project
            </p>

            <h2 className="text-3xl md:text-5xl font-semibold leading-tight max-w-4xl theme-text-primary">
              Need a modern website or product interface with premium frontend quality?
            </h2>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full px-6 py-4 text-sm uppercase tracking-[0.2em] transition-all duration-300"
                style={{
                  background: 'var(--text-primary)',
                  color: 'var(--bg)',
                }}
              >
                Start a Conversation
              </Link>

              <Link
                href="/work"
                className="theme-button inline-flex items-center rounded-full px-6 py-4 text-sm uppercase tracking-[0.2em]"
              >
                Back to Work
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterSite />
    </>
  )
}