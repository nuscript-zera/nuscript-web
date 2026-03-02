import React from 'react';
import GenericHero from '../components/GenericHero';
import PlatformCapabilities from '../components/platform/PlatformCapabilities';
import PlatformFeatures from '../components/platform/PlatformFeatures';
import PlatformOutcomes from '../components/platform/PlatformOutcomes';
import PlatformSection from '../components/home/PlatformSection';
import CTABox from '../components/CTABox';
import Footer from '../components/home/Footer';

export default function Platform() {
  return (
    <div className="overflow-hidden">
      <GenericHero 
        title={<>Clinical Documentation<span className="block text-[#6200EA]">Powered by GenAI</span></>}
        subtitle="The NuScriptAI Platform"
        description="NuScriptAI is a generative AI platform purpose-built for clinical work that handles dictation, transcription, scribing, and coding at scale—processing roughly 2,000 minutes of audio dictation per day for real providers in production."
        primaryButtonText="Schedule a Demo"
        secondaryButtonText="Talk With Our Team"
        isSmall={true}
      />
      <PlatformCapabilities />
      <PlatformSection />
      <PlatformFeatures />
      <PlatformOutcomes />
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <CTABox 
          heading="Ready to Experience NuScriptAI?"
          description="See how our platform can transform your clinical documentation, reduce provider charting burden, and accelerate your revenue cycle."
          primaryButtonText="Schedule a Demo"
          secondaryButtonText="Talk With Our Team"
        />
      </section>
      <Footer />
    </div>
  );
}