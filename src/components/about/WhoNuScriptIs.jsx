import React from 'react';
import { motion } from 'framer-motion';

export default function WhoNuScriptIs() {
  const specialties = [
    'Mental health', 'Family medicine', 'Cardiology', 'Pain management',
    'Physical therapy', 'Orthopedics', 'Pediatrics', 'Oncology',
    'Acute care', 'Ambulatory surgery centers'
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-indigo-50/40 to-teal-50/80" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-3xl -mr-48 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-200/20 rounded-full blur-3xl -ml-48" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/50 mb-6">
            <span style={{ fontWeight: 500, fontSize: '13px' }} className="text-blue-700">Our Foundation</span>
          </div>
          <h3 style={{ fontWeight: 700, fontSize: '40px', lineHeight: '1.2' }} className="text-slate-900 mb-6">
            Who NuScript Is
          </h3>
          <p style={{ fontWeight: 400, fontSize: '17px', lineHeight: '1.8' }} className="text-slate-600 max-w-3xl mb-8">
            NuScript was founded after decades of working alongside physicians, practice leaders, and hospital teams who needed clearer documentation and more predictable revenue. Today, the company serves providers across a wide range of specialties and care settings.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <h4 style={{ fontWeight: 600, fontSize: '16px' }} className="text-slate-900 mb-6">Specialties Served</h4>
          <div className="flex flex-wrap gap-3">
            {specialties.map((specialty, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-3 bg-white rounded-full border border-blue-200/50 text-slate-900 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 transition-all cursor-default"
                style={{ fontWeight: 500, fontSize: '14px' }}
              >
                {specialty}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}