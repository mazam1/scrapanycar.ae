"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function PrivacyContentSection() {
  const lastUpdated = "January 10, 2026"

  return (
    <section className="relative py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="text-center space-y-4 pb-8 border-b border-brand-light/20">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl text-brand-dark">
              Privacy Policy
            </h1>
            <p className="text-brand-medium text-lg">
              Last Updated: {lastUpdated}
            </p>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-brand-medium leading-relaxed">
              ROOH AL SAQAR AUTO SPARE PARTS TRADING ("we," "us," or "our") operates scrapyourcar.ae. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 border border-brand-light/20">
            <h2 className="font-poppins font-bold text-xl text-brand-dark mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-brand-medium">
              <li><a href="#information-we-collect" className="hover:text-brand-primary transition-colors">1. Information We Collect</a></li>
              <li><a href="#how-we-use" className="hover:text-brand-primary transition-colors">2. How We Use Your Information</a></li>
              <li><a href="#disclosure" className="hover:text-brand-primary transition-colors">3. Disclosure of Your Information</a></li>
              <li><a href="#cookies" className="hover:text-brand-primary transition-colors">4. Cookies and Tracking Technologies</a></li>
              <li><a href="#data-security" className="hover:text-brand-primary transition-colors">5. Data Security</a></li>
              <li><a href="#data-retention" className="hover:text-brand-primary transition-colors">6. Data Retention</a></li>
              <li><a href="#your-rights" className="hover:text-brand-primary transition-colors">7. Your Privacy Rights</a></li>
              <li><a href="#international" className="hover:text-brand-primary transition-colors">8. International Data Transfers</a></li>
              <li><a href="#children" className="hover:text-brand-primary transition-colors">9. Children's Privacy</a></li>
              <li><a href="#changes" className="hover:text-brand-primary transition-colors">10. Changes to This Policy</a></li>
              <li><a href="#contact" className="hover:text-brand-primary transition-colors">11. Contact Us</a></li>
            </ul>
          </div>

          {/* Section 1 */}
          <div id="information-we-collect" className="space-y-4 scroll-mt-24">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-brand-dark">
              1. Information We Collect
            </h2>
            <div className="space-y-4 text-brand-medium leading-relaxed">
              <h3 className="font-semibold text-xl text-brand-dark">Personal Information</h3>
              <p>We collect information that you voluntarily provide to us when you:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Request a vehicle valuation or quote</li>
                <li>Fill out contact forms on our website</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact us via phone, email, or other means</li>
              </ul>
              <p>This information may include:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Vehicle information (make, model, year, condition, registration details)</li>
                <li>Location information</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="font-semibold text-xl text-brand-dark mt-6">Automatically Collected Information</h3>
              <p>When you visit our website, we automatically collect certain information about your device, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>IP address and approximate geographic location</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring URLs</li>
                <li>Pages viewed and time spent on pages</li>
                <li>Device information and identifiers</li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div id="how-we-use" className="space-y-4 scroll-mt-24">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-brand-dark">
              2. How We Use Your Information
            </h2>
            <div className="space-y-4 text-brand-medium leading-relaxed">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, operate, and maintain our services</li>
                <li>Process vehicle valuations and purchase requests</li>
                <li>Communicate with you about our services, including responding to inquiries</li>
                <li>Send you marketing and promotional communications (with your consent)</li>
                <li>Improve and optimize our website and services</li>
                <li>Analyze usage trends and preferences</li>
                <li>Detect, prevent, and address technical issues and fraud</li>
                <li>Comply with legal obligations and enforce our terms</li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div id="disclosure" className="space-y-4 scroll-mt-24">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-brand-dark">
              3. Disclosure of Your Information
            </h2>
            <div className="space-y-4 text-brand-medium leading-relaxed">
              <p>We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf (payment processing, email delivery, analytics)</li>
                <li><strong>Business Partners:</strong> Authorized dealers, recycling facilities, or other partners involved in vehicle processing</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Protection of Rights:</strong> To protect our rights, property, safety, or that of our users or others</li>
              </ul>
              <p className="mt-4">
                We do not sell, rent, or trade your personal information to third parties for their marketing purposes without your explicit consent.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div id="cookies" className="space-y-4 scroll-mt-24">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-brand-dark">
              4. Cookies and Tracking Technologies
            </h2>
            <div className="space-y-4 text-brand-medium leading-relaxed">
              <p>
                We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are small data files stored on your device.
              </p>
              <h3 className="font-semibold text-xl text-brand-dark">Types of Cookies We Use:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional Cookies:</strong> Enable enhanced functionality and personalization</li>
                <li><strong>Marketing Cookies:</strong> Track visitors across websites to display relevant advertisements</li>
              </ul>
              <p className="mt-4">
                You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div id="data-security" className="space-y-4 scroll-mt-24">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-brand-dark">
              5. Data Security
            </h2>
            <div className="space-y-4 text-brand-medium leading-relaxed">
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encryption of data in transit using SSL/TLS</li>
                <li>Secure server infrastructure</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="mt-4">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div id="data-retention" className="space-y-4 scroll-mt-24">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-brand-dark">
              6. Data Retention
            </h2>
            <div className="space-y-4 text-brand-medium leading-relaxed">
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When determining retention periods, we consider:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The nature and sensitivity of the information</li>
                <li>Potential risk of harm from unauthorized use or disclosure</li>
                <li>The purposes for which we process the information</li>
                <li>Legal, regulatory, tax, accounting, or other compliance requirements</li>
              </ul>
            </div>
          </div>

          {/* Section 7 */}
          <div id="your-rights" className="space-y-4 scroll-mt-24">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-brand-dark">
              7. Your Privacy Rights
            </h2>
            <div className="space-y-4 text-brand-medium leading-relaxed">
              <p>Depending on your location, you may have the following rights regarding your personal information:</p>

              <h3 className="font-semibold text-xl text-brand-dark">UAE Data Protection Rights:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Right to access your personal data</li>
                <li>Right to correct inaccurate or incomplete data</li>
                <li>Right to request deletion of your data</li>
                <li>Right to object to processing of your data</li>
                <li>Right to withdraw consent at any time</li>
              </ul>

              <h3 className="font-semibold text-xl text-brand-dark mt-6">GDPR Rights (for EU visitors):</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Right to access and receive a copy of your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right to lodge a complaint with a supervisory authority</li>
              </ul>

              <p className="mt-4">
                To exercise any of these rights, please contact us at <a href="mailto:scrapyourcarae@gmail.com" className="text-brand-primary hover:underline">scrapyourcarae@gmail.com</a>. We will respond to your request within 30 days.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div id="international" className="space-y-4 scroll-mt-24">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-brand-dark">
              8. International Data Transfers
            </h2>
            <div className="space-y-4 text-brand-medium leading-relaxed">
              <p>
                Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ from those in your jurisdiction.
              </p>
              <p>
                If you are located outside the United Arab Emirates and choose to provide information to us, please note that we transfer the data to the UAE and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
              </p>
              <p>
                For transfers to countries outside the UAE/EEA, we ensure appropriate safeguards are in place, such as standard contractual clauses or adequacy decisions.
              </p>
            </div>
          </div>

          {/* Section 9 */}
          <div id="children" className="space-y-4 scroll-mt-24">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-brand-dark">
              9. Children's Privacy
            </h2>
            <div className="space-y-4 text-brand-medium leading-relaxed">
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. If we become aware that we have collected personal information from children without verification of parental consent, we will take steps to remove that information from our servers.
              </p>
            </div>
          </div>

          {/* Section 10 */}
          <div id="changes" className="space-y-4 scroll-mt-24">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-brand-dark">
              10. Changes to This Privacy Policy
            </h2>
            <div className="space-y-4 text-brand-medium leading-relaxed">
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page. Your continued use of our services after any modifications indicates your acceptance of the updated Privacy Policy.
              </p>
            </div>
          </div>

          {/* Section 11 - Contact */}
          <div id="contact" className="space-y-4 scroll-mt-24">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-brand-dark">
              11. Contact Us
            </h2>
            <div className="space-y-4 text-brand-medium leading-relaxed">
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 border border-brand-light/20 space-y-2">
                <p><strong className="text-brand-dark">ROOH AL SAQAR AUTO SPARE PARTS TRADING</strong></p>
                <p>Office 17, Owned by DUBAI INDUSTRIAL CITY</p>
                <p>Dubai, United Arab Emirates</p>
                <p>Email: <a href="mailto:scrapyourcarae@gmail.com" className="text-brand-primary hover:underline">scrapyourcarae@gmail.com</a></p>
                <p>Phone: <a href="tel:+971551988348" className="text-brand-primary hover:underline">+971 55 198 8348</a></p>
              </div>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="pt-12 mt-12 border-t border-brand-light/20">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link
                href="/terms"
                className="text-brand-primary hover:text-brand-secondary transition-colors font-medium"
              >
                View Terms and Conditions →
              </Link>
              <Link
                href="/"
                className="text-brand-medium hover:text-brand-dark transition-colors font-medium"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
