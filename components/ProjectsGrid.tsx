import Link from 'next/link'
import { projects } from '../data/projects'

export default function ProjectsGrid() {
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-28 theme-section">
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {featuredProjects.map((project, index) => (
          <article
            key={project.slug}
            className="theme-card rounded-[30px] p-6 md:p-8 group transition-all duration-500 hover:translate-y-[-6px]"
          >
            <Link href={`/work/${project.slug}`} className="block">
              <div
                className="rounded-[24px] min-h-[260px] md:min-h-[320px] p-6 md:p-8 flex items-end overflow-hidden relative"
                style={{
                  background: project.accent,
                  border: '1px solid var(--border-soft)',
                }}
              >
                <div className="absolute inset-0 pointer-events-none opacity-60">
                  <div
                    className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl"
                    style={{ background: 'var(--spotlight-a)' }}
                  />
                  <div
                    className="absolute left-8 bottom-8 h-20 w-20 rounded-full blur-2xl"
                    style={{ background: 'var(--button-muted-bg)' }}
                  />
                </div>

                <div className="relative z-10">
                  <p className="text-[11px] uppercase tracking-[0.26em] theme-text-muted mb-3">
                    0{index + 1} · {project.category}
                  </p>
                  <h3 className="text-2xl md:text-4xl font-semibold leading-tight theme-text-primary max-w-[12ch]">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="pt-6">
                <p className="text-sm md:text-base leading-8 max-w-xl theme-text-secondary">
                  {project.intro}
                </p>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="px-3 py-2 rounded-full text-[11px] uppercase tracking-[0.14em] theme-text-primary"
                        style={{
                          background: 'var(--button-muted-bg)',
                          border: '1px solid var(--border-soft)',
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs uppercase tracking-[0.22em] theme-text-muted group-hover:translate-x-1 transition-transform duration-300">
                    View Case ↗
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}