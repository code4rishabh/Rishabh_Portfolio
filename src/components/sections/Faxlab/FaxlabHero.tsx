"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MoveRight, Rocket, X, BookOpen, FileText, Code, CheckCircle2 } from "lucide-react";
import { IMAGES } from "@/lib/imageConfig";
import { motion, AnimatePresence } from "framer-motion";

export const FaxlabHero = () => {
  const [isDocModalOpen, setIsDocModalOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-32 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase">
            <Rocket className="w-4 h-4" />
            Engineering the Future
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight text-on-surface">
            Faxlab AI: <span className="text-primary">Intelligence</span> Redefined.
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            As the founder of Faxlab AI, Rishabh Agrawal bridges the gap between literary narrative and technological precision, building AI systems that don't just process data—they understand intent.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://www.faxlab.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary px-8 py-4 rounded-md font-bold flex items-center gap-2 hover:shadow-lg transition-all"
            >
              Visit Faxlab Website
              <MoveRight className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setIsDocModalOpen(true)}
              className="bg-surface text-primary px-8 py-4 rounded-md font-bold border border-outline-variant/20 hover:bg-surface-container-low transition-all cursor-pointer"
            >
              View Documentation
            </button>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10">
            <img
              className="w-full h-full object-cover"
              alt="Rishabh Agrawal"
              src={IMAGES.profile.faxlab}
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -top-6 -right-6 w-full h-full bg-primary-container/20 rounded-2xl -z-0"></div>
        </div>
      </div>

      <AnimatePresence>
        {isDocModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsDocModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="bg-surface p-8 md:p-10 rounded-2xl shadow-2xl max-w-2xl w-full relative border border-outline-variant/20 overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative Glow */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
              
              <button 
                onClick={() => setIsDocModalOpen(false)}
                className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold font-display text-on-surface">Faxlab Documentation</h3>
                    <p className="text-on-surface-variant">Version 2.4.1 (Stable)</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="p-4 rounded-xl border border-outline-variant/20 hover:border-primary/30 hover:bg-surface-container-lowest transition-all cursor-pointer group">
                    <Rocket className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold mb-1">Engine Architecture</h4>
                    <p className="text-sm text-on-surface-variant">Understand the core recursive feedback loop and multi-modal reasoning algorithms of Faxlab AI.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-outline-variant/20 hover:border-primary/30 hover:bg-surface-container-lowest transition-all cursor-pointer group">
                    <FileText className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold mb-1">Semantic Nuance API</h4>
                    <p className="text-sm text-on-surface-variant">Endpoints for automated editorial review, tone refinement, and narrative synthesis.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-outline-variant/20 hover:border-primary/30 hover:bg-surface-container-lowest transition-all cursor-pointer group">
                    <Code className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold mb-1">Knowledge Graph SDK</h4>
                    <p className="text-sm text-on-surface-variant">Connect disparate data points into cohesive narratives using our proprietary graph libraries.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-outline-variant/20 hover:border-primary/30 hover:bg-surface-container-lowest transition-all cursor-pointer group">
                    <CheckCircle2 className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold mb-1">AI Tools & Courses</h4>
                    <p className="text-sm text-on-surface-variant">Explore different AI tools and courses with Faxlab AI, following our proper instructions and guidelines.</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-outline-variant/10 flex justify-end">
                  <button onClick={() => setIsDocModalOpen(false)} className="px-6 py-2 rounded-md font-bold text-primary hover:bg-primary/10 transition-colors cursor-pointer">
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
