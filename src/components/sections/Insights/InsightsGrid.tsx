"use client";

// ============================================================
// InsightsGrid.tsx
// Section: Main 3-column article grid below featured.
// Design: Stitch "Insights – Blog Listing" grid section.
// To customize: Update the ARTICLES array. Each article has:
//   - imageSrc, imageAlt, category, title, excerpt, date, readTime, href
// ============================================================

import React from "react";
import { IMAGES } from "@/lib/imageConfig";

// ─── Editable article data ────────────────────────────────────
// Add/remove articles or update their data here.
const ARTICLES = [
   {
    imageSrc: IMAGES.insights.aiTech,
    imageAlt: "AI & Technology article image",
    category: "AI & Technology",
    title: "The Ethics of Prompting: Who Owns the Output?",
    excerpt:
      "A legal and philosophical dive into the ownership of AI-assisted literary works in the age of global datasets.",
    date: "Jan 22, 2024",
    readTime: "10 min read",
    href: "#",
  },
  {
    imageSrc: IMAGES.insights.narrative,
    imageAlt: "Narrative Strategy article image",
    category: "Narrative Strategy",
    title: "Building 'The Author' Brand in Tech",
    excerpt:
      "Why founders are increasingly turning to long-form writing to establish defensible market authority.",
    date: "Jan 18, 2024",
    readTime: "6 min read",
    href: "#",
  },
  {
    imageSrc: IMAGES.insights.entrepreneurship,
    imageAlt: "Entrepreneurship article image",
    category: "Entrepreneurship",
    title: "Failure is a Draft: Redefining Pivot Culture",
    excerpt:
      "How literary editing processes can be applied to startup pivots for more graceful transitions.",
    date: "Jan 05, 2024",
    readTime: "14 min read",
    href: "#",
  },
];
// ─────────────────────────────────────────────────────────────

export const InsightsGrid = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 max-w-7xl mx-auto px-8">
      {ARTICLES.map((article) => (
        <article key={article.title} className="flex flex-col group cursor-pointer">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-surface-container mb-6">
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt={article.imageAlt}
              src={article.imageSrc}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Category label */}
          <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">
            {article.category}
          </div>

          {/* Title */}
          <h3 className="text-xl font-display font-bold mb-4 leading-snug group-hover:text-primary transition-colors">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">{article.excerpt}</p>

          {/* Meta: date + read time */}
          <div className="mt-auto flex justify-between items-center text-xs text-tertiary">
            <span>{article.date}</span>
            <span>{article.readTime}</span>
          </div>
        </article>
      ))}
    </section>
  );
};
