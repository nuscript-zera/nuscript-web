import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function WhatNuScriptDoes() {
  const capabilities = [
    {
      title: 'Clinical Documentation Excellence',
      description: 'Built on a long history in medical transcription and AI-assisted scribing to capture every encounter accurately and compliantly.'
    },
    {
      title: 'Optimized Medical Coding & RCM',
      description: 'Advanced methodologies and technology to maximize reimbursement, minimize denials, and accelerate cash flow.'
    },
    {
      title: 'Integrated Technology & Support',
      description: 'Streamlined workflows across the revenue cycle with a single, reliable offshore partner.'
    }
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -ml-48" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-indigo-100/30 rounded-full blur-3xl -mr-32" />
      
      <motion.div animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 right-20 w-3 h-3 rounded-full bg-blue-400/40" />
      <motion.div animate={{ y: [0, 20, 0], opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-32 left-32 w-2 h-2 rounded-full bg-teal-400/50" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h3 style={{ fontWeight: 700, fontSize: '36px', lineHeight: '1.2' }} className="text-slate-900 mb-12">
            What NuScript Does
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 bg-gradient-to-br from-white to-blue-50/30 rounded-2xl border border-blue-200/40 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-5 h-5 text-[#2563eb]" />
              </div>
              <h4 style={{ fontWeight: 700, fontSize: '18px' }} className="text-slate-900 mb-2">{cap.title}</h4>
              <p style={{ fontWeight: 400, fontSize: '14px', lineHeight: '1.7' }} className="text-slate-600">{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}