// 'use client'
// import { motion } from 'framer-motion'
// import Link from 'next/link'
// import {
//   FiGithub,
//   FiLinkedin,
//   FiMail,
//   FiPhone,
//   FiArrowRight,
//   FiSend,
//   FiMapPin,
//   FiMessageCircle,
//   FiExternalLink,
//   FiUser,
//   FiCalendar
// } from 'react-icons/fi'

// export default function Contact() {
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

//   const contactMethods = [
//     {
//       title: "GitHub",
//       description: "Check out my latest projects and contributions",
//       icon: <FiGithub className="w-8 h-8" />,
//       link: "https://github.com/yourusername", // Replace with your GitHub
//       linkText: "@yourusername",
//       color: "from-gray-600 to-gray-800",
//       hoverColor: "group-hover:border-gray-400/30"
//     },
//     {
//       title: "LinkedIn",
//       description: "Connect with me professionally",
//       icon: <FiLinkedin className="w-8 h-8" />,
//       link: "https://linkedin.com/in/yourprofile", // Replace with your LinkedIn
//       linkText: "/in/yourprofile",
//       color: "from-blue-600 to-blue-800",
//       hoverColor: "group-hover:border-blue-400/30"
//     },
//     {
//       title: "Email",
//       description: "Send me a message directly",
//       icon: <FiMail className="w-8 h-8" />,
//       link: "mailto:your.email@example.com", // Replace with your email
//       linkText: "your.email@example.com",
//       color: "from-purple-600 to-purple-800",
//       hoverColor: "group-hover:border-purple-400/30"
//     },
//     {
//       title: "Phone",
//       description: "Let's have a quick conversation",
//       icon: <FiPhone className="w-8 h-8" />,
//       link: "tel:+1234567890", // Replace with your phone
//       linkText: "+1 (234) 567-890",
//       color: "from-green-600 to-green-800",
//       hoverColor: "group-hover:border-green-400/30"
//     }
//   ]

//   const quickActions = [
//     {
//       title: "Schedule a Call",
//       description: "Book a 30-minute consultation",
//       icon: <FiCalendar className="w-6 h-6" />,
//       action: "Schedule Now",
//       color: "from-indigo-500 to-purple-600"
//     },
//     {
//       title: "Send Message",
//       description: "Quick contact form",
//       icon: <FiMessageCircle className="w-6 h-6" />,
//       action: "Send Message",
//       color: "from-pink-500 to-rose-600"
//     }
//   ]

//   return (
//     <section className="relative min-h-screen py-20 overflow-hidden bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-indigo-900 dark:to-slate-900 transition-colors duration-300">
//       {/* Animated Background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(99,102,241,0.15),transparent_50%)] dark:block hidden" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.15),transparent_50%)] dark:block hidden" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] dark:block hidden" />

//         {/* Floating particles - only in dark mode */}
//         <div className="absolute inset-0 dark:block hidden">
//           {[...Array(25)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 bg-indigo-400 rounded-full opacity-60"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 y: [0, -30, 0],
//                 opacity: [0.6, 1, 0.6],
//                 scale: [1, 1.5, 1],
//               }}
//               transition={{
//                 duration: 6 + Math.random() * 4,
//                 repeat: Infinity,
//                 delay: Math.random() * 3,
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
//             className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 text-sm font-medium mb-8 text-gray-700 dark:text-white"
//           >
//             <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//             Available for Work • Let's Connect
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-6 text-gray-900 dark:text-white"
//           >
//             <span className="block bg-gradient-to-r from-gray-900 dark:from-white via-indigo-600 dark:via-indigo-400 to-purple-600 dark:to-purple-400 bg-clip-text text-transparent">
//               Let's Build
//             </span>
//             <span className="block bg-gradient-to-r from-purple-600 dark:from-purple-400 via-pink-600 dark:via-pink-400 to-indigo-600 dark:to-indigo-400 bg-clip-text text-transparent">
//               Together
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
//           >
//             Ready to collaborate on your next <span className="text-indigo-600 dark:text-indigo-400 font-semibold">amazing project</span>?
//             Reach out through any of these channels and let's create
//             <span className="text-purple-600 dark:text-purple-400 font-semibold"> something extraordinary</span> together.
//           </motion.p>
//         </motion.div>

//         {/* Contact Methods Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="mb-20"
//         >
//           <div className="flex items-center justify-between mb-12">
//             <div>
//               <p className="text-sm text-pink-600 dark:text-pink-400 font-medium mb-2">Get In Touch</p>
//               <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">Contact Methods</h3>
//             </div>
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 text-sm font-medium text-gray-700 dark:text-white"
//             >
//               <FiUser className="w-4 h-4 text-green-400" />
//               Available Now
//             </motion.div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
//             {contactMethods.map((method, i) => (
//               <motion.div
//                 key={i}
//                 variants={itemVariants}
//                 whileHover={{ y: -8, scale: 1.02 }}
//                 className={`group relative rounded-2xl overflow-hidden bg-white dark:bg-slate-900/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 ${method.hoverColor} transition-all duration-300`}
//               >
//                 {/* Gradient Background */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />

//                 <div className="relative p-6 lg:p-8">
//                   {/* Icon */}
//                   <motion.div
//                     whileHover={{ rotate: 5, scale: 1.1 }}
//                     className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} mb-6 text-white shadow-2xl`}
//                   >
//                     {method.icon}
//                   </motion.div>

//                   {/* Content */}
//                   <h4 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
//                     {method.title}
//                   </h4>

//                   <p className="text-gray-600 dark:text-slate-400 text-sm lg:text-base leading-relaxed mb-6">
//                     {method.description}
//                   </p>

//                   {/* Link */}
//                   <Link
//                     href={method.link}
//                     target="_blank"
//                     className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm group/link"
//                   >
//                     {method.linkText}
//                     <FiExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
//                   </Link>
//                 </div>

//                 {/* Hover Effect */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 dark:from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Quick Actions */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.8 }}
//           className="mb-20"
//         >
//           <div className="text-center mb-12">
//             <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-2">Quick Actions</p>
//             <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
//               <span className="bg-gradient-to-r from-indigo-600 dark:from-indigo-400 to-purple-600 dark:to-purple-400 bg-clip-text text-transparent">
//                 Start the Conversation
//               </span>
//             </h3>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
//             {quickActions.map((action, i) => (
//               <motion.button
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.9 + i * 0.1 }}
//                 whileHover={{ y: -5, scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="group p-8 rounded-2xl bg-white dark:bg-slate-900/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 hover:border-indigo-400/30 transition-all duration-300 text-left"
//               >
//                 <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${action.color} mb-6 text-white shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
//                   {action.icon}
//                 </div>

//                 <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
//                   {action.title}
//                 </h4>

//                 <p className="text-gray-600 dark:text-slate-400 mb-6">
//                   {action.description}
//                 </p>

//                 <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 font-medium">
//                   {action.action}
//                   <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </div>
//               </motion.button>
//             ))}
//           </div>
//         </motion.div>

//         {/* Location & Availability */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 1.0 }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16"
//         >
//           {[
//             {
//               icon: <FiMapPin className="w-6 h-6" />,
//               title: 'Location',
//               value: 'Faridabad, Haryana, IN',
//               color: 'from-red-500 to-pink-600'
//             },
//             {
//               icon: <FiSend className="w-6 h-6" />,
//               title: 'Response Time',
//               value: 'Within 24 hours',
//               color: 'from-blue-500 to-cyan-600'
//             },
//             {
//               icon: <FiUser className="w-6 h-6" />,
//               title: 'Availability',
//               value: 'Open for projects',
//               color: 'from-green-500 to-emerald-600'
//             }
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: 1.1 + i * 0.1 }}
//               whileHover={{ y: -3 }}
//               className="text-center p-6 lg:p-8 rounded-xl border border-gray-200 dark:border-white/10 backdrop-blur-xl bg-white dark:bg-slate-900/80 group hover:border-indigo-400/30 transition-all duration-300"
//             >
//               <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
//                 {item.icon}
//               </div>
//               <h4 className="text-sm font-medium text-gray-500 dark:text-slate-400 mb-2">{item.title}</h4>
//               <p className="text-lg font-semibold text-gray-900 dark:text-white">{item.value}</p>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 1.2 }}
//           className="text-center"
//         >
//           <div className="max-w-3xl mx-auto mb-8">
//             <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//               Ready to start your project?
//             </h3>
//             <p className="text-slate-300 dark:text-slate-300 text-gray-600 dark:text-slate-300 text-lg">
//               Whether it's a web application, mobile app, or innovative solution, I'm here to help bring your vision to life.
//             </p>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="group px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 flex items-center justify-center gap-3"
//             >
//               <FiSend className="w-5 h-5" />
//               Start a Conversation
//               <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </motion.button>

//             <Link
//               href="/projects"
//               className="group px-8 py-4 rounded-full border-2 border-gray-300 dark:border-white/30 text-gray-700 dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-white/10 hover:border-gray-400 dark:hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2"
//             >
//               View My Work
//               <FiExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }





import FooterSite from '../../components/FooterSite'

export default function ContactPage() {
  return (
    <>
      <main className="theme-body min-h-screen pt-32 md:pt-40">
        <section className="max-w-6xl mx-auto px-6 md:px-8 pb-24 md:pb-32">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <p className="text-xs tracking-[0.35em] uppercase theme-text-muted">
                Contact
              </p>
            </div>

            <div className="md:col-span-8">
              <h1 className="hero-title text-4xl md:text-7xl font-semibold leading-[0.95] max-w-5xl theme-text-primary">
                Let’s build something sharp, modern, and memorable.
              </h1>

              <p className="mt-8 text-base md:text-lg leading-8 max-w-3xl theme-text-secondary">
                I’m open to freelance work, contract opportunities, and full-time
                roles. Reach out for portfolio websites, landing pages, frontend
                interfaces, or digital product experiences.
              </p>

              <div className="mt-14 grid md:grid-cols-2 gap-8">
                <div className="theme-card rounded-[28px] p-8">
                  <p className="text-xs uppercase tracking-[0.28em] theme-text-muted mb-4">
                    Email
                  </p>
                  <a
                    href="mailto:laraibsiddiqui10ki@gmail.com"
                    className="text-lg theme-text-primary"
                  >
                    laraibsiddiqui10ki@gmail.com
                  </a>
                </div>

                <div className="theme-card rounded-[28px] p-8">
                  <p className="text-xs uppercase tracking-[0.28em] theme-text-muted mb-4">
                    Location
                  </p>
                  <p className="text-lg theme-text-primary">Patna, Bihar, India</p>
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