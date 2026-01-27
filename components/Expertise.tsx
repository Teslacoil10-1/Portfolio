"use client";

import SpotlightCard from "@/components/SpotlightCard";
import { Code, Layout, Database } from "lucide-react";

const services = [
  {
    title: "Frontend Engineering",
    description: "Crafting responsive, high-performance user interfaces with React, Next.js, and Tailwind CSS. Obsessed with micro-interactions.",
    icon: Layout,
    color: "rgba(6, 182, 212, 0.3)", // Cyan glow
  },
  {
    title: "Backend Architecture",
    description: "Building scalable APIs and robust database schemas using Node.js, Express, and MongoDB. Secure, fast, and reliable.",
    icon: Database,
    color: "rgba(236, 72, 153, 0.3)", // Pink glow
  },
  {
    title: "Creative Development",
    description: "Bridging the gap between design and code. implementing WebGL (Three.js/R3F) for immersive 3D web experiences.",
    icon: Code,
    color: "rgba(168, 85, 247, 0.3)", // Purple glow
  },
];

export default function Expertise() {
  return (
    <section className="relative z-20 w-full py-10 md:py-16 px-4 max-w-7xl mx-auto">
      <div className="mb-12 md:mb-16 text-center">
        {/* RESPONSIVE: text-3xl mobile, 5xl desktop */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
          Expertise
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg px-2">
          I don't just build websites; I build digital ecosystems. Here is the toolkit I bring to every project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
          <SpotlightCard 
            key={index} 
            spotlightColor={service.color}
            className="h-full"
          >
            <div className="flex flex-col h-full">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 border border-white/10">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}