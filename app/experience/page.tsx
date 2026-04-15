"use client";

import { Navbar, Footer } from "../components";
import Image from "next/image";
import Link from "next/link";
import { MdDomain } from "react-icons/md";
import { FiCheckCircle } from "react-icons/fi";

interface ExperienceDetail {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  logo?: string;
  logoAlt: string;
  achievements: string[];
  techStack: string[];
}

const experiences: ExperienceDetail[] = [
  {
    id: "1",
    company: "PT Praweda Ciptakarsa Informatika (Samudera Indonesia)",
    position: "Fullstack Developer",
    period: "July 2025 – Present",
    description:
      "Developed a comprehensive shipping line application from the ground up using scalable and modular architecture. Implemented sophisticated payment features including manual transactions and seamless third-party payment gateway integration. Built accounting journal features and successfully integrated financial data into centralized corporate systems (CODA). Developed scheduled services in Golang to automate data extraction from external systems and ensure data consistency. Contributed to system reliability and established deployment pipelines using Docker and CI/CD practices, ensuring smooth production releases.",
    logo: "/logo-soedarpo.png",
    logoAlt: "Samudera Indonesia Logo",
    achievements: [
      "Architected and developed end-to-end shipping line application with modular components",
      "Implemented multi-gateway payment system supporting multiple payment methods",
      "Integrated financial data with CODA centralized accounting system",
      "Built Golang microservices for automated data extraction and processing",
      "Established Docker and CI/CD deployment pipelines for production stability",
      "Improved system performance and reliability through architectural optimization",
    ],
    techStack: ["Next.js", "NestJS", "Golang", "Docker", "Nginx", "Jenkins", "PostgreSQL"],
  },
  {
    id: "2",
    company: "PT Pusat Gadai Indonesia",
    position: "Fullstack Developer",
    period: "May 2024 – July 2025",
    description:
      "Built and maintained multiple mission-critical internal enterprise applications serving the entire organization. Developed comprehensive HRIS, payroll, attendance tracking, inventory management, and operations platforms. Created innovative barcode-based attendance application that was deployed company-wide for events and daily operations. Improved UI consistency across all internal platforms and optimized application performance. Implemented backend services using Laravel with advanced queue systems for processing customer programs efficiently.",
    logo: "/logo-pusat-gadai.jpg",
    logoAlt: "Pusat Gadai Indonesia Logo",
    achievements: [
      "Developed 5+ internal enterprise applications (HRIS, payroll, attendance, inventory, operations)",
      "Created innovative barcode-based attendance system for company-wide deployment",
      "Implemented Laravel queue systems for efficient customer program processing",
      "Improved UI consistency and performance across internal platforms",
      "Established scalable architecture for handling enterprise-level data",
      "Mentored junior developers on best practices and code quality standards",
    ],
    techStack: ["Nuxt.js", "Pinia", "Tailwind CSS", "Laravel", "MySQL", "Redis"],
  },
  {
    id: "3",
    company: "PT Eiron Jaya Sejati",
    position: "Part-Time Fullstack Developer",
    period: "July 2023 – February 2024",
    description:
      "Maintained and enhanced the company profile website CMS while studying, gaining valuable hands-on experience in production system management. Implemented feature improvements based on business requirements and ensured system stability and performance. Worked with both frontend and backend systems to deliver seamless user experiences.",
    logo: "/logo-eiron-jaya-sejati.jpg",
    logoAlt: "Eiron Jaya Sejati Logo",
    achievements: [
      "Maintained and enhanced production CMS for company website",
      "Implemented feature improvements and bug fixes",
      "Ensured system stability and 99.9% uptime",
      "Optimized database queries for improved performance",
      "Collaborated with stakeholders on feature requirements",
      "Documented codebase for future maintainability",
    ],
    techStack: ["React.js", "CodeIgniter 4", "MySQL", "JavaScript", "HTML/CSS"],
  },
  {
    id: "4",
    company: "PT Genta Fajar Aksesoris",
    position: "Web Developer Intern",
    period: "September 2019 – March 2020",
    description:
      "Built and designed professional company profile websites using WordPress and Elementor. Optimized websites for search engines using Yoast SEO and created compelling visual content using HTML, CSS, and Photoshop. Gained foundational knowledge in web design, development, and digital marketing during this formative internship experience.",
    logoAlt: "Genta Fajar Aksesoris Logo",
    achievements: [
      "Designed and built 3+ professional company profile websites",
      "Optimized SEO using Yoast and achieved top search rankings",
      "Created custom graphics and visual content with Photoshop",
      "Implemented responsive design for mobile and desktop",
      "Improved website performance and load times",
      "Gained foundational web development and design experience",
    ],
    techStack: ["WordPress", "Elementor", "HTML/CSS", "JavaScript", "Photoshop", "SEO"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      <Navbar />

      <section className="relative min-h-[500px] pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-b from-slate-950 via-purple-950/60 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <style>{`
            @keyframes twinkle {
              0%, 100% { opacity: 0.3; }
              50% { opacity: 1; }
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
            .star-sparkle { animation: sparkle 2.5s ease-in-out infinite; }
            .star-flicker { animation: flicker 3s ease-in-out infinite; }
            .star-pulse { animation: pulse-glow 2s ease-in-out infinite; }
          `}</style>
          <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-gradient-radial from-cyan-400/60 via-blue-500/40 to-transparent rounded-full blur-3xl -translate-y-1/3 -translate-x-1/3"></div>
          <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-gradient-radial from-purple-400/60 via-indigo-500/40 to-transparent rounded-full blur-3xl translate-y-1/3 translate-x-1/4"></div>
          <div className="star-sparkle absolute top-1/3 left-1/3 w-1 h-1 bg-cyan-300 rounded-full blur-sm shadow-lg shadow-cyan-400/50"></div>
          <div className="star-flicker absolute top-1/4 right-1/4 w-0.5 h-0.5 bg-purple-300 rounded-full blur-sm shadow-lg shadow-purple-400/40"></div>
          <div className="star-pulse absolute bottom-1/3 right-1/3 w-1 h-1 bg-white rounded-full blur-sm opacity-70 shadow-lg shadow-white/30"></div>
          <div className="star-twinkle absolute bottom-1/4 left-1/4 w-0.5 h-0.5 bg-pink-300 rounded-full blur-sm shadow-lg shadow-pink-400/40"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">Professional</span> Journey
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my career progression, projects, and technical expertise across diverse technologies and industries.
          </p>
        </div>
      </section>

      {/* Experience Details Section */}
      <section className="relative py-12 sm:py-16 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <style>{`
            @keyframes gradient-shift {
              0%, 100% { opacity: 0.15; }
              50% { opacity: 0.35; }
            }
            .gradient-animate { animation: gradient-shift 8s ease-in-out infinite; }
          `}</style>
          <div className="absolute top-1/4 left-1/2 w-[900px] h-[900px] bg-gradient-radial from-blue-500/15 via-cyan-500/10 to-transparent rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 gradient-animate"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-gradient-radial from-purple-500/12 via-indigo-500/8 to-transparent rounded-full blur-3xl gradient-animate" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="space-y-10 sm:space-y-16">
              {experiences.map((exp, index) => (
                <div key={exp.id} id={`experience-${exp.id}`} className="group relative scroll-mt-28">
                  {index !== 0 && (
                    <div className="absolute top-0 left-1/2 w-1 h-10 sm:h-16 -translate-x-1/2 -translate-y-full bg-gradient-to-b from-blue-500/50 to-blue-500/50"></div>
                  )}

                  {index !== experiences.length - 1 && (
                    <div className="absolute bottom-0 left-1/2 w-1 h-10 sm:h-16 -translate-x-1/2 translate-y-full bg-gradient-to-b from-blue-500/50 to-blue-500/50"></div>
                  )}

                  <div className="relative bg-gradient-to-br from-slate-900/70 to-slate-950/70 border-2 border-blue-500/40 rounded-2xl p-6 sm:p-9 backdrop-blur-sm group-hover:border-blue-500/70 group-hover:bg-gradient-to-br group-hover:from-slate-900/90 group-hover:to-slate-950/90 transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-500/30">
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-t-2xl"></div>

                    <div className="flex justify-center mb-5">
                      <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-xl flex items-center justify-center bg-gray-900/70 border-2 border-gray-700 group-hover:border-blue-500/60 transition-all duration-300">
                        {exp.logo && (
                          <Image
                            src={exp.logo}
                            alt={exp.logoAlt}
                            width={112}
                            height={112}
                            className="w-16 h-16 sm:w-24 sm:h-24 object-contain"
                          />
                        )}
                        {!exp.logo && (
                          <div className="w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center text-gray-400">
                            <MdDomain className="w-8 h-8 sm:w-12 sm:h-12" />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="text-center mb-5">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-sm sm:text-base text-blue-400 font-bold mb-2">
                        {exp.company}
                      </p>
                      <span className="text-xs text-cyan-400 font-semibold bg-blue-500/30 px-2 py-0.5 rounded-lg inline-block">
                        {exp.period}
                      </span>
                    </div>

                    <div className="h-0.5 bg-gradient-to-r from-blue-500/20 via-blue-500/50 to-blue-500/20 mb-5"></div>

                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    <div className="mb-5">
                      <h4 className="text-xs sm:text-sm font-bold text-gray-100 mb-2 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                        Key Achievements
                      </h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex gap-2 text-xs sm:text-sm text-gray-300">
                            <FiCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-gray-100 mb-2 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center sm:justify-start">
                        {exp.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 sm:px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500/25 to-purple-500/25 border border-blue-500/50 text-blue-300 rounded-md group-hover:from-blue-500/40 group-hover:to-purple-500/40 group-hover:border-blue-400/70 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-slate-950 via-cyan-950/40 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-400/40 via-blue-500/30 to-transparent rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Interested in working together?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Let&apos;s discuss how I can help bring your vision to life with cutting-edge technology and best practices.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/50"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
