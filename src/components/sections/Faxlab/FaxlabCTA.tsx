"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, CalendarCheck, User, Phone, BookOpen } from "lucide-react";

export const FaxlabCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "", course: "Faxlab AI Engine" });

  const handleSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Demo/Course Request*\n\n*Name:* ${formData.name}\n*Mobile:* ${formData.mobile}\n*Interest/Course:* ${formData.course}\n\nI would like to schedule a session. Please guide me on the next steps.`;
    window.open(`https://wa.me/919015189468?text=${encodeURIComponent(text)}`, "_blank");
    setIsModalOpen(false);
    setFormData({ name: "", mobile: "", course: "Faxlab AI Engine" }); // reset
  };

  return (
    <section className="mb-24 px-8 max-w-7xl mx-auto relative">
      <div className="bg-primary-container/10 rounded-3xl p-12 md:p-20 relative overflow-hidden text-center border border-primary-container/20">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-on-primary-container">Ready to see the future?</h2>
          <p className="text-on-surface-variant text-xl mb-10 leading-relaxed">
            Join hundreds of innovative companies using Faxlab to automate their intelligence workflows. Explore the main platform or book a demo with our team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="https://www.faxlab.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-on-primary px-10 py-4 rounded-md font-bold text-lg hover:bg-gradient-to-r hover:from-primary hover:to-primary-container transition-all text-center"
            >
              Go to Faxlab.com
            </Link>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-surface text-primary px-10 py-4 rounded-md font-bold text-lg border border-primary/20 hover:bg-surface-container-low transition-all text-center cursor-pointer"
            >
              Schedule a Demo
            </button>
          </div>
        </div>
        {/* Glassmorphism decorative circles */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary-container/20 rounded-full blur-3xl"></div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="bg-surface p-8 md:p-12 rounded-3xl shadow-2xl max-w-lg w-full relative border border-outline-variant/20 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative Glow */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <CalendarCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-display text-on-surface">Schedule a Session</h3>
                    <p className="text-sm text-on-surface-variant">We'll guide you through the setup</p>
                  </div>
                </div>

                <form onSubmit={handleSchedule} className="space-y-5 mt-8">
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
                      <BookOpen className="w-4 h-4 text-primary" /> Interest / Course
                    </label>
                    <select 
                      className="w-full bg-surface-container p-3 rounded-lg border border-outline-variant/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all cursor-pointer appearance-none"
                      value={formData.course}
                      onChange={(e) => setFormData({...formData, course: e.target.value})}
                    >
                      <option value="Faxlab AI Engine">Faxlab AI Engine Demo</option>
                      <option value="AI Tools Masterclass">AI Tools Masterclass</option>
                      <option value="Narrative & AI Course">Narrative & AI Synthesis Course</option>
                      <option value="Custom Enterprise Solution">Custom Enterprise Solution</option>
                    </select>
                  </div>

                  <p className="text-xs text-on-surface-variant pt-2 leading-relaxed">
                    By submitting, you will be redirected to WhatsApp to confirm your slot. Our team will provide proper guidance and instructions for your selected course/demo.
                  </p>

                  <button 
                    type="submit"
                    className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2 mt-4"
                  >
                    Confirm via WhatsApp
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
