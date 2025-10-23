"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export function TrustedExperienceSection() {
  const features = [
    "Professional Vehicle Inspection",
    "Fair Market Value Assessment", 
    "Instant Cash Payment Options",
    "Free Nationwide Pickup Service"
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Trusted Car Buying
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                15+ Years Experience
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                With over 15 years in the automotive industry, we provide professional car buying 
                services across the nation. Our experienced team ensures you get the best value 
                for your vehicle through expert evaluation and transparent pricing.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Experience Badge */}
            <motion.div
              className="mt-8 inline-flex items-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">15+</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">Expert</div>
                <div className="text-sm text-gray-600">Team</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-8 text-white">
              <div className="text-center">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold mb-4">Award-Winning Service</h3>
                <p className="text-blue-100 mb-6">
                  Recognized for excellence in customer service and fair pricing practices
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-orange-400">50K+</div>
                    <div className="text-sm text-blue-200">Satisfied Customers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-400">98%</div>
                    <div className="text-sm text-blue-200">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}