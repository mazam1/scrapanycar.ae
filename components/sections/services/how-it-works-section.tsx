'use client'

import { motion } from 'framer-motion'
import { Calendar, User, DollarSign, CheckCircle } from 'lucide-react'

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      icon: <User className="w-8 h-8" />,
      title: "Request Valuation",
      description: "Fill out our comprehensive form with your vehicle details",
      color: "bg-blue-500"
    },
    {
      number: 2,
      icon: <Calendar className="w-8 h-8" />,
      title: "Professional Inspection",
      description: "Our certified inspectors assess your vehicle thoroughly",
      color: "bg-green-500"
    },
    {
      number: 3,
      icon: <DollarSign className="w-8 h-8" />,
      title: "Receive Offer",
      description: "Get a fair, competitive offer based on market analysis",
      color: "bg-purple-500"
    },
    {
      number: 4,
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Complete Sale",
      description: "Accept the offer and receive instant payment",
      color: "bg-orange-500"
    }
  ]

  return (
    <section className="bg-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our streamlined 4-step process makes selling your car simple and stress-free
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Step Card */}
              <div className="bg-slate-800 rounded-2xl p-8 text-center relative border border-slate-700 hover:border-slate-600 transition-colors">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white text-slate-900 w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4`}>
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-700 transform -translate-y-1/2 z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}