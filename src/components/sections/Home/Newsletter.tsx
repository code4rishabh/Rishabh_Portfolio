'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-12 md:py-20 bg-surface-container-high overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-display font-bold uppercase tracking-widest text-sm mb-4 block">Monthly Editorial</span>
          <h2 className="font-display font-bold mb-6">Stay ahead of the curve.</h2>
          <p className="text-lg md:text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">
            Subscribe to my monthly editorial where I dissect the future of AI and the craft of storytelling. Join a community of forward-thinkers.
          </p>
          
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 p-2 bg-surface-container-lowest rounded-xl shadow-lg border border-outline-variant/10" 
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="flex-1 px-6 py-4 rounded-lg bg-transparent border-none outline-none focus:ring-0 text-on-surface w-full text-lg"
              placeholder="Enter your email address"
              type="email"
              autoComplete="email"
              required
            />
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold hover:shadow-xl hover:shadow-primary/20 transition-all text-lg flex items-center justify-center gap-2 whitespace-nowrap" 
              type="submit"
            >
              <span>Join Now</span>
              <Send className="w-4 h-4" />
            </motion.button>
          </motion.form>
          
          <p className="text-xs text-on-surface-variant mt-6 opacity-60">
            No spam, ever. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
