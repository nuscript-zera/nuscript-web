import React from 'react';
import GenericHero from '../components/GenericHero';
import WorkflowSection from '../components/medical-transcription/WorkflowSection';
import EHRIntegration from '../components/medical-transcription/EHRIntegration';
import VoiceRecognitionEditing from '../components/medical-transcription/VoiceRecognitionEditing';
import KeyDifferentiators from '../components/medical-transcription/KeyDifferentiators';
import TrialCTA from '../components/medical-transcription/TrialCTA';
import CTABox from '../components/CTABox';
import Footer from '../components/home/Footer';

export default function MedicalTranscription() {
  return (
    <div className="overflow-hidden">
      <GenericHero 
        title={<>25 Years of Transcription Excellence<span className="block text-[#6200EA]">Meets Modern AI</span></>}
        subtitle="Medical Transcription"
        description="Combine decades of expertise with advanced technology for accurate, secure, and seamless clinical documentation. From audio dictation to EHR integration—we handle it all."
        primaryButtonText="Request Demo"
        secondaryButtonText="Talk With Our Team"
        isSmall={true}
      />
      <WorkflowSection />
      <EHRIntegration />
      <VoiceRecognitionEditing />
      <KeyDifferentiators />
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <CTABox 
          heading="Ready to Transform Your Documentation?"
          description="See how NuScript's medical transcription service can eliminate manual data entry, reduce errors, and deliver accurate charts within minutes of each visit."
          primaryButtonText="Request a Demo"
          secondaryButtonText="Talk With Our Team"
        />
      </section>
      <Footer />
    </div>
  );
}