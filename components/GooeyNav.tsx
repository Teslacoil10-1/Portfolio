"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

interface GooeyNavProps {
  items: NavItem[];
}

export default function GooeyNav({ items }: GooeyNavProps) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname);

  // Sync internal state if the URL changes (e.g. user clicks back button)
  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  return (
    <div className="relative flex items-center gap-1 rounded-full bg-white/5 border border-white/10 px-2 py-2 backdrop-blur-sm">
      {items.map((item) => {
        const isActive = activeTab === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setActiveTab(item.href)}
            className="relative px-6 py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-2"
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {/* The Active "Pill" Background */}
            {isActive && (
              <motion.div
                layoutId="active-pill"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className="absolute inset-0 rounded-full bg-white/10"
              >
                {/* Inner Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 blur-sm opacity-50" />
              </motion.div>
            )}

            {/* The Text Label */}
            <span
              className={`relative z-10 transition-colors duration-200 ${
                isActive ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}