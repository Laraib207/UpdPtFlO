export default function StatsStrip() {
  const stats = [
    {
      value: '1.5+',
      label: 'Years of practical development experience',
    },
    {
      value: '10+',
      label: 'Portfolio, website, and interface concepts built',
    },
    {
      value: '100%',
      label: 'Responsive-first design thinking for all screens',
    },
    {
      value: 'Next.js',
      label: 'Primary stack for modern frontend delivery',
    },
  ]

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-8 py-10 md:py-14">
      <div className="theme-card-strong rounded-[28px] px-6 md:px-10 py-8 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {stats.map((item) => (
            <div key={item.label}>
              <p className="text-3xl md:text-5xl font-semibold leading-none theme-text-primary">
                {item.value}
              </p>
              <p className="mt-3 text-xs md:text-sm leading-6 theme-text-secondary max-w-[18ch]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}