"use client";

import { motion } from "framer-motion";
import { MapPin, Code2, Sparkles } from "lucide-react";
import BlurText from "@/components/BlurText"; 

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function About() {
  return (
    <section className="relative z-20 w-full py-20 px-4 max-w-6xl mx-auto min-h-screen flex flex-col justify-center">
      
      <div className="mb-12 md:mb-20">
        <BlurText 
          text="About Me." 
          delay={100} 
          className="text-4xl md:text-6xl font-bold text-white mb-6" 
        />
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        /* Changed items-start to items-center to balance the shorter text */
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center" 
      >

        {/* Bumped up text size and line height slightly to give the text more visual weight */}
        <motion.div variants={fadeIn} className="lg:col-span-7 space-y-8 text-gray-300 text-lg md:text-xl leading-relaxed">
          <p>
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 font-bold">Nathaniel Whittingham</span>, a 15-year-old full-stack developer. 
            I build high-performance web applications that bridge the gap between complex backend logic and immersive, creative design.
          </p>
          <p>
            Whether I'm architecting scalable databases or experimenting with WebGL for 3D browser elements, my focus is always on crafting flawless digital experiences. 
            (And thanks to the Scottish weather, I have plenty of time to stay indoors and code!)
          </p>
        </motion.div>

        <motion.div variants={fadeIn} className="lg:col-span-5 space-y-5">
          {/* Card 1 - Pink Hover Glow */}
          <div className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05] hover:border-pink-500/30 hover:shadow-[0_0_20px_rgba(236,72,153,0.15)]">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 rounded-lg bg-pink-500/10 text-pink-400 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-xl">Location</h3>
            </div>
            <p className="text-gray-400 pl-[4.25rem]">Scotland, UK</p>
          </div>

          {/* Card 2 - Cyan Hover Glow */}
          <div className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05] hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-xl">Core Stack</h3>
            </div>
            <p className="text-gray-400 pl-[4.25rem]">MERN, Next.js, Tailwind CSS</p>
          </div>

          {/* Card 3 - Purple Hover Glow */}
          <div className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05] hover:border-purple-500/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-xl">Current Focus</h3>
            </div>
            <p className="text-gray-400 pl-[4.25rem]">Modern SaaS Apps</p>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}