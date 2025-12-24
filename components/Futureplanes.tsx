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
            <div className="flex justify-between items-center mb-6">
              <Link
                href="/"
                className="px-5 py-2.5 text-sm bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 border border-slate-600/50 rounded-xl transition-all shadow-lg hover:shadow-xl backdrop-blur-sm flex items-center gap-2 group"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span>
                <span>Back to Reality</span>
              </Link>
              <div className="flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono text-emerald-300">LIVE SYSTEM</span>
              </div>
            </div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-sm mb-6">
              <span className="text-xs font-mono tracking-wider text-blue-300">DECENTRALIZED LEARNING PROTOCOL</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                Build The Impossible.
              </span>
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-slate-300">
              Journey from <span className="text-blue-400">Code</span> to <span className="text-purple-400">Architecture</span> to <span className="text-orange-400">Revolution</span>
            </h3>
            <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-4xl mx-auto mb-4 leading-relaxed">
              This isn't a tutorial. This is your <span className="text-blue-400 font-semibold">orbital trajectory</span> from foundation engineer to systems architect to <span className="text-orange-400 font-semibold">decentralized pioneer</span>. Three zones. Infinite possibilities. No permission needed.
            </p>
            <p className="text-slate-500 text-xs sm:text-sm max-w-2xl mx-auto mb-6 italic">
              "The best way to predict the future is to build it." — Every visionary who changed the game.
            </p>

            {/* Progress Bar */}
            <div className="max-w-md mx-auto mt-8">
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

          <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mt-20 rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900/90 overflow-hidden"
>
  <div className="px-6 sm:px-10 lg:px-14 py-12">
    {/* Header */}
    <div className="text-center mb-14">
      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
        <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
          @iBzA · One-Day Roadmap
        </span>
      </h3>
      <p className="text-slate-400 max-w-3xl mx-auto text-sm sm:text-base">
        A focused launch blueprint for building a FOSS-centric, secure and authentic social platform —
        designed to evolve from vision to Web3-ready ecosystem.
      </p>
    </div>

    {/* Timeline */}
    <div className="relative space-y-10">
      {[
        {
          title: "Day 1 · Vision & Strategy",
          color: "from-blue-500 to-cyan-500",
          points: [
            "Define core values: FOSS, Authenticity, Security",
            "Identify target audience & pain points",
            "Brainstorm key features: content, messaging, identity",
          ],
        },
        {
          title: "Phase 1 · Foundation",
          color: "from-purple-500 to-pink-500",
          points: [
            "Website: landing, about, roadmap",
            "Backend infrastructure & databases",
            "Core content sharing application",
          ],
        },
        {
          title: "Phase 2 · Enhancement & Security",
          color: "from-emerald-500 to-teal-500",
          points: [
            "Encryption & authentication layers",
            "Secure messaging & user verification",
            "Community forums & feedback loops",
          ],
        },
        {
          title: "Phase 3 · Web3 Integration",
          color: "from-orange-500 to-red-500",
          points: [
            "Decentralized identity & tokenization",
            "Wallets & NFT-based ownership",
            "DAO-driven governance model",
          ],
        },
        {
          title: "Launch & Iterate",
          color: "from-yellow-400 to-lime-400",
          points: [
            "Closed beta & feedback collection",
            "Public launch & marketing push",
            "Continuous upgrades & scaling",
          ],
        },
      ].map((phase, i) => (
<motion.div
          key={phase.title}
          initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="relative"
        >
          <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-700 hidden sm:block" />

          <div className="flex items-start gap-6">
            {/* Dot */}
            <div
              className={`flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br ${phase.color} shadow-lg border border-white/30`}
            />




            {/* Card */}
            <div className="flex-1 rounded-2xl border border-slate-700/70 bg-slate-900/80 p-5 sm:p-6">
              <h4 className="text-lg sm:text-xl font-semibold mb-3 text-slate-100">
                {phase.title}
              </h4>
              <ul className="space-y-2">
                {phase.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-sm sm:text-base text-slate-300 flex gap-2"
                  >
                    <span className="text-sky-400">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Footer Note */}
    <div className="mt-14 text-center">
      <p className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto">
      @iBzA is not designed as “another social app”.
        It is architected as a long-living open ecosystem — transparent, forkable,
        secure and owned by its community.
      </p>
      <p className="mt-3 text-sky-400 font-semibold text-sm">
        Build openly. Secure deeply. Govern together.
      </p>
    </div>
  </div>
</motion.section>
{/* =================== END 0bza ROADMAP =================== */}



  

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
                              src="/images/iBzAthelaraib.png"
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


















