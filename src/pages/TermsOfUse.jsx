import React from 'react';
import GenericHero from '../components/GenericHero';
import Footer from '../components/home/Footer';

export default function TermsOfUse() {
  const sections = [
    {
      title: 'Use of the Site',
      content: 'The Site is provided for general informational and marketing purposes regarding NuScript\'s clinical documentation, medical coding, and revenue cycle management services. You agree to use the Site only for lawful purposes and in accordance with these Terms.\n\nYou agree not to:\n\n• Use the Site in any way that violates applicable law or regulation.\n\n• Attempt to gain unauthorized access to any part of the Site, our systems, or any associated networks.\n\n• Use any robot, scraper, or other automated means to access the Site for any purpose without our prior written consent.'
    },
    {
      title: 'No Medical, Legal, or Financial Advice',
      content: 'Content on this Site is for informational purposes only and does not constitute medical, legal, financial, or compliance advice.\n\nYou should not rely on any information on the Site as a substitute for professional judgment, and you remain solely responsible for decisions relating to patient care, coding, billing, compliance, and operations.'
    },
    {
      title: 'Intellectual Property',
      content: 'All content on the Site—including text, graphics, logos, icons, images, and design elements—is owned by or licensed to NuScript and is protected by applicable copyright, trademark, and other intellectual property laws.\n\nYou may view, download, or print limited portions of the Site for your own internal, non‑commercial use, provided you do not remove any proprietary notices. Any other use, reproduction, distribution, modification, or creation of derivative works requires our prior written permission.\n\n"NuScript" and any associated logos or service names are trademarks or service marks of NuScript Data Solutions Private Limited or its affiliates. Unauthorized use is prohibited.'
    },
    {
      title: 'Privacy',
      content: 'Your use of the Site is also subject to our Privacy Policy, which explains how we collect, use, and protect personal information submitted through the Site. By using the Site, you acknowledge that you have read and understand our Privacy Policy.'
    },
    {
      title: 'Third‑Party Links',
      content: 'The Site may contain links to third‑party websites or resources for your convenience. These links do not imply endorsement or control by NuScript, and we are not responsible for the content, security, or practices of any third‑party sites. You access such sites at your own risk.'
    },
    {
      title: 'Disclaimers',
      content: 'The Site and its content are provided on an "as‑is" and "as‑available" basis without warranties of any kind, express or implied, including but not limited to warranties of accuracy, completeness, merchantability, fitness for a particular purpose, or non‑infringement.\n\nNuScript does not warrant that the Site will be uninterrupted, error‑free, secure, or free from viruses or other harmful components.'
    },
    {
      title: 'Limitation of Liability',
      content: 'To the maximum extent permitted by applicable law, NuScript and its directors, officers, employees, and agents will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of, or inability to use, the Site or its content, even if we have been advised of the possibility of such damages.\n\nOur total aggregate liability arising out of or relating to your use of the Site will not exceed the amount, if any, you paid to use the Site.'
    },
    {
      title: 'Indemnification',
      content: 'You agree to indemnify, defend, and hold harmless NuScript and its directors, officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys\' fees) arising out of or related to your use of the Site or any violation of these Terms.'
    },
    {
      title: 'Changes to the Site and These Terms',
      content: 'We may update, modify, or discontinue any part of the Site at any time without notice. We may also revise these Terms from time to time. When we do, we will update the Effective Date above. Your continued use of the Site after changes are posted constitutes your acceptance of the revised Terms.'
    },
    {
      title: 'Governing Law and Jurisdiction',
      content: 'These Terms and your use of the Site are governed by the laws of India, without regard to its conflict‑of‑laws principles. Any disputes arising out of or relating to these Terms or the Site shall be subject to the exclusive jurisdiction of the courts located in Coimbatore, Tamil Nadu, India, or another appropriate forum as determined by applicable law.'
    },
    {
      title: 'Contact Us',
      content: 'If you have questions about these Terms of Use, please contact us at:\n\nNuScript Data Solutions Private Limited\nEmail: contact@nuscript.net'
    }
  ];

  return (
    <div>
      <GenericHero 
        title="Terms of Use"
        description="Please read these Terms of Use carefully before using our website."
        primaryButtonText="Contact Us"
        secondaryButtonText="Back Home"
        isSmall={true}
      />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <div className="mb-8">
          <p style={{ fontWeight: 500, fontSize: '14px' }} className="text-gray-600">
            Effective Date: January 18, 2026
          </p>
        </div>

        <div className="mb-12">
          <p style={{ fontWeight: 400, fontSize: '16px', lineHeight: '1.8' }} className="text-gray-700">
            Welcome to the website of NuScript Data Solutions Private Limited ("NuScript", "we", "us", or "our"). By accessing or using this website (the "Site"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, please do not use the Site.
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h2 style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.3' }} className="text-[#222733] mb-4">
                {idx + 1}. {section.title}
              </h2>
              
              <div style={{ fontWeight: 400, fontSize: '16px', lineHeight: '1.8' }} className="text-gray-700">
                {section.content.split('\n').map((line, lineIdx) => {
                  if (line.trim().startsWith('•')) {
                    return (
                      <div key={lineIdx} className="flex gap-3 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6200EA] mt-2 flex-shrink-0" />
                        <span>{line.trim().substring(1).trim()}</span>
                      </div>
                    );
                  }
                  // Handle email links
                  if (line.includes('contact@nuscript.net')) {
                    const parts = line.split('contact@nuscript.net');
                    return (
                      <p key={lineIdx} className="mb-2">
                        {parts[0]}
                        <a href="mailto:contact@nuscript.net" className="text-[#6200EA] hover:underline">
                          contact@nuscript.net
                        </a>
                        {parts[1]}
                      </p>
                    );
                  }
                  return line.trim() ? <p key={lineIdx} className="mb-2">{line}</p> : <div key={lineIdx} className="h-2" />;
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}