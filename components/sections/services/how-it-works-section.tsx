'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'
import { Phone, Truck, DollarSign } from 'lucide-react'

export default function HowItWorksSection() {
  const shouldReduceMotion = useReducedMotion()
  const steps = [
    {
      number: 1,
      icon: Phone,
      title: "Get Your Quote",
      description: "Call us or fill out our online form with your vehicle details. Get an instant, no-obligation quote.",
    },
    {
      number: 2,
      icon: Truck,
      title: "Schedule Pickup",
      description: "Choose a convenient time for our team to pick up your vehicle. Free towing service included.",
    },
    {
      number: 3,
      icon: DollarSign,
      title: "Get Paid Instantly",
      description: "Receive payment immediately when we pick up your vehicle. Cash or instant bank transfer.",
    }
  ]

  return (
    <section className="bg-background py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
            <span className="text-sm font-medium text-brand-secondary uppercase tracking-wider">Process</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            How It <span className="text-brand-secondary relative">
              Works
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-secondary/60 to-brand-secondary/20 rounded-full" />
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Four simple steps from valuation to payment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: shouldReduceMotion ? 0 : Math.min(index * 0.08, 0.2)
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-secondary/20 via-brand-secondary/5 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-500 -z-10" />
                  <div className="absolute bg-white inset-0 rounded-2xl border border-brand-secondary/20 group-hover:border-brand-secondary/50 transition-all duration-300 -z-10" />
                  
                  <motion.div
                    className="p-8 text-center rounded-2xl bg-card relative"
                    whileHover={{ y: shouldReduceMotion ? 0 : -5 }}
                  >
                    {/* Number and Icon Container */}
                    <div className="flex flex-col items-center gap-3 mb-6">
                      {/* Step Number Badge */}
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-brand-secondary to-brand-primary text-white font-bold text-lg">
                        {step.number}
                      </div>

                      {/* Icon */}
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-brand-secondary/10 group-hover:bg-brand-secondary/20 transition-colors">
                        <Icon className="w-8 h-8 text-brand-secondary" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-1 bg-gradient-to-r from-brand-secondary/60 to-brand-secondary/20 -translate-y-1/2" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}