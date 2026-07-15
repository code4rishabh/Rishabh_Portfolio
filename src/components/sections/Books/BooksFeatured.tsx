"use client";

// ============================================================
// BooksFeatured.tsx
// Section: Two featured books in a side-by-side layout.
// To customize: Edit the FEATURED_BOOKS array below.
//   Each entry: coverSrc, coverAlt, badge, title, description,
//   amazonHref, published, format
// ============================================================

import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { IMAGES } from "@/lib/imageConfig";

// ─── Editable: Featured books data ───────────────────────────
const FEATURED_BOOKS = [
  {
    coverSrc: IMAGES.books.superhero,
    coverAlt: "What If You Are a Superhero - Book Cover",
    badge: "Featured Book",
    title: "What If You Are a Superhero",
    description:
      "An inspiring exploration of untapped human potential and what you could become if you believed in your own extraordinary abilities.",
    amazonHref: "https://amzn.in/d/04YPt5mw",
    published: "2023",
    format: "Paperback, Digital",
  },
  {
    coverSrc: IMAGES.books.marriageDates,
    coverAlt: "My 50 Arranged Marriage Dates - Book Cover",
    badge: "Also Available",
    title: "My 50 Arranged Marriage Dates",
    description:
      "A hilarious and heartfelt account of navigating modern arranged marriages, dating, and human connection in the digital age.",
    amazonHref: "https://amzn.in/d/04YPt5mw", // ← Update with real Amazon link
    published: "2026",
    format: "Paperback, Digital",
  },
];
// ─────────────────────────────────────────────────────────────

export const BooksFeatured = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {FEATURED_BOOKS.map((book) => (
          <div
            key={book.title}
            className="bg-surface-container-low rounded-xl p-8 md:p-12 flex flex-col gap-8 overflow-hidden"
          >
            {/* Book cover image */}
            <div className="relative mx-auto w-48 md:w-56 flex-shrink-0">
              {/* Decorative blurred glow — cosmetic only */}
              <div className="absolute inset-0 bg-primary/10 blur-3xl -z-10 translate-x-6 translate-y-6" />
              <img
                alt={book.coverAlt}
                className="w-full h-auto rounded-lg shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                src={book.coverSrc}
              />
            </div>

            {/* Book details */}
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-primary-container/20 text-primary font-bold text-xs uppercase tracking-widest">
                {book.badge}
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-display font-bold text-on-surface leading-tight">
                {book.title}
              </h2>

              {/* Description */}
              <p className="text-lg text-on-surface-variant leading-relaxed">
                {book.description}
              </p>

              {/* CTA button */}
              <Link
                href={book.amazonHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-md font-bold hover:opacity-90 transition-all"
              >
                Buy on Amazon
                <ExternalLink className="w-4 h-4" />
              </Link>

              {/* Book metadata */}
              <div className="pt-4 border-t border-outline-variant/20 flex gap-8">
                <div>
                  <p className="text-xs text-outline uppercase font-bold tracking-widest mb-1">
                    Published
                  </p>
                  <p className="font-display font-medium">{book.published}</p>
                </div>
                <div>
                  <p className="text-xs text-outline uppercase font-bold tracking-widest mb-1">
                    Format
                  </p>
                  <p className="font-display font-medium">{book.format}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
