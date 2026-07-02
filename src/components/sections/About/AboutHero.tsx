"use client";

import React from "react";
import { IMAGES } from "@/lib/imageConfig";
import { motion } from "framer-motion";

export const AboutHero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center overflow-hidden">
      {/* Left: Text content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-7 space-y-8"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
          The Synthesis
        </span>

        <h1 className="font-display font-bold text-on-surface leading-[1.1] tracking-tight">
          Architecting{" "}
          <span className="text-primary italic">Innovation</span> through
          Narrative.
        </h1>

        <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
          Founder of Faxlab AI and Author. Bridging the gap between
          technological precision and human storytelling.
        </p>

        {/* Accent rule + label */}
        <div className="flex gap-4 items-center">
          <div className="w-12 h-1 bg-primary/20 self-center rounded-full"></div>
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            About &amp; Achievements
          </span>
        </div>
      </motion.div>

      {/* Right: Portrait image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="lg:col-span-5 relative"
      >
        <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10 border border-outline-variant/10">
          <img
            className="w-full h-full object-cover"
            alt="Rishabh Agrawal - Founder of Faxlab AI and Author"
            src={IMAGES.profile.aboutPortrait}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
        </div>

        {/* Decorative blur circles */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary-container/20 rounded-full blur-2xl opacity-60 -z-10"></div>
      </motion.div>
    </section>
  );
};
