import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const milestones = [
  { year: "2000", title: "Launched", desc: "Medical transcription services" },
  { year: "2017", title: "Expanded", desc: "Multi-specialty documentation services" },
  { year: "2023", title: "Tech-Enabled", desc: "Launched RCM & coding services" },
  { year: "2025", title: "AI-Powered", desc: "Introduced NuScriptAI platform" },
  { year: "Now", title: "Integrated", desc: "Clinical-to-financial automation" }
];

const values = [
  "HIPAA-aligned processes for PHI handling",
  "Scalable pods of transcriptionists, scribes, coders & billers",
  "Extended coverage across U.S. time zones",
  "Structured around U.S. regulatory expectations",
  "Specialty-specific expertise across 40+ specialties",
  "Cost efficiency without compromising quality"
];

export default function LegacySection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Timeline */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span style={{ fontWeight: 500, fontSize: '14px' }} className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-[#2563eb] mb-6">
              Our Journey
            </span>
            <h2 style={{ fontWeight: 700, fontSize: '36px' }} className="text-slate-900 mb-6">
              25 Years of
              <span className="block text-[#2563eb]">Healthcare Excellence</span>
            </h2>
            <p style={{ fontWeight: 400, fontSize: '18px', lineHeight: '1.6' }} className="text-slate-600 mb-12">
              From traditional transcription to AI-powered documentation—our evolution reflects healthcare's own digital transformation.
            </p>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2563eb] to-[#0d9488]" />
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-start gap-6 mb-8 last:mb-0"
                >
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#2563eb] border-4 border-[#2563eb] flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-white">{milestone.year}</span>
                  </div>
                  <div className="pt-2">
                    <h3 style={{ fontWeight: 700, fontSize: '18px' }} className="text-slate-900">{milestone.title}</h3>
                    <p style={{ fontWeight: 400, fontSize: '16px' }} className="text-slate-600">{milestone.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Values */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="bg-white rounded-3xl p-10 shadow-xl shadow-blue-500/5 border border-blue-100">
              <h3 style={{ fontWeight: 700, fontSize: '24px' }} className="text-slate-900 mb-8">
                Why Healthcare Providers Trust NuScript
              </h3>
              
              <div className="space-y-5">
                {values.map((value, index) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2563eb]" />
                    </div>
                    <p style={{ fontWeight: 400, fontSize: '16px' }} className="text-slate-600">{value}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 border-2 border-white flex items-center justify-center">
                        <span style={{ fontWeight: 700, fontSize: '11px' }} className="text-[#2563eb]">
                          {['MD', 'DO', 'NP', 'PA'][i - 1]}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontWeight: 500, fontSize: '14px' }} className="text-slate-600">
                    Trusted by physicians, groups & hospitals nationwide
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}