import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass } from 'lucide-react';

export default function VisionMission() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50/80 via-indigo-50/50 to-blue-50/80" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue-200/30 rounded-full blur-3xl -mr-48 -mb-48" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-200/20 rounded-full blur-3xl -ml-32 -mt-32" />
      
      {/* Animated gradient orbs */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-violet-300/20 to-blue-300/20 rounded-full blur-3xl"
      />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-3xl p-10 border border-violet-200/50 shadow-xl shadow-violet-500/10 hover:shadow-2xl hover:shadow-violet-500/20 hover:border-violet-300 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
              >
                <Target className="w-8 h-8 text-[#6200EA]" />
              </motion.div>
              <h3 style={{ fontWeight: 700, fontSize: '28px' }} className="text-[#222733]">
                Vision
              </h3>
            </div>
            <p style={{ fontWeight: 400, fontSize: '16px', lineHeight: '1.9' }} className="text-gray-700">
              To transform healthcare documentation and revenue cycle management, closing the gap between care and compliance with solutions providers trust, that support better outcomes and long‑term organizational health.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white rounded-3xl p-10 border border-violet-200/50 shadow-xl shadow-violet-500/10 hover:shadow-2xl hover:shadow-violet-500/20 hover:border-violet-300 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
              >
                <Compass className="w-8 h-8 text-[#6200EA]" />
              </motion.div>
              <h3 style={{ fontWeight: 700, fontSize: '28px' }} className="text-[#222733]">
                Mission
              </h3>
            </div>
            <p style={{ fontWeight: 400, fontSize: '16px', lineHeight: '1.9' }} className="text-gray-700">
              To make clinical documentation and RCM simpler and stronger by uniting precise work, modern technology, and a client‑first mindset, so providers stay compliant, get paid accurately, and can focus on patient care.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}