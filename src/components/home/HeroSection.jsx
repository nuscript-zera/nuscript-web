import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-200/40 to-indigo-300/20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-teal-100/50 to-blue-200/30 blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 border border-blue-200/50 mb-8"
            >
              <Shield className="w-4 h-4 text-blue-600" />
              <span style={{ fontWeight: 500, fontSize: '14px' }} className="text-blue-700">HIPAA Compliant · SOC 2 Aligned</span>
            </motion.div>

            <h1 style={{ fontWeight: 800, fontSize: '64px', letterSpacing: '-0.03em' }} className="text-slate-900 leading-tight mb-6">
              Clinical Documentation
              <span className="block mt-2">
                <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  & Revenue Cycle Services
                </span>
              </span>
            </h1>

            <p style={{ fontWeight: 400, fontSize: '18px', lineHeight: '1.6' }} className="text-slate-600 mb-10 max-w-xl">
              25+ years of healthcare documentation expertise. From medical transcription and scribing to coding and RCM — NuScript delivers accurate documentation, cleaner claims, and faster revenue for U.S. healthcare providers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={createPageUrl('Contact')}>
                <Button size="lg" className="bg-[#2563eb] hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl('About')}>
                <Button size="lg" variant="outline" className="border-2 border-gray-200 hover:border-[#2563eb] hover:text-[#2563eb] px-8 py-6 text-lg rounded-xl transition-all duration-300">
                  Learn About Us
                </Button>
              </Link>
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-12 pt-8 border-t border-gray-100">
              <p style={{ fontWeight: 500, fontSize: '14px' }} className="text-slate-600 mb-4">Trusted by healthcare providers across the U.S.</p>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <p style={{ fontWeight: 700, fontSize: '32px' }} className="text-slate-900">25+</p>
                  <p style={{ fontWeight: 500, fontSize: '14px' }} className="text-slate-600">Years Experience</p>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div className="text-center">
                  <p style={{ fontWeight: 700, fontSize: '32px' }} className="text-slate-900">99.5%</p>
                  <p style={{ fontWeight: 500, fontSize: '14px' }} className="text-slate-600">Accuracy</p>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div className="text-center">
                  <p style={{ fontWeight: 700, fontSize: '32px' }} className="text-slate-900">40+</p>
                  <p style={{ fontWeight: 500, fontSize: '14px' }} className="text-slate-600">Specialties</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <img
                src="/healthtech.webp"
                alt="Healthcare professional with patient"
                className="rounded-3xl shadow-2xl shadow-blue-500/10 object-cover w-full max-h-[560px]"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
