"use client";

import { motion } from "framer-motion";

const techs = [
  "React", "Next.js", "Node.js", "Python", "JavaScript",
  "CSS", "HTML", "JSON", "Blender", "Express", "Mongo-DB"
];

export default function TechRibbon() {
  return (
    // RESPONSIVE: Thinner padding on mobile
    <section className="relative w-full overflow-hidden bg-black py-4 md:py-6 border-y border-white/10">
      
      <div className="flex">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 20, 
            repeat: Infinity,
            ease: "linear",
          }}
          // OPTIMIZATION: will-change-transform and transform-gpu for hardware acceleration
          // RESPONSIVE: gap-8 on mobile, gap-12 on desktop
          className="flex flex-shrink-0 items-center gap-8 md:gap-12 pr-8 md:pr-12 will-change-transform transform-gpu"
        >
          {/* List 1 */}
          {techs.map((tech, index) => (
            <TechItem key={`a-${index}`} name={tech} />
          ))}
          
          {/* List 2 (Loop) */}
          {techs.map((tech, index) => (
            <TechItem key={`b-${index}`} name={tech} />
          ))}
        </motion.div>
      </div>
      
      {/* Edges Fade */}
      <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-black to-transparent z-10" />
    </section>
  );
}

function TechItem({ name }: { name: string }) {
  return (
    // RESPONSIVE: Smaller text on mobile
    <span className="text-xl md:text-3xl font-bold tracking-widest text-white uppercase opacity-100 whitespace-nowrap">
      {name}
    </span>
  );
}