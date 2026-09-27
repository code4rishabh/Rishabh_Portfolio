import Link from "next/link";
import type { Metadata } from "next";
import { ArrowDownRight, ArrowUpRight, BookOpen, Play } from "lucide-react";
import { appearances, books, links } from "@/lib/profile";

export const metadata: Metadata = {
  title: { absolute: "Rishabh Agarwal | Founder, Author & Speaker" },
  description: "Rishabh Agarwal founded FaxLab AI and Triveni Sangam Dialogues. Explore his books, talks and work across AI, supply chains and Indian knowledge traditions.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="editorial-hero" id="top">
        <div className="editorial-hero__inner">
          <div className="editorial-hero__copy">
            <p className="eyebrow eyebrow--light"><span className="eyebrow-line" /> Founder · Author · Speaker</p>
            <h1>Rishabh<br /><em>Agarwal.</em></h1>
            <p className="editorial-hero__lead">Building practical AI. Exploring India&apos;s living wisdom. Writing about the choices that shape our lives.</p>
            <p className="editorial-hero__detail">Founder of FaxLab AI and Triveni Sangam Dialogues, with two decades of experience in supply chains and strategy.</p>
            <div className="hero-actions">
              <Link className="button button--light" href="#work">Explore my work <ArrowUpRight size={18} /></Link>
              <Link className="button button--outline-light" href="/books">View the books <BookOpen size={18} /></Link>
            </div>
            <div className="hero-socials" aria-label="Profile links">
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
              <a href={links.amazonAuthor} target="_blank" rel="noopener noreferrer">Amazon Author ↗</a>
              <a href={links.goodreads} target="_blank" rel="noopener noreferrer">Goodreads ↗</a>
            </div>
          </div>
          <div className="editorial-hero__portrait">
            <img src="/images/profile/Rishabh_portrait.png" alt="Portrait of Rishabh Agarwal" />
            <div className="portrait-caption"><span>01 / 03</span><span>Industry · Ideas · Stories</span></div>
          </div>
        </div>
        <a className="scroll-cue" href="#work">Discover <ArrowDownRight size={16} /></a>
      </section>

      <section className="section-wrap intro-section" id="work">
        <div className="section-heading">
          <p className="eyebrow"><span className="eyebrow-line" /> The work</p>
          <h2>Two ventures.<br /><em>One curiosity.</em></h2>
          <p>My work moves between applied technology and cultural conversation. Each venture has its own purpose and home.</p>
        </div>
        <div className="venture-grid">
          <article className="venture-card venture-card--ai">
            <div className="venture-number">01 / TECHNOLOGY</div>
            <h3>FaxLab AI</h3>
            <p>AI consulting, enterprise adoption and hands-on learning that help teams put new tools to work with judgment.</p>
            <div className="venture-links">
              <a href={links.faxlab} target="_blank" rel="noopener noreferrer">Explore FaxLab AI <ArrowUpRight size={17} /></a>
              <a href={links.faxlabYoutube} target="_blank" rel="noopener noreferrer"><Play size={15} /> Watch @faxlabai</a>
            </div>
          </article>
          <article className="venture-card venture-card--culture">
            <div className="venture-number">02 / CULTURE</div>
            <h3>Triveni Sangam<br />Dialogues</h3>
            <p>Conversations on Sanatan wisdom, Indian knowledge traditions and the questions they raise for modern life.</p>
            <div className="venture-links">
              <a href={links.triveni} target="_blank" rel="noopener noreferrer">Explore the platform <ArrowUpRight size={17} /></a>
              <a href={links.triveniYoutube} target="_blank" rel="noopener noreferrer"><Play size={15} /> Watch the channel</a>
            </div>
          </article>
        </div>
      </section>

      <section className="books-band" id="books">
        <div className="section-wrap">
          <div className="section-heading section-heading--row">
            <div><p className="eyebrow"><span className="eyebrow-line" /> Published work</p><h2>Books for the<br /><em>curious mind.</em></h2></div>
            <div><p>Stories and ideas across personal growth, relationships, AI in supply chains and Indian linguistic heritage.</p><Link className="text-link" href="/books">Explore the books <ArrowUpRight size={17} /></Link></div>
          </div>
          <div className="book-strip">
            {books.map((book, index) => (
              <a className="book-tile" href={book.url} target="_blank" rel="noopener noreferrer" key={book.title}>
                <div className="book-tile__art"><span className="book-index">0{index + 1}</span>{book.cover ? <img src={book.cover} alt={`Cover of ${book.title}`} /> : <div className="book-type-art" aria-hidden="true"><small>Rishabh Agarwal · Swati Agarwal</small><strong>From Gurutvākārṣaṇa<br />to Gravity</strong><span>Language · Heritage · Ideas</span></div>}</div>
                <div className="book-tile__meta"><span>{book.category}</span><ArrowUpRight size={19} /></div>
                <h3>{book.title}</h3>
              </a>
            ))}
          </div>
          <div className="author-links"><a href={links.amazonAuthor} target="_blank" rel="noopener noreferrer">Amazon author page ↗</a><a href={links.goodreads} target="_blank" rel="noopener noreferrer">Goodreads author page ↗</a></div>
        </div>
      </section>

      <section className="section-wrap story-section" id="about">
        <div className="story-kicker"><p className="eyebrow"><span className="eyebrow-line" /> About Rishabh</p><span>VADODARA, INDIA</span></div>
        <div className="story-grid">
          <h2>Across disciplines.<br /><em>Grounded in practice.</em></h2>
          <div className="story-copy">
            <p>Rishabh Agarwal is an entrepreneur, author and speaker whose work connects two decades in supply chain leadership with practical AI education and Indian knowledge traditions.</p>
            <p>At FaxLab AI, he works with organisations on AI strategy and team learning. Through Triveni Sangam Dialogues, he hosts conversations that bring research and reflection to the stories of Bharat. His books move between these professional and personal worlds.</p>
            <div className="story-links"><Link className="text-link" href="/about">Read the biography <ArrowUpRight size={17} /></Link><a className="text-link" href={links.linkedin} target="_blank" rel="noopener noreferrer">Connect on LinkedIn <ArrowUpRight size={17} /></a></div>
          </div>
        </div>
      </section>

      <section className="appearances-band" id="conversations"><div className="section-wrap">
        <div className="section-heading section-heading--row"><div><p className="eyebrow"><span className="eyebrow-line" /> In conversation</p><h2>Ideas shared<br /><em>in public.</em></h2></div><p>Selected talks and discussions on AI, work and culture.</p></div>
        <div className="appearance-list">{appearances.map((item, index) => <a href={item.url} target="_blank" rel="noopener noreferrer" key={item.url}><span>0{index + 1}</span><div><small>{item.label}</small><h3>{item.title}</h3></div><ArrowUpRight size={21} /></a>)}</div>
        <Link className="text-link" href="/appearances">All appearances <ArrowUpRight size={17} /></Link>
      </div></section>

      <section className="contact-band"><div className="section-wrap contact-band__inner"><div><p className="eyebrow eyebrow--light"><span className="eyebrow-line" /> Get in touch</p><h2>Let&apos;s begin a<br /><em>conversation.</em></h2></div><a className="button button--light" href={links.email}>Write to Rishabh <ArrowUpRight size={19} /></a></div></section>
    </>
  );
}
