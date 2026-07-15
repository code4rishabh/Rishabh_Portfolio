"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, Phone, MessageSquare, Send } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Achievements", href: "/achievements" },
  { name: "Faxlab AI", href: "/faxlab" },
  { name: "Books", href: "/books" },
  { name: "Insights", href: "/insights" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Modal state
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "", subject: "General Inquiry" });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Inquiry via Website*\n\n*Name:* ${formData.name}\n*Mobile:* ${formData.mobile}\n*Subject:* ${formData.subject}\n\nHi Rishabh, I would like to get in touch regarding the above subject.`;
    window.open(`https://wa.me/919015189468?text=${encodeURIComponent(text)}`, "_blank");
    setIsContactModalOpen(false);
    setFormData({ name: "", mobile: "", subject: "General Inquiry" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-4 md:px-6 py-4",
        scrolled
          ? "glass-nav py-3 ambient-shadow"
          : "bg-transparent py-6"
      )}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - Textual, Space Grotesk */}
        <Link href="/" className="flex items-center gap-2 group min-w-0">
          <span className="text-xl md:text-2xl font-bold font-display tracking-tight text-on-surface truncate">
            Rishabh Agrawal
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 lg:gap-8 font-display font-bold text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm lg:text-lg text-on-surface-variant hover:text-primary transition-all duration-300 relative group px-2"
            >
              {link.name}
              <span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full"
              />
            </Link>
          ))}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="px-6 py-2.5 bg-primary text-on-primary rounded-md text-sm font-medium hover:bg-gradient-to-br hover:from-primary hover:to-primary-container transition-all duration-300 shadow-sm cursor-pointer border-none"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-on-surface focus:outline-none relative w-10 h-10 flex items-center justify-center ghost-border rounded-md bg-surface/50 backdrop-blur-sm"
          aria-label="Toggle Menu"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.div>
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 border-t border-outline-variant/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl h-screen bg-surface backdrop-blur-xl"
          >
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-display font-bold text-on-surface hover:text-primary transition-colors block py-3 border-b border-outline-variant/10"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="pt-6"
            >
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsContactModalOpen(true);
                }}
                className="w-full flex items-center justify-center px-5 py-4 bg-primary text-on-primary rounded-md text-lg font-bold shadow-lg hover:bg-gradient-to-br hover:from-primary hover:to-primary-container transition-all cursor-pointer border-none"
              >
                Get in Touch
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-md"
            onClick={() => setIsContactModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="bg-surface p-8 md:p-12 rounded-3xl shadow-2xl max-w-lg w-full relative border border-outline-variant/20 overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative Glow */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <button 
                onClick={() => setIsContactModalOpen(false)}
                className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Send className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-display text-on-surface">Let's Connect</h3>
                    <p className="text-sm text-on-surface-variant">Send a message directly to WhatsApp</p>
                  </div>
                </div>

                <form onSubmit={handleWhatsAppSubmit} className="space-y-5 mt-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" /> Full Name
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. John Doe"
                      className="w-full bg-surface-container p-3 rounded-lg border border-outline-variant/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" /> Mobile Number
                    </label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+91 98765 43210"
                      className="w-full bg-surface-container p-3 rounded-lg border border-outline-variant/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      value={formData.mobile}
                      onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-primary" /> Subject
                    </label>
                    <select 
                      className="w-full bg-surface-container p-3 rounded-lg border border-outline-variant/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all cursor-pointer appearance-none"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Mentorship / Coaching">Mentorship / Coaching</option>
                      <option value="Speaking Engagement">Speaking Engagement</option>
                      <option value="Consulting / Board Member">Consulting / Board Member</option>
                      <option value="Collaboration / PR">Collaboration / PR</option>
                    </select>
                  </div>

                  <p className="text-xs text-on-surface-variant pt-2 leading-relaxed">
                    By submitting, you will be redirected to WhatsApp to start a conversation directly with me.
                  </p>

                  <button 
                    type="submit"
                    className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2 mt-4 cursor-pointer border-none"
                  >
                    Continue to WhatsApp <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
