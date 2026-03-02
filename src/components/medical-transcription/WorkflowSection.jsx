import React from 'react';
import { motion } from 'framer-motion';
import { Upload, ArrowRight, CheckCircle2, FileText } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Dictate & Submit',
    description: 'Dictate and submit reports via secure cloud portal, toll-free number, or hand-held recorder from any device.',
    icon: Upload
  },
  {
    number: '02',
    title: 'Transfer & Transcribe',
    description: 'Dictations automatically transfer with high-level encryption to our experienced medical transcriptionists.',
    icon: ArrowRight
  },
  {
    number: '03',
    title: 'Review & Audit',
    description: '100% of content reviewed by quality assurance team and auditors before delivery to ensure accuracy.',
    icon: CheckCircle2
  },
  {
    number: '04',
    title: 'Return & Store',
    description: 'Access files in real-time, print, store at your convenience, or have reports delivered directly to EHR/EMR.',
    icon: FileText
  }
];

export default function WorkflowSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span style={{ fontWeight: 500, fontSize: '14px' }} className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-[#6200EA] mb-6">
            How It Works
          </span>
          <h2 style={{ fontWeight: 700, fontSize: '36px' }} className="text-[#222733] mb-6">
            Streamlined Transcription Process
          </h2>
          <p style={{ fontWeight: 400, fontSize: '18px' }} className="text-gray-600 max-w-2xl mx-auto">
            From dictation to delivery, a proven workflow ensuring quality and speed
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-500/10 transition-all h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <p style={{ fontWeight: 700, fontSize: '13px' }} className="text-gray-500 uppercase mb-2">Step {step.number}</p>
                  <h3 style={{ fontWeight: 700, fontSize: '20px' }} className="text-[#222733] mb-3">{step.title}</h3>
                  <p style={{ fontWeight: 400, fontSize: '14px' }} className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}