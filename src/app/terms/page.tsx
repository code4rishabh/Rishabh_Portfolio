import type { Metadata } from "next";
import { links } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for using Rishabh Agarwal's personal website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <div className="interior-page"><div className="section-wrap interior-hero"><p className="eyebrow"><span className="eyebrow-line" /> Site information</p><h1>Terms.</h1><p>Information about the content and links on this personal website.</p></div><div className="section-wrap single-story legal-copy">
    <h2>Website content</h2><p>The text, images and other material on this site are provided for general information. Please ask before reproducing original content for commercial use.</p>
    <h2>External links</h2><p>Links to books, profiles, videos and ventures take you to independent websites. Their own terms apply when you use them. Book availability and prices are set by the retailer.</p>
    <h2>Corrections</h2><p>If you notice an error or need permission to use site content, <a href={links.email}>contact Rishabh</a>.</p>
  </div></div>;
}
