import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { links } from "@/lib/profile";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/#work" },
  { label: "Books", href: "/books" },
  { label: "Speaking & Media", href: "/speaking-media" },
];

export function Header() {
  return <header className="site-header">
    <nav className="site-header__inner" aria-label="Main navigation">
      <Link className="site-header__brand" href="/">RISHABH<span>AGARWAL</span><i>.</i></Link>
      <div className="site-header__links">{navigation.map(item => <Link key={item.label} href={item.href}>{item.label}</Link>)}</div>
      <a className="site-header__contact" href={links.email}>Get in touch <ArrowUpRight size={16} /></a>
      <details className="site-header__mobile"><summary>Menu</summary><div>{navigation.map(item => <Link key={item.label} href={item.href}>{item.label}</Link>)}<a href={links.email}>Get in touch ↗</a></div></details>
    </nav>
  </header>;
}
