"use client"

import * as React from "react"
import { motion } from "framer-motion"

export function StatsSection() {
  const stats = [
    {
      number: "50K+",
      label: "Cars Purchased",
      icon: "🚗"
    },
    {
      number: "98%",
      label: "Happy Customers",
      icon: "😊"
    },
    {
      number: "24/7",
      label: "Support",
      icon: "📞"
    },
    {
      number: "15+",
      label: "Years Experience",
      icon: "⭐"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl lg:text-4xl font-bold text-blue-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}