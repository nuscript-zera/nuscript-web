import React from 'react';
import { motion } from 'framer-motion';

export default function EHRIntegration() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-white via-violet-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span style={{ fontWeight: 500, fontSize: '14px' }} className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-[#6200EA] mb-6">
            Direct Integration
          </span>
          <h2 style={{ fontWeight: 700, fontSize: '36px', lineHeight: '1.3' }} className="text-[#222733] mb-6">
            Reports Delivered Straight to Your EHR
          </h2>
          <p style={{ fontWeight: 400, fontSize: '16px', lineHeight: '1.7' }} className="text-gray-600 mb-8">
            Eliminate manual data entry. We securely integrate with your EHR/EMR system to deliver transcribed reports directly into patient charts, so your team can spend more time on patient care.
          </p>
          <ul className="space-y-4">
            {[
              'Real-time report delivery to your system',
              'HIPAA-compliant secure integration',
              'Supports all major EHR platforms',
              'Zero additional data entry required'
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#6200EA]" />
                </div>
                <span style={{ fontWeight: 400, fontSize: '16px' }} className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}