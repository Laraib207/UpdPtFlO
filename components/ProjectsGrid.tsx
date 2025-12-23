// import { projects } from '../data/projects'
// import ProjectCard from './ProjectCard'

// export default function ProjectsGrid() {
//   return (
//     <div className="grid md:grid-cols-3 gap-6 mt-6">
//       {projects.map(p => <ProjectCard key={p.slug} project={p} />)}
//     </div>
//   )
// }

// File: components/ProjectsGrid.tsx


// 'use client'
// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import Link from 'next/link'
// import { 
//   FiExternalLink, 
//   FiGithub, 
//   FiEye,
//   FiCalendar,
//   FiTag,
//   FiArrowRight,
//   FiStar,
//   FiTrendingUp
// } from 'react-icons/fi'
// import { projects } from '../data/projects'

// export default function ProjectsGrid() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   }

//   const featuredProjects = projects.filter(p => p.featured)
//   const regularProjects = projects.filter(p => !p.featured)

//   return (
//     <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
//       {/* Animated Background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(99,102,241,0.15),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.15),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

//         {/* Floating particles */}
//         <div className="absolute inset-0">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 bg-indigo-400 rounded-full opacity-60"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 y: [0, -25, 0],
//                 opacity: [0.6, 1, 0.6],
//                 scale: [1, 1.3, 1],
//               }}
//               transition={{
//                 duration: 5 + Math.random() * 3,
//                 repeat: Infinity,
//                 delay: Math.random() * 2,
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
//         {/* Hero Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="text-center mb-16"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-8"
//           >
//             <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
//             Portfolio • Creative Projects
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-6"
//           >
//             <span className="block bg-gradient-to-r from-white via-indigo-400 to-purple-400 bg-clip-text text-transparent">
//               Featured
//             </span>
//             <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
//               Projects
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
//           >
//             Showcasing <span className="text-indigo-400 font-semibold">innovative solutions</span> and 
//             <span className="text-purple-400 font-semibold"> creative designs</span> that push the boundaries of 
//             <span className="text-pink-400 font-semibold"> modern development</span>
//           </motion.p>
//         </motion.div>

//         {/* Featured Projects */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.8 }}
//           className="mb-20"
//         >
//           <div className="flex items-center justify-between mb-12">
//             <div>
//               <p className="text-sm text-pink-400 font-medium mb-2">Spotlight</p>
//               <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Featured Work</h3>
//             </div>
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium"
//             >
//               <FiStar className="w-4 h-4 text-yellow-400" />
//               Best Projects
//             </motion.div>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
//             {featuredProjects.map((project, i) => (
//               <motion.div
//                 key={project.slug}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.9 + i * 0.1 }}
//                 whileHover={{ y: -8 }}
//                 className="group relative rounded-2xl overflow-hidden bg-slate-900/80 backdrop-blur-xl border border-white/10 hover:border-indigo-400/30 transition-all duration-300"
//               >
//                 {/* Project Image */}
//                 <div className="relative h-48 md:h-56 lg:h-64 xl:h-72 overflow-hidden">
//                   <Image
//                     src={project.cover}
//                     alt={project.title}
//                     fill
//                     className="object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
//                   {/* Overlay Actions */}
//                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
//                     <Link href={project.liveUrl} className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200">
//                       <FiEye className="w-5 h-5 text-white" />
//                     </Link>
//                     <Link href={project.githubUrl} className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200">
//                       <FiGithub className="w-5 h-5 text-white" />
//                     </Link>
//                     <Link href={`/projects/${project.slug}`} className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200">
//                       <FiExternalLink className="w-5 h-5 text-white" />
//                     </Link>
//                   </div>

//                   {/* Featured Badge */}
//                   <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-semibold text-white">
//                     Featured
//                   </div>
//                 </div>

//                 {/* Project Details */}
//                 <div className="p-6 lg:p-8">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center gap-2 text-slate-400">
//                       <FiCalendar className="w-4 h-4" />
//                       <span className="text-sm">{project.year}</span>
//                     </div>
//                     <div className="flex gap-2">
//                       {project.tags.slice(0, 2).map((tag, i) => (
//                         <span key={i} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <h4 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
//                     {project.title}
//                   </h4>
                  
//                   <p className="text-slate-400 text-sm lg:text-base leading-relaxed mb-6">
//                     {project.description}
//                   </p>

//                   <Link 
//                     href={`/projects/${project.slug}`}
//                     className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium text-sm group/link"
//                   >
//                     View Project
//                     <FiArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
//                   </Link>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* All Projects Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="mb-16"
//         >
//           <div className="text-center mb-16">
//             <p className="text-sm text-purple-400 font-medium mb-2">Complete Portfolio</p>
//             <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4">
//               <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
//                 All Projects
//               </span>
//             </h2>
//             <p className="text-slate-300 max-w-2xl mx-auto text-base lg:text-lg">
//               A comprehensive collection of my work spanning multiple years and technologies
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6">
//             {projects.map((project, i) => (
//               <motion.div
//                 key={project.slug}
//                 variants={itemVariants}
//                 whileHover={{ y: -6, scale: 1.02 }}
//                 className="group rounded-xl overflow-hidden bg-slate-900/80 backdrop-blur-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300"
//               >
//                 {/* Project Image */}
//                 <div className="relative h-40 lg:h-48 overflow-hidden">
//                   <Image
//                     src={project.cover}
//                     alt={project.title}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
//                   {/* Quick Actions */}
//                   <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
//                     <Link href={`/projects/${project.slug}`} className="p-2 rounded-lg bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-all duration-200">
//                       <FiExternalLink className="w-4 h-4 text-white" />
//                     </Link>
//                   </div>

//                   {/* Year Badge */}
//                   <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/40 backdrop-blur-sm rounded text-xs text-white font-medium">
//                     {project.year}
//                   </div>
//                 </div>

//                 {/* Project Info */}
//                 <div className="p-4 lg:p-5">
//                   <div className="flex flex-wrap gap-1 mb-3">
//                     {project.tags.map((tag, i) => (
//                       <span key={i} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs font-medium">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   <h4 className="font-semibold text-white text-base lg:text-lg mb-2 group-hover:text-purple-400 transition-colors line-clamp-1">
//                     {project.title}
//                   </h4>
                  
//                   <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
//                     {project.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Stats Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 1.2 }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 text-center"
//         >
//           {[
//             { number: '6+', label: 'Projects Completed', icon: <FiTrendingUp className="w-5 h-5" /> },
//             { number: '4', label: 'Years Active', icon: <FiCalendar className="w-5 h-5" /> },
//             { number: '8+', label: 'Technologies', icon: <FiTag className="w-5 h-5" /> },
//             { number: '3', label: 'Featured Works', icon: <FiStar className="w-5 h-5" /> }
//           ].map((stat, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: 1.3 + i * 0.1 }}
//               className="p-6 lg:p-8 rounded-xl border border-white/10 backdrop-blur-xl bg-slate-900/80 group hover:border-indigo-400/30 transition-all duration-300"
//             >
//               <div className="flex items-center justify-center mb-4 text-indigo-400 group-hover:scale-110 transition-transform duration-300">
//                 {stat.icon}
//               </div>
//               <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
//                 {stat.number}
//               </div>
//               <div className="text-slate-400 text-sm lg:text-base">{stat.label}</div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 1.5 }}
//           className="text-center mt-16"
//         >
//           <div className="max-w-2xl mx-auto mb-8">
//             <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
//               Like what you see?
//             </h3>
//             <p className="text-slate-300">
//               Let's collaborate and bring your ideas to life with cutting-edge technology and creative design.
//             </p>
//           </div>
          
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="group px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold shadow-2xl hover:shadow-indigo-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
//               Start a Project
//               <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//             <Link href="/contact" className="group px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2">
//               Get in Touch
//               <FiExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }





// 'use client'
// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import Link from 'next/link'
// import { 
//   FiExternalLink, 
//   FiGithub, 
//   FiEye,
//   FiCalendar,
//   FiTag,
//   FiArrowRight,
//   FiStar,
//   FiTrendingUp,
//   FiCode,
//   FiLayers,
//   FiShoppingCart,
//   FiPackage
// } from 'react-icons/fi'

// // Enhanced projects data with your real projects
// const projects = [
//   {
//     slug: 'clean-individual-dashboard',
//     title: 'The Clean Individual - Client Dashboard',
//     description: 'Comprehensive client management system with payment processing, order tracking, and analytics dashboard for Veer Sri Shyam Agro Industries during my tenure at Genet IT Company.',
//     cover: '/api/placeholder/800/600',
//     year: '2024',
//     tags: ['React', 'Node.js', 'Payment Gateway', 'Dashboard'],
//     featured: true,
//     role: 'Full Stack Developer',
//     company: 'Genet IT Company',
//     client: 'Veer Sri Shyam Agro Industries',
//     liveUrl: '#',
//     githubUrl: '#'
//   },
//   {
//     slug: 'vmart-ecommerce',
//     title: 'V-Mart Online Shopping Mall',
//     description: 'Full-featured e-commerce platform with product catalog, shopping cart, user authentication, and order management system developed during BCA 3rd semester.',
//     cover: '/api/placeholder/800/600',
//     year: '2022',
//     tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
//     featured: true,
//     role: 'Frontend Developer',
//     type: 'Academic Project - BCA 3rd Sem',
//     liveUrl: '#',
//     githubUrl: '#'
//   },
//   {
//     slug: 'asset-tracking-system',
//     title: 'Asset Tracking & Management System',
//     description: 'Enterprise-level asset management solution with real-time tracking, inventory management, and comprehensive reporting features. Final year BCA capstone project.',
//     cover: '/api/placeholder/800/600',
//     year: '2023',
//     tags: ['React', 'Express', 'MongoDB', 'RESTful API'],
//     featured: true,
//     role: 'Full Stack Developer',
//     type: 'Final Year Project - BCA',
//     liveUrl: '#',
//     githubUrl: '#'
//   },
//   {
//     slug: 'client-portal-genet',
//     title: 'Multi-Client Management Portal',
//     description: 'Centralized platform for managing multiple client accounts, projects, invoicing, and communications at Genet IT Company.',
//     cover: '/api/placeholder/800/600',
//     year: '2024',
//     tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
//     featured: false,
//     role: 'Full Stack Developer',
//     company: 'Genet IT Company',
//     liveUrl: '#',
//     githubUrl: '#'
//   },
//   {
//     slug: 'inventory-management',
//     title: 'Agro Industries Inventory System',
//     description: 'Real-time inventory tracking system for agricultural products with stock alerts, supplier management, and automated reporting.',
//     cover: '/api/placeholder/800/600',
//     year: '2024',
//     tags: ['React', 'Firebase', 'Material-UI', 'Cloud Functions'],
//     featured: false,
//     role: 'Frontend Developer',
//     client: 'Veer Sri Shyam Agro Industries',
//     liveUrl: '#',
//     githubUrl: '#'
//   },
//   {
//     slug: 'payment-integration',
//     title: 'Secure Payment Gateway Integration',
//     description: 'Implemented multiple payment gateway solutions including Razorpay, PayU, and Paytm for seamless transaction processing.',
//     cover: '/api/placeholder/800/600',
//     year: '2024',
//     tags: ['Node.js', 'Razorpay', 'Stripe', 'Security'],
//     featured: false,
//     role: 'Backend Developer',
//     liveUrl: '#',
//     githubUrl: '#'
//   }
// ]

// export default function ProjectsGrid() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6
//       }
//     }
//   }

//   const featuredProjects = projects.filter(p => p.featured)
//   const regularProjects = projects.filter(p => !p.featured)

//   return (
//     <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
//       {/* Animated Background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(99,102,241,0.15),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.15),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

//         {/* Floating particles */}
//         <div className="absolute inset-0">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 bg-indigo-400 rounded-full opacity-60"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 y: [0, -25, 0],
//                 opacity: [0.6, 1, 0.6],
//                 scale: [1, 1.3, 1],
//               }}
//               transition={{
//                 duration: 5 + Math.random() * 3,
//                 repeat: Infinity,
//                 delay: Math.random() * 2,
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
//         {/* Hero Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-center mb-16"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-8"
//           >
//             <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
//             Portfolio • Real-World Projects
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-6"
//           >
//             <span className="block bg-gradient-to-r from-white via-indigo-400 to-purple-400 bg-clip-text text-transparent">
//               Featured
//             </span>
//             <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
//               Projects
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
//           >
//             From <span className="text-indigo-400 font-semibold">BCA to MCA</span>, 
//             evolving from <span className="text-purple-400 font-semibold">frontend specialist</span> to 
//             <span className="text-pink-400 font-semibold"> full-stack developer</span> with real industry experience
//           </motion.p>
//         </motion.div>

//         {/* Featured Projects */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.8 }}
//           className="mb-20"
//         >
//           <div className="flex items-center justify-between mb-12">
//             <div>
//               <p className="text-sm text-pink-400 font-medium mb-2">Spotlight</p>
//               <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Featured Work</h3>
//             </div>
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium"
//             >
//               <FiStar className="w-4 h-4 text-yellow-400" />
//               Best Projects
//             </motion.div>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
//             {featuredProjects.map((project, i) => (
//               <motion.div
//                 key={project.slug}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.9 + i * 0.1 }}
//                 whileHover={{ y: -8 }}
//                 className="group relative rounded-2xl overflow-hidden bg-slate-900/80 backdrop-blur-xl border border-white/10 hover:border-indigo-400/30 transition-all duration-300"
//               >
//                 {/* Project Image */}
//                 <div className="relative h-48 md:h-56 lg:h-64 xl:h-72 overflow-hidden bg-gradient-to-br from-indigo-900/50 to-purple-900/50">
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     {i === 0 ? <FiLayers className="w-24 h-24 text-indigo-400/30" /> : 
//                      i === 1 ? <FiShoppingCart className="w-24 h-24 text-purple-400/30" /> :
//                      <FiPackage className="w-24 h-24 text-pink-400/30" />}
//                   </div>
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
//                   {/* Overlay Actions */}
//                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
//                     <Link href={project.liveUrl} className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200">
//                       <FiEye className="w-5 h-5 text-white" />
//                     </Link>
//                     <Link href={project.githubUrl} className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200">
//                       <FiGithub className="w-5 h-5 text-white" />
//                     </Link>
//                     <Link href={`/projects/${project.slug}`} className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200">
//                       <FiExternalLink className="w-5 h-5 text-white" />
//                     </Link>
//                   </div>

//                   {/* Featured Badge */}
//                   <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-semibold text-white">
//                     Featured
//                   </div>

//                   {/* Role Badge */}
//                   <div className="absolute top-4 right-4 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/20">
//                     {project.role}
//                   </div>
//                 </div>

//                 {/* Project Details */}
//                 <div className="p-6 lg:p-8">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center gap-2 text-slate-400">
//                       <FiCalendar className="w-4 h-4" />
//                       <span className="text-sm">{project.year}</span>
//                     </div>
//                     <div className="flex gap-2">
//                       {project.tags.slice(0, 2).map((tag, i) => (
//                         <span key={i} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <h4 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
//                     {project.title}
//                   </h4>
                  
//                   <p className="text-slate-400 text-sm lg:text-base leading-relaxed mb-4">
//                     {project.description}
//                   </p>

//                   {project.company && (
//                     <div className="mb-4 pb-4 border-b border-white/10">
//                       <p className="text-xs text-slate-500 mb-1">Company</p>
//                       <p className="text-sm text-indigo-400 font-medium">{project.company}</p>
//                     </div>
//                   )}

//                   {project.client && (
//                     <div className="mb-4 pb-4 border-b border-white/10">
//                       <p className="text-xs text-slate-500 mb-1">Client</p>
//                       <p className="text-sm text-purple-400 font-medium">{project.client}</p>
//                     </div>
//                   )}

//                   {project.type && (
//                     <div className="mb-4 pb-4 border-b border-white/10">
//                       <p className="text-xs text-slate-500 mb-1">Type</p>
//                       <p className="text-sm text-pink-400 font-medium">{project.type}</p>
//                     </div>
//                   )}

//                   <Link 
//                     href={`/projects/${project.slug}`}
//                     className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium text-sm group/link"
//                   >
//                     View Project
//                     <FiArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
//                   </Link>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* All Projects Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="mb-16"
//         >
//           <div className="text-center mb-16">
//             <p className="text-sm text-purple-400 font-medium mb-2">Complete Portfolio</p>
//             <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4">
//               <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
//                 All Projects
//               </span>
//             </h2>
//             <p className="text-slate-300 max-w-2xl mx-auto text-base lg:text-lg">
//               A comprehensive collection showcasing growth from academic projects to professional enterprise solutions
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {projects.map((project, i) => (
//               <motion.div
//                 key={project.slug}
//                 variants={itemVariants}
//                 whileHover={{ y: -6, scale: 1.02 }}
//                 className="group rounded-xl overflow-hidden bg-slate-900/80 backdrop-blur-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300"
//               >
//                 {/* Project Image */}
//                 <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <FiCode className="w-16 h-16 text-purple-400/20" />
//                   </div>
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
//                   {/* Quick Actions */}
//                   <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
//                     <Link href={`/projects/${project.slug}`} className="p-2 rounded-lg bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-all duration-200">
//                       <FiExternalLink className="w-4 h-4 text-white" />
//                     </Link>
//                   </div>

//                   {/* Year Badge */}
//                   <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/40 backdrop-blur-sm rounded text-xs text-white font-medium">
//                     {project.year}
//                   </div>

//                   {/* Role Badge */}
//                   <div className="absolute bottom-3 right-3 px-2 py-1 bg-indigo-500/30 backdrop-blur-sm rounded text-xs text-indigo-300 font-medium">
//                     {project.role}
//                   </div>
//                 </div>

//                 {/* Project Info */}
//                 <div className="p-5">
//                   <div className="flex flex-wrap gap-1 mb-3">
//                     {project.tags.slice(0, 3).map((tag, i) => (
//                       <span key={i} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs font-medium">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   <h4 className="font-semibold text-white text-lg mb-2 group-hover:text-purple-400 transition-colors line-clamp-1">
//                     {project.title}
//                   </h4>
                  
//                   <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-3">
//                     {project.description}
//                   </p>

//                   {(project.company || project.client) && (
//                     <p className="text-xs text-indigo-400">
//                       {project.company || project.client}
//                     </p>
//                   )}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Future Vision */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 1.1 }}
//           className="mb-16 p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-xl border border-white/10"
//         >
//           <div className="text-center max-w-3xl mx-auto">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6">
//               <FiTrendingUp className="w-4 h-4 text-indigo-400" />
//               What's Next
//             </div>
//             <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
//               Ready for <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Bigger Challenges</span>
//             </h3>
//             <p className="text-slate-300 text-lg leading-relaxed">
//               Currently seeking complex, innovative projects that push boundaries. From enterprise solutions to cutting-edge web applications, 
//               I'm ready to tackle <span className="text-indigo-400 font-semibold">ambitious challenges</span> that make a real impact.
//             </p>
//           </div>
//         </motion.div>

//         {/* Stats Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 1.2 }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 text-center mb-16"
//         >
//           {[
//             { number: '6+', label: 'Projects Completed', icon: <FiTrendingUp className="w-5 h-5" /> },
//             { number: '2', label: 'Years Experience', icon: <FiCalendar className="w-5 h-5" /> },
//             { number: '10+', label: 'Technologies', icon: <FiTag className="w-5 h-5" /> },
//             { number: '3', label: 'Featured Works', icon: <FiStar className="w-5 h-5" /> }
//           ].map((stat, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: 1.3 + i * 0.1 }}
//               className="p-6 lg:p-8 rounded-xl border border-white/10 backdrop-blur-xl bg-slate-900/80 group hover:border-indigo-400/30 transition-all duration-300"
//             >
//               <div className="flex items-center justify-center mb-4 text-indigo-400 group-hover:scale-110 transition-transform duration-300">
//                 {stat.icon}
//               </div>
//               <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
//                 {stat.number}
//               </div>
//               <div className="text-slate-400 text-sm lg:text-base">{stat.label}</div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 1.5 }}
//           className="text-center"
//         >
//           <div className="max-w-2xl mx-auto mb-8">
//             <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
//               Like what you see?
//             </h3>
//             <p className="text-slate-300">
//               Let's collaborate and bring your ideas to life with cutting-edge technology and creative solutions.
//             </p>
//           </div>
          
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link href="/contact" className="group px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold shadow-2xl hover:shadow-indigo-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
//               Start a Project
//               <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </Link>
//             <Link href="/contact" className="group px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2">
//               Get in Touch
//               <FiExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }






'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  FiExternalLink, 
  FiGithub, 
  FiEye,
  FiCalendar,
  FiTag,
  FiArrowRight,
  FiStar,
  FiTrendingUp,
  FiCode,
  FiLayers,
  FiShoppingCart,
  FiPackage
} from 'react-icons/fi'


// Enhanced projects data with your real projects
const projects = [
  {
    slug: 'clean-individual-dashboard',
    title: 'The Clean Individual - Client Dashboard',
    description: 'Comprehensive client management system with payment processing, order tracking, and analytics dashboard for Veer Sri Shyam Agro Industries during my tenure at Genet IT Company.',
    cover: '/api/placeholder/800/600',
    year: '2024',
    tags: ['React', 'Node.js', 'Payment Gateway', 'Dashboard'],
    featured: true,
    role: 'Full Stack Developer',
    company: 'Genet IT Company',
    client: 'Veer Sri Shyam Agro Industries',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    slug: 'vmart-ecommerce',
    title: 'V-Mart Online Shopping Mall',
    description: 'Full-featured e-commerce platform with product catalog, shopping cart, user authentication, and order management system developed during BCA 3rd semester.',
    cover: '/api/placeholder/800/600',
    year: '2022',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    featured: true,
    role: 'Frontend Developer',
    type: 'Academic Project - BCA 3rd Sem',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    slug: 'asset-tracking-system',
    title: 'Asset Tracking & Management System',
    description: 'Enterprise-level asset management solution with real-time tracking, inventory management, and comprehensive reporting features. Final year BCA capstone project.',
    cover: '/api/placeholder/800/600',
    year: '2023',
    tags: ['React', 'Express', 'MongoDB', 'RESTful API'],
    featured: true,
    role: 'Full Stack Developer',
    type: 'Final Year Project - BCA',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    slug: 'client-portal-genet',
    title: 'Multi-Client Management Portal',
    description: 'Centralized platform for managing multiple client accounts, projects, invoicing, and communications at Genet IT Company.',
    cover: '/api/placeholder/800/600',
    year: '2024',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
    featured: false,
    role: 'Full Stack Developer',
    company: 'Genet IT Company',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    slug: 'inventory-management',
    title: 'Agro Industries Inventory System',
    description: 'Real-time inventory tracking system for agricultural products with stock alerts, supplier management, and automated reporting.',
    cover: '/api/placeholder/800/600',
    year: '2024',
    tags: ['React', 'Firebase', 'Material-UI', 'Cloud Functions'],
    featured: false,
    role: 'Frontend Developer',
    client: 'Veer Sri Shyam Agro Industries',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    slug: 'payment-integration',
    title: 'Secure Payment Gateway Integration',
    description: 'Implemented multiple payment gateway solutions including Razorpay, PayU, and Paytm for seamless transaction processing.',
    cover: '/api/placeholder/800/600',
    year: '2024',
    tags: ['Node.js', 'Razorpay', 'Stripe', 'Security'],
    featured: false,
    role: 'Backend Developer',
    liveUrl: '#',
    githubUrl: '#'
  }
]


export default function ProjectsGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }


  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }


  const featuredProjects = projects.filter(p => p.featured)
  const regularProjects = projects.filter(p => !p.featured)


  return (
    <section id="projects" className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(99,102,241,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />


        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-indigo-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -25, 0],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>


      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-8"
          >
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
            Portfolio • Real-World Projects
          </motion.div>


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-6"
          >
            <span className="block bg-gradient-to-r from-white via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Featured
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h1>


          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            From <span className="text-indigo-400 font-semibold">BCA to MCA</span>, 
            evolving from <span className="text-purple-400 font-semibold">frontend specialist</span> to 
            <span className="text-pink-400 font-semibold"> full-stack developer</span> with real industry experience
          </motion.p>
        </motion.div>


        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-sm text-pink-400 font-medium mb-2">Spotlight</p>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Featured Work</h3>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium"
            >
              <FiStar className="w-4 h-4 text-yellow-400" />
              Best Projects
            </motion.div>
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl overflow-hidden bg-slate-900/80 backdrop-blur-xl border border-white/10 hover:border-indigo-400/30 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 md:h-56 lg:h-64 xl:h-72 overflow-hidden bg-gradient-to-br from-indigo-900/50 to-purple-900/50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {i === 0 ? <FiLayers className="w-24 h-24 text-indigo-400/30" /> : 
                     i === 1 ? <FiShoppingCart className="w-24 h-24 text-purple-400/30" /> :
                     <FiPackage className="w-24 h-24 text-pink-400/30" />}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                    <Link href={project.liveUrl} className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200">
                      <FiEye className="w-5 h-5 text-white" />
                    </Link>
                    <Link href={project.githubUrl} className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200">
                      <FiGithub className="w-5 h-5 text-white" />
                    </Link>
                    <Link href={`/projects/${project.slug}`} className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200">
                      <FiExternalLink className="w-5 h-5 text-white" />
                    </Link>
                  </div>


                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-semibold text-white">
                    Featured
                  </div>


                  {/* Role Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/20">
                    {project.role}
                  </div>
                </div>


                {/* Project Details */}
                <div className="p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-slate-400">
                      <FiCalendar className="w-4 h-4" />
                      <span className="text-sm">{project.year}</span>
                    </div>
                    <div className="flex gap-2">
                      {project.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>


                  <h4 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-slate-400 text-sm lg:text-base leading-relaxed mb-4">
                    {project.description}
                  </p>


                  {project.company && (
                    <div className="mb-4 pb-4 border-b border-white/10">
                      <p className="text-xs text-slate-500 mb-1">Company</p>
                      <p className="text-sm text-indigo-400 font-medium">{project.company}</p>
                    </div>
                  )}


                  {project.client && (
                    <div className="mb-4 pb-4 border-b border-white/10">
                      <p className="text-xs text-slate-500 mb-1">Client</p>
                      <p className="text-sm text-purple-400 font-medium">{project.client}</p>
                    </div>
                  )}


                  {project.type && (
                    <div className="mb-4 pb-4 border-b border-white/10">
                      <p className="text-xs text-slate-500 mb-1">Type</p>
                      <p className="text-sm text-pink-400 font-medium">{project.type}</p>
                    </div>
                  )}


                  <Link 
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium text-sm group/link"
                  >
                    View Project
                    <FiArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* All Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <div className="text-center mb-16">
            <p className="text-sm text-purple-400 font-medium mb-2">Complete Portfolio</p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                All Projects
              </span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-base lg:text-lg">
              A comprehensive collection showcasing growth from academic projects to professional enterprise solutions
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.slug}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group rounded-xl overflow-hidden bg-slate-900/80 backdrop-blur-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FiCode className="w-16 h-16 text-purple-400/20" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Quick Actions */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Link href={`/projects/${project.slug}`} className="p-2 rounded-lg bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-all duration-200">
                      <FiExternalLink className="w-4 h-4 text-white" />
                    </Link>
                  </div>


                  {/* Year Badge */}
                  <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/40 backdrop-blur-sm rounded text-xs text-white font-medium">
                    {project.year}
                  </div>


                  {/* Role Badge */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-indigo-500/30 backdrop-blur-sm rounded text-xs text-indigo-300 font-medium">
                    {project.role}
                  </div>
                </div>


                {/* Project Info */}
                <div className="p-5">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>


                  <h4 className="font-semibold text-white text-lg mb-2 group-hover:text-purple-400 transition-colors line-clamp-1">
                    {project.title}
                  </h4>
                  
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-3">
                    {project.description}
                  </p>


                  {(project.company || project.client) && (
                    <p className="text-xs text-indigo-400">
                      {project.company || project.client}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mb-16 p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-xl border border-white/10"
        >
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6">
              <FiTrendingUp className="w-4 h-4 text-indigo-400" />
              What's Next
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Bigger Challenges</span>
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Currently seeking complex, innovative projects that push boundaries. From enterprise solutions to cutting-edge web applications, 
              I'm ready to tackle <span className="text-indigo-400 font-semibold">ambitious challenges</span> that make a real impact.
            </p>
          </div>
        </motion.div>


        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 text-center mb-16"
        >
          {[
            { number: '6+', label: 'Projects Completed', icon: <FiTrendingUp className="w-5 h-5" /> },
            { number: '2', label: 'Years Experience', icon: <FiCalendar className="w-5 h-5" /> },
            { number: '10+', label: 'Technologies', icon: <FiTag className="w-5 h-5" /> },
            { number: '3', label: 'Featured Works', icon: <FiStar className="w-5 h-5" /> }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.3 + i * 0.1 }}
              className="p-6 lg:p-8 rounded-xl border border-white/10 backdrop-blur-xl bg-slate-900/80 group hover:border-indigo-400/30 transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-4 text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-slate-400 text-sm lg:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>


        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Like what you see?
            </h3>
            <p className="text-slate-300">
              Let's collaborate and bring your ideas to life with cutting-edge technology and creative solutions.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="group px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold shadow-2xl hover:shadow-indigo-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
              Start a Project
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="group px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2">
              Get in Touch
              <FiExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
