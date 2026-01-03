"use client";

import { motion } from "framer-motion";

const techs = [
  "React", "Next.js", "Node.js", "Python", "JavaScript",
  "CSS", "HTML", "JSON", "Blender", "Express", "Mongo-DB"
];

export default function TechRibbon() {
  return (
    // REDUCED PADDING: Changed py-12 to py-6 for a thinner ribbon
    <section className="relative w-full overflow-hidden bg-black py-6 border-y border-white/10">
      
      <div className="flex">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 20, // Slightly faster rotation since it's smaller
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex flex-shrink-0 items-center gap-12 pr-12"
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
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />
    </section>
  );
}

function TechItem({ name }: { name: string }) {
  return (
    // BRIGHT WHITE TEXT: Removed 'text-transparent' and gradient classes.
    // REDUCED SIZE: Changed text-5xl to text-2xl/3xl for a "smaller" look.
    <span className="text-2xl md:text-3xl font-bold tracking-widest text-white uppercase opacity-100 whitespace-nowrap">
      {name}
    </span>
  );
}