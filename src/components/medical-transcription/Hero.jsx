import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function MedicalTranscriptionHero() {
  return (
    <section className="pt-32 pb-24 px-6 lg:px-8 bg-gradient-to-br from-white via-violet-50/20 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-violet-100/30 to-purple-100/20 rounded-full blur-3xl" />
      
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span style={{ fontWeight: 500, fontSize: '14px' }} className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-[#6200EA] mb-6">
            Medical Transcription
          </span>
          <h1 style={{ fontWeight: 800, fontSize: '64px', letterSpacing: '-0.03em', lineHeight: '1.2' }} className="text-[#222733] mb-6">
            25 Years of Transcription Excellence
            <span className="block text-[#6200EA]">Meets Modern AI</span>
          </h1>
          <p style={{ fontWeight: 400, fontSize: '18px', lineHeight: '1.6' }} className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Combine decades of expertise with advanced technology for accurate, secure, and seamless clinical documentation. From audio dictation to EHR integration—we handle it all.
          </p>
          <Link to={createPageUrl('Contact')}>
            <Button size="lg" className="bg-[#6200EA] hover:bg-[#5000c9] text-white rounded-xl px-8 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all" style={{ fontWeight: 700 }}>
              Request Demo
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}