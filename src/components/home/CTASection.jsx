import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function CTASection() {
  const [formData, setFormData] = useState({ name: '', email: '', organization: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span style={{ fontWeight: 500, fontSize: '14px' }} className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-[#2563eb] mb-6">
              Get Started
            </span>
            <h2 style={{ fontWeight: 700, fontSize: '36px' }} className="text-slate-900 mb-6">
              Ready to Transform
              <span className="block text-[#2563eb]">Your Operations?</span>
            </h2>
            <p style={{ fontWeight: 400, fontSize: '18px', lineHeight: '1.6' }} className="text-slate-600 mb-10">
              Let's discuss how NuScriptAI can reduce your documentation burden, improve coding quality, and accelerate your revenue cycle.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email us at', value: 'contact@nuscript.com' },
                { icon: Phone, label: 'Call us at', value: '+1 (800) 555-0123' },
                { icon: MapPin, label: 'Headquarters', value: 'India | Serving U.S. Healthcare' }
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#2563eb]" />
                  </div>
                  <div>
                    <p style={{ fontWeight: 500, fontSize: '14px' }} className="text-slate-600">{label}</p>
                    <p style={{ fontWeight: 700, fontSize: '16px' }} className="text-slate-900">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-2xl shadow-blue-500/10 border border-blue-100">
              <h3 style={{ fontWeight: 700, fontSize: '24px' }} className="text-slate-900 mb-6">Schedule a Demo</h3>
              
              <div className="space-y-5">
                <div>
                  <label style={{ fontWeight: 500, fontSize: '14px' }} className="block text-slate-600 mb-2">Your Name</label>
                  <Input type="text" placeholder="John Smith" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full h-12 rounded-xl border-gray-200 focus:border-[#2563eb] focus:ring-[#2563eb]" />
                </div>
                <div>
                  <label style={{ fontWeight: 500, fontSize: '14px' }} className="block text-slate-600 mb-2">Email Address</label>
                  <Input type="email" placeholder="john@healthcare.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full h-12 rounded-xl border-gray-200 focus:border-[#2563eb] focus:ring-[#2563eb]" />
                </div>
                <div>
                  <label style={{ fontWeight: 500, fontSize: '14px' }} className="block text-slate-600 mb-2">Organization</label>
                  <Input type="text" placeholder="Healthcare Practice Name" value={formData.organization} onChange={(e) => setFormData({ ...formData, organization: e.target.value })} className="w-full h-12 rounded-xl border-gray-200 focus:border-[#2563eb] focus:ring-[#2563eb]" />
                </div>
                <div>
                  <label style={{ fontWeight: 500, fontSize: '14px' }} className="block text-slate-600 mb-2">Tell us about your needs</label>
                  <Textarea placeholder="What services are you interested in?" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full h-32 rounded-xl border-gray-200 focus:border-[#2563eb] focus:ring-[#2563eb] resize-none" />
                </div>
                <Button type="submit" size="lg" style={{ fontWeight: 700 }} className="w-full bg-[#2563eb] hover:bg-blue-700 text-white py-6 text-base rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300">
                  Request Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              <p style={{ fontWeight: 500, fontSize: '13px' }} className="text-center text-slate-600 mt-6">
                We'll respond within 24 hours
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}