// import HeroBig from '../components/HeroBig'
// import ProjectsGrid from '../components/ProjectsGrid'
// import FooterSite from '../components/FooterSite'

// export default function Home() {
//   return (
//     <>
//       <main className="bg-[#0a0a0a] text-white min-h-screen">
//         <HeroBig />

//         <section
//           id="about"
//           className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32 border-t border-white/10"
//         >
//           <div className="grid md:grid-cols-12 gap-10">
//             <div className="md:col-span-4">
//               <p className="text-xs tracking-[0.35em] uppercase text-white/45">
//                 Manifesto
//               </p>
//             </div>
//             <div className="md:col-span-8">
//               <h2 className="text-3xl md:text-5xl leading-tight font-semibold max-w-4xl">
//                I build modern digital experiences that combine motion, structure, and a strong visual point of view.
//               </h2>
//               <p className="mt-8 text-base md:text-lg text-white/60 max-w-2xl leading-8">
//               I’m Laraib, a full-stack developer focused on premium frontend work,
// cinematic portfolio websites, and polished user interfaces designed to feel precise, contemporary, and distinct.
//               </p>

//               <div className="mt-12 grid sm:grid-cols-2 gap-8">
//                 <div>
//                   <p className="text-xs tracking-[0.28em] uppercase text-white/40 mb-3">
//                     Capabilities
//                   </p>
//                   <ul className="space-y-3 text-white/70">
//                     <li>> Frontend Architecture</li>
//                     <li>> Next.js &amp; React Development</li>
//                     <li>> Motion &amp; Interaction Design</li>
//                     <li>> Responsive UI Systems</li>
//                   </ul>
//                 </div>
//                 <div>
//                   <p className="text-xs tracking-[0.28em] uppercase text-white/40 mb-3">
//                     Focus
//                   </p>
//                   <ul className="space-y-3 text-white/70">
//                     <li>> Portfolio Experiences</li>
//                     <li>> Modern Brand Websites</li>
//                     <li>> Landing Pages</li>
//                     <li>> High-Impact UI Presentation</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <ProjectsGrid />

//         <section
//           id="contact"
//           className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32 border-t border-white/10"
//         >
//           <div className="grid md:grid-cols-12 gap-10 items-start">
//             <div className="md:col-span-4">
//               <p className="text-xs tracking-[0.35em] uppercase text-white/45">
//                 Contact
//               </p>
//             </div>
//             <div className="md:col-span-8">
//               <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] max-w-4xl">
//                 Let’s build something that feels sharp, modern, and impossible to ignore.
//               </h2>
//               <div className="mt-10 space-y-3 text-lg text-white/70">
//                 <p>laraibsiddiqui10ki@gmail.com</p>
//                 <p>Location: Patna, Bihar, India</p>
//                 <p>Available for freelance, contract, and full-time opportunities.</p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       <FooterSite />
//     </>
//   )
// }



import FeaturePlanetSection from '../components/FeaturePlanetSection'
import Link from 'next/link'
import HeroBig from '../components/HeroBig'
import StatsStrip from '../components/StatsStrip'
import ServicesSection from '../components/ServicesSection'
import ProjectsGrid from '../components/ProjectsGrid'
import FooterSite from '../components/FooterSite'

export default function Home() {
  return (
    <>
      <main className="theme-body min-h-screen">
        <HeroBig />

        <StatsStrip />

        <section
          id="about"
          className="theme-section max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32"
        >
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <p className="text-xs tracking-[0.35em] uppercase theme-text-muted">
                Intro
              </p>
            </div>

            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-5xl leading-tight font-semibold max-w-4xl theme-text-primary">
                I build modern digital experiences that combine motion, structure,
                and a strong visual point of view.
              </h2>

              <p className="mt-8 text-base md:text-lg max-w-2xl leading-8 theme-text-secondary">
                I’m Laraib, a full-stack developer focused on premium frontend
                work, cinematic portfolio websites, and polished user interfaces
                designed to feel precise, contemporary, and distinct.
              </p>

              <div className="mt-12 grid sm:grid-cols-2 gap-8">
                <div>
                  <p className="text-xs tracking-[0.28em] uppercase theme-text-muted mb-3">
                    Capabilities
                  </p>
                  <ul className="space-y-3 theme-text-secondaryry">
                   <li >&gt; Frontend Architecture</li>
                    <li>&gt; Next.js &amp; React Development</li>
                    <li>&gt; Motion &amp; Interaction Design</li>
                    <li>&gt; Responsive UI Systems</li>
                  </ul>
                </div>

                <div>
                  <p className="text-xs tracking-[0.28em] uppercase theme-text-muted mb-3">
                    Focus
                  </p>
                  <ul className="space-y-3 theme-text-secondary">
  <li>&gt; Frontend Architecture</li>
  <li>&gt; Next.js &amp; React Development</li>
  <li>&gt; Motion &amp; Interaction Design</li>
  <li>&gt; Responsive UI Systems</li>
</ul>

<ul className="space-y-3 theme-text-secondary">
  <li>&gt; Portfolio Experiences</li>
  <li>&gt; Modern Brand Websites</li>
  <li>&gt; Landing Pages</li>
  <li>&gt; High-Impact UI Presentation</li>
</ul>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="/about"
                  className="inline-flex items-center rounded-full border px-6 py-3 text-sm uppercase tracking-[0.2em] theme-text-primary transition-all duration-300 hover:translate-y-[-2px]"
                  style={{ borderColor: 'var(--border-soft)' }}
                >
                  More About Me ↗
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ServicesSection />

        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between pt-2 pb-8">
            <p className="text-xs tracking-[0.35em] uppercase theme-text-muted">
              Featured Work
            </p>
            <Link
              href="/work"
              className="text-xs uppercase tracking-[0.25em] theme-text-secondary"
            >
              View All
            </Link>
          </div>
        </div>
        <FeaturePlanetSection />

        <ProjectsGrid />

        <section
          id="contact"
          className="theme-section max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32"
        >
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4">
              <p className="text-xs tracking-[0.35em] uppercase theme-text-muted">
                Contact
              </p>
            </div>

            <div className="md:col-span-8">
              <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] max-w-4xl theme-text-primary">
                Let’s build something that feels sharp, modern, and impossible to
                ignore.
              </h2>

              <div className="mt-10 space-y-3 text-lg theme-text-secondary">
                <p>laraibsiddiqui10ki@gmail.com</p>
                <p>Location: Patna, Bihar, India</p>
                <p>Available for freelance, contract, and full-time opportunities.</p>
              </div>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full border px-6 py-3 text-sm uppercase tracking-[0.2em] theme-text-primary transition-all duration-300 hover:translate-y-[-2px]"
                  style={{ borderColor: 'var(--border-soft)' }}
                >
                  Open Contact Page ↗
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSite />
    </>
  )
}