// 'use client'
// import Image from 'next/image'

// export default function FooterSite(){
//   return (
//     <footer className="bg-slate-900 text-white">
//       <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
//         <div>
//           <div className="text-2xl font-bold">Laraib</div>
//           <p className="mt-4 text-slate-400">Design-led development, focused on performance & clarity.</p>
//         </div>

//         <div className="flex flex-col">
//           <div className="text-sm">Contact</div>
//           <div className="mt-4 text-slate-300">123-456-7890<br/>your-email@example.com</div>
//         </div>

//         <div>
//           <div className="text-sm">Subscribe to Our Newsletter</div>
//           <form className="mt-4 flex gap-2">
//             <input type="email" placeholder="Your email" className="flex-1 bg-slate-800 border-b pb-2 focus:outline-none" />
//             <button className="px-4 py-2 bg-white text-slate-900 rounded">Submit</button>
//           </form>
//         </div>
//       </div>
//       <div className="border-t border-slate-800 text-slate-500 py-6 text-center">© {new Date().getFullYear()} Laraib — All rights reserved</div>
//     </footer>
//   )
// }



// 'use client'
// import { motion } from 'framer-motion'
// import Link from 'next/link'
// import { useState } from 'react'


// export default function FooterSite() {
//   const [email, setEmail] = useState('')
//   const [subscribed, setSubscribed] = useState(false)

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setSubscribed(true)
//     setTimeout(() => {
//       setSubscribed(false)
//       setEmail('')
//     }, 2500)
//   }

//   const quickLinks = [
//     { label: 'Work', href: '/work' },
//     { label: 'About', href: '/about' },
//     { label: 'Services', href: '/services' },
//     { label: 'Contact', href: '/contact' }
//   ]

//   const socialLinks = [
//     {
//       name: 'GitHub',
//       href: '#',
//       icon: (
//         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//         </svg>
//       )
//     },
//     {
//       name: 'LinkedIn',
//       href: '#',
//       icon: (
//         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//         </svg>
//       )
//     },
//     {
//       name: 'Twitter',
//       href: '#',
//       icon: (
//         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//         </svg>
//       )
//     },
//     {
//       name: 'Dribbble',
//       href: '#',
//       icon: (
//         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm8.24 6.45c1.1 1.55 1.76 3.45 1.76 5.55 0 .45-.04.89-.11 1.32-2.65-.54-5.17-.54-7.46-.03-.13-.31-.26-.63-.4-.95 2.5-1.02 4.77-2.52 6.21-5.89zm-7.63-4.39c2.19.1 4.22.88 5.84 2.13-1.31 3.05-3.36 4.43-5.84 5.34-.74-1.36-1.55-2.66-2.42-3.89 1.1-.84 2.37-1.47 3.76-1.85-.45-.55-.91-1.09-1.39-1.62.01 0 .03-.01.05-.01zM4.06 4.06c1.4-1.4 3.24-2.31 5.27-2.55.43.49.85 1 1.25 1.53-1.52.43-2.94 1.16-4.17 2.14-1.06-1.13-1.85-2.37-2.35-3.12zm-.51 9.44c0-1.86.55-3.59 1.49-5.05.43.64 1.02 1.43 1.77 2.3-1.16 1.07-2.09 2.39-2.72 3.9-.34-.69-.54-1.45-.54-2.15zm2.4 5.55c-.68-.92-1.2-1.96-1.54-3.07.55-1.34 1.34-2.54 2.34-3.54.79 1.08 1.69 2.09 2.68 3.04-1.14.77-2.39 1.33-3.48 1.57zm7.05 2.89c-1.89 0-3.66-.56-5.14-1.52.96-.27 1.98-.71 3.05-1.31 1.13.72 2.34 1.35 3.62 1.87-.81.32-1.67.53-2.53.53zm5.55-2.4c-1.42-.58-2.77-1.27-4.03-2.06 1.07-.72 2.06-1.58 2.96-2.58.84 1.21 1.54 2.51 2.09 3.87-.34.26-.68.51-1.02.77z" />
//         </svg>
//       )
//     }
//   ]

//   return (
//     <footer className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
//       {/* Animated Background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.15),transparent_70%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15),transparent_70%)]" />
//       </div>

//       {/* Main Footer Content */}
//       <div className="max-w-7xl mx-auto px-6 py-16">
//         <div className="grid md:grid-cols-4 gap-12 mb-12">
//           {/* Brand Column */}
//           <div className="md:col-span-2">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <h3 className="text-4xl font-black bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent mb-4">
//                 Laraib
//               </h3>
//               <p className="text-slate-400 text-lg leading-relaxed max-w-md mb-6">
//                 Design-led development, focused on performance & clarity. Building digital experiences that inspire and deliver results.
//               </p>

//               {/* Social Links */}
//               <div className="flex gap-3">
//                 {socialLinks.map((social) => (
//                   <motion.a
//                     key={social.name}
//                     href={social.href}
//                     whileHover={{ scale: 1.1, rotate: 5 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-400/50 text-slate-400 hover:text-indigo-400 transition-all duration-300"
//                     title={social.name}
//                   >
//                     {social.icon}
//                   </motion.a>
//                 ))}
//               </div>
//             </motion.div>
//           </div>

//           {/* Quick Links Column */}
//           <div>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//             >
//               <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
//                 Quick Links
//               </h4>
//               <ul className="space-y-3">
//                 {quickLinks.map((link) => (
//                   <li key={link.label}>
//                     <Link
//                       href={link.href}
//                       className="text-slate-400 hover:text-indigo-400 transition-colors duration-300 flex items-center gap-2 group"
//                     >
//                       <span className="w-0 group-hover:w-4 h-px bg-indigo-400 transition-all duration-300" />
//                       {link.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           </div>

//           {/* Contact Column */}
//           <div>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
//                 Get in Touch
//               </h4>
//               <div className="space-y-3 text-slate-400">
//                 <a
//                   href="tel:123-456-7890"
//                   className="flex items-center gap-3 hover:text-indigo-400 transition-colors group"
//                 >
//                   <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                   </svg>
//                   123-456-7890
//                 </a>
//                 <a
//                   href="mailto:your-email@example.com"
//                   className="flex items-center gap-3 hover:text-indigo-400 transition-colors group"
//                 >
//                   <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                   your-email@example.com
//                 </a>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Newsletter Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           className="pt-12 border-t border-white/10"
//         >
//           <div className="max-w-2xl">
//             <h4 className="text-xl font-bold text-white mb-2">
//               Subscribe to Newsletter
//             </h4>
//             <p className="text-slate-400 mb-6">
//               Get the latest updates, articles, and resources delivered directly to your inbox
//             </p>

//             {subscribed ? (
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20"
//               >
//                 <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//                 <span className="text-green-400 font-semibold">Thanks for subscribing!</span>
//               </motion.div>
//             ) : (
//               <form onSubmit={handleSubmit} className="flex gap-3">
//                 <input
//                   type="email"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter your email"
//                   className="flex-1 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 transition-colors"
//                 />
//                 <motion.button
//                   type="submit"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
//                 >
//                   Subscribe
//                 </motion.button>
//               </form>
//             )}
//           </div>
//         </motion.div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-white/10">
//         <div className="max-w-7xl mx-auto px-6 py-6">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               className="text-slate-500 text-sm"
//             >
//               © {new Date().getFullYear()} Laraib. All rights reserved.
//             </motion.p>

//             <div className="flex gap-6 text-sm text-slate-500">
//               <Link href="/privacy" className="hover:text-indigo-400 transition-colors">
//                 Privacy Policy
//               </Link>
//               <Link href="/terms" className="hover:text-indigo-400 transition-colors">
//                 Terms of Service
//               </Link>
//               <Link href="/sitemap" className="hover:text-indigo-400 transition-colors">
//                 Sitemap
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll to Top Button */}
//       <motion.button
//         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 z-50"
//         title="Scroll to top"
//       >
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
//         </svg>
//       </motion.button>
//     </footer>
//   )
// }



export default function FooterSite() {
  return (
    <footer className="theme-section">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-xs uppercase tracking-[0.28em] theme-text-muted">
          Laraib Siddiqui
        </p>
        <p className="text-sm theme-text-secondary">
          A portfolio shaped with precision, motion, and modern frontend craft.
        </p>
      </div>
    </footer>
  )
}