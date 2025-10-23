"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Shield, Clock, Heart, DollarSign, Car, Wrench } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Trusted & Secure",
      description: "Licensed car buyers with full insurance coverage and secure transaction processes protecting every sale",
      color: "text-blue-600"
    },
    {
      icon: Clock,
      title: "Fast 30-Minute Process",
      description: "Complete evaluation and payment in just 30 minutes with our streamlined professional service",
      color: "text-orange-600"
    },
    {
      icon: Heart,
      title: "Hassle-Free Experience", 
      description: "No paperwork complications, hidden fees, or complicated procedures - just honest, transparent deals",
      color: "text-green-600"
    },
    {
      icon: DollarSign,
      title: "Instant Cash Payment",
      description: "Get paid immediately on the spot via cash, certified check, or instant bank transfer options",
      color: "text-purple-600"
    },
    {
      icon: Car,
      title: "All Car Conditions Welcome",
      description: "From pristine classics to project cars, we buy vehicles in any condition at fair market prices",
      color: "text-red-600"
    },
    {
      icon: Wrench,
      title: "Expert Evaluation",
      description: "Professional assessment by certified automotive experts ensuring you get the maximum value",
      color: "text-indigo-600"
    }
  ]

  const conditionTypes = [
    { title: "Damaged Cars", subtitle: "Accident damaged vehicles" },
    { title: "Scrap Cars", subtitle: "End-of-life vehicles" },
    { title: "Abandoned Cars", subtitle: "Neglected vehicles" },
    { title: "Insurance Write-offs", subtitle: "Category damaged cars" },
    { title: "Mechanical Issues", subtitle: "Engine or transmission problems" }
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
            Why Choose <span className="text-blue-600">Caroofix</span> for Selling Your Car
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Caroofix has been the trusted choice for car sellers nationwide for over 15 years. We specialize in 
            providing fair, transparent, and hassle-free car buying services.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Car Conditions Section */}
        <motion.div
          className="bg-white rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              All Car Conditions Welcome
            </h3>
            <p className="text-lg text-gray-600">
              We buy vehicles in any condition - no matter the state of your car
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {conditionTypes.map((condition, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-3">🚗</div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {condition.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {condition.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}