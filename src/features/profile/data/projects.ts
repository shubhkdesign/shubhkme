import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "interior-viewer",
    title: "Interactive Interior / Product Viewer",
    period: {
      start: "01.2023",
    },
    link: "#",
    skills: [
      "Three.js",
      "TypeScript",
      "GSAP",
      "Vite",
      "Raycasting",
      "Linear Algebra",
    ],
    description: `
**Role:** Three.js Developer

- **Interaction System:** Architected a **Raycasting** system utilizing **Normalized Device Coordinates (NDC)** to map 2D DOM events to 3D precision inputs.
- **Camera Architecture:** Implemented linear interpolation via **GSAP** to manage complex camera state transitions (Position + LookAt quaternions), creating cinematic "Director Mode" focus effects.
- **Mobile Optimization:** Addressed mobile GPU constraints by dynamically capping \`devicePixelRatio\` and managing material precision.
    `,
    isExpanded: true,
  },
  {
    id: "auto-configurator",
    title: "Real-Time Automotive Configurator",
    period: {
      start: "01.2023",
    },
    link: "#",
    skills: ["Three.js", "GLSL", "WebGL", "PBR", "Post-Processing"],
    description: `
**Role:** 3D Graphics Engineer

- **Visual Fidelity:** Achieved photorealism through **Physically Based Rendering (PBR)** workflows, utilizing **HDRI** environment maps and custom material properties (Clearcoat, Transmission).
- **Post-Processing Pipeline:** Implemented a custom rendering pipeline with **Bloom**, **Tone Mapping** (ACESFilmic), and **Depth of Field** to simulate cinematic camera lenses.
- **Performance:** Optimized high-poly automotive assets using **Draco compression** and implemented texture atlas techniques to reduce draw calls.
    `,
    isExpanded: true,
  },
  {
    id: "studio-rare",
    title: "Studio Rare Interiors",
    period: {
      start: "01.2024",
    },
    link: "#",
    skills: ["GSAP", "ScrollTrigger", "Animation", "UI/UX"],
    description: `
(Under Development)
- High-end interior design website focused on immersive scroll storytelling.
- 8+ animated sections with multi-phase GSAP timelines, spotlight carousels, and 3D perspective card stacks.
    `,
  },
  {
    id: "ycdesign",
    title: "YCDesign Web App",
    period: {
      start: "01.2023",
    },
    link: "https://yc-design.in",
    skills: ["Payload CMS", "Next.js", "ISR", "Full Stack"],
    description: `
CMS-driven motorcycle restoration platform with Payload CMS integration and ISR-based updates.
    `,
  },
  //   {
  //     id: "react-wheel-picker",
  //     title: "React Wheel Picker",
  //     period: {
  //       start: "05.2025",
  //     },
  //     link: "https://react-wheel-picker.shubhk.me",
  //     skills: [
  //       "Open Source",
  //       "React",
  //       "TypeScript",
  //       "Monorepo",
  //       "Turborepo",
  //       "pnpm-workspace",
  //       "Package Publishing",
  //       "NPM Registry",
  //       "GitHub Actions",
  //     ],
  //     description: `iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support.
  // - 📱 Natural touch scrolling with smooth inertia effect
  // - 🖱️ Mouse drag and scroll support for desktop
  // - 🔄 Infinite loop scrolling
  // - 🎨 Unstyled components for complete style customization
  // - ⚡️ Easy installation via shadcn CLI

  // This project is proudly supported by:

  // <a href="https://vercel.com/blog/summer-2025-oss-program#react-wheel-picker">
  // <img src="https://assets.shubhk.me/images/project-logos/vercel-oss-program-badge-white.svg?v=1" alt="Vercel OSS Program" class="hidden [html.dark_&]:block">
  // <img src="https://assets.shubhk.me/images/project-logos/vercel-oss-program-badge-black.svg?v=1" alt="Vercel OSS Program" class="hidden [html.light_&]:block">
  // </a>
  // `,
  //     logo: "https://assets.shubhk.me/images/project-logos/react-wheel-picker.svg",
  //   },
  //   {
  //     id: "shubhkedotme",
  //     title: "shubhk.me",
  //     period: {
  //       start: "01.2025",
  //     },
  //     link: "https://github.com/shubhkdesign/shubhk.me",
  //     skills: [
  //       "Open Source",
  //       "Next.js 15",
  //       "Tailwind CSS v4",
  //       "Radix UI",
  //       "Motion",
  //       "shadcn/ui",
  //       "Component Registry",
  //       "Vercel",
  //     ],
  //     description: `A minimal portfolio, component registry, and blog.
  // - Clean & modern design
  // - Light & Dark theme support
  // - vCard integration
  // - SEO optimization: [JSON-LD schema](https://json-ld.org), sitemap, robots
  // - AI-friendly [/llms.txt](https://llmstxt.org)
  // - Spam-protected email
  // - Installable PWA

  // Blog Features:
  // - MDX & Markdown support
  // - Syntax Highlighting for better readability
  // - RSS Feed for easy content distribution
  // - Dynamic OG Images for rich previews`,
  //     logo: "https://assets.shubhk.me/images/project-logos/chanhdaidotcom.svg",
  //   },
  //   {
  //     id: "quaricdotcom",
  //     title: "quaric.com",
  //     period: {
  //       start: "03.2024",
  //     },
  //     link: "https://quaric.com",
  //     skills: [
  //       "Company Project",
  //       "Next.js 15",
  //       "Tailwind CSS v3",
  //       "shadcn/ui",
  //       "Strapi 5",
  //       "VNPAY-QR",
  //       "Docker",
  //       "Docker Compose",
  //       "NGINX",
  //     ],
  //     logo: "https://assets.shubhk.me/images/project-logos/quaricdotcom.svg",
  //   },
  //   {
  //     id: "zadark",
  //     title: "ZaDark",
  //     period: {
  //       start: "01.2022",
  //     },
  //     link: "https://zadark.com",
  //     skills: [
  //       "Pet Project",
  //       "Open Source",
  //       "Browser Extension",
  //       "CLI",
  //       "Docusaurus 3",
  //     ],
  //     description: `ZaDark adds Dark Mode, anti-peeking, customizable fonts, backgrounds, and more to Zalo Web and PC.
  // - Earned 10M+ VND in net sales from a paid Safari Extension.
  // - 80,000+ downloads on SourceForge (awarded Community Leader badge by SourceForge)
  // - 15,000+ active users via Chrome Web Store
  // - Bronze Medal — 10th Design, Manufacturing, and Application Award 2022`,
  //     logo: "https://assets.shubhk.me/images/project-logos/zadark.svg",
  //   },
  //   // {
  //   //   id: "qabox",
  //   //   title: "QABox",
  //   //   period: {
  //     start: "07.2023",
  //     end: "07.2023",
  //   },
  //   link: "https://github.com/shubhkdesign/qabox",
  //   skills: [
  //     "University Project",
  //     "PHP",
  //     "MySQL",
  //     "MVC",
  //     "Docker",
  //     "Docker Compose",
  //   ],
  //   description:
  //     "- Course: Distributed Applications — FIT@HCMUS\n- Project Score: 10/10\n- Source Code: https://github.com/shubhkdesign/qabox",
  // },
  // {
  //   id: "taskbox",
  //   title: "TaskBox",
  //   period: {
  //     start: "07.2023",
  //     end: "07.2023",
  //   },
  //   link: "https://github.com/shubhkdesign/taskbox",
  //   skills: [
  //     "University Project",
  //     "PHP",
  //     "MySQL",
  //     "MVC",
  //     "Docker",
  //     "Docker Compose",
  //   ],
  //   description:
  //     "- Course: Distributed Applications — FIT@HCMUS\n- Project Score: 10/10\n- Source Code: https://github.com/shubhkdesign/taskbox",
  // },
  // {
  //   id: "daichat-app",
  //   title: "DaiChat App",
  //   period: {
  //     start: "07.2020",
  //     end: "07.2020",
  //   },
  //   link: "https://www.youtube.com/watch?v=H5U3J_W1low",
  //   skills: ["University Project", "Java", "Java Swing", "Java Networking"],
  //   description: `- Course: Java Application Programming — FIT@HCMUS
  // - Requirement: Developed a real-time chat application using Java technologies
  // - Project Score: 10/10
  // - Source Code:
  //   - Server: https://github.com/shubhkdesign/ltudjava-summer2020-chatapp_server
  //   - Client: https://github.com/shubhkdesign/ltudjava-summer2020-chatapp_client`,
  // },
  // {
  //   id: "qlsv-app",
  //   title: "QLSV App",
  //   period: {
  //     start: "06.2020",
  //     end: "06.2020",
  //   },
  //   link: "https://www.youtube.com/watch?v=tG9SZEBrwog",
  //   skills: ["University Project", "Java", "Java Swing", "Hibernate", "MySQL"],
  //   description: `- Course: Java Application Programming — FIT@HCMUS
  // - Requirement: Built a student management system with role-based functionalities using Java technologies
  // - Project Score: 10/10
  // - Source Code: https://github.com/shubhkdesign/ltudjava-summer2020-hibernate`,
  //   // },
  //   {
  //     id: "penphy",
  //     title: "Penphy",
  //     period: {
  //       start: "01.2019",
  //       end: "08.2019",
  //     },
  //     link: "https://www.youtube.com/watch?v=EdU7rUO-UA4",
  //     skills: ["Startup Project", "JavaScript", "React Native"],
  //     description: "2nd Prize — Business Startup Competition 2019",
  //   },
  //   {
  //     id: "unlimitedstudy",
  //     title: "UnlimitedStudy",
  //     period: {
  //       start: "01.2017",
  //       end: "08.2018",
  //     },
  //     link: "https://muctim.tuoitre.vn/cong-cu-ho-tro-viec-day-va-hoc-55107.htm",
  //     skills: [
  //       "National Competition",
  //       "Creative Software",
  //       "PHP",
  //       "Laravel 4",
  //       "MySQL",
  //       "jQuery",
  //       "Bootstrap 3",
  //     ],
  //     description: `UnlimitedStudy is a website that provides teaching and learning support tools for teachers and students.
  // - 3rd Prize — National Science and Engineering Fair 2018 (ViSEF)
  // - 1st Prize — Can Tho City Science and Engineering Fair 2018
  // - 3rd Prize — National Young Informatics Contest 2018
  // - 2nd Prize — Can Tho City Youth and Children's Creativity Contest 2018
  // - 3rd Prize — Can Tho City Young Informatics Contest 2018
  // - Reached 7,000+ users, mainly high school students in Can Tho City.
  // - Pilot implemented in high schools across Can Tho City with English quizzes, supervised by English subject specialists from the Can Tho City Department of Education and Training.`,
  //     logo: "https://assets.shubhk.me/images/project-logos/unlimitedstudy.webp",
  //   },
  //   // {
  //   //   id: "dmessage",
  //   //   title: "DMessage",
  //   //   period: {
  //   //     start: "05.2017",
  //   //     end: "05.2017",
  //   },
  //   link: "https://github.com/shubhkdesign/DMessage",
  //   skills: [
  //     "Self-learning Project",
  //     "Pet Project",
  //     "Express.js",
  //     "Socket.io",
  //     "MongoDB",
  //     "Mongoose ODM",
  //   ],
  //   description:
  //     "A Messenger clone built to practice real-time communication using Socket.IO. This project showcases my self-learning journey in implementing WebSockets for instant messaging.",
  // },
  // {
  //   id: "study-english",
  //   title: "Study English",
  //   period: {
  //     start: "11.2016",
  //     end: "12.2017",
  //   },
  //   link: "https://www.youtube.com/watch?v=OYgugvjqU4A",
  //   skills: [
  //     "National Competition",
  //     "Creative Software",
  //     "PHP",
  //     "Laravel 4",
  //     "MySQL",
  //   ],
  //   description: `Study English is a free, mobile-friendly website for high school English learning, offering vocabulary, quizzes, listening practice, and more.
  // - Consolation Prize — National Youth and Children's Creativity Contest 2016
  // - 1st Prize — Can Tho City Youth and Children's Creativity Contest 2016
  // - Consolation Prize — Can Tho City Young Informatics Contest 2016`,
  // },
];
