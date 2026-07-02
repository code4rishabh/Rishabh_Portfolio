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

import React from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { IMAGES } from "@/lib/imageConfig";

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
    href: "#",
  },
  {
    category: "Narrative Strategy",
    title: "Storytelling as Code: Structuring Your Brand Pitch",
    excerpt:
      "Treating your brand story like a codebase allows for iterative testing and cleaner communication.",
    meta: "15 min read • Feb 15",
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
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24 max-w-7xl mx-auto px-8">
      {/* Main featured article — takes 8 of 12 columns */}
      <article className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface shadow-sm border border-outline-variant/10">
        <div className="relative aspect-video overflow-hidden">
          <img
            alt={FEATURED_ARTICLE.imageAlt}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            src={FEATURED_ARTICLE.imageSrc}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="p-8">
          <div className="flex items-center space-x-4 mb-4 text-sm font-medium text-primary">
            <span>{FEATURED_ARTICLE.category}</span>
            <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
            <span className="text-on-surface-variant">{FEATURED_ARTICLE.date}</span>
          </div>
          <h2 className="text-3xl font-display font-bold group-hover:text-primary transition-colors leading-snug">
            {FEATURED_ARTICLE.title}
          </h2>
          <p className="mt-4 text-on-surface-variant text-lg leading-relaxed">
            {FEATURED_ARTICLE.excerpt}
          </p>
          <div className="mt-8 flex items-center justify-between">
            <span className="text-sm font-medium text-tertiary">{FEATURED_ARTICLE.readTime}</span>
            <Link href={FEATURED_ARTICLE.href} className="flex items-center text-primary font-bold gap-2 group/link">
              Read Article
              <MoveRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </article>

      {/* Side panel — takes 4 of 12 columns */}
      <div className="md:col-span-4 flex flex-col gap-8">
        {SIDE_ARTICLES.map((article) => (
          <article
            key={article.title}
            className="p-6 rounded-xl bg-surface-container-low border border-transparent hover:border-primary-container transition-all"
          >
            <div className="text-sm font-medium text-primary mb-3">{article.category}</div>
            <h3 className="text-xl font-display font-bold mb-3 leading-snug">{article.title}</h3>
            <p className="text-on-surface-variant text-sm line-clamp-2">{article.excerpt}</p>
            <div className="mt-4 text-xs font-medium text-tertiary uppercase tracking-wider">{article.meta}</div>
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
    </section>
  );
};
