import ServicePage from "@/components/ServicePage";
import { getService, SERVICES } from "@/lib/services";

export const metadata = {
  title: "Medical Coding Services",
  description:
    "AI-enhanced workflows and certified coding specialists deliver accurate, compliant ICD-10, CPT, and HCPCS codes — reducing denials and accelerating your revenue cycle.",
  alternates: { canonical: "/medical-coding" },
};

export default function Page() {
  const service = getService("medical-coding");
  const others = SERVICES.filter((s) => s.slug !== "medical-coding").slice(0, 3);
  return <ServicePage service={service} others={others} />;
}
