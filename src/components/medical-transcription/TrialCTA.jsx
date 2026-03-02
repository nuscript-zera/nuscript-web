import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function TrialCTA() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-[#6200EA] via-violet-600 to-purple-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontWeight: 700, fontSize: '36px', lineHeight: '1.3' }} className="text-white mb-6">
            Ready to Transform Your Documentation?
          </h2>
          <p style={{ fontWeight: 400, fontSize: '18px', lineHeight: '1.6' }} className="text-violet-50 mb-12 max-w-2xl mx-auto">
            Request a demo and discover how NuScript's hybrid AI + human approach can increase accuracy while reducing your documentation burden.
          </p>
          <Link to={createPageUrl('Contact')}>
            <Button size="lg" className="bg-white hover:bg-gray-50 text-[#6200EA] rounded-xl px-8 shadow-xl" style={{ fontWeight: 700, fontSize: '16px' }}>
              Request Demo
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}