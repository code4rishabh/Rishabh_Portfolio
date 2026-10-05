import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { founderBio, links } from "@/lib/profile";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Rishabh Agarwal, founder of FaxLab AI and Triveni Sangam Dialogues, author and speaker on AI, supply chains and Indian knowledge traditions.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <article className="interior-page">
    <div className="section-wrap interior-hero"><p className="eyebrow"><span className="eyebrow-line" /> Biography</p><h1>Rishabh<br /><em>Agarwal.</em></h1><p>{founderBio}</p></div>
    <div className="section-wrap bio-grid"><img src="/images/profile/Rishabh_portrait.png" alt="Portrait of Rishabh Agarwal" /><div><p className="eyebrow">The path so far</p><h2>Curiosity across disciplines.</h2><p>Rishabh Agarwal has spent two decades working in supply chains, procurement and strategy. He brings that industry experience to AI education and consulting through FaxLab AI, which he founded to help organisations turn new technology into practical capability.</p><p>He also founded Triveni Sangam Dialogues, a platform for conversations about Sanatan wisdom and Indian knowledge traditions. As an author, his work spans personal growth, relationships and the application of AI in supply chains.</p><p>Rishabh speaks about responsible AI, work and leadership. On 3 February 2026, he led a guest session on building an ethical AI culture at Jaipuria Institute of Management, Ghaziabad. Explore the <a href={links.jaipuriaReport} target="_blank" rel="noopener noreferrer">institute&apos;s event report</a> and <a href={links.jaipuriaVideo} target="_blank" rel="noopener noreferrer">official session video</a>.</p><div className="bio-links"><a className="text-link" href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={17} /></a><a className="text-link" href={links.email}>Get in touch <ArrowUpRight size={17} /></a></div></div></div>
    <div className="section-wrap bio-platforms"><h2>Explore the work</h2><div><a href={links.faxlab} target="_blank" rel="noopener noreferrer">FaxLab AI ↗</a><a href={links.triveni} target="_blank" rel="noopener noreferrer">Triveni Sangam Dialogues ↗</a><a href={links.faxlabYoutube} target="_blank" rel="noopener noreferrer">FaxLab AI on YouTube ↗</a><a href={links.triveniYoutube} target="_blank" rel="noopener noreferrer">Triveni on YouTube ↗</a><a href={links.amazonAuthor} target="_blank" rel="noopener noreferrer">Amazon author page ↗</a><a href={links.goodreads} target="_blank" rel="noopener noreferrer">Goodreads author page ↗</a></div></div>
  </article>;
}
