import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Terms of Use",
  description:
    "The terms governing your use of the NuScript Data Solutions Private Limited website.",
  alternates: { canonical: "/terms-of-use" },
};

const sections = [
  {
    title: "Use of the Site",
    content:
      "The Site is provided for general informational and marketing purposes regarding NuScript's clinical documentation, medical coding, and revenue cycle management services. You agree to use the Site only for lawful purposes and in accordance with these Terms.\n\nYou agree not to:\n\n• Use the Site in any way that violates applicable law or regulation.\n\n• Attempt to gain unauthorized access to any part of the Site, our systems, or any associated networks.\n\n• Use any robot, scraper, or other automated means to access the Site for any purpose without our prior written consent.",
  },
  {
    title: "No Medical, Legal, or Financial Advice",
    content:
      "Content on this Site is for informational purposes only and does not constitute medical, legal, financial, or compliance advice.\n\nYou should not rely on any information on the Site as a substitute for professional judgment, and you remain solely responsible for decisions relating to patient care, coding, billing, compliance, and operations.",
  },
  {
    title: "Intellectual Property",
    content:
      'All content on the Site—including text, graphics, logos, icons, images, and design elements—is owned by or licensed to NuScript and is protected by applicable copyright, trademark, and other intellectual property laws.\n\nYou may view, download, or print limited portions of the Site for your own internal, non‑commercial use, provided you do not remove any proprietary notices. Any other use requires our prior written permission.\n\n"NuScript" and any associated logos or service names are trademarks or service marks of NuScript Data Solutions Private Limited or its affiliates.',
  },
  {
    title: "Privacy",
    content:
      "Your use of the Site is also subject to our Privacy Policy, which explains how we collect, use, and protect personal information submitted through the Site. By using the Site, you acknowledge that you have read and understand our Privacy Policy.",
  },
  {
    title: "Third‑Party Links",
    content:
      "The Site may contain links to third‑party websites or resources for your convenience. These links do not imply endorsement or control by NuScript, and we are not responsible for the content, security, or practices of any third‑party sites. You access such sites at your own risk.",
  },
  {
    title: "Disclaimers",
    content:
      'The Site and its content are provided on an "as‑is" and "as‑available" basis without warranties of any kind, express or implied, including but not limited to warranties of accuracy, completeness, merchantability, fitness for a particular purpose, or non‑infringement.\n\nNuScript does not warrant that the Site will be uninterrupted, error‑free, secure, or free from viruses or other harmful components.',
  },
  {
    title: "Limitation of Liability",
    content:
      "To the maximum extent permitted by applicable law, NuScript and its directors, officers, employees, and agents will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of, or inability to use, the Site or its content.\n\nOur total aggregate liability arising out of or relating to your use of the Site will not exceed the amount, if any, you paid to use the Site.",
  },
  {
    title: "Indemnification",
    content:
      "You agree to indemnify, defend, and hold harmless NuScript and its directors, officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or related to your use of the Site or any violation of these Terms.",
  },
  {
    title: "Governing Law and Jurisdiction",
    content:
      "These Terms and your use of the Site are governed by the laws of India, without regard to its conflict‑of‑laws principles. Any disputes arising out of or relating to these Terms or the Site shall be subject to the exclusive jurisdiction of the courts located in Coimbatore, Tamil Nadu, India.",
  },
  {
    title: "Contact Us",
    content:
      "If you have questions about these Terms of Use, please contact us at:\n\nNuScript Data Solutions Private Limited\nEmail: hello@nuscript.net",
  },
];

export default function TermsOfUsePage() {
  return (
    <LegalPage
      title="Terms of Use"
      effective="Effective January 18, 2026"
      intro='Welcome to the website of NuScript Data Solutions Private Limited ("NuScript", "we", "us", or "our"). By accessing or using this website (the "Site"), you agree to be bound by these Terms of Use. If you do not agree to these Terms, please do not use the Site.'
      sections={sections}
    />
  );
}
