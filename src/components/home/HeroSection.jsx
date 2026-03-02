import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Brain, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white">
      {/* Animated background elements */}
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

      {/* Floating AI nodes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 0.8, 0.4], y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
            className="absolute w-2 h-2 rounded-full bg-blue-500/60"
            style={{ top: `${20 + (i * 12)}%`, left: `${10 + (i * 15)}%` }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 border border-blue-200/50 mb-8"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span style={{ fontWeight: 500, fontSize: '14px' }} className="text-blue-700">Powered by NuScriptAI</span>
            </motion.div>

            <h1 style={{ fontWeight: 800, fontSize: '64px', letterSpacing: '-0.03em' }} className="text-slate-900 leading-tight mb-6">
              Where Clinical
              <span className="block mt-2">
                <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  Meets Intelligent
                </span>
              </span>
            </h1>

            <p style={{ fontWeight: 400, fontSize: '18px', lineHeight: '1.6' }} className="text-slate-600 mb-10 max-w-xl">
              NuScript combines 25+ years of clinical documentation expertise with NuScriptAI and specialized RCM teams to deliver accurate notes, cleaner claims, and more time for patient care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={createPageUrl('Platform')}>
                <Button size="lg" className="bg-[#2563eb] hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300">
                  Discover NuScriptAI
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl('Contact')}>
                <Button size="lg" variant="outline" className="border-2 border-gray-200 hover:border-[#2563eb] hover:text-[#2563eb] px-8 py-6 text-lg rounded-xl transition-all duration-300">
                  Talk to an Expert
                </Button>
              </Link>
            </div>

            {/* Trust badges */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-12 pt-8 border-t border-gray-100">
              <p style={{ fontWeight: 500, fontSize: '14px' }} className="text-slate-600 mb-4">Trusted by healthcare providers across the U.S.</p>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <p style={{ fontWeight: 700, fontSize: '32px' }} className="text-slate-900">25+</p>
                  <p style={{ fontWeight: 500, fontSize: '14px' }} className="text-slate-600">Years Legacy</p>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div className="text-center">
                  <p style={{ fontWeight: 700, fontSize: '32px' }} className="text-slate-900">99.5%</p>
                  <p style={{ fontWeight: 500, fontSize: '14px' }} className="text-slate-600">Accuracy</p>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div className="text-center">
                  <p style={{ fontWeight: 700, fontSize: '32px' }} className="text-slate-900">HIPAA</p>
                  <p style={{ fontWeight: 500, fontSize: '14px' }} className="text-slate-600">Compliant</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right visual - AI Platform visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="relative z-10 bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-blue-500/10 border border-blue-100/50">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#4f46e5] flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">NuScriptAI</p>
                      <p className="text-sm text-slate-600">Processing encounter...</p>
                    </div>
                  </div>
                  <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                {/* Waveform visualization */}
                <div className="mb-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Activity className="w-4 h-4 text-[#2563eb]" />
                    <span className="text-sm font-medium text-[#2563eb]">Live Transcription</span>
                  </div>
                  <div className="flex items-end gap-1 h-16">
                    {[...Array(32)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ height: [20, 40 + Math.random() * 30, 20] }}
                        transition={{ duration: 0.5 + Math.random() * 0.5, repeat: Infinity, delay: i * 0.05 }}
                        className="flex-1 bg-gradient-to-t from-[#2563eb] to-[#4f46e5] rounded-full opacity-70"
                      />
                    ))}
                  </div>
                </div>

                {/* Output preview */}
                <div className="space-y-3">
                  <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 2, delay: 1 }} className="h-3 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full" />
                  <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 2, delay: 1.2 }} className="h-3 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full" />
                  <motion.div initial={{ width: 0 }} animate={{ width: '70%' }} transition={{ duration: 2, delay: 1.4 }} className="h-3 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full" />
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm text-slate-600">Chart-ready in seconds</span>
                  <span className="text-sm font-medium text-[#2563eb]">ICD-10 • CPT Ready</span>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl shadow-blue-500/10 border border-blue-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">SOAP Note Complete</span>
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
                  <span className="text-sm font-medium text-gray-700">Claims Optimized</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}