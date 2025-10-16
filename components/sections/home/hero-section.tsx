"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, DollarSign, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [scrollY, setScrollY] = React.useState(0)

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero_img.png)',
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Accent Color Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundColor: '#c49a36'
        }}
      />

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
              className="border-white text-white hover:bg-white hover:text-brand-charcoal px-8 py-4 text-lg"
            >
              Call Now: (555) 123-4567
            </Button>
          </motion.div>


        </div>
      </div>


    </section>
  )
}