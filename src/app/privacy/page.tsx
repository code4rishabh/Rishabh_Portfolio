import React from "react";
import { Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Rishabh Agarwal's official website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 px-8 max-w-4xl mx-auto min-h-screen">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
          <Shield className="w-7 h-7" />
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-on-surface">Privacy Policy</h1>
          <p className="text-on-surface-variant mt-2 font-medium">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        </div>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary-container text-on-surface-variant">
        <p className="lead text-xl mb-8">
          This Privacy Policy describes how your personal information is collected, used, and shared when you visit or interact with Rishabh Agarwal's official website and services.
        </p>

        <h2 className="text-2xl mt-12 mb-4 text-on-surface">1. Information We Collect</h2>
        <p>
          We believe in data minimization and respect your privacy. When you visit the site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
        </p>
        <p>
          Additionally, if you use our contact forms or schedule a session (e.g., for Faxlab AI), we collect the information you provide, such as your name, email address, and mobile number.
        </p>

        <h2 className="text-2xl mt-12 mb-4 text-on-surface">2. How We Use Your Information</h2>
        <p>
          We use the information that we collect generally to fulfill any requests placed through the Site (including scheduling demos or replying to intellectual inquiries). Additionally, we use this information to:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Communicate with you regarding our services, books, and insights.</li>
          <li>Screen for potential risk or fraud.</li>
          <li>Improve and optimize our Site (for example, by generating analytics about how visitors browse and interact with the Site).</li>
        </ul>

        <h2 className="text-2xl mt-12 mb-4 text-on-surface">3. Sharing Your Personal Information</h2>
        <p>
          We do not sell, rent, or trade your personal information to third parties. We may share your Personal Information only to comply with applicable laws and regulations, to respond to a subpoena, search warrant, or other lawful request for information we receive, or to otherwise protect our rights.
        </p>

        <h2 className="text-2xl mt-12 mb-4 text-on-surface">4. Security</h2>
        <p>
          To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.
        </p>

        <h2 className="text-2xl mt-12 mb-4 text-on-surface">5. Contact Us</h2>
        <p>
          For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <strong>rishabhbenz@gmail.com</strong>.
        </p>
      </div>
    </div>
  );
}
