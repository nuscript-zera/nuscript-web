"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createPageUrl } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white">
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

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 border border-blue-200/50 mb-8"
            >
              <Shield className="w-4 h-4 text-blue-600" />
              <span style={{ fontWeight: 500, fontSize: "14px" }} className="text-blue-700">
                HIPAA Compliant · SOC 2 Aligned
              </span>
            </motion.div>

            <h1
              style={{
                fontWeight: 600,
                fontSize: "clamp(36px, 8vw, 64px)",
                letterSpacing: "-0.03em",
              }}
              className="text-slate-900 leading-tight mb-6"
            >
              Clinical Documentation
              <span className="block mt-2">
                <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  &amp; Revenue Cycle Services
                </span>
              </span>
            </h1>

            <p
              style={{ fontWeight: 400, fontSize: "18px", lineHeight: "1.6" }}
              className="text-slate-600 mb-10 max-w-xl"
            >
              25+ years of healthcare documentation expertise. From medical
              transcription and scribing to coding and RCM — NuScript delivers
              accurate documentation, cleaner claims, and faster revenue for
              U.S. healthcare providers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#2563eb] hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
              >
                <Link href={createPageUrl("Contact")}>
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-gray-200 hover:border-[#2563eb] hover:text-[#2563eb] px-8 py-6 text-lg rounded-xl transition-all duration-300"
              >
                <Link href={createPageUrl("About")}>Learn About Us</Link>
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 pt-8 border-t border-gray-100"
            >
              <p style={{ fontWeight: 500, fontSize: "14px" }} className="text-slate-600 mb-4">
                Trusted by healthcare providers across the U.S.
              </p>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <p style={{ fontWeight: 600, fontSize: "32px" }} className="text-slate-900">
                    25+
                  </p>
                  <p style={{ fontWeight: 500, fontSize: "14px" }} className="text-slate-600">
                    Years Experience
                  </p>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div className="text-center">
                  <p style={{ fontWeight: 600, fontSize: "32px" }} className="text-slate-900">
                    99.5%
                  </p>
                  <p style={{ fontWeight: 500, fontSize: "14px" }} className="text-slate-600">
                    Accuracy
                  </p>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div className="text-center">
                  <p style={{ fontWeight: 600, fontSize: "32px" }} className="text-slate-900">
                    40+
                  </p>
                  <p style={{ fontWeight: 500, fontSize: "14px" }} className="text-slate-600">
                    Specialties
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-teal-100/60 via-blue-100/40 to-indigo-100/30 rounded-[2rem] -rotate-2" />

            <div className="relative">
              <img
                src="/healthtech.webp"
                alt="Healthcare professional caring for patient"
                className="relative z-10 rounded-2xl object-cover w-full h-[520px] shadow-xl"
              />
              <div className="absolute inset-0 z-10 rounded-2xl bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
              <div className="absolute inset-0 z-10 rounded-2xl ring-1 ring-inset ring-white/20" />
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 -right-3 z-20 bg-white rounded-2xl px-5 py-3 shadow-lg shadow-blue-500/10 border border-blue-100/50"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: "16px" }} className="text-slate-900">
                    99.5%
                  </p>
                  <p style={{ fontWeight: 500, fontSize: "11px" }} className="text-slate-500">
                    Accuracy Rate
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-3 -left-3 z-20 bg-white rounded-2xl px-5 py-3 shadow-lg shadow-blue-500/10 border border-blue-100/50"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: "16px" }} className="text-slate-900">
                    HIPAA
                  </p>
                  <p style={{ fontWeight: 500, fontSize: "11px" }} className="text-slate-500">
                    Fully Compliant
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="absolute left-0 top-12 bottom-12 w-1 z-20 rounded-full bg-gradient-to-b from-teal-400 via-blue-500 to-indigo-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
