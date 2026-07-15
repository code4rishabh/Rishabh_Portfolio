"use client";

// ============================================================
// InsightsGrid.tsx
// Section: Main 3-column article grid below featured.
// Design: Stitch "Insights – Blog Listing" grid section.
// To customize: Update the ARTICLES array. Each article has:
//   - imageSrc, imageAlt, category, title, excerpt, date, readTime, href
// ============================================================

import React, { useState } from "react";
import { IMAGES } from "@/lib/imageConfig";
import { motion, AnimatePresence } from "framer-motion";
import { X, BookOpen, MoveRight } from "lucide-react";

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
    content: [
      "A legal and philosophical dive into the ownership of AI-assisted literary works in the age of global datasets.",
      "As AI models become more sophisticated, the line between original thought and machine generation blurs. Does the prompter own the output, or the creator of the dataset?",
      "We explore the ongoing legal battles and propose a new framework for creative attribution that honors both human ingenuity and computational leverage."
    ],
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
    content: [
      "Why founders are increasingly turning to long-form writing to establish defensible market authority.",
      "In a crowded tech landscape, features and pricing are no longer enough to differentiate a product. The most successful founders are those who can articulate a compelling vision.",
      "By writing a book or publishing long-form essays, you create a gravity well of ideas that attracts investors, talent, and early adopters."
    ],
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
    content: [
      "How literary editing processes can be applied to startup pivots for more graceful transitions.",
      "When a writer throws out a chapter, it's not a failure; it's a necessary step toward the final manuscript. Startups should view their product iterations the same way.",
      "We discuss how to build a culture where pivoting is seen as editing rather than failing, allowing teams to move faster and with less ego attachment."
    ],
    href: "#",
  },
];
// ─────────────────────────────────────────────────────────────

export const InsightsGrid = () => {
  const [selectedArticle, setSelectedArticle] = useState<typeof ARTICLES[0] | null>(null);

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 max-w-7xl mx-auto px-8 relative">
      {ARTICLES.map((article) => (
        <article 
          key={article.title} 
          onClick={() => setSelectedArticle(article)}
          className="flex flex-col group cursor-pointer"
        >
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
          <p className="text-on-surface-variant text-sm mb-6 leading-relaxed flex-grow">{article.excerpt}</p>

          {/* Meta: date + read time */}
          <div className="mt-auto flex justify-between items-center text-xs text-tertiary">
            <div className="flex gap-4">
              <span>{article.date}</span>
              <span>{article.readTime}</span>
            </div>
            <span className="text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">Read <MoveRight className="w-3 h-3" /></span>
          </div>
        </article>
      ))}

      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="bg-surface p-8 md:p-12 rounded-3xl shadow-2xl max-w-3xl w-full relative border border-outline-variant/20 overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors bg-surface-container-high rounded-full p-2 cursor-pointer border-none"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6 mt-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
                  <BookOpen className="w-4 h-4" />
                  {selectedArticle.category}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold font-display text-on-surface mb-4 leading-tight">{selectedArticle.title}</h3>
                <div className="text-sm font-medium text-on-surface-variant flex gap-4 items-center">
                  <span>{selectedArticle.date}</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
              </div>

              {selectedArticle.imageSrc && (
                <div className="w-full h-48 md:h-80 rounded-xl overflow-hidden mb-8 border border-outline-variant/10 shadow-sm relative">
                  <img src={selectedArticle.imageSrc} alt="Article Image" className="w-full h-full object-cover" />
                </div>
              )}

              <div className="text-on-surface-variant text-lg leading-relaxed space-y-5">
                {selectedArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-outline-variant/10 flex justify-end">
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="px-8 py-3 rounded-xl font-bold bg-primary text-on-primary hover:shadow-lg transition-all cursor-pointer border-none"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
