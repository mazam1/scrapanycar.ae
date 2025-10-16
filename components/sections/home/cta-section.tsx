"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Phone, MessageCircle, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 bg-ring relative overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
          backgroundSize: '50px 50px',
          backgroundPosition: '0 0, 25px 25px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Turn Your Car Into{" "}
              <span className="text-brand-gold">Cash Today?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Don't let your old car sit and depreciate. Get an instant quote and 
              same-day pickup with Scrap Your Car — the trusted choice for scrap car removal.
            </p>
          </motion.div>

          {/* Urgency Indicators */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full">
              <Clock className="h-4 w-4 text-brand-gold" />
              <span className="text-sm">Limited Time Offer</span>
            </div>
            <div className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full">
              <Phone className="h-4 w-4 text-brand-gold" />
              <span className="text-sm">24/7 Available</span>
            </div>
            <div className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full">
              <MessageCircle className="h-4 w-4 text-brand-gold" />
              <span className="text-sm">Instant Response</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-brand-gold hover:bg-brand-gold/90 text-brand-charcoal font-semibold px-8 py-4 text-lg group min-w-[200px]"
              onClick={() => {
                const el = document.getElementById('valuation-form')
                el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            >
              Get Instant Quote
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-brand-charcoal px-8 py-4 text-lg min-w-[200px]"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call +971 4 123 4567
            </Button>
          </motion.div>

          {/* Value Proposition */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-gold mb-2">AED 500+</div>
              <div className="text-white text-sm">Average Payout</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-gold mb-2">30min</div>
              <div className="text-white text-sm">Average Pickup Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-gold mb-2">0%</div>
              <div className="text-white text-sm">Hidden Fees</div>
            </div>
          </motion.div>

          {/* Guarantee */}
          <motion.div
            className="p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              Our 100% Satisfaction Guarantee
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We're so confident in our service that we guarantee you'll be satisfied with your experience. 
              If you're not happy with our quote or service, we'll work to make it right or you don't pay a thing.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm">
              Questions? Call us at{" "}
              <a href="tel:+97141234567" className="text-brand-gold hover:underline">
                +971 4 123 4567
              </a>{" "}
              or email{" "}
              <a href="mailto:info@scrapanycar.ae" className="text-brand-gold hover:underline">
                info@scrapanycar.ae
              </a>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 left-10 opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-16 h-16 border-2 border-brand-gold rounded-full" />
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10 opacity-10"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-12 h-12 border-2 border-brand-gold rounded-full" />
      </motion.div>
    </section>
  )
}