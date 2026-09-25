import Link from "next/link";

const work = [
  {
    title: "FaxLab AI",
    description: "AI education and practical business automation.",
    href: "https://faxlab.in/",
    action: "Visit FaxLab AI",
  },
  {
    title: "Triveni Sangam Dialogues",
    description: "Conversations about Indian traditions, ideas and modern life.",
    href: "https://trivenisangamdialogues.in/",
    action: "Explore the channel",
  },
  {
    title: "Books & writing",
    description: "Books on personal growth, relationships and AI in supply chains.",
    href: "/books",
    action: "Explore the books",
  },
];

export default function Identity() {
  return (
    <section className="py-20 md:py-28 bg-surface-container-low" aria-labelledby="about-rishabh">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">About Rishabh</p>
        <h2 id="about-rishabh" className="font-display font-bold mb-6">Founder, author and creator</h2>
        <p className="text-lg text-on-surface-variant max-w-3xl leading-relaxed mb-10">
          Rishabh Agarwal works at the intersection of AI, supply chains and storytelling.
          He founded FaxLab AI and Triveni Sangam Dialogues, and writes books that explore
          technology and human experience.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {work.map((item) => (
            <Link key={item.title} href={item.href} className="block rounded-2xl bg-surface p-7 hover:shadow-lg transition-shadow">
              <h3 className="font-display font-bold text-xl mb-3">{item.title}</h3>
              <p className="text-on-surface-variant mb-5">{item.description}</p>
              <span className="font-semibold text-primary">{item.action} ↗</span>
            </Link>
          ))}
        </div>
        <Link href="/about" className="font-bold text-primary hover:underline">Read Rishabh&apos;s biography →</Link>
      </div>
    </section>
  );
}
