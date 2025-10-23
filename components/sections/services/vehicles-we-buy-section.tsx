'use client'

import { motion } from 'framer-motion'
import { Car, Users, Zap, Compass } from 'lucide-react'

export default function VehiclesWeBuySection() {
  const vehicleTypes = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Luxury Vehicles",
      description: "Premium cars, sport cars, and high-end models",
      bgImage: "bg-card"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Family Vehicles", 
      description: "SUVs, minivans, and family-friendly cars",
      bgImage: "bg-card"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Sports Cars",
      description: "High-performance and sports vehicles",
      bgImage: "bg-card"
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Compact Cars",
      description: "Economy cars, hatchbacks, and city vehicles",
      bgImage: "bg-card"
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
            Vehicles We Buy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We purchase all types of vehicles in any condition at competitive market prices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicleTypes.map((vehicle, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-sm group cursor-pointer border border-border hover:border-brand-gold/60 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`${vehicle.bgImage} p-8 h-64 relative`}>               
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="bg-brand-gold rounded-full p-4 w-fit mb-4">
                      <div className="text-brand-charcoal">
                        {vehicle.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {vehicle.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {vehicle.description}
                    </p>
                  </div>
                  
                  {/* Bottom decoration */}
                  <div className="flex justify-end">
                    <div className="w-12 h-1 bg-brand-gold/60 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}