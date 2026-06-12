"use client";

import React from 'react';
import { IMAGES } from '@/lib/imageConfig';
import { motion } from 'framer-motion';
import { ExternalLink, Play, Users, Award, TrendingUp } from 'lucide-react';

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

// ============================================================
// YouTube Channel Configuration (Easily Customizable)
// ============================================================
export const YOUTUBE_CONFIG = {
  channelName: "Triveni Sangam Dialogues",
  channelUrl: "https://youtube.com/@trivenisangamdialogues?si=oNjirLtBRAujpySj",
  subscriberCount: "120K+",
  videoCount: "150+",
  description: "A digital sanctuary for seeking truth, wisdom, and cosmic understanding. Delving into the depths of Sanatan Dharma, ancient scriptures, Jyotirlingas, Mahabharat, and the intersection of traditional mysticism with modern scientific consciousness.",
  stats: [
    { icon: Users, label: "Subscribers", value: "120K+" },
    { icon: Award, label: "Verified Channel", value: "Official Partner" },
    { icon: TrendingUp, label: "Topics covered", value: "Spirituality & Logic" }
  ],
  featuredVideos: [
    {
      title: "The Cosmic Resonance of Mantras: Sound, Science & Spirituality",
      description: "An in-depth exploration of ancient Vedic chants and how sound frequencies interact with the human brain and consciousness.",
      duration: "18:24",
      views: "45K views",
      gradient: "from-amber-600/30 via-orange-600/20 to-stone-900",
      image: IMAGES.youtube.mantraThumbnail,
      link: "https://youtube.com/@trivenisangamdialogues?si=oNjirLtBRAujpySj"
    },
    {
      title: "Deciphering the 12 Jyotirlingas: Energy Centers of the Cosmos",
      description: "A fascinating journey mapping the sacred temples of Shiva, exploring their astronomical alignments and cosmic energy structures.",
      duration: "24:15",
      views: "82K views",
      gradient: "from-red-700/30 via-orange-500/20 to-stone-900",
      image: IMAGES.youtube.jyotirlingaThumbnail,
      link: "https://youtube.com/@trivenisangamdialogues?si=oNjirLtBRAujpySj"
    },
    {
      title: "The Mahabharat Philosophy: Dharma in the Age of Chaos",
      description: "Unraveling the timeless lessons of the Gita and Mahabharat, applying ancient strategies to modern leadership and psychological resilience.",
      duration: "32:40",
      views: "112K views",
      gradient: "from-orange-700/30 via-amber-500/20 to-stone-900",
      image: IMAGES.youtube.mahabharatThumbnail,
      link: "https://youtube.com/@trivenisangamdialogues?si=oNjirLtBRAujpySj"
    }
  ]
};

export default function YoutubeChannel() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="youtube-channel" className="py-12 md:py-20 bg-surface-container-low overflow-hidden border-t border-b border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Main Section Grid: Left Content / Channel Card, Right Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-20">
          
          {/* Left Column: Interactive Channel Card (4/12 width) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-1.5 bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            
            {/* The Actual Premium Card */}
            <div className="relative bg-surface-container-lowest border border-outline-variant/20 rounded-2xl p-8 md:p-10 shadow-2xl flex flex-col items-center text-center">
              
              {/* YouTube Play Icon Badge */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red-600 text-white p-3 rounded-2xl shadow-lg flex items-center justify-center">
                <YoutubeIcon className="w-8 h-8 fill-current" />
              </div>
              
              {/* Channel Avatar/Logo with Glowing Border */}
              <div className="relative mt-4 mb-6">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-surface shadow-xl relative z-10 bg-surface-container-high flex items-center justify-center">
                  <img 
                    src={IMAGES.youtube.logo} 
                    alt={YOUTUBE_CONFIG.channelName} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=256&auto=format&fit=crop";
                    }}
                  />
                </div>
                {/* Decorative pulsing halo */}
                <div className="absolute inset-0 rounded-full bg-red-500/20 blur-md animate-ping" style={{ animationDuration: '3s' }} />
              </div>

              {/* Channel Titles */}
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-on-surface">
                  {YOUTUBE_CONFIG.channelName}
                </h3>
                {/* YouTube Verified Checkmark */}
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-500 text-white text-[10px] font-bold" title="Verified Creator">
                  ✓
                </span>
              </div>
              
              <span className="text-sm font-semibold tracking-wider uppercase text-red-600 mb-6 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
                Official Channel
              </span>

              {/* Stats Counters */}
              <div className="grid grid-cols-2 gap-4 w-full mb-8 pt-6 border-t border-outline-variant/10">
                <div className="text-center p-3 bg-surface rounded-xl border border-outline-variant/5">
                  <p className="text-2xl font-bold font-display text-on-surface">{YOUTUBE_CONFIG.subscriberCount}</p>
                  <p className="text-xs text-on-surface-variant font-medium">Subscribers</p>
                </div>
                <div className="text-center p-3 bg-surface rounded-xl border border-outline-variant/5">
                  <p className="text-2xl font-bold font-display text-on-surface">{YOUTUBE_CONFIG.videoCount}</p>
                  <p className="text-xs text-on-surface-variant font-medium">Videos Published</p>
                </div>
              </div>

              {/* Main YouTube CTA Link */}
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href={YOUTUBE_CONFIG.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#FF0000] text-white py-4 px-8 rounded-xl font-bold shadow-lg shadow-red-500/20 hover:shadow-red-500/40 hover:bg-[#E60000] transition-all duration-300 flex items-center justify-center gap-3 text-lg"
              >
                <YoutubeIcon className="w-6 h-6 fill-current" />
                <span>Subscribe Channel</span>
                <ExternalLink className="w-4 h-4 opacity-70" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Philosophy (7/12 width) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <span className="text-primary font-display font-bold uppercase tracking-widest text-sm mb-4 block">
                Featured Media Channel
              </span>
              <h2 className="font-display font-bold mb-6 text-on-surface leading-tight">
                Triveni Sangam Dialogues
              </h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-red-600 to-orange-500 rounded-full mb-8"></div>
              
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-6">
                {YOUTUBE_CONFIG.description}
              </p>
              
              <p className="text-base text-on-surface-variant/80 leading-relaxed">
                As a extension of my storytelling and philosophical exploration, Triveni Sangam Dialogues serves as a public audio-visual archive. Here, logic and devotion converge, building an intellectual platform where viewers explore ancient traditions through a modern, critical, and respectful lens.
              </p>
            </div>

            {/* Benefit Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {YOUTUBE_CONFIG.stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-2.5 rounded-lg bg-red-50 text-red-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface text-base leading-tight mb-0.5">{stat.value}</h4>
                      <p className="text-xs text-on-surface-variant">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Section Bottom: Featured Episodes / Extensibility Showcase */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 15 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-2xl md:text-3xl font-bold text-on-surface">
                Featured Discussions
              </h3>
              <p className="text-on-surface-variant text-base mt-2 max-w-xl">
                Tune in to some of our most intellectually stimulating episodes and spiritual explorations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <a 
                href={YOUTUBE_CONFIG.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-primary font-bold hover:text-red-600 transition-colors"
              >
                <span>Browse All Videos</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Cards Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {YOUTUBE_CONFIG.featuredVideos.map((video, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/10 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
              >
                <a 
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col h-full"
                >
                  {/* Decorative Video Thumbnail Mockup (using real generated image, beautiful gradients and play badge) */}
                  <div className="aspect-video w-full relative flex items-center justify-center overflow-hidden border-b border-outline-variant/5">
                    {/* Real Video Thumbnail Image */}
                    <img 
                      src={video.image} 
                      alt={video.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Beautiful warm gradient overlay to unify the brand aesthetics */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 mix-blend-multiply opacity-90 transition-opacity duration-300 group-hover:opacity-80" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${video.gradient} opacity-40 mix-blend-color-dodge`} />
                    
                    {/* Overlay Grid lines for tech-spiritual aesthetic */}
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
                    
                    {/* Glowing Play Icon Container */}
                    <div className="relative w-14 h-14 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-500 group-hover:scale-115 group-hover:bg-[#FF0000] group-hover:border-red-500 shadow-lg group-hover:shadow-red-500/50 z-10">
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </div>

                    {/* YouTube Watermark Icon */}
                    <div className="absolute bottom-3 right-3 bg-black/75 text-white px-2.5 py-1 rounded text-xs font-bold font-mono tracking-wider z-10">
                      {video.duration}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-[11px] font-bold text-red-600 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                      {video.views}
                    </span>
                    
                    <h4 className="font-display font-bold text-lg md:text-xl text-on-surface mb-3 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {video.title}
                    </h4>
                    
                    <p className="text-sm text-on-surface-variant line-clamp-3 leading-relaxed flex-1">
                      {video.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-6 mt-6 border-t border-outline-variant/10 text-primary font-bold text-sm group/btn">
                      <span className="group-hover:text-red-600 transition-colors">Watch Episode</span>
                      <Play className="w-4 h-4 text-primary group-hover:text-red-600 group-hover/btn:translate-x-1 transition-all" />
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
