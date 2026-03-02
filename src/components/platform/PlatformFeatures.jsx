import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function PlatformFeatures() {
  const features = [
    {
      category: 'Dictation, Transcription, and Scribing',
      items: [
        'AI dictation & transcription with medical language tuning',
        'NuScript documentation team review and finalization',
        'AI-assisted structured scribing with template mapping',
        'Reduces clicks and manual typing for providers'
      ]
    },
    {
      category: 'AI-Driven Coding With Human in the Loop',
      items: [
        'Auto-suggests ICD-10, CPT, and HCPCS codes',
        'Leverages clinical detail from dictation and scribing',
        'Medical coding specialists validate and optimize codes',
        'Enhances coding accuracy and audit readiness'
      ]
    },
    {
      category: 'Built for Real-World Scale and Safety',
      items: [
        'Processes ~2,000 minutes of clinical audio daily',
        'SOC 2 and HIPAA-aligned secure PHI handling',
        'Engineered for specialty variation and care settings',
        'Offshore and U.S. teams safely combined with automation'
      ]
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-br from-violet-50/50 to-blue-50/30 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100/80 border border-violet-200/50 mb-6">
            <span style={{ fontWeight: 500, fontSize: '13px' }} className="text-violet-700">Features</span>
          </div>
          <h2 style={{ fontWeight: 700, fontSize: '40px', lineHeight: '1.2' }} className="text-[#222733] mb-6">
            Complete Platform Features
          </h2>
          <p style={{ fontWeight: 400, fontSize: '17px', lineHeight: '1.8' }} className="text-gray-700 max-w-2xl mx-auto">
            Everything you need to streamline clinical documentation and optimize your workflow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-500/10 transition-all"
            >
              <h3 style={{ fontWeight: 700, fontSize: '18px', lineHeight: '1.3' }} className="text-[#222733] mb-6">
                {feature.category}
              </h3>
              <div className="space-y-4">
                {feature.items.map((item, itemIdx) => (
                  <motion.div
                    key={itemIdx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (idx * 0.1) + (itemIdx * 0.05) }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#6200EA] flex-shrink-0 mt-0.5" />
                    <p style={{ fontWeight: 400, fontSize: '14px', lineHeight: '1.6' }} className="text-gray-700">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}