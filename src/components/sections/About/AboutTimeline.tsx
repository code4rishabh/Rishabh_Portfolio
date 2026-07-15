"use client";

// ============================================================
// AboutTimeline.tsx
// Section: Professional timeline for the About page.
// Design: Stitch "About & Achievements" — "Professional Narrative".
// To customize: Edit the TIMELINE_ITEMS array below.
//   Each item: { period, role, description, isActive }
//   isActive=true → teal dot, isActive=false → grey dot.
// ============================================================

import React from "react";
import { motion } from "framer-motion";

// ─── Editable timeline data ────────────────────────────────
// Add, remove, or reorder timeline entries here.
const TIMELINE_ITEMS = [
  {
    period: "Aug 2025 - Present",
    role: "Founder @ FaxLab",
    description:
      "AI led solutions and learning. AI applications in industry, Supply Chain, Procurement, and Digital Transformation.",
    isActive: true,
  },
  {
    period: "Mar 2025 - Present",
    role: "Founder @ Triveni Sangam Dialogues",
    description:
      "Founder of Triveni Sangam Dialogues — a fast-growing intellectual platform focused on YouTube and Storytelling.",
    isActive: true,
  },
  {
    period: "Jan 2025 - Present",
    role: "Board Member @ Jaipuria Institute of Management",
    description:
      "Contributing to strategic direction and innovation initiatives. Specializing in Start-ups Management and Board of Directors.",
    isActive: true,
  },
  {
    period: "Sep 2025 - Oct 2025",
    role: "Guest Lecturer @ IIT Delhi",
    description:
      "Taught AI applications & SCM integration. Focused on Artificial Intelligence, Supply Chain Management, and Keynote Speaking.",
    isActive: false,
  },
  {
    period: "Mar 2023 - Dec 2024",
    role: "Supply Chain & Logistics Transformation @ Air Products",
    description:
      "Led Supply Chain and Logistics Transformation AI enabled projects. Expertise in Procurement, Logistics Management, and Business Transformation.",
    isActive: false,
  },
  {
    period: "Jan 2015 - Feb 2023",
    role: "Commercial Strategies and Logistics @ Fluor Corporation",
    description:
      "Worked at the global EPC firm on some of the mega engineering projects worldwide.",
    isActive: false,
  },
  {
    period: "Jun 2013 - Dec 2014",
    role: "Head Stores @ Escorts Limited",
    description:
      "CEO Office, Head of Stores, and Project Lead for Vendor Consolidation. Managed Operations and Strategy Projects.",
    isActive: false,
  },
  {
    period: "Jan 2013 - Feb 2013",
    role: "Intern @ JICA",
    description:
      "Japan International Cooperation Agency (JICA) intern in Tokyo. Visited Headquarters of Toyota, Hino, Hitachi, Sony, and Mitsu Corporations.",
    isActive: false,
  },
  {
    period: "Sep 2008 - Dec 2011",
    role: "Procurement Lead @ Simon India Ltd",
    description:
      "Managed Global Procurement for Oil & Gas, EPC, Engineering, and Infrastructure projects.",
    isActive: false,
  },
  {
    period: "Jul 2006 - Aug 2008",
    role: "Assistant Manager @ Chambal Fertilisers and Chemicals Limited",
    description:
      "Gained diverse experience across Projects, Technical Services, and Operations.",
    isActive: false,
  },
];
// ─────────────────────────────────────────────────────────────

export const AboutTimeline = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

        {/* Left: Sticky context panel */}
        <div className="lg:col-span-4 sticky top-32 h-fit flex flex-col gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-display font-bold leading-tight mb-4">
              Professional Narrative
            </h2>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              A dynamic career spanning across Artificial Intelligence, Global Procurement, and Logistics Transformation. 
              Driven by a commitment to pushing the boundaries of what's possible at the intersection of logic and creativity.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 bg-surface-container rounded-2xl border border-outline-variant/10 shadow-sm relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="flex items-start gap-4 relative z-10">
              <div className="w-1.5 bg-primary h-12 flex-shrink-0 rounded-full"></div>
              <blockquote className="text-lg font-display font-medium text-on-surface italic leading-relaxed">
                &ldquo;Technology is the tool, but the story we tell with it
                defines our humanity and business legacy.&rdquo;
              </blockquote>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 bg-surface border border-outline-variant/10 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500"
          >
            <h3 className="font-display font-bold text-xl mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              Core Highlights
            </h3>
            <ul className="space-y-5">
              {[
                { label: "20+ Years", desc: "Global Industry Experience" },
                { label: "AI & Tech", desc: "Enterprise Digital Transformation" },
                { label: "Strategic", desc: "Board Member & Founder Level" },
                { label: "Operations", desc: "Mega EPC & Supply Chain Mgmt" }
              ].map((stat, i) => (
                <li key={i} className="flex flex-col group/stat cursor-default">
                  <span className="text-xl font-bold text-primary group-hover/stat:translate-x-2 transition-transform duration-300">{stat.label}</span>
                  <span className="text-sm text-on-surface-variant">{stat.desc}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="font-display font-bold text-xl mb-4">Areas of Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "AI Innovation", "Supply Chain", "Global Procurement", "Storytelling", 
                "Business Strategy", "Logistics", "Operations Management", "EPC Projects", 
                "Vendor Consolidation", "Neural Networks", "Public Policy", 
                "Start-ups Management", "Corporate Strategy", "Generative AI", 
                "Board Leadership", "Keynote Speaking", "Digital Transformation"
              ].map((skill, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 bg-surface-container hover:bg-primary hover:text-on-primary text-sm font-medium rounded-xl transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Timeline entries */}
        <div className="lg:col-span-8 space-y-12">
          {TIMELINE_ITEMS.map((item, idx) => {
            const isLast = idx === TIMELINE_ITEMS.length - 1;
            return (
              <div
                key={`${item.role}-${item.period}`}
                className={`relative pl-12 pb-12 ${
                  isLast ? "" : "border-l-2 border-surface-container-high"
                }`}
              >
                {/* Timeline dot — teal for active, grey for past */}
                <div
                  className={`absolute -left-[11px] top-0 w-5 h-5 rounded-full ring-4 ring-surface transition-colors duration-300 ${
                    item.isActive ? "bg-primary" : "bg-outline-variant"
                  }`}
                ></div>

                {/* Animated Interactive Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: Math.min(idx * 0.1, 0.5) }}
                  className="mt-1 group relative p-6 md:p-8 bg-surface border border-outline-variant/10 hover:border-primary/30 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1.5 overflow-hidden flex flex-col h-full"
                >
                  {/* Ambient hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="relative z-10 flex-1 flex flex-col">
                    <h3 className="text-2xl font-display font-bold mb-3 text-on-surface group-hover:text-primary transition-colors duration-300">
                      {item.role}
                    </h3>
                    <p className="text-on-surface-variant text-lg leading-relaxed mb-6 flex-1">
                      {item.description}
                    </p>
                    
                    {/* Period Block - Styled exactly like the Education block */}
                    <div className="mt-auto pt-5 border-t border-outline-variant/10 flex items-center justify-between">
                      <span
                        className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
                          item.isActive ? "bg-primary/10 text-primary" : "bg-surface-container-high text-on-surface-variant"
                        }`}
                      >
                        {item.period}
                      </span>
                      {item.isActive && (
                        <span className="flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-widest">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                          Active
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
