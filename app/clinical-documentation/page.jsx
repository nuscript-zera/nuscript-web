import ServicePage from "@/components/ServicePage";
import { getService, SERVICES } from "@/lib/services";

export const metadata = {
  title: "Clinical Documentation — Medical Transcription & Scribing",
  description:
    "Accurate, chart-ready medical records across 40+ specialties. NuScript's medical transcriptionists, scribes, and QA auditors deliver 99.5% accuracy with same-day turnaround.",
  alternates: { canonical: "/clinical-documentation" },
};

export default function Page() {
  const service = getService("clinical-documentation");
  const others = SERVICES.filter((s) => s.slug !== "clinical-documentation").slice(0, 3);
  return <ServicePage service={service} others={others} />;
}
