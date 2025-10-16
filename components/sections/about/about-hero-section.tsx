"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Award, Users, Recycle, Shield } from "lucide-react"

export function AboutHeroSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-brand-charcoal via-brand-slate to-brand-charcoal overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 30px 30px, rgba(255, 255, 255, 0.1) 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About{" "}
            <span className="text-brand-gold">Scrap Your Car</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your trusted partner in automotive recycling, committed to providing 
            fair prices, exceptional service, and environmentally responsible solutions.
          </motion.p>

          {/* Key Stats */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-4">
                <Users className="h-8 w-8 text-brand-gold" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">10,000+</div>
              <div className="text-gray-400 text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-4">
                <Recycle className="h-8 w-8 text-brand-gold" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-4">
                <Award className="h-8 w-8 text-brand-gold" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">4.9★</div>
              <div className="text-gray-400 text-sm">Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-4">
                <Shield className="h-8 w-8 text-brand-gold" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400 text-sm">Licensed & Insured</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Recycle className="h-12 w-12 text-brand-gold" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 opacity-20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Award className="h-10 w-10 text-brand-gold" />
      </motion.div>
    </section>
  )
}