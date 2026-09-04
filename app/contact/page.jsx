import ContactContent from "@/components/pages/ContactContent";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with NuScript. Schedule a demo or talk with our team about clinical documentation, medical coding, and revenue cycle management.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactContent />;
}
