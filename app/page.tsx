"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import jellyFish from "../public/jellyfish.webp";
import BlurText from "@/components/BlurText";
// Dynamically import heavy components to reduce initial bundle size
const Particles = dynamic(() => import("@/components/Particles"), { ssr: false });
const TechRibbon = dynamic(() => import("@/components/TechRibbon"), { ssr: false });
const Expertise = dynamic(() => import("@/components/Expertise"), { ssr: false });
const ProjectGallery = dynamic(() => import("@/components/ProjectGallery"), { ssr: false });

export default function Home() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax transforms
  const jellyfishY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const textY = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <main
      ref={containerRef}
      className="relative w-full bg-black overflow-x-hidden selection:bg-pink-500/30"
    >
      {/* Particle Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles
          className="absolute inset-0"
          quantity={50} // reduced from 100
          ease={80}
          color="#ffffff"
          refresh={false} // disable constant refresh for performance
        />
      </div>

      {/* Hero Section */}
      <div className="relative w-full min-h-[140vh]">
        <motion.div
          style={{ y: jellyfishY }}
          className="relative z-10 w-full mix-blend-screen opacity-90 will-change-transform"
        >
          <Image
            src={jellyFish}
            alt="Iridescent glowing jellyfish"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
            placeholder="blur"
            priority={true}
          />
        </motion.div>

        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center z-20 pointer-events-none"
        >
          <BlurText
            text="Nat W."
            delay={150}
            className="text-7xl md:text-9xl font-bold tracking-tighter text-white drop-shadow-md"
          />
          <p className="mt-6 text-lg md:text-xl text-cyan-200/80 tracking-[0.5em] uppercase font-light drop-shadow-md">
            Full-Stack developer
          </p>

          <div className="absolute bottom-12 animate-bounce opacity-70">
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-pink-500 to-transparent"></div>
          </div>
        </motion.div>
      </div>

      {/* Tech Ribbon */}
      <div className="relative z-30 -mt-32 mb-20">
        <TechRibbon />
      </div>

      {/* Expertise Section */}
      <div className="relative z-30 mb-20">
        <Expertise />
      </div>

      {/* Project Gallery */}
      <div className="relative z-20 pb-20">
        <ProjectGallery />
      </div>

      {/* Footer */}
      <footer className="relative z-20 w-full py-10 border-t border-white/10 bg-black/40 backdrop-blur-md text-center">
        <p className="text-gray-500 text-xs tracking-widest uppercase">
          © 2026 Nathaniel Whittingham.
        </p>
      </footer>
    </main>
  );
}
