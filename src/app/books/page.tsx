import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { books, links } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Books",
  description: "Four books by Rishabh Agarwal on personal growth, relationships, AI in supply chains and Indian linguistic heritage. Browse the titles and official author profiles.",
  alternates: { canonical: "/books" },
};

export default function BooksPage() {
  return <div className="interior-page">
    <div className="section-wrap interior-hero"><p className="eyebrow"><span className="eyebrow-line" /> Four published books</p><h1>Books &amp;<br /><em>writing.</em></h1><p>From personal possibility and relationships to supply chains and Indian linguistic heritage.</p></div>
    <div className="section-wrap full-book-list">
      {books.map((book, index) => <article className="full-book" key={book.title}>
        <div className="full-book__cover"><span>0{index + 1}</span>{book.cover ? <img src={book.cover} alt={`Cover of ${book.title}`} /> : <div className="book-type-art" aria-hidden="true"><small>Rishabh Agarwal · Swati Agarwal</small><strong>From Gurutvākārṣaṇa<br />to Gravity</strong><span>Language · Heritage · Ideas</span></div>}</div>
        <div className="full-book__copy"><p className="eyebrow">{book.category}</p><h2><Link href={`/books/${book.slug}`}>{book.title}</Link></h2>{book.subtitle && <p>{book.subtitle}</p>}<p>{book.summary}</p><Link className="text-link" href={`/books/${book.slug}`}>About this book <ArrowUpRight size={18} /></Link><p><a className="text-link" href={book.url} target="_blank" rel="noopener noreferrer">View on Amazon <ArrowUpRight size={18} /></a></p></div>
      </article>)}
    </div>
    <div className="section-wrap book-profile-links"><h2>Follow the author</h2><a href={links.amazonAuthor} target="_blank" rel="noopener noreferrer">Amazon author page ↗</a><a href={links.goodreads} target="_blank" rel="noopener noreferrer">Goodreads author page ↗</a></div>
  </div>;
}
