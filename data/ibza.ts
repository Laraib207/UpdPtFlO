// =============================================================
// iBzA BRAND DATA  ·  Operator: TheLaraib
// Single source of truth for the immersive landing experience.
// Edit text/links here — the UI updates automatically.
// =============================================================

export const brand = {
  name: 'iBzA',
  operator: 'TheLaraib',
  fullName: 'Laraib Siddiqui',
  // iBzA expansion (chosen). Alternatives kept for reference.
  acronym: 'Innovate · Build · Zeal · Awareness',
  acronymAlt: 'Ideas Beyond Zero Average',
  tagline: 'I build digital systems, brands, and growth engines that leave a mark.',
  role: 'Full-Stack Developer · Brand & Growth Strategist',
  location: 'Noida, India',
  origin: 'Aurangabad, Bihar',
  email: 'laraibsiddiqui10ki@gmail.com',
  github: 'https://github.com/Laraib207',
  cycleStore: 'https://ms-cycle-shopp.vercel.app',
  // TODO: apna WhatsApp number yahan daalo (country code ke saath, bina + ya space).
  // Example India: 919876543210
  whatsapp: '910000000000',
  caseId: 'IBZA-2026',
  status: 'OPEN TO WORK // CONTRACTS: ENABLED // REMOTE READY',
  languages: ['Hindi — Native', 'English — Fluent'],
}

// Boot sequence lines for the intro loader
export const bootLines = [
  'INITIALIZING iBzA CORE...',
  'LOADING OPERATOR PROFILE :: THELARAIB',
  'MOUNTING MISSION ARCHIVE...',
  'CALIBRATING GROWTH ENGINE [FREQ 42.0Hz]',
  'SECURE CHANNEL :: HANDSHAKE OK',
  'ACCESS GRANTED — 100%',
]

// Rotating marquee keywords (SEO + vibe)
export const marqueeWords = [
  'FULL-STACK DEVELOPMENT',
  'BRAND IDENTITY',
  'DIGITAL MARKETING',
  'GROWTH STRATEGY',
  'WEB APPLICATIONS',
  'PORTFOLIO DESIGN',
  'CREATIVE THINKER',
  'UI / UX DESIGN',
  'NEXT.JS · REACT',
  'PRODUCT LAUNCH',
  'LEAD GENERATION',
]

// Services / capabilities
export const services = [
  {
    id: 'SVC-01',
    title: 'Full-Stack Development',
    desc: 'Production-grade web apps and sites with React, Next.js, TypeScript and Node — fast, scalable, SEO-ready.',
    tags: ['Next.js', 'React', 'Node.js', 'TypeScript'],
  },
  {
    id: 'SVC-02',
    title: 'Brand Identity & Strategy',
    desc: 'Logo systems, naming, positioning and a complete visual language that makes a brand impossible to forget.',
    tags: ['Identity', 'Naming', 'Positioning'],
  },
  {
    id: 'SVC-03',
    title: 'Digital Marketing & Growth',
    desc: 'Funnels, SEO, content and performance campaigns engineered to generate qualified leads and conversions.',
    tags: ['SEO', 'Funnels', 'Performance'],
  },
  {
    id: 'SVC-04',
    title: 'Company Growth Systems',
    desc: 'End-to-end product and go-to-market structure — from idea to launch — for new ventures under the iBzA umbrella.',
    tags: ['Strategy', 'Launch', 'Systems'],
  },
]

// Mission Archive (projects). Replace images/links anytime.
export type IbzaProject = {
  code: string
  title: string
  category: string
  year: string
  status: 'DEPLOYED' | 'LIVE' | 'IN DEVELOPMENT' | 'CONCEPT'
  summary: string
  stack: string[]
  cover: string
  link?: string
  classified?: boolean
}

export const projects: IbzaProject[] = [
  {
    code: 'FILE-01',
    title: 'Veer Bharat',
    category: 'Live Platform / Web',
    year: '2026',
    status: 'LIVE',
    summary:
      'A fully launched, production platform built and shipped end-to-end — live on its own domain and serving real users.',
    stack: ['Next.js', 'React', 'Tailwind CSS'],
    cover: '/images/project-11.jpg',
    link: 'https://www.veer-bharat.com',
  },
  {
    code: 'FILE-02',
    title: 'Mystic Moment',
    category: 'Event Management / Web',
    year: '2025',
    status: 'DEPLOYED',
    summary:
      'A modern presence for an event management brand — showcasing services, galleries and enquiry flow with a premium, motion-rich feel.',
    stack: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    cover: '/images/project-22.jpg',
  },
  {
    code: 'FILE-03',
    title: 'SeedSoul',
    category: 'Commerce App / Product',
    year: '2025',
    status: 'DEPLOYED',
    summary:
      'A product commerce app where customers browse and buy company products — clean catalog, cart and checkout-ready architecture.',
    stack: ['React', 'Node.js', 'Commerce UI'],
    cover: '/images/project-3.jpg',
  },
  {
    code: 'FILE-04',
    title: 'iBzA Ecosystem',
    category: 'Multi-Product Brand',
    year: '2026',
    status: 'IN DEVELOPMENT',
    summary:
      'The parent brand system — a launchpad for future products (iBzA Cycle, iBzA Drink and more) under one bold, unified identity.',
    stack: ['Brand System', 'Strategy', 'Web'],
    cover: '/images/project-40.jpg',
  },
  {
    code: 'FILE-05',
    title: 'Classified Build',
    category: 'Client Project',
    year: '2025',
    status: 'CONCEPT',
    summary:
      'One of several client builds currently on temporary domains. Full case study unlocking soon — request access for details.',
    stack: ['Next.js', 'Tailwind CSS'],
    cover: '/images/project-5.jpg',
    classified: true,
  },
  {
    code: 'FILE-06',
    title: 'Classified Build',
    category: 'Client Project',
    year: '2025',
    status: 'CONCEPT',
    summary:
      'Another deployed build awaiting its permanent home. Documentation in progress — request access for a walkthrough.',
    stack: ['React', 'Web App'],
    cover: '/images/project-6.jpg',
    classified: true,
  },
]

// Operator skill inventory
export const skills = {
  hard: [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'JavaScript',
    'Tailwind CSS',
    'Framer Motion',
    'MongoDB',
    'REST APIs',
    'SEO',
    'Brand Design',
    'Digital Marketing',
  ],
  soft: ['Strategy', 'Problem Solving', 'Ownership', 'Creativity', 'Communication', 'Execution'],
}

// Timeline / field log
export const timeline = [
  {
    range: '2026 →',
    label: 'iBzA — Founder & Operator',
    detail: 'Building a multi-product brand ecosystem and growth studio based in Noida.',
  },
  {
    range: '2024 — 2026',
    label: 'Full-Stack Developer',
    detail: 'Shipping web apps, brand sites and commerce products for clients across India.',
  },
  {
    range: 'ORIGIN',
    label: 'Aurangabad, Bihar',
    detail: 'Self-driven journey from a small town to building a digital structure in Noida.',
  },
]

// Quick stats
export const stats = [
  { value: '15+', label: 'Projects Shipped' },
  { value: '3+', label: 'Years Building' },
  { value: '100%', label: 'Ownership Mindset' },
  { value: '1', label: 'Brand Ecosystem' },
]

// iBzA multi-product ecosystem (future launches under one brand)
export type IbzaProduct = {
  code: string
  name: string
  category: string
  status: 'LAUNCHING SOON' | 'IN R&D' | 'CONCEPT' | 'COMING SOON' | 'LIVE'
  desc: string
  href: string
  external?: boolean
  cta: string
}

export const products: IbzaProduct[] = [
  {
    code: 'PRD-01',
    name: 'iBzA Cycle',
    category: 'Mobility / Hardware',
    status: 'LIVE',
    desc: 'A bold next-gen cycle brand built around design, awareness and everyday performance.',
    href: '/ibza-cycle',
    cta: 'Explore Cycle',
  },
  {
    code: 'PRD-02',
    name: 'iBzA Drink',
    category: 'Beverage / Hydration',
    status: 'COMING SOON',
    desc: 'A premium water bottle and hydration brand — clean design, bold identity, pure refreshment.',
    href: '/ibza-drink',
    cta: 'View Product',
  },
  {
    code: 'PRD-03',
    name: 'iBzA Studio',
    category: 'Digital / Services',
    status: 'LAUNCHING SOON',
    desc: 'The development & growth studio — websites, brands and marketing systems for clients.',
    href: '/ibza-studio',
    cta: 'Enter Studio',
  },
  {
    code: 'PRD-04',
    name: 'iBzA Flying Buds',
    category: 'Game / Interactive',
    status: 'LIVE',
    desc: 'An original arcade-style flight game — fun, fast and built fully in-house. Tap to fly, dodge obstacles, beat your best.',
    href: '/ibza-flying-buds',
    cta: 'Enter Game',
  },
]

// Live deployment of the FlyBuds game (separate Vercel project)
export const flyBudsUrl = 'https://fly-buds-game.vercel.app'
