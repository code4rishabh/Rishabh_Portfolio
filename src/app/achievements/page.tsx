import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { links } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Selected work by Rishabh Agarwal across FaxLab AI, Triveni Sangam Dialogues, publishing and public speaking.",
  alternates: { canonical: "/achievements" },
};

const work = [
  { number: "01", title: "FaxLab AI", area: "AI & enterprise learning", summary: "Founded an AI consulting and education venture focused on useful adoption at work.", url: links.faxlab },
  { number: "02", title: "Triveni Sangam Dialogues", area: "Culture & conversation", summary: "Created a platform for conversations about Sanatan wisdom and Indian knowledge traditions.", url: links.triveni },
  { number: "03", title: "Books", area: "Writing & publishing", summary: "Four published books spanning self-discovery, relationships, AI in supply chains and linguistic heritage.", url: "/books" },
  { number: "04", title: "Public conversations", area: "Speaking & dialogue", summary: "Talks on responsible AI, work, leadership and Indian traditions.", url: "/appearances" },
];

export default function SelectedWorkPage() {
  return <div className="interior-page"><div className="section-wrap interior-hero"><p className="eyebrow"><span className="eyebrow-line" /> Selected work</p><h1>Work that<br /><em>connects worlds.</em></h1><p>Four ways Rishabh brings experience and curiosity into public work.</p></div><div className="section-wrap feature-list">{work.map(item => <a href={item.url} key={item.number}><span>{item.number}</span><div><small>{item.area}</small><h2>{item.title}</h2><p>{item.summary}</p></div><ArrowUpRight size={22} /></a>)}</div></div>;
}
