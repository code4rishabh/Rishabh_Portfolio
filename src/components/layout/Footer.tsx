import Link from "next/link";
import { links } from "@/lib/profile";

export function Footer() {
  return <footer className="site-footer">
    <div className="section-wrap site-footer__main">
      <div><Link href="/" className="site-footer__brand">Rishabh Agarwal<span>.</span></Link><p>Founder of FaxLab AI and Triveni Sangam Dialogues.<br />Author and speaker based in India.</p></div>
      <div><h2>Explore</h2><Link href="/about">Biography</Link><Link href="/books">Books</Link><Link href="/appearances">Appearances</Link><Link href="/insights">Ideas</Link></div>
      <div><h2>Ventures</h2><a href={links.faxlab} target="_blank" rel="noopener noreferrer">FaxLab AI ↗</a><a href={links.triveni} target="_blank" rel="noopener noreferrer">Triveni Sangam Dialogues ↗</a><a href={links.faxlabYoutube} target="_blank" rel="noopener noreferrer">FaxLab AI on YouTube ↗</a><a href={links.triveniYoutube} target="_blank" rel="noopener noreferrer">Triveni on YouTube ↗</a></div>
      <div><h2>Connect</h2><a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href={links.amazonAuthor} target="_blank" rel="noopener noreferrer">Amazon author page ↗</a><a href={links.goodreads} target="_blank" rel="noopener noreferrer">Goodreads author page ↗</a><a href={links.email}>Email ↗</a></div>
    </div>
    <div className="section-wrap site-footer__bottom"><span>© {new Date().getFullYear()} Rishabh Agarwal</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div>
  </footer>;
}
