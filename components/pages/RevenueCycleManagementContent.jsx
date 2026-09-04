"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, BarChart3, Shield } from "lucide-react";
import GenericHero from "@/components/GenericHero";
import CTABox from "@/components/CTABox";

export default function RevenueCycleManagementContent() {
  const workflowSteps = [
    {
      number: "01",
      title: "Charge Capture",
      description:
        "Accurate, complete clinical documentation ensures no billable service is missed. Our documentation teams feed directly into clean charge capture.",
    },
    {
      number: "02",
      title: "Claims Processing",
      description:
        "Intelligent claims submission with verification of completeness and compliance before sending to payers, reducing rejections and accelerating payment.",
    },
    {
      number: "03",
      title: "AR Management",
      description:
        "Real-time visibility into accounts receivable with systematic follow-up protocols, denial management, and priority escalation for aging claims.",
    },
  ];

  const benefits = [
    { icon: TrendingUp, title: "Accelerated Collections", description: "Faster claim processing and AR follow-up mean cash flow reaches your account sooner." },
    { icon: BarChart3, title: "Reduced Denials", description: "Accurate documentation and compliance checks minimize claim rejections and rework." },
    { icon: Shield, title: "Payer Compliance", description: "Every claim meets payer requirements with proper coding, documentation, and audit support." },
    { icon: CheckCircle2, title: "Complete Visibility", description: "Real-time dashboards and reporting give you full insight into your revenue cycle performance." },
    { icon: TrendingUp, title: "Cost Efficiency", description: "Reduce manual billing staff requirements while improving accuracy and throughput." },
    { icon: BarChart3, title: "Strategic Analytics", description: "Data-driven insights to identify improvement opportunities and optimize revenue." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-violet-50/30 to-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-violet-200/40 to-purple-300/20 blur-3xl"
        />
      </div>

      <div className="relative">
        <GenericHero
          title={
            <>
              From Documentation
              <span className="block text-[#6200EA]">to Cash Collected</span>
            </>
          }
          subtitle="Revenue Cycle Management"
          description="End-to-end RCM services from charge capture to AR follow-up. Our expert teams and intelligent workflows maximize collections while minimizing denials."
          primaryButtonText="Schedule a Consultation"
          secondaryButtonText="Talk With Our Team"
          isSmall={true}
          image="/rcm.webp"
          imageAlt="Clinical team reviewing patient records"
        />

        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 style={{ fontWeight: 500, fontSize: "36px", lineHeight: "1.3" }} className="text-[#222733] mb-6">
              The Complete RCM Workflow
            </h2>
            <p style={{ fontWeight: 400, fontSize: "16px", lineHeight: "1.6" }} className="text-gray-700 max-w-2xl mx-auto">
              Streamlined processes at every step of your revenue cycle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workflowSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-violet-200 hover:shadow-lg transition-all"
              >
                <div className="text-4xl font-semibold text-[#6200EA] mb-4" style={{ fontWeight: 400 }}>
                  {step.number}
                </div>
                <h3 style={{ fontWeight: 500, fontSize: "20px" }} className="text-[#222733] mb-3">
                  {step.title}
                </h3>
                <p style={{ fontWeight: 400, fontSize: "16px", lineHeight: "1.6" }} className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-br from-violet-50 to-blue-50 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 style={{ fontWeight: 500, fontSize: "36px", lineHeight: "1.3" }} className="text-[#222733] mb-6">
                Why Healthcare Organizations Choose NuScript RCM
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-white rounded-2xl p-6 border border-gray-100"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#6200EA]" />
                    </div>
                    <h3 style={{ fontWeight: 500, fontSize: "18px" }} className="text-[#222733] mb-2">
                      {benefit.title}
                    </h3>
                    <p style={{ fontWeight: 400, fontSize: "14px", lineHeight: "1.6" }} className="text-gray-600">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <CTABox
            heading="Ready to Transform Your Revenue Cycle?"
            description="Let's discuss how NuScript's RCM services can help you collect more revenue, reduce denials, and accelerate your cash flow."
            primaryButtonText="Schedule a Consultation"
            secondaryButtonText="Talk With Our Team"
          />
        </section>
      </div>
    </div>
  );
}
