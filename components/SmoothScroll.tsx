"use client";

// The correct import for the latest version of Lenis
import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.1,         // Friction: Lower = "heavier" scroll (0.1 is standard)
        duration: 1.5,     // How long the slide lasts
        smoothWheel: true, // Enable mouse wheel smoothing
      }}
    >
      {children}
    </ReactLenis>
  );
}