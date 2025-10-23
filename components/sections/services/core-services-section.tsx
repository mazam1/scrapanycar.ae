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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Core Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to sell your car quickly, safely, and profitably
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`${service.bgImage} p-8 h-full relative hover:border-brand-gold/60`}>
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-background border border-border rounded-full p-3 mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-brand-gold mr-2 flex-shrink-0" />
                        <span className="text-foreground/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {service.premium && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-full text-sm font-medium">
                          ★ Premium Service
                        </span>
                      </div>
                      <div className="text-brand-gold text-lg">
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