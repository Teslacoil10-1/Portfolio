"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import InfiniteMenu from "@/components/InfiniteMenu";

export default function ProjectGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const locked = useRef(false);

  // Scroll section into view when visible
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !locked.current) {
          locked.current = true;
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        if (!entry.isIntersecting) locked.current = false;
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const items = [
    {
      image: "/ecom_site.webp",
      link: "https://google.com/",
      title: "Ecom",
      description: "A modern ecommerce site",
    },
    {
      image: "/unblocked_games.webp",
      link: "https://dancing-tanuki-d62919.netlify.app/",
      title: "Games",
      description: "A functional unblocked games site with over 20 games",
    },
    {
      image: "/ecom_site2.webp",
      link: "https://google.com/",
      title: "Ecom 2",
      description: "A modern ecommerce site for a local business",
    },
    {
      image: "/aberdeenshire_maths_tutor.webp",
      link: "https://aberdeenshiremathstutor.co.uk/",
      title: "Tutor",
      description: "A modern maths tutor site for a local business",
    },
  ];

  return (
    <div
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-start py-20"
    >
      {/* Title */}
      <h2 className="text-5xl font-bold text-gray-200 mb-12">Projects</h2>

      {/* Infinite gallery */}
      <div className="w-full h-[600px]">
        <InfiniteMenu
          items={items}
          scale={1.0}
          itemWidth={300}
          itemHeight={300}
          gap={24}
        />
      </div>
    </div>
  );
}
