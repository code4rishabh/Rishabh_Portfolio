"use client";

import React from "react";
import { motion } from "framer-motion";

const TIMELINE_ITEMS = [
  {
    year: "2016",
    tag: "STRATEGY & REFORM",
    tagColor: "primary" as const,
    title: "All India Voting (AIV) Framework",
    description:
      "Proposed a revolutionary tech-driven national voting system. Concurrently formulated the 'SamudraManthan' strategy, using cultural metaphors to solve complex institutional challenges.",
  },
  {
    year: "2018",
    tag: "TECH FOUNDATION",
    tagColor: "primary" as const,
    title: "Inception of Faxlab AI",
    description:
      "Founded Faxlab to bridge technical data precision with narrative storytelling. Developed proprietary AI that empowered publishers to scale editorial workflows globally.",
  },
  {
    year: "2020",
    tag: "LITERARY IMPACT",
    tagColor: "secondary" as const,
    title: '"What If You Are a Superhero" & Resilience',
    description:
      "Published debut philosophical work. During the global shift, authored 'The Resilience Strategy' to help organizations navigate uncertainty with a stoic and adaptive mindset.",
  },
  {
    year: "2022",
    tag: "INNOVATION PEAK",
    tagColor: "primary" as const,
    title: "Nodal Transition to Aerospace",
    description:
      "While scaling Faxlab v2.0, pivotally applied AI logic to satellite data and remote sensing, laying the groundwork for high-impact aerospace collaborations.",
  },
  {
    year: "2025",
    tag: "SPACE FRONTIER",
    tagColor: "primary" as const,
    title: "ISRO Recognition & Xovian Milestone",
    description:
      "Received an Appreciation Certificate from ISRO leadership for contributions to Space Technology. A crowning achievement in the journey of technical and visionary excellence.",
  },
];

export const AchievementsTimeline = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 md:mb-32"
        >
          <span className="text-primary font-display font-bold uppercase tracking-widest text-sm mb-4 block">Chronicle</span>
          <h2 className="font-display font-bold text-on-surface">
            Professional Timeline
          </h2>
          <div className="w-24 h-1.5 bg-primary/20 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {TIMELINE_ITEMS.map((item, idx) => {
            const isOdd = idx % 2 !== 0;
            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center"
              >
                {/* Content column */}
                <div className={isOdd ? "lg:order-2" : "lg:order-1"}>
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6 border ${
                      item.tagColor === "primary"
                        ? "bg-primary/5 text-primary border-primary/20"
                        : "bg-primary/5 text-primary border-primary/20"
                      }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    {item.tag}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-display font-bold text-on-surface mb-6 leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed opacity-90">
                    {item.description}
                  </p>
                </div>

                {/* Year display */}
                <div
                  className={`flex items-center gap-6 lg:gap-10 ${
                    isOdd ? "lg:order-1" : "lg:order-2 lg:justify-end"
                  }`}
                >
                  <div className="flex flex-col items-center lg:items-end">
                    <div className="bg-surface-container-high border border-outline-variant/10 px-6 py-2 rounded-xl shadow-sm mb-2">
                       <span className="text-3xl md:text-5xl font-bold text-primary font-display">
                        {item.year}
                      </span>
                    </div>
                    <div className="h-1 w-12 bg-primary/20 rounded-full"></div>
                  </div>

                  <div
                    className={`w-1.5 h-24 md:h-40 rounded-full hidden lg:block ${
                      item.tagColor === "primary" ? "bg-primary" : "bg-primary/40"
                    }`}
                  ></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
