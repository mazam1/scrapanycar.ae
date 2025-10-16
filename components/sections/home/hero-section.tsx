"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Car, DollarSign, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-charcoal via-brand-slate to-brand-charcoal overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, white 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Turn Your{" "}
            <span className="text-brand-gold">Old Car</span>{" "}
            Into{" "}
            <span className="text-brand-gold">Instant Cash</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Get the best price for your scrap car with our hassle-free service. 
            Free pickup, instant quotes, and same-day payment guaranteed.
          </motion.p>

          {/* Key Benefits */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-2 text-white">
              <DollarSign className="h-5 w-5 text-brand-gold" />
              <span className="text-sm sm:text-base">Best Prices</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Car className="h-5 w-5 text-brand-gold" />
              <span className="text-sm sm:text-base">Free Pickup</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Clock className="h-5 w-5 text-brand-gold" />
              <span className="text-sm sm:text-base">Same Day Payment</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-brand-gold hover:bg-brand-gold/90 text-brand-charcoal font-semibold px-8 py-4 text-lg group"
            >
              Get Instant Quote
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-brand-charcoal px-8 py-4 text-lg"
            >
              Call Now: (555) 123-4567
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <p className="text-gray-400 text-sm mb-4">Trusted by 10,000+ customers</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-white text-xs">★★★★★ 4.9/5 Rating</div>
              <div className="text-white text-xs">Licensed & Insured</div>
              <div className="text-white text-xs">BBB Accredited</div>
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
        <Car className="h-12 w-12 text-brand-gold" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 opacity-20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <DollarSign className="h-10 w-10 text-brand-gold" />
      </motion.div>
    </section>
  )
}