"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Phone, Car, DollarSign, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const steps = [
  {
    step: "01",
    icon: Phone,
    title: "Get Your Quote",
    description: "Call us or fill out our online form with your vehicle details. Get an instant, no-obligation quote based on current market rates.",
    details: [
      "Instant online quote",
      "No hidden fees",
      "Valid for 7 days"
    ]
  },
  {
    step: "02",
    icon: Car,
    title: "Schedule Pickup",
    description: "Choose a convenient time for our team to come to you. We provide free towing and handle all the paperwork on the spot.",
    details: [
      "Free towing service",
      "Flexible scheduling",
      "All paperwork handled"
    ]
  },
  {
    step: "03",
    icon: DollarSign,
    title: "Get Paid Instantly",
    description: "Receive payment immediately when we pick up your vehicle. Choose cash or instant bank transfer - it's that simple!",
    details: [
      "Same-day payment",
      "Cash or bank transfer",
      "No waiting period"
    ]
  }
]

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It <span className="text-brand-gold">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Selling your scrap car has never been easier. Our simple 3-step process gets you cash fast.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Step Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center gap-4 mb-6">
                    <div className="text-6xl font-bold text-brand-gold/20">
                      {step.step}
                    </div>
                    <div className="p-4 rounded-full bg-brand-gold/10 border border-brand-gold/20">
                      <step.icon className="h-8 w-8 text-brand-gold" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-brand-gold" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Step Visual */}
                <div className="flex-1 max-w-md">
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-brand-gold/5 to-brand-gold/10 border border-brand-gold/20">
                    <div className="absolute top-4 right-4 text-4xl font-bold text-brand-gold/30">
                      {step.step}
                    </div>
                    <div className="flex items-center justify-center h-48">
                      <step.icon className="h-24 w-24 text-brand-gold" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow Connector */}
              {index < steps.length - 1 && (
                <motion.div
                  className="flex justify-center mb-8"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="p-3 rounded-full bg-brand-gold/10 border border-brand-gold/20">
                    <ArrowRight className="h-6 w-6 text-brand-gold rotate-90 lg:rotate-0" />
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who chose CarooFix for their scrap car needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-gold hover:bg-brand-gold/90 text-brand-charcoal font-semibold">
              Get Your Quote Now
            </Button>
            <Button variant="outline" size="lg">
              Call (555) 123-4567
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}