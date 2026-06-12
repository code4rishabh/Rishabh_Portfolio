import React from 'react';
import Hero from '@/components/sections/Home/Hero';
import About from '@/components/sections/Home/About';
import YoutubeChannel from '@/components/sections/Home/YoutubeChannel';
import BooksTeaser from '@/components/sections/Home/BooksTeaser';
import Newsletter from '@/components/sections/Home/Newsletter';

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
