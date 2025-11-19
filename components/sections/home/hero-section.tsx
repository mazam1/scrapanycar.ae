"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Clock } from "lucide-react"

import ActionButtons from "@/components/sections/home/action-buttons"
import { UaeDirhamIcon } from "@/components/icons/uae-dirham-icon"

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
          backgroundImage: 'url(/hero_img.jpg)',
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Dark Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundColor: '#000000'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight text-container-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Turn Your{" "}
            <span className="text-brand-primary">Old Car</span>{" "}
            Into{" "}
            <span className="text-brand-primary">Instant Cash</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="responsive-text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-container-center"
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
            <div className="flex items-center gap-2 text-white min-w-fit">
              <UaeDirhamIcon className="h-5 w-5 text-brand-secondary flex-shrink-0" />
              <span className="responsive-text-sm whitespace-nowrap">Best Prices</span>
            </div>
            <div className="flex items-center gap-2 text-white min-w-fit">
              <Clock className="h-5 w-5 text-brand-secondary flex-shrink-0" />
              <span className="responsive-text-sm whitespace-nowrap">Same Day Payment</span>
            </div>
          </motion.div>

          {/* Action Buttons matching reference */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <ActionButtons />
          </motion.div>
        </div>
      </div>
    </section>
  )
}