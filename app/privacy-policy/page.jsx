import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How NuScript Data Solutions Private Limited collects, uses, and protects the personal information you share through our website.",
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  {
    title: "Collection of Information",
    subsections: [
      {
        subtitle: "Information you provide to us",
        content:
          "We collect personal information that you voluntarily provide through our website, including:\n\n• Inquiry forms: When you submit an inquiry, we may collect your name, email address, organization, and any other information you choose to provide in the form or message.\n\n• Job applications: If you apply for a position, we collect your name, contact details (such as email address and phone number), and application materials (such as your resume, cover letter, and any additional information you submit as part of the hiring process).",
      },
      {
        subtitle: "Information we collect automatically",
        content:
          "At this time, our website does not intentionally use cookies or similar tracking technologies to collect personal information or track user behavior. We may receive basic technical information automatically transmitted by your browser (such as IP address and browser type), but we do not use this information to build user profiles or for marketing purposes.",
      },
      {
        subtitle: "Information we collect from other sources",
        content:
          "We do not obtain personal information about you from third‑party data brokers or similar external sources. All personal information we process is provided directly by you through our website forms, email, or job applications.",
      },
    ],
  },
  {
    title: "Use of Information",
    content:
      "We use the information we collect for the following purposes:\n\n• Inquiry responses: To respond to questions, requests, or messages submitted through our inquiry forms and to provide the information or services you requested.\n\n• Job applications: To review and process your application, assess your qualifications, and communicate with you about current or future employment opportunities.\n\n• Operational communication: To send administrative or operational communications, such as responses to inquiries, interview scheduling, or application‑related updates.\n\nWe do not use your personal information for unrelated marketing or advertising and do not send unsolicited promotional messages based on information collected through this website.",
  },
  {
    title: "Sharing of Information",
    content:
      "We do not sell or rent your personal information. We may share the information you provide only in the following limited situations:\n\n• Service providers: With trusted service providers who assist us in operating our website, managing email or job applications, or supporting our IT infrastructure. These providers are permitted to use your information only to perform services on our behalf and are bound by appropriate confidentiality and security obligations.\n\n• Legal and compliance: When required to comply with applicable laws, regulations, legal processes, or enforceable governmental requests, or to protect our rights, privacy, safety, or property.\n\n• With your consent: When you explicitly authorize us to share your information for a specific purpose.",
  },
  {
    title: "Security",
    content:
      "We take reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, disclosure, alteration, or destruction. As a company operating under SOC 2 and HIPAA‑aligned controls, we apply security measures appropriate to the sensitivity of the information we handle.\n\nHowever, no method of transmission over the internet or method of electronic storage is completely secure, and we cannot guarantee absolute security of your information.",
  },
  {
    title: "Your Choices and Rights",
    content:
      "You may request to review, update, or delete personal information you have submitted to us by contacting us at hello@nuscript.net. We may need to retain certain information where required by law, for legitimate business purposes, or to complete ongoing transactions.\n\nBecause we do not use tracking cookies or behavioral advertising tools on this site at this time, there are no cookie preferences you need to manage in connection with our website.",
  },
  {
    title: "Changes to This Policy",
    content:
      'We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, or legal requirements. Any updates will be posted on this page, and the "Effective Date" will indicate when the policy was last updated.',
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions or concerns about this Privacy Policy, or if you would like to access, correct, or request deletion of your personal information, please contact us at:\n\nNuScript Data Solutions Private Limited\nEmail: hello@nuscript.net",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      effective="Effective April 2, 2023 · Updated January 18, 2026"
      intro='At NuScript Data Solutions Private Limited ("NuScript", "we", "us", or "our"), we value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and protect information when you interact with our website and related services as an India‑based, SOC 2 and HIPAA‑certified healthcare operations partner.'
      sections={sections}
    />
  );
}
