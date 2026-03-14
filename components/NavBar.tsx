"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import GooeyNav from "@/components/GooeyNav";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();


  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
  ];


  useEffect(() => {
    const handleScroll = () => {
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
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-2" 
          : "bg-transparent border-b border-transparent py-6" 
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between">
       
          <div className="flex-shrink-0 z-50">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-500 hover:opacity-80 transition-opacity"
            >
            My portfolio
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-6">
           
            <GooeyNav items={navLinks} />
          </div>

          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="group relative rounded-full px-6 py-2 text-sm font-medium text-white transition-all duration-300"
            >
    
              <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-pink-500/50 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all duration-300" />

              <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <span className="relative z-10">Connect</span>
            </Link>
          </div>
        </div>
      </div>

   
     
    </nav>
  );
}