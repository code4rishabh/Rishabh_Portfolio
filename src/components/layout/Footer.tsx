import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";

// Modern & Classy Premium SVGs
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.338-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.338-2.617-6.78-6.98-6.98-1.28-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441c.795 0 1.439-.645 1.439-1.441s-.644-1.44-1.439-1.44z" />
  </svg>
);

const EmailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);


const socialLinks = [
  { icon: LinkedinIcon, href: "https://shorturl.at/hda0Q", label: "LinkedIn", hoverColor: "hover:text-[#0077b5]" },
  { icon: YoutubeIcon, href: "https://youtube.com/@trivenisangamdialogues?si=oNjirLtBRAujpySj", label: "YouTube", hoverColor: "hover:text-[#FF0000]" },
  { icon: InstagramIcon, href: "https://www.instagram.com/trivenisangamdialogues?igsh=MTRyZzQ4MHhia25paw==", label: "Instagram", hoverColor: "hover:text-[#E4405F]" },
  { icon: EmailIcon, href: "https://mail.google.com/mail/?view=cm&fs=1&to=rishabhbenz@gmail.com", label: "Email", hoverColor: "hover:text-[#EA4335]" },
];

const footerLinks = [
  { name: "Faxlab AI", href: "https://www.faxlab.in/" },
  { name: "Insights & Essays", href: "#insights" },
  { name: "Books", href: "https://amzn.in/d/04YPt5mw" },
  { name: "About", href: "#about" },
  { name: "Privacy Policy", href: "/privacy" },
];

export const Footer = () => {
  return (
    <footer className="bg-surface-container-low border-none mt-auto">
      {/* Design System Note: Level 1 (Sections) surface-container-low used here */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-bold font-display tracking-tight text-on-surface">
                Rishabh Agrawal
              </span>
            </Link>
            <p className="text-on-surface-variant text-base max-w-sm leading-relaxed">
              Bridging the gap between the precision of a tech founder and the narrative authority of an author.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className={`w-12 h-12 rounded-full bg-surface border-none flex items-center justify-center text-on-surface transition-all duration-300 shadow-sm hover:shadow-md hover:bg-surface-variant hover:scale-110 ${social.hoverColor}`}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-6 h-6" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-on-surface font-display font-semibold uppercase tracking-wider text-sm">Navigation</h3>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-base text-on-surface-variant hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-on-surface font-display font-semibold uppercase tracking-wider text-sm">Let&apos;s Connect</h3>
            <div className="space-y-4">
              <p className="text-base text-on-surface-variant">
                Available for intellectual inquiries and professional collaborations.
              </p>
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rishabhbenz@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary text-on-primary rounded-md text-sm font-medium shadow-none hover:bg-gradient-to-br hover:from-primary hover:to-primary-container transition-all active:scale-95"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>

        {/* Ghost Border applied here as a subtle fallback (outline-variant at 20%) */}
        <div className="pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-on-surface-variant">
          <p>© {new Date().getFullYear()} Rishabh Agrawal. All rights reserved.</p>
          <div className="flex gap-6">
            <span>The Intellectual Architect</span>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
