import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos & Appearances",
  description:
    "Selected talks and conversations featuring Rishabh Agarwal on ethical AI, work, books, and Triveni Sangam Dialogues.",
  alternates: { canonical: "/appearances" },
};

const appearances = [
  {
    title: "Ethical AI Explained: Bias, Transparency, Accountability & Human Judgment",
    source: "Jaipuria Institute of Management Ghaziabad",
    href: "https://www.youtube.com/watch?v=cUBy2KbQJ_s",
    description: "A session on building an ethical AI culture in organizations.",
  },
  {
    title: "Work-Life Balance: The TRAP of Narayana Murthy's 70-Hour Work Week?",
    source: "Edu Attack with Triveni Sangam Dialogues",
    href: "https://www.youtube.com/watch?v=Vm5ZOnygdIs",
    description: "A conversation about work, productivity, and the 70-hour work week debate.",
  },
  {
    title: "From Ujjain to Universe: Is Astrology a Cosmic Code?",
    source: "Triveni Sangam Dialogues",
    href: "https://www.youtube.com/watch?v=L1R797mgOiM",
    description: "Rishabh Agarwal in conversation with astrologer Rupika Datta.",
  },
  {
    title: "My 50 Arranged Marriage Dates: Stories of Love, Rejection, and Discovering Your Self",
    source: "Author conversation",
    href: "https://www.youtube.com/watch?v=fauEXnI3Acw",
    description: "A conversation about Rishabh's book and its themes.",
  },
  {
    title: "AI Town Hall FaxLab AI Aug 2 2026",
    source: "FaxLab AI",
    href: "https://www.youtube.com/watch?v=LmKvZSqO9V8",
    description: "A FaxLab AI town hall with Rishabh Agarwal.",
  },
];

export default function AppearancesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32">
      <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Conversations</p>
      <h1 className="font-display font-bold mb-6">Videos &amp; Appearances</h1>
      <p className="text-lg text-on-surface-variant max-w-3xl mb-12">
        Selected conversations on AI, work, books, and the questions explored on Triveni Sangam Dialogues.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {appearances.map((appearance) => (
          <a
            key={appearance.href}
            href={appearance.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl bg-surface-container-low p-7 hover:bg-surface-container-high transition-colors"
          >
            <p className="text-sm font-semibold text-primary mb-3">{appearance.source}</p>
            <h2 className="font-display font-bold text-xl mb-3">{appearance.title}</h2>
            <p className="text-on-surface-variant mb-4">{appearance.description}</p>
            <span className="font-semibold text-primary">Watch on YouTube ↗</span>
          </a>
        ))}
      </div>
    </div>
  );
}
