"use client";

import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxt,
  SiNestjs,
  SiExpress,
  SiNodedotjs,
  SiGo,
  SiLaravel,
  SiCodeigniter,
  SiBootstrap,
  SiFlutter,
} from "react-icons/si";

interface TechStackProps {
  technologies?: Array<{
    icon: React.ComponentType<{ className?: string }>;
    name: string;
    color: string;
  }>;
}

const defaultTechnologies = [
  { icon: SiReact, name: "React", color: "text-blue-400" },
  { icon: SiNextdotjs, name: "Next.js", color: "text-white" },
  { icon: SiVuedotjs, name: "Vue", color: "text-green-400" },
  { icon: SiNuxt, name: "Nuxt", color: "text-green-500" },
  { icon: SiNestjs, name: "NestJS", color: "text-red-500" },
  { icon: SiExpress, name: "Express", color: "text-gray-300" },
  { icon: SiNodedotjs, name: "Node.js", color: "text-green-600" },
  { icon: SiGo, name: "Go Lang", color: "text-cyan-400" },
  { icon: SiLaravel, name: "Laravel", color: "text-red-600" },
  { icon: SiCodeigniter, name: "CodeIgniter", color: "text-red-500" },
  { icon: SiBootstrap, name: "Bootstrap", color: "text-purple-600" },
  { icon: SiFlutter, name: "Flutter", color: "text-blue-500" },
];

export default function TechStack({ technologies = defaultTechnologies }: TechStackProps) {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-slate-950 via-purple-950/60 to-slate-950 overflow-hidden">
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
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-radial from-cyan-400/60 via-purple-500/40 to-transparent rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4"></div>
        <div className="absolute top-1/2 right-0 w-[700px] h-[700px] bg-gradient-radial from-violet-500/60 via-pink-500/40 to-transparent rounded-full blur-3xl translate-y-1/3 translate-x-1/4"></div>
        {/* Star accents - twinkling */}
        <div className="star-sparkle absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-300 rounded-full blur-sm shadow-lg shadow-cyan-400/50"></div>
        <div className="star-flicker absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-purple-400 rounded-full blur-sm shadow-lg shadow-purple-400/40"></div>
        <div className="star-pulse absolute top-1/2 left-1/3 w-1 h-1 bg-white rounded-full blur-sm opacity-70 shadow-lg shadow-white/30"></div>
        <div className="star-twinkle absolute bottom-1/3 right-1/3 w-0.5 h-0.5 bg-pink-300 rounded-full blur-sm shadow-lg shadow-pink-400/40"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-14">
          <p className="text-xs sm:text-sm text-gray-400 mb-2 font-medium tracking-widest uppercase">
            EXPERIENCE WITH
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient backgrounds for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          <div className="flex gap-4 sm:gap-6 pb-2" style={{ scrollBehavior: "smooth", scrollbarWidth: "none", msOverflowStyle: "none" }}>
            <style>{`
              div::-webkit-scrollbar {
                display: none;
              }
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(calc(-50% - 1rem));
                }
              }
              .animate-scroll {
                animation: scroll 20s linear infinite;
              }
              .animate-scroll:hover {
                animation-play-state: paused;
              }
            `}</style>

            <div className="flex gap-4 sm:gap-6 animate-scroll">
              {[...technologies, ...technologies].map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <div key={`${tech.name}-${index}`} className="flex-shrink-0 group w-24 sm:w-28">
                    <div className="flex flex-col items-center justify-center gap-3 p-4 sm:p-6 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-blue-500 transition-all duration-300 cursor-pointer hover:bg-gray-800/50 h-28">
                      <IconComponent className={`w-8 h-5 sm:w-10 sm:h-10 ${tech.color} transition-transform duration-300 group-hover:scale-110`} />
                      <span className="text-xs text-gray-300 font-medium text-center whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
