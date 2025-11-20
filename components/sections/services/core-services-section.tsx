'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'
import { CheckCircle, DollarSign, Calendar, MapPin, Zap, Shield } from 'lucide-react'

export default function CoreServicesSection() {
  const shouldReduceMotion = useReducedMotion()
  const services = [
    {
      icon: DollarSign,
      title: "Free Vehicle Valuation",
      description: "Professional market assessment with no obligations",
      features: ["Market analysis", "Expert inspection", "Instant report", "Zero hidden fees"],
      bgUrl: "https://images.unsplash.com/photo-1551522435-a13afa10f103?q=80&w=1200&auto=format&fit=crop",
    },
    {
      icon: Calendar,
      title: "Professional Inspection",
      description: "Comprehensive vehicle assessment by certified experts",
      features: ["Mechanical check", "Body condition", "Interior eval", "Detailed report"],
      bgUrl: "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1200&auto=format&fit=crop",
    },
    {
      icon: Zap,
      title: "Instant Cash Payment",
      description: "Same-day payment after offer acceptance",
      features: ["Multiple options", "Bank transfer", "24h processing", "Secure guarantee"],
      bgUrl: "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      icon: MapPin,
      title: "Free Pickup Service",
      description: "Convenient pickup from your location at zero cost",
      features: ["Full coverage", "Flexible times", "Pro team", "Full insurance"],
      bgUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop",
    }
  ]

  return (
    <section className="bg-background py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
            <span className="text-sm font-medium text-brand-secondary uppercase tracking-wider">Core Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Everything for Your Car <span className="text-brand-secondary relative">
              Sale
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-secondary/60 to-brand-secondary/20 rounded-full" />
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Complete end-to-end solutions handled by experienced professionals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                className="relative rounded-2xl overflow-hidden group min-h-[380px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: shouldReduceMotion ? 0 : Math.min(index * 0.08, 0.2)
                }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: shouldReduceMotion ? 0 : -5 }}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.bgUrl})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />
                
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-secondary/20 backdrop-blur-sm border border-brand-secondary/40 rounded-xl mb-6 group-hover:border-brand-secondary/60 transition-colors">
                      <Icon className="w-7 h-7 text-brand-secondary" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-white/80 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-brand-secondary flex-shrink-0" />
                        <span className="text-white/90 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}