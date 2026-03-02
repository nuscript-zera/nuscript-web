import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Linkedin, Mail } from 'lucide-react';

const footerLinks = {
  Services: [
    'AI Medical Scribing',
    'Medical Transcription',
    'Medical Coding',
    'Revenue Cycle Management'
  ],
  Company: [
    'About',
    'Platform',
    'Contact'
  ],
  Legal: [
    'Privacy Policy',
    'Terms of Service'
  ]
};

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-2 text-left">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696d2b3f7ab368069610b916/7fe953efb_NuScriptLogo-2.png" alt="NuScript" className="h-10 w-auto mb-6 brightness-0 invert" />
            <p style={{ fontWeight: 400, fontSize: '14px', lineHeight: '1.6' }} className="text-gray-400 mb-6">
              NuScript delivers AI‑powered clinical documentation and RCM services, backed by 25+ years of experience helping healthcare organizations improve accuracy, cash flow, and efficiency.
            </p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/company/nuscriptindia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:contact@nuscript.net" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 style={{ fontWeight: 700, fontSize: '16px' }} className="mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => {
                  const pageMap = {
                    'AI Medical Scribing': 'AIMedicalScribing',
                    'Medical Coding': 'MedicalCoding',
                    'Revenue Cycle Management': 'RevenueCycleManagement',
                    'Medical Transcription': 'MedicalTranscription',
                    'About': 'About',
                    'Contact': 'Contact',
                    'Privacy Policy': 'PrivacyPolicy',
                    'Terms of Service': 'TermsOfUse',
                    'Platform': 'Platform'
                  };
                  const page = pageMap[link];
                  return (
                    <li key={link}>
                      {page ? (
                        <Link to={createPageUrl(page)} onClick={() => window.scrollTo(0, 0)} style={{ fontWeight: 400, fontSize: '14px' }} className="text-gray-400 hover:text-white transition-colors">
                          {link}
                        </Link>
                      ) : (
                        <a href="#" style={{ fontWeight: 400, fontSize: '14px' }} className="text-gray-400 hover:text-white transition-colors">{link}</a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-[#1f2937] flex flex-col md:flex-row justify-between items-center gap-4">
          <p style={{ fontWeight: 500, fontSize: '14px' }} className="text-gray-400">
            © 2026 NuScript Data Solutions Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span style={{ fontWeight: 500, fontSize: '13px' }} className="flex items-center gap-2 text-gray-400">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              HIPAA Compliant
            </span>
            <span style={{ fontWeight: 500, fontSize: '13px' }} className="flex items-center gap-2 text-gray-400">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              SOC 2 Aligned
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}