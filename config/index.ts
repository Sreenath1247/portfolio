import type { SiteConfig, SiteContent } from "@/types";

export const SITE_CONFIG: SiteConfig = {
  title: "Sreenath H — Senior Frontend Developer",
  author: "Sreenath Haridaskumar",
  description:
    "Engineer specialized in React, micro-frontend architecture, and building scalable web applications for large enterprise systems.",
  lang: "en",
  siteLogo: "/shlogo.svg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    // { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    // { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/sreenath-h-2759b7112/" },
    { text: "Github", href: "https://github.com/Sreenath1247" },
    // { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    // { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Sreenath H",
    specialty: "Senior Frontend Engineer",
    summary:
      "Engineer specialized in React, micro-frontend architecture, and building scalable web applications for large enterprise systems.",
    email: "sreenath1247@gmail.com",
  },
  experience: [
    {
      company: "Tata Consultancy Services",
      position: "System Engineer",
      startDate: "Dec 2021",
      endDate: "Apr 2026",
      summary: [
        "Led frontend modernisation of SinglePoint, a large-scale US banking portal serving millions of business customers, migrating from legacy to a React-based micro-frontend architecture — improving scalability, maintainability, and user experience.",
        "Built a reusable UI component library in React/JS/CSS consumed across 10+ micro-frontend modules, reducing duplicate code and accelerating feature delivery team-wide.",
        "Introduced Zustand for global state management, replacing prop-drilling patterns and reducing state-related defects across the codebase.",
        "Improved application performance through React.memo, useMemo/useCallback, lazy loading, and Webpack code splitting, resulting in faster page load and interaction times.",
        "Architected REST API integration layers with standardised error handling and retry logic; authored Jest/RTL unit tests and Playwright E2E suites, raising release quality and team confidence.",
        "Collaborated with Java microservices teams on API contract design and contributed to CI/CD pipeline configuration (Jenkins, Azure DevOps), supporting continuous delivery."
      ],
    },
    {
      company: "Sada India",
      position: "Senior Software Developer",
      startDate: "Feb 2021",
      endDate: "Dec 2021",
      summary: [
        "Built scalable React SPAs for multiple enterprise clients, optimising API integration and collaborating with UI/UX teams to implement consistent design systems.",
        "Improved UI responsiveness and user experience across client products through performance-focused refactoring and component architecture improvements.",
      ],
    },
    {
      company: "Sada India",
      position: "Software Developer",
      startDate: "Mar 2019",
      endDate: "Feb 2021",
      summary: [
        "Developed reusable React components and integrated RESTful APIs, maintaining a scalable frontend architecture following established design patterns.",
        "Championed code quality through peer reviews, linting standards, and documentation best practices.",
      ],
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "https://astro-zen.vercel.app/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "https://astro-zen.vercel.app/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "https://astro-zen.vercel.app/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "https://astro-zen.vercel.app/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "https://astro-zen.vercel.app/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "https://astro-zen.vercel.app/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I'm Sreenath, a Senior Frontend Engineer with 7+ years of experience building scalable web applications for large enterprise systems. With a strong background in React, micro-frontend architecture, and performance optimisation, I thrive at the intersection where engineering precision meets great user experience. Over the years, I've worked on high-traffic, compliance-critical applications — most notably leading the frontend modernisation of a US banking portal serving millions of business customers. My work spans reusable component libraries, state management, test automation, and CI/CD pipelines, all with a focus on performance, maintainability, and scalability.
    `
  },
};
