"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createPageUrl } from "@/lib/utils";

export default function GenericHero({
  title,
  subtitle,
  description,
  primaryButtonText = "Schedule a Demo",
  secondaryButtonText = "Talk With Our Team",
  primaryButtonPage = "Contact",
  secondaryButtonPage = "Contact",
  primaryButtonAction = null,
  secondaryButtonAction = null,
  isSmall = false,
  image = null,
  imageAlt = "",
}) {
  return (
    <section
      className={`relative flex items-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white ${
        isSmall ? "min-h-[60vh]" : "min-h-[80vh]"
      }`}
    >
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
            style={{ top: `${20 + i * 12}%`, left: `${10 + i * 15}%` }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className={image ? "grid lg:grid-cols-2 gap-12 items-center" : ""}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={image ? "" : "max-w-3xl"}
          >
            {subtitle && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/50 mb-8"
              >
                <span style={{ fontWeight: 500, fontSize: "14px" }} className="text-blue-700">
                  {subtitle}
                </span>
              </motion.div>
            )}

            <h1
              style={{
                fontWeight: 600,
                fontSize: image ? "52px" : "64px",
                letterSpacing: "-0.03em",
                lineHeight: "1.2",
              }}
              className="text-slate-900 mb-6"
            >
              {title}
            </h1>

            {description && (
              <p
                style={{ fontWeight: 400, fontSize: "18px", lineHeight: "1.6" }}
                className="text-slate-600 mb-10 max-w-2xl"
              >
                {description}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              {primaryButtonAction ? (
                <Button
                  onClick={primaryButtonAction}
                  size="lg"
                  className="bg-[#2563eb] hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                >
                  {primaryButtonText}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              ) : (
                <Button
                  asChild
                  size="lg"
                  className="bg-[#2563eb] hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                >
                  <Link href={createPageUrl(primaryButtonPage)}>
                    {primaryButtonText}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              )}

              {secondaryButtonAction ? (
                <Button
                  onClick={secondaryButtonAction}
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-200 hover:border-[#2563eb] hover:text-[#2563eb] px-8 py-6 text-lg rounded-xl transition-all duration-300"
                >
                  {secondaryButtonText}
                </Button>
              ) : (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-200 hover:border-[#2563eb] hover:text-[#2563eb] px-8 py-6 text-lg rounded-xl transition-all duration-300"
                >
                  <a href="tel:+919790444939">{secondaryButtonText}</a>
                </Button>
              )}
            </div>
          </motion.div>

          {image && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-teal-100/60 via-blue-100/40 to-indigo-100/30 rounded-[2rem] -rotate-2" />
              <div className="relative">
                <img
                  src={image}
                  alt={imageAlt}
                  className="relative z-10 rounded-2xl object-cover w-full h-[460px] shadow-xl"
                />
                <div className="absolute inset-0 z-10 rounded-2xl bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
                <div className="absolute inset-0 z-10 rounded-2xl ring-1 ring-inset ring-white/20" />
              </div>
              <div className="absolute left-0 top-12 bottom-12 w-1 z-20 rounded-full bg-gradient-to-b from-teal-400 via-blue-500 to-indigo-500" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
