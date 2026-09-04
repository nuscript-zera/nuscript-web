import MedicalCodingContent from "@/components/pages/MedicalCodingContent";

export const metadata = {
  title: "Medical Coding Services",
  description:
    "AI-enhanced workflows and certified coding specialists deliver accurate, compliant ICD-10, CPT, and HCPCS codes — reducing denials and accelerating your revenue cycle.",
  alternates: { canonical: "/medical-coding" },
};

export default function Page() {
  return <MedicalCodingContent />;
}
