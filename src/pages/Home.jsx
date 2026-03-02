import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import PlatformSection from '@/components/home/PlatformSection';
import LegacySection from '@/components/home/LegacySection';
import CTABox from '@/components/CTABox';
import Footer from '@/components/home/Footer';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <PlatformSection />
      <LegacySection />
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <CTABox 
          heading="Ready to Transform Healthcare Operations?"
          description="Join healthcare leaders using NuScript to automate documentation, reduce burnout, and accelerate revenue cycle. Let's show you how."
          primaryButtonText="Schedule a Demo"
          secondaryButtonText="Talk With Our Team"
        />
      </section>
      <Footer />
    </div>
  );
}