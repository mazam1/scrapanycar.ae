'use client'

import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ReadyToStartSection() {
  return (
    <section className="bg-background py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the difference of professional car buying services. Get your free 
            valuation today and discover why thousands trust ScrapYourCar.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="gold"
                size="lg"
                className="font-semibold px-8 py-4 text-lg"
              >
                Get Free Valuation
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button asChild variant="outline" size="lg" className="px-8 py-4 text-lg">
                <a href="tel:+971568558762" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call +971 56 855 8762
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="flex items-center justify-center gap-4 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-1">
              <span className="text-brand-gold text-lg">★★★★★</span>
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