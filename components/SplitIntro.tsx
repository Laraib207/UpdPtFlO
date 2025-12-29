// 'use client'
// import Image from 'next/image'
// import { motion } from 'framer-motion'

// export default function SplitIntro(){
//   return (
//     <section className="relative">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-0 px-6">
//         <motion.div initial={{opacity:0,x:-12}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="bg-slate-800 text-white p-12">
//           <p className="text-sm text-slate-300">Innovative Marketing</p>
//           <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">Get Acquainted</h2>
//           <p className="mt-6 text-slate-300 max-w-lg">I build ecommerce & product experiences, focused on conversions and delightful UX. I’m available for freelance and collaborations.</p>
//           <div className="mt-8">
//             <a href="#work" className="inline-block px-5 py-3 bg-white text-slate-900 rounded shadow">Our Work</a>
//           </div>
//         </motion.div>

//         <div className="relative h-80 md:h-[520px]">
//           <div className="absolute inset-0">
//             <Image src="/images/intro-side.jpg" alt="office" fill style={{objectFit:'cover'}} />
//             <div className="absolute inset-0 bg-black/20" />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


// 'use client'
// import Image from 'next/image'
// import { motion } from 'framer-motion'
// import { useTheme } from '../context/ThemeContext'
// import { ArrowRightIcon, SparklesIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

// export default function SplitIntro(){
//   const { theme } = useTheme()

//   return (
//     <section className="relative overflow-hidden">
//       {/* Background Animation */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,119,198,0.15),transparent_50%)]" />
        
//         {/* Floating particles */}
//         <div className="absolute inset-0">
//           {[...Array(12)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-50"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 y: [0, -25, 0],
//                 opacity: [0.5, 1, 0.5],
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

//       <div className="max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-0">
//           {/* Left: Content Section */}
//           <motion.div 
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative glass-dark p-8 md:p-12 lg:p-16 min-h-[600px] md:min-h-[700px] lg:min-h-[520px] flex flex-col justify-center border-r border-white/10"
//           >
//             {/* Glow effect for content */}
//             <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-l-2xl" />
            
//             <div className="relative z-10">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-8"
//               >
//                 <SparklesIcon className="w-4 h-4 text-cyan-400" />
//                 <span className="text-cyan-400">Innovative Marketing</span>
//               </motion.div>

//               <motion.h2 
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.3 }}
//                 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[0.9] mb-8"
//               >
//                 <span className="block bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
//                   Get
//                 </span>
//                 <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
//                   Acquainted
//                 </span>
//               </motion.h2>

//               <motion.p 
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//                 className="text-lg md:text-xl text-slate-300 max-w-lg leading-relaxed mb-10"
//               >
//                 I build <span className="text-cyan-400 font-semibold">ecommerce & product experiences</span>, focused on 
//                 <span className="text-purple-400 font-semibold"> conversions</span> and 
//                 <span className="text-pink-400 font-semibold"> delightful UX</span>. I'm available for freelance and collaborations.
//               </motion.p>

//               {/* Feature highlights */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.5 }}
//                 className="flex flex-wrap gap-4 mb-10"
//               >
//                 <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10">
//                   <div className="w-2 h-2 bg-green-400 rounded-full" />
//                   <span className="text-sm text-slate-300">E-commerce Expert</span>
//                 </div>
//                 <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10">
//                   <div className="w-2 h-2 bg-blue-400 rounded-full" />
//                   <span className="text-sm text-slate-300">UX Focused</span>
//                 </div>
//                 <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10">
//                   <div className="w-2 h-2 bg-purple-400 rounded-full" />
//                   <span className="text-sm text-slate-300">Conversion Driven</span>
//                 </div>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.6 }}
//                 className="flex flex-col sm:flex-row gap-4"
//               >
//                 <a 
//                   href="#work" 
//                   className="group px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
//                 >
//                   Our Work
//                   <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </a>
                
//                 <button className="group px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2">
//                   <CodeBracketIcon className="w-5 h-5" />
//                   View Process
//                 </button>
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Right: Image Section */}
//           <motion.div 
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="relative min-h-[400px] md:min-h-[600px] lg:min-h-[520px] group overflow-hidden"
//           >
//             {/* Glow effect */}
//             <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 z-10" />
            
//             <div className="relative h-full glass-dark rounded-r-2xl overflow-hidden border-l border-white/10">
//               <Image 
//                 src="/images/intro-side.jpg" 
//                 alt="office workspace showcasing modern development environment" 
//                 fill 
//                 style={{ objectFit: 'cover' }} 
//                 className="transition-transform duration-700 group-hover:scale-110"
//               />
              
//               {/* Multi-layered overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//               <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-cyan-900/20" />
              
//               {/* Floating stats overlay */}
//               <div className="absolute bottom-8 left-8 right-8">
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.8, delay: 0.8 }}
//                   className="glass-dark rounded-xl p-6 border border-white/20 backdrop-blur-xl"
//                 >
//                   <div className="grid grid-cols-3 gap-4 text-center">
//                     <div>
//                       <div className="text-2xl font-bold text-white mb-1">98%</div>
//                       <div className="text-xs text-slate-300">Conversion Rate</div>
//                     </div>
//                     <div>
//                       <div className="text-2xl font-bold text-white mb-1">50+</div>
//                       <div className="text-xs text-slate-300">Projects Done</div>
//                     </div>
//                     <div>
//                       <div className="text-2xl font-bold text-white mb-1">24/7</div>
//                       <div className="text-xs text-slate-300">Support</div>
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>

//               {/* Top right badge */}
//               <div className="absolute top-6 right-6">
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: 1 }}
//                   className="px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/20"
//                 >
//                   <div className="flex items-center gap-2 text-white text-sm">
//                     <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//                     Available Now
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { ArrowRightIcon, SparklesIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

export default function SplitIntro(){
  const { theme } = useTheme()

  return (
    <section className="relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,119,198,0.15),transparent_50%)]" />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-50"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -25, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left: Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-slate-900/80 backdrop-blur-xl p-8 md:p-12 lg:p-16 min-h-[600px] md:min-h-[700px] lg:min-h-[600px] flex flex-col justify-center border-r border-white/10"
          >
            {/* Glow effect for content */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-l-2xl" />
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-8"
              >
                <SparklesIcon className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400">Innovative Marketing</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.9] mb-8"
              >
                <span className="block bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Get
                </span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Acquainted
                </span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-2xl leading-relaxed mb-10"
              >
                I build <span className="text-cyan-400 font-semibold">ecommerce & product experiences</span>, focused on 
                <span className="text-purple-400 font-semibold"> conversions</span> and 
                <span className="text-pink-400 font-semibold"> delightful UX</span>. I'm availabe for collaborations and dissussions on new projects.
              </motion.p>

              {/* Feature highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap gap-4 mb-10"
              >
                <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-sm text-slate-300">E-commerce Expert</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span className="text-sm text-slate-300">UX Focused</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <span className="text-sm text-slate-300">Conversion Driven</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a 
                  href="#work" 
                  className="group px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Our Work
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <button className="group px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2">
                  <CodeBracketIcon className="w-5 h-5" />
                  View Process
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[600px] group overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 z-10" />
            
            <div className="relative h-full bg-slate-900/80 backdrop-blur-xl rounded-r-2xl overflow-hidden border-l border-white/10">
              <Image 
                src="/images/intro-side.jpg" 
                alt="office workspace showcasing modern development environment" 
                fill 
                style={{ objectFit: 'cover' }} 
                className="transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Multi-layered overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-cyan-900/20" />
              
              {/* Floating stats overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="bg-slate-900/80 backdrop-blur-xl rounded-xl p-6 border border-white/20"
                >
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1">98%</div>
                      <div className="text-xs text-slate-300">Conversion Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1">50+</div>
                      <div className="text-xs text-slate-300">Projects Done</div>
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1">24/7</div>
                      <div className="text-xs text-slate-300">Support</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Top right badge */}
              <div className="absolute top-6 right-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/20"
                >
                  <div className="flex items-center gap-2 text-white text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Available Now
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  
  )
}

