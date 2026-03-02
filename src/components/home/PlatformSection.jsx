import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Layers, Globe, Lock, Cpu, BarChart3 } from 'lucide-react';

const features = [
  { icon: Cpu, label: "AI-First Architecture", desc: "Built ground-up for healthcare AI" },
  { icon: Layers, label: "Unified Platform", desc: "Clinical & financial in one place" },
  { icon: Globe, label: "24/7 Operations", desc: "Extended coverage across time zones" },
  { icon: Lock, label: "HIPAA Compliant", desc: "Enterprise-grade security" },
  { icon: Zap, label: "Real-Time Processing", desc: "Instant documentation output" },
  { icon: BarChart3, label: "Analytics Dashboard", desc: "Complete visibility & insights" }
];

export default function PlatformSection() {
  return (
    <section className="py-24 bg-[#111827] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-blue-500/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-teal-500/10 rounded-full"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text content */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span style={{ fontWeight: 500, fontSize: '14px' }} className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 mb-6">
              The Platform
            </span>
            <h2 style={{ fontWeight: 700, fontSize: '36px' }} className="text-white mb-6 leading-tight">
              NuScriptAI
              <span className="block text-[#0d9488]">Powers Everything</span>
            </h2>
            <p style={{ fontWeight: 400, fontSize: '18px', lineHeight: '1.6' }} className="text-gray-400 mb-10">
              Our proprietary AI platform sits at the core of every service we offer. 
              From ambient speech capture to intelligent claim optimization, 
              NuScriptAI transforms how healthcare documentation and revenue cycle management work together.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#4f46e5] flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: '16px' }} className="text-white">{feature.label}</p>
                    <p style={{ fontWeight: 400, fontSize: '14px' }} className="text-gray-400">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
            <div className="relative">
              <div className="relative w-64 h-64 mx-auto">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 rounded-full border-2 border-dashed border-teal-500/30"
                />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-32 h-32 rounded-3xl bg-gradient-to-br from-[#2563eb] to-[#4f46e5] flex items-center justify-center shadow-2xl shadow-blue-500/50"
                  >
                    <span className="text-3xl font-bold text-white">NuAI</span>
                  </motion.div>
                </div>

                {['HIM', 'RCM', 'AI', 'QA'].map((label, i) => (
                  <motion.div
                    key={label}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                    style={{ transformOrigin: 'center' }}
                  >
                    <div
                      className="absolute w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                      style={{
                        top: i === 0 ? '-10%' : i === 2 ? '110%' : '45%',
                        left: i === 1 ? '-10%' : i === 3 ? '110%' : '45%',
                        transform: `rotate(-${(360 / 15) * (15 + i * 5)}deg)`
                      }}
                    >
                      <span className="text-xs font-semibold text-white">{label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <motion.circle
                    cx="200" cy="200" r="150"
                    fill="none" stroke="url(#gradient1)" strokeWidth="1" strokeDasharray="10 5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0d9488" />
                      <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 grid grid-cols-3 gap-4"
            >
              {[
                { value: "50M+", label: "Documents processed" },
                { value: "<4hr", label: "Avg turnaround" },
                { value: "99%+", label: "Avg accuracy" }
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-2xl bg-white/5">
                  <p style={{ fontWeight: 700, fontSize: '24px', fontVariantNumeric: 'tabular-nums' }} className="text-[#0d9488]">{stat.value}</p>
                  <p style={{ fontWeight: 500, fontSize: '13px' }} className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}