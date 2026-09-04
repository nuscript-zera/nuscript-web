import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import PlatformSection from "@/components/home/PlatformSection";
import LegacySection from "@/components/home/LegacySection";
import CTABox from "@/components/CTABox";

export const metadata = {
  description:
    "25+ years of healthcare documentation expertise — medical transcription, scribing, coding, and revenue cycle management for U.S. healthcare providers.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <PlatformSection />
      <LegacySection />
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <CTABox
          heading="Ready to Transform Your Healthcare Operations?"
          description="Join healthcare providers using NuScript for accurate documentation, compliant coding, and accelerated revenue cycle. Let's show you how."
          primaryButtonText="Schedule a Consultation"
          secondaryButtonText="Talk With Our Team"
        />
      </section>
    </div>
  );
}
