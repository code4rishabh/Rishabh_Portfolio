import React from "react";
import { FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Rishabh Agarwal's official website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 px-8 max-w-4xl mx-auto min-h-screen">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
          <FileText className="w-7 h-7" />
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-on-surface">Terms of Service</h1>
          <p className="text-on-surface-variant mt-2 font-medium">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        </div>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-secondary hover:prose-a:text-secondary-container text-on-surface-variant">
        <p className="lead text-xl mb-8">
          Welcome to Rishabh Agarwal's official portfolio and digital presence. By accessing or using this website, you agree to be bound by these Terms of Service.
        </p>

        <h2 className="text-2xl mt-12 mb-4 text-on-surface">1. Acceptance of Terms</h2>
        <p>
          By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
        </p>

        <h2 className="text-2xl mt-12 mb-4 text-on-surface">2. Intellectual Property Rights</h2>
        <p>
          All content, including texts, insights, essays, books metadata, images, and brand assets (including Faxlab AI and other intellectual properties) are the exclusive property of Rishabh Agarwal and its licensors. Unauthorized use, reproduction, or distribution is strictly prohibited.
        </p>

        <h2 className="text-2xl mt-12 mb-4 text-on-surface">3. Use of Content</h2>
        <p>
          You may view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms of service. You must not:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Republish material from this website without proper attribution.</li>
          <li>Sell, rent, or sub-license material from the website.</li>
          <li>Reproduce, duplicate, copy, or otherwise exploit material on this website for a commercial purpose.</li>
        </ul>

        <h2 className="text-2xl mt-12 mb-4 text-on-surface">4. Disclaimer of Warranties</h2>
        <p>
          The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, this company excludes all representations and warranties relating to this website and its contents, including in relation to any inaccuracies or omissions.
        </p>

        <h2 className="text-2xl mt-12 mb-4 text-on-surface">5. Modifications</h2>
        <p>
          Rishabh Agarwal reserves the right to revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
        </p>

        <h2 className="text-2xl mt-12 mb-4 text-on-surface">6. Contact Information</h2>
        <p>
          If you have any queries regarding any of our terms, please contact us at <strong>rishabhbenz@gmail.com</strong>.
        </p>
      </div>
    </div>
  );
}
