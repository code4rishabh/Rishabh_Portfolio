import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Ideas & Conversations",
  description: "Explore Rishabh Agarwal's public conversations about responsible AI, supply chains, work and storytelling.",
  alternates: { canonical: "/insights" },
};

const ideas = [
  { label: "Responsible AI", title: "How to build an ethical AI culture", summary: "A Jaipuria Institute of Management session on bias, accountability and human judgment.", url: "https://jaipuriamba.edu.in/webinar-on-how-to-build-an-ethical-ai-culture-at-jaipuria-institute-of-management/" },
  { label: "Work & leadership", title: "The 70-hour work week debate", summary: "A conversation with Edu Attack about productivity and the way we work.", url: "https://www.youtube.com/watch?v=Vm5ZOnygdIs" },
  { label: "AI in operations", title: "Transforming supply chains with AI", summary: "Ideas and strategies for EPC procurement and logistics in Rishabh's book.", url: "https://amzn.in/d/06E5erf2" },
];

export default function InsightsPage() {
  return <div className="interior-page"><div className="section-wrap interior-hero"><p className="eyebrow"><span className="eyebrow-line" /> Ideas in public</p><h1>Questions worth<br /><em>exploring.</em></h1><p>Selected talks and writing on technology, work and the decisions that shape organisations.</p></div><div className="section-wrap feature-list">{ideas.map((item,index) => <a href={item.url} target="_blank" rel="noopener noreferrer" key={item.url}><span>0{index+1}</span><div><small>{item.label}</small><h2>{item.title}</h2><p>{item.summary}</p></div><ArrowUpRight size={22} /></a>)}</div></div>;
}
