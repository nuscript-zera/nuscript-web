import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Stethoscope, Activity } from 'lucide-react';
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="relative z-10 bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-blue-500/10 border border-blue-100/50">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#4f46e5] flex items-center justify-center">
                      <Stethoscope className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">NuScript Services</p>
                      <p className="text-sm text-slate-600">End-to-end documentation</p>
                    </div>
                  </div>
                  <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    { label: "Medical Transcription", status: "Active", color: "bg-green-100 text-green-700" },
                    { label: "Medical Scribing", status: "Active", color: "bg-green-100 text-green-700" },
                    { label: "Medico-Legal Transcription", status: "Active", color: "bg-green-100 text-green-700" },
                    { label: "Medical Coding", status: "Active", color: "bg-green-100 text-green-700" },
                    { label: "Revenue Cycle Management", status: "Active", color: "bg-green-100 text-green-700" },
                  ].map((service, i) => (
                    <motion.div
                      key={service.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.15 }}
                      className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-blue-50/50 to-indigo-50/50"
                    >
                      <span className="text-sm font-medium text-slate-700">{service.label}</span>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${service.color}`}>{service.status}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm text-slate-600">Same-day turnaround</span>
                  <span className="text-sm font-medium text-[#2563eb]">HIPAA · SOC 2</span>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl shadow-blue-500/10 border border-blue-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">99.5% Accuracy</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl shadow-blue-500/10 border border-blue-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                    <span className="text-teal-600 text-sm">$</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Revenue Optimized</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
