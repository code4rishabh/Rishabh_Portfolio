import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { appearances, links } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Videos & Appearances",
  description: "Selected talks and conversations featuring Rishabh Agarwal on ethical AI, work, books and Indian knowledge traditions.",
  alternates: { canonical: "/appearances" },
};

const more = [
  { label: "Author conversation", title: "My 50 Arranged Marriage Dates", url: "https://www.youtube.com/watch?v=fauEXnI3Acw" },
  { label: "FaxLab AI", title: "AI Town Hall", url: "https://www.youtube.com/watch?v=LmKvZSqO9V8" },
];

export default function AppearancesPage() {
  return <div className="interior-page"><div className="section-wrap interior-hero"><p className="eyebrow"><span className="eyebrow-line" /> Public conversations</p><h1>Ideas in<br /><em>conversation.</em></h1><p>Selected sessions across AI, work, books and culture.</p></div><div className="section-wrap feature-list">{[...appearances, ...more].map((item,index) => <a href={item.url} target="_blank" rel="noopener noreferrer" key={item.url}><span>0{index+1}</span><div><small>{item.label}</small><h2>{item.title}</h2></div><ArrowUpRight size={22} /></a>)}</div><div className="section-wrap channel-follow"><p>For more from Rishabh&apos;s own channels:</p><a href={links.faxlabYoutube} target="_blank" rel="noopener noreferrer">FaxLab AI on YouTube ↗</a><a href={links.triveniYoutube} target="_blank" rel="noopener noreferrer">Triveni Sangam Dialogues on YouTube ↗</a></div></div>;
}
