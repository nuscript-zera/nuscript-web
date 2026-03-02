import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Shield } from 'lucide-react';

export default function PlatformOutcomes() {
  const outcomes = [
    {
      icon: Clock,
      title: 'Reduce Documentation Time',
      description: 'Minimize after-hours charting for clinicians with AI-assisted dictation, transcription, and scribing.'
    },
    {
      icon: Shield,
      title: 'Improve Coding Quality',
      description: 'AI-generated suggestions combined with human expertise to support cleaner, more accurate claims.'
    },
    {
      icon: TrendingUp,
      title: 'Revenue-Ready Data',
      description: 'Turn routine audio dictation into structured, compliant data that flows smoothly into downstream RCM systems.'
    }
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-200/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100/80 border border-violet-200/50 mb-6">
          <span style={{ fontWeight: 500, fontSize: '13px' }} className="text-violet-700">Outcomes</span>
        </div>
        <h2 style={{ fontWeight: 700, fontSize: '40px', lineHeight: '1.2' }} className="text-[#222733] mb-6">
          From Platform to Outcomes
        </h2>
        <p style={{ fontWeight: 400, fontSize: '17px', lineHeight: '1.8' }} className="text-gray-700 max-w-2xl mx-auto">
          By unifying dictation, transcription, scribing, and coding on a single AI platform, NuScriptAI helps organizations achieve more.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {outcomes.map((outcome, idx) => {
          const Icon = outcome.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-500/10 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-violet-500/10">
                <Icon className="w-8 h-8 text-[#6200EA]" />
              </div>
              <h3 style={{ fontWeight: 700, fontSize: '22px' }} className="text-[#222733] mb-3">
                {outcome.title}
              </h3>
              <p style={{ fontWeight: 400, fontSize: '16px', lineHeight: '1.7' }} className="text-gray-700">
                {outcome.description}
              </p>
            </motion.div>
          );
        })}
      </div>
      </div>
    </section>
  );
}