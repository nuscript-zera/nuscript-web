import React from 'react';
import { motion } from 'framer-motion';
import { Users, Palette, Zap, Lock, Target, TrendingDown } from 'lucide-react';

const differentiators = [
  {
    icon: Users,
    title: 'Human Touch',
    description: 'All transcription projects processed by professional medical language specialists.'
  },
  {
    icon: Palette,
    title: 'Customization',
    description: 'Transcripts prepared exactly to your specifications, rules, formats, and templates.'
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'Standard delivery within 24 hours. Rush reports available in as quickly as one hour.'
  },
  {
    icon: Lock,
    title: 'Security',
    description: 'Strict HIPAA compliance and privacy law adherence at every stage.'
  },
  {
    icon: Target,
    title: 'Accuracy',
    description: 'Consistent spelling, grammar, and context transcribed by subject matter experts.'
  },
  {
    icon: TrendingDown,
    title: 'Cost-Efficiency',
    description: 'Doing the right things right—quality care with optimal resource utilization.'
  }
];

export default function KeyDifferentiators() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-white via-violet-50/20 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span style={{ fontWeight: 500, fontSize: '14px' }} className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-[#6200EA] mb-6">
            Why NuScript
          </span>
          <h2 style={{ fontWeight: 700, fontSize: '36px' }} className="text-[#222733] mb-6">
            What Sets Us Apart
          </h2>
          <p style={{ fontWeight: 400, fontSize: '18px' }} className="text-gray-600 max-w-2xl mx-auto">
            Combining 25 years of excellence with modern technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-500/10 transition-all h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '18px' }} className="text-[#222733] mb-3">
                  {item.title}
                </h3>
                <p style={{ fontWeight: 400, fontSize: '14px', lineHeight: '1.6' }} className="text-gray-600">
                  {item.description}
                </p>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}