"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactFormSection() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    carMake: "",
    carModel: "",
    year: "",
    contactMethod: "Phone Call",
    contactTime: "",
    message: ""
  })

  const timeSlots = [
    "8:00 AM - 10:00 AM",
    "10:00 AM - 12:00 PM",
    "12:00 PM - 2:00 PM",
    "2:00 PM - 4:00 PM",
    "4:00 PM - 6:00 PM",
    "6:00 PM - 8:00 PM"
  ]

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // No backend specified; mimic submit
    console.log("Contact form submitted", formData)
  }

  return (
    <section className="relative py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Get In Touch Form */}
            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we&apos;ll get back to you within 2
                hours during business hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Your Name * *
                    </label>
                    <input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address * *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Phone & Subject */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number * *
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                      placeholder="0568558762"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                    >
                      <option>General Inquiry</option>
                      <option>Request Valuation</option>
                      <option>Schedule Pickup</option>
                      <option>Sell My Car</option>
                    </select>
                  </div>
                </div>

                {/* Vehicle Info (Optional) */}
                <div>
                  <div className="flex items-center gap-2 text-sm font-medium mb-3">
                    <span className="text-brand-gold">🚗</span>
                    <span>Vehicle Information (Optional)</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      name="carMake"
                      type="text"
                      value={formData.carMake}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-lg border border-border bg-background"
                      placeholder="Car Make"
                    />
                    <input
                      name="carModel"
                      type="text"
                      value={formData.carModel}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-lg border border-border bg-background"
                      placeholder="Car Model"
                    />
                    <input
                      name="year"
                      type="number"
                      value={formData.year}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-lg border border-border bg-background"
                      placeholder="Year"
                      min={1950}
                      max={new Date().getFullYear() + 1}
                    />
                  </div>
                </div>

                {/* Contact Preferences */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Preferred Contact Method
                    </label>
                    <select
                      name="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                    >
                      <option>Phone Call</option>
                      <option>Email</option>
                      <option>WhatsApp</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Preferred Contact Time
                    </label>
                    <select
                      name="contactTime"
                      value={formData.contactTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                    >
                      <option value="">Select preferred time</option>
                      {timeSlots.map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Tell us about your car or ask any questions...
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background resize-none"
                  />
                </div>

                <Button type="submit" variant="gold" size="lg" className="w-full sm:w-auto">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Right: Our Location & Why Choose Us */}
            <div className="space-y-6">
              {/* Our Location */}
              <div className="rounded-2xl overflow-hidden bg-card border border-border shadow-sm">
                <div className="p-6 border-b">
                  <h3 className="text-xl font-bold">Our Location</h3>
                </div>
                <div className="relative">
                  <div className="aspect-video w-full">
                    <iframe
                      title="Dubai, UAE"
                      className="w-full h-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28960.52298093807!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b8c9f0f3b1f%3A0x4a1e88f4c2eab6e3!2sDubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1710012345678"
                    />
                  </div>
                  {/* Overlay marker card */}
                  <div className="absolute left-4 top-4 bg-background/95 backdrop-blur-sm border rounded-xl p-4 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-5 w-5 text-brand-gold" />
                      <span className="font-medium">DUBAI, UAE</span>
                    </div>
                    <Button variant="gold" size="sm">Get Directions</Button>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="rounded-2xl bg-card border border-border shadow-sm p-6">
                <h3 className="text-xl font-bold mb-6">Why Choose Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border p-4 text-center">
                    <div className="text-2xl font-bold">2hrs</div>
                    <div className="text-muted-foreground text-sm">Response Time</div>
                  </div>
                  <div className="rounded-xl border p-4 text-center">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-muted-foreground text-sm">Satisfaction Rate</div>
                  </div>
                  <div className="rounded-xl border p-4 text-center">
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-muted-foreground text-sm">Years Experience</div>
                  </div>
                  <div className="rounded-xl border p-4 text-center">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-muted-foreground text-sm">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}