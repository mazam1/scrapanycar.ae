'use client'

import { motion } from 'framer-motion'
import { Shield, FileText, Clock, TrendingUp } from 'lucide-react'

export default function AdditionalServicesSection() {
  const additionalServices = [
    {
      icon: Shield,
      title: "Damage Assessment",
      description: "Professional evaluation of accident-damaged or problematic vehicles",
      color: "text-brand-secondary"
    },
    {
      icon: FileText,
      title: "Title & Documentation",
      description: "Complete handling of paperwork and title transfer processes",
      color: "text-brand-secondary"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance throughout your selling journey",
      color: "text-brand-secondary"
    },
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description: "Detailed market research to ensure competitive pricing",
      color: "text-brand-secondary"
    }
  ]

  return (
    <section className="bg-background py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
            <span className="text-sm font-medium text-brand-secondary uppercase tracking-wider">Extra Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Additional <span className="text-brand-secondary relative">
              Support
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-secondary/60 to-brand-secondary/20 rounded-full" />
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Beyond the basics – comprehensive support services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {additionalServices.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-secondary/20 via-brand-secondary/5 to-transparent rounded-xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-500 -z-10" />
                <div className="absolute bg-white inset-0 rounded-xl border border-brand-secondary/20 group-hover:border-brand-secondary/50 transition-all duration-300 -z-10" />
                
                <motion.div
                  className="p-8 rounded-xl bg-card text-center relative"
                  whileHover={{ y: -5 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-secondary/10 rounded-xl mb-6 group-hover:bg-brand-secondary/20 transition-colors">
                    <Icon className="w-8 h-8 text-brand-secondary" />
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}