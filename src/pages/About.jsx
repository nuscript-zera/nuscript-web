import React from 'react';
import GenericHero from '../components/GenericHero';
import WhoNuScriptIs from '../components/about/WhoNuScriptIs';
import WhatNuScriptDoes from '../components/about/WhatNuScriptDoes';

import ValuesInAction from '../components/about/ValuesInAction';
import LegacySection from '../components/home/LegacySection';
import CTABox from '../components/CTABox';
import Footer from '../components/home/Footer';

export default function About() {
  return (
    <div className="overflow-hidden">
      <GenericHero 
        subtitle="About NuScript"
        title={
          <>
            Built for the Front Lines of <span className="text-[#2563eb]">Healthcare Operations</span>
          </>
        }
        description="NuScript is a SOC 2 and HIPAA-certified, healthcare operations company with over 25 years of experience at the intersection of clinical documentation and revenue cycle management. By pairing deep HIM and RCM expertise with AI-powered tools like NuScriptAI, NuScript helps U.S. healthcare organizations improve documentation quality, reduce physician burnout, and strengthen financial performance."
        primaryButtonText="Schedule a Demo"
        secondaryButtonText="Talk With Our Team"
        isSmall={true}
      />
      <WhoNuScriptIs />
      <WhatNuScriptDoes />
      <ValuesInAction />
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <LegacySection />
      </section>
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <CTABox 
          heading="Join Healthcare Leaders Using NuScript"
          description="Experience smarter documentation, optimized coding, and accelerated revenue. Let's show you how NuScript transforms clinical operations."
          primaryButtonText="Schedule a Demo"
          secondaryButtonText="Talk With Our Team"
        />
      </section>
      <Footer />
    </div>
  );
}