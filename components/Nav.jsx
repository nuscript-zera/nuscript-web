"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createPageUrl } from "@/lib/utils";

const navigation = [
  {
    name: "Services",
    page: null,
    children: [
      { name: "Clinical Documentation", page: "ClinicalDocumentation" },
      { name: "Medico-Legal Transcription", page: "MedicoLegalTranscription" },
      { name: "Medical Coding", page: "MedicalCoding" },
      { name: "Revenue Cycle Management", page: "RevenueCycleManagement" },
    ],
  },
  { name: "About", page: "About" },
  { name: "Contact", page: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const isActive = (page) => pathname === createPageUrl(page);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href={createPageUrl("Home")} className="flex items-center gap-2">
            <img src="/nds.logo.webp" alt="NuScript" className="h-10 w-auto" />
          </Link>

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
                    href={createPageUrl(item.page)}
                    style={{ fontWeight: 500, fontSize: "16px" }}
                    className={`flex items-center gap-1 transition-colors ${
                      isActive(item.page)
                        ? "text-[#2563eb]"
                        : "text-gray-700 hover:text-[#2563eb]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    style={{ fontWeight: 500, fontSize: "16px" }}
                    className="flex items-center gap-1 transition-colors text-gray-700 hover:text-[#2563eb]"
                  >
                    {item.name}
                    {item.children && <ChevronDown className="w-4 h-4" />}
                  </button>
                )}

                {item.children && (
                  <div className="group">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={
                        activeDropdown === item.name
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 10, pointerEvents: "none" }
                      }
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-xl shadow-violet-500/10 border border-gray-100 py-2 overflow-hidden z-50"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={createPageUrl(child.page)}
                          onClick={() => setActiveDropdown(null)}
                          style={{ fontWeight: 400, fontSize: "14px" }}
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

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://app.audryl.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                style={{ fontWeight: 400, fontSize: "14px" }}
                className="bg-[#2563eb] hover:bg-blue-700 text-white rounded-xl px-6"
              >
                Login
              </Button>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.page ? (
                    <Link
                      href={createPageUrl(item.page)}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-3 text-lg font-medium ${
                        isActive(item.page) ? "text-[#2563eb]" : "text-gray-700"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div className="block py-3 text-lg font-medium text-gray-700">
                      {item.name}
                    </div>
                  )}
                  {item.children && (
                    <div className="pl-4 space-y-2 mt-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={createPageUrl(child.page)}
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
                <a
                  href="https://app.audryl.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
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
  );
}
