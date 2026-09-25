import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ideas & Conversations",
  description:
    "Explore Rishabh Agarwal's public conversations about responsible AI, supply chains, work and storytelling.",
  alternates: { canonical: "/insights" },
};

const ideas = [
  {
    theme: "Responsible AI",
    title: "How to build an ethical AI culture",
    description: "Rishabh's Jaipuria Institute of Management session on bias, transparency, accountability and human judgment.",
    href: "https://jaipuriamba.edu.in/webinar-on-how-to-build-an-ethical-ai-culture-at-jaipuria-institute-of-management/",
  },
  {
    theme: "Work & leadership",
    title: "The 70-hour work week debate",
    description: "A conversation with Edu Attack about productivity and work-life balance.",
    href: "https://www.youtube.com/watch?v=Vm5ZOnygdIs",
  },
  {
    theme: "AI in operations",
    title: "Transforming supply chains with AI",
    description: "Explore Rishabh's book on AI in EPC procurement and logistics.",
    href: "https://www.amazon.in/dp/B0FR95FTH5",
  },
];

export default function InsightsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32">
      <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Ideas in public</p>
      <h1 className="font-display font-bold mb-6">Ideas &amp; Conversations</h1>
      <p className="text-lg text-on-surface-variant max-w-3xl mb-12">
        Selected talks and writing on AI, work and the decisions that shape organizations.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {ideas.map((idea) => (
          <a key={idea.href} href={idea.href} target="_blank" rel="noopener noreferrer" className="block rounded-2xl bg-surface-container-low p-7 hover:bg-surface-container-high transition-colors">
            <p className="text-sm font-semibold text-primary mb-3">{idea.theme}</p>
            <h2 className="font-display font-bold text-xl mb-3">{idea.title}</h2>
            <p className="text-on-surface-variant mb-5">{idea.description}</p>
            <span className="font-semibold text-primary">Explore ↗</span>
          </a>
        ))}
      </div>
    </div>
  );
}
