"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Brain, MoveRight, Shield, Zap, Globe, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const FaxlabMission = () => {
  const [isEthicsModalOpen, setIsEthicsModalOpen] = useState(false);

  return (
    <section className="bg-surface-container-low py-24 px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold font-display mb-4">Core Philosophy</h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large Feature Card */}
          <div className="md:col-span-2 bg-surface p-10 rounded-xl shadow-sm flex flex-col justify-between border border-outline-variant/10">
            <div>
              <Brain className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-2xl font-bold font-display mb-4">Human-Centric Intelligence</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                We believe AI should be an extension of human creativity, not a replacement. Our mission is to automate the mundane so humanity can focus on the extraordinary. Faxlab AI is built on the intersection of deep learning and semantic nuance.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-outline-variant/10">
              <button 
                onClick={() => setIsEthicsModalOpen(true)}
                className="flex items-center gap-4 text-primary font-bold group cursor-pointer w-full text-left bg-transparent border-none p-0"
              >
                <span>Learn about our ethics</span>
                <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          {/* Small Highlight Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
            className="relative p-10 rounded-xl text-white flex flex-col justify-center text-center overflow-hidden shadow-2xl border border-white/10 group cursor-default"
          >
            {/* Vibrant animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 opacity-100 transition-transform duration-1000 group-hover:scale-125"></div>
            
            {/* Decorative circles for depth */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/20 rounded-full blur-3xl group-hover:bg-white/30 transition-colors duration-500"></div>
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-black/20 rounded-full blur-3xl group-hover:bg-black/30 transition-colors duration-500"></div>
            
            <div className="relative z-10">
              <motion.div 
                animate={{ opacity: [0.8, 1, 0.8], scale: [0.98, 1.02, 0.98] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-5xl md:text-6xl font-bold font-display mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              >
                99.9%
              </motion.div>
              <div className="text-white font-bold uppercase tracking-widest text-sm mb-3 border-b border-white/20 pb-3 inline-block">Semantic Accuracy</div>
              <p className="text-white/90 text-sm w-full font-medium mt-1 leading-relaxed">
                Leading the industry in contextual understanding for complex workflows.
              </p>
            </div>
          </motion.div>
          {/* Row 2 */}
          <div className="bg-surface p-8 rounded-xl shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow">
            <Shield className="w-8 h-8 text-primary mb-4" />
            <h4 className="font-bold text-xl font-display mb-2">Privacy First</h4>
            <p className="text-on-surface-variant text-sm border-none">Enterprise-grade security protocols integrated into every node of the Faxlab stack.</p>
          </div>
          <div className="bg-surface p-8 rounded-xl shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow">
            <Zap className="w-8 h-8 text-primary mb-4" />
            <h4 className="font-bold text-xl font-display mb-2">Real-time Synthesis</h4>
            <p className="text-on-surface-variant text-sm">Experience latency-free data interpretation designed for high-stakes decision making.</p>
          </div>
          <div className="bg-surface p-8 rounded-xl shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow">
            <Globe className="w-8 h-8 text-primary mb-4" />
            <h4 className="font-bold text-xl font-display mb-2">Global Scale</h4>
            <p className="text-on-surface-variant text-sm">Supporting over 40+ languages with native-level cultural nuance and context.</p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isEthicsModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsEthicsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="bg-surface p-8 md:p-10 rounded-2xl shadow-2xl max-w-lg w-full relative border border-outline-variant/20 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative Glow */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
              
              <button 
                onClick={() => setIsEthicsModalOpen(false)}
                className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative z-10">
                <Shield className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-3xl font-bold font-display mb-2 text-on-surface">Faxlab AI Ethics</h3>
                <p className="text-on-surface-variant mb-8">Our core principles for responsible and human-centric artificial intelligence.</p>
                
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface mb-1">Human Agency First</h4>
                      <p className="text-sm text-on-surface-variant">AI acts as a co-pilot to elevate human creativity and decision-making, never to override it.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface mb-1">Algorithmic Transparency</h4>
                      <p className="text-sm text-on-surface-variant">Our models are interpretable. We believe you should know exactly why an AI made a suggestion.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface mb-1">Data Sovereignty</h4>
                      <p className="text-sm text-on-surface-variant">Your data remains yours. We use zero-retention synthesis pipelines to ensure absolute privacy.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
