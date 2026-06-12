"use client";

// ============================================================
// AboutMilestones.tsx
// Section: Bento grid of core milestone cards.
// Design: Stitch "About & Achievements" screen – Journey section.
// To customize: Edit MILESTONE_CARDS below. Each card has:
//   - type: "large" | "accent" | "small"
//   - title, description, imageSrc (optional), badge (optional)
// ============================================================

import React from "react";
import { Rocket, GraduationCap, Award } from "lucide-react";

export const AboutMilestones = () => {
  return (
    <section className="bg-surface-container-low py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section heading */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold mb-4">Core Milestones</h2>
          <div className="w-20 h-1.5 bg-primary"></div>
        </div>

        {/* Bento Grid: 4-col, 2-row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">

          {/* Large card: Faxlab AI — col-span-2 + row-span-2 */}
          <div className="md:col-span-2 md:row-span-2 bg-surface p-10 rounded-xl flex flex-col justify-between group cursor-pointer hover:bg-surface-container-lowest transition-all shadow-sm border border-outline-variant/10">
            <div className="space-y-4">
              <Rocket className="w-10 h-10 text-primary" />
              <h3 className="text-3xl font-display font-bold">Faxlab AI Foundations</h3>
              {/* Update description here */}
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Scaled Faxlab AI from a conceptual framework to a leading
                enterprise solution, servicing 50+ Global 500 companies in
                deep-learning integration.
              </p>
            </div>
            <div className="mt-8">
              {/* Replace src with the actual image */}
              <img
                className="w-full h-48 object-cover rounded-lg"
                alt="Faxlab AI architecture visualization"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuArxU1Mq7wHtomendANvtDvvMfzP9aHUOYKr3-hdvtV7Nckuqpk6nGLsKuzP8-1M_NA97rlrB95M_-LapbCWPfkAvbcdNowL3tzRX62H_w4KNq6wz-p19aYORAleXJUOVMH8AOk5OYaH4T-LkDsiZzqy4JLk0z7ViTtU7G02KFthZx43JWx7LKlQAdYlOiXvSMHAR6kLrGKj7HCy2nFcst3uNsLnfvHj8gARIDDJIMOXAuqaA-Q6xGxYiHXuryRWM8Oz22se2-boaXX"
              />
            </div>
          </div>

          {/* Accent card: Literary success — col-span-2, row-span-1 */}
          <div className="md:col-span-2 md:row-span-1 bg-primary text-on-primary p-8 rounded-xl flex items-center gap-8 shadow-xl">
            <div className="flex-1 space-y-3">
              <h3 className="text-2xl font-display font-bold">Literary Success</h3>
              {/* Update with real book info */}
              <p className="text-primary-fixed leading-snug">
                Published &quot;What If You Are a Superhero&quot;, exploring human
                potential in an age of technological transformation.
              </p>
            </div>
            <div className="flex-shrink-0 w-24 h-32 bg-white/20 rounded shadow-lg backdrop-blur flex items-center justify-center p-2 text-center text-[10px] font-bold">
              WHAT IF YOU ARE A SUPERHERO
            </div>
          </div>

          {/* Recognition Card (Expanded to col-span-2) */}
          <div className="md:col-span-2 bg-secondary-container p-8 rounded-xl shadow-sm flex flex-col justify-center">
            <Award className="w-8 h-8 text-on-secondary-container mb-4" />
            <h4 className="font-display font-bold text-2xl text-on-secondary-container mb-2">Recognitions</h4>
            {/* Update with real awards */}
            <p className="text-lg text-on-secondary-container">
              Author, entrepreneur, and tech founder recognized for innovation
              at the intersection of AI and storytelling.
            </p>
          </div>
        </div>

        {/* Dedicated Education Section */}
        <div className="mt-20">
          <div className="mb-10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <GraduationCap className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-display font-bold">Academic Background</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* IIM Calcutta */}
            <div className="group relative p-8 bg-surface hover:bg-surface-container-lowest border border-outline-variant/10 hover:border-primary/30 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10 flex-1 flex flex-col">
                <p className="font-bold text-xl font-display text-on-surface mb-1 group-hover:text-primary transition-colors duration-300">Indian Institute of Management, Calcutta</p>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-4 flex-1">MBA, Business Strategy, Supply Chain Management, Public Policy</p>
                
                <div className="space-y-3 mt-auto pt-4 border-t border-outline-variant/10">
                  <p className="text-xs font-medium text-on-surface-variant flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    CAT 99.00% Percentile Holder
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-primary px-3 py-1 bg-primary/10 rounded-full">Apr 2013</span>
                    <span className="text-xs font-bold text-on-surface-variant px-3 py-1 bg-surface-container rounded-full">Grade: A</span>
                  </div>
                </div>
              </div>
            </div>

            {/* IIT Kanpur */}
            <div className="group relative p-8 bg-surface hover:bg-surface-container-lowest border border-outline-variant/10 hover:border-primary/30 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10 flex-1 flex flex-col">
                <p className="font-bold text-xl font-display text-on-surface mb-1 group-hover:text-primary transition-colors duration-300">Indian Institute of Technology, Kanpur</p>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-4 flex-1">MEng, Logistics, Materials, and Supply Chain Management</p>
                
                <div className="space-y-3 mt-auto pt-4 border-t border-outline-variant/10">
                  <p className="text-xs font-medium text-on-surface-variant flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    VLFM: Visionary Leadership Program
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-primary px-3 py-1 bg-primary/10 rounded-full">Dec 2012</span>
                    <span className="text-xs font-bold text-on-surface-variant px-3 py-1 bg-surface-container rounded-full">Grade: A</span>
                  </div>
                </div>
              </div>
            </div>

            {/* IIT Madras */}
            <div className="group relative p-8 bg-surface hover:bg-surface-container-lowest border border-outline-variant/10 hover:border-primary/30 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10 flex-1 flex flex-col">
                <p className="font-bold text-xl font-display text-on-surface mb-1 group-hover:text-primary transition-colors duration-300">Indian Institute of Technology, Madras</p>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-4 flex-1">MEng, Business Administration, Management and Operations</p>
                
                <div className="space-y-3 mt-auto pt-4 border-t border-outline-variant/10">
                  <p className="text-xs font-medium text-transparent flex items-center gap-2 select-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-transparent" />
                    Spacer
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-primary px-3 py-1 bg-primary/10 rounded-full">Oct 2012</span>
                    <span className="text-xs font-bold text-on-surface-variant px-3 py-1 bg-surface-container rounded-full">Grade: A</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
