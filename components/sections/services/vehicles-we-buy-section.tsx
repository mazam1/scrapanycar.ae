'use client'

import { motion } from 'framer-motion'
import { Car, Users, Zap, Compass } from 'lucide-react'

export default function VehiclesWeBuySection() {
  const vehicleTypes = [
    {
      icon: Car,
      title: "Luxury Vehicles",
      description: "Premium & sports cars",
      bgUrl: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=1920&auto=format&fit=crop"
    },
    {
      icon: Users,
      title: "Family Vehicles", 
      description: "SUVs & minivans",
      bgUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1920&auto=format&fit=crop"
    },
    {
      icon: Zap,
      title: "Sports Cars",
      description: "High-performance models",
      bgUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1920&auto=format&fit=crop"
    },
    {
      icon: Compass,
      title: "Economy Cars",
      description: "Hatchbacks & sedans",
      bgUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1920&auto=format&fit=crop"
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
            <span className="text-sm font-medium text-brand-secondary uppercase tracking-wider">Vehicle Types</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            All Vehicle Types <span className="text-brand-secondary relative">
              Accepted
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-secondary/60 to-brand-secondary/20 rounded-full" />
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Any condition, any age, any make or model
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicleTypes.map((vehicle, index) => {
            const Icon = vehicle.icon
            return (
              <motion.div
                key={index}
                className="relative rounded-2xl overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div 
                  className="h-64 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${vehicle.bgUrl})` }}
                >
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
                  
                  <div className="relative z-10 h-full p-6 flex flex-col justify-between">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-secondary/20 backdrop-blur-sm border border-brand-secondary/40 rounded-xl self-start group-hover:bg-brand-secondary/30 transition-colors">
                      <Icon className="w-7 h-7 text-brand-secondary" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {vehicle.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {vehicle.description}
                      </p>
                      <div className="mt-3 h-1 w-8 bg-gradient-to-r from-brand-secondary to-brand-secondary/30 rounded-full" />
                    </div>
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