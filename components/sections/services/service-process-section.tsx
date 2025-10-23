"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { 
  Phone, 
  Car, 
  DollarSign, 
  ArrowRight,
  Clock,
  MapPin,
  FileText,
  CheckCircle,
  Star,
  Shield
} from "lucide-react"

import { Button } from "@/components/ui/button"

const processSteps = [
  {
    step: "01",
    icon: Phone,
    title: "Get Your Quote",
    description: "Call us or fill out our online form with your vehicle details. We&apos;ll provide an instant, no-obligation quote based on current market rates.",
    details: [
      "Instant online valuation",
      "No hidden fees or charges",
      "Valid for 7 days",
      "No obligation to sell"
    ],
    color: "from-blue-500 to-blue-600"
  },
  {
    step: "02",
    icon: Car,
    title: "Schedule Pickup",
    description: "Choose a convenient time for our licensed team to inspect and collect your vehicle. We handle all the paperwork and logistics.",
    details: [
      "Same-day pickup available",
      "Free towing service",
      "Licensed and insured team",
      "Flexible scheduling"
    ],
    color: "from-green-500 to-green-600"
  },
  {
    step: "03",
    icon: DollarSign,
    title: "Get Paid Instantly",
    description: "Receive payment immediately upon vehicle pickup. We offer cash, check, or direct bank transfer - whatever works best for you.",
    details: [
      "Instant payment on pickup",
      "Multiple payment options",
      "No waiting periods",
      "Secure transactions"
    ],
    color: "from-brand-gold to-yellow-500"
  }
]

const processFeatures = [
  {
    icon: Clock,
    title: "Quick & Easy",
    description: "Complete the entire process in under 30 minutes"
  },
  {
    icon: MapPin,
    title: "We Come to You",
    description: "Free pickup anywhere in the metro area"
  },
  {
    icon: FileText,
    title: "Paperwork Handled",
    description: "We take care of all documentation and DMV requirements"
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed auto recyclers with comprehensive insurance"
  }
]

const testimonialHighlight = {
  rating: 5,
  text: "The entire process was incredibly smooth. They gave me a fair quote, picked up my old car the same day, and paid me cash on the spot. Couldn&apos;t ask for better service!",
  author: "Sarah M.",
  vehicle: "2015 Honda Civic",
  location: "Denver, CO"
}

export function ServiceProcessSection() {
  return (
    <section className="py-20 bg-muted/30">
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
            Simple <span className="text-brand-gold">3-Step Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Selling your scrap car has never been easier. Our streamlined process gets you 
            paid quickly while handling all the details for you.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative mb-20">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-green-500 to-brand-gold transform -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Step Card */}
                <div className="bg-card border border-border rounded-2xl p-8 text-center relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                    <span className="text-2xl font-bold text-muted-foreground/50">{step.step}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${step.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-brand-gold transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Details */}
                  <ul className="space-y-2 mb-6">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Arrow (Desktop) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                    <div className="w-12 h-12 rounded-full bg-background border-2 border-brand-gold flex items-center justify-center">
                      <ArrowRight className="h-5 w-5 text-brand-gold" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Features */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Why Choose Our Process?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processFeatures.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl bg-card border border-border text-center hover:border-brand-gold/50 transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-4">
                  <feature.icon className="h-6 w-6 text-brand-gold" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Customer Testimonial */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-brand-gold/5 to-brand-gold/10 border border-brand-gold/20">
            <div className="text-center mb-6">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonialHighlight.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <blockquote className="text-lg text-foreground italic leading-relaxed mb-4">
                &ldquo;{testimonialHighlight.text}&rdquo;
              </blockquote>
              <div className="text-muted-foreground">
                <div className="font-semibold">{testimonialHighlight.author}</div>
                <div className="text-sm">{testimonialHighlight.vehicle} • {testimonialHighlight.location}</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who chose the easy way to sell their scrap cars. 
            Get your quote now and see how much your vehicle is worth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-gold hover:bg-brand-gold/90 text-brand-charcoal font-semibold">
              Get Instant Quote
            </Button>
            <Button variant="outline" size="lg">
              Call (555) 123-4567
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}