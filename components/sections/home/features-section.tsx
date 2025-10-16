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
    color: "text-brand-gold"
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-brand-gold">Scrap Your Car</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We make selling your scrap car simple, fast, and profitable with our comprehensive service.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-brand-gold/50 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">
                <div className={`inline-flex p-3 rounded-lg bg-background border ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-brand-gold transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="p-6">
            <div className="text-3xl lg:text-4xl font-bold text-brand-gold mb-2">10K+</div>
            <div className="text-muted-foreground">Cars Recycled</div>
          </div>
          <div className="p-6">
            <div className="text-3xl lg:text-4xl font-bold text-brand-gold mb-2">AED 2M+</div>
            <div className="text-muted-foreground">Paid to Customers</div>
          </div>
          <div className="p-6">
            <div className="text-3xl lg:text-4xl font-bold text-brand-gold mb-2">4.9★</div>
            <div className="text-muted-foreground">Customer Rating</div>
          </div>
          <div className="p-6">
            <div className="text-3xl lg:text-4xl font-bold text-brand-gold mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}