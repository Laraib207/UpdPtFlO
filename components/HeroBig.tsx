// 'use client'
// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useTheme } from '../context/ThemeContext'
// import { PlayIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

// export default function HeroBig(){
//   const { theme } = useTheme()

//   return (
//     // <section className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24">
//     <section className="relative min-h-screen flex items-center overflow-hidden" >
//       {/* Animated Background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.15),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(120,119,198,0.2),transparent_50%)]" />

//         {/* Floating particles */}
//         <div className="absolute inset-0">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 y: [0, -30, 0],
//                 opacity: [0.6, 1, 0.6],
//               }}
//               transition={{
//                 duration: 3 + Math.random() * 2,
//                 repeat: Infinity,
//                 delay: Math.random() * 2,
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           {/* Left: Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="text-center lg:text-left"
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6"
//             >
//               <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//               Available for new projects
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-6"
//             >
//               <span className="block bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
//                 Laraib
//               </span>
//               <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
//                 Siddiqui
//               </span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl leading-relaxed"
//             >
//               Crafting <span className="text-cyan-400 font-semibold">digital experiences</span> that blend
//               <span className="text-purple-400 font-semibold"> creativity</span> with
//               <span className="text-pink-400 font-semibold"> cutting-edge technology</span>
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.8 }}
//               className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
//             >
//               <Link href="/work" className="group px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
//                 View My Work
//                 <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </Link>
//               <button className="group px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2">
//                 <PlayIcon className="w-5 h-5" />
//                 Watch Demo
//               </button>
//             </motion.div>

//             {/* Stats */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 1 }}
//               className="grid grid-cols-3 gap-8 text-center lg:text-left"
//             >
//               <div>
//                 <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
//                 <div className="text-slate-400">Projects</div>
//               </div>
//               <div>
//                 <div className="text-3xl md:text-4xl font-bold text-white mb-2">30+</div>
//                 <div className="text-slate-400">Clients</div>
//               </div>
//               <div>
//                 <div className="text-3xl md:text-4xl font-bold text-white mb-2">5+</div>
//                 <div className="text-slate-400">Years</div>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Right: Profile Card */}
//           <motion.div
//             initial={{ opacity: 0, x: 50, rotateY: -15 }}
//             animate={{ opacity: 1, x: 0, rotateY: 0 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             className="flex justify-center lg:justify-end"
//           >
//             <div className="relative w-full max-w-md lg:max-w-lg">
//               {/* Glow effect */}
//               <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-xl opacity-30" />

//               <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20">
//                 <div className="relative h-[450px] md:h-[500px] lg:h-[550px]">
//                   <Image
//                     src="/images/LaRaiB.png"
//                     alt="Laraib Siddiqui"
//                     fill
//                     style={{ objectFit: 'cover' }}
//                     className="transition-transform duration-700 hover:scale-110"
//                   />

//                   {/* Overlay gradient */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

//                   {/* Floating badge */}
//                   <div className="absolute top-6 right-6 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/20">
//                     <div className="flex items-center gap-2 text-white text-sm">
//                       <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//                       Online
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-6 lg:p-8">
//                   <div className="text-center">
//                     <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">Laraib Siddiqui</h3>
//                     <p className="text-cyan-400 font-medium mb-4">Full-Stack Developer & Designer</p>
//                     <p className="text-slate-300 text-sm leading-relaxed mb-6">
//                       Passionate about creating beautiful, functional, and user-centered digital experiences that make a difference.
//                     </p>

//                     <div className="flex justify-center gap-3">
//                       <div className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
//                         <div className="text-white font-semibold text-sm">MCA</div>
//                         <div className="text-slate-400 text-xs">Computer Applications</div>
//                       </div>
//                       <div className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
//                         <div className="text-white font-semibold text-sm">5+ Years</div>
//                         <div className="text-slate-400 text-xs">Experience</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 1.5 }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//       >
//         <div className="flex flex-col items-center gap-2 text-white/60">
//           <span className="text-sm">Scroll to explore</span>
//           <motion.div
//             animate={{ y: [0, 8, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
//           >
//             <motion.div
//               animate={{ y: [0, 12, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="w-1 h-3 bg-white/60 rounded-full mt-2"
//             />
//           </motion.div>
//         </div>
//       </motion.div>
//     </section>
//   )
// }







// 'use client'
// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useTheme } from '../context/ThemeContext'
// import { PlayIcon, ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline'

// export default function HeroBig(){
//   const { theme } = useTheme()

//   // Advanced animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
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
//         duration: 0.8
//       }
//     }
//   }

//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden">
//       {/* Epic Animated Background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
        
//         {/* Animated radial gradients */}
//         <motion.div 
//           className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]"
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.5, 0.3]
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div 
//           className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.15),transparent_50%)]"
//           animate={{
//             scale: [1.2, 1, 1.2],
//             opacity: [0.15, 0.25, 0.15]
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div 
//           className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(120,119,198,0.2),transparent_50%)]"
//           animate={{
//             scale: [1, 1.3, 1],
//             opacity: [0.2, 0.35, 0.2]
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />

//         {/* Enhanced Floating particles with varied movements */}
//         <div className="absolute inset-0">
//           {[...Array(30)].map((_, i) => (
//             <motion.div
//               key={i}
//               className={`absolute rounded-full ${
//                 i % 3 === 0 ? 'w-2 h-2 bg-cyan-400' : 
//                 i % 3 === 1 ? 'w-1.5 h-1.5 bg-purple-400' : 
//                 'w-1 h-1 bg-pink-400'
//               }`}
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 y: [0, Math.random() * -100 - 50, 0],
//                 x: [0, Math.random() * 50 - 25, 0],
//                 opacity: [0.3, 0.8, 0.3],
//                 scale: [1, 1.5 + Math.random(), 1],
//               }}
//               transition={{
//                 duration: 5 + Math.random() * 5,
//                 repeat: Infinity,
//                 delay: Math.random() * 3,
//                 ease: "easeInOut"
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full relative z-10 py-16 sm:py-20">
//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
//           {/* Left: Content with Staggered Animation */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="text-center lg:text-left"
//           >
//             {/* Badge with Enhanced Animation */}
//             <motion.div
//               variants={itemVariants}
//               whileHover={{ scale: 1.05, y: -2 }}
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6"
//             >
//               <motion.div 
//                 className="w-2 h-2 bg-green-400 rounded-full"
//                 animate={{ 
//                   scale: [1, 1.3, 1],
//                   boxShadow: [
//                     '0 0 0 0 rgba(74, 222, 128, 0.7)',
//                     '0 0 0 8px rgba(74, 222, 128, 0)',
//                     '0 0 0 0 rgba(74, 222, 128, 0)'
//                   ]
//                 }}
//                 transition={{ duration: 2, repeat: Infinity }}
//               />
//               <span className="text-white">Available for new projects</span>
//             </motion.div>

//             {/* Name with Wave Animation */}
//             <motion.h1
//               variants={itemVariants}
//               className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-6"
//             >
//               <motion.span 
//                 className="block bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent"
//                 style={{ backgroundSize: '200% auto' }}
//                 animate={{ 
//                   backgroundPosition: ['0% center', '200% center', '0% center']
//                 }}
//                 transition={{ 
//                   duration: 5, 
//                   repeat: Infinity,
//                   ease: "linear"
//                 }}
//               >
//                 Laraib
//               </motion.span>
//               <motion.span 
//                 className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
//                 style={{ backgroundSize: '200% auto' }}
//                 animate={{ 
//                   backgroundPosition: ['200% center', '0% center', '200% center']
//                 }}
//                 transition={{ 
//                   duration: 5, 
//                   repeat: Infinity,
//                   ease: "linear"
//                 }}
//               >
//                 Siddiqui
//               </motion.span>
//             </motion.h1>

//             {/* Description with Stagger */}
//             <motion.p
//               variants={itemVariants}
//               className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
//             >
//               Crafting <motion.span 
//                 className="text-cyan-400 font-semibold"
//                 animate={{ 
//                   textShadow: [
//                     '0 0 20px rgba(34, 211, 238, 0)',
//                     '0 0 20px rgba(34, 211, 238, 0.6)',
//                     '0 0 20px rgba(34, 211, 238, 0)'
//                   ]
//                 }}
//                 transition={{ duration: 3, repeat: Infinity }}
//               >digital experiences</motion.span> that blend
//               <motion.span 
//                 className="text-purple-400 font-semibold"
//                 animate={{ 
//                   textShadow: [
//                     '0 0 20px rgba(192, 132, 252, 0)',
//                     '0 0 20px rgba(192, 132, 252, 0.6)',
//                     '0 0 20px rgba(192, 132, 252, 0)'
//                   ]
//                 }}
//                 transition={{ duration: 3, repeat: Infinity, delay: 1 }}
//               > creativity</motion.span> with
//               <motion.span 
//                 className="text-pink-400 font-semibold"
//                 animate={{ 
//                   textShadow: [
//                     '0 0 20px rgba(244, 114, 182, 0)',
//                     '0 0 20px rgba(244, 114, 182, 0.6)',
//                     '0 0 20px rgba(244, 114, 182, 0)'
//                   ]
//                 }}
//                 transition={{ duration: 3, repeat: Infinity, delay: 2 }}
//               > cutting-edge technology</motion.span>
//             </motion.p>

//             {/* Buttons with Enhanced Hover */}
//             <motion.div
//               variants={itemVariants}
//               className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
//             >
//               <motion.div
//                 whileHover={{ scale: 1.05, y: -3 }}
//                 whileTap={{ scale: 0.98 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 17 }}
//               >
//                 <Link href="/work" className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-2xl overflow-hidden flex items-center justify-center gap-2">
//                   <motion.div
//                     className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
//                     initial={{ x: '100%' }}
//                     whileHover={{ x: 0 }}
//                     transition={{ duration: 0.3 }}
//                   />
//                   <span className="relative z-10">View My Work</span>
//                   <motion.div
//                     className="relative z-10"
//                     animate={{ x: [0, 3, 0] }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                   >
//                     <ArrowRightIcon className="w-5 h-5" />
//                   </motion.div>
//                 </Link>
//               </motion.div>
              
//               <motion.button 
//                 className="group px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2"
//                 whileHover={{ scale: 1.05, y: -3, borderColor: 'rgba(255,255,255,0.5)' }}
//                 whileTap={{ scale: 0.98 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 17 }}
//               >
//                 <motion.div
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 >
//                   <PlayIcon className="w-5 h-5" />
//                 </motion.div>
//                 Watch Demo
//               </motion.button>
//             </motion.div>

//             {/* Stats with Floating Animation */}
//             <motion.div
//               variants={itemVariants}
//               className="grid grid-cols-2 gap-6 sm:gap-8 max-w-md mx-auto lg:mx-0"
//             >
//               {[
//                 { value: '5+', label: 'Projects', delay: 0 },
//                 { value: '2+', label: 'Years', delay: 0.1 }
//               ].map((stat, index) => (
//                 <motion.div
//                   key={stat.label}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 1 + stat.delay, type: "spring" }}
//                   whileHover={{ 
//                     scale: 1.1, 
//                     y: -8,
//                     boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)'
//                   }}
//                   className="text-center lg:text-left p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300 cursor-default"
//                 >
//                   <motion.div 
//                     className="text-4xl md:text-5xl font-bold text-white mb-2"
//                     animate={{ 
//                       textShadow: [
//                         '0 0 20px rgba(34, 211, 238, 0)',
//                         '0 0 20px rgba(34, 211, 238, 0.5)',
//                         '0 0 20px rgba(34, 211, 238, 0)'
//                       ]
//                     }}
//                     transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
//                   >
//                     {stat.value}
//                   </motion.div>
//                   <div className="text-slate-400 font-medium">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Right: Profile Card with 3D Effect */}
//           <motion.div
//             initial={{ opacity: 0, x: 50, rotateY: -15 }}
//             animate={{ opacity: 1, x: 0, rotateY: 0 }}
//             transition={{ 
//               duration: 1.2, 
//               delay: 0.3,
//               type: "spring",
//               stiffness: 50
//             }}
//             className="flex justify-center lg:justify-end"
//             style={{ perspective: '2000px' }}
//           >
//             <motion.div
//               whileHover={{ 
//                 rotateY: -5,
//                 rotateX: 5,
//                 scale: 1.02,
//                 transition: { duration: 0.4 }
//               }}
//               className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg"
//               style={{ transformStyle: 'preserve-3d' }}
//             >
//               {/* Animated Glow effect */}
//               <motion.div 
//                 className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-xl opacity-30"
//                 animate={{
//                   scale: [1, 1.1, 1],
//                   rotate: [0, 180, 360],
//                   opacity: [0.3, 0.5, 0.3]
//                 }}
//                 transition={{
//                   duration: 10,
//                   repeat: Infinity,
//                   ease: "linear"
//                 }}
//               />

//               <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20">
//                 <div className="relative h-[400px] sm:h-[480px] md:h-[500px] lg:h-[550px] overflow-hidden">
//                   <motion.div
//                     whileHover={{ scale: 1.08 }}
//                     transition={{ duration: 0.6 }}
//                   >
//                     <Image
//                       src="/images/LaRaiB.png"
//                       alt="Laraib Siddiqui"
//                       fill
//                       style={{ objectFit: 'cover' }}
//                       className="transition-transform duration-700"
//                     />
//                   </motion.div>

//                   {/* Overlay gradient */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

//                   {/* Floating badge with pulse */}
//                   <motion.div 
//                     initial={{ opacity: 0, scale: 0.8, y: -20 }}
//                     animate={{ opacity: 1, scale: 1, y: 0 }}
//                     transition={{ delay: 1.5, type: "spring", bounce: 0.5 }}
//                     whileHover={{ scale: 1.1, rotate: 5 }}
//                     className="absolute top-6 right-6 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/20"
//                   >
//                     <div className="flex items-center gap-2 text-white text-sm">
//                       <motion.div 
//                         className="w-2 h-2 bg-green-400 rounded-full"
//                         animate={{
//                           scale: [1, 1.3, 1],
//                           boxShadow: [
//                             '0 0 0 0 rgba(74, 222, 128, 0.7)',
//                             '0 0 0 8px rgba(74, 222, 128, 0)',
//                             '0 0 0 0 rgba(74, 222, 128, 0)'
//                           ]
//                         }}
//                         transition={{ duration: 2, repeat: Infinity }}
//                       />
//                       Online
//                     </div>
//                   </motion.div>
//                 </div>

//                 <motion.div 
//                   className="p-6 lg:p-8"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 1.8, duration: 0.8 }}
//                 >
//                   <div className="text-center space-y-4">
//                     <motion.h3 
//                       className="text-xl lg:text-2xl font-bold text-white"
//                       whileHover={{ scale: 1.05 }}
//                     >
//                       Laraib Siddiqui
//                     </motion.h3>
//                     <motion.p 
//                       className="text-cyan-400 font-medium"
//                       animate={{
//                         textShadow: [
//                           '0 0 20px rgba(34, 211, 238, 0)',
//                           '0 0 20px rgba(34, 211, 238, 0.6)',
//                           '0 0 20px rgba(34, 211, 238, 0)'
//                         ]
//                       }}
//                       transition={{ duration: 3, repeat: Infinity }}
//                     >
//                       Full Stack Web Developer
//                     </motion.p>
//                     <p className="text-slate-300 text-sm leading-relaxed mb-6">
//                       Passionate about creating beautiful, functional, and user-centered digital experiences that make a difference.
//                     </p>

//                     <div className="flex justify-center gap-3">
//                       {[
//                         { title: 'MCA', sub: 'Computer Applications' },
//                         { title: '2+ Years', sub: 'Experience' }
//                       ].map((item, index) => (
//                         <motion.div
//                           key={item.title}
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ delay: 2 + index * 0.1 }}
//                           whileHover={{ 
//                             scale: 1.05,
//                             y: -3,
//                             backgroundColor: 'rgba(255,255,255,0.15)'
//                           }}
//                           className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm"
//                         >
//                           <div className="text-white font-semibold text-sm">{item.title}</div>
//                           <div className="text-slate-400 text-xs">{item.sub}</div>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Enhanced Scroll indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 2.5 }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//       >
//         <div className="flex flex-col items-center gap-2 text-white/60">
//           <motion.span 
//             className="text-sm"
//             animate={{ opacity: [0.6, 1, 0.6] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             Scroll to explore
//           </motion.span>
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//             className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
//             whileHover={{ borderColor: 'rgba(255,255,255,0.6)', scale: 1.1 }}
//           >
//             <motion.div
//               animate={{ 
//                 y: [0, 16, 0],
//                 opacity: [1, 0.3, 1]
//               }}
//               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//               className="w-1 h-3 bg-white/60 rounded-full mt-2"
//             />
//           </motion.div>
//         </div>
//       </motion.div>
//     </section>
//   )
// }





'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '../context/ThemeContext'
import { useState, useEffect } from 'react'
import { PlayIcon, ArrowRightIcon, CodeBracketIcon, CommandLineIcon, CpuChipIcon } from '@heroicons/react/24/outline'

export default function HeroBig(){
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      {/* Subtle Professional Background */}
      <div className="absolute inset-0 -z-10">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />

        {/* Code-like floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-slate-700/20 font-mono text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              {mounted ? ['</>','{}','[]','()','fn()','var','const','=>','&&','||'][Math.floor(Math.random() * 10)] : '{}'}
            </motion.div>
          ))}
        </div>

        {/* Subtle accent glow */}
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full relative z-10 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left: Professional Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Professional Status Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-800/50 border border-slate-700/50 text-sm font-mono mb-6"
            >
              <motion.div 
                className="w-2 h-2 bg-emerald-400 rounded-full"
                animate={{ 
                  opacity: [1, 0.5, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-slate-300">Available for Opportunities</span>
            </motion.div>

            {/* Name - Clean Typography */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6 tracking-tight"
            >
              <span className="block text-white">
                Laraib
              </span>
              <span className="block text-slate-400">
                Siddiqui
              </span>
            </motion.h1>

            {/* Professional Title */}
            <motion.div
              variants={itemVariants}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-slate-800/30 border border-slate-700/30 rounded-lg">
                <CodeBracketIcon className="w-6 h-6 text-emerald-400" />
                <span className="text-xl font-semibold text-white font-mono">
                  Full Stack Developer
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Specializing in building scalable web applications with modern technologies. 
              <span className="text-slate-300"> Transforming complex problems into elegant solutions</span> through clean code and innovative thinking.
            </motion.p>

            {/* Tech Stack Highlight */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8"
            >
              {['React', 'Node.js', 'TypeScript', 'MongoDB', 'Next.js', 'PostgreSQL'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-slate-800/40 border border-slate-700/40 text-slate-300 text-sm font-mono rounded">
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
               <Link href="#projects" className="group px-8 py-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20">
  <span>View Projects</span>
  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
</Link>

              </motion.div>
              
             <Link 
  href="/resume.pdf" 
  download="YourName_Resume.pdf"
>
  <motion.button 
    className="px-8 py-4 rounded-lg border border-slate-700 text-slate-300 font-semibold hover:bg-slate-800/50 hover:border-slate-600 transition-all duration-300 flex items-center justify-center gap-2"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <CommandLineIcon className="w-5 h-5" />
    View Resume
  </motion.button>
</Link>

            </motion.div>

            {/* Professional Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 sm:gap-6 max-w-lg mx-auto lg:mx-0"
            >
              {[
                { value: '2+', label: 'Years Experience', icon: '💼' },
                { value: '15+', label: 'Projects Delivered', icon: '🚀' },
                { value: 'MCA', label: 'Master Degree', icon: '🎓' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className="text-center p-4 rounded-lg bg-slate-800/20 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1 font-mono">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-xs font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Professional Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              {/* Subtle glow effect */}
              <div className="absolute -inset-4 bg-emerald-500/10 rounded-2xl blur-2xl opacity-50" />

              <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl">
                <div className="relative h-[400px] sm:h-[480px] md:h-[500px] lg:h-[550px] overflow-hidden">
                  <Image
                    src="/images/LaRaiB.png"
                    alt="Laraib Siddiqui"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="grayscale-[30%]"
                  />

                  {/* Professional overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                  {/* Status indicator */}
                  <div className="absolute top-6 right-6 px-4 py-2 bg-slate-900/80 backdrop-blur-sm rounded-lg border border-slate-700/50">
                    <div className="flex items-center gap-2 text-white text-sm font-mono">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                      Active
                    </div>
                  </div>

                  {/* Code snippet decoration */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-950/90 backdrop-blur-sm rounded-lg border border-slate-700/50 font-mono text-xs">
                    <div className="text-slate-500 mb-1">// Developer Profile</div>
                    <div className="text-emerald-400">const developer = {'{'}</div>
                    <div className="text-slate-300 ml-4">name: <span className="text-amber-400">"Laraib Siddiqui"</span>,</div>
                    <div className="text-slate-300 ml-4">role: <span className="text-amber-400">"Full Stack Developer"</span>,</div>
                    <div className="text-slate-300 ml-4">experience: <span className="text-blue-400">2</span></div>
                    <div className="text-emerald-400">{'}'}</div>
                  </div>
                </div>

                <div className="p-6 lg:p-8 border-t border-slate-700/30">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Laraib Siddiqui</h3>
                        <p className="text-emerald-400 font-mono text-sm">Full Stack Developer</p>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
                          <CodeBracketIcon className="w-5 h-5 text-slate-400" />
                        </div>
                        <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
                          <CpuChipIcon className="w-5 h-5 text-slate-400" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-slate-800/30 rounded-lg border border-slate-700/30">
                        <div className="text-white font-bold font-mono">MCA</div>
                        <div className="text-slate-400 text-xs">Master's Degree</div>
                      </div>
                      <div className="p-3 bg-slate-800/30 rounded-lg border border-slate-700/30">
                        <div className="text-white font-bold font-mono">2+ Years</div>
                        <div className="text-slate-400 text-xs">IT Company</div>
                      </div>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed">
                      Passionate about writing clean, maintainable code and building robust applications that solve real-world problems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Minimal scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-slate-600 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  )
}