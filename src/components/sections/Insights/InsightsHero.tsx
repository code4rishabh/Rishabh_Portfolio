"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const CATEGORIES = [
  "All Topics",
  "AI & Technology",
  "Narrative Strategy",
  "Entrepreneurship",
];

export const InsightsHero = () => {
  const [active, setActive] = useState(CATEGORIES[0]);

  return (
    <header className="pt-32 pb-16 md:pt-40 md:pb-24 max-w-7xl mx-auto px-6 md:px-8">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-bold tracking-widest text-xs md:text-sm uppercase mb-4 block">
            Curated Thoughts
          </span>

          <h1 className="font-display font-bold leading-[1.1] tracking-tight">
            Latest Insights
          </h1>

          <p className="mt-6 text-lg md:text-xl text-on-surface-variant leading-relaxed">
            Exploring the intersection of artificial intelligence, narrative
            structures, and the raw mechanics of modern entrepreneurship.
          </p>
        </motion.div>
      </div>

      {/* Category filter chips */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-nowrap overflow-x-auto pb-4 md:pb-0 md:flex-wrap gap-3 md:gap-4 mt-12 no-scrollbar"
      >
        {CATEGORIES.map((cat, index) => (
          <motion.button
            key={cat}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            onClick={() => setActive(cat)}
            className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all border whitespace-nowrap ${
              active === cat
                ? "bg-primary text-on-primary border-primary shadow-lg shadow-primary/20"
                : "bg-surface-container-low text-on-surface-variant border-outline-variant/30 hover:bg-surface-container-high hover:border-outline-variant"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>
    </header>
  );
};
