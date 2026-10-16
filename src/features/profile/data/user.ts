import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Shubham",
  lastName: "Khade",
  displayName: "Shubham Khade",
  username: "shubhkdesign",
  gender: "male",
  pronouns: "he/him",
  bio: "Senior Full-Stack Engineer | Next.js, React, TypeScript, Node.js",
  flipSentences: [
    "Creating with code. Small details matter.",
    "Senior Full-Stack Engineer",
    "Shopify App Builder",
    "Building with AI",
    "Photographer",
  ],
  address: "Mumbai, India",
  phoneNumber: "KzkxNzAyMTEzMzk5Mw", // E.164 format, base64 encoded
  email: "c2h1YmhrZGVzaWduQGdtYWlsLmNvbQ==", // base64 encoded
  website: "https://shubhk.me",
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

Lead a team in Agile sprints and work directly with clients and designers. Build with AI tools (Claude Code, MCP, Gemini 2.5) and ship LLM features such as streaming chat.
  `,
  avatar: "/shubh_avatar.png",
  ogImage: "/ogimage.png",
  namePronunciationUrl: "/Shubham Khade pronunciation.mp3",
  keywords: [
    "shubhk",
    "shubhamanilkhade",
    "shubham anil khade",
    "shubhkdesign",
    "shubh khade",
    "shubham khade",
    "Senior Full-Stack Engineer",
    "full-stack developer",
    "Next.js developer",
    "Shopify app developer",
    "AI engineer",
    "LLM chatbot developer",
    "Shubham Khade software engineer",
    "Photographer",
  ],
  dateCreated: "2023-10-20", // YYYY-MM-DD
};
