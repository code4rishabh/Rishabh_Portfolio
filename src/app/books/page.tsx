// ============================================================
// app/books/page.tsx
// Route: /books
// This page assembles all Books section components.
// To add/remove sections, import and place them below.
// ============================================================

import React from "react";
import { BooksHero } from "@/components/sections/Books/BooksHero";
import { BooksFeatured } from "@/components/sections/Books/BooksFeatured";
import { BooksGrid } from "@/components/sections/Books/BooksGrid";

export const metadata = {
  title: "Books",
  description:
    "Explore books by Rishabh Agarwal that bridge technology, AI, and human narrative.",
  alternates: { canonical: "/books" },
};

export default function BooksPage() {
  return (
    <div className="pb-24 pt-16">
      {/* Page header */}
      <BooksHero />

      {/* Featured/latest book showcase */}
      <BooksFeatured />

      {/* Full bibliography grid */}
      <BooksGrid />

      {/* Author bibliography */}
      <section className="max-w-4xl mx-auto px-8 mt-16 mb-24">
        <div className="relative rounded-2xl p-12 overflow-hidden bg-primary/5 text-center border border-white/20 backdrop-blur-md">
          <h2 className="text-3xl font-display font-bold mb-4 relative">More from Rishabh Agarwal</h2>
          <p className="text-on-surface-variant mb-8 max-w-xl mx-auto relative">
            Amazon lists the latest editions, including <cite>From Gurutvakarsana to Gravity</cite>,
            co-authored with Swati Agarwal.
          </p>
          <a href="https://www.amazon.in/stores/author/B0F4K2RZNV" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-on-primary font-bold px-8 py-3 rounded-md hover:opacity-90 transition-all">
            View Amazon author page ↗
          </a>
        </div>
      </section>
    </div>
  );
}
