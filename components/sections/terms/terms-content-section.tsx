"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function TermsContentSection() {
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
              Terms and Conditions
            </h1>
            <p className="text-brand-medium text-lg">
              Last Updated: {lastUpdated}
            </p>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-brand-medium leading-relaxed">
              These Terms and Conditions ("Terms") govern your use of the scrapyourcar.ae website and services operated by ROOH AL SAQAR AUTO SPARE PARTS TRADING ("we," "us," or "our"). By accessing or using our website and services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access our website or use our services.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 border border-brand-light/20">
            <h2 className="font-poppins font-bold text-xl text-brand-dark mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-brand-medium">
              <li><a href="#acceptance" className="hover:text-brand-primary transition-colors">1. Acceptance of Terms</a></li>
              <li><a href="#services" className="hover:text-brand-primary transition-colors">2. Our Services</a></li>
              <li><a href="#user-obligations" className="hover:text-brand-primary transition-colors">3. User Obligations</a></li>
              <li><a href="#vehicle-valuation" className="hover:text-brand-primary transition-colors">4. Vehicle Valuation and Purchase</a></li>
              <li><a href="#pricing-payment" className="hover:text-brand-primary transition-colors">5. Pricing and Payment</a></li>
              <li><a href="#intellectual-property" className="hover:text-brand-primary transition-colors">6. Intellectual Property Rights</a></li>
              <li><a href="#limitation-liability" className="hover:text-brand-primary transition-colors">7. Limitation of Liability</a></li>
              <li><a href="#indemnification" className="hover:text-brand-primary transition-colors">8. Indemnification</a></li>
              <li><a href="#termination" className="hover:text-brand-primary transition-colors">9. Termination</a></li>
              <li><a href="#governing-law" className="hover:text-brand-primary transition-colors">10. Governing Law and Jurisdiction</a></li>
              <li><a href="#dispute-resolution" className="hover:text-brand-primary transition-colors">11. Dispute Resolution</a></li>
              <li><a href="#modifications" className="hover:text-brand-primary transition-colors">12. Modifications to Terms</a></li>
              <li><a href="#contact" className="hover:text-brand-primary transition-colors">13. Contact Information</a></li>
            </ul>
          </div>

          {/* Section 1 */}
          <div id="acceptance" className="space-y-4 scroll-mt-24">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-brand-dark">
              1. Acceptance of Terms
            </h2>
            <div className="space-y-4 text-brand-medium leading-relaxed">
              <p>
                By accessing and using scrapyourcar.ae, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. These Terms apply to all visitors, users, and others who access or use our services.
              </p>
              <p>
                If you are using our services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms, and your acceptance of these Terms will be treated as acceptance by that organization.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div id="services" className="space-y-4 scroll-mt-24">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-brand-dark">
              2. Our Services
            </h2>
            <div className="space-y-4 text-brand-medium leading-relaxed">
              <p>ROOH AL SAQAR AUTO SPARE PARTS TRADING provides the following services:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Vehicle valuation and instant quote generation</li>
                <li>Purchase of used, damaged, or scrap vehicles</li>
                <li>Free vehicle inspection services</li>
                <li>Free vehicle collection and towing</li>
                <li>Immediate payment upon agreement</li>
                <li>Documentation and transfer assistance</li>
              </ul>
              <p className="mt-4">
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice. We are not liable to you or any third party for any modification, suspension, or discontinuation of our services.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div id="user-obligations" className="space-y-4 scroll-mt-24">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-brand-dark">
              3. User Obligations
            </h2>
            <div className="space-y-4 text-brand-medium leading-relaxed">
              <p>When using our services, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate, current, and complete information about yourself and your vehicle</li>
                <li>Maintain and update your information to keep it accurate and current</li>
                <li>Be the legal owner of the vehicle or have proper authorization to sell it</li>
                <li>Ensure the vehicle is free from any liens, loans, or encumbrances (unless disclosed)</li>
                <li>Provide all necessary documentation including registration, ownership papers, and identification</li>
                <li>Not use our services for any unlawful or prohibited purpose</li>
                <li>Not interfere with or disrupt the integrity or performance of our website</li>
                <li>Not attempt to gain unauthorized access to our systems or networks</li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div id="vehicle-valuation" className="space-y-4 scroll-mt-24">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-brand-dark">
              4. Vehicle Valuation and Purchase
            </h2>
            <div className="space-y-4 text-brand-medium leading-relaxed">
              <h3 className="font-semibold text-xl text-brand-dark">Valuation Process</h3>
              <p>
                Our vehicle valuations are estimates based on the information you provide and current market conditions. The initial quote provided through our online form is indicative and subject to change following a physical inspection of the vehicle.
              </p>

              <h3 className="font-semibold text-xl text-brand-dark mt-6">Physical Inspection</h3>
              <p>
                All vehicles are subject to a physical inspection before final purchase. The final offer price may be adjusted based on:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Actual condition of the vehicle</li>
                <li>Verification of mileage and service history</li>
                <li>Discovery of undisclosed damage or mechanical issues</li>
                <li>Verification of ownership and documentation</li>
              </ul>

              <h3 className="font-semibold text-xl text-brand-dark mt-6">Acceptance of Offer</h3>
              <p>
                You are under no obligation to accept our offer. If you accept our final offer, the transaction will be completed immediately with payment transferred to you upon completion of all necessary documentation and vehicle handover.
              </p>

              <h3 className="font-semibold text-xl text-brand-dark mt-6">Right to Refuse</h3>
              <p>
                We reserve the right to refuse purchase of any vehicle at our sole discretion, including but not limited to vehicles that are stolen, have fraudulent documentation, or do not meet our purchasing criteria.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div id="pricing-payment" className="space-y-4 scroll-mt-24">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-brand-dark">
              5. Pricing and Payment
            </h2>
            <div className="space-y-4 text-brand-medium leading-relaxed">
              <p>
                All prices are quoted in UAE Dirhams (AED). We strive to provide competitive market rates for all vehicles we purchase. Payment methods include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Bank transfer</li>
                <li>Cash payment (subject to applicable limits and regulations)</li>
                <li>Certified check</li>
              </ul>
              <p className="mt-4">
                Payment is processed upon successful completion of vehicle handover and documentation transfer. We do not charge any fees for our valuation, inspection, or collection services.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div id="intellectual-property" className="space-y-4 scroll-mt-24">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-brand-dark">
              6. Intellectual Property Rights
            </h2>
            <div className="space-y-4 text-brand-medium leading-relaxed">
              <p>
                The website and its original content, features, and functionality are owned by ROOH AL SAQAR AUTO SPARE PARTS TRADING and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              <p>
                You may not copy, modify, distribute, sell, or lease any part of our services or included software, nor may you reverse engineer or attempt to extract the source code of that software, unless laws prohibit these restrictions or you have our written permission.
              </p>
              <p className="mt-4">
                Our trademarks, logos, and service marks displayed on the website are our property or the property of third parties. You are not permitted to use these marks without our prior written consent or the consent of the third party that owns the marks.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div id="limitation-liability" className="space-y-4 scroll-mt-24">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-brand-dark">
              7. Limitation of Liability
            </h2>
            <div className="space-y-4 text-brand-medium leading-relaxed">
              <p>
                To the maximum extent permitted by applicable law, ROOH AL SAQAR AUTO SPARE PARTS TRADING shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses resulting from:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your access to or use of or inability to access or use our services</li>
                <li>Any conduct or content of any third party on the services</li>
                <li>Any content obtained from the services</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
              <p className="mt-4">
                In no event shall our total liability to you for all damages exceed the amount paid by us for your vehicle, or AED 1,000, whichever is greater.
              </p>
              <p>
                Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for incidental or consequential damages. Accordingly, some of the limitations above may not apply to you.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div id="indemnification" className="space-y-4 scroll-mt-24">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-brand-dark">
              8. Indemnification
            </h2>
            <div className="space-y-4 text-brand-medium leading-relaxed">
              <p>
                You agree to defend, indemnify, and hold harmless ROOH AL SAQAR AUTO SPARE PARTS TRADING and its officers, directors, employees, contractors, agents, licensors, and suppliers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another party</li>
                <li>Your violation of any applicable laws or regulations</li>
                <li>Any false, inaccurate, or misleading information provided by you</li>
                <li>Your lack of legal ownership or authority to sell the vehicle</li>
              </ul>
            </div>
          </div>

          {/* Section 9 */}
          <div id="termination" className="space-y-4 scroll-mt-24">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-brand-dark">
              9. Termination
            </h2>
            <div className="space-y-4 text-brand-medium leading-relaxed">
              <p>
                We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
              </p>
              <p>
                Upon termination, your right to use our services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive, including without limitation ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </div>
          </div>

          {/* Section 10 */}
          <div id="governing-law" className="space-y-4 scroll-mt-24">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-brand-dark">
              10. Governing Law and Jurisdiction
            </h2>
            <div className="space-y-4 text-brand-medium leading-relaxed">
              <p>
                These Terms shall be governed and construed in accordance with the laws of the United Arab Emirates, without regard to its conflict of law provisions.
              </p>
              <p>
                Any dispute arising out of or in connection with these Terms, including any question regarding their existence, validity, or termination, shall be subject to the exclusive jurisdiction of the courts of Dubai, United Arab Emirates.
              </p>
              <p className="mt-4">
                For European Union (EU) users: If you are a consumer in the EU, you will benefit from any mandatory provisions of the law of the country in which you are resident.
              </p>
            </div>
          </div>

          {/* Section 11 */}
          <div id="dispute-resolution" className="space-y-4 scroll-mt-24">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-brand-dark">
              11. Dispute Resolution
            </h2>
            <div className="space-y-4 text-brand-medium leading-relaxed">
              <p>
                If you have any concern or dispute about our services, you agree to first try to resolve the dispute informally by contacting us at <a href="mailto:scrapyourcarae@gmail.com" className="text-brand-primary hover:underline">scrapyourcarae@gmail.com</a>.
              </p>
              <p>
                If we are unable to resolve your concern or dispute through informal negotiations within 30 days, both parties agree to submit the matter to mediation before resorting to arbitration or litigation.
              </p>
              <p className="mt-4">
                Any disputes that cannot be resolved through mediation may be submitted to binding arbitration in accordance with the arbitration rules of the Dubai International Arbitration Centre (DIAC).
              </p>
            </div>
          </div>

          {/* Section 12 */}
          <div id="modifications" className="space-y-4 scroll-mt-24">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-brand-dark">
              12. Modifications to Terms
            </h2>
            <div className="space-y-4 text-brand-medium leading-relaxed">
              <p>
                We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
              </p>
              <p>
                What constitutes a material change will be determined at our sole discretion. By continuing to access or use our services after those revisions become effective, you agree to be bound by the revised terms.
              </p>
              <p className="mt-4">
                It is your responsibility to review these Terms periodically for changes. The "Last Updated" date at the top of this page indicates when these Terms were last revised.
              </p>
            </div>
          </div>

          {/* Section 13 - Contact */}
          <div id="contact" className="space-y-4 scroll-mt-24">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-brand-dark">
              13. Contact Information
            </h2>
            <div className="space-y-4 text-brand-medium leading-relaxed">
              <p>
                If you have any questions about these Terms, please contact us:
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

          {/* Additional Provisions */}
          <div className="space-y-4 scroll-mt-24 pt-8 border-t border-brand-light/20">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-brand-dark">
              Additional Provisions
            </h2>
            <div className="space-y-4 text-brand-medium leading-relaxed">
              <h3 className="font-semibold text-xl text-brand-dark">Severability</h3>
              <p>
                If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.
              </p>

              <h3 className="font-semibold text-xl text-brand-dark mt-6">Waiver</h3>
              <p>
                No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term or any other term, and our failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision.
              </p>

              <h3 className="font-semibold text-xl text-brand-dark mt-6">Entire Agreement</h3>
              <p>
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and ROOH AL SAQAR AUTO SPARE PARTS TRADING regarding the use of our services and supersede all prior and contemporaneous written or oral agreements.
              </p>

              <h3 className="font-semibold text-xl text-brand-dark mt-6">Language</h3>
              <p>
                These Terms may be translated into other languages for your convenience. In the event of any conflict between the English version and any translation, the English version shall prevail.
              </p>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="pt-12 mt-12 border-t border-brand-light/20">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link
                href="/privacy"
                className="text-brand-primary hover:text-brand-secondary transition-colors font-medium"
              >
                View Privacy Policy →
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
