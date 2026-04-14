"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}

interface FooterCTAProps {
  email?: string;
  socials?: SocialLink[];
}

const defaultSocials: SocialLink[] = [
  {
    icon: FiGithub,
    href: "https://github.com",
    label: "GitHub",
  },
  {
    icon: FiLinkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: FiTwitter,
    href: "https://twitter.com",
    label: "Twitter",
  },
  {
    icon: FiMail,
    href: "mailto:hello@example.com",
    label: "Email",
  },
];

export default function FooterCTA({
  email = "hello@example.com",
  socials = defaultSocials,
}: FooterCTAProps) {
  return (
    <footer className="relative bg-gradient-to-b from-slate-950 via-cyan-950/60 to-slate-950 border-t border-gray-800 overflow-hidden">
      {/* Background effects */}
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
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-radial from-cyan-400/60 via-blue-500/40 to-transparent rounded-full blur-3xl -translate-y-1/3 -translate-x-1/4"></div>
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-radial from-indigo-500/60 via-purple-500/40 to-transparent rounded-full blur-3xl translate-y-1/3 translate-x-1/4"></div>
        {/* Star accents - twinkling */}
        <div className="star-sparkle absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-300 rounded-full blur-sm shadow-lg shadow-cyan-400/50"></div>
        <div className="star-flicker absolute bottom-1/4 left-1/4 w-0.5 h-0.5 bg-purple-400 rounded-full blur-sm shadow-lg shadow-purple-400/40"></div>
        <div className="star-pulse absolute top-1/2 left-1/3 w-1 h-1 bg-white rounded-full blur-sm opacity-70 shadow-lg shadow-white/30"></div>
        <div className="star-twinkle absolute bottom-1/3 right-1/4 w-0.5 h-0.5 bg-indigo-400 rounded-full blur-sm shadow-lg shadow-indigo-400/40"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col items-center justify-center text-center gap-12 sm:gap-14">
          {/* Main CTA Section */}
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Let&apos;s Work Together
            </h2>
            <p className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed">
              I&apos;m always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            {/* Email Button */}
            <Link
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <span>Get In Touch</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 sm:gap-8">
            {socials.map((social) => {
              const IconComponent = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label={social.label}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-0 group-hover:opacity-20 blur transition-all duration-300"></div>
                  <div className="relative p-3 sm:p-4 rounded-full border border-gray-700 group-hover:border-orange-500 text-gray-400 group-hover:text-orange-400 transition-all duration-300">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

          {/* Bottom Info */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-6 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Marco. All rights reserved.</p>
            <div className="flex items-center gap-6 sm:gap-8">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
