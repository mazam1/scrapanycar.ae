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
    color: "text-blue-500"
  },
  {
    icon: UserCheck,
    title: "Trust",
    description: "Building lasting relationships through reliable service, keeping our promises, and exceeding expectations.",
    color: "text-green-500"
  },
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    description: "Committed to sustainable practices that minimize environmental impact and promote automotive recycling.",
    color: "text-emerald-500"
  },
  {
    icon: Clock,
    title: "Efficiency",
    description: "Streamlined processes that save you time while ensuring thorough, professional service every step of the way.",
    color: "text-orange-500"
  },
  {
    icon: DollarSign,
    title: "Fair Value",
    description: "Competitive pricing based on current market rates, ensuring you get the maximum value for your vehicle.",
    color: "text-brand-gold"
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your satisfaction is our priority. We tailor our services to meet your specific needs and circumstances.",
    color: "text-purple-500"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Continuous improvement in our services, technology, and customer experience to maintain industry leadership.",
    color: "text-red-500"
  },
  {
    icon: Heart,
    title: "Community",
    description: "Supporting local communities through job creation, charitable initiatives, and responsible business practices.",
    color: "text-pink-500"
  }
]

export function AboutValuesSection() {
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
            Our <span className="text-brand-gold">Values</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The principles that guide everything we do and shape our commitment to customers, 
            community, and the environment.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-brand-gold/50 transition-all duration-300 hover:shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">
                <div className={`inline-flex p-4 rounded-full bg-background border ${value.color} mb-4`}>
                  <value.icon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-brand-gold transition-colors">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Commitment Statement */}
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="p-8 rounded-2xl bg-gradient-to-br from-brand-gold/5 to-brand-gold/10 border border-brand-gold/20">
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
                <div className="text-2xl font-bold text-brand-gold mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Guarantee</div>
              </div>
              <div className="p-4 rounded-lg bg-background/50">
                <div className="text-2xl font-bold text-brand-gold mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="p-4 rounded-lg bg-background/50">
                <div className="text-2xl font-bold text-brand-gold mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Customer Support</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}