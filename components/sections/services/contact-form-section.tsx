"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactFormSection() {
  const [formData, setFormData] = React.useState({
    phoneNumber: '',
    email: '',
    carModel: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      value: "+971 50 123 4567",
      color: "text-blue-600"
    },
    {
      icon: Mail,
      title: "Email Address", 
      value: "info@scrapyourcar.com",
      color: "text-green-600"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Dubai, UAE",
      color: "text-red-600"
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "24/7 Available",
      color: "text-purple-600"
    }
  ]

  const achievements = [
    { label: "Market-Leading Prices", subtitle: "Get up to 15% more than competitors" },
    { label: "Trusted by 50,000+", subtitle: "Customers nationwide" },
    { label: "Award-Winning Service", subtitle: "Rated #1 car buying platform" }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Sell Your Car?
          </h2>
          <p className="text-xl text-blue-100 mb-4">
            Get Started Today!
          </p>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have trusted ScrapYourCar for fair, fast, and professional car buying services.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div>
                <label htmlFor="carModel" className="block text-sm font-medium text-gray-700 mb-2">
                  Car Model
                </label>
                <select
                  id="carModel"
                  name="carModel"
                  value={formData.carModel}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                >
                  <option value="">Select your car model</option>
                  <option value="BMW">BMW</option>
                  <option value="Mercedes">Mercedes</option>
                  <option value="Toyota">Toyota</option>
                  <option value="Audi">Audi</option>
                  <option value="Honda">Honda</option>
                  <option value="Ford">Ford</option>
                  <option value="Nissan">Nissan</option>
                  <option value="Hyundai">Hyundai</option>
                  <option value="Lexus">Lexus</option>
                  <option value="Porsche">Porsche</option>
                  <option value="Tesla">Tesla</option>
                  <option value="Land Rover">Land Rover</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your car...
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Describe your car's condition, year, mileage, and any other relevant details..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg font-semibold rounded-lg transition-colors duration-300"
              >
                Get Free Valuation
              </Button>
            </form>
          </motion.div>

          {/* Contact Info & Achievements */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full bg-white/20 ${info.color}`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">{info.title}</div>
                      <div className="text-blue-200">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="border-l-4 border-orange-400 pl-4">
                    <div className="text-white font-semibold">{achievement.label}</div>
                    <div className="text-blue-200 text-sm">{achievement.subtitle}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-500 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white">30min</div>
                <div className="text-orange-100 text-sm">Quick Process</div>
              </div>
              <div className="bg-green-500 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-green-100 text-sm">Available</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}