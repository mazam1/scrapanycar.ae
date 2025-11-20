"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useReducedMotion } from "framer-motion"
import { Award, Users, Shield, Zap } from "lucide-react"

// Reduce motion for accessibility & SEO
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function AboutHeroSection() {
  const shouldReduceMotion = useReducedMotion()

  const titleVariant = shouldReduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 20 }
  
  const titleAnimate = shouldReduceMotion
    ? {}
    : { opacity: 1, y: 0 }

  return (
    <section className="relative py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Optimized with shorter duration */}
        <motion.div
          className="text-center mb-16"
          initial={titleVariant}
          whileInView={titleAnimate}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
            <span className="text-sm font-medium text-brand-secondary uppercase tracking-wider">About Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            About <span className="text-brand-secondary relative">
              ScrapYourCar
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-secondary/60 to-brand-secondary/20 rounded-full" />
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Your trusted partner in automotive recycling, committed to providing 
            fair prices, exceptional service, and environmentally responsible solutions.
          </p>
        </motion.div>

        {/* Key Stats - Static background, only fade animation */}
        <div className="mt-20 relative group">
          {/* Static background - no animation for CLS prevention */}
          <div
            className="absolute inset-0 -z-10"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-brand-secondary/25 via-brand-secondary/10 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="absolute inset-0 rounded-3xl border border-brand-secondary/20 group-hover:border-brand-secondary/40 transition-all duration-500" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
          </div>

          {/* Stats Grid - Optimized with container variants */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-3 gap-8 text-center relative z-10 bg-white bg-opacity-50 rounded-3xl p-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <motion.div 
                className="text-3xl lg:text-4xl font-bold text-brand-secondary mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                15+
              </motion.div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <motion.div 
                className="text-3xl lg:text-4xl font-bold text-brand-secondary mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                viewport={{ once: true }}
              >
                50K+
              </motion.div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <motion.div 
                className="text-3xl lg:text-4xl font-bold text-brand-secondary mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                100%
              </motion.div>
              <div className="text-muted-foreground">Secure Process</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}