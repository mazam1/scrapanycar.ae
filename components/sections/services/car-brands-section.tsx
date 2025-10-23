"use client"

import * as React from "react"
import { motion } from "framer-motion"

export function CarBrandsSection() {
  const brands = [
    { name: "BMW", logo: "🚗" },
    { name: "Mercedes", logo: "⭐" },
    { name: "Toyota", logo: "🚙" },
    { name: "Audi", logo: "🏎️" },
    { name: "Honda", logo: "🚗" },
    { name: "Ford", logo: "🚐" },
    { name: "Nissan", logo: "🚗" },
    { name: "Hyundai", logo: "🚙" },
    { name: "Lexus", logo: "✨" },
    { name: "Porsche", logo: "🏁" },
    { name: "Tesla", logo: "⚡" },
    { name: "Land Rover", logo: "🏔️" }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Popular Car Brands We Buy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We purchase vehicles from all major automotive manufacturers at competitive prices
          </p>
        </motion.div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {brand.logo}
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {brand.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don&apos;t See Your Brand?
            </h3>
            <p className="text-gray-600 mb-6">
              We buy vehicles from all manufacturers, regardless of make, model, or condition. 
              Contact us for a personalized quote on your specific vehicle.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Get Custom Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}