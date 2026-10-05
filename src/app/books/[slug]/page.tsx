import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { books } from "@/lib/profile";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return books.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const book = books.find((item) => item.slug === slug);
  if (!book) notFound();
  return {
    title: book.title,
    description: book.summary,
    alternates: { canonical: `/books/${book.slug}` },
    openGraph: {
      title: book.title,
      description: book.summary,
      url: `/books/${book.slug}`,
      ...(book.cover ? { images: [{ url: book.cover, alt: book.title }] } : {}),
    },
  };
}

export default async function BookPage({ params }: Props) {
  const { slug } = await params;
  const book = books.find((item) => item.slug === slug);
  if (!book) notFound();
  const url = `https://www.rishabhagarwal.in/books/${book.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Book",
    "@id": `${url}#book`,
    url,
    name: book.subtitle ? `${book.title}: ${book.subtitle}` : book.title,
    description: book.summary,
    author: [
      { "@type": "Person", "@id": "https://www.rishabhagarwal.in/#person", name: "Rishabh Agarwal" },
      ...(book.coauthor ? [{ "@type": "Person", name: book.coauthor }] : []),
    ],
    numberOfPages: book.pages,
    identifier: { "@type": "PropertyValue", propertyID: "ASIN", value: book.asin },
    ...(book.cover ? { image: `https://www.rishabhagarwal.in${book.cover}` } : {}),
    ...(book.publisher ? { publisher: { "@type": "Organization", name: book.publisher } } : {}),
    ...(book.publicationDate ? { datePublished: book.publicationDate } : {}),
    sameAs: [book.url, ...(book.goodreads ? [book.goodreads] : [])],
  };
  return <article className="interior-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <div className="section-wrap interior-hero">
      <Link className="text-link" href="/books">← All books</Link>
      <p className="eyebrow">{book.category}</p>
      <h1 className="book-detail-title">{book.title}</h1>
      {book.subtitle && <p>{book.subtitle}</p>}
      <p>By Rishabh Agarwal{book.coauthor ? ` and ${book.coauthor}` : ""}</p>
    </div>
    <div className="section-wrap full-book">
      <div className="full-book__cover">{book.cover ? <img src={book.cover} alt={`Cover of ${book.title}`} /> : <div className="book-type-art"><small>Rishabh Agarwal · Swati Agarwal</small><strong>From Gurutvākārṣaṇa<br />to Gravity</strong><span>Language · Heritage · Ideas</span></div>}</div>
      <div className="full-book__copy">
        <h2>About the book</h2><p>{book.summary}</p>
        <dl className="book-facts">
          {book.publisher && <><dt>Publisher</dt><dd>{book.publisher}</dd></>}
          {book.publicationDate && <><dt>Publication date</dt><dd>{new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(book.publicationDate))}</dd></>}
          <dt>Pages</dt><dd>{book.pages}</dd>
          <dt>Amazon ASIN</dt><dd>{book.asin}</dd>
        </dl>
        <p><a className="text-link" href={book.url} target="_blank" rel="noopener noreferrer">View on Amazon ↗</a></p>
        {book.goodreads && <p><a className="text-link" href={book.goodreads} target="_blank" rel="noopener noreferrer">View on Goodreads ↗</a></p>}
      </div>
    </div>
  </article>;
}
