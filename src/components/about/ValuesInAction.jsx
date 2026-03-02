import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Users, Sparkles } from 'lucide-react';

export default function ValuesInAction() {
  const values = [
    { icon: Heart, title: 'Integrity', description: 'Building trust through honest, transparent, and ethical practices in every client relationship.' },
    { icon: Shield, title: 'Accountability', description: 'Taking ownership of quality, compliance, and delivering on commitments with measurable results.' },
    { icon: Users, title: 'Collaboration', description: 'Working as true partners with clients, providers, and team members to achieve shared success.' },
    { icon: Sparkles, title: 'Excellence', description: 'Pursuing the highest standards in training, quality measurement, and client outcomes.' }
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-200/15 rounded-full blur-3xl -ml-32" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-200/15 rounded-full blur-3xl -mr-32" />
      
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.5, 0.2], y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.7, ease: "easeInOut" }}
          className="absolute w-2 h-2 rounded-full bg-blue-400/40"
          style={{ top: `${15 + (i * 10)}%`, left: `${5 + (i * 12)}%` }}
        />
      ))}
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/50 mb-6">
            <span style={{ fontWeight: 500, fontSize: '13px' }} className="text-blue-700">Our Culture</span>
          </div>
          <h3 style={{ fontWeight: 700, fontSize: '40px', lineHeight: '1.2' }} className="text-slate-900 mb-6">Values in Action</h3>
          <p style={{ fontWeight: 400, fontSize: '17px', lineHeight: '1.8' }} className="text-slate-600 max-w-3xl mx-auto">
            NuScript's work is grounded in core values of integrity, accountability, collaboration, and excellence. These values show up in how teams are trained, how quality is measured, and how long-term client relationships are built and maintained.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20 rounded-2xl p-8 border border-blue-200/50 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm"
                >
                  <Icon className="w-8 h-8 text-[#2563eb]" />
                </motion.div>
                <h4 style={{ fontWeight: 700, fontSize: '20px' }} className="text-slate-900 mb-4">{value.title}</h4>
                <p style={{ fontWeight: 400, fontSize: '15px', lineHeight: '1.8' }} className="text-slate-600">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}