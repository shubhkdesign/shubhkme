import { PROFILE_MODE } from "@/config/profile-mode";
import type { ProfileMode } from "@/features/profile/types/profile-mode";
import type { User } from "@/features/profile/types/user";

type UserModeFields = Pick<
  User,
  "bio" | "flipSentences" | "jobTitle" | "jobs" | "about" | "keywords" | "meta"
>;

const NAME_KEYWORDS = [
  "shubhk",
  "shubhamanilkhade",
  "shubham anil khade",
  "shubhkdesign",
  "shubh khade",
  "shubham khade",
];

const MODE_FIELDS: Record<ProfileMode, UserModeFields> = {
  fullstack: {
    bio: "Senior Full-Stack Engineer | Next.js, React, TypeScript, Node.js",
    flipSentences: [
      "Creating with code. Small details matter.",
      "Senior Full-Stack Engineer",
      "Shopify App Builder",
      "Building with AI",
      "Photographer",
    ],
    jobTitle: "Senior Full-Stack Engineer",
    jobs: [
      {
        title: "Senior Full-Stack Engineer",
        company: "Inline 3 Media Solutions",
        website: "https://inline3media.com",
      },
    ],
    about: `
Senior full-stack software engineer with 5+ years shipping scalable web products end to end in **Next.js**, **React**, **TypeScript** and **Node.js**: system design, SQL and NoSQL data, REST and GraphQL API design, UI and AWS deployment.

Built a [Shopify App Store app](https://apps.shopify.com/upfront-cod-partial-payment-1) from scratch to 233 installs and re-architected it on Shopify Functions with 0 pricing differences across 171,000+ shadow-checked quotes.

Lead the web team in Agile sprints and work directly with clients and designers. Build with Claude Code and MCP (Railway, AWS) and ship LLM features such as a Gemini 2.5 Flash scheduling chatbot with tool calling and guardrails.
  `,
    keywords: [
      ...NAME_KEYWORDS,
      "Senior Full-Stack Engineer",
      "full-stack developer",
      "Next.js developer",
      "Shopify app developer",
      "AI engineer",
      "LLM chatbot developer",
      "Shubham Khade software engineer",
      "Photographer",
    ],
    meta: {
      title: "Shubham Khade",
      description:
        "Senior Full-Stack Engineer | Next.js, React, TypeScript, Node.js",
      ogTitle: "Shubham Khade",
      ogDescription:
        "Senior Full-Stack Engineer | Next.js, React, TypeScript, Node.js",
    },
  },
  cto: {
    bio: "Co-founder and CTO at Inline 3 Media Solutions | Next.js, TypeScript, Shopify apps",
    flipSentences: [
      "Creating with code. Small details matter.",
      "Co-founder and CTO",
      "Shopify App Builder",
      "Building with AI",
      "Photographer",
    ],
    jobTitle: "Co-founder and CTO",
    jobs: [
      {
        title: "Co-founder and CTO",
        company: "Inline 3 Media Solutions",
        website: "https://inline3media.com",
      },
    ],
    about: `
Co-founder and CTO of [Inline 3 Media Solutions](https://inline3media.com/web), a Mumbai web and software studio. I run its technology and delivery for 13 client brands and its own Shopify App Store product, [Upfront](https://apps.shopify.com/upfront-cod-partial-payment-1): 233 installs and 744 paid advance orders across 33 stores in the past month.

I handle the business setup around the code: DLT telecom registration, CERT-In logging, privacy policy, Meta business accounts, pricing and releases.

Full-stack engineer with 5+ years in **Next.js**, **React**, **TypeScript** and **Node.js**. Build with Claude Code and MCP (Railway, AWS) and ship LLM features such as a Gemini 2.5 Flash scheduling chatbot with tool calling and guardrails.
  `,
    keywords: [
      ...NAME_KEYWORDS,
      "Co-founder and CTO",
      "CTO",
      "Inline 3 Media Solutions",
      "full-stack developer",
      "Next.js developer",
      "Shopify app developer",
      "Shubham Khade CTO",
      "Photographer",
    ],
    meta: {
      title: "Shubham Khade | Co-founder and CTO",
      description:
        "Co-founder and CTO of Inline 3 Media Solutions, a Mumbai web and software studio. Runs its technology and delivery for 13 client brands and Upfront, a Shopify App Store app with 233 installs.",
      ogTitle: "Shubham Khade | Co-founder and CTO",
      ogDescription:
        "Co-founder and CTO of Inline 3 Media Solutions. Runs technology, delivery, releases and India compliance for a Mumbai web and software studio.",
    },
  },
};

export const USER: User = {
  firstName: "Shubham",
  lastName: "Khade",
  displayName: "Shubham Khade",
  username: "shubhkdesign",
  gender: "male",
  pronouns: "he/him",
  address: "Mumbai, India",
  phoneNumber: "KzkxNzAyMTEzMzk5Mw", // E.164 format, base64 encoded
  email: "c2h1YmhrZGVzaWduQGdtYWlsLmNvbQ==", // base64 encoded
  website: "https://shubhk.me",
  avatar: "/shubh_avatar.png",
  ogImage: "/ogimage.png",
  namePronunciationUrl: "/Shubham Khade pronunciation.mp3",
  dateCreated: "2023-10-20", // YYYY-MM-DD
  ...MODE_FIELDS[PROFILE_MODE],
};
