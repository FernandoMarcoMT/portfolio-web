"use client";

import Image from "next/image";
import Link from "next/link";
import { MdDomain } from "react-icons/md";

interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  logo?: string;
  logoAlt: string;
}

interface ExperienceProps {
  experiences?: ExperienceItem[];
}

const defaultExperiences: ExperienceItem[] = [
  {
    id: "1",
    company: "PT Praweda Ciptakarsa Informatika (Samudera Indonesia)",
    position: "Fullstack Developer",
    period: "July 2025 – Present",
    description:
      "Developed a shipping line application end-to-end using scalable and modular architecture. Implemented payment features including manual transactions and third-party payment gateway integration. Built accounting journal features and integrated financial data into centralized corporate systems (CODA). Developed scheduled services in Golang to automate data extraction from external systems. Contributed to system reliability and deployment pipelines using Docker and CI/CD practices. Tech Stack: Next.js, NestJS, Golang, Docker, Nginx, Jenkins, PostgreSQL",
    logo: "/logo-soedarpo.png",
    logoAlt: "Samudera Indonesia Logo",
  },
  {
    id: "2",
    company: "PT Pusat Gadai Indonesia",
    position: "Fullstack Developer",
    period: "May 2024 – July 2025",
    description:
      "Built and maintained multiple internal enterprise applications (HRIS, payroll, attendance, inventory, and operations). Developed backend services using Laravel, including queue systems for customer programs. Created a barcode-based attendance application used in company-wide events. Improved UI consistency and performance across internal platforms. Tech Stack: Nuxt.js, Pinia, Tailwind CSS, Laravel",
    logo: "/logo-pusat-gadai.jpg",
    logoAlt: "Pusat Gadai Indonesia Logo",
  },
  {
    id: "3",
    company: "PT Eiron Jaya Sejati",
    position: "Part-Time Fullstack Developer",
    period: "July 2023 – February 2024",
    description:
      "Maintained and enhanced CMS for company profile website. Implemented feature improvements and ensured system stability. Tech Stack: React.js, CodeIgniter 4, MySQL",
    logo: "/logo-eiron-jaya-sejati.jpg",
    logoAlt: "Eiron Jaya Sejati Logo",
  },
  {
    id: "4",
    company: "PT Genta Fajar Aksesoris",
    position: "Web Developer Intern",
    period: "September 2019 – March 2020",
    description:
      "Built and designed company profile websites using WordPress and Elementor. Optimized SEO using Yoast and improved visual content using HTML, CSS, and Photoshop. Tech Stack: WordPress, Elementor",
    logoAlt: "Genta Fajar Aksesoris Logo",
  },
];

export default function Experience({ experiences = defaultExperiences }: ExperienceProps) {
  const getExperienceHref = (id: string) => ({
    pathname: "/experience",
    hash: `experience-${id}`,
  });

  return (
    <section id="experience" className="relative py-20 sm:py-28 bg-gradient-to-b from-slate-950 via-indigo-950/60 to-slate-950 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <style>{`
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
          @keyframes twinkle-slow {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.9; }
          }
          @keyframes sparkle {
            0%, 100% { opacity: 0.1; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }
          @keyframes flicker {
            0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 0.5; }
            20%, 24%, 55% { opacity: 1; }
          }
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 4px currentColor; }
            50% { box-shadow: 0 0 12px currentColor, 0 0 20px currentColor; }
          }
          .star-twinkle { animation: twinkle 3s ease-in-out infinite; }
          .star-twinkle-slow { animation: twinkle-slow 4s ease-in-out infinite; }
          .star-sparkle { animation: sparkle 2.5s ease-in-out infinite; }
          .star-flicker { animation: flicker 3s ease-in-out infinite; }
          .star-pulse { animation: pulse-glow 2s ease-in-out infinite; }
        `}</style>
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-gradient-radial from-purple-400/60 via-indigo-500/40 to-transparent rounded-full blur-3xl -translate-y-1/3 -translate-x-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-radial from-violet-500/60 via-pink-500/40 to-transparent rounded-full blur-3xl translate-y-1/3 translate-x-1/4"></div>
        <div className="star-sparkle absolute top-1/2 left-1/3 w-1 h-1 bg-purple-300 rounded-full blur-sm shadow-lg shadow-purple-400/50"></div>
        <div className="star-flicker absolute bottom-1/3 right-1/4 w-0.5 h-0.5 bg-violet-400 rounded-full blur-sm shadow-lg shadow-violet-400/40"></div>
        <div className="star-pulse absolute top-1/4 right-1/3 w-1 h-1 bg-white rounded-full blur-sm opacity-70 shadow-lg shadow-white/30"></div>
        <div className="star-twinkle absolute bottom-1/4 left-1/4 w-0.5 h-0.5 bg-pink-300 rounded-full blur-sm shadow-lg shadow-pink-400/40"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              EXPERIENCE
            </span>
          </h2>
        </div>

        <div className="space-y-8 sm:space-y-12 mb-16 sm:mb-20">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 sm:left-8 top-20 w-0.5 h-24 bg-gradient-to-b from-blue-500 to-transparent"></div>
              )}

              <div className="flex gap-6 sm:gap-8">
                <div className="flex-shrink-0 relative">
                  <Link href={getExperienceHref(exp.id)} aria-label={`View ${exp.position} details`} className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center shrink-0 relative z-10 border-2 transition-transform duration-300 hover:scale-105 focus-visible:scale-105 ${
                    exp.logo ? "bg-gray-900 border-blue-500" : "bg-gray-600 border-gray-500"
                  }`}>
                    {exp.logo && (
                      <Image
                        src={exp.logo}
                        alt={exp.logoAlt}
                        width={80}
                        height={80}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-full"
                      />
                    )}
                    {!exp.logo && (
                      <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-gray-400">
                        <MdDomain className="w-8 h-8 sm:w-10 sm:h-10" />
                      </div>
                    )}
                  </Link>
                </div>

                <div className="flex-grow pt-1 sm:pt-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0 mb-2">
                    <Link href={getExperienceHref(exp.id)} className="text-lg sm:text-xl font-bold text-white hover:text-blue-300 transition-colors">
                      {exp.position}
                    </Link>
                    <span className="text-xs sm:text-sm text-gray-400 font-medium">
                      {exp.period}
                    </span>
                  </div>

                  {/* Company */}
                  <p className="text-sm sm:text-base text-gray-300 font-semibold mb-3 sm:mb-4">
                    {exp.company}
                  </p>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 line-clamp-3">
                    {exp.description}
                  </p>

                  {/* Hover effect for expand */}
                  <Link href={getExperienceHref(exp.id)} className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm font-semibold transition-colors inline-flex items-center">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
