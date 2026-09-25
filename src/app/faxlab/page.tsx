import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FaxLab AI",
  description:
    "Learn about FaxLab AI, founded by Rishabh Agarwal, and its work in AI education and business automation.",
  alternates: { canonical: "/faxlab" },
};

export default function FaxlabPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-8 py-24 md:py-32">
      <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Founded by Rishabh Agarwal</p>
      <h1 className="font-display font-bold mb-6">FaxLab AI</h1>
      <p className="text-lg text-on-surface-variant leading-relaxed max-w-3xl mb-10">
        FaxLab AI focuses on practical AI education and business automation.
        Rishabh&apos;s background in supply chains and operations shapes its approach
        to helping organizations apply AI to real work.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <a href="https://faxlab.in/" target="_blank" rel="noopener noreferrer" className="block rounded-2xl bg-surface-container-low p-8 hover:bg-surface-container-high transition-colors">
          <h2 className="font-display font-bold text-2xl mb-3">Official FaxLab AI site</h2>
          <p className="text-on-surface-variant mb-5">Explore its programs, services and team.</p>
          <span className="font-semibold text-primary">Visit FaxLab AI ↗</span>
        </a>
        <a href="https://www.youtube.com/watch?v=LmKvZSqO9V8" target="_blank" rel="noopener noreferrer" className="block rounded-2xl bg-surface-container-low p-8 hover:bg-surface-container-high transition-colors">
          <h2 className="font-display font-bold text-2xl mb-3">AI Town Hall</h2>
          <p className="text-on-surface-variant mb-5">Watch a FaxLab AI town hall with Rishabh Agarwal.</p>
          <span className="font-semibold text-primary">Watch on YouTube ↗</span>
        </a>
      </div>
    </div>
  );
}
