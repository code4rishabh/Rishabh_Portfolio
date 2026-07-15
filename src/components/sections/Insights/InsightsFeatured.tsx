"use client";

// ============================================================
// InsightsFeatured.tsx
// Section: Featured (bento-style) articles grid.
// Design: Stitch "Insights – Blog Listing" featured section.
// To customize:
//   - Update FEATURED_ARTICLE with real post data.
//   - Update SIDE_ARTICLES array with side posts.
//   - Update NEW_BOOK_CTA with real pre-order link.
// ============================================================

import React, { useState } from "react";
import Link from "next/link";
import { MoveRight, X, BookOpen } from "lucide-react";
import { IMAGES } from "@/lib/imageConfig";
import { motion, AnimatePresence } from "framer-motion";

// ─── Editable: Main featured article ─────────────────────────
const FEATURED_ARTICLE = {
  imageSrc: IMAGES.insights.featured,
  imageAlt: "Featured insight article image",
  category: "AI & Technology",
  date: "March 14, 2024",
  title: "The Faxlab Manifest: Why Generative AI is the New Creative Co-Author",
  excerpt:
    "In an era of prompt engineering, the boundary between human intent and machine execution is blurring. We examine how founders can leverage LLMs not just for efficiency, but for narrative depth.",
  readTime: "12 min read",
  content: [
    "In an era of prompt engineering, the boundary between human intent and machine execution is blurring. We examine how founders can leverage LLMs not just for efficiency, but for narrative depth.",
    "Artificial intelligence is no longer just a tool for automation; it is becoming a collaborative partner in the creative process. When we approach generative AI as a co-author rather than a machine, we unlock new dimensions of storytelling.",
    "The Faxlab Manifest outlines our core philosophy: human intuition combined with algorithmic scale creates a compounding effect on creativity. The future belongs to those who can articulate their vision and let the AI build the scaffolding."
  ],
  href: "#", // TODO: Replace with actual article URL
};

// ─── Editable: Side articles ──────────────────────────────────
const SIDE_ARTICLES = [
  {
    category: "Entrepreneurship",
    title: "Bootstrap vs. Blitz: The Author's Way of Scaling",
    excerpt:
      "How writing a book taught me more about unit economics than my first three startups combined.",
    meta: "8 min read • Feb 28",
    content: [
      "How writing a book taught me more about unit economics than my first three startups combined.",
      "The process of drafting, editing, and publishing requires the same iterative loops as shipping a product. You learn to cut features (chapters) that don't serve the core narrative.",
      "Ultimately, scaling a business is about scaling a story. If your unit economics don't make sense on a single page, they won't make sense at scale."
    ],
    href: "#",
  },
  {
    category: "Narrative Strategy",
    title: "Storytelling as Code: Structuring Your Brand Pitch",
    excerpt:
      "Treating your brand story like a codebase allows for iterative testing and cleaner communication.",
    meta: "15 min read • Feb 15",
    content: [
      "Treating your brand story like a codebase allows for iterative testing and cleaner communication.",
      "Just as spaghetti code leads to technical debt, a convoluted brand message creates narrative debt. You end up spending more time explaining what you do than actually doing it.",
      "By adopting version control for our messaging, we've found that clean, modular storytelling accelerates user acquisition better than any marketing hack."
    ],
    href: "#",
  },
];

// ─── Editable: New book CTA card ─────────────────────────────
const NEW_BOOK_CTA = {
  title: "New Book",
  body: '"My 50 Arranged Marriage Dates" is now available.',
  buttonLabel: "Get a Copy",
  href: "https://amzn.in/d/04YPt5mw", // Update with real Amazon link
};
// ─────────────────────────────────────────────────────────────

export const InsightsFeatured = () => {
  const [selectedArticle, setSelectedArticle] = useState<{
    title: string;
    category: string;
    date?: string;
    meta?: string;
    content: string[];
    imageSrc?: string;
  } | null>(null);

  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24 max-w-7xl mx-auto px-8 relative">
      {/* Main featured article — takes 8 of 12 columns */}
      <article className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface shadow-sm border border-outline-variant/10 flex flex-col justify-between">
        <div className="relative aspect-video overflow-hidden">
          <img
            alt={FEATURED_ARTICLE.imageAlt}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            src={FEATURED_ARTICLE.imageSrc}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="p-8 flex flex-col flex-grow">
          <div className="flex items-center space-x-4 mb-4 text-sm font-medium text-primary">
            <span>{FEATURED_ARTICLE.category}</span>
            <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
            <span className="text-on-surface-variant">{FEATURED_ARTICLE.date}</span>
          </div>
          <h2 className="text-3xl font-display font-bold group-hover:text-primary transition-colors leading-snug">
            {FEATURED_ARTICLE.title}
          </h2>
          <p className="mt-4 text-on-surface-variant text-lg leading-relaxed mb-6">
            {FEATURED_ARTICLE.excerpt}
          </p>
          <div className="mt-auto flex items-center justify-between pt-4">
            <span className="text-sm font-medium text-tertiary">{FEATURED_ARTICLE.readTime}</span>
            <button 
              onClick={() => setSelectedArticle(FEATURED_ARTICLE)} 
              className="flex items-center text-primary font-bold gap-2 group/link cursor-pointer bg-transparent border-none p-0"
            >
              Read Article
              <MoveRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </article>

      {/* Side panel — takes 4 of 12 columns */}
      <div className="md:col-span-4 flex flex-col gap-8">
        {SIDE_ARTICLES.map((article) => (
          <article
            key={article.title}
            onClick={() => setSelectedArticle(article)}
            className="p-6 rounded-xl bg-surface-container-low border border-transparent hover:border-primary-container transition-all cursor-pointer group"
          >
            <div className="text-sm font-medium text-primary mb-3">{article.category}</div>
            <h3 className="text-xl font-display font-bold mb-3 leading-snug group-hover:text-primary transition-colors">{article.title}</h3>
            <p className="text-on-surface-variant text-sm line-clamp-2">{article.excerpt}</p>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-xs font-medium text-tertiary uppercase tracking-wider">{article.meta}</div>
              <span className="text-primary font-bold text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">Read <MoveRight className="w-3 h-3" /></span>
            </div>
          </article>
        ))}

        {/* Book CTA promotional card */}
        <div className="mt-auto p-8 rounded-xl bg-primary text-on-primary relative overflow-hidden">
          <div className="relative z-10">
            <h4 className="text-xl font-display font-bold mb-2">{NEW_BOOK_CTA.title}</h4>
            <p className="text-primary-fixed text-sm mb-4">{NEW_BOOK_CTA.body}</p>
            <Link
              href={NEW_BOOK_CTA.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary px-4 py-2 rounded-md text-sm font-bold hover:bg-surface-container-low transition-all"
            >
              {NEW_BOOK_CTA.buttonLabel}
            </Link>
          </div>
          {/* Decorative icon — cosmetic only */}
          <div className="absolute -right-4 -bottom-4 opacity-10 text-[120px] font-medium select-none">📖</div>
        </div>
      </div>

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
                <div className="text-sm font-medium text-on-surface-variant flex gap-2 items-center">
                  {selectedArticle.date || selectedArticle.meta}
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
