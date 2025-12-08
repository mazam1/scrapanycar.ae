"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useReducedMotion } from "framer-motion"
import { 
  DollarSign, 
  Truck, 
  Clock, 
  Shield, 
  FileText, 
  Recycle,
  Star,
  Phone
} from "lucide-react"

const features = [
  {
    icon: DollarSign,
    title: "Best Market Prices",
    description: "We offer competitive rates based on current scrap metal prices and your vehicle's condition.",
    color: "text-brand-secondary"
  },
  {
    icon: Truck,
    title: "Free Pickup Service",
    description: "We come to you! Free towing and pickup from anywhere in the city, no hidden fees.",
    color: "text-blue-500"
  },
  {
    icon: Clock,
    title: "Same Day Payment",
    description: "Get paid instantly when we pick up your vehicle. Cash or bank transfer available.",
    color: "text-green-500"
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed auto recycling facility with comprehensive insurance coverage.",
    color: "text-purple-500"
  },
  {
    icon: FileText,
    title: "Paperwork Handled",
    description: "We take care of all the documentation and DMV paperwork for a hassle-free experience.",
    color: "text-orange-500"
  },
  {
    icon: Recycle,
    title: "Eco-Friendly Process",
    description: "Environmentally responsible recycling that helps reduce automotive waste.",
    color: "text-emerald-500"
  },
  {
    icon: Star,
    title: "5-Star Service",
    description: "Rated #1 by customers for reliability, fairness, and professional service.",
    color: "text-yellow-500"
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description: "Our customer service team is available around the clock to assist you.",
    color: "text-red-500"
  }
]

export function FeaturesSection() {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Optimized */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
            <span className="text-sm font-medium text-brand-secondary uppercase tracking-wider">Why Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Why Choose <span className="text-brand-secondary relative">
              Scrap Your Car
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-secondary/60 to-brand-secondary/20 rounded-full" />
            </span>?
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We make selling your scrap car simple, fast, and profitable with our comprehensive service.
          </p>
        </motion.div>

        {/* Features Grid - Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={feature.title} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-secondary/20 via-brand-secondary/5 to-transparent rounded-xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-500 -z-10" />
              <div className="absolute bg-white inset-0 rounded-xl border border-brand-secondary/20 group-hover:border-brand-secondary/50 transition-all duration-300 -z-10" />
              <motion.div
                className="p-6 rounded-xl bg-card relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: shouldReduceMotion ? 0 : Math.min(index * 0.08, 0.2)
                }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: shouldReduceMotion ? 0 : -5 }}
                suppressHydrationWarning
              >
              <div className="mb-4">
                <div className={`inline-flex p-3 rounded-lg bg-background border ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-brand-secondary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Stats Section - Optimized background (static, not animated) */}
        <div className="mt-32 relative group overflow-hidden rounded-3xl border border-brand-secondary/20 hover:border-brand-secondary/40 transition-all duration-500">
          {/* Static background - no animation for CLS prevention */}
          <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/25 via-brand-secondary/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/20 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-primary/15 rounded-full blur-3xl opacity-50" />
          </div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10 bg-white/50 backdrop-blur-sm rounded-3xl p-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-brand-secondary mb-2">10K+</div>
              <div className="text-muted-foreground">Cars Recycled</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-brand-secondary mb-2">AED 2M+</div>
              <div className="text-muted-foreground">Paid to Customers</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-brand-secondary mb-2">4.9★</div>
              <div className="text-muted-foreground">Customer Rating</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-brand-secondary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}