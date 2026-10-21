import { PROFILE_MODE } from "@/config/profile-mode";
import type { ProfileMode } from "@/features/profile/types/profile-mode";

import type { Experience, ExperiencePosition } from "../types/experiences";

const INLINE3_POSITIONS: Record<ProfileMode, ExperiencePosition> = {
  fullstack: {
    id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
    title: "Senior Full-Stack Engineer",
    employmentPeriod: {
      start: "05.2022",
    },
    employmentType: "Full-time",
    icon: "code",
    description: `- Lead the web development team in 15-day Agile sprints, planning and assigning work in Jira.
- Use Claude Code daily with Railway and AWS MCP servers; each change gets a spec, code review and tests.

**[Upfront: COD & Partial Payment](https://apps.shopify.com/upfront-cod-partial-payment-1)** - Shopify App Store payments app

- Built version 1 from scratch and launched it in Mar 2026; Indian D2C merchants use it to take an advance or fee on COD orders and cut fake orders: 233 installs, 744 paid advance orders across 33 stores in the past month.
- Re-architected it as version 2 for scale: pricing moved into checkout-native Shopify Functions (Cart Transform, Payment Customization, Discount, Validation) on Shopify's infrastructure, with an event-driven BullMQ/Redis queue running webhooks as idempotent jobs and a PostgreSQL data model in Prisma.
- Dark-launched it: shadow-priced 171,000+ live quotes against version 1 with 0 unexplained differences and replayed 30 days of orders, then released per store behind feature flags with rollback plans and 48-hour monitoring.
- Debugged and hotfixed a launch-week Shopify API rate-limit failure (218 quote errors, then 0) and an uninstall bug.
- Added usage-based billing and SMS and WhatsApp OTP integrations behind feature flags.
- Set up GitHub Actions CI (npm security audits, lint, type checks, 6,000+ Vitest tests) and Playwright E2E on staging.

**Custom Next.js websites**

- Developed Next.js and Payload CMS sites from Figma designs, communicating directly with clients and collaborating with designers: [inline3media.com](https://inline3media.com), [studioraredesign.com](https://studioraredesign.com), [rouseopenstudio.in](https://rouseopenstudio.in), [yc-design.in](https://yc-design.in) and [studio11.in](https://studio11.in).
- Built CMS-editable pages, SEO and sitemaps, GSAP animations, Leaflet maps and a Three.js 3D motorcycle viewer for an internal client project.
- Deployed the sites on AWS (EC2, Lightsail, S3, Lambda) and Vercel; most score 95 on Lighthouse.

**Shopify e-commerce storefronts**

- Customized Liquid themes for Shopify stores: [rahgear.in](https://rahgear.in), [uptantra.com](https://uptantra.com), [arihanthelmets.com](https://arihanthelmets.com) and [bachoomotors.com](https://bachoomotors.com).`,
    skills: [
      "TypeScript",
      "Next.js",
      "React",
      "Node.js",
      "Shopify Functions",
      "PostgreSQL",
      "Prisma",
      "BullMQ",
      "Redis",
      "Payload CMS",
      "AWS",
      "GSAP",
      "Three.js",
      "Playwright",
      "Claude Code",
      "MCP",
    ],
    isExpanded: true,
  },
  cto: {
    id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
    title: "Co-founder and CTO",
    employmentPeriod: {
      start: "05.2022",
    },
    employmentType: "Full-time",
    icon: "code",
    description: `- Run the studio's technology and delivery: lead the web team in 15-day Agile sprints in Jira, set architecture and review standards, and work directly with clients and designers across 13 client brands.
- Own releases and incidents for the company's live product: backups, per-store feature flags, rollback plans and 48-hour monitoring on each production release; fixed a launch-week API rate-limit failure (218 quote errors, then 0).
- Handle India compliance for the product: CERT-In 180-day security logging with a named point of contact and a matching privacy policy; DLT telecom entity, sender ID and SMS template approval with Vi and MSG91; a Meta business and WhatsApp Business account with an approved authentication template.
- Make the vendor, cloud and pricing calls: Railway, PostgreSQL and Redis; GitHub Actions charges cut with a local test gate; WhatsApp codes built on Meta's API to avoid a provider's monthly fee; free and paid plans designed with metered message pricing and lifetime free access for early merchants; GST questions prepared for the company's CA.
- Use Claude Code daily with Railway and AWS MCP servers; each change gets a spec, code review and tests.

**[Upfront: COD & Partial Payment](https://apps.shopify.com/upfront-cod-partial-payment-1)** - the company's Shopify App Store product

- Built version 1 from scratch and launched it in Mar 2026; Indian D2C merchants use it to take an advance or fee on COD orders and cut fake orders: 233 installs, 744 paid advance orders across 33 stores in the past month.
- Re-architected it as version 2 on Shopify Functions, BullMQ and Redis jobs and PostgreSQL with Prisma; priced 171,000+ live quotes in shadow against version 1 with 0 unexplained differences before a per-store release.
- Built usage-based billing and SMS and WhatsApp OTP integrations behind feature flags; set up GitHub Actions CI (security audits, lint, type checks, 6,000+ Vitest tests) and Playwright E2E on staging.

**Client websites and stores**

- Built [inline3media.com](https://inline3media.com), [studioraredesign.com](https://studioraredesign.com), [rouseopenstudio.in](https://rouseopenstudio.in), [yc-design.in](https://yc-design.in) and [studio11.in](https://studio11.in) in Next.js and Payload CMS, plus Shopify themes for [rahgear.in](https://rahgear.in) and three more; on AWS and Vercel, most score 95 on Lighthouse.`,
    skills: [
      "TypeScript",
      "Next.js",
      "React",
      "Node.js",
      "Shopify Functions",
      "PostgreSQL",
      "Prisma",
      "BullMQ",
      "Redis",
      "Railway",
      "AWS",
      "GitHub Actions",
      "Playwright",
      "Claude Code",
      "MCP",
    ],
    isExpanded: true,
  },
};

export const EXPERIENCES: Experience[] = [
  {
    id: "inline3",
    companyName: "Inline 3 Media Solutions",
    companyLogo: "/inline3-mark.png",
    positions: [INLINE3_POSITIONS[PROFILE_MODE]],
    isCurrentEmployer: true,
  },
  {
    id: "farintsol",
    companyName: "Farintsol",
    positions: [
      {
        id: "6d1b0f6e-4a43-4f52-9a5e-7d5f0c8f2b11",
        title: "Frontend Developer",
        employmentPeriod: {
          start: "12.2020",
          end: "12.2021",
        },
        icon: "code",
        description: `- Built responsive client websites on WordPress and static HTML, CSS and JavaScript templates.`,
        skills: ["WordPress", "HTML", "CSS", "JavaScript"],
        isExpanded: true,
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "Bachelor of Science (BSc) in Computer Science",
        employmentPeriod: {
          start: "2017",
          end: "2020",
        },
        icon: "education",
        description: `University of Mumbai | Mumbai, India`,
      },
    ],
  },
];
