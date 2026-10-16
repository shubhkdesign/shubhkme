import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "inline3",
    companyName: "Inline 3 Media Solutions",
    companyLogo: "/inline3-mark.png",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Senior Full-Stack Engineer",
        employmentPeriod: {
          start: "05.2022",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Lead the web development team of a Mumbai creative studio in 15-day Agile sprints, planning and assigning work in Jira; communicate directly with clients and collaborate with designers, building from Figma designs.
- Use AI coding tools (Claude Code, MCP) daily, with specs, code review and automated tests on every change.

**[Upfront: COD & Partial Payment](https://apps.shopify.com/upfront-cod-partial-payment-1)** - Shopify App Store payments app

- Built Upfront version 1 from scratch and launched it in Mar 2026; it lets Indian D2C merchants take an advance or fee on COD orders to cut fake orders: 233 installs, 744 paid advance orders across 33 stores in the past month.
- Re-architected it as version 2 on checkout-native Shopify Functions, PostgreSQL database design with Prisma migrations and an event-driven BullMQ/Redis worker for idempotent background jobs.
- Dark-launched it: shadow-priced 171,000+ live quotes against version 1 with 0 differences, replayed 30 days of paid orders, then released behind per-store feature flags with backups, rollback plans and 48-hour production monitoring.
- Led launch-week incident response: hotfixed an API rate-limit failure (quote errors 218 to 0) and an uninstall bug.
- Built usage-based billing and third-party SMS and WhatsApp OTP integrations behind feature flags; GitHub Actions CI runs security audits, lint, type checks and 5,800+ Vitest tests on releases; Playwright E2E on staging.

**Client websites and stores**

- Delivered sites, CMS platforms and Shopify e-commerce stores for 13 client brands ([studioraredesign.com](https://studioraredesign.com), [rouseopenstudio.in](https://rouseopenstudio.in), [yc-design.in](https://yc-design.in), [rahgear.in](https://rahgear.in)), with GSAP, Three.js and Leaflet interfaces and custom Liquid themes.
- Built Next.js sites on Payload CMS, MongoDB and Cloudflare R2 with editable pages, SEO fields, redirects and sitemaps; deployed on AWS (EC2, Lightsail, S3, Lambda) and Vercel; most score 95 on Lighthouse.`,
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
    ],
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
