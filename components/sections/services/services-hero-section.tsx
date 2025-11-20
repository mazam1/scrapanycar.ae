'use client'

import { motion } from 'framer-motion'

export default function ServicesHeroSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
          <span className="text-sm font-medium text-brand-secondary uppercase tracking-wider">Our Services</span>
        </motion.div>

        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Comprehensive Car Selling{' '}
          <span className="text-brand-secondary relative">
            Solutions
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-secondary/60 to-brand-secondary/20 rounded-full" />
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Professional valuations, seamless transactions, and industry-leading support designed specifically for your convenience
        </motion.p>
      </div>

      {/* Stats Section */}
      <div className="mt-20 max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center group">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-secondary/10 group-hover:bg-brand-secondary/20 transition-colors mb-4"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-3xl font-bold text-brand-secondary">10K+</span>
            </motion.div>
            <p className="text-muted-foreground text-sm">Cars Recycled</p>
          </div>
          
          <div className="text-center group">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-secondary/10 group-hover:bg-brand-secondary/20 transition-colors mb-4"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-3xl font-bold text-brand-secondary">AED 2M+</span>
            </motion.div>
            <p className="text-muted-foreground text-sm">Paid Out</p>
          </div>
          
          <div className="text-center group">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-secondary/10 group-hover:bg-brand-secondary/20 transition-colors mb-4"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-3xl font-bold text-brand-secondary">4.9★</span>
            </motion.div>
            <p className="text-muted-foreground text-sm">Rating</p>
          </div>
          
          <div className="text-center group">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-secondary/10 group-hover:bg-brand-secondary/20 transition-colors mb-4"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-3xl font-bold text-brand-secondary">24/7</span>
            </motion.div>
            <p className="text-muted-foreground text-sm">Support</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}