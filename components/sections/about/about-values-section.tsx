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
    color: "text-brand-gold"
  },
  {
    icon: UserCheck,
    title: "Trust",
    description: "Building lasting relationships through reliable service, keeping our promises, and exceeding expectations.",
    color: "text-brand-gold"
  },
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    description: "Committed to sustainable practices that minimize environmental impact and promote automotive recycling.",
    color: "text-brand-gold"
  },
  {
    icon: Clock,
    title: "Efficiency",
    description: "Streamlined processes that save you time while ensuring thorough, professional service every step of the way.",
    color: "text-brand-gold"
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
    color: "text-brand-gold"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Continuous improvement in our services, technology, and customer experience to maintain industry leadership.",
    color: "text-brand-gold"
  },
  {
    icon: Heart,
    title: "Community",
    description: "Supporting local communities through job creation, charitable initiatives, and responsible business practices.",
    color: "text-brand-gold"
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-brand-gold">Values</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-gold/10 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-brand-gold" />
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="p-8 rounded-2xl bg-brand-gold/5 border border-brand-gold/10">
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