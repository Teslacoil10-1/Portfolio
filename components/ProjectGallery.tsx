"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import InfiniteMenu from "@/components/InfiniteMenu";

export default function ProjectGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const locked = useRef(false);

  // IntersectionObserver to scroll section into view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !locked.current) {
          locked.current = true;
          el.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }

        if (!entry.isIntersecting) {
          locked.current = false;
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Items with correct public folder paths
  const items = [
    { image: "/ecom_site.webp", link: "https://google.com/", title: "Ecom", description: "a modern ecommerce site" },
    { image: "/unblocked_games.webp", link: "https://dancing-tanuki-d62919.netlify.app/", title: "Games", description: "a functional unblocked games site wiht over 20 games" },
    { image: "/ecom_site2.webp", link: "https://google.com/", title: "Ecom", description: "a modern ecommerce site for a local business" },
    { image: "/aberdeenshire_maths_tutor.webp", link: "https://aberdeenshiremathstutor.co.uk/", title: "tutor", description: "a modern maths tutor site for a local business" },
  ];

  return (
    <div
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-start py-20"
    >
      {/* Title */}
      <h2 className="text-5xl font-bold text-gray-200 mb-12">Projects</h2>

      {/* Infinite gallery */}
      <InfiniteMenu
        items={items.map((item) => ({
          ...item,
          render: () => (
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <div className="relative w-[300px] h-[300px] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-sm">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </a>
          ),
        }))}
        itemWidth={300}
        itemHeight={300}
        gap={24}
      />
    </div>
  );
}
