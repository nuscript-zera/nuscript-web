import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Scale, Shield, FileText } from 'lucide-react';
import GenericHero from '@/components/GenericHero';
import CTABox from '@/components/CTABox';
import Footer from '@/components/home/Footer';

export default function MedicoLegalTranscription() {
  const workflowSteps = [
    {
      number: '01',
      title: 'Secure Audio Receipt',
      description: 'Dictations from independent medical examinations, depositions, and legal proceedings are received through our HIPAA-compliant, encrypted platform with full chain-of-custody tracking.'
    },
    {
      number: '02',
      title: 'Verbatim Transcription',
      description: 'Experienced medico-legal transcriptionists transcribe every word exactly as dictated — no paraphrasing, no summarizing, no rearranging. Legal proceedings depend on exact wording.'
    },
    {
      number: '03',
      title: 'Legal QA Review',
      description: 'Senior QA auditors with medico-legal expertise perform word-for-word verification, validating attorney names, case citations, legal terminology, and medical findings against our legal knowledge base.'
    }
  ];

  const documentTypes = [
    'Independent Medical Examinations (IME)',
    'Record Reviews & Addendums',
    'Deposition Transcripts',
    'Workers\' Compensation Reports',
    'Personal Injury Reports',
    'Disability Evaluations',
    'Expert Witness Reports',
    'Narrative Medical Reports'
  ];

  const benefits = [
    { icon: Scale, title: 'Word-Perfect Accuracy', description: 'Every word matters in legal proceedings. Our verbatim transcription ensures the record is exact and defensible.' },
    { icon: Shield, title: 'Legal Knowledge Base', description: 'Our proprietary database of attorney names, judges, carriers, case citations, and legal terminology ensures correct spelling and formatting.' },
    { icon: FileText, title: 'Chain of Custody', description: 'Full audit trail from audio receipt to final delivery. HIPAA-compliant handling with secure, encrypted transmission at every step.' },
    { icon: CheckCircle2, title: 'Rapid Turnaround', description: 'Same-day and next-day turnaround available for urgent legal matters, without sacrificing accuracy.' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-teal-50/20 to-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-teal-200/40 to-teal-300/20 blur-3xl" />
      </div>

      <div className="relative">
        <GenericHero 
          title={<>Medico-Legal Transcription<span className="block text-[#0D9488]">Where Every Word Matters</span></>}
          subtitle="Medico-Legal Services"
          description="Specialized verbatim transcription for medico-legal cases, independent medical examinations, and legal proceedings. Our experienced team delivers word-perfect accuracy backed by a comprehensive legal knowledge base."
          primaryButtonText="Schedule a Consultation"
          secondaryButtonText="Talk With Our Team"
          isSmall={true}
        />

        {/* How It Works */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 style={{ fontWeight: 700, fontSize: '36px', lineHeight: '1.3' }} className="text-[#222733] mb-6">Our Medico-Legal Workflow</h2>
            <p style={{ fontWeight: 400, fontSize: '16px', lineHeight: '1.6' }} className="text-gray-700 max-w-2xl mx-auto">
              A rigorous process designed for the exacting standards of legal documentation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workflowSteps.map((step, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all">
                <div className="text-4xl font-bold text-[#0D9488] mb-4" style={{ fontWeight: 800 }}>{step.number}</div>
                <h3 style={{ fontWeight: 700, fontSize: '20px' }} className="text-[#222733] mb-3">{step.title}</h3>
                <p style={{ fontWeight: 400, fontSize: '16px', lineHeight: '1.6' }} className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Document Types */}
        <section className="bg-gradient-to-br from-teal-50 to-teal-50 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 style={{ fontWeight: 700, fontSize: '36px', lineHeight: '1.3' }} className="text-[#222733] mb-6">Document Types We Handle</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {documentTypes.map((doc, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-[#0D9488] flex-shrink-0" />
                  <p style={{ fontWeight: 500, fontSize: '14px' }} className="text-[#222733]">{doc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 style={{ fontWeight: 700, fontSize: '36px', lineHeight: '1.3' }} className="text-[#222733] mb-6">Why Choose NuScript for Medico-Legal</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-100 to-teal-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#0D9488]" />
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: '18px' }} className="text-[#222733] mb-2">{benefit.title}</h3>
                  <p style={{ fontWeight: 400, fontSize: '14px', lineHeight: '1.6' }} className="text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <CTABox 
            heading="Need Medico-Legal Transcription?"
            description="Our specialized team is ready to handle your medico-legal documentation needs with the accuracy and confidentiality your cases demand."
            primaryButtonText="Schedule a Consultation"
            secondaryButtonText="Talk With Our Team"
          />
        </section>
      </div>

      <Footer />
    </div>
  );
}
