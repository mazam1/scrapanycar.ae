"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Downtown",
    rating: 5,
    text: "Scrap Your Car made selling my old car incredibly easy. They gave me a fair price and picked it up the same day. The whole process took less than 2 hours!",
    amount: "AED 850",
    vehicle: "2008 Honda Civic"
  },
  {
    name: "Mike Rodriguez",
    location: "Westside",
    rating: 5,
    text: "I was skeptical at first, but they exceeded my expectations. Professional service, honest pricing, and they handled all the paperwork. Highly recommend!",
    amount: "AED 1,200",
    vehicle: "2010 Ford F-150"
  },
  {
    name: "Emily Chen",
    location: "Eastside",
    rating: 5,
    text: "My car wouldn't even start, but Scrap Your Car still gave me a great offer. Free towing and instant payment - couldn't ask for better service!",
    amount: "AED 650",
    vehicle: "2006 Toyota Camry"
  },
  {
    name: "David Thompson",
    location: "Northside",
    rating: 5,
    text: "Fast, reliable, and trustworthy. They offered more than other companies and the pickup was right on time. Will definitely use them again!",
    amount: "AED 950",
    vehicle: "2009 Nissan Altima"
  },
  {
    name: "Lisa Martinez",
    location: "Southside",
    rating: 5,
    text: "Excellent customer service from start to finish. They explained everything clearly and made the whole process stress-free. Thank you Scrap Your Car!",
    amount: "AED 750",
    vehicle: "2007 Chevrolet Malibu"
  },
  {
    name: "Robert Wilson",
    location: "Central",
    rating: 5,
    text: "I needed to sell my car quickly due to a move, and Scrap Your Car came through perfectly. Same-day service and fair pricing. Couldn't be happier!",
    amount: "AED 1,100",
    vehicle: "2011 Hyundai Elantra"
  }
]

export function TestimonialsSection() {
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
            What Our <span className="text-brand-gold">Customers</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real customers have to say about their Scrap Your Car experience.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="group p-6 rounded-xl bg-card border border-border hover:border-brand-gold/50 transition-all duration-300 hover:shadow-lg relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="h-12 w-12 text-brand-gold" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Vehicle & Amount */}
              <div className="mb-4 p-3 rounded-lg bg-muted/50 border">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">{testimonial.vehicle}</span>
                  <span className="font-semibold text-brand-gold">{testimonial.amount}</span>
                </div>
              </div>

              {/* Customer Info */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-gold/20 to-brand-gold/40 flex items-center justify-center">
                  <span className="text-brand-gold font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-8 p-6 rounded-xl bg-muted/30 border">
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-gold mb-1">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-gold mb-1">10,000+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-gold mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}