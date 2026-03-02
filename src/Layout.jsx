import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

  * {
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  h1 {
    font-weight: 800;
    font-size: 64px;
    letter-spacing: -0.03em;
    line-height: 1.2;
  }

  h2 {
    font-weight: 700;
    font-size: 36px;
    line-height: 1.3;
  }

  h3 {
    font-weight: 700;
    line-height: 1.3;
  }

  body, p {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.6;
  }

  small, caption, [data-caption] {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.5;
  }

  button, .button {
    font-weight: 700;
    text-transform: none;
  }

  .tabular-figures {
    font-variant-numeric: tabular-nums;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 48px;
    }

    h2 {
      font-size: 28px;
    }

    body, p {
      font-size: 16px;
    }
  }
`;

const navigation = [
  { 
    name: 'Services', 
    page: null,
    children: [
      { name: 'AI Medical Scribing', page: 'AIMedicalScribing' },
      { name: 'Medical Transcription', page: 'MedicalTranscription' },
      { name: 'Medical Coding', page: 'MedicalCoding' },
      { name: 'Revenue Cycle Management', page: 'RevenueCycleManagement' }
    ]
  },
  { name: 'Platform', page: 'Platform' },
  { name: 'About', page: 'About' },
  { name: 'Contact', page: 'Contact' }
];

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPageName]);

  return (
    <div className="min-h-screen bg-white">
      <style>{fontStyles}</style>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo & Tagline */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-2">
              <img src="/nds.logo.png" alt="NuScript" className="h-10 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.page ? (
                    <Link
                      to={createPageUrl(item.page)}
                      style={{ fontWeight: 500, fontSize: '16px' }}
                      className={`flex items-center gap-1 transition-colors ${
                        currentPageName === item.page 
                          ? 'text-[#2563eb]' 
                          : 'text-gray-700 hover:text-[#2563eb]'
                      }`}
                    >
                      {item.name}
                      {item.children && <ChevronDown className="w-4 h-4" />}
                    </Link>
                  ) : (
                    <button
                      style={{ fontWeight: 500, fontSize: '16px' }}
                      className="flex items-center gap-1 transition-colors text-gray-700 hover:text-[#2563eb]"
                    >
                      {item.name}
                      {item.children && <ChevronDown className="w-4 h-4" />}
                    </button>
                  )}

                   {/* Dropdown */}
                          {item.children && (
                            <div className="group">
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={activeDropdown === item.name ? { opacity: 1, y: 0 } : { opacity: 0, y: 10, pointerEvents: 'none' }}
                                transition={{ duration: 0.15 }}
                                className="absolute top-full left-0 mt-1 w-56 bg-white rounded-2xl shadow-xl shadow-violet-500/10 border border-gray-100 py-2 overflow-hidden z-50"
                              >
                                {item.children.map((child) => (
                                  <Link
                                    key={child.name}
                                    to={createPageUrl(child.page)}
                                    onClick={() => {
                                      setActiveDropdown(null);
                                      window.scrollTo(0, 0);
                                    }}
                                    style={{ fontWeight: 400, fontSize: '14px' }}
                                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#2563eb] transition-colors"
                                  >
                                    {child.name}
                                  </Link>
                                ))}
                              </motion.div>
                            </div>
                          )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="https://app.nuscript.net" target="_blank" rel="noopener noreferrer">
                <Button style={{ fontWeight: 700, fontSize: '14px' }} className="bg-[#2563eb] hover:bg-blue-700 text-white rounded-xl px-6">
                  Login
                </Button>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100"
            >
              <div className="px-6 py-4 space-y-2">
                {navigation.map((item) => (
                    <div key={item.name}>
                      {item.page ? (
                        <Link
                          to={createPageUrl(item.page)}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block py-3 text-lg font-medium ${
                            currentPageName === item.page 
                              ? 'text-[#2563eb]' 
                              : 'text-gray-700'
                          }`}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <button
                          className="block py-3 text-lg font-medium text-gray-700 w-full text-left"
                        >
                          {item.name}
                        </button>
                      )}
                    {item.children && (
                      <div className="pl-4 space-y-2 mt-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={createPageUrl(child.page)}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 text-sm text-gray-600"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 space-y-3">
                  <a href="https://app.nuscript.net" target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full bg-[#2563eb] hover:bg-blue-700 text-white">
                      Login
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Page content */}
      <main className="pt-20">
        {children}
      </main>
    </div>
  );
}