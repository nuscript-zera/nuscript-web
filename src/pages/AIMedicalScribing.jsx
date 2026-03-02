import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Brain, Shield, CheckCircle2, Users, Clock, TrendingUp, Smile } from 'lucide-react';
import GenericHero from '../components/GenericHero';
import CTABox from '../components/CTABox';
import Footer from '../components/home/Footer';

export default function AIMedicalScribing() {
  const benefits = [
    {
      icon: Users,
      title: "Eliminate Physician Burnout",
      description: "Remote AI-assisted scribes capture all relevant details, eliminating documentation work that spills into nights and weekends."
    },
    {
      icon: TrendingUp,
      title: "Increase Provider Productivity",
      description: "Offload mundane EHR data entry so clinicians see more patients or finish on time without sacrificing note quality."
    },
    {
      icon: Clock,
      title: "Improve Work-Life Balance",
      description: "Charts completed during the clinical day mean providers finish on time, reducing 'pajama time' and long-term exhaustion."
    },
    {
      icon: Smile,
      title: "Better Patient Satisfaction",
      description: "With documentation offloaded, physicians focus on the patient rather than the screen—studies link this to higher satisfaction."
    }
  ];

  const capabilities = [
    {
      icon: Brain,
      title: "AI Medical Scribing (Production)",
      description: "NuScriptAI's production AI scribing solution focuses on dictation-to-text, where clinicians dictate notes and the platform generates structured, specialty-tuned documentation.",
      details: "This hybrid AI + human workflow preserves speed and convenience for clinicians while ensuring notes are accurate, compliant, and ready for coding and billing. Our remote medical scribes securely access your system, capture all clinically relevant information, and ensure notes are ready for quick review and sign-off—often within minutes of the visit.",
      badge: "Production Ready"
    },
    {
      icon: Zap,
      title: "Ambient AI Scribe (MVP Stage)",
      description: "In parallel, NuScriptAI is developing an ambient AI capability that listens to clinician-patient conversations and drafts encounter notes automatically.",
      details: "This module further reduces the need for manual dictation and typing by capturing key clinical details in real time, and as it matures, it will extend NuScript's long-standing transcription and documentation expertise into fully ambient, in-room or telehealth scribing experiences that feel seamless to providers.",
      badge: "Coming Soon"
    }
  ];

  const differentiators = [
    {
      icon: Shield,
      title: "SOC 2 Aligned & HIPAA Compliant",
      description: "Enterprise-grade security with secure offsite operations in India and strict compliance controls"
    },
    {
      icon: CheckCircle2,
      title: "25 Years of Expertise",
      description: "Proven track record providing reliable, specialty-aware scribes trained on multiple EMRs and ICD-10 requirements"
    },
    {
      icon: Zap,
      title: "Trusted & Integrated",
      description: "Our teams function as an extension of your clinic, consistently delivering prompt, thorough charts that support better care and revenue"
    }
  ];

  return (
    <div className="overflow-hidden">
      <GenericHero 
        title={<>Eliminate Burnout.<span className="block text-[#6200EA]">Reclaim Time for Patients.</span></>}
        subtitle="AI Medical Scribing"
        description="AI‑powered medical scribing from NuScript combines NuScriptAI dictation‑to‑text with experienced remote scribes to take over charting work, reducing documentation burden and giving providers more time and focus for patient care instead of EHR clicks."
        primaryButtonText="Request Demo"
        secondaryButtonText="Talk With Our Team"
        isSmall={true}
      />

      {/* How It Works Section */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-200/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100/80 border border-violet-200/50 mb-6">
              <span style={{ fontWeight: 500, fontSize: '13px' }} className="text-violet-700">How AI Scribing Works</span>
            </div>
            <h2 style={{ fontWeight: 700, fontSize: '40px', lineHeight: '1.2' }} className="text-[#222733] mb-6">
              AI + Human Expertise Combined
            </h2>
            <p style={{ fontWeight: 400, fontSize: '17px', lineHeight: '1.8' }} className="text-gray-700">
              NuScriptAI offers production-ready dictation-to-text AI scribing today, with an ambient AI capability in development to further automate clinical documentation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative"
              >
                <div className="relative h-full bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-violet-200 shadow-sm hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-500">
                  {cap.badge && (
                    <div className="absolute top-6 right-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        cap.badge === 'Production Ready' 
                          ? 'bg-green-100 text-green-700 border border-green-200' 
                          : 'bg-amber-100 text-amber-700 border border-amber-200'
                      }`}>
                        {cap.badge}
                      </span>
                    </div>
                  )}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6200EA] to-violet-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-violet-500/20">
                    <cap.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 style={{ fontWeight: 700, fontSize: '24px' }} className="text-[#222733] mb-3">
                    {cap.title}
                  </h3>
                  <p style={{ fontWeight: 400, fontSize: '16px', lineHeight: '1.6' }} className="text-gray-700 mb-6">
                    {cap.description}
                  </p>
                  <p style={{ fontWeight: 400, fontSize: '15px', lineHeight: '1.6' }} className="text-gray-600">
                    {cap.details}
                  </p>

                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-32 bg-gradient-to-br from-violet-50/50 to-blue-50/30 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-violet-200/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100/80 border border-violet-200/50 mb-6">
              <span style={{ fontWeight: 500, fontSize: '13px' }} className="text-violet-700">The Benefits</span>
            </div>
            <h2 style={{ fontWeight: 700, fontSize: '40px', lineHeight: '1.2' }} className="text-[#222733] mb-6">
              Designed to Reduce Physician Burnout
            </h2>
            <p style={{ fontWeight: 400, fontSize: '17px', lineHeight: '1.8' }} className="text-gray-700">
              Remote AI-assisted scribes are a proven way to cut EHR time and lower burnout by offloading documentation work that often spills into nights and weekends.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-500/10 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-violet-500/20">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '22px' }} className="text-[#222733] mb-3">
                  {benefit.title}
                </h3>
                <p style={{ fontWeight: 400, fontSize: '16px', lineHeight: '1.7' }} className="text-gray-700">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why NuScript Section */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100/80 border border-violet-200/50 mb-6">
              <span style={{ fontWeight: 500, fontSize: '13px' }} className="text-violet-700">Why NuScript</span>
            </div>
            <h2 style={{ fontWeight: 700, fontSize: '40px', lineHeight: '1.2' }} className="text-[#222733] mb-6">
              Reliable, Remote Scribes You Can Trust
            </h2>
            <p style={{ fontWeight: 400, fontSize: '17px', lineHeight: '1.8' }} className="text-gray-700 max-w-2xl mx-auto">
              NuScript has a long reputation for providing reliable, self-motivated, and specialty-aware scribes who integrate smoothly into each physician's workflow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-500/10 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-violet-500/20">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '22px' }} className="text-[#222733] mb-3">
                  {item.title}
                </h3>
                <p style={{ fontWeight: 400, fontSize: '16px', lineHeight: '1.7' }} className="text-gray-700">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative py-32 bg-gradient-to-br from-violet-50/50 to-white overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-200/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100/80 border border-violet-200/50 mb-6">
              <span style={{ fontWeight: 500, fontSize: '13px' }} className="text-violet-700">Real Results</span>
            </div>
            <h2 style={{ fontWeight: 700, fontSize: '40px', lineHeight: '1.2' }} className="text-[#222733] mb-6">
              What You Gain
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Higher Revenue", desc: "High-quality, complete documentation supports more accurate coding, cleaner claims, and more encounters per day." },
              { title: "Better Care", desc: "With documentation offloaded, physicians focus on patients rather than screens—leading to stronger relationships and better outcomes." },
              { title: "Faster Charting", desc: "Scribes securely access your system and deliver accurate, complete notes often within minutes of the visit." },
              { title: "Reduced Rework", desc: "Our scribes are trained on multiple EMRs and familiar with ICD-10 requirements, delivering complete notes that minimize rework." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-500/10 transition-all"
              >
                <h3 style={{ fontWeight: 700, fontSize: '22px' }} className="text-[#222733] mb-3">
                  {item.title}
                </h3>
                <p style={{ fontWeight: 400, fontSize: '16px', lineHeight: '1.7' }} className="text-gray-700">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <CTABox 
          heading="Ready to Eliminate Burnout?"
          description="Schedule a walkthrough to see how NuScript's AI scribes can reduce your documentation burden, improve work-life balance, and help physicians focus on patient care instead of EHR clicks."
          primaryButtonText="Schedule a Demo"
          secondaryButtonText="Talk With Our Team"
        />
      </section>

      <Footer />
    </div>
  );
}