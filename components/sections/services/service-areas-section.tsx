"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { 
  MapPin, 
  Clock, 
  Phone,
  Car,
  CheckCircle,
  ArrowRight,
  Navigation,
  Users,
  Star
} from "lucide-react"

import { Button } from "@/components/ui/button"

const serviceAreas = [
  {
    city: "Denver",
    state: "CO",
    description: "Complete metro area coverage including downtown, suburbs, and surrounding communities.",
    neighborhoods: [
      "Downtown Denver",
      "Capitol Hill",
      "Highlands",
      "Cherry Creek",
      "Washington Park",
      "Stapleton"
    ],
    responseTime: "30 minutes",
    coverage: "100%"
  },
  {
    city: "Aurora",
    state: "CO",
    description: "Full service coverage throughout Aurora and neighboring areas with same-day pickup.",
    neighborhoods: [
      "Central Aurora",
      "Fitzsimons",
      "Gateway",
      "Southlands",
      "Del Mar",
      "Heather Ridge"
    ],
    responseTime: "45 minutes",
    coverage: "100%"
  },
  {
    city: "Lakewood",
    state: "CO",
    description: "Comprehensive service for Lakewood residents with flexible scheduling options.",
    neighborhoods: [
      "Belmar",
      "Green Mountain",
      "Villa Italia",
      "Applewood",
      "Edgewater",
      "Mountain View"
    ],
    responseTime: "35 minutes",
    coverage: "100%"
  },
  {
    city: "Thornton",
    state: "CO",
    description: "Extended coverage area serving Thornton and northern Denver metro communities.",
    neighborhoods: [
      "Northglenn",
      "Westminster",
      "Broomfield",
      "Commerce City",
      "Federal Heights",
      "Sheridan"
    ],
    responseTime: "40 minutes",
    coverage: "95%"
  }
]

const serviceStats = [
  {
    icon: MapPin,
    number: "50+",
    label: "Cities Served",
    description: "Comprehensive coverage across the Denver metro area"
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Availability",
    description: "Round-the-clock service for your convenience"
  },
  {
    icon: Car,
    number: "15,000+",
    label: "Vehicles Processed",
    description: "Successfully recycled vehicles this year"
  },
  {
    icon: Users,
    number: "98%",
    label: "Customer Satisfaction",
    description: "Based on verified customer reviews"
  }
]

const expandingAreas = [
  "Colorado Springs",
  "Fort Collins",
  "Boulder",
  "Pueblo",
  "Grand Junction",
  "Greeley"
]

export function ServiceAreasSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-brand-gold">Metro-Wide</span> Service Coverage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We proudly serve the entire Denver metropolitan area with fast, reliable pickup 
            services. No matter where you are, we'll come to you.
          </p>
        </motion.div>

        {/* Service Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {serviceStats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-card border border-border"
            >
              <div className="inline-flex p-3 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-4">
                <stat.icon className="h-6 w-6 text-brand-gold" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">{stat.number}</div>
              <div className="font-semibold text-foreground mb-2">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </motion.div>

        {/* Service Areas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {serviceAreas.map((area, index) => (
            <motion.div
              key={`${area.city}-${area.state}`}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-brand-gold/50 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-brand-gold transition-colors">
                    {area.city}, {area.state}
                  </h3>
                  <p className="text-muted-foreground mt-1">{area.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Response Time</div>
                  <div className="text-lg font-semibold text-brand-gold">{area.responseTime}</div>
                </div>
              </div>

              {/* Coverage Badge */}
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium text-foreground">{area.coverage} Coverage</span>
              </div>

              {/* Neighborhoods */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Areas Served:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {area.neighborhoods.map((neighborhood, neighborhoodIndex) => (
                    <div
                      key={neighborhoodIndex}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                      {neighborhood}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Button 
                variant="outline" 
                className="w-full group-hover:border-brand-gold group-hover:text-brand-gold transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                Get Quote for {area.city}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Expanding Areas */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Expanding Our Reach
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're constantly growing to serve more communities across Colorado. 
              Coming soon to these areas:
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {expandingAreas.map((city, index) => (
              <motion.div
                key={city}
                className="px-4 py-2 rounded-full bg-muted border border-border text-muted-foreground"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {city}
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Don't see your area listed? We may still be able to help!
            </p>
            <Button variant="outline">
              <Navigation className="h-4 w-4 mr-2" />
              Check Service Availability
            </Button>
          </div>
        </motion.div>

        {/* Service Guarantee */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-brand-gold/5 to-brand-gold/10 border border-brand-gold/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Service Area Guarantee
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              If we serve your area, we guarantee pickup within our stated response time or 
              we'll add an extra AED 50 to your quote. That's our commitment to reliable service.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-4 rounded-lg bg-background/50">
                <Clock className="h-8 w-8 text-brand-gold mx-auto mb-2" />
                <div className="font-semibold text-foreground mb-1">On-Time Guarantee</div>
                <div className="text-sm text-muted-foreground">Pickup within promised timeframe</div>
              </div>
              <div className="p-4 rounded-lg bg-background/50">
                <MapPin className="h-8 w-8 text-brand-gold mx-auto mb-2" />
                <div className="font-semibold text-foreground mb-1">Wide Coverage</div>
                <div className="text-sm text-muted-foreground">Serving 50+ metro communities</div>
              </div>
              <div className="p-4 rounded-lg bg-background/50">
                <Star className="h-8 w-8 text-brand-gold mx-auto mb-2" />
                <div className="font-semibold text-foreground mb-1">Quality Service</div>
                <div className="text-sm text-muted-foreground">98% customer satisfaction rate</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand-gold hover:bg-brand-gold/90 text-brand-charcoal font-semibold">
                <Phone className="h-5 w-5 mr-2" />
                Call for Pickup
              </Button>
              <Button variant="outline" size="lg">
                <ArrowRight className="h-5 w-5 mr-2" />
                Get Online Quote
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}