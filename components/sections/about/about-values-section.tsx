"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { 
  Shield, 
  UserCheck, 
  Leaf, 
  Clock, 
  DollarSign, 
  Users,
  Award,
  Heart
} from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with complete transparency, providing honest assessments and fair pricing for every vehicle.",
    color: "text-brand-secondary"
  },
  {
    icon: UserCheck,
    title: "Trust",
    description: "Building lasting relationships through reliable service, keeping our promises, and exceeding expectations.",
    color: "text-brand-secondary"
  },
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    description: "Committed to sustainable practices that minimize environmental impact and promote automotive recycling.",
    color: "text-brand-secondary"
  },
  {
    icon: Clock,
    title: "Efficiency",
    description: "Streamlined processes that save you time while ensuring thorough, professional service every step of the way.",
    color: "text-brand-secondary"
  },
  {
    icon: DollarSign,
    title: "Fair Value",
    description: "Competitive pricing based on current market rates, ensuring you get the maximum value for your vehicle.",
    color: "text-brand-secondary"
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your satisfaction is our priority. We tailor our services to meet your specific needs and circumstances.",
    color: "text-brand-secondary"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Continuous improvement in our services, technology, and customer experience to maintain industry leadership.",
    color: "text-brand-secondary"
  },
  {
    icon: Heart,
    title: "Community",
    description: "Supporting local communities through job creation, charitable initiatives, and responsible business practices.",
    color: "text-brand-secondary"
  }
]

export function AboutValuesSection() {
  return (
    <section className="bg-background py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
            <span className="text-sm font-medium text-brand-secondary uppercase tracking-wider">Core Values</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Our <span className="text-brand-secondary relative">
              Values
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-secondary/60 to-brand-secondary/20 rounded-full" />
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The principles that guide everything we do and shape our commitment to customers, 
            community, and the environment.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={value.title} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-secondary/20 via-brand-secondary/5 to-transparent rounded-xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-500 -z-10" />
              <div className="absolute bg-white inset-0 rounded-xl border border-brand-secondary/20 group-hover:border-brand-secondary/50 transition-all duration-300 -z-10" />
              <motion.div
                className="p-6 rounded-xl bg-card relative overflow-hidden text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-secondary/10 rounded-full mb-4">
                    <value.icon className="h-8 w-8 text-brand-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-brand-secondary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {value.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Commitment Statement */}
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="p-8 rounded-2xl bg-gradient-to-br from-brand-secondary/10 to-brand-primary/5 border border-brand-secondary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Our Commitment to You
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              These values aren&apos;t just words on a page – they&apos;re the foundation of every interaction, 
              every decision, and every service we provide. When you choose Scrap Your Car, you&apos;re choosing 
              a partner who genuinely cares about your experience and the impact we have on our community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 rounded-lg bg-background/50">
                <div className="text-2xl font-bold text-brand-secondary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Guarantee</div>
              </div>
              <div className="p-4 rounded-lg bg-background/50">
                <div className="text-2xl font-bold text-brand-secondary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="p-4 rounded-lg bg-background/50">
                <div className="text-2xl font-bold text-brand-secondary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Customer Support</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}