"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rishabhbenz@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-primary text-on-primary rounded-md text-sm font-medium hover:bg-gradient-to-br hover:from-primary hover:to-primary-container transition-all duration-300 shadow-sm"
            >
              Get in Touch
            </Link>
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
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rishabhbenz@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center px-5 py-4 bg-primary text-on-primary rounded-md text-lg font-bold shadow-lg hover:bg-gradient-to-br hover:from-primary hover:to-primary-container transition-all"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
