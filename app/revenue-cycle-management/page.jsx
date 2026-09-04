import ServicePage from "@/components/ServicePage";
import { getService, SERVICES } from "@/lib/services";

export const metadata = {
  title: "Revenue Cycle Management",
  description:
    "End-to-end RCM from charge capture to AR follow-up. NuScript's expert teams and intelligent workflows maximize collections, reduce denials, and accelerate cash flow.",
  alternates: { canonical: "/revenue-cycle-management" },
};

export default function Page() {
  const service = getService("revenue-cycle-management");
  const others = SERVICES.filter((s) => s.slug !== "revenue-cycle-management").slice(0, 3);
  return <ServicePage service={service} others={others} />;
}
