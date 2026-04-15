"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  logo?: string;
  links?: NavLink[];
}

const defaultLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ logo = "FM", links = defaultLinks }: NavbarProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout> | undefined;

    const handleScroll = () => {
      setIsVisible(false);

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800 transition-all duration-300 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link 
            href="/" 
            className="text-lg sm:text-xl font-bold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:from-cyan-300 hover:to-purple-400 transition-all"
          >
            {logo}
          </Link>

          <ul className="hidden sm:flex gap-8 items-center">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button className="sm:hidden p-2 text-gray-300 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
