"use client";

import React from 'react';
import { IMAGES } from '@/lib/imageConfig';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function BooksTeaser() {
  const books = [
    {
      title: "What If You Are a Superhero",
      description: "Exploration of human consciousness in the wake of sentient-parallel AI development.",
      image: IMAGES.books.superhero,
      link: "https://amzn.in/d/04YPt5mw"
    },
    {
      title: "My 50 Arranged Marriage Dates",
      description: "The untold story of building a silicon valley powerhouse from a home garage in Mumbai.",
      image: IMAGES.books.marriageDates,
      link: "https://amzn.in/d/04YPt5mw"
    },
    {
      title: "Transforming Supply Chain with AI",
      description: "A practical guide to leveraging AI, machine learning, and automation to optimize modern supply chain networks.",
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
              <a 
                href={book.link} 
                target={book.link.startsWith('http') ? "_blank" : "_self"}
                rel="noopener noreferrer" 
                className="block"
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
                  <span className="border-b-2 border-transparent group-hover/btn:border-primary transition-all">Get Your Copy</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
