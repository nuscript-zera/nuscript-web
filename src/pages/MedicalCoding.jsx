import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import GenericHero from '@/components/GenericHero';
import CTABox from '@/components/CTABox';
import Footer from '@/components/home/Footer';

export default function MedicalCoding() {
  const workflowSteps = [
    {
      number: '01',
      title: 'AI Analysis',
      description: 'NuScriptAI analyzes clinical documentation and generates initial ICD-10, CPT, and HCPCS code suggestions that reflect the diagnoses, procedures, and key clinical details in each encounter.'
    },
    {
      number: '02',
      title: 'Expert Review',
      description: 'Our certified medical coding specialists apply a human-in-the-loop layer, reviewing and perfecting these AI-generated codes to ensure accuracy, adherence to payer and specialty guidelines.'
    },
    {
      number: '03',
      title: 'Quality Assurance',
      description: 'Every billed service is verified to be fully supported in the chart, with documentation integrity enhanced by identifying gaps and prompting clarifications when needed.'
    }
  ];

  const benefits = [
    'Improved coding throughput and efficiency',
    'Enhanced documentation integrity',
    'Accurate, compliant codes',
    'Stronger payer alignment',
    'Reduced denials and rejections',
    'Faster revenue cycle closure'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-violet-50/30 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-violet-200/40 to-purple-300/20 blur-3xl"
        />
      </div>

      <div className="relative">
        <GenericHero 
          title={<>Accurate Coding,<span className="block text-[#6200EA]">Faster Revenue</span></>}
          subtitle="Medical Coding Services"
          description="NuScript's medical coding services combine the speed of NuScriptAI with the judgment of experienced coding specialists to deliver accurate, compliant codes and stronger documentation integrity."
          primaryButtonText="Schedule a Demo"
          secondaryButtonText="Talk With Our Team"
          isSmall={true}
        />

        {/* How It Works Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 style={{ fontWeight: 700, fontSize: '36px', lineHeight: '1.3' }} className="text-[#222733] mb-6">
              How NuScriptAI + Coders Work Together
            </h2>
            <p style={{ fontWeight: 400, fontSize: '16px', lineHeight: '1.6' }} className="text-gray-700 max-w-2xl mx-auto">
              Our hybrid approach combines artificial intelligence with human expertise for optimal results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workflowSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-violet-200 hover:shadow-lg transition-all"
              >
                <div className="text-4xl font-bold text-[#6200EA] mb-4" style={{ fontWeight: 800 }}>
                  {step.number}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '20px' }} className="text-[#222733] mb-3">
                  {step.title}
                </h3>
                <p style={{ fontWeight: 400, fontSize: '16px', lineHeight: '1.6' }} className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gradient-to-br from-violet-50 to-blue-50 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 style={{ fontWeight: 700, fontSize: '36px', lineHeight: '1.3' }} className="text-[#222733] mb-6">
                Benefits of NuScript's Medical Coding Services
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#6200EA] flex-shrink-0 mt-1" />
                  <p style={{ fontWeight: 500, fontSize: '16px' }} className="text-[#222733]">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <CTABox 
            heading="Ready to Improve Your Coding Accuracy?"
            description="See how NuScript's AI-powered coding services can accelerate your revenue cycle while maintaining the highest standards of compliance and documentation integrity."
            primaryButtonText="Schedule a Demo"
            secondaryButtonText="Talk With Our Team"
          />
        </section>
      </div>

      <Footer />
    </div>
  );
}