// "use client";

// import { useMemo, useState } from "react";
// import Link from "next/link";

// type Track = "vision" | "roadmap" | "opensource" | "milestones";
// type Status = "shipped" | "in-progress" | "planned" | "idea";

// type Feature = {
//   id: string;
//   title: string;
//   tagline: string;
//   status: Status;
//   eta?: string;
//   highlights: string[];
//   track: Track;
// };

// const STATUS_STYLES: Record<Status, { badge: string; dot: string; label: string }> = {
//   shipped: {
//     badge: "bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/20",
//     dot: "bg-emerald-400",
//     label: "Shipped",
//   },
//   "in-progress": {
//     badge: "bg-indigo-500/10 text-indigo-300 ring-1 ring-indigo-500/20",
//     dot: "bg-indigo-400",
//     label: "In Progress",
//   },
//   planned: {
//     badge: "bg-amber-500/10 text-amber-300 ring-1 ring-amber-500/20",
//     dot: "bg-amber-400",
//     label: "Planned",
//   },
//   idea: {
//     badge: "bg-slate-500/10 text-slate-300 ring-1 ring-slate-500/20",
//     dot: "bg-slate-400",
//     label: "Idea",
//   },
// };

// const FEATURES: Feature[] = [
//   {
//     id: "input-planet-scale",
//     title: "Input: Planet-Scale Vision",
//     tagline:
//       "SapshoTechnology ko duniya ke top level par le jana — accessibility, speed, aur taste ke sath.",
//     status: "in-progress",
//     eta: "Q1 2026",
//     highlights: [
//       "Global-first mindset: multi-region infra",
//       "Design language: bold, minimal, kinetic",
//       "Community-first: transparent public roadmap",
//     ],
//     track: "vision",
//   },
//   {
//     id: "think-bigger",
//     title: "Think Bigger Mode",
//     tagline:
//       "Wo level jaha ideas fly — Mark aur Elon wali audacity, ground reality ke mix ke sath.",
//     status: "planned",
//     eta: "Q2 2026",
//     highlights: [
//       "10x thinking workshops (public streams)",
//       "Moonshot backlog + spike sprints",
//       "Failure logs → learnings library",
//     ],
//     track: "vision",
//   },
//   {
//     id: "type-with-every-tech",
//     title: "Type With Every Tech",
//     tagline:
//       "Har ek technology ke sath pair programming feel — React, Next, Rust, Go, Python, and beyond.",
//     status: "in-progress",
//     eta: "Rolling",
//     highlights: [
//       "Interactive sandboxes (MDX + WASM)",
//       "Copy-paste production-grade snippets",
//       "AI-assisted code notes",
//     ],
//     track: "roadmap",
//   },
//   {
//     id: "perf-obsessed",
//     title: "Performance Obsessed",
//     tagline: "Lighthouse 95+, Core Web Vitals green, micro-interactions buttery.",
//     status: "planned",
//     eta: "Q4 2025",
//     highlights: [
//       "Edge rendering + CDN smart caching",
//       "Motion-safe animations (Framer Motion)",
//       "Accessible components (WAI-ARIA)",
//     ],
//     track: "roadmap",
//   },
//   {
//     id: "open-source-stack",
//     title: "Free & Open Source Stack",
//     tagline:
//       "Open-source ke through value share — templates, hooks, animations, design tokens.",
//     status: "in-progress",
//     eta: "Monthly Drops",
//     highlights: [
//       "UI kit (Tailwind + Radix) with themes",
//       "Hooks: useHotkeys, useScrollSpy, useTheme",
//       "Animations library: motion-presets",
//     ],
//     track: "opensource",
//   },
//   {
//     id: "community-drive",
//     title: "Community Drive",
//     tagline: "Issues → Ideas → PRs → Shipped. Sabko seat milti hai.",
//     status: "planned",
//     eta: "Q1 2026",
//     highlights: [
//       "Starter issues + mentorship notes",
//       "Changelog streams + townhalls",
//       "Hall of Fame contributors",
//     ],
//     track: "opensource",
//   },
//   {
//     id: "showcase-vault",
//     title: "Showcase Vault",
//     tagline: "Case studies with real metrics, wins and scars.",
//     status: "shipped",
//     highlights: [
//       "Before/After performance timelines",
//       "Infra + cost breakdown",
//       "Design decisions journal",
//     ],
//     track: "milestones",
//   },
//   {
//     id: "contact-studio",
//     title: "Contact Studio",
//     tagline: "Smart contact form: Notion CRM, email automations, calendar slots.",
//     status: "planned",
//     eta: "Dec 2025",
//     highlights: [
//       "hCaptcha + rate limit + abuse checks",
//       "Auto-reply with context & links",
//       "Light CRM in Notion",
//     ],
//     track: "milestones",
//   },
// ];

// export default function Page() {
//   const [activeTrack, setActiveTrack] = useState<Track | "all">("all");

//   const grouped = useMemo(() => {
//     const list = activeTrack === "all" ? FEATURES : FEATURES.filter((f) => f.track === activeTrack);
//     return {
//       "In Progress": list.filter((f) => f.status === "in-progress"),
//       Planned: list.filter((f) => f.status === "planned"),
//       Shipped: list.filter((f) => f.status === "shipped"),
//       Ideas: list.filter((f) => f.status === "idea"),
//     };
//   }, [activeTrack]);

//   return (
//     <main className="relative min-h-screen bg-[#070A0F] text-slate-200">
//       <DecorativeBackground />
//       <div className="pt-10 sm:pt-14" />

//       {/* HERO SECTION */}
//       <section className="mx-auto max-w-7xl px-6 pb-10">
//         <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
//           <div>
//             <Badge>Feature Vision</Badge>
//             <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
//               input by SapshoTechnology
//             </h1>
//             <p className="mt-3 max-w-2xl text-slate-400">
//               {/* SapshoTechnology ka ek dream project — duniya ke top level par kam karna,
//               har ek technology ke sath tie-up karna, aur open-source ke zariye
//               ek aisi duniya banana jaha creativity aur technology ek ho. 🚀 */}
//               The dream project of SapshoTechnology — to take it to the top level of the world,
//               tie-up with every technology, and create a world where creativity and technology are one, through open-source. 🚀
//               And theswe are the audacious plans to get there.Because dreams don't work unless you do. 😉
//               I believe in dreaming big, thinking audaciously, and building openly.
//             </p>
//             <div className="mt-6 flex flex-wrap gap-3">
//               <Pill>Open Source</Pill>
//               <Pill>Audacity</Pill>
//               <Pill>Innovation</Pill>
//               <Pill>Future-Ready</Pill>
//             </div>
//           </div>

//           <div className="flex gap-3">
//             <Link
//               href="/"
//               className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-100 hover:bg-white/10 transition"
//             >
//               ← Back Home
//             </Link>
//             <a
//               href="mailto:hello@example.com"
//               className="rounded-xl bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-cyan-500 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-fuchsia-600/20 hover:opacity-95 transition"
//             >
//               Collaborate
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* FILTERS */}
//       <section className="mx-auto max-w-7xl px-6">
//         <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur">
//           <div className="flex flex-wrap gap-2">
//             {["all", "vision", "roadmap", "opensource", "milestones"].map((t) => (
//               <TabButton
//                 key={t}
//                 label={t === "all" ? "All" : t.charAt(0).toUpperCase() + t.slice(1)}
//                 active={activeTrack === t}
//                 onClick={() => setActiveTrack(t as any)}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* COOL MARQUEE */}
//       <MarqueeStrip />

//       {/* FEATURE GRID */}
//       <section className="mx-auto max-w-7xl px-6 pb-28">
//         <div className="grid grid-cols-1 gap-12">
//           {Object.entries(grouped).map(([group, items]) =>
//             items.length ? (
//               <div key={group} className="space-y-6">
//                 <h2 className="text-xl font-semibold text-white/90">{group}</h2>
//                 <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                   {items.map((feature) => (
//                     <FeatureCard key={feature.id} feature={feature} />
//                   ))}
//                 </div>
//               </div>
//             ) : null
//           )}
//         </div>
//       </section>
//     </main>
//   );
// }

// /* --- COMPONENTS --- */

// function Badge({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur">
//       <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-400" />
//       {children}
//     </div>
//   );
// }

// function Pill({ children }: { children: React.ReactNode }) {
//   return (
//     <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
//       {children}
//     </span>
//   );
// }

// function TabButton({
//   label,
//   active,
//   onClick,
// }: {
//   label: string;
//   active: boolean;
//   onClick: () => void;
// }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`relative rounded-xl px-4 py-2 text-sm transition ${
//         active ? "text-white" : "text-slate-300 hover:text-white hover:bg-white/5"
//       }`}
//     >
//       {active && (
//         <span className="pointer-events-none absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-indigo-600/40 via-fuchsia-600/40 to-cyan-500/40 blur-sm" />
//       )}
//       {label}
//     </button>
//   );
// }

// function FeatureCard({ feature }: { feature: Feature }) {
//   const style = STATUS_STYLES[feature.status];
//   return (
//     <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-5 transition hover:border-white/20 hover:from-white/[0.12]">
//       <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-tr from-indigo-600/25 to-fuchsia-600/25 blur-2xl opacity-0 transition group-hover:opacity-100" />
//       <div className="flex items-center justify-between">
//         <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] ${style.badge}`}>
//           <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
//           {style.label}
//         </span>
//         <span className="text-[11px] text-slate-400">{feature.eta ?? "Soon™"}</span>
//       </div>
//       <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
//       <p className="mt-1 text-sm text-slate-400">{feature.tagline}</p>
//       <ul className="mt-4 space-y-2">
//         {feature.highlights.map((h, i) => (
//           <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
//             <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400/80" />
//             {h}
//           </li>
//         ))}
//       </ul>
//     </article>
//   );
// }

// function DecorativeBackground() {
//   return (
//     <div className="pointer-events-none fixed inset-0 -z-10">
//       <div className="absolute left-1/2 top-[-120px] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-600/25 via-fuchsia-500/15 to-cyan-500/25 blur-3xl" />
//       <div
//         className="absolute inset-0 opacity-[0.06]"
//         style={{
//           backgroundImage:
//             "linear-gradient(to right, rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.2) 1px, transparent 1px)",
//           backgroundSize: "48px 48px",
//         }}
//       />
//     </div>
//   );
// }

// function MarqueeStrip() {
//   const words = [
//     "Input Project by SapshoTechnology",
//     "Open Source Future 🔥",
//     "Dream. Code. Repeat.",
//     "Mark aur Elon wali Soch 🚀",
//     "Innovation x Imagination",
//     "Type with Every Tech 💡",
//     "Think Beyond Limits",
//     "Build for the Planet 🌍",
//   ];

//   return (
//     <div className="mx-auto mt-8 max-w-7xl px-6">
//       <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
//         <div className="absolute inset-0 bg-gradient-to-r from-[#070A0F] via-transparent to-[#070A0F]" />
//         <div className="animate-[marquee_20s_linear_infinite] whitespace-nowrap py-3 text-sm text-slate-300 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
//           {words.map((text, i) => (
//             <span key={i} className="mx-8 inline-block font-medium text-slate-200">
//               ✦ {text}
//             </span>
//           ))}
//           {words.map((text, i) => (
//             <span key={`dup-${i}`} className="mx-8 inline-block font-medium text-slate-200">
//               ✦ {text}
//             </span>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }








///First zone Feature Plan

// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // Zone Data Structure
// const ZONES = [
//   {
//     id: 1,
//     name: "Foundation Zone",
//     color: "from-blue-500 to-cyan-500",
//     ringColor: "border-blue-400",
//     technologies: [
//       { name: "HTML/CSS", angle: 0, icon: "🎨" },
//       { name: "JavaScript", angle: 45, icon: "⚡" },
//       { name: "Git/GitHub", angle: 90, icon: "📦" },
//       { name: "Responsive", angle: 135, icon: "📱" },
//       { name: "VS Code", angle: 180, icon: "💻" },
//       { name: "Terminal", angle: 225, icon: "🖥️" },
//       { name: "API Basics", angle: 270, icon: "🔌" },
//       { name: "Debug", angle: 315, icon: "🐛" },
//     ],
//   },
//   {
//     id: 2,
//     name: "Advanced Zone",
//     color: "from-purple-500 to-pink-500",
//     ringColor: "border-purple-400",
//     technologies: [
//       { name: "React", angle: 0, icon: "⚛️" },
//       { name: "Next.js", angle: 40, icon: "▲" },
//       { name: "TypeScript", angle: 80, icon: "📘" },
//       { name: "Tailwind", angle: 120, icon: "🎨" },
//       { name: "Node.js", angle: 160, icon: "🟢" },
//       { name: "Database", angle: 200, icon: "🗄️" },
//       { name: "REST API", angle: 240, icon: "🌐" },
//       { name: "Testing", angle: 280, icon: "🧪" },
//       { name: "CI/CD", angle: 320, icon: "🚀" },
//     ],
//   },
//   {
//     id: 3,
//     name: "Expert Zone",
//     color: "from-orange-500 to-red-500",
//     ringColor: "border-orange-400",
//     technologies: [
//       { name: "System Design", angle: 0, icon: "🏗️" },
//       { name: "Microservices", angle: 36, icon: "🔗" },
//       { name: "Docker", angle: 72, icon: "🐳" },
//       { name: "Kubernetes", angle: 108, icon: "☸️" },
//       { name: "AWS/Cloud", angle: 144, icon: "☁️" },
//       { name: "GraphQL", angle: 180, icon: "📊" },
//       { name: "WebSocket", angle: 216, icon: "🔌" },
//       { name: "Performance", angle: 252, icon: "⚡" },
//       { name: "Security", angle: 288, icon: "🔒" },
//       { name: "Architecture", angle: 324, icon: "🏛️" },
//     ],
//   },
// ];

// const ACHIEVEMENT_POINTS = [
//   { zone: 1, label: "Foundation Master", description: "Core skills acquired! 🎯" },
//   { zone: 2, label: "Advanced Developer", description: "Building complex apps! 💪" },
//   { zone: 3, label: "Expert Architect", description: "Mastering the craft! 🏆" },
// ];

// export default function FeaturePlanetPage() {
//   const [currentZone, setCurrentZone] = useState(0);
//   const [completedZones, setCompletedZones] = useState<number[]>([]);
//   const [showCelebration, setShowCelebration] = useState(false);

//   const handleZoneComplete = () => {
//     if (currentZone < ZONES.length) {
//       setCompletedZones([...completedZones, ZONES[currentZone].id]);
//       setShowCelebration(true);
//       setTimeout(() => {
//         setShowCelebration(false);
//         if (currentZone < ZONES.length - 1) {
//           setCurrentZone(currentZone + 1);
//         }
//       }, 2000);
//     }
//   };

//   const progress = ((completedZones.length) / ZONES.length) * 100;

//   return (
//     <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
//       {/* Animated Background */}
//       <div className="fixed inset-0 -z-10">
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700" />
//         <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
//       </div>

//       {/* Header */}
//       <header className="relative z-50 pt-8 pb-6 px-4 sm:px-6">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center"
//           >
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 mb-6">
//               <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//               <span className="text-sm font-medium">Feature Planet Journey</span>
//             </div>
//             <h1 className="text-4xl sm:text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
//               Input by SapshoTechnology
//             </h1>
//             <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
//               Journey through technology zones, master every skill, and reach the ultimate achievement - Ibiza Point! 🚀
//             </p>
//           </motion.div>

//           {/* Progress Bar */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="mt-8 max-w-2xl mx-auto"
//           >
//             <div className="flex items-center justify-between mb-2 text-sm">
//               <span className="text-slate-400">Your Progress</span>
//               <span className="font-bold text-purple-400">{Math.round(progress)}%</span>
//             </div>
//             <div className="h-3 bg-slate-800 rounded-full overflow-hidden border border-white/10">
//               <motion.div
//                 className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
//                 initial={{ width: 0 }}
//                 animate={{ width: `${progress}%` }}
//                 transition={{ duration: 0.5 }}
//               />
//             </div>
//           </motion.div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <div className="relative z-10 px-4 sm:px-6 py-8 sm:py-12">
//         <div className="max-w-7xl mx-auto">
//           {/* Circular Zones Display */}
//           <div className="relative flex items-center justify-center min-h-[500px] sm:min-h-[700px] mb-12">
//             <CircularZones
//               zones={ZONES}
//               currentZone={currentZone}
//               completedZones={completedZones}
//             />
            
//             {/* Center Achievement */}
//             <CenterAchievement completedZones={completedZones} />
//           </div>

//           {/* Zone Controls */}
//           <ZoneControls
//             currentZone={currentZone}
//             totalZones={ZONES.length}
//             onPrev={() => setCurrentZone(Math.max(0, currentZone - 1))}
//             onNext={() => setCurrentZone(Math.min(ZONES.length - 1, currentZone + 1))}
//             onComplete={handleZoneComplete}
//             isCompleted={completedZones.includes(ZONES[currentZone]?.id)}
//           />

//           {/* Achievement Cards */}
//           <AchievementCards
//             achievements={ACHIEVEMENT_POINTS}
//             completedZones={completedZones}
//           />
//         </div>
//       </div>

//       {/* Celebration Animation */}
//       <AnimatePresence>
//         {showCelebration && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
//           >
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//               className="text-9xl"
//             >
//               🎉
//             </motion.div>
//             <div className="absolute text-center">
//               <h2 className="text-4xl sm:text-6xl font-black text-white mb-4">
//                 Zone Completed!
//               </h2>
//               <p className="text-xl text-purple-300">Moving to next level... 🚀</p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </main>
//   );
// }

// // Circular Zones Component
// function CircularZones({
//   zones,
//   currentZone,
//   completedZones,
// }: {
//   zones: typeof ZONES;
//   currentZone: number;
//   completedZones: number[];
// }) {
//   return (
//     <div className="absolute inset-0 flex items-center justify-center">
//       {zones.map((zone, idx) => {
//         const radius = 100 + idx * 120;
//         const isActive = idx === currentZone;
//         const isCompleted = completedZones.includes(zone.id);

//         return (
//           <motion.div
//             key={zone.id}
//             className="absolute"
//             initial={{ scale: 0, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ delay: idx * 0.2 }}
//           >
//             {/* Zone Ring */}
//             <svg
//               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//               width={radius * 2}
//               height={radius * 2}
//               style={{ pointerEvents: "none" }}
//             >
//               <motion.circle
//                 cx={radius}
//                 cy={radius}
//                 r={radius - 2}
//                 fill="none"
//                 stroke={isCompleted ? "#10b981" : isActive ? "#a855f7" : "#475569"}
//                 strokeWidth="3"
//                 strokeDasharray={isCompleted ? "0" : "10 5"}
//                 initial={{ pathLength: 0 }}
//                 animate={{ pathLength: 1 }}
//                 transition={{ duration: 2, delay: idx * 0.3 }}
//               />
//             </svg>

//             {/* Technology Points */}
//             {zone.technologies.map((tech, techIdx) => {
//               const angle = (tech.angle * Math.PI) / 180;
//               const x = Math.cos(angle) * radius;
//               const y = Math.sin(angle) * radius;

//               return (
//                 <motion.div
//                   key={techIdx}
//                   className="absolute top-1/2 left-1/2"
//                   style={{
//                     transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
//                   }}
//                   initial={{ scale: 0 }}
//                   animate={{ scale: isActive ? 1 : 0.6 }}
//                   whileHover={{ scale: isActive ? 1.3 : 0.8 }}
//                   transition={{ delay: idx * 0.2 + techIdx * 0.05 }}
//                 >
//                   <div
//                     className={`relative group cursor-pointer ${
//                       isCompleted
//                         ? "bg-green-500/20 border-green-400"
//                         : isActive
//                         ? "bg-purple-500/20 border-purple-400"
//                         : "bg-slate-700/20 border-slate-600"
//                     } border-2 rounded-full p-2 sm:p-3 backdrop-blur-sm transition-all duration-300`}
//                   >
//                     <span className="text-xl sm:text-2xl">{tech.icon}</span>
                    
//                     {/* Tooltip */}
//                     <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
//                       {tech.name}
//                     </div>
//                   </div>

//                   {/* Connecting Line to Center */}
//                   {isActive && (
//                     <motion.div
//                       className="absolute top-1/2 left-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-transparent origin-left"
//                       style={{
//                         width: radius,
//                         transform: `translate(-50%, -50%) rotate(${tech.angle + 180}deg)`,
//                       }}
//                       initial={{ scaleX: 0 }}
//                       animate={{ scaleX: 1 }}
//                       transition={{ duration: 0.5 }}
//                     />
//                   )}
//                 </motion.div>
//               );
//             })}

//             {/* Zone Label */}
//             <motion.div
//               className={`absolute top-1/2 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full ${
//                 isCompleted
//                   ? "bg-green-500/30 border-green-400 text-green-300"
//                   : isActive
//                   ? "bg-purple-500/30 border-purple-400 text-purple-300"
//                   : "bg-slate-700/30 border-slate-600 text-slate-400"
//               } border-2 backdrop-blur-sm text-xs sm:text-sm font-bold whitespace-nowrap`}
//               style={{
//                 transform: `translate(-50%, calc(-50% - ${radius + 30}px))`,
//               }}
//               initial={{ y: -20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: idx * 0.2 }}
//             >
//               {isCompleted && "✓ "}
//               {zone.name}
//             </motion.div>
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// }

// // Center Achievement Component
// function CenterAchievement({ completedZones }: { completedZones: number[] }) {
//   const allCompleted = completedZones.length === ZONES.length;

//   return (
//     <motion.div
//       className="relative z-50"
//       initial={{ scale: 0 }}
//       animate={{ scale: 1 }}
//       transition={{ delay: 0.5, type: "spring" }}
//     >
//       <motion.div
//         className={`relative rounded-full p-8 sm:p-12 ${
//           allCompleted
//             ? "bg-gradient-to-br from-yellow-500 to-orange-500"
//             : "bg-gradient-to-br from-slate-800 to-slate-900"
//         } border-4 ${
//           allCompleted ? "border-yellow-300" : "border-slate-600"
//         } shadow-2xl`}
//         animate={
//           allCompleted
//             ? {
//                 boxShadow: [
//                   "0 0 20px rgba(234, 179, 8, 0.5)",
//                   "0 0 60px rgba(234, 179, 8, 0.8)",
//                   "0 0 20px rgba(234, 179, 8, 0.5)",
//                 ],
//               }
//             : {}
//         }
//         transition={{ duration: 2, repeat: Infinity }}
//       >
//         <div className="text-center">
//           <motion.div
//             className="text-5xl sm:text-7xl mb-4"
//             animate={allCompleted ? { rotate: 360 } : {}}
//             transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//           >
//             {allCompleted ? "🏖️" : "🎯"}
//           </motion.div>
//           <h3 className="text-xl sm:text-3xl font-black text-white mb-2">
//             {allCompleted ? "IBIZA POINT!" : "Your Goal"}
//           </h3>
//           <p className="text-xs sm:text-sm text-slate-300">
//             {allCompleted
//               ? "All Zones Conquered! 🎉"
//               : `${completedZones.length}/${ZONES.length} Zones Completed`}
//           </p>
//         </div>

//         {/* Orbiting Stars */}
//         {allCompleted && (
//           <>
//             {[0, 120, 240].map((angle, idx) => (
//               <motion.div
//                 key={idx}
//                 className="absolute text-3xl"
//                 animate={{
//                   rotate: 360,
//                   x: Math.cos((angle * Math.PI) / 180) * 80,
//                   y: Math.sin((angle * Math.PI) / 180) * 80,
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "linear",
//                   delay: idx * 0.3,
//                 }}
//                 style={{ top: "50%", left: "50%" }}
//               >
//                 ⭐
//               </motion.div>
//             ))}
//           </>
//         )}
//       </motion.div>
//     </motion.div>
//   );
// }

// // Zone Controls
// function ZoneControls({
//   currentZone,
//   totalZones,
//   onPrev,
//   onNext,
//   onComplete,
//   isCompleted,
// }: {
//   currentZone: number;
//   totalZones: number;
//   onPrev: () => void;
//   onNext: () => void;
//   onComplete: () => void;
//   isCompleted: boolean;
// }) {
//   return (
//     <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
//       <button
//         onClick={onPrev}
//         disabled={currentZone === 0}
//         className="px-6 py-3 rounded-full bg-slate-800 border-2 border-slate-700 text-white font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-700 transition-all"
//       >
//         ← Previous Zone
//       </button>

//       <motion.button
//         onClick={onComplete}
//         disabled={isCompleted}
//         className={`px-8 py-4 rounded-full font-black text-lg ${
//           isCompleted
//             ? "bg-green-500/20 border-green-400 text-green-300"
//             : "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50"
//         } border-2 disabled:cursor-not-allowed hover:scale-105 transition-all`}
//         whileHover={!isCompleted ? { scale: 1.05 } : {}}
//         whileTap={!isCompleted ? { scale: 0.95 } : {}}
//       >
//         {isCompleted ? "✓ Completed" : "Complete Zone 🚀"}
//       </motion.button>

//       <button
//         onClick={onNext}
//         disabled={currentZone === totalZones - 1}
//         className="px-6 py-3 rounded-full bg-slate-800 border-2 border-slate-700 text-white font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-700 transition-all"
//       >
//         Next Zone →
//       </button>
//     </div>
//   );
// }

// // Achievement Cards
// function AchievementCards({
//   achievements,
//   completedZones,
// }: {
//   achievements: typeof ACHIEVEMENT_POINTS;
//   completedZones: number[];
// }) {
//   return (
//     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
//       {achievements.map((achievement, idx) => {
//         const isUnlocked = completedZones.includes(achievement.zone);

//         return (
//           <motion.div
//             key={idx}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: idx * 0.1 }}
//             className={`relative p-6 rounded-2xl border-2 ${
//               isUnlocked
//                 ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400"
//                 : "bg-slate-800/50 border-slate-700"
//             } backdrop-blur-sm`}
//           >
//             {isUnlocked && (
//               <div className="absolute -top-3 -right-3 text-4xl animate-bounce">
//                 🏆
//               </div>
//             )}
//             <div className="text-4xl mb-3">
//               {isUnlocked ? "🎯" : "🔒"}
//             </div>
//             <h4 className="text-xl font-bold text-white mb-2">
//               {achievement.label}
//             </h4>
//             <p className="text-sm text-slate-400">
//               {achievement.description}
//             </p>
//             {isUnlocked && (
//               <div className="mt-4 text-xs font-bold text-green-400">
//                 ✓ UNLOCKED
//               </div>
//             )}
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// }







// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // Zone Data Structure with Full-Stack Developer Path
// const ZONES = [
//   {
//     id: 1,
//     name: "🌱 Foundation Zone",
//     subtitle: "Basic Building Blocks",
//     color: "from-blue-500 to-cyan-500",
//     ringColor: "#3b82f6",
//     bgGlow: "bg-blue-500/20",
//     technologies: [
//       { name: "HTML5", angle: 0, icon: "📄", desc: "Structure & Semantics" },
//       { name: "CSS3", angle: 45, icon: "🎨", desc: "Styling & Layout" },
//       { name: "JavaScript", angle: 90, icon: "⚡", desc: "Core Programming" },
//       { name: "Git & GitHub", angle: 135, icon: "📦", desc: "Version Control" },
//       { name: "VS Code", angle: 180, icon: "💻", desc: "Code Editor" },
//       { name: "Terminal/CLI", angle: 225, icon: "🖥️", desc: "Command Line" },
//       { name: "Responsive Design", angle: 270, icon: "📱", desc: "Mobile First" },
//       { name: "Browser DevTools", angle: 315, icon: "🔧", desc: "Debugging" },
//     ],
//   },
//   {
//     id: 2,
//     name: "🚀 Advanced Zone",
//     subtitle: "Professional Development",
//     color: "from-purple-500 to-pink-500",
//     ringColor: "#a855f7",
//     bgGlow: "bg-purple-500/20",
//     technologies: [
//       { name: "React.js", angle: 0, icon: "⚛️", desc: "UI Library" },
//       { name: "Next.js", angle: 36, icon: "▲", desc: "React Framework" },
//       { name: "TypeScript", angle: 72, icon: "📘", desc: "Type Safety" },
//       { name: "Tailwind CSS", angle: 108, icon: "🌊", desc: "Utility CSS" },
//       { name: "Node.js", angle: 144, icon: "🟢", desc: "Backend Runtime" },
//       { name: "Express.js", angle: 180, icon: "🚂", desc: "Web Framework" },
//       { name: "MongoDB", angle: 216, icon: "🍃", desc: "NoSQL Database" },
//       { name: "REST APIs", angle: 252, icon: "🌐", desc: "API Design" },
//       { name: "Jest/Testing", angle: 288, icon: "🧪", desc: "Unit Testing" },
//       { name: "Webpack/Vite", angle: 324, icon: "📦", desc: "Build Tools" },
//     ],
//   },
//   {
//     id: 3,
//     name: "👑 Expert Zone",
//     subtitle: "Full-Stack Mastery",
//     color: "from-orange-500 to-red-500",
//     ringColor: "#f97316",
//     bgGlow: "bg-orange-500/20",
//     technologies: [
//       { name: "System Design", angle: 0, icon: "🏗️", desc: "Architecture" },
//       { name: "Microservices", angle: 30, icon: "🔗", desc: "Service Oriented" },
//       { name: "Docker", angle: 60, icon: "🐳", desc: "Containerization" },
//       { name: "Kubernetes", angle: 90, icon: "☸️", desc: "Orchestration" },
//       { name: "AWS/GCP/Azure", angle: 120, icon: "☁️", desc: "Cloud Services" },
//       { name: "GraphQL", angle: 150, icon: "📊", desc: "Query Language" },
//       { name: "WebSocket", angle: 180, icon: "🔌", desc: "Real-time" },
//       { name: "Redis/Cache", angle: 210, icon: "⚡", desc: "Caching Layer" },
//       { name: "CI/CD Pipeline", angle: 240, icon: "🚀", desc: "Automation" },
//       { name: "Security (OAuth)", angle: 270, icon: "🔒", desc: "Auth & Security" },
//       { name: "Performance", angle: 300, icon: "📈", desc: "Optimization" },
//       { name: "Monitoring", angle: 330, icon: "📡", desc: "Observability" },
//     ],
//   },
// ];

// const ACHIEVEMENT_POINTS = [
//   { 
//     zone: 1, 
//     label: "Foundation Master", 
//     description: "Core web development skills acquired! Ready to build websites.",
//     emoji: "🎯"
//   },
//   { 
//     zone: 2, 
//     label: "Advanced Developer", 
//     description: "Building complex full-stack applications with modern frameworks!",
//     emoji: "💪"
//   },
//   { 
//     zone: 3, 
//     label: "Full-Stack Expert", 
//     description: "Master architect! Ready to design and scale production systems.",
//     emoji: "👑"
//   },
// ];

// export default function FeaturePlanetPage() {
//   const [currentZone, setCurrentZone] = useState(0);
//   const [completedZones, setCompletedZones] = useState<number[]>([]);
//   const [showCelebration, setShowCelebration] = useState(false);
//   const [hoveredTech, setHoveredTech] = useState<string | null>(null);

//   const handleZoneComplete = () => {
//     if (currentZone < ZONES.length && !completedZones.includes(ZONES[currentZone].id)) {
//       setCompletedZones([...completedZones, ZONES[currentZone].id]);
//       setShowCelebration(true);
//       setTimeout(() => {
//         setShowCelebration(false);
//         if (currentZone < ZONES.length - 1) {
//           setCurrentZone(currentZone + 1);
//         }
//       }, 2500);
//     }
//   };

//   const progress = (completedZones.length / ZONES.length) * 100;
//   const allCompleted = completedZones.length === ZONES.length;

//   return (
//     <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
//       {/* Animated Background */}
//       <div className="fixed inset-0 -z-10">
//         <motion.div 
//           className="absolute top-0 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-3xl"
//           animate={{ 
//             scale: [1, 1.2, 1],
//             x: [0, 50, 0],
//             y: [0, 30, 0]
//           }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div 
//           className="absolute bottom-0 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl"
//           animate={{ 
//             scale: [1, 1.3, 1],
//             x: [0, -50, 0],
//             y: [0, -30, 0]
//           }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//         />
//         <motion.div 
//           className="absolute top-1/2 left-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-pink-500/20 rounded-full blur-3xl"
//           animate={{ 
//             scale: [1, 1.4, 1],
//             rotate: [0, 180, 360]
//           }}
//           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
//         />
        
//         {/* Grid Pattern */}
//         <div 
//           className="absolute inset-0 opacity-[0.03]"
//           style={{
//             backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
//             backgroundSize: "50px 50px"
//           }}
//         />
//       </div>

//       {/* Header - Fixed with proper spacing */}
//       <header className="relative z-50 pt-20 sm:pt-24 pb-6 sm:pb-8 px-4 sm:px-6">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center"
//           >
//             <motion.div 
//               className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 mb-4 sm:mb-6 backdrop-blur-lg"
//               whileHover={{ scale: 1.05 }}
//             >
//               <motion.span 
//                 className="w-2 h-2 bg-green-400 rounded-full"
//                 animate={{ scale: [1, 1.5, 1] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//               />
//               <span className="text-xs sm:text-sm font-bold">Full-Stack Developer Journey</span>
//             </motion.div>
            
//             <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3 sm:mb-4 px-2">
//               Input Planet
//             </h1>
            
//             <motion.p 
//               className="text-sm sm:text-base md:text-xl text-slate-400 max-w-3xl mx-auto px-4 leading-relaxed"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//             >
//               Master the complete journey from basics to expert level. Navigate through technology zones and unlock your full-stack potential! 🚀
//             </motion.p>
//           </motion.div>

//           {/* Progress Bar */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.5 }}
//             className="mt-6 sm:mt-8 max-w-2xl mx-auto"
//           >
//             <div className="flex items-center justify-between mb-2 text-xs sm:text-sm px-2">
//               <span className="text-slate-400 font-medium">Journey Progress</span>
//               <span className="font-black text-purple-400">{Math.round(progress)}%</span>
//             </div>
//             <div className="relative h-4 bg-slate-800/50 rounded-full overflow-hidden border-2 border-white/10 backdrop-blur-sm">
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
//                 initial={{ width: 0 }}
//                 animate={{ width: `${progress}%` }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//               />
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
//                 animate={{ x: ["-100%", "200%"] }}
//                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//               />
//             </div>
//             <div className="flex justify-between mt-2 text-[10px] sm:text-xs text-slate-500 px-2">
//               <span>Beginner</span>
//               <span>Intermediate</span>
//               <span>Expert</span>
//             </div>
//           </motion.div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <div className="relative z-10 px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-12">
//         <div className="max-w-7xl mx-auto">
//           {/* Circular Zones Display */}
//           <div className="relative flex items-center justify-center min-h-[600px] sm:min-h-[700px] md:min-h-[800px] mb-8 sm:mb-12">
//             <CircularZones
//               zones={ZONES}
//               currentZone={currentZone}
//               completedZones={completedZones}
//               hoveredTech={hoveredTech}
//               setHoveredTech={setHoveredTech}
//             />
            
//             {/* Center Achievement */}
//             <CenterAchievement 
//               completedZones={completedZones} 
//               totalZones={ZONES.length}
//             />
//           </div>

//           {/* Zone Info Card */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="max-w-3xl mx-auto mb-6 sm:mb-8 p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 backdrop-blur-lg"
//           >
//             <div className="flex items-center gap-3 sm:gap-4 mb-3">
//               <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${ZONES[currentZone].color} flex items-center justify-center text-2xl sm:text-3xl font-bold shadow-lg`}>
//                 {currentZone + 1}
//               </div>
//               <div className="flex-1">
//                 <h3 className="text-lg sm:text-2xl font-black text-white">{ZONES[currentZone].name}</h3>
//                 <p className="text-xs sm:text-sm text-slate-400">{ZONES[currentZone].subtitle}</p>
//               </div>
//               {completedZones.includes(ZONES[currentZone].id) && (
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   className="text-3xl sm:text-4xl"
//                 >
//                   ✅
//                 </motion.div>
//               )}
//             </div>
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
//               {ZONES[currentZone].technologies.slice(0, 4).map((tech, idx) => (
//                 <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10">
//                   <span className="text-lg sm:text-xl">{tech.icon}</span>
//                   <span className="text-[10px] sm:text-xs font-medium truncate">{tech.name}</span>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Zone Controls */}
//           <ZoneControls
//             currentZone={currentZone}
//             totalZones={ZONES.length}
//             onPrev={() => setCurrentZone(Math.max(0, currentZone - 1))}
//             onNext={() => setCurrentZone(Math.min(ZONES.length - 1, currentZone + 1))}
//             onComplete={handleZoneComplete}
//             isCompleted={completedZones.includes(ZONES[currentZone]?.id)}
//           />

//           {/* Achievement Cards */}
//           <AchievementCards
//             achievements={ACHIEVEMENT_POINTS}
//             completedZones={completedZones}
//           />
//         </div>
//       </div>

//       {/* Celebration Animation */}
//       <AnimatePresence>
//         {showCelebration && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-md px-4"
//           >
//             <motion.div
//               initial={{ scale: 0, rotate: -180 }}
//               animate={{ scale: 1, rotate: 0 }}
//               exit={{ scale: 0, rotate: 180 }}
//               className="text-center"
//             >
//               <motion.div
//                 animate={{ 
//                   scale: [1, 1.2, 1],
//                   rotate: [0, 10, -10, 0]
//                 }}
//                 transition={{ duration: 0.5, repeat: 3 }}
//                 className="text-8xl sm:text-9xl mb-4"
//               >
//                 🎉
//               </motion.div>
//               <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-4">
//                 Zone Completed!
//               </h2>
//               <p className="text-lg sm:text-2xl text-purple-300 mb-2">Epic Progress! 🚀</p>
//               <motion.div
//                 animate={{ opacity: [0, 1, 0] }}
//                 transition={{ duration: 1, repeat: Infinity }}
//                 className="text-base sm:text-xl text-slate-400"
//               >
//                 Moving to next level...
//               </motion.div>
//             </motion.div>
            
//             {/* Confetti Effect */}
//             {[...Array(20)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute text-2xl sm:text-4xl"
//                 initial={{ 
//                   x: "50vw", 
//                   y: "50vh",
//                   scale: 0 
//                 }}
//                 animate={{ 
//                   x: Math.random() * window.innerWidth,
//                   y: Math.random() * window.innerHeight,
//                   scale: [0, 1, 0],
//                   rotate: Math.random() * 360
//                 }}
//                 transition={{ duration: 2, delay: i * 0.1 }}
//               >
//                 {["🎊", "✨", "🌟", "💫", "⭐"][i % 5]}
//               </motion.div>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Final Achievement Modal */}
//       <AnimatePresence>
//         {allCompleted && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="fixed inset-0 z-[250] flex items-center justify-center bg-black/80 backdrop-blur-lg px-4"
//             onClick={() => {}}
//           >
//             <motion.div
//               initial={{ scale: 0, y: 100 }}
//               animate={{ scale: 1, y: 0 }}
//               className="relative max-w-2xl w-full p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-4 border-yellow-400 backdrop-blur-xl text-center"
//             >
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//                 className="text-7xl sm:text-9xl mb-6"
//               >
//                 🏖️
//               </motion.div>
//               <h2 className="text-4xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent mb-4">
//                 IBIZA POINT REACHED!
//               </h2>
//               <p className="text-lg sm:text-2xl text-white mb-6">
//                 🎉 Congratulations! You've mastered the Full-Stack Developer journey! 🎉
//               </p>
//               <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
//                 <span className="px-4 py-2 rounded-full bg-green-500/20 border-2 border-green-400 text-green-300 font-bold text-sm">
//                   ✓ Foundation Mastered
//                 </span>
//                 <span className="px-4 py-2 rounded-full bg-purple-500/20 border-2 border-purple-400 text-purple-300 font-bold text-sm">
//                   ✓ Advanced Skills
//                 </span>
//                 <span className="px-4 py-2 rounded-full bg-orange-500/20 border-2 border-orange-400 text-orange-300 font-bold text-sm">
//                   ✓ Expert Level
//                 </span>
//               </div>
//               <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
//                 You're now ready to build production-grade applications, lead teams, and architect scalable systems. Time to celebrate! 🎊
//               </p>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </main>
//   );
// }

// // Circular Zones Component - Fully Responsive
// function CircularZones({
//   zones,
//   currentZone,
//   completedZones,
//   hoveredTech,
//   setHoveredTech,
// }: {
//   zones: typeof ZONES;
//   currentZone: number;
//   completedZones: number[];
//   hoveredTech: string | null;
//   setHoveredTech: (tech: string | null) => void;
// }) {
//   const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const getRadius = (idx: number) => {
//     if (windowWidth < 640) return 60 + idx * 80; // Mobile
//     if (windowWidth < 1024) return 80 + idx * 100; // Tablet
//     return 100 + idx * 130; // Desktop
//   };

//   const getTechSize = (isActive: boolean) => {
//     if (windowWidth < 640) return isActive ? 40 : 32; // Mobile
//     if (windowWidth < 1024) return isActive ? 50 : 40; // Tablet
//     return isActive ? 60 : 48; // Desktop
//   };

//   return (
//     <div className="absolute inset-0 flex items-center justify-center">
//       {zones.map((zone, idx) => {
//         const radius = getRadius(idx);
//         const isActive = idx === currentZone;
//         const isCompleted = completedZones.includes(zone.id);

//         return (
//           <motion.div
//             key={zone.id}
//             className="absolute"
//             initial={{ scale: 0, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ delay: idx * 0.3, type: "spring" }}
//           >
//             {/* Zone Ring with Glow */}
//             <svg
//               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//               width={radius * 2}
//               height={radius * 2}
//               style={{ pointerEvents: "none" }}
//             >
//               <defs>
//                 <filter id={`glow-${idx}`}>
//                   <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
//                   <feMerge>
//                     <feMergeNode in="coloredBlur"/>
//                     <feMergeNode in="SourceGraphic"/>
//                   </feMerge>
//                 </filter>
//               </defs>
//               <motion.circle
//                 cx={radius}
//                 cy={radius}
//                 r={radius - 3}
//                 fill="none"
//                 stroke={isCompleted ? "#10b981" : isActive ? zone.ringColor : "#475569"}
//                 strokeWidth={isActive ? "4" : "2"}
//                 strokeDasharray={isCompleted ? "0" : "15 10"}
//                 filter={`url(#glow-${idx})`}
//                 initial={{ pathLength: 0, rotate: 0 }}
//                 animate={{ 
//                   pathLength: 1,
//                   rotate: isActive ? 360 : 0
//                 }}
//                 transition={{ 
//                   pathLength: { duration: 2, delay: idx * 0.3 },
//                   rotate: { duration: 20, repeat: Infinity, ease: "linear" }
//                 }}
//                 style={{ transformOrigin: "center" }}
//               />
//             </svg>

//             {/* Technology Points */}
//             {zone.technologies.map((tech, techIdx) => {
//               const angle = (tech.angle * Math.PI) / 180;
//               const x = Math.cos(angle) * radius;
//               const y = Math.sin(angle) * radius;
//               const techSize = getTechSize(isActive);
//               const isHovered = hoveredTech === `${zone.id}-${tech.name}`;

//               return (
//                 <motion.div
//                   key={techIdx}
//                   className="absolute top-1/2 left-1/2"
//                   style={{
//                     transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
//                   }}
//                   initial={{ scale: 0, opacity: 0 }}
//                   animate={{ 
//                     scale: isActive ? (isHovered ? 1.2 : 1) : 0.6,
//                     opacity: isActive ? 1 : 0.5
//                   }}
//                   whileHover={{ scale: isActive ? 1.3 : 0.8 }}
//                   transition={{ delay: idx * 0.2 + techIdx * 0.05 }}
//                   onHoverStart={() => setHoveredTech(`${zone.id}-${tech.name}`)}
//                   onHoverEnd={() => setHoveredTech(null)}
//                 >
//                   <motion.div
//                     className={`relative group cursor-pointer ${
//                       isCompleted
//                         ? "bg-gradient-to-br from-green-500/30 to-emerald-500/30 border-green-400"
//                         : isActive
//                         ? `bg-gradient-to-br ${zone.color}/30 border-2`
//                         : "bg-slate-700/30 border-slate-600"
//                     } border-2 rounded-2xl backdrop-blur-md transition-all duration-300 shadow-lg`}
//                     style={{
//                       width: techSize,
//                       height: techSize,
//                       borderColor: isActive ? zone.ringColor : undefined
//                     }}
//                     animate={isActive ? {
//                       boxShadow: [
//                         `0 0 20px ${zone.ringColor}40`,
//                         `0 0 40px ${zone.ringColor}60`,
//                         `0 0 20px ${zone.ringColor}40`,
//                       ]
//                     } : {}}
//                     transition={{ duration: 2, repeat: Infinity }}
//                   >
//                     <div className="w-full h-full flex items-center justify-center">
//                       <span className="text-base sm:text-xl md:text-2xl">{tech.icon}</span>
//                     </div>
                    
//                     {/* Enhanced Tooltip */}
//                     <motion.div 
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
//                       className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-black/95 text-white rounded-xl pointer-events-none whitespace-nowrap z-50 border border-white/20 backdrop-blur-lg"
//                     >
//                       <div className="text-xs sm:text-sm font-bold">{tech.name}</div>
//                       <div className="text-[10px] sm:text-xs text-slate-400">{tech.desc}</div>
//                       <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-black/95" />
//                     </motion.div>
//                   </motion.div>

//                   {/* Animated Connecting Line */}
//                   {isActive && (
//                     <motion.div
//                       className="absolute top-1/2 left-1/2 h-0.5 origin-left pointer-events-none"
//                       style={{
//                         width: radius,
//                         transform: `translate(-50%, -50%) rotate(${tech.angle + 180}deg)`,
//                         background: `linear-gradient(to right, ${zone.ringColor}, transparent)`
//                       }}
//                       initial={{ scaleX: 0, opacity: 0 }}
//                       animate={{ scaleX: 1, opacity: 0.5 }}
//                       transition={{ duration: 0.5, delay: techIdx * 0.05 }}
//                     />
//                   )}
//                 </motion.div>
//               );
//             })}

//             {/* Animated Zone Label */}
//             <motion.div
//               className={`absolute top-1/2 left-1/2 -translate-x-1/2 px-3 sm:px-5 py-2 sm:py-3 rounded-2xl ${
//                 isCompleted
//                   ? "bg-gradient-to-r from-green-500/40 to-emerald-500/40 border-green-400 text-green-200"
//                   : isActive
//                   ? `bg-gradient-to-r ${zone.color}/40 text-white`
//                   : "bg-slate-700/40 border-slate-600 text-slate-400"
//               } border-2 backdrop-blur-lg text-[10px] sm:text-xs md:text-sm font-black whitespace-nowrap shadow-xl`}
//               style={{
//                 transform: `translate(-50%, calc(-50% - ${radius + (windowWidth < 640 ? 25 : 35)}px))`,
//                 borderColor: isActive ? zone.ringColor : undefined
//               }}
//               initial={{ y: -20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               whileHover={{ scale: 1.05 }}
//               transition={{ delay: idx * 0.2 }}
//             >
//               {isCompleted && <span className="mr-1">✓</span>}
//               {zone.name}
//             </motion.div>
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// }

// // Enhanced Center Achievement Component
// function CenterAchievement({ 
//   completedZones, 
//   totalZones 
// }: { 
//   completedZones: number[];
//   totalZones: number;
// }) {
//   const allCompleted = completedZones.length === totalZones;
//   const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const centerSize = windowWidth < 640 ? 80 : windowWidth < 1024 ? 100 : 140;

//   return (
//     <motion.div
//       className="relative z-50"
//       initial={{ scale: 0, rotate: -180 }}
//       animate={{ scale: 1, rotate: 0 }}
//       transition={{ delay: 0.8, type: "spring", bounce: 0.5 }}
//     >
//       <motion.div
//         className={`relative rounded-full backdrop-blur-xl ${
//           allCompleted
//             ? "bg-gradient-to-br from-yellow-500 to-orange-500"
//             : "bg-gradient-to-br from-slate-800 to-slate-900"
//         } border-4 ${
//           allCompleted ? "border-yellow-300" : "border-slate-600"
//         } shadow-2xl`}
//         style={{
//           width: centerSize,
//           height: centerSize,
//         }}
//         animate={
//           allCompleted
//             ? {
//                 boxShadow: [
//                   "0 0 30px rgba(234, 179, 8, 0.6)",
//                   "0 0 80px rgba(234, 179, 8, 0.9)",
//                   "0 0 30px rgba(234, 179, 8, 0.6)",
//                 ],
//                 rotate: [0, 360]
//               }
//             : {}
//         }
//         transition={{ 
//           boxShadow: { duration: 2, repeat: Infinity },
//           rotate: { duration: 20, repeat: Infinity, ease: "linear" }
//         }}
//       >
//         <div className="absolute inset-0 flex flex-col items-center justify-center p-2 sm:p-4">
//           <motion.div
//             className="text-3xl sm:text-5xl md:text-7xl mb-1 sm:mb-2"
//             animate={allCompleted ? { 
//               rotate: [0, 360],
//               scale: [1, 1.2, 1]
//             } : {
//               y: [-5, 5, -5]
//             }}
//             transition={{ 
//               duration: allCompleted ? 3 : 2, 
//               repeat: Infinity, 
//               ease: "easeInOut" 
//             }}
//           >
//             {allCompleted ? "🏖️" : "🎯"}
//           </motion.div>
//           <h3 className="text-xs sm:text-base md:text-2xl font-black text-white text-center leading-tight">
//             {allCompleted ? "IBIZA!" : "Goal"}
//           </h3>
//           <p className="text-[8px] sm:text-[10px] md:text-xs text-slate-300 text-center mt-1">
//             {allCompleted
//               ? "Complete! 🎉"
//               : `${completedZones.length}/${totalZones}`}
//           </p>
//         </div>

//         {/* Orbiting Stars for Completed State */}
//         {allCompleted && (
//           <>
//             {[0, 120, 240].map((angle, idx) => (
//               <motion.div
//                 key={idx}
//                 className="absolute text-xl sm:text-2xl md:text-3xl"
//                 style={{
//                   top: "50%",
//                   left: "50%",
//                 }}
//                 animate={{
//                   x: Math.cos((angle * Math.PI) / 180) * (centerSize * 0.7),
//                   y: Math.sin((angle * Math.PI) / 180) * (centerSize * 0.7),
//                   rotate: 360,
//                 }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "linear",
//                   delay: idx * 0.4,
//                 }}
//               >
//                 ⭐
//               </motion.div>
//             ))}
//           </>
//         )}
//       </motion.div>

//       {/* Pulsing Ring Effect */}
//       <motion.div
//         className={`absolute inset-0 rounded-full border-2 ${
//           allCompleted ? "border-yellow-400" : "border-purple-400"
//         }`}
//         animate={{
//           scale: [1, 1.3, 1],
//           opacity: [0.5, 0, 0.5],
//         }}
//         transition={{ duration: 3, repeat: Infinity }}
//       />
//     </motion.div>
//   );
// }

// // Enhanced Zone Controls with Better Responsiveness
// function ZoneControls({
//   currentZone,
//   totalZones,
//   onPrev,
//   onNext,
//   onComplete,
//   isCompleted,
// }: {
//   currentZone: number;
//   totalZones: number;
//   onPrev: () => void;
//   onNext: () => void;
//   onComplete: () => void;
//   isCompleted: boolean;
// }) {
//   return (
//     <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
//       <motion.button
//         onClick={onPrev}
//         disabled={currentZone === 0}
//         className="w-full sm:w-auto px-4 sm:px-6 py-3 rounded-2xl bg-slate-800 border-2 border-slate-700 text-white font-bold text-sm sm:text-base disabled:opacity-20 disabled:cursor-not-allowed hover:bg-slate-700 hover:border-slate-600 transition-all shadow-lg"
//         whileHover={{ scale: currentZone === 0 ? 1 : 1.05 }}
//         whileTap={{ scale: currentZone === 0 ? 1 : 0.95 }}
//       >
//         ← Previous Zone
//       </motion.button>

//       <motion.button
//         onClick={onComplete}
//         disabled={isCompleted}
//         className={`w-full sm:w-auto px-6 sm:px-10 py-4 rounded-2xl font-black text-base sm:text-lg shadow-2xl ${
//           isCompleted
//             ? "bg-green-500/20 border-green-400 text-green-300 cursor-not-allowed"
//             : "bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white shadow-purple-500/50 hover:shadow-purple-500/70"
//         } border-2 transition-all`}
//         whileHover={!isCompleted ? { scale: 1.05, y: -2 } : {}}
//         whileTap={!isCompleted ? { scale: 0.95 } : {}}
//         animate={!isCompleted ? {
//           boxShadow: [
//             "0 0 20px rgba(168, 85, 247, 0.4)",
//             "0 0 40px rgba(168, 85, 247, 0.6)",
//             "0 0 20px rgba(168, 85, 247, 0.4)",
//           ]
//         } : {}}
//         transition={{ duration: 2, repeat: Infinity }}
//       >
//         {isCompleted ? "✓ Zone Completed" : "Complete This Zone 🚀"}
//       </motion.button>

//       <motion.button
//         onClick={onNext}
//         disabled={currentZone === totalZones - 1}
//         className="w-full sm:w-auto px-4 sm:px-6 py-3 rounded-2xl bg-slate-800 border-2 border-slate-700 text-white font-bold text-sm sm:text-base disabled:opacity-20 disabled:cursor-not-allowed hover:bg-slate-700 hover:border-slate-600 transition-all shadow-lg"
//         whileHover={{ scale: currentZone === totalZones - 1 ? 1 : 1.05 }}
//         whileTap={{ scale: currentZone === totalZones - 1 ? 1 : 0.95 }}
//       >
//         Next Zone →
//       </motion.button>
//     </div>
//   );
// }

// // Enhanced Achievement Cards with Full Responsiveness
// function AchievementCards({
//   achievements,
//   completedZones,
// }: {
//   achievements: typeof ACHIEVEMENT_POINTS;
//   completedZones: number[];
// }) {
//   return (
//     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto px-4">
//       {achievements.map((achievement, idx) => {
//         const isUnlocked = completedZones.includes(achievement.zone);

//         return (
//           <motion.div
//             key={idx}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: idx * 0.15 }}
//             whileHover={{ y: -8, scale: 1.02 }}
//             className={`relative p-5 sm:p-6 rounded-2xl border-2 ${
//               isUnlocked
//                 ? "bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-purple-500/20 border-purple-400 shadow-xl shadow-purple-500/20"
//                 : "bg-slate-800/50 border-slate-700"
//             } backdrop-blur-sm transition-all duration-300`}
//           >
//             {isUnlocked && (
//               <motion.div 
//                 className="absolute -top-4 -right-4 text-3xl sm:text-4xl"
//                 animate={{ 
//                   rotate: [0, 10, -10, 0],
//                   scale: [1, 1.1, 1]
//                 }}
//                 transition={{ duration: 2, repeat: Infinity }}
//               >
//                 🏆
//               </motion.div>
//             )}
            
//             <motion.div 
//               className="text-4xl sm:text-5xl mb-3 sm:mb-4"
//               animate={isUnlocked ? {
//                 scale: [1, 1.1, 1],
//               } : {}}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               {isUnlocked ? achievement.emoji : "🔒"}
//             </motion.div>
            
//             <h4 className="text-lg sm:text-xl font-black text-white mb-2">
//               {achievement.label}
//             </h4>
            
//             <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-3 sm:mb-4">
//               {achievement.description}
//             </p>
            
//             {isUnlocked ? (
//               <motion.div 
//                 className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-400 text-green-300 text-xs font-bold"
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ type: "spring", bounce: 0.5 }}
//               >
//                 <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//                 UNLOCKED
//               </motion.div>
//             ) : (
//               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-700/50 border border-slate-600 text-slate-400 text-xs font-bold">
//                 <span className="w-2 h-2 bg-slate-500 rounded-full" />
//                 LOCKED
//               </div>
//             )}
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// }





// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";

// // Complete Zone Data Structure with Text Labels
// const ZONES = [
//   {
//     id: 1,
//     name: "🌱 Foundation Zone",
//     subtitle: "Basic Building Blocks",
//     color: "from-blue-500 to-cyan-500",
//     ringColor: "#3b82f6",
//     bgGlow: "bg-blue-500/20",
//     technologies: [
//       {
//         name: "HTML5",
//         angle: 0,
//         label: "HTML Basics",
//         desc: "Structure & Semantics",
//         subItems: ["Basic tags: div, p, h1-h6", "Forms & inputs", "Semantic HTML5 elements"],
//       },
//       {
//         name: "CSS3",
//         angle: 45,
//         label: "CSS Styling",
//         desc: "Styling & Layout",
//         subItems: ["Flexbox & Grid basics", "Animations & transitions", "Responsive design"],
//       },
//       {
//         name: "JavaScript",
//         angle: 90,
//         label: "JS Programming",
//         desc: "Core Programming",
//         subItems: ["Variables & data types", "Functions & loops", "DOM manipulation"],
//       },
//       {
//         name: "Git",
//         angle: 135,
//         label: "Version Control",
//         desc: "Code Management",
//         subItems: ["Commit & push workflow", "Branching basics", "Pull requests"],
//       },
//       {
//         name: "Editor",
//         angle: 180,
//         label: "Code Editor",
//         desc: "Development Environment",
//         subItems: ["VS Code setup", "Shortcuts & snippets", "Debugging tools"],
//       },
//       {
//         name: "CLI",
//         angle: 225,
//         label: "Terminal",
//         desc: "Command Line",
//         subItems: ["Basic commands: cd, ls, mkdir", "Package managers: npm", "Git commands"],
//       },
//       {
//         name: "Responsive",
//         angle: 270,
//         label: "Mobile Design",
//         desc: "Mobile First",
//         subItems: ["Media queries", "Viewport meta tag", "Flexible layouts"],
//       },
//       {
//         name: "DevTools",
//         angle: 315,
//         label: "Browser Tools",
//         desc: "Debugging",
//         subItems: ["Inspect element", "Console debugging", "Network tab analysis"],
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "🚀 Advanced Zone",
//     subtitle: "Professional Development",
//     color: "from-purple-500 to-pink-500",
//     ringColor: "#a855f7",
//     bgGlow: "bg-purple-500/20",
//     technologies: [
//       {
//         name: "React",
//         angle: 0,
//         label: "React Library",
//         desc: "UI Development",
//         subItems: ["Components & Props", "useState & useEffect hooks", "Conditional rendering & lists"],
//       },
//       {
//         name: "Next.js",
//         angle: 36,
//         label: "Next Framework",
//         desc: "Full-stack React",
//         subItems: ["App Router & file-based routing", "Server components", "API routes & middleware"],
//       },
//       {
//         name: "TypeScript",
//         angle: 72,
//         label: "Type Safety",
//         desc: "Typed JavaScript",
//         subItems: ["Interfaces & Types", "Generics & utility types", "Type inference & guards"],
//       },
//       {
//         name: "Tailwind",
//         angle: 108,
//         label: "CSS Framework",
//         desc: "Utility-First CSS",
//         subItems: ["Responsive classes", "Custom themes & config", "Component patterns"],
//       },
//       {
//         name: "Node.js",
//         angle: 144,
//         label: "Backend Runtime",
//         desc: "Server-side JS",
//         subItems: ["Event loop & async", "File system & streams", "NPM packages"],
//       },
//       {
//         name: "Express",
//         angle: 180,
//         label: "Web Server",
//         desc: "Backend Framework",
//         subItems: ["Routes & controllers", "Middleware chain", "Error handling"],
//       },
//       {
//         name: "MongoDB",
//         angle: 216,
//         label: "Database",
//         desc: "NoSQL Storage",
//         subItems: ["CRUD operations", "Schema design with Mongoose", "Aggregation pipelines"],
//       },
//       {
//         name: "APIs",
//         angle: 252,
//         label: "REST APIs",
//         desc: "Backend Communication",
//         subItems: ["HTTP methods & status codes", "Authentication & JWT", "API documentation"],
//       },
//       {
//         name: "Testing",
//         angle: 288,
//         label: "Unit Testing",
//         desc: "Code Quality",
//         subItems: ["Writing test cases", "Mocking & spying", "Coverage reports"],
//       },
//       {
//         name: "State",
//         angle: 324,
//         label: "State Management",
//         desc: "Global State",
//         subItems: ["Redux/Zustand patterns", "Actions & reducers", "Context API"],
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "👑 Expert Zone",
//     subtitle: "Full-Stack Mastery",
//     color: "from-orange-500 to-red-500",
//     ringColor: "#f97316",
//     bgGlow: "bg-orange-500/20",
//     technologies: [
//       {
//         name: "Architecture",
//         angle: 0,
//         label: "System Design",
//         desc: "Scalable Systems",
//         subItems: ["Scalability patterns", "Load balancing", "Database sharding & replication"],
//       },
//       {
//         name: "Microservices",
//         angle: 30,
//         label: "Microservices",
//         desc: "Distributed Systems",
//         subItems: ["Service discovery & mesh", "API Gateway patterns", "Inter-service communication"],
//       },
//       {
//         name: "Docker",
//         angle: 60,
//         label: "Containers",
//         desc: "Containerization",
//         subItems: ["Dockerfile & image building", "Docker Compose", "Container networking"],
//       },
//       {
//         name: "Kubernetes",
//         angle: 90,
//         label: "Orchestration",
//         desc: "Container Management",
//         subItems: ["Pods, Services & Deployments", "Auto-scaling & load balancing", "ConfigMaps & Secrets"],
//       },
//       {
//         name: "Cloud",
//         angle: 120,
//         label: "Cloud Services",
//         desc: "AWS/Azure/GCP",
//         subItems: ["EC2, S3, Lambda", "RDS & DynamoDB", "CloudFront & Route53"],
//       },
//       {
//         name: "GraphQL",
//         angle: 150,
//         label: "GraphQL",
//         desc: "Modern APIs",
//         subItems: ["Schema & resolvers", "Queries & mutations", "Apollo Server/Client"],
//       },
//       {
//         name: "WebSocket",
//         angle: 180,
//         label: "Real-time",
//         desc: "Live Data",
//         subItems: ["Socket.io implementation", "Real-time chat & notifications", "Connection management"],
//       },
//       {
//         name: "Cache",
//         angle: 210,
//         label: "Caching",
//         desc: "Performance Layer",
//         subItems: ["Redis data caching", "Session management", "Pub/Sub patterns"],
//       },
//       {
//         name: "CI/CD",
//         angle: 240,
//         label: "DevOps",
//         desc: "Automation",
//         subItems: ["GitHub Actions & Jenkins", "Automated testing & deployment", "Blue-green deployments"],
//       },
//       {
//         name: "Security",
//         angle: 270,
//         label: "Security",
//         desc: "Auth & Protection",
//         subItems: ["OAuth 2.0 & JWT", "CORS & CSRF protection", "Encryption & hashing"],
//       },
//       {
//         name: "Performance",
//         angle: 300,
//         label: "Optimization",
//         desc: "Speed & Efficiency",
//         subItems: ["Code splitting & lazy loading", "CDN & caching strategies", "Database query optimization"],
//       },
//       {
//         name: "Monitoring",
//         angle: 330,
//         label: "Monitoring",
//         desc: "Observability",
//         subItems: ["Prometheus & Grafana", "Error tracking: Sentry", "Logging: ELK stack"],
//       },
//     ],
//   },
// ];

// const ACHIEVEMENT_POINTS = [
//   {
//     zone: 1,
//     label: "Foundation Master",
//     description: "Core web development skills acquired! Ready to build websites.",
//     emoji: "🎯",
//   },
//   {
//     zone: 2,
//     label: "Advanced Developer",
//     description: "Building complex full-stack applications with modern frameworks!",
//     emoji: "💪",
//   },
//   {
//     zone: 3,
//     label: "Full-Stack Expert",
//     description: "Master architect! Ready to design and scale production systems.",
//     emoji: "👑",
//   },
// ];

// export default function FeaturePlanetPage() {
//   const [currentZone, setCurrentZone] = useState(0);
//   const [completedZones, setCompletedZones] = useState<number[]>([]);
//   const [showCelebration, setShowCelebration] = useState(false);
//   const [hoveredTech, setHoveredTech] = useState<string | null>(null);

//   const handleZoneComplete = () => {
//     if (currentZone < ZONES.length && !completedZones.includes(ZONES[currentZone].id)) {
//       setCompletedZones([...completedZones, ZONES[currentZone].id]);
//       setShowCelebration(true);
//       setTimeout(() => {
//         setShowCelebration(false);
//         if (currentZone < ZONES.length - 1) {
//           setCurrentZone(currentZone + 1);
//         }
//       }, 2500);
//     }
//   };

//   const progress = (completedZones.length / ZONES.length) * 100;
//   const allCompleted = completedZones.length === ZONES.length;

//   return (
//     <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
//       {/* Animated Background */}
//       <div className="fixed inset-0 -z-10">
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px]" />
//         <div
//           className="absolute inset-0 opacity-[0.03]"
//           style={{
//             backgroundImage:
//               "linear-gradient(to right, rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.1) 1px, transparent 1px)",
//             backgroundSize: "50px 50px",
//           }}
//         />
//       </div>

//       {/* Main Content - NO NAVBAR */}
//       <div className="pt-8 sm:pt-12 pb-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           {/* Intro Section with Back Button */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center mb-8 sm:mb-12"
//           >
//             <div className="flex justify-end mb-4">
//               <Link
//                 href="/"
//                 className="px-4 py-2 text-sm bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition"
//               >
//                 ← Back to Home
//               </Link>
//             </div>
            
//             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
//               <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
//                 Journey to Full-Stack Mastery
//               </span>
//             </h2>
//             <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mb-6">
//               Navigate through three progressive zones — from foundation to expert level. Each zone unlocks new
//               skills and brings you closer to becoming a complete full-stack developer! 🎯
//             </p>

//             {/* Progress Bar */}
//             <div className="max-w-md mx-auto">
//               <div className="flex items-center justify-between mb-2">
//                 <span className="text-sm text-slate-400">Progress</span>
//                 <span className="text-sm font-semibold text-white">{Math.round(progress)}%</span>
//               </div>
//               <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden border border-white/10">
//                 <motion.div
//                   className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500"
//                   initial={{ width: 0 }}
//                   animate={{ width: `${progress}%` }}
//                   transition={{ duration: 0.5 }}
//                 />
//               </div>
//             </div>
//           </motion.div>

//           {/* Circular Zones */}
//           <CircularZones
//             zones={ZONES}
//             currentZone={currentZone}
//             completedZones={completedZones}
//             hoveredTech={hoveredTech}
//             setHoveredTech={setHoveredTech}
//           />

//           {/* Achievement Cards */}
//           <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//             {ACHIEVEMENT_POINTS.map((achievement, index) => (
//               <motion.div
//                 key={achievement.zone}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: index * 0.1 }}
//                 className={`relative p-6 rounded-2xl border transition-all ${
//                   completedZones.includes(achievement.zone)
//                     ? "bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30"
//                     : "bg-white/5 border-white/10"
//                 }`}
//               >
//                 <div className="text-4xl mb-3">{achievement.emoji}</div>
//                 <h3 className="text-lg font-semibold mb-2">{achievement.label}</h3>
//                 <p className="text-sm text-slate-400">{achievement.description}</p>
//                 {completedZones.includes(achievement.zone) && (
//                   <div className="absolute top-4 right-4">
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
//                     >
//                       ✓
//                     </motion.div>
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//           </div>

//           {/* Action Button */}
//           <div className="mt-12 text-center">
//             {!allCompleted ? (
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={handleZoneComplete}
//                 className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition"
//               >
//                 Complete Zone {currentZone + 1}
//               </motion.button>
//             ) : (
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 className="inline-block px-6 sm:px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl font-bold text-lg sm:text-xl"
//               >
//                 🎉 Journey Complete! You're a Full-Stack Expert! 🎉
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Celebration Modal */}
//       <AnimatePresence>
//         {showCelebration && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
//           >
//             <motion.div
//               initial={{ scale: 0, rotate: -180 }}
//               animate={{ scale: 1, rotate: 0 }}
//               exit={{ scale: 0, rotate: 180 }}
//               className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl border border-white/20 text-center max-w-md w-full"
//             >
//               <motion.div
//                 animate={{ scale: [1, 1.2, 1] }}
//                 transition={{ repeat: Infinity, duration: 1 }}
//                 className="text-6xl mb-4"
//               >
//                 {ACHIEVEMENT_POINTS[currentZone]?.emoji}
//               </motion.div>
//               <h3 className="text-2xl font-bold mb-2">{ACHIEVEMENT_POINTS[currentZone]?.label}</h3>
//               <p className="text-slate-400">{ACHIEVEMENT_POINTS[currentZone]?.description}</p>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </main>
//   );
// }

// // Circular Zones Component with Text Labels
// function CircularZones({ zones, currentZone, completedZones, hoveredTech, setHoveredTech }: any) {
//   return (
//     <div className="relative w-full max-w-5xl mx-auto aspect-square">
//       {zones.map((zone: any, zoneIndex: number) => {
//         const isActive = zoneIndex === currentZone;
//         const isCompleted = completedZones.includes(zone.id);
//         const radius = 45 - zoneIndex * 12;
//         const animationDuration = 40 + zoneIndex * 15;

//         return (
//           <motion.div
//             key={zone.id}
//             className="absolute inset-0"
//             style={{
//               padding: `${50 - radius}%`,
//             }}
//             animate={{
//               rotate: zoneIndex % 2 === 0 ? 360 : -360,
//             }}
//             transition={{
//               duration: animationDuration,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           >
//             {/* Zone Ring */}
//             <div
//               className={`absolute inset-0 rounded-full border-2 transition-all ${
//                 isActive
//                   ? "border-opacity-80 shadow-lg"
//                   : isCompleted
//                   ? "border-opacity-40"
//                   : "border-opacity-20"
//               }`}
//               style={{
//                 borderColor: zone.ringColor,
//                 boxShadow: isActive ? `0 0 30px ${zone.ringColor}40` : "none",
//               }}
//             />

//             {/* Technologies with Text Labels */}
//             {zone.technologies.map((tech: any) => {
//               const angle = (tech.angle * Math.PI) / 180;
//               const x = 50 + Math.cos(angle) * radius;
//               const y = 50 + Math.sin(angle) * radius;

//               return (
//                 <motion.div
//                   key={tech.name}
//                   className="absolute"
//                   style={{
//                     left: `${x}%`,
//                     top: `${y}%`,
//                     transform: "translate(-50%, -50%)",
//                   }}
//                   animate={{
//                     rotate: zoneIndex % 2 === 0 ? -360 : 360,
//                   }}
//                   transition={{
//                     duration: animationDuration,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                   onMouseEnter={() => setHoveredTech(tech.name)}
//                   onMouseLeave={() => setHoveredTech(null)}
//                 >
//                   <motion.div
//                     whileHover={{ scale: 1.15 }}
//                     className={`px-3 py-2 rounded-xl bg-gradient-to-br ${zone.color} flex items-center justify-center text-xs sm:text-sm font-semibold cursor-pointer shadow-lg border-2 border-white/30 backdrop-blur-sm whitespace-nowrap`}
//                   >
//                     {tech.label}
//                   </motion.div>

//                   {/* Tooltip */}
//                   <AnimatePresence>
//                     {hoveredTech === tech.name && (
//                       <motion.div
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: 10 }}
//                         className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-64 sm:w-72 p-4 bg-slate-900/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl z-50"
//                         style={{ pointerEvents: "none" }}
//                       >
//                         <div className="font-bold text-sm mb-1">{tech.name}</div>
//                         <div className="text-xs text-slate-400 mb-3">{tech.desc}</div>
//                         <div className="space-y-1.5">
//                           {tech.subItems.map((item: string, i: number) => (
//                             <div key={i} className="text-xs text-slate-300 flex items-start gap-2">
//                               <span className="text-blue-400 mt-0.5 flex-shrink-0">•</span>
//                               <span>{item}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         );
//       })}

//       {/* Center Achievement */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         <motion.div
//           animate={{
//             scale: [1, 1.05, 1],
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//           }}
//           className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
//         >
//           <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full blur-xl opacity-50 animate-pulse" />
//           <div className="relative w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-4xl sm:text-5xl md:text-6xl shadow-2xl border-4 border-white/30">
//             🎯
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }







"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Complete Zone Data Structure with Text Labels
const ZONES = [
  {
    id: 1,
    name: "🌱 Foundation Zone",
    subtitle: "Basic Building Blocks",
    color: "from-blue-500 to-cyan-500",
    ringColor: "#3b82f6",
    bgGlow: "bg-blue-500/20",
    technologies: [
      {
        name: "HTML5",
        angle: 0,
        label: "HTML Basics",
        desc: "Structure & Semantics",
        subItems: ["Basic tags: div, p, h1-h6", "Forms & inputs", "Semantic HTML5 elements"],
      },
      {
        name: "CSS3",
        angle: 45,
        label: "CSS Styling",
        desc: "Styling & Layout",
        subItems: ["Flexbox & Grid basics", "Animations & transitions", "Responsive design"],
      },
      {
        name: "JavaScript",
        angle: 90,
        label: "JS Programming",
        desc: "Core Programming",
        subItems: ["Variables & data types", "Functions & loops", "DOM manipulation"],
      },
      {
        name: "Git",
        angle: 135,
        label: "Version Control",
        desc: "Code Management",
        subItems: ["Commit & push workflow", "Branching basics", "Pull requests"],
      },
      {
        name: "Editor",
        angle: 180,
        label: "Code Editor",
        desc: "Development Environment",
        subItems: ["VS Code setup", "Shortcuts & snippets", "Debugging tools"],
      },
      {
        name: "CLI",
        angle: 225,
        label: "Terminal",
        desc: "Command Line",
        subItems: ["Basic commands: cd, ls, mkdir", "Package managers: npm", "Git commands"],
      },
      {
        name: "Responsive",
        angle: 270,
        label: "Mobile Design",
        desc: "Mobile First",
        subItems: ["Media queries", "Viewport meta tag", "Flexible layouts"],
      },
      {
        name: "DevTools",
        angle: 315,
        label: "Browser Tools",
        desc: "Debugging",
        subItems: ["Inspect element", "Console debugging", "Network tab analysis"],
      },
    ],
  },
  {
    id: 2,
    name: "🚀 Advanced Zone",
    subtitle: "Professional Development",
    color: "from-purple-500 to-pink-500",
    ringColor: "#a855f7",
    bgGlow: "bg-purple-500/20",
    technologies: [
      {
        name: "React",
        angle: 0,
        label: "React Library",
        desc: "UI Development",
        subItems: ["Components & Props", "useState & useEffect hooks", "Conditional rendering & lists"],
      },
      {
        name: "Next.js",
        angle: 36,
        label: "Next Framework",
        desc: "Full-stack React",
        subItems: ["App Router & file-based routing", "Server components", "API routes & middleware"],
      },
      {
        name: "TypeScript",
        angle: 72,
        label: "Type Safety",
        desc: "Typed JavaScript",
        subItems: ["Interfaces & Types", "Generics & utility types", "Type inference & guards"],
      },
      {
        name: "Tailwind",
        angle: 108,
        label: "CSS Framework",
        desc: "Utility-First CSS",
        subItems: ["Responsive classes", "Custom themes & config", "Component patterns"],
      },
      {
        name: "Node.js",
        angle: 144,
        label: "Backend Runtime",
        desc: "Server-side JS",
        subItems: ["Event loop & async", "File system & streams", "NPM packages"],
      },
      {
        name: "Express",
        angle: 180,
        label: "Web Server",
        desc: "Backend Framework",
        subItems: ["Routes & controllers", "Middleware chain", "Error handling"],
      },
      {
        name: "MongoDB",
        angle: 216,
        label: "Database",
        desc: "NoSQL Storage",
        subItems: ["CRUD operations", "Schema design with Mongoose", "Aggregation pipelines"],
      },
      {
        name: "APIs",
        angle: 252,
        label: "REST APIs",
        desc: "Backend Communication",
        subItems: ["HTTP methods & status codes", "Authentication & JWT", "API documentation"],
      },
      {
        name: "Testing",
        angle: 288,
        label: "Unit Testing",
        desc: "Code Quality",
        subItems: ["Writing test cases", "Mocking & spying", "Coverage reports"],
      },
      {
        name: "State",
        angle: 324,
        label: "State Management",
        desc: "Global State",
        subItems: ["Redux/Zustand patterns", "Actions & reducers", "Context API"],
      },
    ],
  },
  {
    id: 3,
    name: "👑 Expert Zone",
    subtitle: "Full-Stack Mastery",
    color: "from-orange-500 to-red-500",
    ringColor: "#f97316",
    bgGlow: "bg-orange-500/20",
    technologies: [
      {
        name: "Architecture",
        angle: 0,
        label: "System Design",
        desc: "Scalable Systems",
        subItems: ["Scalability patterns", "Load balancing", "Database sharding & replication"],
      },
      {
        name: "Microservices",
        angle: 30,
        label: "Microservices",
        desc: "Distributed Systems",
        subItems: ["Service discovery & mesh", "API Gateway patterns", "Inter-service communication"],
      },
      {
        name: "Docker",
        angle: 60,
        label: "Containers",
        desc: "Containerization",
        subItems: ["Dockerfile & image building", "Docker Compose", "Container networking"],
      },
      {
        name: "Kubernetes",
        angle: 90,
        label: "Orchestration",
        desc: "Container Management",
        subItems: ["Pods, Services & Deployments", "Auto-scaling & load balancing", "ConfigMaps & Secrets"],
      },
      {
        name: "Cloud",
        angle: 120,
        label: "Cloud Services",
        desc: "AWS/Azure/GCP",
        subItems: ["EC2, S3, Lambda", "RDS & DynamoDB", "CloudFront & Route53"],
      },
      {
        name: "GraphQL",
        angle: 150,
        label: "GraphQL",
        desc: "Modern APIs",
        subItems: ["Schema & resolvers", "Queries & mutations", "Apollo Server/Client"],
      },
      {
        name: "WebSocket",
        angle: 180,
        label: "Real-time",
        desc: "Live Data",
        subItems: ["Socket.io implementation", "Real-time chat & notifications", "Connection management"],
      },
      {
        name: "Cache",
        angle: 210,
        label: "Caching",
        desc: "Performance Layer",
        subItems: ["Redis data caching", "Session management", "Pub/Sub patterns"],
      },
      {
        name: "CI/CD",
        angle: 240,
        label: "DevOps",
        desc: "Automation",
        subItems: ["GitHub Actions & Jenkins", "Automated testing & deployment", "Blue-green deployments"],
      },
      {
        name: "Security",
        angle: 270,
        label: "Security",
        desc: "Auth & Protection",
        subItems: ["OAuth 2.0 & JWT", "CORS & CSRF protection", "Encryption & hashing"],
      },
      {
        name: "Performance",
        angle: 300,
        label: "Optimization",
        desc: "Speed & Efficiency",
        subItems: ["Code splitting & lazy loading", "CDN & caching strategies", "Database query optimization"],
      },
      {
        name: "Monitoring",
        angle: 330,
        label: "Monitoring",
        desc: "Observability",
        subItems: ["Prometheus & Grafana", "Error tracking: Sentry", "Logging: ELK stack"],
      },
    ],
  },
];

const ACHIEVEMENT_POINTS = [
  {
    zone: 1,
    label: "Foundation Master",
    description: "Core web development skills acquired! Ready to build websites.",
    emoji: "🎯",
  },
  {
    zone: 2,
    label: "Advanced Developer",
    description: "Building complex full-stack applications with modern frameworks!",
    emoji: "💪",
  },
  {
    zone: 3,
    label: "Full-Stack Expert",
    description: "Master architect! Ready to design and scale production systems.",
    emoji: "👑",
  },
];

export default function FeaturePlanetPage() {
  const [currentZone, setCurrentZone] = useState(0);
  const [completedZones, setCompletedZones] = useState<number[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const handleZoneComplete = () => {
    if (currentZone < ZONES.length && !completedZones.includes(ZONES[currentZone].id)) {
      setCompletedZones([...completedZones, ZONES[currentZone].id]);
      setShowCelebration(true);
      setTimeout(() => {
        setShowCelebration(false);
        if (currentZone < ZONES.length - 1) {
          setCurrentZone(currentZone + 1);
        }
      }, 2500);
    }
  };

  const progress = (completedZones.length / ZONES.length) * 100;
  const allCompleted = completedZones.length === ZONES.length;

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main Content - NO NAVBAR */}
      <div className="pt-8 sm:pt-12 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Intro Section with Back Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="flex justify-end mb-4">
              <Link
                href="/"
                className="px-4 py-2 text-sm bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition"
              >
                ← Back to Home
              </Link>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                Journey to Full-Stack Mastery
              </span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mb-6">
              Navigate through three progressive zones — from foundation to expert level. Each zone unlocks new
              skills and brings you closer to becoming a complete full-stack developer! 🎯
            </p>

            {/* Progress Bar */}
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-400">Progress</span>
                <span className="text-sm font-semibold text-white">{Math.round(progress)}%</span>
              </div>
              <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden border border-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Circular Zones */}
          <CircularZones
            zones={ZONES}
            currentZone={currentZone}
            completedZones={completedZones}
            hoveredTech={hoveredTech}
            setHoveredTech={setHoveredTech}
          />

          {/* @iBzA Vision Section – inspired by your logo */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 sm:mt-20 rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/80 via-slate-950/90 to-slate-900/80 shadow-[0_0_60px_rgba(15,23,42,0.9)] overflow-hidden"
          >
            {/* Metallic diagonal ribbons like logo */}
            <div className="relative">
              <div className="absolute -top-24 -left-24 w-72 h-72 rotate-[-35deg] bg-gradient-to-r from-slate-300 to-slate-600 opacity-[0.15]" />
              <div className="absolute -bottom-32 -right-10 w-80 h-80 rotate-[40deg] bg-gradient-to-r from-slate-200 to-slate-500 opacity-[0.12]" />
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 right-10 flex gap-3 opacity-60">
                  <div className="w-7 h-7 border border-slate-500 rounded-sm rotate-[-10deg]" />
                  <div className="w-7 h-7 border border-slate-500 rounded-sm rotate-[-10deg]" />
                  <div className="w-7 h-7 border border-slate-500 rounded-sm rotate-[-10deg]" />
                </div>
                <div className="absolute bottom-10 left-10 flex gap-3 opacity-60">
                  <div className="w-7 h-7 border border-slate-500 rounded-sm rotate-[10deg]" />
                  <div className="w-7 h-7 border border-slate-500 rounded-sm rotate-[10deg]" />
                  <div className="w-7 h-7 border border-slate-500 rounded-sm rotate-[10deg]" />
                </div>
              </div>

              <div className="relative px-6 sm:px-10 lg:px-14 py-10 sm:py-14 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-center">
                  {/* Left: Text + Feature Story */}
                  <div>
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-600/70 backdrop-blur-md mb-5">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-slate-300">
                        @iBzA • THELARAIB UNIVERSE
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-5">
                      <span className="bg-gradient-to-r from-slate-200 via-sky-400 to-slate-50 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.45)]">
                        Designing a different kind of digital world.
                      </span>
                    </h3>

                    <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
                      The <span className="text-sky-400 font-semibold">@iBzA</span> identity is built like your logo — sharp metallic edges, deep midnight gradients and a calm futuristic confidence. 
                      It is not just a brand name; it is a personal statement that every interface, every API and every workflow can feel engineered, deliberate and slightly ahead of its time.
                    </p>

                    <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
                      The blue‑chrome styling reflects an ecosystem where logic and aesthetics are in balance: premium feeling surfaces on top, powerful open‑source engines inside. 
                      Every feature imagined in this page — from the learning planets to the expert zone — is a small preview of the kind of modular platforms that @iBzA aims to deliver for real products.
                    </p>

                    <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
                      The long‑term plan is simple but bold: build an application universe where dashboards, automation tools, analytics layers and creative utilities plug together like constellations. 
                      A place where clients do not just “use software”, they step into a tailored environment that matches their pace, philosophy and ambition.
                    </p>

                    {/* Three metallic feature bullets */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-8">
                      {[
                        {
                          title: "Metallic UI DNA",
                          desc: "Clean lines, layered diagonals and glass‑metal depth inspired directly from the @iBzA logo.",
                        },
                        {
                          title: "Open‑Source Core",
                          desc: "FOSS‑first mindset – from infra to design systems, everything stays forkable and extensible.",
                        },
                        {
                          title: "Cloud Native Vision",
                          desc: "Multi‑tenant, scalable setups ready to live on modern cloud & edge infrastructure.",
                        },
                      ].map((item, i) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * i }}
                          className="relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/70 px-4 py-4 text-left"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-slate-100/5 via-slate-50/0 to-sky-500/10 opacity-80" />
                          <div className="relative">
                            <h4 className="text-sm sm:text-base font-semibold text-slate-100 mb-1.5">
                              {item.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Mini vision line */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
                        The dream is to see @iBzA evolve from a logo on a screen to a full ecosystem of tools where developers, founders and brands feel like they are logging into a private space station – built by a developer who truly loves debugging reality.
                      </p>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-sky-300 font-semibold">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/20 border border-sky-400/40 text-[11px]">
                          ➤
                        </span>
                        <span>“Build a world, not just projects.”</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Logo Card */}
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-br from-sky-400/50 via-slate-200/40 to-slate-50/10 rounded-3xl blur-xl opacity-70" />
                    <div className="relative rounded-3xl bg-slate-900/90 border border-slate-500/70 overflow-hidden shadow-[0_0_40px_rgba(56,189,248,0.5)]">
                      {/* Top metallic bar */}
                      <div className="h-10 bg-gradient-to-r from-slate-300 via-slate-500 to-slate-800 border-b border-slate-600/70 flex items-center justify-between px-4">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span className="w-2 h-2 rounded-full bg-yellow-400/80" />
                          <span className="w-2 h-2 rounded-full bg-red-400/80" />
                        </div>
                        <span className="text-[11px] tracking-[0.25em] uppercase text-slate-900/80 font-semibold">
                          @iBzA • CONTROL PANEL
                        </span>
                        <span className="text-[10px] text-slate-900/70 font-semibold">v0.1</span>
                      </div>

                      <div className="p-5 sm:p-6 space-y-4">
                        {/* Logo preview – you can put your image in /public/logoo.jpg */}
                        <div className="relative rounded-2xl bg-gradient-to-br from-slate-200 via-slate-400 to-slate-900 border border-slate-500/60 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-slate-900/10 to-slate-900/70" />
                          <div className="relative aspect-[4/2] w-full flex items-center justify-center px-4">
                            <Image
                              src="/logoo.jpg"
                              alt="@iBzA metallic logo"
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>

                        {/* Bottom info */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                          <div className="space-y-1">
                            <p className="text-slate-400 uppercase tracking-[0.2em] text-[10px]">
                              BRAND CODE
                            </p>
                            <p className="font-semibold text-slate-100">
                              @iBzA / thelaraib<span className="text-sky-400">.space</span>
                            </p>
                            <p className="text-slate-400 text-xs">
                              A premium, metallic identity crafted for futuristic web products and bold experiments.
                            </p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-slate-400 uppercase tracking-[0.2em] text-[10px]">
                              APPLICATION VISION
                            </p>
                            <p className="text-slate-300 text-xs">
                              Multiple apps orbiting one core: dashboards, code tools, automation flows and creative AI utilities — all under the same chrome blue banner.
                            </p>
                          </div>
                        </div>

                        <div className="pt-2 flex flex-wrap gap-2 text-[11px] sm:text-xs">
                          <span className="px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/50 text-sky-200">
                            Metallic UI
                          </span>
                          <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-500/70 text-slate-200">
                            Open Source Friendly
                          </span>
                          <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/50 text-blue-100">
                            Cloud Native
                          </span>
                          <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/50 text-emerald-100">
                            AI‑Powered Experiences
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Achievement Cards */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {ACHIEVEMENT_POINTS.map((achievement, index) => (
              <motion.div
                key={achievement.zone}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-6 rounded-2xl border transition-all ${
                  completedZones.includes(achievement.zone)
                    ? "bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30"
                    : "bg-white/5 border-white/10"
                }`}
              >
                <div className="text-4xl mb-3">{achievement.emoji}</div>
                <h3 className="text-lg font-semibold mb-2">{achievement.label}</h3>
                <p className="text-sm text-slate-400">{achievement.description}</p>
                {completedZones.includes(achievement.zone) && (
                  <div className="absolute top-4 right-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
                    >
                      ✓
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Action Button */}
          <div className="mt-12 text-center">
            {!allCompleted ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleZoneComplete}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition"
              >
                Complete Zone {currentZone + 1}
              </motion.button>
            ) : (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="inline-block px-6 sm:px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl font-bold text-lg sm:text-xl"
              >
                🎉 Journey Complete! You're a Full-Stack Expert! 🎉
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Celebration Modal */}
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl border border-white/20 text-center max-w-md w-full"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="text-6xl mb-4"
              >
                {ACHIEVEMENT_POINTS[currentZone]?.emoji}
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">{ACHIEVEMENT_POINTS[currentZone]?.label}</h3>
              <p className="text-slate-400">{ACHIEVEMENT_POINTS[currentZone]?.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

// Circular Zones Component with Text Labels
function CircularZones({ zones, currentZone, completedZones, hoveredTech, setHoveredTech }: any) {
  return (
    <div className="relative w-full max-w-5xl mx-auto aspect-square">
      {zones.map((zone: any, zoneIndex: number) => {
        const radius = 45 - zoneIndex * 12;
        const animationDuration = 40 + zoneIndex * 15;

        return (
          <motion.div
            key={zone.id}
            className="absolute inset-0"
            style={{
              padding: `${50 - radius}%`,
            }}
            animate={{
              rotate: zoneIndex % 2 === 0 ? 360 : -360,
            }}
            transition={{
              duration: animationDuration,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Zone Ring */}
            <div
              className={`absolute inset-0 rounded-full border-2 transition-all ${
                zoneIndex === currentZone
                  ? "border-opacity-80 shadow-lg"
                  : completedZones.includes(zone.id)
                  ? "border-opacity-40"
                  : "border-opacity-20"
              }`}
              style={{
                borderColor: zone.ringColor,
                boxShadow:
                  zoneIndex === currentZone ? `0 0 30px ${zone.ringColor}40` : "none",
              }}
            />

            {/* Technologies with Text Labels */}
            {zone.technologies.map((tech: any) => {
              const angle = (tech.angle * Math.PI) / 180;
              const x = 50 + Math.cos(angle) * radius;
              const y = 50 + Math.sin(angle) * radius;

              return (
                <motion.div
                  key={tech.name}
                  className="absolute"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{
                    rotate: zoneIndex % 2 === 0 ? -360 : 360,
                  }}
                  transition={{
                    duration: animationDuration,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className={`px-3 py-2 rounded-xl bg-gradient-to-br ${zone.color} flex items-center justify-center text-xs sm:text-sm font-semibold cursor-pointer shadow-lg border-2 border-white/30 backdrop-blur-sm whitespace-nowrap`}
                  >
                    {tech.label}
                  </motion.div>

                  {/* Tooltip */}
                  <AnimatePresence>
                    {hoveredTech === tech.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-64 sm:w-72 p-4 bg-slate-900/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl z-50"
                        style={{ pointerEvents: "none" }}
                      >
                        <div className="font-bold text-sm mb-1">{tech.name}</div>
                        <div className="text-xs text-slate-400 mb-3">{tech.desc}</div>
                        <div className="space-y-1.5">
                          {tech.subItems.map((item: string, i: number) => (
                            <div key={i} className="text-xs text-slate-300 flex items-start gap-2">
                              <span className="text-blue-400 mt-0.5 flex-shrink-0">•</span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        );
      })}

      {/* Center Achievement */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full blur-xl opacity-50 animate-pulse" />
          <div className="relative w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-4xl sm:text-5xl md:text-6xl shadow-2xl border-4 border-white/30">
            🎯
          </div>
        </motion.div>
      </div>
    </div>
  );
}


















// "use client";

// import { useState } from "react";
// import Link from "next/link";

// type ZoneItem = {
//   id: string;
//   label: string;
//   angle: number;
// };

// const ZONE_1_ITEMS: ZoneItem[] = [
//   { id: "html-css", label: "HTML & CSS", angle: 0 },
//   { id: "javascript", label: "JavaScript", angle: 45 },
//   { id: "git", label: "Git & GitHub", angle: 90 },
//   { id: "responsive", label: "Responsive Design", angle: 135 },
//   { id: "tailwind", label: "Tailwind CSS", angle: 180 },
//   { id: "figma", label: "Figma", angle: 225 },
//   { id: "accessibility", label: "Accessibility", angle: 270 },
//   { id: "seo", label: "SEO Basics", angle: 315 },
// ];

// const ZONE_2_ITEMS: ZoneItem[] = [
//   { id: "react", label: "React.js", angle: 22.5 },
//   { id: "nextjs", label: "Next.js", angle: 67.5 },
//   { id: "typescript", label: "TypeScript", angle: 112.5 },
//   { id: "nodejs", label: "Node.js", angle: 157.5 },
//   { id: "mongodb", label: "MongoDB", angle: 202.5 },
//   { id: "postgresql", label: "PostgreSQL", angle: 247.5 },
//   { id: "api-design", label: "API Design", angle: 292.5 },
//   { id: "state-mgmt", label: "State Management", angle: 337.5 },
// ];

// const ZONE_3_ITEMS: ZoneItem[] = [
//   { id: "rust", label: "Rust", angle: 0 },
//   { id: "golang", label: "Go", angle: 40 },
//   { id: "python", label: "Python & AI", angle: 80 },
//   { id: "cloud", label: "Cloud (AWS/GCP)", angle: 120 },
//   { id: "k8s", label: "Kubernetes", angle: 160 },
//   { id: "microservices", label: "Microservices", angle: 200 },
//   { id: "blockchain", label: "Blockchain", angle: 240 },
//   { id: "webassembly", label: "WebAssembly", angle: 280 },
//   { id: "edge-computing", label: "Edge Computing", angle: 320 },
// ];

// export default function Page() {
//   const [hoveredZone, setHoveredZone] = useState<number | null>(null);

//   return (
//     <main className="relative min-h-screen bg-[#070A0F] text-slate-200 overflow-hidden">
//       <DecorativeBackground />
//       <div className="pt-10 sm:pt-14" />

//       {/* HERO SECTION */}
//       <section className="mx-auto max-w-7xl px-6 pb-8">
//         <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
//           <div>
//             <Badge>Feature Roadmap</Badge>
//             <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
//               Journey to Ibiza 🏝️
//             </h1>
//             <p className="mt-3 max-w-2xl text-slate-400">
//               Har zone ek level hai — foundation se leke mastery tak. Technologies ko
//               master karte hue, main apne dream destination{" "}
//               <span className="font-semibold text-fuchsia-400">Ibiza</span> tak
//               pahunchne ka plan. Tick-tack-tick-tack, zone by zone! 🚀
//             </p>
//           </div>

//           <div className="flex gap-3">
//             <Link
//               href="/"
//               className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-100 hover:bg-white/10 transition"
//             >
//               ← Back Home
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* CIRCULAR ZONES */}
//       <section className="mx-auto max-w-7xl px-6 pb-20">
//         <div className="relative mx-auto aspect-square w-full max-w-[min(90vw,900px)]">
//           {/* Zone 3 - Outermost (Advanced/Expert) */}
//           <div
//             className="absolute inset-0 animate-[spin_60s_linear_infinite]"
//             onMouseEnter={() => setHoveredZone(3)}
//             onMouseLeave={() => setHoveredZone(null)}
//           >
//             <svg className="h-full w-full" viewBox="0 0 400 400">
//               <circle
//                 cx="200"
//                 cy="200"
//                 r="190"
//                 fill="none"
//                 stroke="url(#gradient3)"
//                 strokeWidth="2"
//                 className="opacity-60"
//               />
//               <defs>
//                 <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%">
//                   <stop offset="0%" stopColor="#14b8a6" />
//                   <stop offset="50%" stopColor="#8b5cf6" />
//                   <stop offset="100%" stopColor="#ec4899" />
//                 </linearGradient>
//               </defs>
//             </svg>
//             {ZONE_3_ITEMS.map((item) => (
//               <ZoneLabel key={item.id} item={item} radius={190} zoneIndex={3} />
//             ))}
//           </div>

//           {/* Zone 2 - Middle (Intermediate) */}
//           <div
//             className="absolute inset-[15%] animate-[spin_40s_linear_infinite_reverse]"
//             onMouseEnter={() => setHoveredZone(2)}
//             onMouseLeave={() => setHoveredZone(null)}
//           >
//             <svg className="h-full w-full" viewBox="0 0 400 400">
//               <circle
//                 cx="200"
//                 cy="200"
//                 r="190"
//                 fill="none"
//                 stroke="url(#gradient2)"
//                 strokeWidth="2"
//                 className="opacity-70"
//               />
//               <defs>
//                 <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%">
//                   <stop offset="0%" stopColor="#3b82f6" />
//                   <stop offset="100%" stopColor="#a855f7" />
//                 </linearGradient>
//               </defs>
//             </svg>
//             {ZONE_2_ITEMS.map((item) => (
//               <ZoneLabel key={item.id} item={item} radius={190} zoneIndex={2} />
//             ))}
//           </div>

//           {/* Zone 1 - Inner (Foundation) */}
//           <div
//             className="absolute inset-[30%] animate-[spin_25s_linear_infinite]"
//             onMouseEnter={() => setHoveredZone(1)}
//             onMouseLeave={() => setHoveredZone(null)}
//           >
//             <svg className="h-full w-full" viewBox="0 0 400 400">
//               <circle
//                 cx="200"
//                 cy="200"
//                 r="190"
//                 fill="none"
//                 stroke="url(#gradient1)"
//                 strokeWidth="2"
//                 className="opacity-80"
//               />
//               <defs>
//                 <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%">
//                   <stop offset="0%" stopColor="#f59e0b" />
//                   <stop offset="100%" stopColor="#ef4444" />
//                 </linearGradient>
//               </defs>
//             </svg>
//             {ZONE_1_ITEMS.map((item) => (
//               <ZoneLabel key={item.id} item={item} radius={190} zoneIndex={1} />
//             ))}
//           </div>

//           {/* CENTER - IBIZA ACHIEVEMENT */}
//           <div className="absolute inset-[42%] flex items-center justify-center">
//             <div className="relative">
//               <div className="absolute inset-0 animate-ping rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-30 blur-xl" />
//               <div className="relative rounded-full border-2 border-white/20 bg-gradient-to-br from-fuchsia-600/40 via-pink-600/40 to-cyan-600/40 px-8 py-6 text-center backdrop-blur-sm">
//                 <div className="text-4xl font-bold text-white">🏝️</div>
//                 <div className="mt-2 text-lg font-bold text-white">Ibiza</div>
//                 <div className="text-xs text-slate-200">Achievement</div>
//               </div>
//             </div>
//           </div>

//           {/* ARROWS POINTING INWARD */}
//           <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 400 400">
//             {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
//               const rad = (angle * Math.PI) / 180;
//               const startX = 200 + Math.cos(rad) * 195;
//               const startY = 200 + Math.sin(rad) * 195;
//               const endX = 200 + Math.cos(rad) * 175;
//               const endY = 200 + Math.sin(rad) * 175;

//               return (
//                 <g key={i}>
//                   <line
//                     x1={startX}
//                     y1={startY}
//                     x2={endX}
//                     y2={endY}
//                     stroke="#94a3b8"
//                     strokeWidth="1.5"
//                     opacity="0.4"
//                     markerEnd="url(#arrowhead)"
//                   />
//                 </g>
//               );
//             })}
//             <defs>
//               <marker
//                 id="arrowhead"
//                 markerWidth="10"
//                 markerHeight="10"
//                 refX="5"
//                 refY="3"
//                 orient="auto"
//               >
//                 <polygon points="0 0, 6 3, 0 6" fill="#94a3b8" opacity="0.6" />
//               </marker>
//             </defs>
//           </svg>
//         </div>

//         {/* LEGEND */}
//         <div className="mt-12 flex flex-wrap justify-center gap-6">
//           <LegendItem color="from-amber-500 to-red-500" label="Zone 1: Foundation" />
//           <LegendItem color="from-blue-500 to-purple-500" label="Zone 2: Intermediate" />
//           <LegendItem color="from-teal-500 to-pink-500" label="Zone 3: Advanced" />
//         </div>
//       </section>

//       {/* ZONE INFO */}
//       {hoveredZone && (
//         <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 animate-[fadeIn_0.2s_ease-in]">
//           <div className="rounded-2xl border border-white/20 bg-slate-900/90 px-6 py-3 backdrop-blur-xl">
//             <div className="text-center text-sm font-medium text-white">
//               {hoveredZone === 1 && "🔥 Zone 1: Foundation Technologies"}
//               {hoveredZone === 2 && "⚡ Zone 2: Intermediate Stack"}
//               {hoveredZone === 3 && "🚀 Zone 3: Advanced Mastery"}
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }

// /* --- COMPONENTS --- */

// function ZoneLabel({
//   item,
//   radius,
//   zoneIndex,
// }: {
//   item: ZoneItem;
//   radius: number;
//   zoneIndex: number;
// }) {
//   const rad = (item.angle * Math.PI) / 180;
//   const x = 50 + Math.cos(rad) * 47.5; // percentage
//   const y = 50 + Math.sin(rad) * 47.5;

//   const colors = {
//     1: "bg-gradient-to-r from-amber-500/20 to-red-500/20 text-amber-200 border-amber-500/30",
//     2: "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 border-blue-500/30",
//     3: "bg-gradient-to-r from-teal-500/20 to-pink-500/20 text-teal-200 border-teal-500/30",
//   };

//   return (
//     <div
//       className="absolute -translate-x-1/2 -translate-y-1/2 animate-[reverse-spin_60s_linear_infinite]"
//       style={{
//         left: `${x}%`,
//         top: `${y}%`,
//       }}
//     >
//       <div
//         className={`group cursor-pointer rounded-lg border px-3 py-1.5 text-xs font-medium backdrop-blur-sm transition hover:scale-110 ${
//           colors[zoneIndex as keyof typeof colors]
//         }`}
//       >
//         <div className="whitespace-nowrap">{item.label}</div>
//         <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-white/10 to-transparent opacity-0 blur transition group-hover:opacity-100" />
//       </div>
//     </div>
//   );
// }

// function Badge({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur">
//       <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-400" />
//       {children}
//     </div>
//   );
// }

// function LegendItem({ color, label }: { color: string; label: string }) {
//   return (
//     <div className="flex items-center gap-2">
//       <div className={`h-3 w-12 rounded-full bg-gradient-to-r ${color}`} />
//       <span className="text-sm text-slate-300">{label}</span>
//     </div>
//   );
// }

// function DecorativeBackground() {
//   return (
//     <div className="pointer-events-none fixed inset-0 -z-10">
//       <div className="absolute left-1/2 top-[-120px] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-600/25 via-fuchsia-500/15 to-cyan-500/25 blur-3xl" />
//       <div
//         className="absolute inset-0 opacity-[0.06]"
//         style={{
//           backgroundImage:
//             "linear-gradient(to right, rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.2) 1px, transparent 1px)",
//           backgroundSize: "48px 48px",
//         }}
//       />
//     </div>
//   );
// }
