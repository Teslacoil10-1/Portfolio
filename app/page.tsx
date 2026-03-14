"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import jellyFish from "../public/jellyfish.webp";
import BlurText from "@/components/BlurText";
import About from "./about-me";
import "./styles.css"
import Projects from "./Projects";
import Concepts from "./Concepts";

const Particles = dynamic(() => import("@/components/Particles"), {
  ssr: false,
});
const TechRibbon = dynamic(() => import("@/components/TechRibbon"), {
  ssr: false,
});
const Expertise = dynamic(() => import("@/components/Expertise"), {
  ssr: false,
});

export default function Home() {
  const containerRef = useRef(null);
  const projectsRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const jellyfishY = useTransform(scrollYProgress, [0, 1], ["-10%", "-20%"]);
  const textY = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const projectsY = useTransform(scrollYProgress, [0.4, 0.8], ["100px", "0px"]);
  const projectsOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  return (
    <main ref={containerRef} className="portfolio-container">
      <div className="particles-container">
        <Particles
          quantity={50}
          ease={80}
          color="#ffffff"
          refresh={false}
        />
      </div>

      <div className="hero-section">
        <motion.div
          style={{ y: jellyfishY }}
          className="jellyfish-container"
        >
          <Image
            src={jellyFish}
            alt="Iridescent glowing jellyfish"
            sizes="(max-width: 768px) 100vw, 100vw"
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
          className="hero-text-container"
        >
          <BlurText
            text="Nat W."
            delay={150}
            className="hero-name"
          />
          <p className="hero-title">
            Full-Stack developer
          </p>

          <div className="scroll-indicator">
            <div className="scroll-line"></div>
          </div>
        </motion.div>
      </div>
      <div className="tech-ribbon-container">
        <TechRibbon />
      </div>
      <div className="expertise-container">
        <Expertise />
      </div>
      <About />
      <Projects />
      <Concepts />
    </main>
  );
}