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
          Car Scrapping Services in{' '}
          <span className="text-brand-secondary relative">
            Dubai & UAE
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-secondary/60 to-brand-secondary/20 rounded-full" />
          </span>
        </motion.h1>
        
        <motion.p
          className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Professional car buying and scrapping services across Dubai and the UAE. Get instant valuations, free pickup, and same-day payment for your vehicle.
        </motion.p>
      </div>

      {/* Stats Section - Matching features-section.tsx design */}
      <div className="mt-20 max-w-7xl mx-auto">
        <div className="relative group overflow-hidden rounded-3xl border border-brand-secondary/20 hover:border-brand-secondary/40 transition-all duration-500">
          {/* Static background - no animation for CLS prevention */}
          <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/25 via-brand-secondary/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/20 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-primary/15 rounded-full blur-3xl opacity-50" />
          </div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10 bg-white/50 backdrop-blur-sm rounded-3xl p-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-brand-secondary mb-2">10K+</div>
              <div className="text-muted-foreground">Cars Recycled</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-brand-secondary mb-2">AED 2M+</div>
              <div className="text-muted-foreground">Paid to Customers</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-brand-secondary mb-2">4.9★</div>
              <div className="text-muted-foreground">Customer Rating</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-brand-secondary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}