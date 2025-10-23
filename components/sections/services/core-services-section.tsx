'use client'

import { motion } from 'framer-motion'
import { CheckCircle, DollarSign, Calendar, MapPin } from 'lucide-react'

export default function CoreServicesSection() {
  const services = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Free Vehicle Valuation",
      description: "Get a professional assessment of your car's market value with no obligations",
      features: [
        "Comprehensive market analysis",
        "Professional inspection by certified experts",
        "Instant valuation report",
        "No hidden fees or charges"
      ],
      bgImage: "bg-card border border-border",
      premium: true
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Professional Car Inspection",
      description: "Thorough vehicle assessment by experienced automotive professionals",
      features: [
        "Complete mechanical inspection",
        "Body and paint condition assessment",
        "Interior and exterior evaluation",
        "Detailed condition report"
      ],
      bgImage: "bg-card border border-border",
      premium: true
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Instant Cash Payment",
      description: "Get paid immediately after accepting our fair market offer",
      features: [
        "Multiple payment options available",
        "Bank transfer or certified check",
        "Same-day payment processing",
        "Secure transaction guarantee"
      ],
      bgImage: "bg-card border border-border",
      premium: true
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Free Vehicle Pickup",
      description: "Convenient pickup service from your location at no extra cost",
      features: [
        "Nationwide pickup coverage",
        "Flexible scheduling options",
        "Professional transport team",
        "Full insurance coverage during transport"
      ],
      bgImage: "bg-card border border-border",
      premium: true
    }
  ]

  return (
    <section className="bg-background py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="responsive-text-xl font-bold text-foreground mb-4 text-container-center">
            Core Services
          </h2>
          <p className="responsive-text-lg text-muted-foreground max-w-3xl mx-auto text-container-center">
            Everything you need to sell your car quickly, safely, and profitably
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group min-h-[400px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`${service.bgImage} p-8 h-full relative hover:border-brand-gold/60 flex flex-col`}>
                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-start mb-4">
                    <div className="bg-background border border-border rounded-full p-3 mr-4 flex-shrink-0">
                      {service.icon}
                    </div>
                    <h3 className="responsive-text-lg font-bold text-foreground card-text">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 responsive-text-base card-text flex-1">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 gap-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-gold mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80 responsive-text-sm card-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {service.premium && (
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center">
                        <span className="bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                          ★ Premium Service
                        </span>
                      </div>
                      <div className="text-brand-gold text-lg flex-shrink-0">
                        ★★★★★
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}