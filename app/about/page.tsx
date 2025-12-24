// app/about/page.tsx
// import Image from 'next/image'
// import Link from 'next/link'

// export const metadata = {
//   title: 'About — Laraib Siddiqui',
//   description: 'About page for Laraib — Full-Stack Developer & Designer',
// }

// export default function About() {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-[#071226] via-[#081025] to-[#071226] text-slate-100 py-12 px-6 lg:px-24 dark:from-[#071226] dark:via-[#081025] dark:to-[#071226] dark:text-slate-100 light:bg-white light:text-gray-900">
//       {/* Container */}
//       <section className="max-w-7xl mx-auto">
//         {/* Hero / Intro */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
//           {/* Left card: Photo + quick info */}
//           <aside className="lg:sticky top-24">
//             <div className="rounded-2xl overflow-hidden border border-white/6 bg-white/3 backdrop-blur-md shadow-2xl p-4 dark:border-white/6 dark:bg-white/3 light:border-gray-200 light:bg-gray-50">
//               <div className="relative w-full h-64 rounded-xl overflow-hidden">
//                 {/* Replace with your image at /public/me.jpg */}
//                 <Image
//                   src="/me.jpg"
//                   alt="Laraib Siddiqui"
//                   fill
//                   style={{ objectFit: 'cover' }}
//                   className="object-top"
//                   placeholder="empty"
//                 />
//               </div>

//               <div className="mt-4 text-center">
//                 <h2 className="text-2xl font-extrabold text-white dark:text-white light:text-gray-900">Laraib Siddiqui</h2>
//                 <p className="text-sm text-slate-300 dark:text-slate-300 light:text-gray-600 mt-1">Full-Stack Developer & Designer</p>
//               </div>

//               <div className="mt-6 grid grid-cols-3 gap-3 text-center">
//                 <div>
//                   <div className="text-2xl font-bold text-white dark:text-white light:text-gray-900">24</div>
//                   <div className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-500">Years</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-white dark:text-white light:text-gray-900">50+</div>
//                   <div className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-500">Projects</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-white dark:text-white light:text-gray-900">+2</div>
//                   <div className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-500">Years Exp</div>
//                 </div>
//               </div>

//               <div className="mt-6 flex gap-3 justify-center">
//                 <Link href="/resume.pdf" className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-black font-medium shadow hover:shadow-lg transition">Resume</Link>
//                 <Link href="/contact" className="px-4 py-2 rounded-full border border-white/10 text-white dark:text-white light:text-gray-700 light:border-gray-300 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-100 transition">Contact</Link>
//               </div>

//               <div className="mt-6 text-center text-xs text-slate-300 dark:text-slate-300 light:text-gray-500">
//                 <span className="inline-block px-2 py-1 rounded-full bg-white/3 border border-white/6 dark:bg-white/3 dark:border-white/6 light:bg-gray-100 light:border-gray-200">Aurangabad, Bihar</span>
//               </div>
//             </div>

//             {/* Certificates quick links */}
//             <div className="mt-6 grid grid-cols-1 gap-3">
//               <a href="/certs/bca_certificate.pdf" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/3 border border-white/6 flex items-center gap-3 hover:scale-[1.01] transition dark:bg-white/3 dark:border-white/6 light:bg-gray-50 light:border-gray-200">
//                 <div className="w-10 h-10 rounded-md bg-purple-600/80 flex items-center justify-center font-semibold text-white">BCA</div>
//                 <div>
//                   <div className="font-medium text-white dark:text-white light:text-gray-900">BCA Certificate</div>
//                   <div className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-500">2019–2022 — First Class</div>
//                 </div>
//               </a>

//               <a href="/certs/mca_certificate.pdf" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/3 border border-white/6 flex items-center gap-3 hover:scale-[1.01] transition dark:bg-white/3 dark:border-white/6 light:bg-gray-50 light:border-gray-200">
//                 <div className="w-10 h-10 rounded-md bg-cyan-600/80 flex items-center justify-center font-semibold text-white">MCA</div>
//                 <div>
//                   <div className="font-medium text-white dark:text-white light:text-gray-900">MCA Certificate</div>
//                   <div className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-500">2023–2025 — First Class</div>
//                 </div>
//               </a>
//             </div>
//           </aside>

//           {/* Middle & Right: Main content */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Head intro */}
//             <header className="rounded-2xl p-6 bg-gradient-to-r from-white/3 to-white/2 border border-white/6 shadow-lg dark:bg-gradient-to-r dark:from-white/3 dark:to-white/2 dark:border-white/6 light:bg-gray-50 light:border-gray-200">
//               <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-white dark:text-white light:text-gray-900">
//                 Hi, I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">Laraib Siddiqui</span>
//               </h1>
//               <p className="mt-3 text-lg text-slate-200 dark:text-slate-200 light:text-gray-700 max-w-3xl">
//                 Full-Stack Developer & Designer — crafting beautiful, functional and user-centered digital experiences. I build web apps, interfaces and APIs with performance, accessibility and polish.
//               </p>

//               <div className="mt-4 flex flex-wrap gap-2">
//                 <span className="text-xs px-3 py-1 rounded-full bg-white/4 border border-white/6 text-white dark:text-white light:text-gray-700 light:bg-gray-100 light:border-gray-200">React</span>
//                 <span className="text-xs px-3 py-1 rounded-full bg-white/4 border border-white/6 text-white dark:text-white light:text-gray-700 light:bg-gray-100 light:border-gray-200">Next.js</span>
//                 <span className="text-xs px-3 py-1 rounded-full bg-white/4 border border-white/6 text-white dark:text-white light:text-gray-700 light:bg-gray-100 light:border-gray-200">Tailwind</span>
//                 <span className="text-xs px-3 py-1 rounded-full bg-white/4 border border-white/6 text-white dark:text-white light:text-gray-700 light:bg-gray-100 light:border-gray-200">Node</span>
//                 <span className="text-xs px-3 py-1 rounded-full bg-white/4 border border-white/6 text-white dark:text-white light:text-gray-700 light:bg-gray-100 light:border-gray-200">MongoDB</span>
//               </div>
//             </header>

//             {/* Timeline: School -> College -> MCA */}
//             <section className="rounded-2xl p-6 bg-white/4 border border-white/6 dark:bg-white/4 dark:border-white/6 light:bg-gray-50 light:border-gray-200">
//               <h2 className="text-2xl font-semibold text-white dark:text-white light:text-gray-900">Education Timeline</h2>
//               <div className="mt-6 space-y-6">
//                 <div className="flex gap-4">
//                   <div className="w-2.5">
//                     <div className="h-full w-1 bg-gradient-to-b from-purple-500 to-cyan-400 rounded" />
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <h3 className="font-bold text-white dark:text-white light:text-gray-900">High School — Aurangabad</h3>
//                         <p className="text-sm text-slate-300 dark:text-slate-300 light:text-gray-600">Completed high schooling in Aurangabad, Bihar</p>
//                       </div>
//                       <div className="text-xs text-slate-400 dark:text-slate-400 light:text-gray-400">—</div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex gap-4">
//                   <div className="w-2.5">
//                     <div className="h-full w-1 bg-gradient-to-b from-purple-500 to-cyan-400 rounded" />
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <h3 className="font-bold text-white dark:text-white light:text-gray-900">BCA — (2019–2022)</h3>
//                         <p className="text-sm text-slate-300 dark:text-slate-300 light:text-gray-600">Bachelor of Computer Applications — First Class. Final project: <em>V-Mart Online Shopping Mall</em> (Role: Frontend)</p>
//                       </div>
//                       <div className="text-xs text-slate-400 dark:text-slate-400 light:text-gray-400">BCA</div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex gap-4">
//                   <div className="w-2.5">
//                     <div className="h-full w-1 bg-gradient-to-b from-purple-500 to-cyan-400 rounded" />
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <h3 className="font-bold text-white dark:text-white light:text-gray-900">MCA — (2023–2025)</h3>
//                         <p className="text-sm text-slate-300 dark:text-slate-300 light:text-gray-600">Master of Computer Applications — First Class. Final project: <em>Asset Tracking System</em> (Role: Full-Stack Developer)</p>
//                       </div>
//                       <div className="text-xs text-slate-400 dark:text-slate-400 light:text-gray-400">MCA</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>

//             {/* Certificates & Courses */}
//             <section className="rounded-2xl p-6 bg-white/4 border border-white/6 dark:bg-white/4 dark:border-white/6 light:bg-gray-50 light:border-gray-200">
//               <div className="flex items-center justify-between">
//                 <h2 className="text-2xl font-semibold text-white dark:text-white light:text-gray-900">Certificates & Courses</h2>
//                 <div className="text-sm text-slate-300 dark:text-slate-300 light:text-gray-600">Click to open PDFs</div>
//               </div>

//               <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <a href="/certs/bca_certificate.pdf" target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-white/5 border border-white/6 hover:scale-[1.01] transition transform dark:bg-white/5 dark:border-white/6 light:bg-gray-100 light:border-gray-200">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h4 className="font-semibold text-white dark:text-white light:text-gray-900">BCA Certificate</h4>
//                       <p className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-600 mt-1">BCA — First Class</p>
//                     </div>
//                     <div className="text-xs text-slate-400 dark:text-slate-400 light:text-gray-400">PDF</div>
//                   </div>
//                 </a>

//                 <a href="/certs/mca_certificate.pdf" target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-white/5 border border-white/6 hover:scale-[1.01] transition transform dark:bg-white/5 dark:border-white/6 light:bg-gray-100 light:border-gray-200">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h4 className="font-semibold text-white dark:text-white light:text-gray-900">MCA Certificate</h4>
//                       <p className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-600 mt-1">MCA — First Class</p>
//                     </div>
//                     <div className="text-xs text-slate-400 dark:text-slate-400 light:text-gray-400">PDF</div>
//                   </div>
//                 </a>

//                 <a href="/certs/project_certificate.pdf" target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-white/5 border border-white/6 hover:scale-[1.01] transition transform dark:bg-white/5 dark:border-white/6 light:bg-gray-100 light:border-gray-200">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h4 className="font-semibold text-white dark:text-white light:text-gray-900">Project Certificate</h4>
//                       <p className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-600 mt-1">V-Mart / Asset Tracking</p>
//                     </div>
//                     <div className="text-xs text-slate-400 dark:text-slate-400 light:text-gray-400">PDF</div>
//                   </div>
//                 </a>
//               </div>

//               <p className="mt-3 text-xs text-slate-300 dark:text-slate-300 light:text-gray-500">
//                 Tip: Drop your certificate PDFs in <code className="bg-white/5 px-1 rounded dark:bg-white/5 light:bg-gray-100">/public/certs/</code> (filenames used above). I can add more cards if you upload more files.
//               </p>
//             </section>

//             {/* Projects & Fun Moments */}
//             <section className="rounded-2xl p-6 bg-gradient-to-r from-white/4 to-white/3 border border-white/6 dark:bg-gradient-to-r dark:from-white/4 dark:to-white/3 dark:border-white/6 light:bg-gray-100 light:border-gray-200">
//               <h2 className="text-2xl font-semibold text-white dark:text-white light:text-gray-900">Projects & Fun Moments</h2>
//               <p className="text-sm text-slate-300 dark:text-slate-300 light:text-gray-600 mt-2">A few highlights from team projects, learning moments and celebrations.</p>

//               <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <div className="rounded-xl overflow-hidden border border-white/6 bg-white/6 p-0 dark:border-white/6 dark:bg-white/6 light:border-gray-200 light:bg-gray-50">
//                   <div className="relative h-40">
//                     <Image src="/projects/project1.jpg" alt="V-Mart" fill style={{ objectFit: 'cover' }} />
//                   </div>
//                   <div className="p-3">
//                     <h3 className="font-semibold text-white dark:text-white light:text-gray-900">V-Mart — Online Shopping Mall</h3>
//                     <p className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-600 mt-1">BCA final project — Role: Frontend. Team: 6</p>
//                   </div>
//                 </div>

//                 <div className="rounded-xl overflow-hidden border border-white/6 bg-white/6 dark:border-white/6 dark:bg-white/6 light:border-gray-200 light:bg-gray-50">
//                   <div className="relative h-40">
//                     <Image src="/projects/project2.jpg" alt="Asset Tracking" fill style={{ objectFit: 'cover' }} />
//                   </div>
//                   <div className="p-3">
//                     <h3 className="font-semibold text-white dark:text-white light:text-gray-900">Asset Tracking System</h3>
//                     <p className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-600 mt-1">MCA final project — Role: Full-Stack Dev</p>
//                   </div>
//                 </div>

//                 <div className="rounded-xl overflow-hidden border border-white/6 bg-white/6 dark:border-white/6 dark:bg-white/6 light:border-gray-200 light:bg-gray-50">
//                   <div className="relative h-40 flex items-center justify-center bg-gradient-to-tr from-purple-600 to-cyan-500">
//                     <span className="text-xl font-semibold text-black">Fun Moment</span>
//                   </div>
//                   <div className="p-3">
//                     <h3 className="font-semibold text-white dark:text-white light:text-gray-900">Team Celebrations</h3>
//                     <p className="text-xs text-slate-300 dark:text-slate-300 light:text-gray-600 mt-1">Snapshots of teamwork, coding nights and project demos.</p>
//                   </div>
//                 </div>
//               </div>
//             </section>

//             {/* Skills & Tools */}
//             <section className="rounded-2xl p-6 bg-white/4 border border-white/6 dark:bg-white/4 dark:border-white/6 light:bg-gray-50 light:border-gray-200">
//               <div className="flex items-center justify-between">
//                 <h2 className="text-2xl font-semibold text-white dark:text-white light:text-gray-900">Skills & Tools</h2>
//                 <div className="text-sm text-slate-300 dark:text-slate-300 light:text-gray-600">Practical & used daily</div>
//               </div>

//               <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="text-sm text-white dark:text-white light:text-gray-700">Frontend — React / Next.js</label>
//                   <div className="w-full bg-white/6 rounded-full h-3 mt-2 dark:bg-white/6 light:bg-gray-200">
//                     <div className="h-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400" style={{ width: '88%' }} />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="text-sm text-white dark:text-white light:text-gray-700">Backend — Node / Express</label>
//                   <div className="w-full bg-white/6 rounded-full h-3 mt-2 dark:bg-white/6 light:bg-gray-200">
//                     <div className="h-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400" style={{ width: '76%' }} />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="text-sm text-white dark:text-white light:text-gray-700">Databases — MongoDB / SQL</label>
//                   <div className="w-full bg-white/6 rounded-full h-3 mt-2 dark:bg-white/6 light:bg-gray-200">
//                     <div className="h-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400" style={{ width: '72%' }} />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="text-sm text-white dark:text-white light:text-gray-700">Design & Prototyping</label>
//                   <div className="w-full bg-white/6 rounded-full h-3 mt-2 dark:bg-white/6 light:bg-gray-200">
//                     <div className="h-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400" style={{ width: '64%' }} />
//                   </div>
//                 </div>
//               </div>
//             </section>

//             {/* Strengths & Improvements */}
//             <section className="rounded-2xl p-6 bg-white/5 border border-white/6 dark:bg-white/5 dark:border-white/6 light:bg-gray-50 light:border-gray-200">
//               <h2 className="text-2xl font-semibold text-white dark:text-white light:text-gray-900">Strengths & Growth</h2>
//               <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="p-4 rounded-lg bg-white/6 border border-white/6 dark:bg-white/6 dark:border-white/6 light:bg-gray-100 light:border-gray-200">
//                   <h4 className="font-semibold text-white dark:text-white light:text-gray-900">Strengths</h4>
//                   <ul className="mt-3 list-disc pl-5 text-slate-300 dark:text-slate-300 light:text-gray-600 space-y-1">
//                     <li>Positive mindset</li>
//                     <li>Problem solving — resolving difficult/“impossible” issues</li>
//                     <li>Persistence — I keep trying until it runs</li>
//                     <li>Quick learner — active on tech channels & tutorials</li>
//                   </ul>
//                 </div>

//                 <div className="p-4 rounded-lg bg-white/6 border border-white/6 dark:bg-white/6 dark:border-white/6 light:bg-gray-100 light:border-gray-200">
//                   <h4 className="font-semibold text-white dark:text-white light:text-gray-900">Areas to Improve</h4>
//                   <ul className="mt-3 list-disc pl-5 text-slate-300 dark:text-slate-300 light:text-gray-600 space-y-1">
//                     <li>Time management — building structured schedules</li>
//                     <li>Public speaking — practicing by recording tutorials</li>
//                     <li>Polish on advanced system design (working on it)</li>
//                   </ul>
//                 </div>
//               </div>
//             </section>

//             {/* Final CTA */}
//             <section className="rounded-2xl p-6 bg-gradient-to-r from-[#0b1220]/40 to-[#081025]/40 border border-white/6 flex items-center justify-between dark:bg-gradient-to-r dark:from-[#0b1220]/40 dark:to-[#081025]/40 dark:border-white/6 light:bg-gray-100 light:border-gray-200">
//               <div>
//                 <h3 className="text-xl font-bold text-white dark:text-white light:text-gray-900">Want to collaborate or see my full portfolio?</h3>
//                 <p className="text-sm text-slate-300 dark:text-slate-300 light:text-gray-600 mt-1">I’m open for freelance & full-time roles. Let’s build something great.</p>
//               </div>

//               <div className="flex gap-3">
//                 <Link href="/contact" className="px-5 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-black font-semibold hover:shadow-lg transition">Get in touch</Link>
//                 <a href="/resume.pdf" className="px-5 py-3 rounded-full border border-white/10 text-white dark:text-white light:text-gray-700 light:border-gray-300 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-200 transition">Download CV</a>
//               </div>
//             </section>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }




// 'use client'
// import { motion } from 'framer-motion'
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
//   CalendarIcon,
//   FolderIcon,
//   TrophyIcon
// } from '@heroicons/react/24/outline'

// // Metadata should be handled in layout.tsx or a parent server component

// export default function About() {
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
//     { name: "UI/UX Design", level: 80, color: "from-orange-500 to-red-500" }
//   ]

//   return (
//     <main className="relative min-h-screen overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(120,119,198,0.3),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.15),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(120,119,198,0.2),transparent_50%)]" />

//         {/* Floating particles */}
//         <div className="absolute inset-0">
//           {[...Array(25)].map((_, i) => (
//             // @ts-ignore
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
//                 scale: [1, 1.2, 1],
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
//               {/* Glow effect */}
//               <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-xl opacity-30" />
              
//               <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20">
//                 <div className="relative h-80">
//                   <Image
//                     src="/me.jpg"
//                     alt="Laraib Siddiqui"
//                     fill
//                     style={{ objectFit: 'cover' }}
//                     className="object-top transition-transform duration-700 hover:scale-110"
//                   />
                  
//                   {/* Overlay gradient */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
//                   {/* Status badge */}
//                   <div className="absolute top-6 right-6 px-3 py-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/20">
//                     <div className="flex items-center gap-2 text-white text-sm">
//                       <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//                       Available for Work
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-8">
//                   <div className="text-center">
//                     <motion.h2 
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.3 }}
//                       className="text-2xl font-bold text-white mb-2"
//                     >
//                       Laraib Siddiqui
//                     </motion.h2>
//                     <p className="text-cyan-400 font-medium mb-6">Full-Stack Developer & Designer</p>
                    
//                     {/* Stats */}
//                     <div className="grid grid-cols-3 gap-4 mb-8">
//                       <div className="text-center">
//                         <div className="text-2xl font-bold text-white">24</div>
//                         <div className="text-xs text-slate-400">Years</div>
//                       </div>
//                       <div className="text-center">
//                         <div className="text-2xl font-bold text-white">50+</div>
//                         <div className="text-xs text-slate-400">Projects</div>
//                       </div>
//                       <div className="text-center">
//                         <div className="text-2xl font-bold text-white">5+</div>
//                         <div className="text-xs text-slate-400">Years Exp</div>
//                       </div>
//                     </div>

//                     {/* Action buttons */}
//                     <div className="flex gap-3 mb-6">
//                       <Link 
//                         href="/resume.pdf" 
//                         className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
//                       >
//                         <ArrowDownTrayIcon className="w-4 h-4" />
//                         Resume
//                       </Link>
//                       <Link 
//                         href="/contact" 
//                         className="flex-1 px-4 py-3 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2"
//                       >
//                         <ChatBubbleLeftRightIcon className="w-4 h-4" />
//                         Contact
//                       </Link>
//                     </div>

//                     {/* Location */}
//                     <div className="flex items-center justify-center gap-2 text-slate-300 text-sm">
//                       <MapPinIcon className="w-4 h-4" />
//                       Aurangabad, Bihar
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Certificates */}
//             <motion.div 
//               variants={itemVariants}
//               className="mt-8 space-y-4"
//             >
//               <a 
//                 href="/certs/bca_certificate.pdf" 
//                 target="_blank" 
//                 rel="noreferrer" 
//                 className="group p-4 rounded-xl bg-slate-800/60 backdrop-blur-sm border border-white/20 flex items-center gap-4 hover:bg-slate-800/80 hover:border-cyan-400/50 hover:scale-105 transition-all duration-300"
//               >
//                 <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg">
//                   BCA
//                 </div>
//                 <div className="flex-1">
//                   <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors">BCA Certificate</div>
//                   <div className="text-xs text-slate-400">2019–2022 — First Class</div>
//                 </div>
//               </a>

//               <a 
//                 href="/certs/mca_certificate.pdf" 
//                 target="_blank" 
//                 rel="noreferrer" 
//                 className="group p-4 rounded-xl bg-slate-800/60 backdrop-blur-sm border border-white/20 flex items-center gap-4 hover:bg-slate-800/80 hover:border-cyan-400/50 hover:scale-105 transition-all duration-300"
//               >
//                 <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center font-bold text-white shadow-lg">
//                   MCA
//                 </div>
//                 <div className="flex-1">
//                   <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors">MCA Certificate</div>
//                   <div className="text-xs text-slate-400">2023–2025 — First Class</div>
//                 </div>
//               </a>
//             </motion.div>
//           </motion.aside>

//           {/* Right: Main Content */}
//           <div className="lg:col-span-2 space-y-12">
//             {/* Hero Introduction */}
//             <motion.header 
//               variants={itemVariants}
//               className="relative p-8 rounded-3xl bg-gradient-to-r from-slate-800/60 to-slate-800/40 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden"
//             >
//               <div className="absolute -inset-px bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl opacity-20 blur-sm" />
              
//               <div className="relative">
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.6, delay: 0.2 }}
//                   className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-300/30 text-sm font-medium mb-6"
//                 >
//                   <RocketLaunchIcon className="w-4 h-4 text-cyan-400" />
//                   <span className="text-cyan-400">Full-Stack Developer & Designer</span>
//                 </motion.div>

//                 <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-6">
//                   Hi, I'm{' '}
//                   <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                     Laraib Siddiqui
//                   </span>
//                 </h1>
                
//                 <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl">
//                   Crafting <span className="text-cyan-400 font-semibold">beautiful</span>, 
//                   <span className="text-purple-400 font-semibold"> functional</span> and 
//                   <span className="text-pink-400 font-semibold"> user-centered</span> digital experiences. 
//                   I build web applications, interfaces and APIs with performance, accessibility and polish.
//                 </p>

//                 <div className="flex flex-wrap gap-3">
//                   {['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'].map((tech, index) => (
//                     <motion.span
//                       key={tech}
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ delay: 0.5 + index * 0.1 }}
//                       className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-white hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300"
//                     >
//                       {tech}
//                     </motion.span>
//                   ))}
//                 </div>
//               </div>
//             </motion.header>

//             {/* Education Timeline */}
//             <motion.section 
//               variants={itemVariants}
//               className="p-8 rounded-3xl bg-slate-800/40 backdrop-blur-xl border border-white/20"
//             >
//               <div className="flex items-center gap-3 mb-8">
//                 <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
//                   <AcademicCapIcon className="w-6 h-6 text-white" />
//                 </div>
//                 <h2 className="text-3xl font-bold text-white">Education Timeline</h2>
//               </div>
              
//               <div className="space-y-8">
//                 {[
//                   {
//                     title: "High School — Aurangabad",
//                     description: "Completed high schooling in Aurangabad, Bihar",
//                     period: "—",
//                     icon: "🎓"
//                   },
//                   {
//                     title: "BCA — (2019–2022)",
//                     description: "Bachelor of Computer Applications — First Class. Final project: V-Mart Online Shopping Mall (Role: Frontend)",
//                     period: "BCA",
//                     icon: "💻"
//                   },
//                   {
//                     title: "MCA — (2023–2025)",
//                     description: "Master of Computer Applications — First Class. Final project: Asset Tracking System (Role: Full-Stack Developer)",
//                     period: "MCA",
//                     icon: "🚀"
//                   }
//                 ].map((item, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, x: -30 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.2 }}
//                     className="flex gap-6 group"
//                   >
//                     <div className="flex flex-col items-center">
//                       <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
//                         {item.icon}
//                       </div>
//                       {index < 2 && <div className="w-0.5 h-16 bg-gradient-to-b from-cyan-500 to-purple-600 mt-4" />}
//                     </div>
//                     <div className="flex-1 pb-8">
//                       <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
//                       <p className="text-slate-300 leading-relaxed">{item.description}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.section>

//             {/* Skills Progress */}
//             <motion.section 
//               variants={itemVariants}
//               className="p-8 rounded-3xl bg-slate-800/40 backdrop-blur-xl border border-white/20"
//             >
//               <div className="flex items-center gap-3 mb-8">
//                 <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
//                   <ChartBarIcon className="w-6 h-6 text-white" />
//                 </div>
//                 <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {skills.map((skill, index) => (
//                   <motion.div
//                     key={skill.name}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     className="space-y-3"
//                   >
//                     <div className="flex justify-between items-center">
//                       <span className="text-white font-semibold">{skill.name}</span>
//                       <span className="text-slate-400 text-sm">{skill.level}%</span>
//                     </div>
//                     <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
//                       <motion.div
//                         initial={{ width: 0 }}
//                         whileInView={{ width: `${skill.level}%` }}
//                         transition={{ duration: 1.5, delay: index * 0.2 }}
//                         className={`h-full bg-gradient-to-r ${skill.color} rounded-full shadow-lg`}
//                       />
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.section>

//             {/* Projects Showcase */}
//             <motion.section 
//               variants={itemVariants}
//               className="p-8 rounded-3xl bg-gradient-to-r from-slate-800/60 to-slate-800/40 backdrop-blur-xl border border-white/20"
//             >
//               <div className="flex items-center gap-3 mb-8">
//                 <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
//                   <FolderIcon className="w-6 h-6 text-white" />
//                 </div>
//                 <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {[
//                   {
//                     title: "V-Mart Online Shopping Mall",
//                     role: "Frontend Developer",
//                     team: "Team of 6",
//                     image: "/projects/project1.jpg",
//                     gradient: "from-blue-500 to-purple-600"
//                   },
//                   {
//                     title: "Asset Tracking System",
//                     role: "Full-Stack Developer",
//                     team: "Solo Project",
//                     image: "/projects/project2.jpg",
//                     gradient: "from-green-500 to-cyan-500"
//                   },
//                   {
//                     title: "Portfolio & More",
//                     role: "UI/UX Designer",
//                     team: "Personal Projects",
//                     gradient: "from-pink-500 to-orange-500"
//                   }
//                 ].map((project, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{ y: -10, scale: 1.02 }}
//                     className="group rounded-2xl overflow-hidden bg-slate-800/60 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
//                   >
//                     <div className={`relative h-48 ${project.image ? '' : `bg-gradient-to-br ${project.gradient} flex items-center justify-center`}`}>
//                       {project.image ? (
//                         <Image src={project.image} alt={project.title} fill style={{ objectFit: 'cover' }} />
//                       ) : (
//                         <div className="text-4xl">🎨</div>
//                       )}
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
//                     </div>
//                     <div className="p-6">
//                       <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
//                         {project.title}
//                       </h3>
//                       <p className="text-slate-300 text-sm mb-1">{project.role}</p>
//                       <p className="text-slate-400 text-xs">{project.team}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.section>

//             {/* Strengths & Growth */}
//             <motion.section 
//               variants={itemVariants}
//               className="grid grid-cols-1 md:grid-cols-2 gap-8"
//             >
//               <div className="p-8 rounded-3xl bg-slate-800/40 backdrop-blur-xl border border-white/20">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
//                     <StarIcon className="w-6 h-6 text-white" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-white">Strengths</h3>
//                 </div>
//                 <ul className="space-y-3">
//                   {[
//                     "Positive mindset & problem-solving approach",
//                     "Persistence until solutions are found",
//                     "Quick learner with tech enthusiasm",
//                     "Strong analytical thinking"
//                   ].map((strength, index) => (
//                     <motion.li
//                       key={index}
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       className="flex items-center gap-3 text-slate-300"
//                     >
//                       <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full" />
//                       {strength}
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="p-8 rounded-3xl bg-slate-800/40 backdrop-blur-xl border border-white/20">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
//                     <LightBulbIcon className="w-6 h-6 text-white" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-white">Growth Areas</h3>
//                 </div>
//                 <ul className="space-y-3">
//                   {[
//                     "Time management & structured scheduling",
//                     "Public speaking & presentation skills",
//                     "Advanced system design patterns",
//                     "Leadership & team management"
//                   ].map((area, index) => (
//                     <motion.li
//                       key={index}
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       className="flex items-center gap-3 text-slate-300"
//                     >
//                       <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full" />
//                       {area}
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>
//             </motion.section>

//             {/* Final CTA */}
//             <motion.section 
//               variants={itemVariants}
//               className="relative p-8 rounded-3xl bg-gradient-to-r from-slate-800/80 to-slate-900/60 backdrop-blur-xl border border-white/20 overflow-hidden"
//             >
//               <div className="absolute -inset-px bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl opacity-30 blur-lg" />
              
//               <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
//                 <div className="text-center md:text-left">
//                   <h3 className="text-3xl font-bold text-white mb-2">
//                     Ready to Collaborate?
//                   </h3>
//                   <p className="text-slate-300 leading-relaxed">
//                     I'm open for freelance projects & full-time opportunities. 
//                     Let's build something amazing together.
//                   </p>
//                 </div>

//                 <div className="flex flex-col sm:flex-row gap-4 shrink-0">
//                   <Link 
//                     href="/contact" 
//                     className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 flex items-center gap-2"
//                   >
//                     <HeartIcon className="w-5 h-5" />
//                     Get in Touch
//                   </Link>
//                   <a 
//                     href="/resume.pdf" 
//                     className="px-8 py-4 rounded-xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center gap-2"
//                   >
//                     <DocumentTextIcon className="w-5 h-5" />
//                     Download CV
//                   </a>
//                 </div>
//               </div>
//             </motion.section>
//           </div>
//         </motion.div>
//       </div>
//     </main>
//   )
// }





'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  AcademicCapIcon, 
  CodeBracketIcon, 
  DocumentTextIcon,
  StarIcon,
  ChartBarIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  HeartIcon,
  ArrowDownTrayIcon,
  ChatBubbleLeftRightIcon,
  MapPinIcon,
  CalendarIcon,
  FolderIcon,
  TrophyIcon,
  BeakerIcon,
  CloudIcon,
  CpuChipIcon,
  BoltIcon,
  FireIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export default function About() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  const skills = [
    { name: "Frontend Development", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "Backend Development", level: 88, color: "from-green-500 to-emerald-500" },
    { name: "Database Management", level: 85, color: "from-purple-500 to-pink-500" },
    { name: "UI/UX Design", level: 80, color: "from-orange-500 to-red-500" },
    { name: "Problem Solving", level: 98, color: "from-red-500 to-pink-500" },
    { name: "Error Debugging", level: 99, color: "from-cyan-500 to-blue-500" }
  ]

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950">
      {/* Professional Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />

        {/* Code symbols */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-slate-700/10 font-mono text-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              {mounted ? ['</>','{}','[]','()','fn()','const','let','=>','&&','||'][Math.floor(Math.random() * 10)] : '{}'}
            </motion.div>
          ))}
        </div>

        {/* Subtle glow */}
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
        >
          {/* Left: Profile Card */}
          <motion.aside 
            variants={itemVariants}
            className="lg:sticky top-24"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-500/10 rounded-2xl blur-2xl" />
              
              <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl">
                <div className="relative h-80">
                  <Image
                    src="/me.jpg"
                    alt="Laraib Siddiqui"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="object-top grayscale-[20%]"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  
                  <div className="absolute top-6 right-6 px-4 py-2 bg-slate-900/80 backdrop-blur-sm rounded-lg border border-slate-700/50">
                    <div className="flex items-center gap-2 text-white text-sm font-mono">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                      Available
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-2">Laraib Siddiqui</h2>
                    <p className="text-emerald-400 font-mono text-sm mb-6">Full-Stack Developer</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="text-center p-3 rounded-lg bg-slate-800/30 border border-slate-700/30">
                        <div className="text-2xl font-bold text-white font-mono">24</div>
                        <div className="text-xs text-slate-400">Years</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-slate-800/30 border border-slate-700/30">
                        <div className="text-2xl font-bold text-white font-mono">50+</div>
                        <div className="text-xs text-slate-400">Projects</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-slate-800/30 border border-slate-700/30">
                        <div className="text-2xl font-bold text-white font-mono">2+</div>
                        <div className="text-xs text-slate-400">Years</div>
                      </div>
                    </div>

                    <div className="flex gap-3 mb-6">
                      <Link 
                        href="/resume.pdf" 
                        className="flex-1 px-4 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <ArrowDownTrayIcon className="w-4 h-4" />
                        Resume
                      </Link>
                      <Link 
                        href="/contact" 
                        className="flex-1 px-4 py-3 rounded-lg border border-slate-700 text-white font-bold hover:bg-slate-800/50 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <ChatBubbleLeftRightIcon className="w-4 h-4" />
                        Contact
                      </Link>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-slate-300 text-sm font-mono">
                      <MapPinIcon className="w-4 h-4" />
                      Aurangabad, Bihar
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificates */}
            <motion.div 
              variants={itemVariants}
              className="mt-8 space-y-4"
            >
              <a 
                href="/certs/bca_certificate.pdf" 
                target="_blank" 
                rel="noreferrer" 
                className="group p-4 rounded-lg bg-slate-800/60 border border-slate-700/50 flex items-center gap-4 hover:bg-slate-800 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-white">
                  BCA
                </div>
                <div className="flex-1">
                  <div className="font-bold text-white">BCA Certificate</div>
                  <div className="text-xs text-slate-400 font-mono">2019–2022 — First Class</div>
                </div>
              </a>

              <a 
                href="/certs/mca_certificate.pdf" 
                target="_blank" 
                rel="noreferrer" 
                className="group p-4 rounded-lg bg-slate-800/60 border border-slate-700/50 flex items-center gap-4 hover:bg-slate-800 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-white">
                  MCA
                </div>
                <div className="flex-1">
                  <div className="font-bold text-white">MCA Certificate</div>
                  <div className="text-xs text-slate-400 font-mono">2023–2025 — First Class</div>
                </div>
              </a>
            </motion.div>
          </motion.aside>

          {/* Right: Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Hero Introduction */}
            <motion.header 
              variants={itemVariants}
              className="relative p-8 rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 shadow-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm font-bold font-mono mb-6">
                <CodeBracketIcon className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Full-Stack Developer</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                Hi, I'm <span className="text-emerald-400">Laraib Siddiqui</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                A passionate programmer who finds <span className="text-emerald-400 font-bold">peace in solving errors</span> and 
                <span className="text-emerald-400 font-bold"> joy in debugging code</span>. I don't just write code—I craft solutions, 
                fix problems, and build systems that work flawlessly.
              </p>

              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'].map((tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm text-white font-mono hover:border-emerald-500 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.header>

            {/* My Philosophy - Image 1 */}
            <motion.section 
              variants={itemVariants}
              className="p-8 rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-emerald-600">
                  <CodeBracketIcon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">My Philosophy</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-80 rounded-xl overflow-hidden border border-slate-700">
                  <Image
                    src="/images/codescreen.jpg"
                    alt="Coding is my passion"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-emerald-400 font-mono text-sm mb-2">// My Truth</div>
                    <p className="text-white font-bold text-lg">Programming is not just my profession—it's my identity</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
                    <div className="flex items-center gap-3 mb-3">
                      <FireIcon className="w-6 h-6 text-emerald-400" />
                      <h3 className="text-xl font-bold text-white">The Debug Mindset</h3>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      While others fear errors, I <span className="text-emerald-400 font-bold">embrace them</span>. 
                      Every bug is a puzzle, every error is an opportunity to learn. 
                      Fixing broken code gives me more satisfaction than writing new code.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
                    <div className="flex items-center gap-3 mb-3">
                      <BoltIcon className="w-6 h-6 text-emerald-400" />
                      <h3 className="text-xl font-bold text-white">Building My World</h3>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      I want to create a world through programming where <span className="text-emerald-400 font-bold">everything works my way</span>—
                      systems designed perfectly, code that's elegant, and solutions that are brilliant.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Coffee & Creativity - Image 2 */}
            <motion.section 
              variants={itemVariants}
              className="p-8 rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-emerald-600">
                  <BeakerIcon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Coffee & Code</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
                    <div className="text-4xl mb-4">☕</div>
                    <h3 className="text-xl font-bold text-white mb-3">My Creative Fuel</h3>
                    <p className="text-slate-300 leading-relaxed mb-4">
                      When I'm not actively coding, you'll find me at a coffee shop—not for leisure, 
                      but for <span className="text-emerald-400 font-bold">ideation</span>. 
                      Every sip of coffee brings a new idea, a better approach, a unique solution.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded bg-emerald-600/20 text-emerald-400 text-sm font-mono">Think</span>
                      <span className="px-3 py-1 rounded bg-emerald-600/20 text-emerald-400 text-sm font-mono">Design</span>
                      <span className="px-3 py-1 rounded bg-emerald-600/20 text-emerald-400 text-sm font-mono">Innovate</span>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
                    <h3 className="text-xl font-bold text-white mb-3">The Process</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-slate-300">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2" />
                        <span>Sit with coffee, analyze project requirements</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-300">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2" />
                        <span>Brainstorm unique features and implementations</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-300">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2" />
                        <span>Plan architecture that's both amazing and functional</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="relative h-full min-h-96 rounded-xl overflow-hidden border border-slate-700">
                  <Image
                    src="/images/coffeecoding.jpg"
                    alt="Coffee and creativity"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-emerald-400 font-mono text-sm mb-2">// Coffee Philosophy</div>
                    <p className="text-white font-bold text-lg">
                      "Great ideas don't come from comfort zones—they come from coffee shops"
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* My Workspace - Image 3 */}
            <motion.section 
              variants={itemVariants}
              className="p-8 rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-emerald-600">
                  <RocketLaunchIcon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Command Center</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-96 rounded-xl overflow-hidden border border-slate-700">
                  <Image
                    src="/images/workspace.jpg"
                    alt="My workspace"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-emerald-400 font-mono text-sm mb-2">// Dream Work Station</div>
                    <p className="text-white font-bold text-lg">Where I target the world with @iBzA</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
                    <div className="flex items-center gap-3 mb-3">
                      <CloudIcon className="w-6 h-6 text-emerald-400" />
                      <h3 className="text-xl font-bold text-white">My Mission</h3>
                    </div>
                    <p className="text-slate-300 leading-relaxed mb-4">
                      This is where I build the future. From this setup, I'm creating 
                      <span className="text-emerald-400 font-bold"> open-source solutions</span> and 
                      <span className="text-emerald-400 font-bold"> cloud-native applications</span> that will 
                      impact developers worldwide.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
                    <h3 className="text-xl font-bold text-white mb-4">What I'm Building</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30">
                        <div className="w-8 h-8 rounded bg-emerald-600 flex items-center justify-center text-white font-mono text-sm">OS</div>
                        <div>
                          <div className="text-white font-bold text-sm">FOSS Projects</div>
                          <div className="text-slate-400 text-xs">Open source for everyone</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30">
                        <div className="w-8 h-8 rounded bg-emerald-600 flex items-center justify-center text-white font-mono text-sm">☁️</div>
                        <div>
                          <div className="text-white font-bold text-sm">Cloud Solutions</div>
                          <div className="text-slate-400 text-xs">Scalable architectures</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30">
                        <div className="w-8 h-8 rounded bg-emerald-600 flex items-center justify-center text-white font-mono text-sm">🚀</div>
                        <div>
                          <div className="text-white font-bold text-sm">@iBzA Platform</div>
                          <div className="text-slate-400 text-xs">My vision, my way</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* AI & Future - Image 4 */}
            <motion.section 
              variants={itemVariants}
              className="p-8 rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-emerald-600">
                  <CpuChipIcon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">AI Era & Human Spirit</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
                    <div className="flex items-center gap-3 mb-3">
                      <SparklesIcon className="w-6 h-6 text-emerald-400" />
                      <h3 className="text-xl font-bold text-white">My Perspective on AI</h3>
                    </div>
                    <p className="text-slate-300 leading-relaxed mb-4">
                      Yes, we've entered the AI era. Yes, AI can code. But here's the truth: 
                      <span className="text-emerald-400 font-bold"> AI is not unbeatable</span>. 
                      It's just a tool—powerful, but still a tool.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                      What AI lacks is <span className="text-emerald-400 font-bold">passion</span>, 
                      <span className="text-emerald-400 font-bold"> stubbornness</span>, and 
                      <span className="text-emerald-400 font-bold"> obsession</span>. 
                      These human traits are what create truly revolutionary solutions.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl bg-emerald-600/10 border border-emerald-600/30">
                    <h3 className="text-xl font-bold text-emerald-400 mb-3">The Winning Formula</h3>
                    <div className="space-y-2 text-slate-300">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                        <span className="font-mono">Ziddd (Stubbornness) + Junoon (Passion)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                        <span className="font-mono">Human creativity {'>'} AI algorithms</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                        <span className="font-mono">Persistence beats processing power</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative h-full min-h-96 rounded-xl overflow-hidden border border-slate-700">
                  <Image
                    src="/images/aifuture.jpg"
                    alt="AI and Future"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-emerald-400 font-mono text-sm mb-2">// My Challenge</div>
                    <p className="text-white font-bold text-lg mb-3">
                      "Beating AI is easy when you have obsession and determination"
                    </p>
                    <p className="text-slate-300 text-sm">
                      It's not man vs. machine—it's passion vs. algorithm. And passion always wins.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Inspirations */}
            <motion.section 
              variants={itemVariants}
              className="p-8 rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-emerald-600">
                  <LightBulbIcon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">My Inspirations</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold text-white mb-3">Space Achievement Target</h3>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    Inspired by <span className="text-emerald-400 font-bold">Elon Musk's</span> vision—
                    thinking beyond boundaries, solving impossible problems, and aiming for the stars.
                  </p>
                  <div className="text-slate-400 text-sm italic">
                    "If you're not aiming for the impossible, you're not aiming high enough"
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
                  <div className="text-4xl mb-4">🧘</div>
                  <h3 className="text-xl font-bold text-white mb-3">Osho's Philosophy</h3>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    Following <span className="text-emerald-400 font-bold">Osho's teachings</span>—
                    living authentically, thinking independently, and creating my own path in this world.
                  </p>
                  <div className="text-slate-400 text-sm italic">
                    "Be yourself, everyone else is already taken"
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Technical Skills */}
            <motion.section 
              variants={itemVariants}
              className="p-8 rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/50"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-emerald-600">
                  <ChartBarIcon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Technical Excellence</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold">{skill.name}</span>
                      <span className="text-slate-400 text-sm font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Education Timeline */}
            <motion.section 
              variants={itemVariants}
              className="p-8 rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/50"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-emerald-600">
                  <AcademicCapIcon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Education Journey</h2>
              </div>
              
              <div className="space-y-8">
                {[
                  {
                    title: "High School — Aurangabad",
                    description: "Completed high schooling in Aurangabad, Bihar, laying the foundation for my technical journey",
                    period: "Foundation",
                    icon: "🎓"
                  },
                  {
                    title: "BCA — (2019–2022)",
                    description: "Bachelor of Computer Applications — First Class. Final project: V-Mart Online Shopping Mall (Role: Frontend Developer)",
                    period: "BCA",
                    icon: "💻"
                  },
                  {
                    title: "MCA — (2023–2025)",
                    description: "Master of Computer Applications — First Class. Final project: Asset Tracking System (Role: Full-Stack Developer)",
                    period: "MCA",
                    icon: "🚀"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex gap-6 group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-xl border-2 border-slate-700 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      {index < 2 && <div className="w-0.5 h-16 bg-slate-700 mt-4" />}
                    </div>
                    <div className="flex-1 pb-8">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{item.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Projects */}
            <motion.section 
              variants={itemVariants}
              className="p-8 rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/50"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-emerald-600">
                  <FolderIcon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "V-Mart Shopping Mall",
                    role: "Frontend Developer",
                    team: "Team of 6",
                    gradient: "from-blue-500 to-purple-600"
                  },
                  {
                    title: "Asset Tracking System",
                    role: "Full-Stack Developer",
                    team: "Solo Project",
                    gradient: "from-emerald-500 to-cyan-500"
                  },
                  {
                    title: "@iBzA Platform",
                    role: "Creator & Developer",
                    team: "Vision Project",
                    gradient: "from-pink-500 to-orange-500"
                  }
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group rounded-xl overflow-hidden bg-slate-800/60 border border-slate-700 hover:border-emerald-500 transition-all duration-300"
                  >
                    <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                      <div className="text-6xl">🎨</div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 text-sm mb-1 font-bold">{project.role}</p>
                      <p className="text-slate-400 text-xs font-mono">{project.team}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Strengths */}
            <motion.section 
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="p-8 rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-emerald-600">
                    <StarIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Core Strengths</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Positive mindset & problem-solving approach",
                    "Never give up until solution is found",
                    "Quick learner with tech enthusiasm",
                    "Strong analytical & debugging skills",
                    "Passionate about error fixing",
                    "Creating systems that work perfectly"
                  ].map((strength, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-slate-300"
                    >
                      <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                      <span className="font-medium">{strength}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-emerald-600">
                    <LightBulbIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Growth Areas</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Time management & structured scheduling",
                    "Public speaking & presentation skills",
                    "Advanced system design patterns",
                    "Leadership & team management"
                  ].map((area, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-slate-300"
                    >
                      <div className="w-2 h-2 bg-orange-400 rounded-full" />
                      <span className="font-medium">{area}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.section>

            {/* Final CTA */}
            <motion.section 
              variants={itemVariants}
              className="relative p-8 rounded-2xl bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 overflow-hidden"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl opacity-20 blur-lg" />
              
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Ready to Build Something Amazing?
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    I'm open for freelance projects, full-time opportunities, and collaborations. 
                    Let's create something extraordinary together.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                  <Link 
                    href="/contact" 
                    className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all duration-300 flex items-center gap-2"
                  >
                    <HeartIcon className="w-5 h-5" />
                    Get in Touch
                  </Link>
                  <a 
                    href="/resume.pdf" 
                    className="px-8 py-4 rounded-xl border-2 border-slate-700 text-white font-bold hover:bg-slate-800 transition-all duration-300 flex items-center gap-2"
                  >
                    <DocumentTextIcon className="w-5 h-5" />
                    Download CV
                  </a>
                </div>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </main>
  )
}