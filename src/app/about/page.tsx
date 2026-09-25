import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biography",
  description:
    "Biography of Rishabh Agarwal, founder of FaxLab AI and Triveni Sangam Dialogues, author and speaker on AI and supply chains.",
  alternates: { canonical: "/about" },
};

const profiles = [
  { name: "LinkedIn profile", href: "https://www.linkedin.com/in/rishabhagarwaliimc/" },
  { name: "Goodreads author profile", href: "https://www.goodreads.com/author/show/57744925.Rishabh_Agarwal" },
  { name: "Amazon author profile", href: "https://www.amazon.in/stores/author/B0F4K2RZNV" },
  { name: "FaxLab AI", href: "https://faxlab.in/" },
  { name: "Triveni Sangam Dialogues", href: "https://trivenisangamdialogues.in/" },
  { name: "Jaipuria Institute webinar", href: "https://jaipuriamba.edu.in/webinar-on-how-to-build-an-ethical-ai-culture-at-jaipuria-institute-of-management/" },
];

export default function AboutPage() {
  return (
    <article className="max-w-5xl mx-auto px-6 md:px-8 py-24 md:py-32">
      <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Biography</p>
      <h1 className="font-display font-bold mb-8">Rishabh Agarwal</h1>
      <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start mb-16">
        <img
          src="/images/profile/Rishabh_portrait.png"
          alt="Rishabh Agarwal"
          className="w-full max-w-sm rounded-2xl shadow-lg"
        />
        <div className="space-y-5 text-lg text-on-surface-variant leading-relaxed">
          <p>
            Rishabh Agarwal is an Indian entrepreneur, author and creator whose work spans
            AI, supply chains and storytelling. He founded FaxLab AI, a platform focused
            on practical AI adoption, and Triveni Sangam Dialogues, a channel exploring
            Indian traditions and contemporary questions.
          </p>
          <p>
            His books include <cite>What If You Are a Superhero and You Don&apos;t Know!</cite>,
            <cite> My 50 Arranged Marriage Dates</cite> and <cite>Transforming Supply Chain with AI</cite>.
            His talks include a session on ethical AI hosted by Jaipuria Institute of Management Ghaziabad.
          </p>
          <p>
            His professional work draws on experience in procurement, logistics and supply chain
            transformation. He uses that background to discuss how organizations can apply AI responsibly.
          </p>
        </div>
      </div>
      <section className="mb-14" aria-labelledby="profile-links">
        <h2 id="profile-links" className="font-display font-bold text-3xl mb-5">Profiles and source links</h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          {profiles.map((profile) => (
            <li key={profile.href}>
              <a href={profile.href} target="_blank" rel="noopener noreferrer" className="block rounded-xl bg-surface-container-low p-4 text-primary font-semibold hover:underline">
                {profile.name} ↗
              </a>
            </li>
          ))}
        </ul>
      </section>
      <a href="/appearances" className="font-bold text-primary hover:underline">Watch videos and appearances →</a>
    </article>
  );
}
