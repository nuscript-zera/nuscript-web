import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Mic, FileText, DollarSign, Shield, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Mic,
    title: "AI Medical Scribing",
    description: "NuScriptAI turns clinician dictation into structured, chart‑ready notes so providers can focus more on patients and less on typing.",
    features: ["99.5% accuracy", "Multi-specialty support", "Medical coding"],
    gradient: "from-teal-500 to-blue-600"
  },
  {
    icon: FileText,
    title: "Medical Transcription",
    description: "25 years of transcription expertise combined with AI for high-accuracy medical documentation with rapid turnaround.",
    features: ["99.5% accuracy", "Same-day delivery", "Specialty expertise"],
    gradient: "from-blue-500 to-indigo-600",
    page: "MedicalTranscription"
  },
  {
    icon: Shield,
    title: "Coding & Compliance",
    description: "Certified coders ensure accurate code assignment aligned with U.S. clinical and billing standards.",
    features: ["ICD-10 & CPT", "Audit support", "Compliance tracking"],
    gradient: "from-indigo-500 to-blue-600",
    page: "MedicalCoding"
  },
  {
    icon: DollarSign,
    title: "Revenue Cycle Management",
    description: "End-to-end RCM services from charge capture to AR follow-up, powered by intelligent automation and expert teams.",
    features: ["Denials management", "Claims optimization", "Real-time visibility"],
    gradient: "from-teal-600 to-indigo-600",
    page: "RevenueCycleManagement"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-blue-50/50 to-transparent rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span style={{ fontWeight: 500, fontSize: '14px' }} className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-[#2563eb] mb-6">
            Our Services
          </span>
          <h2 style={{ fontWeight: 700, fontSize: '36px' }} className="text-slate-900 mb-6">
            Clinical to Financial,
            <span className="block text-[#2563eb]">Seamlessly Connected</span>
          </h2>
          <p style={{ fontWeight: 400, fontSize: '18px', lineHeight: '1.6' }} className="text-slate-600">
            NuScriptAI powers every service—from the moment a clinician speaks to when revenue hits your account.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const isLinked = service.title === "AI Medical Scribing" || service.title === "Medical Transcription" || service.title === "Coding & Compliance" || service.title === "Revenue Cycle Management";
            const pageName = service.page || (service.title === "AI Medical Scribing" ? "AIMedicalScribing" : null);

            const cardContent = (
              <div className="relative h-full bg-white rounded-3xl p-8 border border-blue-100 shadow-lg shadow-blue-500/10 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                <h3 style={{ fontWeight: 700, fontSize: '24px' }} className="text-slate-900 mb-3 group-hover:text-[#2563eb] transition-colors">
                  {service.title}
                </h3>
                <p style={{ fontWeight: 400, fontSize: '16px', lineHeight: '1.6' }} className="text-slate-600 mb-6">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span key={feature} style={{ fontWeight: 500, fontSize: '13px' }} className="px-3 py-1.5 bg-gray-50 text-slate-600 rounded-lg">
                      {feature}
                    </span>
                  ))}
                </div>

                <div style={{ fontWeight: 700 }} className="flex items-center text-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn more</span>
                  <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            );

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                {isLinked && pageName ? (
                  <Link to={createPageUrl(pageName)} className="block h-full no-underline">{cardContent}</Link>
                ) : cardContent}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}