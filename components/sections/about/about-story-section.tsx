"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useReducedMotion } from "framer-motion"
import { Calendar, MapPin, Target, Heart } from "lucide-react"

export function AboutStorySection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="bg-background py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Optimized timing */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
            <span className="text-sm font-medium text-brand-secondary uppercase tracking-wider">Our Journey</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Our <span className="text-brand-secondary relative">
              Story
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-secondary/60 to-brand-secondary/20 rounded-full" />
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A vision to revolutionize the automotive recycling industry through 
            fair pricing, exceptional service, and environmental responsibility.
          </p>
        </motion.div>

        {/* Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content - Reduced animation duration */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12">
                  <Calendar className="h-6 w-6 text-brand-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Our Foundation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Scrap Your Car was established with a simple mission: to provide car owners with a 
                    fair, transparent, and hassle-free way to sell their scrap vehicles while 
                    promoting environmental sustainability.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12">
                  <MapPin className="h-6 w-6 text-brand-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Local Roots, Growing Reach</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Starting as a small family business, we&apos;ve grown to serve the entire metropolitan 
                    area while maintaining our commitment to personalized service and community values.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12">
                  <Target className="h-6 w-6 text-brand-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Innovation & Excellence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We continuously invest in technology and training to provide the most accurate 
                    valuations, efficient service, and seamless customer experience in the industry.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual Content - Reduced delay for better performance */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-brand-secondary/10 to-brand-primary/5 border border-brand-secondary/20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-secondary/10 rounded-full mb-6">
                  <Heart className="h-8 w-8 text-brand-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To transform the automotive recycling experience by combining cutting-edge 
                  technology with genuine care for our customers and the environment, ensuring 
                  every interaction is transparent, fair, and beneficial for all.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}