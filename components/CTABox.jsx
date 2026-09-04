"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createPageUrl } from "@/lib/utils";

export default function CTABox({
  heading,
  description,
  primaryButtonText = "Schedule a Walkthrough",
  secondaryButtonText = "Talk With Our Team",
  primaryButtonPage = "Contact",
  secondaryButtonPage = "Contact",
  onPrimaryClick,
  onSecondaryClick,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-blue-100 my-12"
    >
      <div className="max-w-3xl">
        <h3
          style={{ fontWeight: 400, fontSize: "32px", lineHeight: "1.3" }}
          className="text-slate-900 mb-4"
        >
          {heading}
        </h3>
        <p
          style={{ fontWeight: 400, fontSize: "16px", lineHeight: "1.7" }}
          className="text-slate-600 mb-8 max-w-2xl"
        >
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          {onPrimaryClick ? (
            <Button
              onClick={onPrimaryClick}
              className="bg-[#2563eb] hover:bg-blue-700 text-white rounded-full px-6 py-3"
              style={{ fontWeight: 400, fontSize: "15px" }}
            >
              {primaryButtonText}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          ) : (
            <Button
              asChild
              className="bg-[#2563eb] hover:bg-blue-700 text-white rounded-full px-6 py-3"
              style={{ fontWeight: 400, fontSize: "15px" }}
            >
              <Link href={createPageUrl(primaryButtonPage)}>
                {primaryButtonText}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          )}

          {onSecondaryClick ? (
            <Button
              onClick={onSecondaryClick}
              variant="outline"
              className="border-2 border-gray-300 bg-white hover:bg-gray-50 text-slate-700 rounded-full px-6 py-3"
              style={{ fontWeight: 400, fontSize: "15px" }}
            >
              {secondaryButtonText}
            </Button>
          ) : (
            <Button
              asChild
              variant="outline"
              className="border-2 border-gray-300 bg-white hover:bg-gray-50 text-slate-700 rounded-full px-6 py-3"
              style={{ fontWeight: 400, fontSize: "15px" }}
            >
              <a href="tel:+919790444939">{secondaryButtonText}</a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
