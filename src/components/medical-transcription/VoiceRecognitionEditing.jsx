import React from 'react';
import { motion } from 'framer-motion';

export default function VoiceRecognitionEditing() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span style={{ fontWeight: 500, fontSize: '14px' }} className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-[#6200EA] mb-6">
            AI-Enhanced Accuracy
          </span>
          <h2 style={{ fontWeight: 700, fontSize: '36px', lineHeight: '1.3' }} className="text-[#222733] mb-6">
            Expert Editing of Speech-to-Text
          </h2>
          <p style={{ fontWeight: 400, fontSize: '16px', lineHeight: '1.7' }} className="text-gray-600 mb-8">
            While speech recognition is powerful, accuracy requires the human touch. Our expert medical editors review and enhance every transcript, ensuring clinical accuracy and professional formatting.
          </p>
          <ul className="space-y-4">
            {[
              'Medical language specialists verify accuracy',
              'Context-aware corrections and formatting',
              'Specialty-specific terminology expertise',
              'Delivers publication-ready reports'
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