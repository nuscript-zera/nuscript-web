import MedicoLegalContent from "@/components/pages/MedicoLegalContent";

export const metadata = {
  title: "Medico-Legal Transcription",
  description:
    "Verbatim transcription for IMEs, depositions, and legal proceedings. NuScript delivers word-perfect accuracy backed by a comprehensive legal knowledge base and full chain of custody.",
  alternates: { canonical: "/medico-legal-transcription" },
};

export default function Page() {
  return <MedicoLegalContent />;
}
