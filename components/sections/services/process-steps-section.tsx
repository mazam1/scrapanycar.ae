"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { FileText, Calendar, DollarSign } from "lucide-react"

export function ProcessStepsSection() {
  const steps = [
    {
      number: "1",
      title: "Get Free No-Obligation Valuation",
      description: "Fill out our comprehensive form and receive a professional valuation from our expert team within 24 hours",
      icon: FileText,
      color: "bg-blue-500"
    },
    {
      number: "2", 
      title: "Book Free Car Inspection",
      description: "Schedule a convenient time for our certified professionals to inspect your vehicle at your location",
      icon: Calendar,
      color: "bg-orange-500"
    },
    {
      number: "3",
      title: "Complete Sale & Get Paid",
      description: "If you're happy with our offer, complete the sale and receive instant payment via your preferred method",
      icon: DollarSign,
      color: "bg-green-500"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
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
            Get Your Offer in <span className="text-orange-500">30 Minutes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our simple 3-step process ensures you get the best value for your car quickly and efficiently
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Step Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                {/* Step Number */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${step.color} text-white font-bold text-xl mb-6`}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <step.icon className="h-12 w-12 text-gray-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Arrow (hidden on mobile, shown on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-blue-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-6">
              Join thousands of satisfied customers who have chosen our professional car buying service
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Start Your Free Valuation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}