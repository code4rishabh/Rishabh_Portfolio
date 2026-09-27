import type { Metadata } from "next";
import { links } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for Rishabh Agarwal's personal website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <div className="interior-page"><div className="section-wrap interior-hero"><p className="eyebrow"><span className="eyebrow-line" /> Site information</p><h1>Privacy.</h1><p>How this personal website handles the information you choose to share.</p></div><div className="section-wrap single-story legal-copy">
    <h2>Contact</h2><p>When you email Rishabh or contact him through WhatsApp, the information you send is used to respond to your message. Email and WhatsApp are provided by their respective services and have their own privacy practices.</p>
    <h2>External websites</h2><p>This website links to FaxLab AI, Triveni Sangam Dialogues, YouTube, Amazon, Goodreads and LinkedIn. Their privacy practices apply when you visit those sites.</p>
    <h2>Technical information</h2><p>The hosting provider may process basic technical information needed to deliver the website, such as your IP address and browser request. This site does not offer a contact form or ask you to create an account.</p>
    <h2>Questions</h2><p>For privacy questions, <a href={links.email}>email Rishabh</a>.</p>
  </div></div>;
}
