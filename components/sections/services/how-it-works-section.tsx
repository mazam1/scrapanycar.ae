'use client'

import { motion } from 'framer-motion'
import { User, CheckCircle, DollarSign, TrendingUp } from 'lucide-react'

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      icon: User,
      title: "Submit Details",
      description: "Provide your vehicle information in seconds",
    },
    {
      number: 2,
      icon: CheckCircle,
      title: "Inspection",
      description: "We assess condition & current market value",
    },
    {
      number: 3,
      icon: TrendingUp,
      title: "Get Offer",
      description: "Receive a fair, competitive quote instantly",
    },
    {
      number: 4,
      icon: DollarSign,
      title: "Get Paid",
      description: "Accept & receive payment same day",
    }
  ]

  return (
    <section className="bg-background py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-secondary/20 via-brand-secondary/5 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-500 -z-10" />
                  <div className="absolute bg-white inset-0 rounded-2xl border border-brand-secondary/20 group-hover:border-brand-secondary/50 transition-all duration-300 -z-10" />
                  
                  <motion.div
                    className="p-8 text-center rounded-2xl bg-card relative"
                    whileHover={{ y: -5 }}
                  >
                    {/* Step Number Badge */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-brand-secondary to-brand-primary text-white font-bold text-lg mb-6">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-brand-secondary/10 mb-6 group-hover:bg-brand-secondary/20 transition-colors">
                      <Icon className="w-8 h-8 text-brand-secondary" />
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