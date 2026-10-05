import type { Metadata } from "next";
import "./globals.css";
import { founderBio, links } from "@/lib/profile";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rishabhagarwal.in'),
  title: {
    default: "Rishabh Agarwal | Founder, Author & Speaker",
    template: "%s | Rishabh Agarwal"
  },
  description: "Rishabh Agarwal founded FaxLab AI and Triveni Sangam Dialogues. Explore his books, public conversations and work across AI, supply chains and Indian knowledge traditions.",
  keywords: ["Rishabh Agarwal", "FaxLab AI", "Triveni Sangam Dialogues", "AI", "Author"],
  authors: [{ name: "Rishabh Agarwal" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.rishabhagarwal.in",
    siteName: "Rishabh Agarwal",
    title: "Rishabh Agarwal | Founder, Author & Speaker",
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
    title: "Rishabh Agarwal | Founder, Author & Speaker",
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
  description: founderBio,
  jobTitle: "Founder & CEO",
  alumniOf: { "@type": "CollegeOrUniversity", name: "Indian Institute of Management Calcutta" },
  worksFor: { "@type": "Organization", name: "FaxLab AI", url: links.faxlab },
  subjectOf: {
    "@type": "WebPage",
    name: "Jaipuria Institute of Management: ethical AI guest session",
    url: links.jaipuriaReport,
    publisher: { "@type": "CollegeOrUniversity", name: "Jaipuria Institute of Management, Ghaziabad" },
  },
  sameAs: [
    "https://www.linkedin.com/in/rishabhagarwaliimc/",
    "https://www.goodreads.com/author/show/57744925.Rishabh_Agarwal",
    "https://www.amazon.in/stores/author/B0F4K2RZNV",
    "https://www.youtube.com/@TriveniSangamDialogues",
    "https://www.youtube.com/@faxlabai",
  ],
  knowsAbout: ["FaxLab AI", "Triveni Sangam Dialogues", "artificial intelligence", "books"],
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
      className="h-full antialiased scroll-smooth"
    >
      <head>
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
