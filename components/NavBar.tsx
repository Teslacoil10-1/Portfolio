"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import GooeyNav from "@/components/GooeyNav"; // Make sure this path matches your folder structure

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Define the links here so we can pass them to GooeyNav
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
  ];

  // 1. Scroll Detection Effect
  useEffect(() => {
    const handleScroll = () => {
      // If user scrolls down more than 20px, switch to "Scrolled" mode
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-2" // Compact & Dark when scrolled
          : "bg-transparent border-b border-transparent py-6" // Tall & Transparent at top
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* --- LOGO --- */}
          <div className="flex-shrink-0 z-50">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-500 hover:opacity-80 transition-opacity"
            >
              Portfolio
            </Link>
          </div>

          {/* --- DESKTOP MENU (Center) --- */}
          <div className="hidden md:flex items-center gap-6">
            {/* We pass the links array to your new GooeyNav component */}
            <GooeyNav items={navLinks} />
          </div>

          {/* --- CTA BUTTON (Right) --- */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="group relative rounded-full px-6 py-2 text-sm font-medium text-white transition-all duration-300"
            >
              {/* Button Border/Glow */}
              <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-pink-500/50 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all duration-300" />
              {/* Button Background */}
              <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <span className="relative z-10">Connect</span>
            </Link>
          </div>

          {/* --- MOBILE HAMBURGER BUTTON --- */}
          <div className="flex md:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)} // Close menu on click
              className={`text-3xl font-light tracking-widest transition-colors duration-300 ${
                isActive ? "text-pink-500" : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
        
        <Link
          href="/contact"
          onClick={() => setIsOpen(false)}
          className="mt-8 px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-pink-500 transition-all text-lg tracking-wide"
        >
          Connect
        </Link>
      </div>
    </nav>
  );
}