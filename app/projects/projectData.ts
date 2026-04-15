export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  role: string;
  techStack: string;
  summary: string;
  bullets: string[];
  cardImage: string;
  galleryImages: string[];
  link?: string;
  linkLabel?: string;
  secondaryLink?: string;
  secondaryLinkLabel?: string;
  accent: string;
}

export const projects: ProjectItem[] = [
  {
    id: "1",
    slug: "supreme-energy",
    title: "Corporate Website & CMS Development – Supreme Energy",
    role: "Fullstack Developer",
    techStack: "CodeIgniter 4, Bootstrap",
    summary:
      "Developed a corporate website and admin CMS system inspired by Supreme Energy's official structure and design.",
    bullets: [
      "Built a dynamic landing page showcasing company profile, ESG initiatives, assets, and corporate information",
      "Implemented CMS features to manage website content including company information, assets, and structured sections",
      "Designed the system to support scalability and maintainability for corporate-level content updates",
      "Ensured responsive UI and optimized performance for the public-facing website",
    ],
    cardImage: "/landing-page-supreme-energy.png",
    galleryImages: ["/landing-page-supreme-energy.png", "/second-page-supreme-energy.png", "/third-page-supreme-energy.png"],
    link: "https://www.supreme-energy.com/",
    linkLabel: "Visit Official Website",
    accent: "from-cyan-500 via-blue-500 to-indigo-500",
  },
  {
    id: "3",
    slug: "freelance-primasynergy",
    title: "Freelance Frontend Development – primasynergy.com",
    role: "Frontend Developer",
    techStack: "Next.js, NestJS, Tailwind",
    summary:
      "Developed a custom CMS system from scratch for primasynergy.com using code-only implementation, delivering a responsive and scalable platform that supports content operations, live monitoring, and business growth in the energy sector.",
    bullets: [
      "Built a custom CMS system from scratch without using a builder, ensuring full control over structure, logic, and maintainability",
      "Developed article management, chat management, and live tracking features to support daily content and operational workflows",
      "Implemented inventory and item management modules to organize business data efficiently and accurately",
      "Designed the system architecture with scalability and performance in mind to support long-term platform growth",
      "Converted the UI into a responsive production-ready frontend for primasynergy.com with a clean and professional presentation",
    ],
    cardImage: "/landing-page-prismasynergy.png",
    galleryImages: ["/landing-page-prismasynergy.png", "/second-page-prismasynergy.png", "/third-page-prismasynergy.png"],
    link: "https://primasynergy.com/",
    linkLabel: "View primasynergy.com",
    accent: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    id: "4",
    slug: "freelance-fumira",
    title: "Freelance Frontend Development – fumira.co.id",
    role: "Frontend Developer",
    techStack: "Next.js, Tailwind",
    summary:
      "Developed a responsive frontend for fumira.co.id, a company operating in galvanized steel, translating the visual direction into a polished and production-ready web experience that feels strong, structured, and industrial.",
    bullets: [
      "Translated UI/UX designs into a responsive, production-ready company website aligned with a galvanized steel business profile",
      "Focused on structured layout consistency, fast performance, and responsive presentation across devices",
      "Highlighted the company profile in a way that supports credibility, manufacturing focus, and a professional industrial image",
    ],
    cardImage: "/landing-page-fumira.png",
    galleryImages: ["/landing-page-fumira.png", "/second%20page%20fumira.png", "/third-page-fumira.png"],
    link: "https://fumira.co.id/",
    linkLabel: "View fumira.co.id",
    accent: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    id: "2",
    slug: "billiard-point-management",
    title: "Billiard Point Management System",
    role: "Fullstack Developer",
    techStack: "Next.js, NestJS",
    summary:
      "Developed a mobile-focused web application for billiard business operations, enabling customer point tracking, food ordering, and reward redemption, along with a CMS for administration and reporting.",
    bullets: [
      "Built a system to manage customer data and real-time point calculation based on playing activity",
      "Developed a mobile-optimized web app for ordering food and redeeming points seamlessly",
      "Implemented a ranking system based on total playtime to enhance user engagement",
      "Created CMS features for administration, reporting, and system monitoring",
      "Designed scalable backend services and API integration for smooth operations",
    ],
    cardImage: "/updated-coming-soon.png",
    galleryImages: ["/updated-coming-soon.png", "/updated-coming-soon.png", "/updated-coming-soon.png"],
    accent: "from-orange-500 via-rose-500 to-pink-500",
  },
];
