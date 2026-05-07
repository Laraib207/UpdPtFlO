export default function ServicesSection() {
  const services = [
    {
      label: '01',
      title: 'Frontend Development',
      description:
        'Modern, responsive, and scalable interfaces built with Next.js, React, and clean component architecture.',
    },
    {
      label: '02',
      title: 'Motion & Interaction',
      description:
        'Subtle motion systems, transitions, and interface behavior designed to make products feel premium and intuitive.',
    },
    {
      label: '03',
      title: 'Portfolio & Brand Sites',
      description:
        'High-impact personal portfolios, landing pages, and branded websites shaped with strong visual hierarchy.',
    },
    {
      label: '04',
      title: 'UI Systems',
      description:
        'Reusable sections, structured layouts, and polished design systems that stay consistent across devices.',
    },
  ]

  return (
    <section className="theme-section max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32">
      <div className="grid md:grid-cols-12 gap-10 mb-14">
        <div className="md:col-span-4">
          <p className="text-xs tracking-[0.35em] uppercase theme-text-muted">
            Services
          </p>
        </div>

        <div className="md:col-span-8">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight max-w-4xl theme-text-primary">
            I build digital experiences that are structured, responsive, and visually memorable.
          </h2>

          <p className="mt-6 text-base md:text-lg leading-8 max-w-2xl theme-text-secondary">
            My work combines frontend engineering, interface design thinking, and
            motion to create websites and products that feel clear, modern, and intentional.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service) => (
          <article
            key={service.label}
            className="theme-card rounded-[28px] p-7 md:p-9 hover:translate-y-[-4px]"
          >
            <p className="text-[11px] uppercase tracking-[0.25em] theme-text-muted mb-5">
              {service.label}
            </p>

            <h3 className="text-2xl md:text-[2rem] leading-tight font-semibold theme-text-primary">
              {service.title}
            </h3>

            <p className="mt-5 text-sm md:text-base leading-8 theme-text-secondary max-w-md">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}