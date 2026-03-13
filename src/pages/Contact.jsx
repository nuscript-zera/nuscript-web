import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GenericHero from '@/components/GenericHero';
import Footer from '@/components/home/Footer';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    needs: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.needs) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    try {
      const subject = encodeURIComponent(`Demo Request from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization || 'Not provided'}\n\nNeeds:\n${formData.needs}`
      );
      window.location.href = `mailto:contact@nuscript.net?subject=${subject}&body=${body}`;
      
      toast.success('Opening your email client...');
      setFormData({ name: '', email: '', organization: '', needs: '' });
    } catch (error) {
      toast.error('Failed to open email client. Please email us directly at contact@nuscript.net.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: ["General Inquiries: contact@nuscript.net", "Opportunities: careers@nuscript.net"],
      gradient: "from-violet-500 to-purple-600"
    },
    {
      icon: MapPin,
      title: "Tamil Nadu, India",
      company: "NuScript Data Solutions Private Limited",
      details: [
        "Tristar Towers, 3rd Floor, East Wing",
        "657 Avinashi Road, Coimbatore 641037"
      ],
      phone: "+91-422-496-0077",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      icon: MapPin,
      title: "Texas, United States",
      company: "NuScript Systems, Inc.",
      details: [
        "5900 Balcones Drive, Ste 11995",
        "Austin, TX 78731"
      ],
      phone: "+1-469-242-0709",
      gradient: "from-purple-500 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <GenericHero 
        title="Get in Touch"
        description="We're here to help. Reach out to our team with any questions about NuScriptAI and how we can transform your healthcare operations."
        primaryButtonText="Schedule a Demo"
        secondaryButtonText="Call Us"
        isSmall={true}
      />

      {/* Contact Info Cards Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 -mt-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-blue-100 shadow-lg shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center mb-4`}>
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <h3 style={{ fontWeight: 700, fontSize: '18px' }} className="text-[#222733] mb-2">
                {info.title}
              </h3>
              {info.company && (
                <p style={{ fontWeight: 600, fontSize: '14px' }} className="text-gray-700 mb-2">
                  {info.company}
                </p>
              )}
              <div className="space-y-2">
                {info.details.map((detail, i) => {
                   const [label, email] = detail.split(': ');
                   return (
                     <p key={i} style={{ fontWeight: 400, fontSize: '14px' }} className="text-gray-600">
                       {email ? (
                         <><span style={{ fontWeight: 600 }}>{label}:</span> <a href={`mailto:${email}`} className="text-[#2563eb] hover:underline">{email}</a></>
                       ) : detail}
                     </p>
                   );
                 })}
              </div>
              {info.phone && (
                <p style={{ fontWeight: 600, fontSize: '14px' }} className="text-[#2563eb] mt-3">
                  {info.phone}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Schedule Demo Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span style={{ fontWeight: 500, fontSize: '12px' }} className="inline-block px-3 py-1.5 rounded-full bg-blue-100 text-[#2563eb] mb-6">
                  Get Started
                </span>
                <h2 style={{ fontWeight: 700, fontSize: '40px', lineHeight: '1.2' }} className="text-[#222733]">
                  Ready to Transform<br />
                  <span className="text-[#2563eb]">Your Operations?</span>
                </h2>
              </div>

              <p style={{ fontWeight: 400, fontSize: '16px', lineHeight: '1.6' }} className="text-gray-700 max-w-md">
                Let's discuss how NuScriptAI can reduce your documentation burden, improve coding quality, and accelerate your revenue cycle.
              </p>
            </motion.div>

            {/* Right side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 border border-blue-100 shadow-lg shadow-blue-500/10"
            >
              <h3 style={{ fontWeight: 700, fontSize: '20px' }} className="text-[#222733] mb-4">
                Schedule a Demo
              </h3>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label style={{ fontWeight: 500, fontSize: '12px' }} className="block text-gray-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#2563eb] transition-colors"
                  />
                </div>

                <div>
                  <label style={{ fontWeight: 500, fontSize: '12px' }} className="block text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="john@healthcare.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#2563eb] transition-colors"
                  />
                </div>

                <div>
                  <label style={{ fontWeight: 500, fontSize: '12px' }} className="block text-gray-700 mb-1">
                    Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Healthcare Practice Name"
                    value={formData.organization}
                    onChange={(e) => setFormData({...formData, organization: e.target.value})}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#2563eb] transition-colors"
                  />
                </div>

                <div>
                  <label style={{ fontWeight: 500, fontSize: '12px' }} className="block text-gray-700 mb-1">
                    Tell us about your needs <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    placeholder="What services are you interested in?"
                    value={formData.needs}
                    onChange={(e) => setFormData({...formData, needs: e.target.value})}
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#2563eb] transition-colors resize-none h-20"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2563eb] hover:bg-blue-700 text-white rounded-lg py-2 flex items-center justify-center gap-2 mt-2"
                  style={{ fontWeight: 700, fontSize: '14px' }}
                >
                  {isSubmitting ? 'Sending...' : 'Request Demo'}
                  {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                </Button>

                <p style={{ fontWeight: 500, fontSize: '12px' }} className="text-gray-500 text-center mt-2">
                  We'll respond within 24 hours
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}