import ProjectsGrid from '../../components/ProjectsGrid'
import FooterSite from '../../components/FooterSite'

export default function WorkPage() {
  return (
    <>
      <main className="theme-body min-h-screen pt-32 md:pt-40">
        <section className="max-w-6xl mx-auto px-6 md:px-8 pb-6">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <p className="text-xs tracking-[0.35em] uppercase theme-text-muted">
                Work
              </p>
            </div>

            <div className="md:col-span-8">
              <h1 className="hero-title text-4xl md:text-7xl font-semibold leading-[0.95] max-w-5xl theme-text-primary">
                Selected projects shaped by clarity, motion, and visual precision.
              </h1>

              <p className="mt-8 text-base md:text-lg leading-8 max-w-3xl theme-text-secondary">
                A curated set of frontend and digital presentation work, built to
                feel contemporary, responsive, and visually strong across devices.
              </p>
            </div>
          </div>
        </section>

        <ProjectsGrid />
      </main>

      <FooterSite />
    </>
  )
}
// 'use client'
// import { motion } from 'framer-motion'
// import ProjectsGrid from '../../components/ProjectsGrid'


// export default function Work() {
//   const skills = [
//     {
//       category: 'Full Stack Development',
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//         </svg>
//       ),
//       items: ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'REST APIs'],
//       color: 'indigo'
//     },
//     {
//       category: 'Python & Data Science',
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//         </svg>
//       ),
//       items: ['Data Analysis', 'Machine Learning', 'NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow'],
//       color: 'purple'
//     },
//     {
//       category: 'Design & Tools',
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
//         </svg>
//       ),
//       items: ['Tailwind CSS', 'Framer Motion', 'Figma', 'Git', 'Docker', 'AWS'],
//       color: 'pink'
//     }
//   ]

//   const stats = [
//     { label: 'Projects Completed', value: '10+' },
//     { label: 'Years Experience', value: '2+' },
//     { label: 'Technologies', value: '15+' },
//     { label: 'Client Satisfaction', value: '100%' }
//   ]

//   const featuredProjects = [
//     { name: 'Veer Bharat', type: 'E-commerce Platform', tags: ['Next.js', 'MongoDB', 'Tailwind'] },
//     { name: 'V-Mart Shopping', type: 'Online Shopping Mall', tags: ['React', 'Node.js', 'PostgreSQL'] },
//     { name: 'Accent Tracking', type: 'System Management', tags: ['Python', 'Django', 'MySQL'] },
//     { name: 'The Cline', type: 'Individual Project', tags: ['Full Stack', 'MERN'] }
//   ]


//   return (
//     <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
//       {/* Animated Background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.2),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.2),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
//       </div>


//       <div className="max-w-7xl mx-auto px-6 py-20">
//         {/* Hero Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="mb-20"
//         >
//           {/* Badge */}
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
//             className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold text-white mb-6"
//           >
//             <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//             MCA Graduate & Full Stack Developer
//           </motion.div>


//           {/* Main Heading */}
//           <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
//             Selected{' '}
//             <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//               Work & Projects
//             </span>
//           </h1>


//           {/* Description */}
//           <p className="text-2xl text-slate-300 max-w-4xl leading-relaxed mb-8">
//             Full Stack Developer specializing in <span className="text-indigo-400 font-semibold">React.js, Next.js, Node.js</span>, 
//             and <span className="text-purple-400 font-semibold">Python</span> with expertise in Data Analysis and Machine Learning. 
//             Building scalable web applications and intelligent data-driven solutions.
//           </p>


//           {/* Quick Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
//             {stats.map((stat, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.4 + i * 0.1 }}
//                 className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300"
//               >
//                 <div className="text-4xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
//                   {stat.value}
//                 </div>
//                 <div className="text-sm text-slate-400">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>


//         {/* Skills Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mb-20"
//         >
//           <h2 className="text-4xl font-black text-white mb-12 text-center">
//             Technical Expertise
//           </h2>


//           <div className="grid md:grid-cols-3 gap-8">
//             {skills.map((skill, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.15 }}
//                 whileHover={{ y: -8 }}
//                 className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500"
//               >
//                 <div className={`inline-flex p-4 rounded-2xl bg-${skill.color}-500/20 text-${skill.color}-400 mb-6`}>
//                   {skill.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold text-white mb-6">{skill.category}</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {skill.items.map((item, idx) => (
//                     <span
//                       key={idx}
//                       className="px-4 py-2 text-sm rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:border-indigo-400/50 transition-all duration-300"
//                     >
//                       {item}
//                     </span>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>


//         {/* Featured Projects Highlight */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mb-20"
//         >
//           <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-xl border border-white/20">
//             <h3 className="text-3xl font-black text-white mb-8">Featured Projects</h3>
//             <div className="grid md:grid-cols-2 gap-6">
//               {featuredProjects.map((project, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.1 }}
//                   whileHover={{ scale: 1.02 }}
//                   className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-400/50 transition-all duration-300"
//                 >
//                   <h4 className="text-xl font-bold text-white mb-2">{project.name}</h4>
//                   <p className="text-slate-400 mb-4">{project.type}</p>
//                   <div className="flex flex-wrap gap-2">
//                     {project.tags.map((tag, idx) => (
//                       <span
//                         key={idx}
//                         className="px-3 py-1 text-xs rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>


//         {/* Projects Grid Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-black text-white mb-4">
//               All Projects & Case Studies
//             </h2>
//             <p className="text-xl text-slate-400">
//               Explore my complete portfolio of web applications, data science projects, and more
//             </p>
//           </div>
          
//           <ProjectsGrid />
//         </motion.div>


//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mt-20 text-center"
//         >
//           <div className="p-12 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/20">
//             <h3 className="text-4xl font-black text-white mb-4">
//               Let's Build Something Amazing
//             </h3>
//             <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
//               Looking for a Full Stack Developer or Python Data Scientist? Let's discuss your project!
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <motion.a
//                 href="/contact"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 flex items-center justify-center gap-2"
//               >
//                 <span>Get in Touch</span>
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                 </svg>
//               </motion.a>
//               <motion.a
//                 href="/resume.pdf"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                 </svg>
//                 <span>Download CV</span>
//               </motion.a>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
