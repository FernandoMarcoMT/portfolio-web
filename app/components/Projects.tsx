"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { projects } from "../projects/projectData";

export default function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section id="projects" className="relative py-20 sm:py-28 bg-linear-to-b from-slate-950 via-blue-950/60 to-slate-950 overflow-hidden">
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
        <div className="absolute top-0 right-0 w-175 h-175 bg-gradient-radial from-blue-400/60 via-cyan-500/40 to-transparent rounded-full blur-3xl -translate-y-1/3 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-175 h-175 bg-gradient-radial from-indigo-500/60 via-purple-500/40 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
        <div className="star-sparkle absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-300 rounded-full blur-sm shadow-lg shadow-cyan-400/50"></div>
        <div className="star-flicker absolute bottom-1/4 left-1/3 w-0.5 h-0.5 bg-blue-400 rounded-full blur-sm shadow-lg shadow-blue-400/50"></div>
        <div className="star-pulse absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full blur-sm opacity-70 shadow-lg shadow-white/30"></div>
        <div className="star-twinkle absolute bottom-1/3 right-1/4 w-0.5 h-0.5 bg-indigo-400 rounded-full blur-sm shadow-lg shadow-indigo-400/40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              PROJECTS
            </span>
          </h2>
        </div>

        <div className="relative group">
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-6 sm:gap-8 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollBehavior: "smooth", scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {projects.map((project) => (
              <Link key={project.id} href={`/projects#${project.slug}`}>
                <div className="shrink-0 w-80 sm:w-96 group/card relative h-72 sm:h-80 rounded-xl overflow-hidden cursor-pointer">
                  <div className="relative w-full h-full">
                    <Image
                      src={project.cardImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                    />
                  </div>

                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300 mb-4">
                        {project.summary}
                      </p>
                      <div className="flex items-center text-white text-sm font-medium group-hover/card:text-orange-400 transition-colors">
                        View Project
                        <svg
                          className="w-4 h-4 ml-2 transform group-hover/card:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 border border-gray-700 rounded-xl group-hover/card:border-orange-500/50 transition-colors duration-300"></div>
                </div>
              </Link>
            ))}
          </div>

          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 sm:-translate-x-8 z-10 bg-orange-500 hover:bg-orange-600 text-white p-2 sm:p-3 rounded-full transition-all duration-300 shadow-lg"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 sm:translate-x-8 z-10 bg-orange-500 hover:bg-orange-600 text-white p-2 sm:p-3 rounded-full transition-all duration-300 shadow-lg"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
