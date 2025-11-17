"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { 
  Car, 
  Truck, 
  Bike, 
  Bus,
  Wrench,
  FileText,
  DollarSign,
  Clock,
  Shield,
  Recycle,
  Phone,
  MapPin
} from "lucide-react"

import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Car,
    title: "Passenger Vehicle Recycling",
    description: "Complete recycling services for cars, sedans, hatchbacks, and coupes of all makes and models.",
    features: [
      "All makes and models accepted",
      "Running or non-running vehicles",
      "Accident-damaged cars welcome",
      "Free market-rate evaluation"
    ],
    color: "text-blue-500"
  },
  {
    icon: Truck,
    title: "Commercial Vehicle Disposal",
    description: "Specialized services for trucks, vans, and commercial fleet vehicles with competitive pricing.",
    features: [
      "Pickup trucks and delivery vans",
      "Commercial fleet vehicles",
      "Construction and work trucks",
      "Fleet disposal programs"
    ],
    color: "text-green-500"
  },
  {
    icon: Bike,
    title: "Motorcycle & ATV Recycling",
    description: "Expert handling of motorcycles, ATVs, and recreational vehicles with proper documentation.",
    features: [
      "Motorcycles of all sizes",
      "ATVs and dirt bikes",
      "Scooters and mopeds",
      "Recreational vehicles"
    ],
    color: "text-orange-500"
  },
  {
    icon: Bus,
    title: "Heavy Vehicle Services",
    description: "Specialized equipment and expertise for buses, RVs, and other heavy vehicles.",
    features: [
      "Buses and coaches",
      "RVs and motorhomes",
      "Heavy-duty trucks",
      "Specialized transport vehicles"
    ],
    color: "text-purple-500"
  },
  {
    icon: Wrench,
    title: "Parts & Component Recovery",
    description: "Salvage valuable parts and components before recycling, maximizing your vehicle's value.",
    features: [
      "Engine and transmission recovery",
      "Valuable component identification",
      "Catalytic converter processing",
      "Precious metal recovery"
    ],
    color: "text-red-500"
  },
  {
    icon: FileText,
    title: "Documentation & Paperwork",
    description: "Complete handling of all legal documentation, titles, and DMV requirements.",
    features: [
      "Title transfer assistance",
      "DMV notification handling",
      "Lien release processing",
      "Certificate of destruction"
    ],
    color: "text-indigo-500"
  }
]

const additionalServices = [
  {
    icon: DollarSign,
    title: "Instant Valuation",
    description: "Get an accurate quote in minutes based on current market rates and vehicle condition."
  },
  {
    icon: Clock,
    title: "Same-Day Pickup",
    description: "Schedule convenient pickup times, including same-day service for urgent needs."
  },
  {
    icon: Shield,
    title: "Insurance Claims",
    description: "Work directly with insurance companies for total loss and salvage claims."
  },
  {
    icon: Recycle,
    title: "Environmental Compliance",
    description: "Certified eco-friendly recycling processes that meet all environmental standards."
  }
]

export function ServicesOverviewSection() {
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
            Complete <span className="text-brand-secondary">Vehicle Recycling</span> Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From passenger cars to heavy commercial vehicles, we handle all types of automotive 
            recycling with expertise, efficiency, and environmental responsibility.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-brand-secondary/50 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">
                <div className={`inline-flex p-3 rounded-lg bg-background border ${service.color}`}>
                  <service.icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-brand-secondary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Additional Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-xl bg-muted/30 border border-border text-center"
              >
                <div className="inline-flex p-3 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 mb-4">
                  <service.icon className="h-6 w-6 text-brand-secondary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{service.title}</h4>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
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
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-brand-gold/5 to-brand-gold/10 border border-brand-secondary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Our Service Guarantee
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We stand behind every service we provide. If you&apos;re not completely satisfied with 
              our quote, pickup service, or payment process, we&apos;ll make it right or you don&apos;t pay.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-4 rounded-lg bg-background/50">
                <Phone className="h-8 w-8 text-brand-secondary mx-auto mb-2" />
                <div className="font-semibold text-foreground mb-1">24/7 Support</div>
                <div className="text-sm text-muted-foreground">Always available to help</div>
              </div>
              <div className="p-4 rounded-lg bg-background/50">
                <MapPin className="h-8 w-8 text-brand-secondary mx-auto mb-2" />
                <div className="font-semibold text-foreground mb-1">Metro-Wide Service</div>
                <div className="text-sm text-muted-foreground">We come to you anywhere</div>
              </div>
              <div className="p-4 rounded-lg bg-background/50">
                <Shield className="h-8 w-8 text-brand-secondary mx-auto mb-2" />
                <div className="font-semibold text-foreground mb-1">100% Satisfaction</div>
                <div className="text-sm text-muted-foreground">Guaranteed or money back</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold">
                Get Your Quote Now
              </Button>
              <Button variant="outline" size="lg">
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}