"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ahmed Alrashidi",
      role: "Planning Consultant",
      rating: 5,
      comment: "I was skeptical about selling my 2019 BMW X5 online, but ScrapYourCar made it incredibly easy. The valuation was spot-on with market rates, and they handled all the paperwork. Got AED 185,000 for my car - exactly what I was hoping for!",
      car: "2019 BMW X5 xDrive40i",
      amount: "AED 185,000",
      avatar: "👨‍💼"
    },
    {
      name: "Priya Sharma", 
      role: "Marketing Specialist",
      rating: 4.5,
      comment: "Moving back to India meant I had to sell my Toyota Camry quickly. ScrapYourCar not only gave me a fair price but also completed the transaction in just 2 days. Their team was professional and transparent throughout the process.",
      car: "2020 Toyota Camry SE",
      amount: "AED 72,000",
      avatar: "👩‍💼"
    },
    {
      name: "Michael Johnson",
      role: "Automotive Design Professional", 
      rating: 5,
      comment: "After my Audi A4 had some engine issues, I thought I&apos;d get a terrible price for it. ScrapYourCar surprised me by offering AED 88,000 even with the mechanical problems. They truly buy cars in any condition!",
      car: "2018 Audi A4 Quattro",
      amount: "AED 88,000",
      avatar: "👨‍🎨"
    },
    {
      name: "Fatima Al-Zahra",
      role: "Teacher",
      rating: 4,
      comment: "As a single mother, I needed to sell my Honda CR-V to upgrade to a larger family car. The team at ScrapYourCar was understanding and patient, explaining every step. The whole process took less than a week!",
      car: "2017 Honda CR-V EX",
      amount: "AED 62,000",
      avatar: "👩‍🏫"
    },
    {
      name: "Raj Patel",
      role: "IT Consultant",
      rating: 5,
      comment: "I&apos;ve sold cars before through classifieds and it was always a hassle. ScrapYourCar made it so simple - just filled out their form, got an instant quote, and had the money in my account the next day. Highly recommend!",
      car: "2021 Nissan Altima SV",
      amount: "AED 78,000",
      avatar: "👨‍💻"
    },
    {
      name: "Elena Petrov",
      role: "Graphic Designer",
      rating: 4.5,
      comment: "My Mercedes C-Class was involved in a minor accident and I was worried about its resale value. ScrapYourCar gave me a fair assessment and offered AED 125,000. The inspection was thorough and the staff was very knowledgeable.",
      car: "2019 Mercedes-Benz C300",
      amount: "AED 125,000",
      avatar: "👩‍🎨"
    }
  ]

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    const stars = []

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="h-5 w-5 fill-yellow-400/50 text-yellow-400" />)
    }

    const remainingStars = 5 - Math.ceil(rating)
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-5 w-5 text-gray-300" />)
    }

    return stars
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Customer Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from thousands of satisfied customers who chose ScrapYourCar for their car selling journey
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-blue-600 mb-4 opacity-50" />

              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
                <span className="ml-2 text-sm text-gray-600">
                  {testimonial.rating}/5
                </span>
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.comment}&rdquo;
              </p>

              {/* Car Details */}
              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  {testimonial.car}
                </div>
                <div className="text-lg font-bold text-green-600">
                  {testimonial.amount}
                </div>
              </div>

              {/* Customer Info */}
              <div className="flex items-center">
                <div className="text-3xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Join Our Satisfied Customers
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Experience the same professional service and fair pricing that has made thousands of customers happy
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Get Your Free Quote Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}