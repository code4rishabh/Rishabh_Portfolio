"use client";

import React from 'react';
import { IMAGES } from '@/lib/imageConfig';
import { motion } from 'framer-motion';

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export default function Hero() {
  const handleScrollToYoutube = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('youtube-channel');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left: Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 z-10 text-center lg:text-left"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-display text-sm font-bold mb-6 tracking-wide"
          >
            Founder of Faxlab AI &amp; Author
          </motion.span>
          
          <h1 className="font-display font-bold text-on-surface leading-[1.1] mb-8">
            Architecting AI, <br className="hidden md:block" />
            <span className="text-primary italic">Narrating</span> the Future.
          </h1>
          
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10">
            Bridging the gap between technical precision and human narrative. Currently building Faxlab AI while exploring the philosophy of innovation through the written word.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="/books"
              className="w-full sm:w-auto bg-primary text-on-primary px-10 py-4 rounded-md text-lg font-bold shadow-lg shadow-primary/20 transition-all duration-300 text-center"
            >
              Explore Books
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="/faxlab"
              className="w-full sm:w-auto bg-surface-container-high text-on-surface px-10 py-4 rounded-md text-lg font-bold shadow-sm hover:shadow-md transition-all duration-300 border border-outline-variant/30 text-center"
            >
              Faxlab AI
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#youtube-channel"
              onClick={handleScrollToYoutube}
              className="w-full sm:w-auto bg-[#FF0000]/10 hover:bg-[#FF0000] text-[#FF0000] hover:text-white px-8 py-4 rounded-md text-lg font-bold shadow-sm hover:shadow-lg transition-all duration-300 border border-[#FF0000]/20 hover:border-transparent text-center flex items-center justify-center gap-2"
            >
              <YoutubeIcon className="w-5 h-5 fill-current" />
              <span>Triveni Sangam Dialogues</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Right: Portrait */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-5 relative order-first lg:order-last"
        >
          <div className="aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-2xl relative z-10 transform lg:rotate-2 hover:rotate-0 transition-transform duration-700">
            <img
              alt="Rishabh Agrawal"
              className="w-full h-full object-cover"
              src={IMAGES.profile.heroPortrait}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl -z-0 animate-pulse" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-secondary-container/20 rounded-full blur-3xl -z-0" />
        </motion.div>
      </div>
    </section>
  );
}
