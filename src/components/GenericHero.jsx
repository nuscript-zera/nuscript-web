import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function GenericHero({ 
  title, subtitle, description,
  primaryButtonText = "Schedule a Demo",
  secondaryButtonText = "Talk With Our Team",
  primaryButtonPage = "Contact",
  secondaryButtonPage = "Contact",
  primaryButtonAction = null,
  secondaryButtonAction = null,
  isSmall = false
}) {
  return (
    <section className={`relative flex items-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white ${isSmall ? 'min-h-[60vh]' : 'min-h-[80vh]'}`}>
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

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/50 mb-8"
            >
              <span style={{ fontWeight: 500, fontSize: '14px' }} className="text-blue-700">{subtitle}</span>
            </motion.div>
          )}

          <h1 style={{ fontWeight: 800, fontSize: '64px', letterSpacing: '-0.03em', lineHeight: '1.2' }} className="text-slate-900 mb-6">
            {title}
          </h1>

          {description && (
            <p style={{ fontWeight: 400, fontSize: '18px', lineHeight: '1.6' }} className="text-slate-600 mb-10 max-w-2xl">
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            {primaryButtonAction ? (
              <Button onClick={primaryButtonAction} size="lg" className="bg-[#2563eb] hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300">
                {primaryButtonText}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            ) : (
              <Link to={createPageUrl(primaryButtonPage)}>
                <Button size="lg" className="bg-[#2563eb] hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300">
                  {primaryButtonText}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            )}
            
            {secondaryButtonAction ? (
              <Button onClick={secondaryButtonAction} size="lg" variant="outline" className="border-2 border-gray-200 hover:border-[#2563eb] hover:text-[#2563eb] px-8 py-6 text-lg rounded-xl transition-all duration-300">
                {secondaryButtonText}
              </Button>
            ) : (
              <a href="tel:+919790444939">
                <Button size="lg" variant="outline" className="border-2 border-gray-200 hover:border-[#2563eb] hover:text-[#2563eb] px-8 py-6 text-lg rounded-xl transition-all duration-300">
                  {secondaryButtonText}
                </Button>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}