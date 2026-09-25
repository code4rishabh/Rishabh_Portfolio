"use client";

import React, { useState } from 'react';
import { IMAGES } from '@/lib/imageConfig';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, X, BookOpen, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function BooksTeaser() {
  const [selectedBook, setSelectedBook] = useState<{title: string, description: string, longDescription: string[], image: string, link: string} | null>(null);

  const books = [
    {
      title: "What If You Are a Superhero",
      description: "Exploration of human consciousness in the wake of sentient-parallel AI development.",
      longDescription: [
        "In this deeply philosophical exploration, we dive into what happens to the human psyche when machines can parallel or even surpass human thought. Are we losing our edge, or discovering a new form of superhero within ourselves?",
        "Drawing from real-world advancements in neural networks and cognitive science, the book challenges readers to redefine their purpose. It provides a narrative framework to navigate a future where automation handles the mundane, leaving us to tackle the extraordinary."
      ],
      image: IMAGES.books.superhero,
      link: "https://amzn.in/d/04YPt5mw"
    },
    {
      title: "My 50 Arranged Marriage Dates",
      description: "A fictional story about arranged matchmaking, family expectations, and self-discovery.",
      longDescription: [
        "Through the fictional character Saurabh, this story explores first meetings, family expectations, disappointments, and the search for compatibility.",
        "At its heart, the book is about understanding yourself while navigating relationships and the pressures around them."
      ],
      image: IMAGES.books.marriageDates,
      link: "https://www.amazon.in/dp/B0FM7SPP37"
    },
    {
      title: "Transforming Supply Chain with AI",
      description: "A practical guide to leveraging AI, machine learning, and automation to optimize modern supply chain networks.",
      longDescription: [
        "Modern supply chains are fraught with inefficiencies, unpredictable disruptions, and siloed data. This book serves as a definitive guide to dismantling these traditional barriers using applied machine learning and automation.",
        "From predictive inventory management to autonomous logistics routing, we cover the exact frameworks needed to transition from reactive operations to a proactive, AI-driven supply chain ecosystem."
      ],
      image: IMAGES.books.supplyChain,
      link: "https://amzn.in/d/06E5erf2"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-display font-bold uppercase tracking-widest text-sm mb-4 block">Literary Works</span>
            <h2 className="font-display font-bold mb-4">Latest Releases</h2>
            <p className="text-on-surface-variant max-w-xl">Deep dives into the philosophy of technology, the future of work, and the human spirit in an age of automation.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              href="/books" 
              className="group inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-8 py-3.5 rounded-md font-bold hover:bg-primary hover:text-on-primary transition-all duration-300"
            >
              <span>View All Titles</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {books.map((book, index) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div 
                onClick={() => setSelectedBook(book)}
                className="block cursor-pointer"
              >
                <div className="aspect-[3/4.5] bg-surface-container-high rounded-2xl overflow-hidden mb-6 relative shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <img
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={book.image}
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="bg-surface text-primary px-6 py-2.5 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span>View Details</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold font-display mb-3 group-hover:text-primary transition-colors leading-tight">{book.title}</h3>
                <p className="text-on-surface-variant mb-6 line-clamp-2 leading-relaxed">{book.description}</p>
                
                <div className="flex items-center gap-2 text-primary font-bold group/btn">
                  <span className="border-b-2 border-transparent group-hover/btn:border-primary transition-all">View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedBook && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedBook(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="bg-surface p-8 md:p-10 rounded-3xl shadow-2xl max-w-4xl w-full relative border border-outline-variant/20 overflow-y-auto max-h-[90vh] flex flex-col md:flex-row gap-8 items-center md:items-start"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative Glow */}
              <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
              
              <button 
                onClick={() => setSelectedBook(null)}
                className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors bg-surface-container-high rounded-full p-2 cursor-pointer border-none"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="aspect-[3/4.5] rounded-xl overflow-hidden shadow-xl border border-outline-variant/10">
                  <img src={selectedBook.image} alt={selectedBook.title} className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="w-full md:w-2/3 flex flex-col relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4 self-start">
                  <BookOpen className="w-4 h-4" />
                  Featured Book
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold font-display text-on-surface mb-4 leading-tight">{selectedBook.title}</h3>
                
                <div className="text-on-surface-variant text-lg leading-relaxed mb-8 space-y-4">
                  {selectedBook.longDescription.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-outline-variant/10 flex flex-col sm:flex-row items-center gap-4">
                  <a 
                    href={selectedBook.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-primary text-on-primary px-8 py-3.5 rounded-xl font-bold hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    View on Amazon
                  </a>
                  <button 
                    onClick={() => setSelectedBook(null)}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-on-surface-variant hover:bg-surface-container-highest transition-colors cursor-pointer border-none bg-transparent"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
