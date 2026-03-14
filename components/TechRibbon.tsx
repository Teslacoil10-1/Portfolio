"use client";

import { motion } from "framer-motion";

const techs = [
  "React", "Next.js", "Node.js", "Python", "JavaScript",
  "CSS", "HTML", "JSON", "fire Base", "Express", "Mongo-DB"
];

export default function TechRibbon() {
  return (
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
          className="flex flex-shrink-0 items-center gap-8 md:gap-12 pr-8 md:pr-12 will-change-transform transform-gpu"
        >
          {techs.map((tech, index) => (
            <TechItem key={`a-${index}`} name={tech} />
          ))}
          {techs.map((tech, index) => (
            <TechItem key={`b-${index}`} name={tech} />
          ))}
        </motion.div>
      </div>
      <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-black to-transparent z-10" />
    </section>
  );
}

function TechItem({ name }: { name: string }) {
  return (
    <span className="text-xl md:text-3xl font-bold tracking-widest text-white uppercase opacity-100 whitespace-nowrap">
      {name}
    </span>
  );
}