import React from 'react';
import Hero from '@/components/sections/Home/Hero';
import Identity from '@/components/sections/Home/Identity';
import YoutubeChannel from '@/components/sections/Home/YoutubeChannel';
import BooksTeaser from '@/components/sections/Home/BooksTeaser';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Rishabh Agarwal | AI Founder, Author & Creator" },
  description: "Rishabh Agarwal is the founder of FaxLab AI, creator of Triveni Sangam Dialogues, and an author writing about technology, work and life.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Hero />
      <Identity />
      <BooksTeaser />
      <YoutubeChannel />
    </div>
  );
}
