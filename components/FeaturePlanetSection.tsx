"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const ZONES = [
  {
    id: 1,
    name: "Foundation Zone",
    eyebrow: "Layer 01",
    subtitle: "Basic Building Blocks",
    ringColor: "#60a5fa",
    aura: "from-sky-500/30 via-cyan-400/10 to-transparent",
    chip: "bg-sky-500/12 border-sky-400/25 text-sky-200",
    technologies: [
      { name: "HTML5", angle: 0, label: "HTML Basics", desc: "Structure & semantics", subItems: ["Tags & content flow", "Forms & inputs", "Semantic HTML"] },
      { name: "CSS3", angle: 45, label: "CSS Styling", desc: "Layout & visual systems", subItems: ["Flexbox & Grid", "Responsive design", "Transitions"] },
      { name: "JavaScript", angle: 90, label: "JS Core", desc: "Programming logic", subItems: ["Variables & data", "Functions & loops", "DOM updates"] },
      { name: "Git", angle: 135, label: "Versioning", desc: "Code management", subItems: ["Commit workflow", "Branches", "Pull requests"] },
      { name: "Editor", angle: 180, label: "Editor", desc: "Development setup", subItems: ["VS Code setup", "Extensions", "Debug flow"] },
      { name: "CLI", angle: 225, label: "Terminal", desc: "Command line usage", subItems: ["cd / ls / mkdir", "npm basics", "Git commands"] },
      { name: "Responsive", angle: 270, label: "Responsive", desc: "Mobile-first thinking", subItems: ["Breakpoints", "Fluid layouts", "Viewport"] },
      { name: "DevTools", angle: 315, label: "DevTools", desc: "Browser debugging", subItems: ["Inspect", "Console", "Network tab"] },
    ],
  },
  {
    id: 2,
    name: "Advanced Zone",
    eyebrow: "Layer 02",
    subtitle: "Professional Development",
    ringColor: "#a78bfa",
    aura: "from-violet-500/30 via-fuchsia-400/10 to-transparent",
    chip: "bg-violet-500/12 border-violet-400/25 text-violet-200",
    technologies: [
      { name: "React", angle: 0, label: "React", desc: "Component-driven UI", subItems: ["Props & components", "Hooks", "Rendering patterns"] },
      { name: "Next.js", angle: 36, label: "Next.js", desc: "Production React framework", subItems: ["App Router", "SSR / SSG", "Route structure"] },
      { name: "TypeScript", angle: 72, label: "TypeScript", desc: "Type-safe apps", subItems: ["Types & interfaces", "Guards", "Utility types"] },
      { name: "Tailwind", angle: 108, label: "Tailwind", desc: "Utility-first styling", subItems: ["Responsive utilities", "Tokens", "Component patterns"] },
      { name: "Node.js", angle: 144, label: "Node.js", desc: "Runtime layer", subItems: ["Async patterns", "Modules", "Package ecosystem"] },
      { name: "Express", angle: 180, label: "Express", desc: "Backend routing", subItems: ["Routes", "Middleware", "Error handling"] },
      { name: "MongoDB", angle: 216, label: "MongoDB", desc: "NoSQL storage", subItems: ["CRUD", "Schemas", "Aggregation"] },
      { name: "APIs", angle: 252, label: "REST APIs", desc: "System communication", subItems: ["Methods", "Auth", "Documentation"] },
      { name: "Testing", angle: 288, label: "Testing", desc: "Confidence in code", subItems: ["Test cases", "Mocks", "Coverage"] },
      { name: "State", angle: 324, label: "State", desc: "App state architecture", subItems: ["Context", "Redux/Zustand", "Data flow"] },
    ],
  },
  {
    id: 3,
    name: "Expert Zone",
    eyebrow: "Layer 03",
    subtitle: "Full-Stack Mastery",
    ringColor: "#fb923c",
    aura: "from-orange-500/30 via-amber-400/10 to-transparent",
    chip: "bg-orange-500/12 border-orange-400/25 text-orange-200",
    technologies: [
      { name: "Architecture", angle: 0, label: "Architecture", desc: "Scalable systems", subItems: ["Scalability", "Separation", "Reliability"] },
      { name: "Microservices", angle: 30, label: "Services", desc: "Distributed apps", subItems: ["Gateway", "Service split", "Communication"] },
      { name: "Docker", angle: 60, label: "Docker", desc: "Containers", subItems: ["Dockerfile", "Compose", "Images"] },
      { name: "Kubernetes", angle: 90, label: "K8s", desc: "Orchestration", subItems: ["Pods", "Deployments", "Scaling"] },
      { name: "Cloud", angle: 120, label: "Cloud", desc: "Cloud infrastructure", subItems: ["Compute", "Storage", "Edge delivery"] },
      { name: "GraphQL", angle: 150, label: "GraphQL", desc: "Flexible APIs", subItems: ["Schema", "Resolvers", "Queries"] },
      { name: "WebSocket", angle: 180, label: "Realtime", desc: "Live communication", subItems: ["Sockets", "Presence", "Events"] },
      { name: "Cache", angle: 210, label: "Caching", desc: "Performance layer", subItems: ["Redis", "Sessions", "Pub/Sub"] },
      { name: "CI/CD", angle: 240, label: "CI/CD", desc: "Delivery automation", subItems: ["Pipelines", "Tests", "Deploys"] },
      { name: "Security", angle: 270, label: "Security", desc: "Protection systems", subItems: ["JWT", "CORS", "Encryption"] },
      { name: "Performance", angle: 300, label: "Performance", desc: "Optimization mindset", subItems: ["Lazy loading", "Caching", "Profiling"] },
      { name: "Monitoring", angle: 330, label: "Monitoring", desc: "Observability", subItems: ["Errors", "Logging", "Metrics"] },
    ],
  },
];

const ROADMAP = [
  {
    step: "01",
    title: "Discover the orbit",
    text: "Start with a clear system: what to learn, what to build, and what each layer unlocks next.",
  },
  {
    step: "02",
    title: "Build through repetition",
    text: "Practice in cycles. Each loop improves structure, confidence, and visual execution.",
  },
  {
    step: "03",
    title: "Ship polished systems",
    text: "Move from component thinking to product thinking with production-ready frontend decisions.",
  },
];

const ACHIEVEMENTS = [
  { zone: 1, emoji: "✦", title: "Foundation Master", description: "Core web thinking is stable and practical." },
  { zone: 2, emoji: "⬢", title: "Advanced Builder", description: "Modern app workflows and frontend systems are in place." },
  { zone: 3, emoji: "◎", title: "Expert Orbit", description: "You can architect, scale, and present systems with confidence." },
];

export default function FeaturePlanetPage() {
  const [currentZone, setCurrentZone] = useState(0);
  const [completedZones, setCompletedZones] = useState<number[]>([]);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);

  const progress = useMemo(
    () => (completedZones.length / ZONES.length) * 100,
    [completedZones]
  );

  const allCompleted = completedZones.length === ZONES.length;
  const activeZone = ZONES[currentZone];

  const handleZoneComplete = () => {
    if (currentZone < ZONES.length && !completedZones.includes(ZONES[currentZone].id)) {
      setCompletedZones((prev) => [...prev, ZONES[currentZone].id]);
      setShowCelebration(true);

      setTimeout(() => {
        setShowCelebration(false);
        if (currentZone < ZONES.length - 1) {
          setCurrentZone((prev) => prev + 1);
        }
      }, 2200);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06070a] text-white">
      <BackgroundAtmosphere activeZone={activeZone} />

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-16">
        <section className="mx-auto max-w-7xl pt-8 sm:pt-10 lg:pt-12">
          <div className="mb-10 flex items-center justify-between gap-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/70 backdrop-blur-xl transition hover:bg-white/[0.07] hover:text-white"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
              Back Home
            </Link>

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/8 px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-emerald-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              Live Orbit
            </div>
          </div>

          <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <p className="mb-5 text-[11px] uppercase tracking-[0.34em] text-white/45">
                Feature Planet / Immersive Learning System
              </p>

              <h1 className="max-w-5xl text-4xl font-semibold leading-[0.96] text-white sm:text-6xl lg:text-[6.2rem]">
                A rotating frontend universe built for movement, mastery, and modern product feel.
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                This page keeps the looping orbital energy of your current concept, but refines it into
                a more cinematic portfolio experience with cleaner hierarchy, stronger layout control,
                and immersive interaction pacing.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={handleZoneComplete}
                  className="inline-flex items-center rounded-full border border-white/15 bg-white px-6 py-3 text-xs font-medium uppercase tracking-[0.22em] text-black transition hover:scale-[1.02]"
                >
                  {!allCompleted ? `Complete Zone ${currentZone + 1}` : "All Zones Completed"}
                </button>

                <Link
                  href="/work"
                  className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 text-xs uppercase tracking-[0.22em] text-white/72 backdrop-blur-xl transition hover:bg-white/[0.07] hover:text-white"
                >
                  Explore Work
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.9 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-2xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">Progress Signal</p>
                <span className="text-sm font-medium text-white">{Math.round(progress)}%</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-white/8">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-sky-400 via-violet-400 to-orange-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.7 }}
                />
              </div>

              <div className="mt-6 grid gap-3">
                {ZONES.map((zone, index) => {
                  const isCurrent = index === currentZone;
                  const isDone = completedZones.includes(zone.id);

                  return (
                    <div
                      key={zone.id}
                      className={`rounded-2xl border px-4 py-4 transition ${
                        isCurrent
                          ? "border-white/18 bg-white/[0.06]"
                          : isDone
                          ? "border-emerald-400/20 bg-emerald-400/[0.06]"
                          : "border-white/8 bg-white/[0.02]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.28em] text-white/35">{zone.eyebrow}</p>
                          <h2 className="mt-1 text-base font-medium text-white">{zone.name}</h2>
                          <p className="mt-1 text-sm text-white/45">{zone.subtitle}</p>
                        </div>
                        <div
                          className={`mt-1 h-3 w-3 rounded-full ${
                            isDone ? "bg-emerald-400" : isCurrent ? "bg-white" : "bg-white/20"
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.03] p-4 sm:p-6 lg:p-8 backdrop-blur-2xl"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_58%)]" />
              <div className="relative">
                <CircularZones
                  zones={ZONES}
                  currentZone={currentZone}
                  completedZones={completedZones}
                  hoveredTech={hoveredTech}
                  setHoveredTech={setHoveredTech}
                />
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.8 }}
              className="space-y-6"
            >
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-2xl">
                <div className="border-b border-white/8 px-5 py-4">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">Active Layer</p>
                </div>

                <div className="p-5">
                  <div className={`inline-flex rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.24em] ${activeZone.chip}`}>
                    {activeZone.eyebrow}
                  </div>
                  <h3 className="mt-4 text-2xl font-medium text-white">{activeZone.name}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/55">{activeZone.subtitle}</p>

                  <div className="mt-6 grid gap-2">
                    {activeZone.technologies.slice(0, 5).map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3"
                      >
                        <span className="text-sm text-white/78">{item.label}</span>
                        <span className="text-[10px] uppercase tracking-[0.22em] text-white/35">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-2xl">
                <div className="aspect-[4/3] relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/[0.02] to-transparent" />
                  <Image
                    src="/images/iBzAthelaraib.png"
                    alt="iBzA brand artwork"
                    fill
                    className="object-contain p-8"
                  />
                </div>
                <div className="border-t border-white/8 p-5">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">Visual Identity</p>
                  <p className="mt-3 text-sm leading-7 text-white/58">
                    Metallic, controlled, and futuristic. This panel anchors the page so the motion-heavy
                    orbit still feels like part of a premium personal brand system.
                  </p>
                </div>
              </div>
            </motion.aside>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            {ROADMAP.map((item, index) => (
              <motion.article
                key={item.step}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.7 }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl"
              >
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/35">{item.step}</p>
                <h3 className="mt-4 text-2xl font-medium text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/58">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-7xl overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/[0.04] backdrop-blur-2xl">
          <div className="grid gap-10 px-6 py-8 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-10">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[11px] uppercase tracking-[0.34em] text-white/40">Feature Plane Statement</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight text-white sm:text-5xl">
                A page that feels like a system in motion, not just another section with cards.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/58 sm:text-base sm:leading-8">
                The goal is to keep your existing loop and energy while evolving the presentation into
                a more authored digital experience. The result should feel personal, high-end, and alive
                even when the content is technical.
              </p>
            </motion.div>

            <div className="grid gap-4">
              {ACHIEVEMENTS.map((item, index) => {
                const unlocked = completedZones.includes(item.zone);

                return (
                  <motion.div
                    key={item.zone}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.65 }}
                    className={`rounded-[1.75rem] border p-5 transition ${
                      unlocked
                        ? "border-emerald-400/18 bg-emerald-400/[0.07]"
                        : "border-white/10 bg-white/[0.03]"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-xl">
                        {item.emoji}
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white">{item.title}</h3>
                        <p className="mt-1 text-sm leading-7 text-white/55">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/72 p-4 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="w-full max-w-md rounded-[2rem] border border-white/10 bg-[#0d1016]/95 p-8 text-center shadow-2xl"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-4xl">
                {ACHIEVEMENTS[currentZone]?.emoji}
              </div>
              <h3 className="mt-5 text-2xl font-medium text-white">{ACHIEVEMENTS[currentZone]?.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/55">{ACHIEVEMENTS[currentZone]?.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function BackgroundAtmosphere({ activeZone }: { activeZone: (typeof ZONES)[number] }) {
  return (
    <div className="pointer-events-none fixed inset-0">
      <div className={`absolute inset-0 bg-gradient-to-b ${activeZone.aura}`} />
      <div className="absolute left-[8%] top-[10%] h-[22rem] w-[22rem] rounded-full bg-sky-500/10 blur-[120px]" />
      <div className="absolute bottom-[8%] right-[10%] h-[26rem] w-[26rem] rounded-full bg-violet-500/10 blur-[150px]" />
      <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-[180px]" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.09) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(circle at center, black 30%, transparent 90%)",
        }}
      />
    </div>
  );
}

function CircularZones({
  zones,
  currentZone,
  completedZones,
  hoveredTech,
  setHoveredTech,
}: {
  zones: typeof ZONES;
  currentZone: number;
  completedZones: number[];
  hoveredTech: string | null;
  setHoveredTech: (value: string | null) => void;
}) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-5xl">
      {zones.map((zone, zoneIndex) => {
        const radius = 43 - zoneIndex * 12;
        const animationDuration = 48 + zoneIndex * 16;

        return (
          <motion.div
            key={zone.id}
            className="absolute inset-0"
            style={{ padding: `${50 - radius}%` }}
            animate={{ rotate: zoneIndex % 2 === 0 ? 360 : -360 }}
            transition={{ duration: animationDuration, repeat: Infinity, ease: "linear" }}
          >
            <div
              className="absolute inset-0 rounded-full border transition-all duration-500"
              style={{
                borderColor: zone.ringColor,
                opacity: zoneIndex === currentZone ? 0.9 : completedZones.includes(zone.id) ? 0.45 : 0.2,
                boxShadow: zoneIndex === currentZone ? `0 0 50px ${zone.ringColor}22 inset, 0 0 30px ${zone.ringColor}22` : "none",
              }}
            />

            {zone.technologies.map((tech) => {
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
                  animate={{ rotate: zoneIndex % 2 === 0 ? -360 : 360 }}
                  transition={{ duration: animationDuration, repeat: Infinity, ease: "linear" }}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <motion.div
                    whileHover={{ scale: 1.07, y: -2 }}
                    className="cursor-pointer whitespace-nowrap rounded-full border border-white/14 bg-[#0d1016]/85 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-white/78 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-4 sm:text-[11px]"
                  >
                    {tech.label}
                  </motion.div>

                  <AnimatePresence>
                    {hoveredTech === tech.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 14, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        className="absolute left-1/2 top-full z-50 mt-3 w-64 -translate-x-1/2 rounded-[1.5rem] border border-white/10 bg-[#0d1016]/95 p-4 shadow-2xl backdrop-blur-2xl sm:w-72"
                        style={{ pointerEvents: "none" }}
                      >
                        <p className="text-sm font-medium text-white">{tech.name}</p>
                        <p className="mt-1 text-xs text-white/45">{tech.desc}</p>

                        <div className="mt-3 space-y-2">
                          {tech.subItems.map((item, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs leading-5 text-white/65">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/45" />
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

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/14 bg-white/[0.06] shadow-[0_0_60px_rgba(255,255,255,0.08)] backdrop-blur-2xl sm:h-36 sm:w-36 md:h-44 md:w-44"
        >
          <div className="absolute inset-3 rounded-full border border-white/10" />
          <div className="text-3xl text-white sm:text-5xl md:text-6xl">✦</div>
        </motion.div>
      </div>
    </div>
  );
}












