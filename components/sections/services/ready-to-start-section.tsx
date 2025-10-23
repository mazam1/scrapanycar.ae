'use client'

import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

export default function ReadyToStartSection() {
  return (
    <section className="bg-slate-900 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the difference of professional car buying services. Get your free 
            valuation today and discover why thousands trust CarooFix.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <motion.button
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Valuation
            </motion.button>
            
            <motion.button
              className="border-2 border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              Call +971 56 855 8762
            </motion.button>
          </div>

          <motion.div
            className="flex items-center justify-center gap-4 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-1">
              <span className="text-yellow-400 text-lg">★★★★★</span>
            </div>
            <span className="text-sm">
              Trusted by 10,000+ satisfied customers
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}