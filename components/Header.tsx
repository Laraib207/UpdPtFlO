// 'use client'
// import Link from 'next/link'
// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Bars3Icon, XMarkIcon, SparklesIcon, CodeBracketIcon, TrophyIcon } from '@heroicons/react/24/outline'
// import { useTheme } from '../context/ThemeContext'
// import ThemeToggle from './ThemeToggle'

// export default function Header() {
//   const [open, setOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const { theme, toggleTheme } = useTheme()

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20)
//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   const navItems = [
//     { name: 'Home', href: '/', icon: SparklesIcon },
//     { name: 'Work', href: '/work', icon: CodeBracketIcon },
//     { name: 'Projects', href: '/#projects', icon: CodeBracketIcon },
//     { name: 'Services', href: '/#services', icon: SparklesIcon },
//     { name: 'About', href: '/about', icon: SparklesIcon },
//     { name: 'Awards', href: '/#awards', icon: TrophyIcon },
//     { name: 'Contact', href: '/contact', icon: SparklesIcon },
//     { name: 'FeaturePlan', href: '/featureplan', icon: SparklesIcon },
//   ]

//   return (
//     <>
//       {/* Floating particles background */}
//       <div className="fixed inset-0 -z-50 pointer-events-none">
//         <div className="absolute inset-0">
//           {[...Array(8)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 y: [0, -15, 0],
//                 opacity: [0.2, 0.5, 0.2],
//               }}
//               transition={{
//                 duration: 4 + Math.random() * 2,
//                 repeat: Infinity,
//                 delay: Math.random() * 2,
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
//         scrolled
//           ? `shadow-2xl border-b backdrop-blur-xl bg-white/80 border-slate-200/20 dark:bg-slate-900/80 dark:border-white/10`
//           : `backdrop-blur-sm bg-white/20 dark:bg-slate-900/20`
//       }`}>
//         {/* Glow effect when scrolled */}
//         {scrolled && (
//           <div className="absolute inset-0 rounded-b-2xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 dark:from-purple-500/5 dark:via-cyan-500/5 dark:to-purple-500/5" />
//         )}

//         <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 relative z-10">
//           <div className="flex items-center justify-between">
//             {/* Logo Section */}
//             <div className="flex items-center gap-6">
//               <Link href="/" className="group flex items-center gap-2">
//                 <motion.div
//                   whileHover={{ scale: 1.05, rotate: 5 }}
//                   className="relative"
//                 >
//                   <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
//                   <div className="relative px-3 py-2 rounded-lg border backdrop-blur-sm bg-white/50 border-slate-200/50 dark:bg-slate-800/50 dark:border-white/20">
//                     <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-white dark:via-cyan-400 dark:to-purple-400">
//                       Laraib
//                     </span>
//                   </div>
//                 </motion.div>
//               </Link>

//               {/* Desktop Navigation */}
//               <nav className="hidden lg:flex items-center gap-1">
//                 {navItems.map((item, index) => {
//                   const IconComponent = item.icon;
//                   return (
//                     <motion.div
//                       key={item.href}
//                       initial={{ opacity: 0, y: -20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                     >
//                       <Link
//                         href={item.href}
//                         className="group flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 backdrop-blur-sm border border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 hover:border-slate-300/30 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/10 dark:hover:border-white/20"
//                       >
//                         <IconComponent className="w-4 h-4 transition-colors group-hover:text-blue-500 dark:group-hover:text-cyan-400" />
//                         {item.name}
//                         {item.name === 'Awards' && (
//                           <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
//                         )}
//                       </Link>
//                     </motion.div>
//                   )
//                 })}
//               </nav>
//             </div>

//             {/* Right Side Actions */}
//             <div className="flex items-center gap-3">
//               {/* Status Badge */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: 0.8 }}
//                 className="hidden md:flex items-center gap-2 px-3 py-2 rounded-full border text-xs backdrop-blur-sm bg-white/50 border-slate-200/50 dark:bg-slate-800/50 dark:border-white/20"
//               >
//                 <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//                 <span className="text-green-400 font-medium">Available</span>
//               </motion.div>

//               {/* Theme Toggle */}
//               <div className="hidden md:block">
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <ThemeToggle />
//                 </motion.div>
//               </div>

//               {/* CTA Button */}
//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: 0.6 }}
//                 className="hidden md:block"
//               >
//                 <Link
//                   href="/contact"
//                   className="group px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 flex items-center gap-2"
//                 >
//                   Let's Talk With me
//                   <SparklesIcon className="w-4 h-4 group-hover:rotate-12 transition-transform" />
//                 </Link>
//               </motion.div>

//               {/* Mobile Menu Button */}
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="lg:hidden p-2 rounded-xl border backdrop-blur-sm bg-white/50 border-slate-200/50 dark:bg-slate-800/50 dark:border-white/20"
//                 onClick={() => setOpen(true)}
//                 aria-label="Open menu"
//               >
//                 <Bars3Icon className="w-6 h-6 text-slate-900 dark:text-white" />
//               </motion.button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 lg:hidden"
//           >
//             {/* Backdrop */}
//             <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)} />

//             {/* Menu Panel */}
//             <motion.div
//               initial={{ opacity: 0, x: '100%' }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: '100%' }}
//               transition={{ type: 'tween', duration: 0.3 }}
//               className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] border-l backdrop-blur-xl bg-white/95 border-slate-200/50 dark:bg-slate-900/95 dark:border-white/20"
//             >
//               {/* Glow effect */}
//               <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-blue-500/10 dark:from-purple-500/10 dark:via-cyan-500/5 dark:to-purple-500/10" />

//               <div className="relative h-full flex flex-col p-6">
//                 {/* Header */}
//                 <div className="flex items-center justify-between mb-8">
//                   <Link href="/" onClick={() => setOpen(false)}>
//                     <span className="text-2xl font-black bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-white dark:via-cyan-400 dark:to-purple-400">
//                       Laraib
//                     </span>
//                   </Link>
//                   <button
//                     onClick={() => setOpen(false)}
//                     className="p-2 rounded-xl border backdrop-blur-sm bg-white/50 border-slate-200/50 dark:bg-slate-800/50 dark:border-white/20"
//                   >
//                     <XMarkIcon className="w-6 h-6 text-slate-900 dark:text-white" />
//                   </button>
//                 </div>

//                 {/* Navigation */}
//                 <nav className="flex flex-col gap-2 flex-1">
//                   {navItems.map((item, index) => {
//                     const IconComponent = item.icon;
//                     return (
//                       <motion.div
//                         key={item.href}
//                         initial={{ opacity: 0, x: 20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.3, delay: index * 0.05 }}
//                       >
//                         <Link
//                           href={item.href}
//                           onClick={() => setOpen(false)}
//                           className="group flex items-center gap-3 p-4 rounded-xl font-medium transition-all duration-300 border text-slate-800 hover:bg-slate-100/50 border-transparent hover:border-slate-300/30 dark:text-white dark:hover:bg-white/10 dark:border-transparent dark:hover:border-white/20 backdrop-blur-sm"
//                         >
//                           <IconComponent className="w-5 h-5 text-blue-500 dark:text-cyan-400" />
//                           <span className="font-medium">{item.name}</span>
//                           {item.name === 'Awards' && (
//                             <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse ml-auto" />
//                           )}
//                         </Link>
//                       </motion.div>
//                     )
//                   })}
//                 </nav>

//                 {/* Bottom Section */}
//                 <div className="space-y-4 pt-6 border-t border-slate-200/30 dark:border-white/10">
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm text-slate-600 dark:text-slate-300">Theme</span>
//                     <ThemeToggle />
//                   </div>

//                   <Link
//                     href="/contact"
//                     onClick={() => setOpen(false)}
//                     className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2"
//                   >
//                     Let's Talk
//                     <SparklesIcon className="w-4 h-4" />
//                   </Link>

//                   {/* Status */}
//                   <div className="flex items-center justify-center gap-2 text-sm">
//                     <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//                     <span className="text-green-400">Available for projects</span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>

//         )}
//       </AnimatePresence>
//     </>
//   )
// }





'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon, CodeBracketIcon, CommandLineIcon, CpuChipIcon, DocumentTextIcon, BriefcaseIcon, EnvelopeIcon, SparklesIcon, UserIcon } from '@heroicons/react/24/outline'
import { useTheme } from '../context/ThemeContext'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/', icon: CommandLineIcon },
    { name: 'Work', href: '/work', icon: BriefcaseIcon },
    { name: 'Projects', href: '/#projects', icon: CodeBracketIcon },
    { name: 'Services', href: '/#services', icon: CpuChipIcon },
    { name: 'Awards', href: '/#awards', icon: SparklesIcon },
    { name: 'About', href: '/about', icon: UserIcon },
    { name: 'Contact', href: '/contact', icon: EnvelopeIcon },
    { name: 'Futureplanes', href: '/futureplanes', icon: SparklesIcon },
  ]

  return (
    <>
      {/* Subtle code pattern background */}
      <div className="fixed inset-0 -z-50 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'shadow-lg border-b bg-white/90 border-slate-200 dark:bg-slate-950/95 dark:border-slate-800'
          : 'bg-white/80 dark:bg-slate-950/80'
      } backdrop-blur-md`}>
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 relative z-10">
          <div className="flex items-center justify-between">
            {/* Logo Section with Image */}
            <div className="flex items-center gap-6">
              <Link href="/" className="group flex items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  {/* Logo Container */}
                  <div className="relative w-32 h-12 md:w-40 md:h-14">
                    <Image
                      src="/images/iBzAthelaraib.png"
                      alt="iBzA thelaraib"
                      fill
                      style={{ objectFit: 'contain' }}
                      priority
                      className="drop-shadow-lg"
                    />
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute -inset-2 bg-emerald-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                {/* Optional text badge */}
                <div className="hidden xl:flex flex-col">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 font-mono tracking-wider">DEVELOPER</span>
                  <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 font-mono">Full Stack</span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="group flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/70"
                      >
                        <IconComponent className="w-4 h-4 transition-colors group-hover:text-emerald-500 dark:group-hover:text-emerald-400" />
                        <span className="font-bold tracking-wide">{item.name}</span>
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Code Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              >
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs font-mono tracking-wider">ONLINE</span>
              </motion.div>

              {/* Theme Toggle */}
              <div className="hidden md:block">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ThemeToggle />
                </motion.div>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="hidden md:block"
              >
                <Link
                  href="/contact"
                  className="group px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-lg shadow-emerald-600/20 hover:shadow-emerald-500/30 transition-all duration-300 flex items-center gap-2"
                >
                  <span className="tracking-wide">HIRE</span>
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <CommandLineIcon className="w-4 h-4" />
                  </motion.div>
                </Link>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="lg:hidden p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
              >
                <Bars3Icon className="w-6 h-6 text-slate-900 dark:text-white" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom border accent */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setOpen(false)} />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl"
            >
              <div className="relative h-full flex flex-col p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
                  <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
                    <div className="relative w-32 h-12">
                      <Image
                        src="/images/iBzAthelaraib.png"
                        alt="iBzA thelaraib"
                        fill
                        style={{ objectFit: 'contain' }}
                        className="drop-shadow-lg"
                      />
                    </div>
                  </Link>
                  <button
                    onClick={() => setOpen(false)}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                  >
                    <XMarkIcon className="w-6 h-6 text-slate-900 dark:text-white" />
                  </button>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-2 flex-1 overflow-y-auto">
                  {navItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-center gap-3 p-4 rounded-lg font-bold transition-all duration-200 text-slate-800 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                        >
                          <IconComponent className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                          <span className="tracking-wide">{item.name}</span>
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>

                {/* Bottom Section */}
                <div className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
                  {/* Status */}
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm font-mono">AVAILABLE FOR WORK</span>
                  </div>

                  {/* Theme Toggle */}
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300 tracking-wide">THEME</span>
                    <ThemeToggle />
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="w-full px-6 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-lg shadow-emerald-600/30 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span className="tracking-wide">HIRE ME NOW</span>
                    <CommandLineIcon className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}