import React from 'react';
import { motion } from 'framer-motion';
import { Mic, FileText, Shield, Zap } from 'lucide-react';

export default function PlatformCapabilities() {
  const capabilities = [
    {
      icon: Mic,
      title: 'AI Medical Scribing (Production)',
      description: 'Dictation-to-text AI scribing solution where clinicians dictate notes and the platform generates structured, specialty-tuned documentation refined by NuScript\'s clinical team. Hybrid AI + human workflow ensures accuracy, compliance, and billing readiness.',
      badge: 'Live Today'
    },
    {
      icon: FileText,
      title: 'Ambient AI Scribe (MVP Stage)',
      description: 'In-development capability that listens to clinician-patient conversations and automatically drafts encounter notes, reducing manual dictation and typing. Extends NuScript\'s expertise into fully ambient scribing for in-room or telehealth scenarios.',
      badge: 'Coming Soon'
    },
    {
      icon: Shield,
      title: 'AI-Driven Medical Coding',
      description: 'Auto-suggests diagnosis and procedure codes, with our medical coding specialists applying human-in-the-loop validation for accuracy and compliance.'
    },
    {
      icon: Zap,
      title: 'Clinical Content Analysis',
      description: 'Analyzes clinical content to support medical coding, suggesting ICD-10 and CPT codes and surfacing documentation gaps that matter for billing.'
    }
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-200/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100/80 border border-violet-200/50 mb-6">
          <span style={{ fontWeight: 500, fontSize: '13px' }} className="text-violet-700">Platform Capabilities</span>
        </div>
        <h2 style={{ fontWeight: 700, fontSize: '40px', lineHeight: '1.2' }} className="text-[#222733] mb-6">
          What NuScriptAI Does
        </h2>
        <p style={{ fontWeight: 400, fontSize: '17px', lineHeight: '1.8' }} className="text-gray-700 max-w-2xl mx-auto">
          End-to-end clinical documentation and coding on one intelligent platform.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {capabilities.map((cap, idx) => {
          const Icon = cap.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-500/10 transition-all group relative"
            >
              {cap.badge && (
                <div className="absolute top-6 right-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    cap.badge === 'Live Today' 
                      ? 'bg-green-100 text-green-700 border border-green-200' 
                      : 'bg-amber-100 text-amber-700 border border-amber-200'
                  }`}>
                    {cap.badge}
                  </span>
                </div>
              )}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-violet-500/10">
                <Icon className="w-8 h-8 text-[#6200EA]" />
              </div>
              <h3 style={{ fontWeight: 700, fontSize: '22px' }} className="text-[#222733] mb-3">
                {cap.title}
              </h3>
              <p style={{ fontWeight: 400, fontSize: '16px', lineHeight: '1.7' }} className="text-gray-700">
                {cap.description}
              </p>
            </motion.div>
          );
        })}
      </div>
      </div>
    </section>
  );
}