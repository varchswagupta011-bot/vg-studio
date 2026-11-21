export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  type: string;
  description: string;
  longDescription: string;
  tags: string[];
  liveUrl?: string;
  theme: "dark" | "light";
  accentColor: string;
  previewMockup: {
    heroHeadline: string;
    heroSubheadline: string;
    ctaText: string;
    tagline: string;
    badgeText: string;
    accentStyle?: string;
    imageType: "restaurant" | "education" | "ecommerce";
  };
}

export const siteConfig = {
  name: "VG STUDIO",
  tagline: "I BUILD DIGITAL EXPERIENCES.",
  supportingDescription:
    "I design and develop clean, fast, and memorable websites for brands, businesses, and ideas.",
  location: "INDIA • AVAILABLE WORLDWIDE",
  status: "AVAILABLE FOR PROJECTS",
  creator: "Varchswa Gupta",
  email: "hello@vgstudio.design",
  socials: {
    github: "https://github.com/varchswagupta011-bot",
    twitter: "https://x.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
  navLinks: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  projects: [
    {
      id: "royal-bite",
      number: "01",
      name: "The Royal Bite",
      category: "Restaurant Website",
      type: "RESTAURANT",
      description:
        "A premium restaurant website with elegant food photography and a modern dining experience.",
      longDescription:
        "Designed to capture the ambiance of fine dining with an interactive culinary menu, table booking engine, wine pairing guide, and fluid micro-animations that elevate the gastronomic experience.",
      tags: ["Web Design", "Next.js", "Tailwind CSS", "Table Booking"],
      liveUrl: "https://example.com/the-royal-bite",
      theme: "dark",
      accentColor: "#E5A93C",
      previewMockup: {
        heroHeadline: "Good Food. Good Mood.",
        heroSubheadline: "Experience the taste of luxury crafted with passion and local ingredients.",
        ctaText: "View Menu ↗",
        tagline: "Fine Dining & Lounge",
        badgeText: "Michelin Inspired",
        imageType: "restaurant",
      },
    },
    {
      id: "paradise-public-school",
      number: "02",
      name: "Paradise Public School",
      category: "School Website",
      type: "EDUCATION",
      description:
        "A modern educational website designed to showcase school information, academics, admissions, and events.",
      longDescription:
        "An intuitive, welcoming institutional portal featuring real-time admissions inquiry handling, dynamic academic calendars, campus tour galleries, and an accessible student portal.",
      tags: ["UI/UX Design", "React", "Admissions Portal", "Accessibility"],
      liveUrl: "https://paradise-public-school-pearl.vercel.app",
      theme: "light",
      accentColor: "#2563EB",
      previewMockup: {
        heroHeadline: "Knowledge Builds a Better Tomorrow",
        heroSubheadline: "Empowering young minds for a brighter future through holistic education.",
        ctaText: "Learn More ↗",
        tagline: "Admissions Open 2026-27",
        badgeText: "CBSE Affiliated",
        imageType: "education",
      },
    },
    {
      id: "nexora",
      number: "03",
      name: "Nexora",
      category: "E-commerce Website",
      type: "E-COMMERCE",
      description:
        "A clean shopping experience with modern product presentation.",
      longDescription:
        "A high-converting direct-to-consumer store with ultra-fast search, dynamic 3D-inspired product previews, friction-free checkout, and responsive design crafted for mobile shoppers.",
      tags: ["E-commerce", "Conversion Rate Optimization", "Next.js", "Stripe"],
      liveUrl: "https://example.com/nexora",
      theme: "light",
      accentColor: "#B7F500",
      previewMockup: {
        heroHeadline: "Upgrade Your Style",
        heroSubheadline: "Premium Fashion. Better You. Curated for the modern vanguard.",
        ctaText: "Shop Now ↗",
        tagline: "New Spring Drop '26",
        badgeText: "Free Express Shipping",
        imageType: "ecommerce",
      },
    },
  ] as Project[],
  services: [
    {
      number: "01",
      title: "Web Design",
      subtitle: "BEAUTIFUL, MODERN, USER-FOCUSED",
      description:
        "Crafting bespoke visual identities, wireframes, and high-fidelity interactive designs that reflect your brand's unique ethos while delighting users.",
      deliverables: ["Visual Identity", "UI Kit & Design System", "Interactive Prototypes", "Responsive Layouts"],
    },
    {
      number: "02",
      title: "Web Development",
      subtitle: "FAST, SCALABLE, PRODUCTION-READY",
      description:
        "Engineering high-performance web applications using Next.js, React, and TypeScript. Optimized for sub-second load times, SEO, and bulletproof accessibility.",
      deliverables: ["Next.js App Router", "Full-Stack Integrations", "Sub-second Page Speeds", "SEO & Core Web Vitals"],
    },
    {
      number: "03",
      title: "UI/UX Design",
      subtitle: "INTUITIVE INTERFACES & FLOWS",
      description:
        "Designing seamless user journeys that minimize friction and maximize engagement. Every micro-interaction is refined to feel effortless and natural.",
      deliverables: ["User Journey Mapping", "Information Architecture", "Micro-Interactions", "Accessibility (WCAG)"],
    },
    {
      number: "04",
      title: "E-commerce Development",
      subtitle: "HIGH CONVERTING ONLINE STORES",
      description:
        "Building modern online stores that turn visitors into loyal customers. Fast product browsing, seamless shopping carts, and effortless payment integrations.",
      deliverables: ["Catalog & Inventory UI", "Checkout Optimization", "Payment Gateways", "Mobile-First Commerce"],
    },
  ],
  processSteps: [
    {
      step: "01",
      title: "DISCOVER",
      subtitle: "Alignment & Strategy",
      description:
        "We uncover your core goals, target audience, brand values, and technical requirements to establish a clear architectural roadmap.",
    },
    {
      step: "02",
      title: "DESIGN",
      subtitle: "Visual Identity & UX",
      description:
        "We explore creative directions, design editorial layouts, and iterate interactive prototypes until the aesthetic is distinct and memorable.",
    },
    {
      step: "03",
      title: "DEVELOP",
      subtitle: "Clean Code & Motion",
      description:
        "We build your website with Next.js, TypeScript, and Tailwind CSS, baking in smooth Framer Motion interactions and Core Web Vitals optimizations.",
    },
    {
      step: "04",
      title: "LAUNCH",
      subtitle: "Testing & Deployment",
      description:
        "Rigorous cross-browser testing, mobile responsiveness audits, and domain setup, followed by a flawless zero-downtime deployment to Vercel.",
    },
  ],
};
