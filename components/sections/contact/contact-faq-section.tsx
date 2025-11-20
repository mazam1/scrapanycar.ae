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
    <section className="bg-background py-16 lg:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
            <span className="text-sm font-medium text-brand-secondary uppercase tracking-wider">FAQ</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Frequently Asked <span className="text-brand-secondary relative">
              Questions
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-secondary/60 to-brand-secondary/20 rounded-full" />
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
            <motion.div 
              key={idx} 
              className="rounded-2xl bg-card border border-brand-secondary/20 shadow-sm p-6 group hover:border-brand-secondary/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-secondary/10 border border-brand-secondary/30 text-brand-secondary flex-shrink-0 mt-0.5">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-semibold text-foreground group-hover:text-brand-secondary transition-colors">{item.q}</div>
                  <div className="mt-2 text-sm sm:text-base text-muted-foreground">{item.a}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}