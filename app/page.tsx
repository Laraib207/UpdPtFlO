import HeroBig from '../components/HeroBig'
import SplitIntro from '../components/SplitIntro'
import ServicesGrid from '../components/ServicesGrid'
import ProjectsGallery from '../components/ProjectsGallery'
import ProjectsGrid from '../components/ProjectsGrid'
import ClientsStrip from '../components/ClientsStrip'
import CTAOverlay from '../components/CTAOverlay'
import Testimonials from '../components/Testimonials'
import ContactSection from '../components/ContactSection'
import FooterSite from '../components/FooterSite'
import SkillsSection from '../components/SkillsSection'
import AwardsSection from '../components/AwardsSection'
import GallerySection from '../components/GallerySection'
import NewsletterCTA from '../components/NewsletterCTA'
import Futureplanes from '../components/Futureplanes'

import Contact from './contact/page'

export default function Home(){
  return (
    <>
      <main className="pt-20 md:pt-24 bg-white dark:bg-slate-900 transition-colors duration-300">
        <HeroBig />
        <SplitIntro />
        <ServicesGrid />
        <section id="projects" className="py-12 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">Featured Projectss</h2>
            <ProjectsGrid />
          </div>
        </section>
        <ProjectsGallery />
        <SkillsSection />
        <AwardsSection />
        <GallerySection />
        <ClientsStrip />
        <Testimonials />
        <ContactSection />
        <NewsletterCTA />
      
        <CTAOverlay />
        <Contact />
        <Futureplanes />

      </main>
      <FooterSite />
    </>
  )
}
