import React from 'react';
import { motion } from 'framer-motion';

export default function PlatformHero() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span style={{ fontWeight: 500, fontSize: '12px' }} className="inline-block px-3 py-1.5 rounded-full bg-violet-200 text-[#6200EA] mb-6">
          The NuScriptAI Platform
        </span>
        <h1 style={{ fontWeight: 800, fontSize: '64px', letterSpacing: '-0.03em', lineHeight: '1.2' }} className="text-[#222733] mb-6">
          Clinical Documentation<br />
          <span className="text-[#6200EA]">Powered by Generative AI</span>
        </h1>
        <p style={{ fontWeight: 400, fontSize: '18px', lineHeight: '1.6' }} className="text-gray-700 max-w-2xl mx-auto">
          NuScriptAI is a generative AI platform purpose-built for clinical work that handles dictation, transcription, scribing, and coding at scale—processing roughly 2,000 minutes of audio dictation per day for real providers in production.
        </p>
      </motion.div>
    </section>
  );
}