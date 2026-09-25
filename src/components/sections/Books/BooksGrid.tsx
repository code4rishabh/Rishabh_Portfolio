"use client";

// ============================================================
// BooksGrid.tsx
// Section: Bibliography grid of all book cards.
// Design: Stitch "Books & Publications" – The Complete Bibliography.
// To customize: Edit the BOOKS array below. Each book:
//   - title, description, year, genre, amazonHref, coverSrc, coverAlt
// ============================================================

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { IMAGES } from "@/lib/imageConfig";

// ─── Editable: All books data ─────────────────────────────────
// Add a new object to this array to add another book card.
const BOOKS = [
  {
    title: "What If You Are a Superhero",
    description:
      "An inspiring exploration of untapped human potential and what you could become if you believed in your own extraordinary abilities.",
    year: "2023",
    genre: "Self-help / Motivation",
    amazonHref: "https://amzn.in/d/04YPt5mw", // ← Update with real Amazon link
    coverSrc: IMAGES.books.superhero,
    coverAlt: "What If You Are a Superhero - Book Cover",
  },
  {
    title: "My 50 Arranged Marriage Dates",
    description:
      "A fictional story about arranged matchmaking, relationships, and self-discovery.",
    year: "2025",
    genre: "Fiction / Relationships",
    amazonHref: "https://www.amazon.in/dp/B0FM7SPP37",
    coverSrc: IMAGES.books.marriageDates,
    coverAlt: "My 50 Arranged Marriage Dates - Book Cover",
  },
  {
    title: "Transforming Supply Chain with AI",
    description:
      "A practical guide to leveraging AI, machine learning, and automation to optimize modern supply chain networks.",
    year: "2026",
    genre: "Technology / Business",
    amazonHref: "https://amzn.in/d/06E5erf2",
    coverSrc: IMAGES.books.supplyChain,
    coverAlt: "Transforming Supply Chain with AI - Book Cover",
  },
];
// ─────────────────────────────────────────────────────────────

export const BooksGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 space-y-12 pb-24">
      {/* Section header */}
      <div className="flex justify-between items-end">
        <h3 className="text-3xl font-display font-bold">The Complete Bibliography</h3>
      </div>

      {/* Book cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {BOOKS.map((book) => (
          <div key={book.title} className="group">
            {/* Cover image container with hover zoom */}
            <div className="bg-surface-container-low rounded-xl overflow-hidden mb-6 aspect-[3/4] flex items-center justify-center p-12 transition-all group-hover:bg-surface-container-high">
              <img
                alt={book.coverAlt}
                className="w-full h-auto shadow-2xl transition-transform duration-500 group-hover:scale-105"
                src={book.coverSrc}
              />
            </div>

            {/* Book text content */}
            <div className="space-y-3">
              <h4 className="text-2xl font-display font-bold text-on-surface group-hover:text-primary transition-colors">
                {book.title}
              </h4>
              <p className="text-on-surface-variant line-clamp-2">{book.description}</p>

              {/* Meta row: year + genre + Amazon link */}
              <div className="pt-4 flex justify-between items-center">
                <span className="text-sm font-bold text-outline uppercase tracking-tighter italic">
                  {book.year} · {book.genre}
                </span>
                <Link
                  href={book.amazonHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-bold inline-flex items-center gap-1 hover:underline"
                >
                  Amazon
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
