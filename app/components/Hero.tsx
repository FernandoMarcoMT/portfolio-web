"use client";

import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  title?: string;
  description?: string;
  profileImage?: string;
  profileAlt?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function Hero({
  description = "Fullstack developer experienced in building enterprise applications, integrating payment systems, and designing microservices architectures.",
  profileImage = "/avatar.png",
  profileAlt = "Profile avatar",
  primaryButtonText = "Get in Touch",
  primaryButtonHref = "#contact",
  secondaryButtonText = "Download CV",
  secondaryButtonHref = "/cv.pdf",
}: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/50 to-slate-950 pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
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
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-radial from-cyan-400/50 via-blue-500/30 to-transparent rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4"></div>
        <div className="absolute top-1/3 right-0 w-[800px] h-[800px] bg-gradient-radial from-purple-500/50 via-pink-500/30 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="star-sparkle absolute top-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full blur-sm shadow-lg shadow-cyan-400/50"></div>
        <div className="star-flicker absolute top-1/2 right-1/4 w-1 h-1 bg-purple-300 rounded-full blur-sm shadow-lg shadow-purple-400/40"></div>
        <div className="star-pulse absolute bottom-1/3 left-1/2 w-0.5 h-0.5 bg-blue-400 rounded-full blur-sm shadow-lg shadow-blue-400/50"></div>
        <div className="star-twinkle absolute top-1/3 left-1/6 w-1 h-1 bg-white rounded-full blur-sm opacity-70 shadow-lg shadow-white/30"></div>
        <div className="star-twinkle-slow absolute bottom-1/4 right-1/3 w-0.5 h-0.5 bg-pink-400 rounded-full blur-sm shadow-lg shadow-pink-400/40"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center text-center gap-8 sm:gap-10">
          <div className="hidden relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/30 via-cyan-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
            <Image
              src={profileImage}
              alt={profileAlt}
              width={256}
              height={256}
              className="object-contain drop-shadow-2xl relative z-10"
              priority
            />
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white mb-4 sm:mb-6">
              <div>I build scalable</div>
              <div>web applications and craft{" "}
              <span className="bg-gradient-to-r from-pink-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
                Robust Systems
              </span></div>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-center">
            <Link
              href={primaryButtonHref}
              className="px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 text-sm sm:text-base"
            >
              {primaryButtonText}
            </Link>
            <Link
              href={secondaryButtonHref}
              className="px-8 sm:px-10 py-3 sm:py-4 rounded-full border-2 border-gray-500 text-white font-semibold hover:border-gray-300 hover:bg-gray-900/50 transition-all duration-300 text-sm sm:text-base"
            >
              {secondaryButtonText}
            </Link>
          </div>

          
        </div>
      </div>
    </section>
  );
}
