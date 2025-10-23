"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { HelpCircle } from "lucide-react"

export function ContactFAQSection() {
  const faqs = [
    {
      q: "How quickly can I get a valuation?",
      a: "Our team provides professional valuations within 24 hours of receiving your complete information."
    },
    {
      q: "Do you charge for vehicle inspection?",
      a: "No, our comprehensive vehicle inspection service is completely free with no obligations."
    },
    {
      q: "What payment methods do you offer?",
      a: "We offer cash, certified check, or instant bank transfer – whatever works best for you."
    },
    {
      q: "Do you buy cars in any condition?",
      a: "Yes, we purchase vehicles in all conditions – from pristine classics to damaged cars."
    }
  ]

  return (
    <section className="relative py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <p className="mt-3 text-muted-foreground">
            Quick answers to common questions about our car buying services
          </p>
        </motion.div>

        <motion.div
          className="space-y-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {faqs.map((item, idx) => (
            <div key={idx} className="rounded-2xl bg-card border border-border shadow-sm p-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold flex-shrink-0 mt-0.5">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-semibold">{item.q}</div>
                  <div className="mt-2 text-sm sm:text-base text-muted-foreground">{item.a}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}