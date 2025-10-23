'use client'

import { motion } from 'framer-motion'

export default function ServicesHeroSection() {
  return (
    <section className="bg-slate-900 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our{' '}
          <span className="text-orange-500">Services</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Comprehensive car buying services designed to provide maximum value and convenience.
          <br />
          From free valuations to instant payments, we handle every aspect of your car sale.
        </motion.p>
      </div>
    </section>
  )
}