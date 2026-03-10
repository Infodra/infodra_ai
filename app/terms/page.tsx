import { Metadata } from 'next'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service | Infodra AI',
  description: 'Terms of Service for Infodra Technologies Private Limited - Read our terms and conditions for using our website and services.',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Terms of Service
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
              Welcome to{' '}
              <a href="https://infodra.ai" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
                infodra.ai
              </a>{' '}
              (the "<strong>Website</strong>"), operated by Infodra Technologies Private Limited 
              ("<strong>Infodra</strong>", "<strong>we</strong>", "<strong>us</strong>", or "<strong>our</strong>").
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              These Terms of Service ("<strong>Terms</strong>") govern your access to and use of our Website and any 
              related digital platforms, services, or products provided by Infodra Technologies. By accessing or using 
              our Website, you acknowledge that you have read, understood, and agree to be bound by these Terms.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              If you do not agree with these Terms, you must not access or use our Website or services. We reserve 
              the right to modify these Terms at any time, and your continued use of the Website constitutes acceptance 
              of any changes.
            </p>
          </section>

          {/* Services Provided */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              2. Services Provided
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Infodra Technologies Private Limited is a technology consulting and development company specializing in:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
              <li>
                <strong>AI Engineering Services:</strong> Design, development, and deployment of artificial intelligence 
                and machine learning solutions.
              </li>
              <li>
                <strong>Software Development:</strong> Full-stack development, web platforms, SaaS products, and 
                enterprise applications.
              </li>
              <li>
                <strong>CAD Engineering Services:</strong> Mechanical design, CAD drafting, and engineering design 
                support for automotive, manufacturing, and industrial sectors.
              </li>
              <li>
                <strong>Technical Talent Deployment:</strong> Providing skilled engineers, developers, and technical 
                professionals for enterprise projects on a contract or permanent basis.
              </li>
              <li>
                <strong>Digital Platforms and SaaS Products:</strong> Development and operation of AI-powered platforms 
                including ParkAlert, BizLead, AI Assistant, and StaffTrack.
              </li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our Website serves as an information portal for these services. Specific service engagements require 
              separate agreements as outlined in Section 5 below.
            </p>
          </section>

          {/* Use of the Website */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              3. Use of the Website
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              By using our Website, you agree to comply with all applicable laws and regulations. You agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
              <li>Use the Website for any unlawful purpose or in violation of these Terms.</li>
              <li>
                Attempt to gain unauthorized access to our systems, networks, or any other user's account or information.
              </li>
              <li>
                Transmit any harmful code, viruses, malware, or any other technology that may damage or interfere with 
                the Website or other users' devices.
              </li>
              <li>
                Engage in any activity that disrupts or interferes with the operation of the Website, including 
                denial-of-service attacks or excessive automated requests.
              </li>
              <li>
                Use the Website to collect or harvest personal information about other users without their consent.
              </li>
              <li>
                Impersonate any person or entity, or falsely represent your affiliation with any person or organization.
              </li>
              <li>
                Post or transmit any defamatory, offensive, fraudulent, or otherwise inappropriate content.
              </li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Violation of these provisions may result in immediate termination of your access to the Website and may 
              subject you to legal action.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              4. Intellectual Property
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              All content, materials, and intellectual property on this Website, including but not limited to text, 
              graphics, logos, images, trademarks, service marks, software code, design elements, and documentation, 
              are the exclusive property of Infodra Technologies Private Limited or its licensors.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              This content is protected by copyright, trademark, patent, trade secret, and other intellectual property 
              laws. You may not:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
              <li>Copy, reproduce, distribute, or publicly display any content from the Website without prior written permission.</li>
              <li>Modify, reverse engineer, decompile, or create derivative works based on our Website or services.</li>
              <li>Use our trademarks, logos, or branding without explicit authorization.</li>
              <li>Remove or alter any copyright, trademark, or other proprietary notices from materials obtained from the Website.</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Limited license is granted to view and use the Website for personal, non-commercial purposes only. Any 
              commercial use or reproduction requires prior written consent from Infodra Technologies.
            </p>
          </section>

          {/* Service Engagement */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              5. Service Engagement
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Use of this Website does not constitute a contractual relationship for professional services. Any 
              engagement for engineering services, software development, technical staffing, or other professional 
              services requires a separate written agreement between Infodra Technologies Private Limited and the client.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Such agreements will specify:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
              <li>Scope of work and deliverables</li>
              <li>Project timelines and milestones</li>
              <li>Pricing, payment terms, and invoicing</li>
              <li>Intellectual property ownership and licensing</li>
              <li>Confidentiality and non-disclosure obligations</li>
              <li>Warranties, liability limitations, and indemnification</li>
              <li>Termination conditions and dispute resolution procedures</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Information provided on the Website is for general informational purposes only and should not be 
              considered professional advice. For specific project requirements or consultations, please contact us 
              at{' '}
              <a href="mailto:connect@infodra.ai" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
                connect@infodra.ai
              </a>.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              To the fullest extent permitted by applicable law, Infodra Technologies Private Limited, its officers, 
              directors, employees, agents, and affiliates shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages arising out of or related to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
              <li>Your access to or use of (or inability to access or use) the Website or services;</li>
              <li>Any content, products, or services obtained through the Website;</li>
              <li>Unauthorized access to or alteration of your data or communications;</li>
              <li>Loss of data, revenue, profits, or business opportunities;</li>
              <li>Errors, mistakes, or inaccuracies in content or materials on the Website;</li>
              <li>Personal injury or property damage resulting from your use of the Website.</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The Website and all content are provided on an "<strong>as is</strong>" and "<strong>as available</strong>" 
              basis without warranties of any kind, either express or implied, including but not limited to warranties 
              of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              In jurisdictions that do not allow the exclusion of certain warranties or limitations of liability, 
              our liability shall be limited to the maximum extent permitted by law.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              7. Third-Party Services and Links
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Our Website may contain links to third-party websites, applications, services, or resources that are not 
              owned or controlled by Infodra Technologies. These links are provided for your convenience and reference.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              We do not endorse, monitor, or assume responsibility for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
              <li>The content, privacy policies, or practices of any third-party websites or services;</li>
              <li>Any products, services, or information offered by third parties;</li>
              <li>The accuracy, completeness, or reliability of third-party content;</li>
              <li>Any damages or losses arising from your interactions with third-party sites.</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Your use of third-party websites and services is at your own risk, and you should review their terms 
              and privacy policies before engaging with them.
            </p>
          </section>

          {/* Confidentiality */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              8. Confidentiality
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Infodra Technologies values the confidentiality of information shared during business engagements and 
              project discussions.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
              Client Confidentiality
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              When you share proprietary information, project details, technical specifications, or business strategies 
              with Infodra Technologies, we commit to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
              <li>Treating all client information as confidential;</li>
              <li>Using such information solely for the purpose of delivering services;</li>
              <li>Protecting information with reasonable security measures;</li>
              <li>Not disclosing information to third parties without prior written consent, except where required by law.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
              Mutual Confidentiality
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              For formal engagements, both parties agree to maintain confidentiality of proprietary and sensitive 
              information exchanged during the project lifecycle. Specific confidentiality terms will be outlined 
              in separate Non-Disclosure Agreements (NDAs) or service contracts as appropriate.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Confidential information does not include data that is publicly available, lawfully obtained from third 
              parties, or independently developed without reference to the other party's confidential information.
            </p>
          </section>

          {/* Termination */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              9. Termination
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Infodra Technologies reserves the right, at its sole discretion, to suspend, restrict, or terminate your 
              access to the Website at any time, without prior notice or liability, for any reason including but not 
              limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
              <li>Violation of these Terms of Service;</li>
              <li>Fraudulent, abusive, or illegal activity;</li>
              <li>Providing false or misleading information;</li>
              <li>Engaging in conduct that harms or threatens other users or our business operations;</li>
              <li>Unauthorized use of our intellectual property or proprietary systems;</li>
              <li>Any other conduct that we deem inappropriate or harmful.</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Upon termination, your right to use the Website will immediately cease. All provisions of these Terms 
              that by their nature should survive termination shall survive, including but not limited to intellectual 
              property provisions, warranty disclaimers, indemnification, and limitations of liability.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              You may discontinue use of the Website at any time. Termination of Website access does not affect any 
              ongoing service contracts or agreements, which remain governed by their respective terms.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              10. Changes to Terms
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Infodra Technologies reserves the right to modify, update, or replace these Terms of Service at any time, 
              at our sole discretion. We will make reasonable efforts to notify users of material changes by:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
              <li>Updating the "Last Updated" date at the top of this page;</li>
              <li>Posting a notice on our Website; or</li>
              <li>Sending an email notification to registered users where appropriate.</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Your continued use of the Website after any changes to these Terms constitutes your acceptance of the 
              revised Terms. If you do not agree with the updated Terms, you must discontinue use of the Website.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              It is your responsibility to review these Terms periodically to stay informed of any changes. We encourage 
              you to check this page regularly to ensure you are aware of the current Terms governing your use of the Website.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              11. Governing Law and Dispute Resolution
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              These Terms of Service and any disputes arising out of or related to your use of the Website or services 
              shall be governed by and construed in accordance with the <strong>laws of India</strong>, without regard 
              to its conflict of law principles.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Any legal action or proceeding arising under these Terms shall be brought exclusively in the courts 
              located in India, and you consent to the personal jurisdiction of such courts.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
              Dispute Resolution
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              In the event of any dispute, controversy, or claim arising out of or relating to these Terms or your use 
              of the Website, the parties agree to first attempt to resolve the matter through good-faith negotiations.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              If the dispute cannot be resolved through negotiation within thirty (30) days, either party may pursue 
              resolution through arbitration or litigation in accordance with the governing law specified above.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              12. Contact Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              If you have any questions, concerns, or inquiries regarding these Terms of Service or any aspect of our 
              Website or services, please contact us:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <p className="text-gray-900 dark:text-white font-semibold mb-2">
                Infodra Technologies Private Limited
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-1">
                Email:{' '}
                <a 
                  href="mailto:connect@infodra.ai" 
                  className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
                >
                  connect@infodra.ai
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

          {/* Additional Provisions */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              13. General Provisions
            </h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              Entire Agreement
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              These Terms, together with our Privacy Policy and any other legal notices published on the Website, 
              constitute the entire agreement between you and Infodra Technologies regarding your use of the Website.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
              Severability
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining 
              provisions shall continue in full force and effect.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
              Waiver
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              No waiver of any term or condition of these Terms shall be deemed a further or continuing waiver of 
              such term or any other term.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
              Assignment
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              You may not assign or transfer these Terms or any rights granted hereunder without our prior written 
              consent. Infodra Technologies may assign these Terms without restriction.
            </p>
          </section>

          {/* Closing */}
          <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 text-sm italic">
              By using the Website, you acknowledge that you have read these Terms of Service, understand them, 
              and agree to be bound by them. Thank you for choosing Infodra Technologies.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
