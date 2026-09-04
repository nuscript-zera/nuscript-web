import ServicePage from "@/components/ServicePage";
import { getService, SERVICES } from "@/lib/services";

export const metadata = {
  title: "Medico-Legal Transcription",
  description:
    "Verbatim transcription for IMEs, depositions, and legal proceedings. NuScript delivers word-perfect accuracy backed by a comprehensive legal knowledge base and full chain of custody.",
  alternates: { canonical: "/medico-legal-transcription" },
};

export default function Page() {
  const service = getService("medico-legal-transcription");
  const others = SERVICES.filter((s) => s.slug !== "medico-legal-transcription").slice(0, 3);
  return <ServicePage service={service} others={others} />;
}
