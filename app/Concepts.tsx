"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import "./concepts.css"; 

interface Concept {
  id: number;
  title: string;
  description: string;
  image: string;
}

const conceptsData: Concept[] = [
  {
    id: 1,
    title: "Shoe landing page",
    description: "Sleek dark-mode interface with bold typography and ultra-clean navigation.",
    image: "/ShoeLanding.png" 
  },
];

export default function Concepts() {
  return (
    <section className="projects-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="projects-header"
      >
        <h2 className="projects-title">My Concepts</h2>
        <div className="projects-line"></div>
      </motion.div>
      <div className="projects-grid">
        {conceptsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="project-card"
          >
            <div className="project-image-wrapper">
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                sizes="(max-width: 600px) 100vw, 600px"
                className="project-image"
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority={index === 0} 
              />
            </div>
            
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
