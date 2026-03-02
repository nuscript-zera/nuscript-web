import React from 'react';
import GenericHero from '../components/GenericHero';
import Footer from '../components/home/Footer';

export default function PrivacyPolicy() {
  const sections = [
    {
      title: 'Collection of Information',
      subsections: [
        {
          subtitle: 'Information you provide to us',
          content: 'We collect personal information that you voluntarily provide through our website, including:\n\n• Inquiry forms: When you submit an inquiry, we may collect your name, email address, organization, and any other information you choose to provide in the form or message.\n\n• Job applications: If you apply for a position, we collect your name, contact details (such as email address and phone number), and application materials (such as your resume, cover letter, and any additional information you submit as part of the hiring process).'
        },
        {
          subtitle: 'Information we collect automatically',
          content: 'At this time, our website does not intentionally use cookies or similar tracking technologies to collect personal information or track user behavior. We may receive basic technical information automatically transmitted by your browser (such as IP address and browser type), but we do not use this information to build user profiles or for marketing purposes.'
        },
        {
          subtitle: 'Information we collect from other sources',
          content: 'We do not obtain personal information about you from third‑party data brokers or similar external sources. All personal information we process is provided directly by you through our website forms, email, or job applications.'
        }
      ]
    },
    {
      title: 'Use of Information',
      content: 'We use the information we collect for the following purposes:\n\n• Inquiry responses: To respond to questions, requests, or messages submitted through our inquiry forms and to provide the information or services you requested.\n\n• Job applications: To review and process your application, assess your qualifications, and communicate with you about current or future employment opportunities.\n\n• Operational communication: To send administrative or operational communications, such as responses to inquiries, interview scheduling, or application‑related updates.\n\nWe do not use your personal information for unrelated marketing or advertising and do not send unsolicited promotional messages based on information collected through this website.'
    },
    {
      title: 'Sharing of Information',
      content: 'We do not sell or rent your personal information. We may share the information you provide only in the following limited situations:\n\n• Service providers: With trusted service providers who assist us in operating our website, managing email or job applications, or supporting our IT infrastructure (for example, hosting, email, or application management tools). These providers are permitted to use your information only to perform services on our behalf and are bound by appropriate confidentiality and security obligations.\n\n• Legal and compliance: When required to comply with applicable laws, regulations, legal processes, or enforceable governmental requests, or to protect our rights, privacy, safety, or property.\n\n• With your consent: When you explicitly authorize us to share your information for a specific purpose (for example, when coordinating with a recruitment partner or client contact at your request).'
    },
    {
      title: 'Security',
      content: 'We take reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, disclosure, alteration, or destruction. As a company operating under SOC 2 and HIPAA‑aligned controls, we apply security measures appropriate to the sensitivity of the information we handle.\n\nHowever, no method of transmission over the internet or method of electronic storage is completely secure, and we cannot guarantee absolute security of your information.'
    },
    {
      title: 'Your Choices and Rights',
      content: 'You may request to review, update, or delete personal information you have submitted to us by contacting us at contact@nuscript.net. We may need to retain certain information where required by law, for legitimate business purposes (such as record keeping or security), or to complete ongoing transactions.\n\nBecause we do not use tracking cookies or behavioral advertising tools on this site at this time, there are no cookie preferences you need to manage in connection with our website. If our use of cookies or tracking technologies changes in the future, we will update this Privacy Policy and, where required by law, provide appropriate notices or consent mechanisms.'
    },
    {
      title: 'Changes to This Policy',
      content: 'We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, or legal requirements. Any updates will be posted on this page, and the "Effective Date" and "last reviewed" date will indicate when the policy was last updated. Your continued use of the website after changes are posted will signify your acceptance of the updated policy.'
    },
    {
      title: 'Contact Us',
      content: 'If you have any questions or concerns about this Privacy Policy, or if you would like to access, correct, or request deletion of your personal information, please contact us at:\n\nNuScript Data Solutions Private Limited\nEmail: contact@nuscript.net'
    }
  ];

  return (
    <div>
      <GenericHero 
        title="Privacy Policy"
        description="We value your privacy and are committed to protecting your personal information."
        primaryButtonText="Contact Us"
        secondaryButtonText="Back Home"
        isSmall={true}
      />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <div className="mb-8">
          <p style={{ fontWeight: 500, fontSize: '14px' }} className="text-gray-600">
            Effective Date: April 2, 2023 (Updated January 18, 2026)
          </p>
        </div>

        <div className="mb-12">
          <p style={{ fontWeight: 400, fontSize: '16px', lineHeight: '1.8' }} className="text-gray-700">
            At NuScript Data Solutions Private Limited ("NuScript", "we", "us", or "our"), we value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and protect information when you interact with our website and related services as an India‑based, SOC 2 and HIPAA‑certified healthcare operations partner.
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h2 style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.3' }} className="text-[#222733] mb-4">
                {idx + 1}. {section.title}
              </h2>
              
              {section.subsections ? (
                <div className="space-y-6">
                  {section.subsections.map((subsection, subIdx) => (
                    <div key={subIdx}>
                      <h3 style={{ fontWeight: 600, fontSize: '16px' }} className="text-gray-800 mb-2">
                        {subsection.subtitle}
                      </h3>
                      <div style={{ fontWeight: 400, fontSize: '16px', lineHeight: '1.8' }} className="text-gray-700">
                        {subsection.content.split('\n').map((line, lineIdx) => {
                          if (line.trim().startsWith('•')) {
                            return (
                              <div key={lineIdx} className="flex gap-3 mb-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#6200EA] mt-2 flex-shrink-0" />
                                <span>{line.trim().substring(1).trim()}</span>
                              </div>
                            );
                          }
                          return line.trim() ? <p key={lineIdx} className="mb-2">{line}</p> : <div key={lineIdx} className="h-2" />;
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
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
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}