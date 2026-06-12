"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Star, Globe, ArrowRight, History } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-12 md:py-20 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-start lg:sticky lg:top-32 gap-6"
          >
            <div>
              <span className="text-primary font-display font-bold uppercase tracking-widest text-sm mb-4 block">About Me</span>
              <h2 className="font-display font-bold mb-6 text-on-surface">Who I Am &amp; What I Do</h2>
              <div className="w-16 h-1.5 bg-primary rounded-full mb-8"></div>
  
              <p className="text-lg text-on-surface-variant leading-relaxed mb-4">
                My journey is a synthesis of two worlds. As the founder of Faxlab AI, I spend my days navigating the complex architectures of neural networks and operational scale.
              </p>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
                As an author, I translate those technical complexities into human stories. I believe the future isn&apos;t just built with code—it&apos;s written in the values we embed within our systems.
              </p>
            </div>

            {/* Animated Highlight Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 bg-surface border border-outline-variant/10 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-lg">15+ Years</h4>
                  <p className="text-sm text-on-surface-variant">Global industry &amp; tech experience</p>
                </div>
              </div>
            </motion.div>

            {/* Expertise Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6"
            >
              <div className="flex flex-wrap gap-2">
                {[
                  "AI Innovation", "Supply Chain", "Global Procurement", 
                  "Business Strategy", "Storytelling", "Digital Transformation"
                ].map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-surface-container hover:bg-primary hover:text-on-primary text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-md border border-outline-variant/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-3 bg-surface-container-high text-on-surface hover:bg-primary hover:text-on-primary px-8 py-3.5 rounded-xl font-bold transition-all duration-300 group shadow-sm hover:shadow-lg hover:-translate-y-1"
              >
                <History className="w-5 h-5 group-hover:animate-pulse" />
                <span>Read Full Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: The Four Cards in a 2x2 horizontal row grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 items-start"
          >
            {/* Card 1: Faxlab AI */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative p-6 bg-primary/5 hover:bg-primary/10 border border-primary/10 hover:border-primary/30 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Ambient Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Icon Container with elegant hover animation */}
                <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-on-primary text-primary transition-all duration-500 shadow-sm shadow-primary/5">
                  <Terminal className="w-5.5 h-5.5 transition-transform duration-500 group-hover:rotate-6" />
                </div>
                <h3 className="text-lg font-bold font-display mb-2 text-on-surface group-hover:text-primary transition-colors">Faxlab AI</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  An emerging AI-powered learning platform dedicated to bridging the gap between theoretical machine learning and real-world application.
                </p>
              </div>

              {/* Design flourish: Small platform status bar */}
              <div className="relative z-10 mt-6 flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Active AI Platform
              </div>
            </motion.div>

            {/* Card 2: Published Works */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative p-6 bg-amber-500/5 hover:bg-amber-500/10 border border-amber-500/10 hover:border-amber-500/30 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Ambient Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Icon Container with elegant hover animation */}
                <div className="w-11 h-11 rounded-xl bg-amber-500/15 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-white text-amber-600 transition-all duration-500 shadow-sm shadow-amber-500/5">
                  <Star className="w-5.5 h-5.5 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-lg font-bold font-display mb-3 text-on-surface group-hover:text-amber-600 transition-colors">Published Works</h3>

                <div className="space-y-3">
                  <div className="p-2.5 bg-surface-container-low/50 border border-outline-variant/10 hover:border-amber-500/20 hover:bg-surface rounded-xl flex items-center gap-2.5 transition-all duration-300 group/item">
                    <span className="text-xl transition-transform duration-300 group-hover/item:scale-110 select-none">📘</span>
                    <div className="flex-1">
                      <p className="font-bold text-xs text-primary leading-tight mb-0.5">What If You Are a Superhero</p>
                      <p className="text-[10px] text-on-surface-variant leading-tight">Reflective take on identity &amp; potential.</p>
                    </div>
                  </div>
                  <div className="p-2.5 bg-surface-container-low/50 border border-outline-variant/10 hover:border-amber-500/20 hover:bg-surface rounded-xl flex items-center gap-2.5 transition-all duration-300 group/item">
                    <span className="text-xl transition-transform duration-300 group-hover/item:scale-110 select-none">📕</span>
                    <div className="flex-1">
                      <p className="font-bold text-xs text-secondary leading-tight mb-0.5">My 50 Arranged Marriage Dates</p>
                      <p className="text-[10px] text-on-surface-variant leading-tight">Insights into modern relationships.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Achievements */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative p-6 bg-secondary/5 hover:bg-secondary/10 border border-secondary/10 hover:border-secondary/30 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Ambient Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Icon Container with elegant hover animation */}
                <div className="w-11 h-11 rounded-xl bg-secondary/15 flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:text-white text-secondary transition-all duration-500 shadow-sm shadow-secondary/5">
                  <Star className="w-5.5 h-5.5 transition-transform duration-500 group-hover:rotate-12" />
                </div>
                <h3 className="text-lg font-bold font-display mb-3 text-on-surface group-hover:text-secondary transition-colors">Achievements</h3>
                <ul className="space-y-2.5">
                  {["Founder of Faxlab AI", "ISRO Award for Remote Sensing", "Innovator at Xovian Aerospace"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs text-on-surface-variant group/item">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary/30 group-hover:bg-secondary transition-colors duration-300" />
                      <span className="group-hover/item:text-on-surface transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Card 4: Community */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative p-6 bg-emerald-500/5 hover:bg-emerald-500/10 border border-emerald-500/10 hover:border-emerald-500/30 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Ambient Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Icon Container with elegant hover animation */}
                <div className="w-11 h-11 rounded-xl bg-emerald-500/15 flex items-center justify-center mb-5 group-hover:bg-emerald-500 group-hover:text-white text-emerald-600 transition-all duration-500 shadow-sm shadow-emerald-500/5">
                  <Globe className="w-5.5 h-5.5 transition-transform duration-700 group-hover:rotate-45" />
                </div>
                <h3 className="text-lg font-bold font-display mb-2 text-on-surface group-hover:text-emerald-600 transition-colors">Community</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Mentoring <strong>100+ developers</strong> globally, nurturing the next wave of technical and creative excellence.
                </p>
              </div>

              {/* Sleek Design flourish: Active connection meter */}
              <div className="relative z-10 mt-6 flex items-center justify-between w-full p-2.5 bg-surface/60 rounded-xl border border-emerald-500/10">
                <span className="text-[10px] text-on-surface-variant font-medium">Mentorship Reach</span>
                <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Global Network
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
