"use client";

import React from "react";
import { motion } from "framer-motion";

export const BooksHero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 mb-16 md:mb-24 pt-32 md:pt-40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-end">
        {/* Left: Main headline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-8"
        >
          {/* Eyebrow label */}
          <span className="text-primary font-display font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">
            Publications &amp; Intellect
          </span>

          <h1 className="font-display font-bold text-on-surface leading-[1.1] tracking-tight">
            Books on <br />
            <span className="text-primary italic">Work and Life.</span>
          </h1>
        </motion.div>

        {/* Right: Description with left accent bar */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-4 border-l-2 md:border-l-4 border-primary/20 pl-6 pb-2"
        >
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
            Writing on personal growth, relationships, and the practical use of AI in supply chains.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
