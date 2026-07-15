import React from 'react';
import Hero from '@/components/sections/Home/Hero';
import About from '@/components/sections/Home/About';
import YoutubeChannel from '@/components/sections/Home/YoutubeChannel';
import BooksTeaser from '@/components/sections/Home/BooksTeaser';
import Newsletter from '@/components/sections/Home/Newsletter';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rishabh Agrawal | AI Entrepreneur, Author & Tech Visionary",
  description: "Official portfolio of Rishabh Agrawal - Author of 'My 50 Arranged Marriage Dates', Founder of Faxlab AI, and thought leader in generative AI and cognitive science.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Hero />
      <About />
      <BooksTeaser />
      <YoutubeChannel />
      <Newsletter />
    </div>
  );
}
