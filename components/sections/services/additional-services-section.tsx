'use client'

import { motion } from 'framer-motion'
import { Shield, FileText, Clock, TrendingUp } from 'lucide-react'

export default function AdditionalServicesSection() {
  const additionalServices = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Damage Assessment",
      description: "Professional evaluation of accident-damaged or problematic vehicles"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Title & Documentation",
      description: "Complete handling of paperwork and title transfer processes"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Customer Support",
      description: "Round-the-clock assistance throughout your selling journey"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Market Analysis",
      description: "Detailed market research to ensure competitive pricing"
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
            Additional Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive support services to make your car selling experience seamless
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {additionalServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 text-center border border-slate-700 hover:border-orange-500 transition-colors group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="bg-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-400 transition-colors">
                <div className="text-white">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}