"use client";

import React from "react";
import { BookOpen, Trophy, BadgeCheck, Star, MoveRight, Globe } from "lucide-react";
import { motion } from "framer-motion";

const SIDE_AWARDS = [
  {
    Icon: Trophy,
    label: "Strategic Excellence",
    description: "Author of the 'SamudraManthan' and 'Resilience' strategies, blending mythology and modern logic for high-level problem solving.",
    date: "JUNE 2020",
    variant: "primary",
  },
  {
    Icon: BadgeCheck,
    label: "Digital Democracy",
    description: "Conceptualized 'All India Voting (AIV)', a proposed framework for transparent, tech-driven national voting systems.",
    date: "APR 2016",
    variant: "surface",
  },
  {
    Icon: Star,
    label: "Literary Merit",
    description: "Consistent contribution to national dialogue on politics, tech-policy, and philosophy across major platforms.",
    date: "JAN 2017",
    variant: "surface",
  },
];

export const AchievementsAwards = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6"
        >
          <div className="max-w-2xl">
            <span className="text-primary font-display font-bold uppercase tracking-widest text-sm mb-4 block">Global Recognition</span>
            <h2 className="font-display font-bold text-on-surface">
              Awards &amp; Laurels
            </h2>
            <p className="text-lg text-on-surface-variant mt-4">
              Defining industry standards through consistent excellence and disruptive thinking across technology and literature.
            </p>
          </div>
          <div className="hidden md:block h-1 w-24 bg-primary rounded-full mb-2"></div>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left Narrative Panel — spans 2 cols, takes full height to balance the 3 cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 bg-surface p-8 md:p-12 lg:p-16 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group border border-outline-variant/10 relative overflow-hidden flex flex-col h-full"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-container/20 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3" />
            
            <div className="flex flex-col h-full relative z-10">
              <div className="flex justify-between items-start mb-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-2 rounded-full">
                  Impact &amp; Vision
                </span>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-display font-bold mb-8 group-hover:text-primary transition-colors leading-tight">
                Pioneering at the Intersection of Technology &amp; Society
              </h3>
              
              <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg flex-1">
                <p>
                  Throughout my career, my objective has never been limited to merely participating in the tech industry—it has been about fundamentally redefining how technology serves human infrastructure, governance, and philosophy.
                </p>
                <p>
                  From engineering cutting-edge architectures at <strong>Faxlab AI</strong> to leading global supply chain transformations and proposing massive paradigm shifts like the <em>All India Voting (AIV)</em> framework, every milestone is driven by a singular vision: blending analytical rigor with deep empathy for the societal impact of our digital tools.
                </p>
                
                {/* Pull Quote inside the panel to add richness and fill space */}
                <div className="p-6 my-8 border-l-4 border-primary bg-surface-container-lowest rounded-r-2xl shadow-sm">
                  <p className="text-xl font-display italic text-on-surface mb-2">
                    "True innovation happens when we stop building features and start building philosophies."
                  </p>
                </div>
                
                <p>
                  My literary contributions and strategic recognitions—spanning from the depths of Indian mythology applied to corporate strategy, to receiving an appreciation certificate from ISRO—reflect this synthesis. The awards listed here are not endpoints, but rather markers of a continuous journey to elevate global discourse and technological capability.
                </p>
              </div>

            </div>
          </motion.div>

          {/* Right side awards: 3 cards stacked vertically */}
          <div className="grid grid-cols-1 gap-6 md:gap-8 lg:col-span-1 h-full">
            {SIDE_AWARDS.map((award, idx) => {
              const { Icon } = award;
              return (
                <motion.div 
                  key={award.label} 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`${
                    award.variant === "primary" 
                      ? "bg-primary text-on-primary shadow-xl shadow-primary/20" 
                      : "bg-surface text-on-surface border border-outline-variant/10 shadow-md"
                    } p-8 rounded-2xl flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 h-full`}
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-inner ${
                      award.variant === "primary" ? "bg-white/10" : "bg-primary/10"
                    }`}>
                      <Icon className={`w-6 h-6 ${award.variant === "primary" ? "text-white" : "text-primary"}`} />
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-3">{award.label}</h3>
                    <p className={`text-base leading-relaxed ${
                      award.variant === "primary" ? "text-on-primary/90" : "text-on-surface-variant"
                    }`}>{award.description}</p>
                  </div>
                  <div className="flex items-center justify-between mt-8 border-t border-current/10 pt-4">
                    <span className="text-xs font-bold uppercase tracking-widest opacity-70">{award.date}</span>
                    <Star className="w-5 h-5 opacity-40" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
