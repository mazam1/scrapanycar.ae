"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin, Target, Heart } from "lucide-react"

export function AboutStorySection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-brand-gold">Story</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Founded with a vision to revolutionize the automotive recycling industry through 
              fair pricing, exceptional service, and environmental responsibility.
            </p>
          </motion.div>

          {/* Story Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-brand-gold/10 border border-brand-gold/20 mt-1">
                    <Calendar className="h-5 w-5 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Founded in 2008</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Scrap Your Car was established with a simple mission: to provide car owners with a 
                      fair, transparent, and hassle-free way to sell their scrap vehicles while 
                      promoting environmental sustainability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-brand-gold/10 border border-brand-gold/20 mt-1">
                    <MapPin className="h-5 w-5 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Local Roots, Growing Reach</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Starting as a small family business, we've grown to serve the entire metropolitan 
                      area while maintaining our commitment to personalized service and community values.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-brand-gold/10 border border-brand-gold/20 mt-1">
                    <Target className="h-5 w-5 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Innovation & Excellence</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We continuously invest in technology and training to provide the most accurate 
                      valuations, efficient service, and seamless customer experience in the industry.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Visual Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-brand-gold/5 to-brand-gold/10 border border-brand-gold/20">
                <div className="text-center">
                  <div className="inline-flex p-6 rounded-full bg-brand-gold/20 border border-brand-gold/30 mb-6">
                    <Heart className="h-12 w-12 text-brand-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To transform the automotive recycling experience by combining cutting-edge 
                    technology with genuine care for our customers and the environment, ensuring 
                    every interaction is transparent, fair, and beneficial for all.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground text-center mb-12">
              Our Journey
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-brand-gold/20" />
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {[
                  {
                    year: "2008",
                    title: "Company Founded",
                    description: "Started as a small family business with a single tow truck and big dreams."
                  },
                  {
                    year: "2012",
                    title: "First Expansion",
                    description: "Opened our first recycling facility and expanded our service area."
                  },
                  {
                    year: "2016",
                    title: "Technology Integration",
                    description: "Launched our online quote system and mobile-friendly platform."
                  },
                  {
                    year: "2020",
                    title: "Environmental Certification",
                    description: "Achieved ISO 14001 certification for environmental management."
                  },
                  {
                    year: "2024",
                    title: "Industry Leader",
                    description: "Recognized as the top-rated scrap car service in the region."
                  }
                ].map((item, index) => (
                  <div key={item.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="p-6 rounded-xl bg-card border border-border">
                        <div className="text-2xl font-bold text-brand-gold mb-2">{item.year}</div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <div className="relative z-10">
                      <div className="w-4 h-4 rounded-full bg-brand-gold border-4 border-background" />
                    </div>
                    <div className="flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}