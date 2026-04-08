import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, FileText, Mic, Stethoscope } from 'lucide-react';
import GenericHero from '@/components/GenericHero';
import CTABox from '@/components/CTABox';
import Footer from '@/components/home/Footer';

export default function ClinicalDocumentation() {
  const services = [
    {
      icon: Mic,
      title: 'Medical Transcription',
      description: 'Our experienced clinical documentation editors (CDEs) transcribe physician dictations into accurate, formatted medical records. From routine office visits to complex surgical reports, we handle all specialties with 99.5% accuracy and same-day turnaround.',
      features: ['Multi-specialty expertise', '99.5% accuracy', 'Same-day turnaround', 'AI-enhanced workflows']
    },
    {
      icon: Stethoscope,
      title: 'Medical Scribing',
      description: 'Dedicated scribes document the clinical encounter in real time, allowing physicians to focus on patient care. Our scribing team is trained across specialties and integrated into your existing EHR workflow.',
      features: ['Real-time documentation', 'EHR integration', 'Physician-focused', 'Reduced burnout']
    }
  ];

  const workflowSteps = [
    {
      number: '01',
      title: 'Audio Received',
      description: 'Physician dictations are securely received via our HIPAA-compliant platform — supporting all audio formats, EHR integrations, and mobile dictation devices.'
    },
    {
      number: '02',
      title: 'AI-Enhanced Processing',
      description: 'Our AI engine performs initial speech-to-text conversion with medical vocabulary, generating a draft that is 85-90% accurate before human review begins.'
    },
    {
      number: '03',
      title: 'Expert Editing',
      description: 'Skilled CDEs review and perfect every transcript against the original audio — correcting terminology, formatting per client specifications, and applying our Book of Style standards.'
    },
    {
      number: '04',
      title: 'Quality Assurance',
      description: 'Senior QA auditors perform word-for-word verification against the audio, ensuring 99.5%+ accuracy before the document reaches the patient\'s permanent record.'
    }
  ];

  const specialties = [
    'Ophthalmology', 'Orthopedics', 'Pain Management', 'Gastroenterology',
    'Cardiology', 'Neurology', 'Dermatology', 'Internal Medicine',
    'Family Practice', 'Urology', 'ENT', 'Radiology',
    'Psychiatry', 'Podiatry', 'General Surgery', 'Pulmonology'
  ];

  const benefits = [
    'Reduce physician documentation burden',
    'Improve chart completion rates',
    'Maintain 99.5%+ accuracy standards',
    'Same-day turnaround on all reports',
    'Seamless EHR integration',
    'Scalable to any volume'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-200/40 to-indigo-300/20 blur-3xl" />
      </div>

      <div className="relative">
        <GenericHero 
          title={<>Clinical Documentation<span className="block text-[#2563eb]">You Can Trust</span></>}
          subtitle="Medical Transcription & Scribing"
          description="25+ years of clinical documentation expertise. Our team of skilled medical transcriptionists, scribes, and QA auditors delivers accurate, chart-ready medical records across 40+ specialties."
          primaryButtonText="Schedule a Consultation"
          secondaryButtonText="Talk With Our Team"
          isSmall={true}
        />

        {/* Two Service Cards */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.15 }}
                className="bg-white rounded-3xl p-8 border border-blue-100 shadow-lg shadow-blue-500/10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '24px' }} className="text-slate-900 mb-3">{service.title}</h3>
                <p style={{ fontWeight: 400, fontSize: '16px', lineHeight: '1.6' }} className="text-slate-600 mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((f) => (
                    <span key={f} style={{ fontWeight: 500, fontSize: '13px' }} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg">{f}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 style={{ fontWeight: 700, fontSize: '36px', lineHeight: '1.3' }} className="text-[#222733] mb-6">Our Documentation Workflow</h2>
              <p style={{ fontWeight: 400, fontSize: '16px', lineHeight: '1.6' }} className="text-gray-700 max-w-2xl mx-auto">
                A proven, four-step process that combines AI efficiency with human expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflowSteps.map((step, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
                  <div className="text-3xl font-bold text-[#2563eb] mb-3" style={{ fontWeight: 800 }}>{step.number}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '18px' }} className="text-[#222733] mb-2">{step.title}</h3>
                  <p style={{ fontWeight: 400, fontSize: '14px', lineHeight: '1.6' }} className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialties */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center mb-12">
            <h2 style={{ fontWeight: 700, fontSize: '36px', lineHeight: '1.3' }} className="text-[#222733] mb-6">40+ Specialties Covered</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {specialties.map((s) => (
              <span key={s} style={{ fontWeight: 500, fontSize: '14px' }} className="px-4 py-2 bg-white rounded-xl border border-gray-200 text-slate-700 hover:border-blue-300 hover:text-blue-700 transition-colors">
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 style={{ fontWeight: 700, fontSize: '36px', lineHeight: '1.3' }} className="text-[#222733] mb-6">Why Choose NuScript for Documentation</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-1" />
                  <p style={{ fontWeight: 500, fontSize: '16px' }} className="text-[#222733]">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <CTABox 
            heading="Ready to Improve Your Documentation?"
            description="Let's discuss how NuScript's clinical documentation services can reduce your documentation burden while maintaining the highest accuracy standards."
            primaryButtonText="Schedule a Consultation"
            secondaryButtonText="Talk With Our Team"
          />
        </section>
      </div>

      <Footer />
    </div>
  );
}
