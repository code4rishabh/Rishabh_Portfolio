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
  metadataBase: new URL('https://www.rishabhagarwal.in'),
  title: {
    default: "Rishabh Agarwal | AI Founder, Author & Creator",
    template: "%s | Rishabh Agarwal"
  },
  description: "Rishabh Agarwal is the founder of FaxLab AI, creator of Triveni Sangam Dialogues, and an author writing about technology, work and life.",
  keywords: ["Rishabh Agarwal", "FaxLab AI", "Triveni Sangam Dialogues", "AI", "Author"],
  authors: [{ name: "Rishabh Agarwal" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.rishabhagarwal.in",
    siteName: "Rishabh Agarwal",
    title: "Rishabh Agarwal | AI Founder, Author & Creator",
    description: "Founder of FaxLab AI, creator of Triveni Sangam Dialogues, and author.",
    images: [
      {
        url: "/images/profile/Rishabh_portrait.png",
        alt: "Rishabh Agarwal",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishabh Agarwal | AI Founder, Author & Creator",
    description: "Founder of FaxLab AI, creator of Triveni Sangam Dialogues, and author.",
    images: ["/images/profile/Rishabh_portrait.png"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.rishabhagarwal.in/#person",
  name: "Rishabh Agarwal",
  url: "https://www.rishabhagarwal.in/",
  image: "https://www.rishabhagarwal.in/images/profile/Rishabh_portrait.png",
  description: "Founder of FaxLab AI, creator of Triveni Sangam Dialogues, and author.",
  sameAs: [
    "https://www.linkedin.com/in/rishabhagarwaliimc/",
    "https://www.goodreads.com/author/show/57744925.Rishabh_Agarwal",
    "https://www.amazon.in/stores/author/B0F4K2RZNV",
    "https://www.youtube.com/@TriveniSangamDialogues",
  ],
  affiliation: [
    { "@type": "Organization", name: "FaxLab AI", url: "https://faxlab.in/" },
    { "@type": "Organization", name: "Triveni Sangam Dialogues", url: "https://trivenisangamdialogues.in/" },
  ],
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }} />
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
