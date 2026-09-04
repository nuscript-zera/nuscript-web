import FloatingNav from "@/components/FloatingNav";
import Hero from "@/components/Hero";
import ServicesGallery from "@/components/ServicesGallery";
import SpecialtiesMarquee from "@/components/SpecialtiesMarquee";
import ScienceOfCare from "@/components/ScienceOfCare";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  description:
    "25+ years of healthcare documentation expertise — medical transcription, scribing, coding, and revenue cycle management for U.S. healthcare providers.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main>
      <FloatingNav />
      <Hero />
      <ServicesGallery />
      <SpecialtiesMarquee />
      <ScienceOfCare />
      <CtaBand
        title="Ready to transform your healthcare operations?"
        subtitle="Join providers using NuScript for accurate documentation, compliant coding, and accelerated revenue cycle."
      />
    </main>
  );
}
