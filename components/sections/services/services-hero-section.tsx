"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Car, Truck, DollarSign, Clock, Shield, Recycle } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ServicesHeroSection() {
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
            Our <span className="text-brand-gold">Services</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Comprehensive automotive recycling solutions designed to maximize value 
            while minimizing hassle for our customers.
          </motion.p>

          {/* Service Highlights */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm">
              <Car className="h-8 w-8 text-brand-gold mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">All Vehicle Types</h3>
              <p className="text-gray-300 text-sm">Cars, trucks, SUVs, motorcycles</p>
            </div>
            <div className="p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm">
              <Truck className="h-8 w-8 text-brand-gold mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Free Pickup</h3>
              <p className="text-gray-300 text-sm">Anywhere in the metro area</p>
            </div>
            <div className="p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm">
              <DollarSign className="h-8 w-8 text-brand-gold mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Instant Payment</h3>
              <p className="text-gray-300 text-sm">Cash or bank transfer</p>
            </div>
            <div className="p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm">
              <Clock className="h-8 w-8 text-brand-gold mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Same Day Service</h3>
              <p className="text-gray-300 text-sm">Quick turnaround time</p>
            </div>
            <div className="p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm">
              <Shield className="h-8 w-8 text-brand-gold mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-gray-300 text-sm">Fully compliant operations</p>
            </div>
            <div className="p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm">
              <Recycle className="h-8 w-8 text-brand-gold mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-300 text-sm">Sustainable recycling</p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-brand-gold hover:bg-brand-gold/90 text-brand-charcoal font-semibold px-8 py-4 text-lg"
            >
              Get Your Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-brand-charcoal px-8 py-4 text-lg"
            >
              Call (555) 123-4567
            </Button>
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
        <Recycle className="h-10 w-10 text-brand-gold" />
      </motion.div>
    </section>
  )
}