"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import "./project.css"; 

// 1. Define the Project type
interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "HTML code libary",
    description: "An aesthetic modern html components libary think react bits but for html",
    link: "https://code-libary-html.vercel.app/",
    image: "/htmllib.png" // Ensure these are in your /public folder
  },
  {
    id: 2,
    title: "Sandras coaching",
    description: "A full stack website including clouflare auth and an express js backend",
    link: "https://sandras-coaching.vercel.app/",
    image: "/sandra.png"
  },
];

export default function Projects() {
  return (
    <section className="projects-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="projects-header"
      >
        <h2 className="projects-title">My projects</h2>
        <div className="projects-line"></div>
      </motion.div>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="project-card"
          >
            <div className="project-image-wrapper">
              {/* Using Next.js Image for better optimization */}
              <Image 
                src={project.image} 
                alt={project.title} 
                width={500} // Adjust based on your CSS grid size
                height={300} 
                className="project-image"
                style={{ objectFit: 'cover' }}
              />
              <div className="project-overlay">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link-btn"
                >
                  View Project
                </a>
              </div>
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
