'use client'

import { motion } from 'framer-motion'
import { CheckCircle, DollarSign, Calendar, MapPin } from 'lucide-react'

export default function CoreServicesSection() {
  const services = [
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      title: "Free Vehicle Valuation",
      description: "Get a professional assessment of your car's market value with no obligations",
      features: [
        "Comprehensive market analysis",
        "Professional inspection by certified experts",
        "Instant valuation report",
        "No hidden fees or charges"
      ],
      bgImage: "border border-border bg-cover bg-center",
      bgUrl: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1200&auto=format&fit=crop",
      premium: true
    },
    {
      icon: <Calendar className="w-8 h-8 text-white" />,
      title: "Professional Car Inspection",
      description: "Thorough vehicle assessment by experienced automotive professionals",
      features: [
        "Complete mechanical inspection",
        "Body and paint condition assessment",
        "Interior and exterior evaluation",
        "Detailed condition report"
      ],
      bgImage: "border border-border bg-cover bg-center",
      bgUrl: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1200&auto=format&fit=crop",
      premium: true
    },
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      title: "Instant Cash Payment",
      description: "Get paid immediately after accepting our fair market offer",
      features: [
        "Multiple payment options available",
        "Bank transfer or certified check",
        "Same-day payment processing",
        "Secure transaction guarantee"
      ],
      bgImage: "border border-border bg-cover bg-center",
      bgUrl: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=1200&auto=format&fit=crop",
      premium: true
    },
    {
      icon: <MapPin className="w-8 h-8 text-white" />,
      title: "Free Vehicle Pickup",
      description: "Convenient pickup service from your location at no extra cost",
      features: [
        "Nationwide pickup coverage",
        "Flexible scheduling options",
        "Professional transport team",
        "Full insurance coverage during transport"
      ],
      bgImage: "border border-border bg-cover bg-center",
      bgUrl: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1200&auto=format&fit=crop",
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
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Core <span className="text-brand-gold">Services</span>
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
              <div 
                className={`${service.bgImage} p-8 h-full relative hover:border-brand-gold/60 flex flex-col`}
                style={{ 
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${service.bgUrl})`,
                }}
              >
                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-start mb-4">
                    <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-full p-3 mr-4 flex-shrink-0">
                      {service.icon}
                    </div>
                    <h3 className="responsive-text-lg font-bold text-white card-text">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-white/90 mb-6 responsive-text-base card-text flex-1">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 gap-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-gold mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-white responsive-text-sm card-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Premium service badge removed as requested */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}