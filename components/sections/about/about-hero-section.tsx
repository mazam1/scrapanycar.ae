"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Award, Users, Recycle, Shield } from "lucide-react"

export function AboutHeroSection() {
  return (
    <section className="bg-background py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold text-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About{' '}
          <span className="text-brand-gold">Scrap Your Car</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Your trusted partner in automotive recycling, committed to providing 
          fair prices, exceptional service, and environmentally responsible solutions.
        </motion.p>

        {/* Key Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-gold/10 rounded-full mb-4">
              <Award className="w-8 h-8 text-brand-gold" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-gold/10 rounded-full mb-4">
              <Users className="w-8 h-8 text-brand-gold" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-gold/10 rounded-full mb-4">
              <Recycle className="w-8 h-8 text-brand-gold" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">100K+</div>
            <div className="text-sm text-muted-foreground">Cars Recycled</div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-gold/10 rounded-full mb-4">
              <Shield className="w-8 h-8 text-brand-gold" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Secure Process</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}