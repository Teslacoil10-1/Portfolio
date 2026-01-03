"use client";

import { motion } from "framer-motion";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function BlurText({
  text,
  className = "",
  delay = 0,
}: BlurTextProps) {
  
  // Container: Controls the overall layout
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between letters
        delayChildren: delay / 1000,
      },
    },
  };

  // Child: Controls the animation of each letter
  const childVariants = {
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
      y: 20,
    },
    visible: {
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`flex flex-wrap justify-center ${className}`} 
    >
      {text.split("").map((char, index) => (
        <motion.span 
          key={index} 
          variants={childVariants} 
          className="inline-block"
        >
          {/* Preserve space characters */}
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}