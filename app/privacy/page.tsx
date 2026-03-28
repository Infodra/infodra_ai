import { Metadata } from 'next'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Infodra AI',
  description: 'Privacy Policy for Infodra Technologies Private Limited - Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Last Updated: March 8, 2026
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Infodra Technologies Private Limited ("<strong>Infodra</strong>", "<strong>we</strong>", "<strong>us</strong>", or "<strong>our</strong>") 
              respects your privacy and is committed to protecting the personal information you share with us through our website{' '}
              <a href="https://infodra.ai" className="text-primary-600 dark:text-primary-400 hover:underline">
                infodra.ai
              </a>{' '}
              (the "<strong>Website</strong>").
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Website 
              or use our services. By accessing or using our Website, you acknowledge that you have read, understood, and agree to be 
              bound by this Privacy Policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              2. Information We Collect
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              We may collect various types of information from and about users of our Website, including:
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
              2.1 Personal Information
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              When you interact with our Website or contact us, we may collect:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
              <li><strong>Name</strong></li>
              <li><strong>Email address</strong></li>
              <li><strong>Company name and information</strong></li>
              <li><strong>Job title and professional details</strong></li>
              <li><strong>Phone number</strong> (if provided voluntarily)</li>
              <li><strong>Messages or inquiries</strong> submitted through contact forms or email</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
              2.2 Technical and Usage Data
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              We may automatically collect certain technical information when you visit our Website:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>IP address</strong> and approximate geographic location</li>
              <li><strong>Browser type and version</strong></li>
              <li><strong>Operating system</strong></li>
              <li><strong>Device information</strong></li>
              <li><strong>Referring website URLs</strong></li>
              <li><strong>Pages visited and time spent on pages</strong></li>
              <li><strong>Cookies and similar tracking technologies</strong></li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              3. How We Use Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Infodra uses the information we collect for legitimate business purposes, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                <strong>Responding to inquiries:</strong> To communicate with you and respond to your questions, 
                comments, or requests for information about our AI engineering services, software development, 
                CAD engineering services, and technical talent deployment.
              </li>
              <li>
                <strong>Providing services:</strong> To deliver and manage our services, including access to our 
                AI-powered SaaS platforms such as ParkAlert, BizLead, AI Assistant, and StaffTrack.
              </li>
              <li>
                <strong>Improving website performance:</strong> To analyze how users interact with our Website, 
                optimize user experience, and improve our content and services.
              </li>
              <li>
                <strong>Business communications:</strong> To inform you about our services, partnerships, 
                updates, newsletters, and promotional materials (where you have consented to receive such communications).
              </li>
              <li>
                <strong>Security and fraud prevention:</strong> To maintain the security and integrity of our 
                Website and services, prevent fraud, and comply with legal obligations.
              </li>
              <li>
                <strong>Legal compliance:</strong> To comply with applicable laws, regulations, and legal processes.
              </li>
            </ul>
          </section>

          {/* Sharing of Information */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              4. Sharing of Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Infodra does not sell, rent, or trade your personal information to third parties. We may share your 
              information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                <strong>Service Providers:</strong> We may share information with trusted third-party service 
                providers who assist us in operating our Website, conducting our business, or providing services 
                to you (e.g., hosting providers, email service providers, analytics platforms). These providers 
                are obligated to keep your information confidential and secure.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger, acquisition, reorganization, or 
                sale of assets, your information may be transferred as part of that transaction.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your information when required by law, 
                regulation, legal process, or governmental request, or to protect the rights, property, or 
                safety of Infodra, our users, or others.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may share your information with third parties when you 
                have given us explicit consent to do so.
              </li>
            </ul>
          </section>

          {/* Cookies and Tracking Technologies */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              5. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Our Website uses cookies and similar tracking technologies to enhance your browsing experience, 
              understand how you interact with our Website, and improve our services.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
              What are Cookies?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Cookies are small text files placed on your device by websites you visit. They help websites 
              remember your preferences and enable certain functionality.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
              Types of Cookies We Use:
            </h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
              <li>
                <strong>Essential Cookies:</strong> Required for the Website to function properly (e.g., security, 
                authentication).
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how visitors use our Website (e.g., page 
                views, navigation patterns).
              </li>
              <li>
                <strong>Functionality Cookies:</strong> Remember your preferences and settings (e.g., language, 
                theme preferences).
              </li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              You can control or disable cookies through your browser settings. However, disabling cookies may 
              affect your ability to use certain features of our Website.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              6. Data Security
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Infodra takes the security of your personal information seriously. We implement reasonable technical 
              and organizational measures to protect your data from unauthorized access, disclosure, alteration, 
              or destruction.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              These measures include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
              <li>Encryption of data in transit and at rest where appropriate</li>
              <li>Secure hosting environments and server infrastructure</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Regular security assessments and updates</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              However, please note that no method of transmission over the internet or electronic storage is 
              100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Third-Party Links */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              7. Third-Party Links
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Our Website may contain links to third-party websites, services, or resources that are not operated 
              by Infodra. These links are provided for your convenience and information.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We are not responsible for the privacy practices, content, or policies of any third-party websites. 
              We encourage you to review the privacy policies of any third-party sites you visit before providing 
              any personal information.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              8. Data Retention
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Infodra retains personal information only for as long as necessary to fulfill the purposes outlined 
              in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              When determining the appropriate retention period, we consider factors such as:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mt-3">
              <li>The nature and sensitivity of the information</li>
              <li>The purposes for which we collected the information</li>
              <li>Legal, regulatory, or contractual obligations</li>
              <li>The need to resolve disputes or enforce agreements</li>
            </ul>
          </section>

          {/* User Rights */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              9. Your Rights and Choices
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Depending on your location and applicable laws, you may have certain rights regarding your personal 
              information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
              <li>
                <strong>Access:</strong> You may request access to the personal information we hold about you.
              </li>
              <li>
                <strong>Correction:</strong> You may request that we correct or update inaccurate or incomplete 
                personal information.
              </li>
              <li>
                <strong>Deletion:</strong> You may request that we delete your personal information, subject to 
                certain exceptions (e.g., legal obligations).
              </li>
              <li>
                <strong>Opt-Out:</strong> You may opt out of receiving promotional communications from us by 
                following the unsubscribe instructions in those communications or by contacting us directly.
              </li>
              <li>
                <strong>Data Portability:</strong> You may request a copy of your personal information in a 
                structured, machine-readable format.
              </li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To exercise any of these rights, please contact us at the email address provided in Section 10 below. 
              We will respond to your request within a reasonable timeframe and in accordance with applicable laws.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              10. Contact Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, 
              please contact us:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <p className="text-gray-900 dark:text-white font-semibold mb-2">
                Infodra Technologies Private Limited
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-1">
                Email:{' '}
                <a 
                  href="mailto:connect@infodratech.com" 
                  className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
                >
                  connect@infodratech.com
                </a>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Website:{' '}
                <a 
                  href="https://infodra.ai" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
                >
                  infodra.ai
                </a>
              </p>
            </div>
          </section>

          {/* Policy Updates */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              11. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Infodra may update this Privacy Policy from time to time to reflect changes in our practices, 
              technologies, legal requirements, or other factors. When we make changes, we will update the 
              "Last Updated" date at the top of this page.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              We encourage you to review this Privacy Policy periodically to stay informed about how we are 
              protecting your information. Your continued use of our Website after any changes to this Privacy 
              Policy constitutes your acceptance of those changes.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              If we make material changes to this Privacy Policy that significantly affect your rights, we will 
              provide additional notice through our Website or by email where appropriate.
            </p>
          </section>

          {/* Closing */}
          <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 text-sm italic">
              Thank you for trusting Infodra Technologies with your information. We are committed to maintaining 
              that trust through transparent and responsible privacy practices.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
