'use client'

import { motion } from 'framer-motion'
import { Car, Users, Zap, Compass } from 'lucide-react'

export default function VehiclesWeBuySection() {
  const vehicleTypes = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Luxury Vehicles",
      description: "Premium cars, sport cars, and high-end models",
      bgImage: "bg-gradient-to-br from-slate-700 to-slate-900"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Family Vehicles", 
      description: "SUVs, minivans, and family-friendly cars",
      bgImage: "bg-gradient-to-br from-blue-600 to-blue-800"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Sports Cars",
      description: "High-performance and sports vehicles",
      bgImage: "bg-gradient-to-br from-red-600 to-red-800"
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Compact Cars",
      description: "Economy cars, hatchbacks, and city vehicles",
      bgImage: "bg-gradient-to-br from-green-600 to-green-800"
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
            Vehicles We Buy
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We purchase all types of vehicles in any condition at competitive market prices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicleTypes.map((vehicle, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`${vehicle.bgImage} p-8 h-64 relative`}>
                {/* Background overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 w-fit mb-4">
                      <div className="text-white">
                        {vehicle.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">
                      {vehicle.title}
                    </h3>
                    
                    <p className="text-white/90 text-sm leading-relaxed">
                      {vehicle.description}
                    </p>
                  </div>
                  
                  {/* Bottom decoration */}
                  <div className="flex justify-end">
                    <div className="w-12 h-1 bg-white/30 rounded-full" />
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