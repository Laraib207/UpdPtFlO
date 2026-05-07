import FooterSite from '../../components/FooterSite'

export default function AboutPage() {
  return (
    <>
      <main className="theme-body min-h-screen pt-32 md:pt-40">
        <section className="max-w-6xl mx-auto px-6 md:px-8 pb-24 md:pb-32">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <p className="text-xs tracking-[0.35em] uppercase theme-text-muted">
                About
              </p>
            </div>

            <div className="md:col-span-8">
              <h1 className="hero-title text-4xl md:text-7xl font-semibold leading-[0.95] max-w-5xl theme-text-primary">
                A developer focused on modern interfaces, motion, and clean digital presentation.
              </h1>

              <p className="mt-8 text-base md:text-lg leading-8 max-w-3xl theme-text-secondary">
                I’m Laraib, a full-stack developer based in Patna, Bihar. My work
                combines frontend engineering, visual structure, and interaction
                design to build portfolio websites, landing pages, and product
                interfaces that feel polished and intentional.
              </p>

              <div className="mt-14 grid md:grid-cols-2 gap-8">
                <div className="theme-card rounded-[28px] p-8">
                  <p className="text-xs uppercase tracking-[0.28em] theme-text-muted mb-4">
                    Capabilities
                  </p>
                  <ul className="space-y-3 theme-text-secondary">
                    <li>Next.js & React Development</li>
                    <li>UI Systems & Responsive Layouts</li>
                    <li>Motion & Interaction Design</li>
                    <li>Frontend Architecture</li>
                  </ul>
                </div>

                <div className="theme-card rounded-[28px] p-8">
                  <p className="text-xs uppercase tracking-[0.28em] theme-text-muted mb-4">
                    Background
                  </p>
                  <ul className="space-y-3 theme-text-secondary">
                    <li>Digital marketing experience</li>
                    <li>Full-stack development projects</li>
                    <li>Portfolio and brand website focus</li>
                    <li>Available for freelance and full-time work</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSite />
    </>
  )
}


// 'use client'
// import { motion } from 'framer-motion'
// import { useState, useEffect } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { 
//   AcademicCapIcon, 
//   CodeBracketIcon, 
//   DocumentTextIcon,
//   StarIcon,
//   ChartBarIcon,
//   LightBulbIcon,
//   RocketLaunchIcon,
//   HeartIcon,
//   ArrowDownTrayIcon,
//   ChatBubbleLeftRightIcon,
//   MapPinIcon,
//   FolderIcon,
//   BeakerIcon,
//   CloudIcon,
//   CpuChipIcon,
//   BoltIcon,
//   FireIcon,
//   SparklesIcon,
//   CameraIcon
// } from '@heroicons/react/24/outline'

// export default function About() {
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8
//       }
//     }
//   }

//   const skills = [
//     { name: "Frontend Development", level: 95, color: "from-blue-500 to-cyan-500" },
//     { name: "Backend Development", level: 88, color: "from-green-500 to-emerald-500" },
//     { name: "Database Management", level: 85, color: "from-purple-500 to-pink-500" },
//     { name: "UI/UX Design", level: 80, color: "from-orange-500 to-red-500" },
//     { name: "Problem Solving", level: 98, color: "from-red-500 to-pink-500" },
//     { name: "Error Debugging", level: 99, color: "from-cyan-500 to-blue-500" }
//   ]

//   const galleryImages = [
//     {
//       src: "/images/lb1.jpeg",
//       title: "Mountain Adventure",
//       description: "Finding peace in nature's beauty",
//       category: "Adventure",
//       icon: "🏔️"
//     },
//     {
//       src: "/images/lb2.jpeg",
//       title: "Friends Forever",
//       description: "Moments with the squad that matter most",
//       category: "Friendship",
//       icon: "👥"
//     },
//     {
//       src: "/images/lb3.jpeg",
//       title: "Camping Vibes",
//       description: "Work from anywhere, even in a tent",
//       category: "Lifestyle",
//       icon: "⛺"
//     },
//     {
//       src: "/images/lb4.jpeg",
//       title: "Brotherhood",
//       description: "Bonds that last forever",
//       category: "Friendship",
//       icon: "🤝"
//     },
//     {
//       src: "/images/lb5.jpeg",
//       title: "Focused Mind",
//       description: "Deep in thought, planning the next move",
//       category: "Work",
//       icon: "💭"
//     },
//     {
//       src: "/images/lb6.jpeg",
//       title: "Team Spirit",
//       description: "Building together, growing together",
//       category: "Work",
//       icon: "💼"
//     },
//     {
//       src: "/images/lb7.jpeg",
//       title: "Coffee Breaks",
//       description: "Best ideas come with good company",
//       category: "Lifestyle",
//       icon: "☕"
//     },
//     {
//       src: "/images/lb8.jpeg",
//       title: "Coding Zone",
//       description: "Where magic happens",
//       category: "Work",
//       icon: "💻"
//     },
//     {
//       src: "/images/lb9.jpeg",
//       title: "City Explorer",
//       description: "Finding inspiration in every corner",
//       category: "Adventure",
//       icon: "🌆"
//     },
//     {
//       src: "/images/lb10.jpeg",
//       title: "Garden Thoughts",
//       description: "Nature brings the best ideas",
//       category: "Lifestyle",
//       icon: "🌿"
//     },
//     {
//       src: "/images/lb11.jpeg",
//       title: "Spiritual Journey",
//       description: "Faith keeps me grounded",
//       category: "Islamic",
//       icon: "🕌"
//     },
//     {
//       src: "/images/lb12.jpeg",
//       title: "Celebration Time",
//       description: "Sharing joy with loved ones",
//       category: "Friendship",
//       icon: "🎉"
//     },
//     {
//       src: "/images/lb13.jpeg",
//       title: "Humble Roots",
//       description: "Never forget where you came from",
//       category: "Islamic",
//       icon: "🙏"
//     },
//     {
//       src: "/images/lb14.jpeg",
//       title: "Simple Pleasures",
//       description: "Finding happiness in small things",
//       category: "Lifestyle",
//       icon: "😊"
//     },
//     {
//       src: "/images/lb15.jpeg",
//       title: "Learning Journey",
//       description: "Every day is a new lesson",
//       category: "Lifestyle",
//       icon: "📚"
//     }
//   ]

//   return (
//     <main className="relative min-h-screen overflow-hidden bg-slate-950">
//       {/* Professional Background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        
//         <div className="absolute inset-0 opacity-[0.02]" style={{
//           backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
//                            linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
//           backgroundSize: '50px 50px'
//         }} />

//         <div className="absolute inset-0">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute text-slate-700/10 font-mono text-sm"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 y: [0, -40, 0],
//                 opacity: [0.05, 0.15, 0.05],
//               }}
//               transition={{
//                 duration: 6 + Math.random() * 4,
//                 repeat: Infinity,
//                 delay: Math.random() * 2,
//               }}
//             >
//               {mounted ? ['</>','{}','[]','()','fn()','const','let','=>','&&','||'][Math.floor(Math.random() * 10)] : '{}'}
//             </motion.div>
//           ))}
//         </div>
        

//         <motion.div 
//           className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.03, 0.08, 0.03]
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//           }}
//         />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 relative z-10">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
//         >
//           {/* Left: Profile Card */}
//           <motion.aside 
//             variants={itemVariants}
//             className="lg:sticky top-24"
//           >
//             <div className="relative">
//               <div className="absolute -inset-4 bg-emerald-500/10 rounded-2xl blur-2xl" />
              
//               <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl">
//                 <div className="relative h-80">
//                   <Image
//                     src="/me.jpg"
//                     alt="Laraib Siddiqui"
//                     fill
//                     style={{ objectFit: 'cover' }}
//                     className="object-top grayscale-[20%]"
//                   />
                  
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  
//                   <div className="absolute top-6 right-6 px-4 py-2 bg-slate-900/80 backdrop-blur-sm rounded-lg border border-slate-700/50">
//                     <div className="flex items-center gap-2 text-white text-sm font-mono">
//                       <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
//                       Available
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-8">
//                   <div className="text-center">
//                     <h2 className="text-2xl font-bold text-white mb-2">Laraib Siddiqui</h2>
//                     <p className="text-emerald-400 font-mono text-sm mb-6">Full-Stack Developer</p>
                    
//                     <div className="grid grid-cols-3 gap-4 mb-8">
//                       <div className="text-center p-3 rounded-lg bg-slate-800/30 border border-slate-700/30">
//                         <div className="text-2xl font-bold text-white font-mono">24</div>
//                         <div className="text-xs text-slate-400">Years</div>
//                       </div>
//                       <div className="text-center p-3 rounded-lg bg-slate-800/30 border border-slate-700/30">
//                         <div className="text-2xl font-bold text-white font-mono">50+</div>
//                         <div className="text-xs text-slate-400">Projects</div>
//                       </div>
//                       <div className="text-center p-3 rounded-lg bg-slate-800/30 border border-slate-700/30">
//                         <div className="text-2xl font-bold text-white font-mono">2+</div>
//                         <div className="text-xs text-slate-400">Years</div>
//                       </div>
//                     </div>

//                     <div className="flex gap-3 mb-6">
//                       <Link 
//                         href="/resume.pdf" 
//                         className="flex-1 px-4 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all duration-300 flex items-center justify-center gap-2"
//                       >
//                         <ArrowDownTrayIcon className="w-4 h-4" />
//                         Resume
//                       </Link>
//                       <Link 
//                         href="/contact" 
//                         className="flex-1 px-4 py-3 rounded-lg border border-slate-700 text-white font-bold hover:bg-slate-800/50 transition-all duration-300 flex items-center justify-center gap-2"
//                       >
//                         <ChatBubbleLeftRightIcon className="w-4 h-4" />
//                         Contact
//                       </Link>
//                     </div>

//                     <div className="flex items-center justify-center gap-2 text-slate-300 text-sm font-mono">
//                       <MapPinIcon className="w-4 h-4" />
//                       Aurangabad, Bihar
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <motion.div 
//               variants={itemVariants}
//               className="mt-8 space-y-4"
//             >
//               <a 
//                 href="/certs/bca_certificate.pdf" 
//                 target="_blank" 
//                 rel="noreferrer" 
//                 className="group p-4 rounded-lg bg-slate-800/60 border border-slate-700/50 flex items-center gap-4 hover:bg-slate-800 hover:border-emerald-500/50 transition-all duration-300"
//               >
//                 <div className="w-12 h-12 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-white">
//                   BCA
//                 </div>
//                 <div className="flex-1">
//                   <div className="font-bold text-white">BCA Certificate</div>
//                   <div className="text-xs text-slate-400 font-mono">2019–2022 — First Class</div>
//                 </div>
//               </a>

//               <a 
//                 href="/certs/mca_certificate.pdf" 
//                 target="_blank" 
//                 rel="noreferrer" 
//                 className="group p-4 rounded-lg bg-slate-800/60 border border-slate-700/50 flex items-center gap-4 hover:bg-slate-800 hover:border-emerald-500/50 transition-all duration-300"
//               >
//                 <div className="w-12 h-12 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-white">
//                   MCA
//                 </div>
//                 <div className="flex-1">
//                   <div className="font-bold text-white">MCA Certificate</div>
//                   <div className="text-xs text-slate-400 font-mono">2023–2025 — First Class</div>
//                 </div>
//               </a>
//             </motion.div>
//           </motion.aside>

//           {/* Right: Main Content */}
//           <div className="lg:col-span-2 space-y-12">
//             {/* Hero Introduction */}
//             <motion.header 
//               variants={itemVariants}
//               className="relative p-8 rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 shadow-2xl"
//             >
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm font-bold font-mono mb-6">
//                 <CodeBracketIcon className="w-4 h-4 text-emerald-400" />
//                 <span className="text-emerald-400">Full-Stack Developer</span>
//               </div>

//               <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-white">
//                 Hi, I'm <span className="text-emerald-400">Laraib Siddiqui</span>
//               </h1>
              
//               <p className="text-xl text-slate-300 mb-8 leading-relaxed">
//                 A passionate programmer who finds <span className="text-emerald-400 font-bold">peace in solving errors</span> and 
//                 <span className="text-emerald-400 font-bold"> joy in debugging code</span>. I don't just write code—I craft solutions, 
//                 fix problems, and build systems that work flawlessly.
//               </p>

//               <div className="flex flex-wrap gap-3">
//                 {['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'].map((tech) => (
//                   <span
//                     key={tech}
//                     className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm text-white font-mono hover:border-emerald-500 transition-all duration-300"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </motion.header>

//             {/* My Philosophy */}
//             <motion.section 
//               variants={itemVariants}
//               className="p-8 rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/50"
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="p-3 rounded-lg bg-emerald-600">
//                   <CodeBracketIcon className="w-6 h-6 text-white" />
//                 </div>
//                 <h2 className="text-3xl font-bold text-white">My Philosophy</h2>
//               </div>

//               <div className="grid md:grid-cols-2 gap-8">
//                 <div className="relative h-80 rounded-xl overflow-hidden border border-slate-700">
//                   <Image
//                     src="/images/codescreen.jpg"
//                     alt="Coding is my passion"
//                     fill
//                     style={{ objectFit: 'cover' }}
//                     className="opacity-80"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
//                   <div className="absolute bottom-6 left-6 right-6">
//                     <div className="text-emerald-400 font-mono text-sm mb-2">// My Truth</div>
//                     <p className="text-white font-bold text-lg">Programming is not just my profession—it's my identity</p>
//                   </div>
//                 </div>

//                 <div className="space-y-6">
//                   <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
//                     <div className="flex items-center gap-3 mb-3">
//                       <FireIcon className="w-6 h-6 text-emerald-400" />
//                       <h3 className="text-xl font-bold text-white">The Debug Mindset</h3>
//                     </div>
//                     <p className="text-slate-300 leading-relaxed">
//                       While others fear errors, I <span className="text-emerald-400 font-bold">embrace them</span>. 
//                       Every bug is a puzzle, every error is an opportunity to learn. 
//                       Fixing broken code gives me more satisfaction than writing new code.
//                     </p>
//                   </div>

//                   <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
//                     <div className="flex items-center gap-3 mb-3">
//                       <BoltIcon className="w-6 h-6 text-emerald-400" />
//                       <h3 className="text-xl font-bold text-white">Building My World</h3>
//                     </div>
//                     <p className="text-slate-300 leading-relaxed">
//                       I want to create a world through programming where <span className="text-emerald-400 font-bold">everything works my way</span>—
//                       systems designed perfectly, code that's elegant, and solutions that are brilliant.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </motion.section>

//             {/* Life Through My Lens - Photo Gallery */}
//             <motion.section 
//               variants={itemVariants}
//               className="p-8 rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/50"
//             >
//               <div className="flex items-center gap-3 mb-3">
//                 <div className="p-3 rounded-lg bg-emerald-600">
//                   <CameraIcon className="w-6 h-6 text-white" />
//                 </div>
//                 <h2 className="text-3xl font-bold text-white">Life Through My Lens</h2>
//               </div>
//               <p className="text-slate-400 mb-8 text-lg">Moments that define who I am—from mountains to code, from friends to faith.</p>

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {galleryImages.map((image, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: index * 0.1 }}
//                     whileHover={{ y: -10, scale: 1.02 }}
//                     className="group relative rounded-xl overflow-hidden bg-slate-800/60 border border-slate-700 hover:border-emerald-500 transition-all duration-300 shadow-lg hover:shadow-2xl"
//                   >
//                     <div className="relative h-64">
//                       <Image
//                         src={image.src}
//                         alt={image.title}
//                         fill
//                         style={{ objectFit: 'cover' }}
//                         className="group-hover:scale-110 transition-transform duration-500"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                      
//                       <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-600/90 backdrop-blur-sm text-white text-xs font-bold">
//                         {image.category}
//                       </div>

//                       <div className="absolute top-4 left-4 text-3xl">
//                         {image.icon}
//                       </div>

//                       <div className="absolute bottom-0 left-0 right-0 p-6">
//                         <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
//                           {image.title}
//                         </h3>
//                         <p className="text-slate-300 text-sm leading-relaxed">
//                           {image.description}
//                         </p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.section>
            

//             {/* Coffee & Code */}
//             <motion.section 
//               variants={itemVariants}
//               className="p-8 rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/50"
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="p-3 rounded-lg bg-emerald-600">
//                   <BeakerIcon className="w-6 h-6 text-white" />
//                 </div>
//                 <h2 className="text-3xl font-bold text-white">Coffee & Code</h2>
//               </div>

//               <div className="grid md:grid-cols-2 gap-8">
//                 <div className="space-y-6">
//                   <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
//                     <div className="text-4xl mb-4">☕</div>
//                     <h3 className="text-xl font-bold text-white mb-3">My Creative Fuel</h3>
//                     <p className="text-slate-300 leading-relaxed mb-4">
//                       When I'm not actively coding, you'll find me at a coffee shop—not for leisure, 
//                       but for <span className="text-emerald-400 font-bold">ideation</span>. 
//                       Every sip of coffee brings a new idea, a better approach, a unique solution.
//                     </p>
//                     <div className="flex flex-wrap gap-2">
//                       <span className="px-3 py-1 rounded bg-emerald-600/20 text-emerald-400 text-sm font-mono">Think</span>
//                       <span className="px-3 py-1 rounded bg-emerald-600/20 text-emerald-400 text-sm font-mono">Design</span>
//                       <span className="px-3 py-1 rounded bg-emerald-600/20 text-emerald-400 text-sm font-mono">Innovate</span>
//                     </div>
//                   </div>

//                   <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
//                     <h3 className="text-xl font-bold text-white mb-3">The Process</h3>
//                     <ul className="space-y-3">
//                       <li className="flex items-start gap-3 text-slate-300">
//                         <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2" />
//                         <span>Sit with coffee, analyze project requirements</span>
//                       </li>
//                       <li className="flex items-start gap-3 text-slate-300">
//                         <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2" />
//                         <span>Brainstorm unique features and implementations</span>
//                       </li>
//                       <li className="flex items-start gap-3 text-slate-300">
//                         <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2" />
//                         <span>Plan architecture that's both amazing and functional</span>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div className="relative h-full min-h-96 rounded-xl overflow-hidden border border-slate-700">
//                   <Image
//                     src="/images/coffeecoding.jpg"
//                     alt="Coffee and creativity"
//                     fill
//                     style={{ objectFit: 'cover' }}
//                     className="opacity-80"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
//                   <div className="absolute bottom-6 left-6 right-6">
//                     <div className="text-emerald-400 font-mono text-sm mb-2">// Coffee Philosophy</div>
//                     <p className="text-white font-bold text-lg">
//                       "Great ideas don't come from comfort zones—they come from coffee shops"
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </motion.section>

//             {/* My Workspace */}
//             <motion.section 
//               variants={itemVariants}
//               className="p-8 rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/50"
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="p-3 rounded-lg bg-emerald-600">
//                   <RocketLaunchIcon className="w-6 h-6 text-white" />
//                 </div>
//                 <h2 className="text-3xl font-bold text-white">Command Center</h2>
//               </div>

//               <div className="grid md:grid-cols-2 gap-8">
//                 <div className="relative h-96 rounded-xl overflow-hidden border border-slate-700">
//                   <Image
//                     src="/images/workspace.jpg"
//                     alt="My workspace"
//                     fill
//                     style={{ objectFit: 'cover' }}
//                     className="opacity-80"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
//                   <div className="absolute bottom-6 left-6 right-6">
//                     <div className="text-emerald-400 font-mono text-sm mb-2">// Dream Work Station</div>
//                     <p className="text-white font-bold text-lg">Where I target the world with @iBzA</p>
//                   </div>
//                 </div>

//                 <div className="space-y-6">
//                   <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
//                     <div className="flex items-center gap-3 mb-3">
//                       <CloudIcon className="w-6 h-6 text-emerald-400" />
//                       <h3 className="text-xl font-bold text-white">My Mission</h3>
//                     </div>
//                     <p className="text-slate-300 leading-relaxed mb-4">
//                       This is where I build the future. From this setup, I'm creating 
//                       <span className="text-emerald-400 font-bold"> open-source solutions</span> and 
//                       <span className="text-emerald-400 font-bold"> cloud-native applications</span> that will 
//                       impact developers worldwide.
//                     </p>
//                   </div>

//                   <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
//                     <h3 className="text-xl font-bold text-white mb-4">What I'm Building</h3>
//                     <div className="space-y-3">
//                       <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30">
//                         <div className="w-8 h-8 rounded bg-emerald-600 flex items-center justify-center text-white font-mono text-sm">OS</div>
//                         <div>
//                           <div className="text-white font-bold text-sm">FOSS Projects</div>
//                           <div className="text-slate-400 text-xs">Open source for everyone</div>
//                         </div>
//                       </div>
//                       <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30">
//                         <div className="w-8 h-8 rounded bg-emerald-600 flex items-center justify-center text-white font-mono text-sm">☁️</div>
//                         <div>
//                           <div className="text-white font-bold text-sm">Cloud Solutions</div>
//                           <div className="text-slate-400 text-xs">Scalable architectures</div>
//                         </div>
//                       </div>
//                       <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30">
//                         <div className="w-8 h-8 rounded bg-emerald-600 flex items-center justify-center text-white font-mono text-sm">🚀</div>
//                         <div>
//                           <div className="text-white font-bold text-sm">@iBzA Platform</div>
//                           <div className="text-slate-400 text-xs">My vision, my way</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.section>

//             {/* AI & Future */}
//             <motion.section 
//               variants={itemVariants}
//               className="p-8 rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/50"
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="p-3 rounded-lg bg-emerald-600">
//                   <CpuChipIcon className="w-6 h-6 text-white" />
//                 </div>
//                 <h2 className="text-3xl font-bold text-white">AI Era & Human Spirit</h2>
//               </div>

//               <div className="grid md:grid-cols-2 gap-8">
//                 <div className="space-y-6">
//                   <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
//                     <div className="flex items-center gap-3 mb-3">
//                       <SparklesIcon className="w-6 h-6 text-emerald-400" />
//                       <h3 className="text-xl font-bold text-white">My Perspective on AI</h3>
//                     </div>
//                     <p className="text-slate-300 leading-relaxed mb-4">
//                       Yes, we've entered the AI era. Yes, AI can code. But here's the truth: 
//                       <span className="text-emerald-400 font-bold"> AI is not unbeatable</span>. 
//                       It's just a tool—powerful, but still a tool.
//                     </p>
//                     <p className="text-slate-300 leading-relaxed">
//                       What AI lacks is <span className="text-emerald-400 font-bold">passion</span>, 
//                       <span className="text-emerald-400 font-bold"> stubbornness</span>, and 
//                       <span className="text-emerald-400 font-bold"> obsession</span>. 
//                       These human traits are what create truly revolutionary solutions.
//                     </p>
//                   </div>

//                   <div className="p-6 rounded-xl bg-emerald-600/10 border border-emerald-600/30">
//                     <h3 className="text-xl font-bold text-emerald-400 mb-3">The Winning Formula</h3>
//                     <div className="space-y-2 text-slate-300">
//                       <div className="flex items-center gap-2">
//                         <div className="w-2 h-2 bg-emerald-400 rounded-full" />
//                         <span className="font-mono">Ziddd (Stubbornness) + Junoon (Passion)</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <div className="w-2 h-2 bg-emerald-400 rounded-full" />
//                         <span className="font-mono">Human creativity {'>'} AI algorithms</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <div className="w-2 h-2 bg-emerald-400 rounded-full" />
//                         <span className="font-mono">Persistence beats processing power</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="relative h-full min-h-96 rounded-xl overflow-hidden border border-slate-700">
//                   <Image
//                     src="/images/aifuture.jpg"
//                     alt="AI and Future"
//                     fill
//                     style={{ objectFit: 'cover' }}
//                     className="opacity-80"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
//                   <div className="absolute bottom-6 left-6 right-6">
//                     <div className="text-emerald-400 font-mono text-sm mb-2">// My Challenge</div>
//                     <p className="text-white font-bold text-lg mb-3">
//                       "Beating AI is easy when you have obsession and determination"
//                     </p>
//                     <p className="text-slate-300 text-sm">
//                       It's not man vs. machine—it's passion vs. algorithm. And passion always wins.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </motion.section>

//             {/* Inspirations */}
//             <motion.section 
//               variants={itemVariants}
//               className="p-8 rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/50"
//             >
//           <div className="flex items-center gap-3 mb-6">
//             <div className="p-3 rounded-lg bg-emerald-600">
//               <LightBulbIcon className="w-6 h-6 text-white" />
//             </div>
//             <h2 className="text-3xl font-bold text-white">My Inspirations</h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
//               <div className="text-4xl mb-4">🚀</div>
//               <h3 className="text-xl font-bold text-white mb-3">Space Achievement Target</h3>
//               <p className="text-slate-300 leading-relaxed mb-3">
//                 Inspired by <span className="text-emerald-400 font-bold">Elon Musk's</span> vision—
//                 thinking beyond boundaries, solving impossible problems, and aiming for the stars.
//               </p>
//               <div className="text-slate-400 text-sm italic">
//                 "If you're not aiming for the impossible, you're not aiming high enough"
//               </div>
//             </div>

//             <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
//               <div className="text-4xl mb-4">🧘</div>
//               <h3 className="text-xl font-bold text-white mb-3">Osho's Philosophy</h3>
//               <p className="text-slate-300 leading-relaxed mb-3">
//                 Following <span className="text-emerald-400 font-bold">Osho's teachings</span>—
//                 living authentically, thinking independently, and creating my own path in this world.
//               </p>
//               <div className="text-slate-400 text-sm italic">
//                 "Be yourself, everyone else is already taken"
//               </div>
//             </div>
//           </div>
//         </motion.section>

//         {/* Technical Skills */}
//         <motion.section 
//           variants={itemVariants}
//           className="p-8 rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/50"
//         >
//           <div className="flex items-center gap-3 mb-8">
//             <div className="p-3 rounded-lg bg-emerald-600">
//               <ChartBarIcon className="w-6 h-6 text-white" />
//             </div>
//             <h2 className="text-3xl font-bold text-white">Technical Excellence</h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {skills.map((skill, index) => (
//               <motion.div
//                 key={skill.name}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="space-y-3"
//               >
//                 <div className="flex justify-between items-center">
//                   <span className="text-white font-bold">{skill.name}</span>
//                   <span className="text-slate-400 text-sm font-mono">{skill.level}%</span>
//                 </div>
//                 <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
//                   <motion.div
//                     initial={{ width: 0 }}
//                     whileInView={{ width: `${skill.level}%` }}
//                     transition={{ duration: 1.5, delay: index * 0.2 }}
//                     className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         {/* Education Timeline */}
//         <motion.section 
//           variants={itemVariants}
//           className="p-8 rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/50"
//         >
//           <div className="flex items-center gap-3 mb-8">
//             <div className="p-3 rounded-lg bg-emerald-600">
//               <AcademicCapIcon className="w-6 h-6 text-white" />
//             </div>
//             <h2 className="text-3xl font-bold text-white">Education Journey</h2>
//           </div>
          
//           <div className="space-y-8">
//             {[
//               {
//                 title: "High School — Aurangabad",
//                 description: "Completed high schooling in Aurangabad, Bihar, laying the foundation for my technical journey",
//                 icon: "🎓"
//               },
//               {
//                 title: "BCA — (2019–2022)",
//                 description: "Bachelor of Computer Applications — First Class. Final project: V-Mart Online Shopping Mall (Role: Frontend Developer)",
//                 icon: "💻"
//               },
//               {
//                 title: "MCA — (2023–2025)",
//                 description: "Master of Computer Applications — First Class. Final project: Asset Tracking System (Role: Full-Stack Developer)",
//                 icon: "🚀"
//               }
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: -30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: index * 0.2 }}
//                 className="flex gap-6 group"
//               >
//                 <div className="flex flex-col items-center">
//                   <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-xl border-2 border-slate-700 group-hover:scale-110 transition-transform duration-300">
//                     {item.icon}
//                   </div>
//                   {index < 2 && <div className="w-0.5 h-16 bg-slate-700 mt-4" />}
//                 </div>
//                 <div className="flex-1 pb-8">
//                   <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{item.title}</h3>
//                   <p className="text-slate-300 leading-relaxed">{item.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         {/* Projects */}
//         <motion.section 
//           variants={itemVariants}
//           className="p-8 rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/50"
//         >
//           <div className="flex items-center gap-3 mb-8">
//             <div className="p-3 rounded-lg bg-emerald-600">
//               <FolderIcon className="w-6 h-6 text-white" />
//             </div>
//             <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[
//               {
//                 title: "V-Mart Shopping Mall",
//                 role: "Frontend Developer",
//                 team: "Team of 6",
//                 gradient: "from-blue-500 to-purple-600"
//               },
//               {
//                 title: "Asset Tracking System",
//                 role: "Full-Stack Developer",
//                 team: "Solo Project",
//                 gradient: "from-emerald-500 to-cyan-500"
//               },
//               {
//                 title: "@iBzA Platform",
//                 role: "Creator & Developer",
//                 team: "Vision Project",
//                 gradient: "from-pink-500 to-orange-500"
//               }
//             ].map((project, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ y: -10, scale: 1.02 }}
//                 className="group rounded-xl overflow-hidden bg-slate-800/60 border border-slate-700 hover:border-emerald-500 transition-all duration-300"
//               >
//                 <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
//                   <div className="text-6xl">🎨</div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
//                     {project.title}
//                   </h3>
//                   <p className="text-slate-300 text-sm mb-1 font-bold">{project.role}</p>
//                   <p className="text-slate-400 text-xs font-mono">{project.team}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         {/* Strengths */}
//         <motion.section 
//           variants={itemVariants}
//           className="grid grid-cols-1 md:grid-cols-2 gap-8"
//         >
//           <div className="p-8 rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/50">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="p-3 rounded-lg bg-emerald-600">
//                 <StarIcon className="w-6 h-6 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold text-white">Core Strengths</h3>
//             </div>
//             <ul className="space-y-3">
//               {[
//                 "Positive mindset & problem-solving approach",
//                 "Never give up until solution is found",
//                 "Quick learner with tech enthusiasm",
//                 "Strong analytical & debugging skills",
//                 "Passionate about error fixing",
//                 "Creating systems that work perfectly"
//               ].map((strength, index) => (
//                 <motion.li
//                   key={index}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="flex items-center gap-3 text-slate-300"
//                 >
//                   <div className="w-2 h-2 bg-emerald-400 rounded-full" />
//                   <span className="font-medium">{strength}</span>
//                 </motion.li>
//               ))}
//             </ul>
//           </div>

//           <div className="p-8 rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/50">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="p-3 rounded-lg bg-emerald-600">
//                 <LightBulbIcon className="w-6 h-6 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold text-white">Growth Areas</h3>
//             </div>
//             <ul className="space-y-3">
//               {[
//                 "Time management & structured scheduling",
//                 "Public speaking & presentation skills",
//                 "Advanced system design patterns",
//                 "Leadership & team management"
//               ].map((area, index) => (
//                 <motion.li
//                   key={index}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="flex items-center gap-3 text-slate-300"
//                 >
//                   <div className="w-2 h-2 bg-orange-400 rounded-full" />
//                   <span className="font-medium">{area}</span>
//                 </motion.li>
//               ))}
//             </ul>
//           </div>
//         </motion.section>

//         {/* Final CTA */}
//         <motion.section 
//           variants={itemVariants}
//           className="relative p-8 rounded-2xl bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 overflow-hidden"
//         >
//           <div className="absolute -inset-px bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl opacity-20 blur-lg" />
          
//           <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
//             <div className="text-center md:text-left">
//               <h3 className="text-3xl font-bold text-white mb-2">
//                 Ready to Build Something Amazing?
//               </h3>
//               <p className="text-slate-300 leading-relaxed">
//                 I'm open for freelance projects, full-time opportunities, and collaborations. 
//                 Let's create something extraordinary together.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 shrink-0">
//               <Link 
//                  href="/contact" 
//                 className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all duration-300 flex items-center gap-2"
//               >
//                 <HeartIcon className="w-5 h-5" />
//                 Get in Touch
//               </Link>
//               <a 
//                 href="/resume.pdf" 
//                 className="px-8 py-4 rounded-xl border-2 border-slate-700 text-white font-bold hover:bg-slate-800 transition-all duration-300 flex items-center gap-2"
//               >
//                 <DocumentTextIcon className="w-5 h-5" />
//                 Download CV
//               </a>
//             </div>
//           </div>
//         </motion.section>
//       </div>
//     </motion.div>
//   </div>
// </main>
//   )
// }
