import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Selected work by Rishabh Agarwal across FaxLab AI, Triveni Sangam Dialogues, books and public talks.",
  alternates: { canonical: "/achievements" },
};

const work = [
  {
    title: "Founded FaxLab AI",
    description: "An AI education and business automation initiative.",
    href: "https://faxlab.in/",
  },
  {
    title: "Created Triveni Sangam Dialogues",
    description: "A channel for conversations about Indian traditions and modern life.",
    href: "https://trivenisangamdialogues.in/",
  },
  {
    title: "Published books",
    description: "Writing about personal growth, relationships, AI and supply chains.",
    href: "/books",
  },
  {
    title: "Spoke on ethical AI at Jaipuria Institute of Management",
    description: "A public session on bias, transparency, accountability and human judgment.",
    href: "https://www.youtube.com/watch?v=cUBy2KbQJ_s",
  },
];

export default function AchievementsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32">
      <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Professional work</p>
      <h1 className="font-display font-bold mb-6">Selected Work</h1>
      <p className="text-lg text-on-surface-variant max-w-3xl mb-12">
        A concise record of projects, publishing and public conversations.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {work.map((item) => (
          <a key={item.title} href={item.href} className="block rounded-2xl bg-surface-container-low p-8 hover:bg-surface-container-high transition-colors">
            <h2 className="font-display font-bold text-2xl mb-3">{item.title}</h2>
            <p className="text-on-surface-variant mb-5">{item.description}</p>
            <span className="text-primary font-semibold">Explore ↗</span>
          </a>
        ))}
      </div>
    </div>
  );
}
