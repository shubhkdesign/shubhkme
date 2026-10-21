import { PROFILE_MODE } from "@/config/profile-mode";

import type { Project } from "../types/projects";

const FULLSTACK_PROJECTS: Project[] = [
  {
    id: "upfront",
    title: "Upfront: COD & Partial Payment",
    period: { start: "2026", end: "2026" },
    link: "https://apps.shopify.com/upfront-cod-partial-payment-1",
    image: "/projects/upfront.webp",
    skills: [
      "Shopify App",
      "Shopify Functions",
      "React Router",
      "Polaris",
      "PostgreSQL",
      "Prisma",
      "BullMQ",
      "Redis",
    ],
    description: `
Shopify App Store app that lets Indian D2C merchants take an advance or a fee on cash-on-delivery orders to cut fake orders. Live on the [Shopify App Store](https://apps.shopify.com/upfront-cod-partial-payment-1) with 233 installs; product site at [upfrontpayapp.com](https://upfrontpayapp.com).
- Built from scratch, then re-architected for scale: pricing moved into checkout-native Shopify Functions running on Shopify's infrastructure, with an event-driven BullMQ and Redis queue running webhooks as idempotent jobs.
- Dark-launched against version 1: 0 pricing differences across 171,000+ shadow-checked quotes.
    `,
    isExpanded: true,
  },
  {
    id: "inline3-media",
    title: "Inline 3 Media Website",
    period: { start: "2026", end: "2026" },
    link: "https://inline3media.com",
    image: "/projects/inline3.webp",
    skills: ["Next.js 16", "Payload CMS", "MongoDB", "Cloudflare R2", "GSAP"],
    description: `
Website and CMS for a Mumbai creative production studio, with a [web and software development section](https://inline3media.com/web) and its client case studies.
    `,
  },
  {
    id: "studio-rare",
    title: "Studio Rare",
    period: { start: "2025", end: "2025" },
    link: "https://studioraredesign.com",
    image: "/projects/studio-rare.webp",
    skills: ["Next.js", "Payload CMS", "GSAP", "Leaflet"],
    description: `
Interior design studio website with one filtered portfolio for residential and commercial work.
- Built 8+ animated sections and a responsive marquee with GSAP multi-phase timelines and 3D card stacks.
- Integrated an interactive Leaflet map with custom pulsing pins.
- Extended Payload CMS global schemas, making site content editable without code changes.
    `,
  },
  {
    id: "rouse-open-studio",
    title: "Rouse Open Studio",
    period: { start: "2026", end: "2026" },
    link: "https://rouseopenstudio.in",
    image: "/projects/rouse.webp",
    skills: ["Next.js", "Payload CMS", "GSAP", "Leaflet"],
    description: `
Portfolio site for an architecture and design studio, with a full-viewport video hero, scroll-driven GSAP timelines and CMS-managed projects and workshops.
    `,
  },
  {
    id: "yc-design",
    title: "YC Design",
    period: { start: "2025", end: "2025" },
    link: "https://yc-design.in",
    image: "/projects/yc-design.webp",
    skills: ["Next.js", "Payload CMS", "GSAP"],
    description: `
Motorcycle restoration studio in Mumbai, with a restoration archive filtered by make and model year.
- Served CMS-driven pages with Next.js and Payload CMS.
- Built a custom animation orchestrator with GSAP to coordinate the site's animations.
    `,
  },
  {
    id: "studio-11",
    title: "Studio 11",
    period: { start: "2025", end: "2025" },
    link: "https://studio11.in",
    image: "/projects/studio11.webp",
    skills: ["Next.js", "GSAP"],
    description: `
Interior design practice site that opens like a pair of curtains on scroll, followed by stacked, pinned project cards.
    `,
  },
  {
    id: "electromech",
    title: "Electromech Air Circulators",
    period: { start: "2025", end: "2025" },
    link: "https://electromechaircirculators.com",
    image: "/projects/electromech.webp",
    skills: ["Next.js", "Product Catalogue"],
    description: `
Product catalogue for an industrial fan manufacturer, with each fan listed by sweep and linked to its technical schematic.
    `,
  },
  {
    id: "pal-india",
    title: "Pal India",
    period: { start: "2026", end: "2026" },
    link: "https://palindia.biz",
    image: "/projects/pal-india.webp",
    skills: ["Vite", "Static Site", "SEO", "Cloudflare Pages"],
    description: `
Single-page marketing site for a century-old Mumbai shipping and logistics group, built as a fast, SEO-ready static site.
    `,
  },
  {
    id: "quickways-logistics",
    title: "Quick Ways Logistics",
    period: { start: "2025", end: "2025" },
    link: "https://quickwayslogistics.in",
    image: "/projects/quickways.webp",
    skills: ["Tailwind CSS", "Landing Page"],
    description: `
One-page website for an air and sea freight forwarder, built around a single call to action: get a quote.
    `,
  },
  {
    id: "motorcycle-3d-viewer",
    title: "3D Motorcycle Viewer",
    skills: ["Three.js", "Next.js", "3D Scene"],
    description: `
Internal client project: an interactive Three.js scene for viewing 3D motorcycles.
    `,
  },
  {
    id: "rahgear",
    title: "Rahgear",
    period: { start: "2024", end: "2024" },
    link: "https://rahgear.in",
    image: "/projects/rahgear.webp",
    skills: ["Shopify", "Liquid", "Tinker"],
    description: `
Shopify store for motorcycle luggage, with filters that lead with motorcycle type and mount style, plus warranty registration and a retailer finder.
    `,
  },
  {
    id: "uptantra",
    title: "Uptantra",
    period: { start: "2023", end: "2023" },
    link: "https://uptantra.com",
    image: "/projects/uptantra.webp",
    skills: ["Shopify", "Liquid", "Dawn"],
    description: `
Shopify store for bags upcycled from truck inner tubes, on a customised Dawn theme.
    `,
  },
  {
    id: "arihant-helmets",
    title: "Arihant Helmets",
    period: { start: "2023", end: "2023" },
    link: "https://arihanthelmets.com",
    image: "/projects/arihant-helmets.webp",
    skills: ["Shopify", "Liquid", "Tinker"],
    description: `
Shopify store for a multi-brand helmet retailer with a 380+ helmet catalogue, filterable by brand, type and helmet size.
    `,
  },
  {
    id: "bachoo-motors",
    title: "Bachoo Motors",
    period: { start: "2022", end: "2022" },
    link: "https://bachoomotors.com",
    image: "/projects/bachoo-motors.webp",
    skills: ["Shopify", "Liquid", "Ritual"],
    description: `
Shopify store for a motorcycle gear and spare parts shop, with navigation organised like the shop's own shelves.
    `,
  },
  {
    id: "ai-scheduling-assistant",
    title: "AI Scheduling Assistant",
    skills: [
      "Gemini 2.5 Flash",
      "LLM Tool Calling",
      "Guardrails",
      "Streaming Chat",
      "Cal.com API",
    ],
    description: `
Chatbot, live on a chartered accountancy firm's website, that automates client scheduling.
- Books a free slot or reschedules an existing meeting through Cal.com tool calling, checking live availability first.
- Streams Gemini 2.5 Flash replies with a Flash-Lite fallback, and scheduling-only guardrails so it cannot be asked to do anything else.
    `,
    isExpanded: true,
  },
  {
    id: "stock-bhandar",
    title: "Stock Bhandar",
    period: { start: "09.2026", end: "09.2026" },
    skills: [
      "Next.js 16",
      "PostgreSQL",
      "Drizzle",
      "PWA",
      "IndexedDB",
      "Vitest",
      "Playwright",
    ],
    description: `
Offline-first billing, inventory and GST software for small Indian retailers (not publicly listed yet).
- Scalable multi-tenant B2B SaaS with authentication, role-based access control, plans and subscriptions, and an offline-first PWA point of sale with service-worker caching and IndexedDB sync.
- GST tax engine, invoices, barcode labels, purchase orders and GSTR-1 and GSTR-3B exports, covered by 1,000+ Vitest tests and 29 Playwright E2E specs.
- Now architecting AI stock monitoring and automated reordering (planned, not built yet).
    `,
    isExpanded: true,
  },
];

/** Per-project description changes for the CTO variant, keyed by project id. */
const CTO_DESCRIPTIONS: Record<string, string> = {
  upfront: `
The [Shopify App Store](https://apps.shopify.com/upfront-cod-partial-payment-1) product of Inline 3 Media Solutions, launched in Mar 2026: Indian D2C merchants use it to take an advance or a fee on cash-on-delivery orders and cut fake orders. 233 installs, 744 paid advance orders across 33 stores in the past month; product site at [upfrontpayapp.com](https://upfrontpayapp.com).
- Owns the releases and the business setup around it: backups, per-store feature flags, rollback plans, 48-hour monitoring, CERT-In logging, privacy policy, DLT and WhatsApp Business approvals.
- Re-architected as version 2 on Shopify Functions, BullMQ and Redis jobs and PostgreSQL with Prisma, and priced 171,000+ live quotes in shadow against version 1 with 0 unexplained differences before a per-store release.
    `,
  "stock-bhandar": `
Offline-first billing, inventory and GST software for small Indian retailers (not publicly listed yet).
- Scalable multi-tenant B2B SaaS with authentication, role-based access control, plans and subscriptions, and an offline-first PWA point of sale with service-worker caching and IndexedDB sync.
- GST tax engine, invoices, barcode labels, purchase orders and GSTR-1 and GSTR-3B exports, covered by 1,000+ Vitest tests and 29 Playwright E2E specs.
    `,
};

const CTO_PROJECTS: Project[] = FULLSTACK_PROJECTS.map((project) => ({
  ...project,
  description: CTO_DESCRIPTIONS[project.id] ?? project.description,
}));

export const PROJECTS: Project[] =
  PROFILE_MODE === "cto" ? CTO_PROJECTS : FULLSTACK_PROJECTS;
