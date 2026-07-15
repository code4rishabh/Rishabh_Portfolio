import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rishabhagrawal.in'),
  title: {
    default: "Rishabh Agrawal | AI Entrepreneur, Author & Tech Visionary",
    template: "%s | Rishabh Agrawal"
  },
  description: "Official portfolio of Rishabh Agrawal - Author of 'My 50 Arranged Marriage Dates', Founder of Faxlab AI, and thought leader in generative AI and cognitive science.",
  keywords: ["Rishabh Agrawal", "AI Entrepreneur", "Faxlab AI", "My 50 Arranged Marriage Dates", "Tech Author", "Generative AI"],
  authors: [{ name: "Rishabh Agrawal" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rishabhagrawal.in",
    siteName: "Rishabh Agrawal Portfolio",
    title: "Rishabh Agrawal | AI Entrepreneur, Author & Tech Visionary",
    description: "Official portfolio of Rishabh Agrawal - Author, Founder of Faxlab AI, and tech visionary.",
    images: [
      {
        url: "/images/hero/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Rishabh Agrawal",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishabh Agrawal | AI Entrepreneur & Author",
    description: "Official portfolio of Rishabh Agrawal - Author, Founder of Faxlab AI, and tech visionary.",
    images: ["/images/hero/hero.jpg"],
  },
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-surface font-sans text-on-surface">
        <Header />
        <main className="flex-grow bg-surface relative z-0">
          {children}
        </main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
