"use client";

import React from "react";
import { IMAGES } from "@/lib/imageConfig";
import { motion } from "framer-motion";

const STAT = {
  number: "10+",
  label: "Honors Across Aerospace, Tech & Literature",
};

export const AchievementsHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center px-6 md:px-8 overflow-hidden bg-surface pt-32 pb-32 md:pb-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left: Text content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
            CURATED EXCELLENCE
          </span>

          <h1 className="font-display font-bold tracking-tight text-on-surface leading-[1.1] mb-8">
            Achievements &amp; <br />
            <span className="text-primary italic">Milestones.</span>
          </h1>

          <p className="text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed">
            The intersection of technological innovation and literary mastery.
            A chronicle of the journey from lines of code to the power of the
            written word.
          </p>
        </motion.div>

        {/* Right: Portrait + stat card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative max-w-md mx-auto lg:max-w-none w-full"
        >
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl lg:rotate-2 hover:rotate-0 transition-transform duration-700 border border-outline-variant/10">
            <img
              className="w-full h-full object-cover"
              alt="Rishabh Agrawal achievements and milestones"
              src={IMAGES.achievements.hero}
            />
          </div>

          {/* Floating stat card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -bottom-4 left-4 md:-bottom-6 md:-left-8 bg-surface p-5 md:p-6 rounded-2xl shadow-xl max-w-[200px] md:max-w-xs lg:-rotate-3 border border-outline-variant/10"
          >
            <p className="text-primary font-display font-bold text-3xl md:text-4xl mb-1">{STAT.number}</p>
            <p className="text-on-surface-variant text-sm md:text-base font-medium leading-tight">{STAT.label}</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none -z-10"></div>
    </section>
  );
};
