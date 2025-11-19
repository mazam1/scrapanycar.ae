"use client"

import * as React from "react"
import { motion } from "framer-motion"
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
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={feature.title} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-secondary/20 via-brand-secondary/5 to-transparent rounded-xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-500 -z-10" />
              <div className="absolute bg-white inset-0 rounded-xl border border-brand-secondary/20 group-hover:border-brand-secondary/50 transition-all duration-300 -z-10" />
              <motion.div
                className="p-6 rounded-xl bg-card relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
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

        {/* Stats Section with Creative Background */}
        <div className="mt-32 relative group">
          <motion.div
            className="absolute inset-0 -z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-brand-secondary/25 via-brand-secondary/10 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="absolute inset-0 rounded-3xl border border-brand-secondary/20 group-hover:border-brand-secondary/40 transition-all duration-500" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
          </motion.div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10 bg-white bg-opacity-50 rounded-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="p-8">
              <div className="text-3xl lg:text-4xl font-bold text-brand-secondary mb-2">10K+</div>
              <div className="text-muted-foreground">Cars Recycled</div>
            </div>
            <div className="p-8">
              <div className="text-3xl lg:text-4xl font-bold text-brand-secondary mb-2">AED 2M+</div>
              <div className="text-muted-foreground">Paid to Customers</div>
            </div>
            <div className="p-8">
              <div className="text-3xl lg:text-4xl font-bold text-brand-secondary mb-2">4.9★</div>
              <div className="text-muted-foreground">Customer Rating</div>
            </div>
            <div className="p-8">
              <div className="text-3xl lg:text-4xl font-bold text-brand-secondary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}