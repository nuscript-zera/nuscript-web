import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, BarChart3, Shield } from 'lucide-react';
import GenericHero from '@/components/GenericHero';
import CTABox from '@/components/CTABox';
import Footer from '@/components/home/Footer';

export default function RevenueCycleManagement() {
  const workflowSteps = [
    {
      number: '01',
      title: 'Charge Capture',
      description: 'NuScriptAI-powered documentation ensures no billable service is missed. Accurate, complete clinical records translate directly to accurate charge capture.'
    },
    {
      number: '02',
      title: 'Claims Processing',
      description: 'Automated claims submission with intelligent verification of completeness and compliance before sending to payers, reducing rejections and accelerating payment.'
    },
    {
      number: '03',
      title: 'AR Management',
      description: 'Real-time visibility into accounts receivable with automated follow-up protocols, denial management, and priority escalation for aging claims.'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Accelerated Collections',
      description: 'Faster claim processing and AR follow-up mean cash flow reaches your account sooner.'
    },
    {
      icon: BarChart3,
      title: 'Reduced Denials',
      description: 'Accurate documentation and automated compliance checks minimize claim rejections and rework.'
    },
    {
      icon: Shield,
      title: 'Payer Compliance',
      description: 'Every claim meets payer requirements with proper coding, documentation, and audit support.'
    },
    {
      icon: CheckCircle2,
      title: 'Complete Visibility',
      description: 'Real-time dashboards and reporting give you full insight into your revenue cycle performance.'
    },
    {
      icon: TrendingUp,
      title: 'Cost Efficiency',
      description: 'Reduce manual billing staff requirements while improving accuracy and throughput.'
    },
    {
      icon: BarChart3,
      title: 'Strategic Analytics',
      description: 'Data-driven insights to identify improvement opportunities and optimize revenue.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-violet-50/30 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-violet-200/40 to-purple-300/20 blur-3xl"
        />
      </div>

      <div className="relative">
        <GenericHero 
          title={<>From Documentation<span className="block text-[#6200EA]">to Cash Collected</span></>}
          subtitle="Revenue Cycle Management"
          description="End-to-end RCM services from charge capture to AR follow-up, powered by intelligent automation and expert teams. Maximize collections while minimizing denials."
          primaryButtonText="Schedule a Demo"
          secondaryButtonText="Talk With Our Team"
          isSmall={true}
        />

        {/* Workflow Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 style={{ fontWeight: 700, fontSize: '36px', lineHeight: '1.3' }} className="text-[#222733] mb-6">
              The Complete RCM Workflow
            </h2>
            <p style={{ fontWeight: 400, fontSize: '16px', lineHeight: '1.6' }} className="text-gray-700 max-w-2xl mx-auto">
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
                <div className="text-4xl font-bold text-[#6200EA] mb-4" style={{ fontWeight: 800 }}>
                  {step.number}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '20px' }} className="text-[#222733] mb-3">
                  {step.title}
                </h3>
                <p style={{ fontWeight: 400, fontSize: '16px', lineHeight: '1.6' }} className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gradient-to-br from-violet-50 to-blue-50 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 style={{ fontWeight: 700, fontSize: '36px', lineHeight: '1.3' }} className="text-[#222733] mb-6">
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
                    <h3 style={{ fontWeight: 700, fontSize: '18px' }} className="text-[#222733] mb-2">
                      {benefit.title}
                    </h3>
                    <p style={{ fontWeight: 400, fontSize: '14px', lineHeight: '1.6' }} className="text-gray-600">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <CTABox 
            heading="Ready to Transform Your Revenue Cycle?"
            description="Let's discuss how NuScript's RCM services can help you collect more revenue, reduce denials, and accelerate your cash flow."
            primaryButtonText="Schedule a Demo"
            secondaryButtonText="Talk With Our Team"
          />
        </section>
      </div>

      <Footer />
    </div>
  );
}