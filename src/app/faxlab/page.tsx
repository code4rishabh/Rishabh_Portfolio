import type { Metadata } from "next";
import { ArrowUpRight, Play } from "lucide-react";
import { links } from "@/lib/profile";

export const metadata: Metadata = {
  title: "FaxLab AI",
  description: "FaxLab AI is Rishabh Agarwal's AI consulting and education venture, focused on practical enterprise adoption and team learning.",
  alternates: { canonical: "/faxlab" },
};

export default function FaxlabPage() {
  return <div className="interior-page"><div className="section-wrap interior-hero"><p className="eyebrow"><span className="eyebrow-line" /> Founded by Rishabh Agarwal</p><h1>FaxLab<br /><em>AI.</em></h1><p>Helping organisations turn AI potential into useful capability.</p></div><div className="section-wrap single-story"><p>FaxLab AI works across AI strategy, enterprise adoption and practical learning. It helps leaders find valuable use cases, equips teams with relevant skills and develops workflows that fit real business needs.</p><p>Rishabh&apos;s background in supply chains, procurement and strategy informs the venture&apos;s approach to measurable, human reviewed adoption.</p><div className="story-links"><a className="text-link" href={links.faxlab} target="_blank" rel="noopener noreferrer">Explore faxlab.in <ArrowUpRight size={18} /></a><a className="text-link" href={links.faxlabYoutube} target="_blank" rel="noopener noreferrer"><Play size={16} /> Watch FaxLab AI</a></div></div></div>;
}
