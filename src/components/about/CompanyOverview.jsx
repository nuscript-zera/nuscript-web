import React from 'react';
import { motion } from 'framer-motion';

export default function CompanyOverview() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 style={{ fontWeight: 700, fontSize: '36px', lineHeight: '1.3' }} className="text-[#222733] mb-6">
          About NuScript
        </h2>
        <p style={{ fontWeight: 400, fontSize: '18px', lineHeight: '1.8' }} className="text-gray-700 max-w-3xl mx-auto">
          NuScript is a SOC 2 and HIPAA-certified, healthcare operations company with over 25 years of experience at the intersection of clinical documentation and revenue cycle management. By pairing deep HIM and RCM expertise with AI-powered tools like NuScriptAI, NuScript helps U.S. healthcare organizations improve documentation quality, reduce physician burnout, and strengthen financial performance.
        </p>
      </motion.div>
    </section>
  );
}