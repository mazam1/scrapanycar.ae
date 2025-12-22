"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useReducedMotion } from "framer-motion"
import { Send, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "../../ui/button"
import { toast } from "sonner"
import { submitGetInTouch } from "../../../lib/vehicle-api"

export function ContactFormSection() {
  const shouldReduceMotion = useReducedMotion()

  const [name, setName] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [message, setMessage] = React.useState("")
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const validateForm = (): boolean => {
    // Only name and phone are required
    if (!name.trim()) {
      toast.error("Name is required", {
        description: "Please enter your name.",
        duration: 4000,
      })
      return false
    }

    if (!phone.trim()) {
      toast.error("Phone number is required", {
        description: "Please enter your phone number.",
        duration: 4000,
      })
      return false
    }

    // Phone validation: minimum 10 digits (strip non-numeric characters)
    const phoneDigits = phone.replace(/\D/g, "")
    if (phoneDigits.length < 10) {
      toast.error("Invalid phone number", {
        description: "Phone number must be at least 10 digits.",
        duration: 4000,
      })
      return false
    }

    // Optional email validation (only if provided)
    if (email.trim() && !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Invalid email address", {
        description: "Please enter a valid email address.",
        duration: 4000,
      })
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    try {
      setIsSubmitting(true)

      const requestData = {
        name: name.trim(),
        phone_number: phone.trim(),
        email: email.trim() || undefined,
        questions: message.trim() || undefined,
      }

      const response = await submitGetInTouch(requestData)

      if (response.success) {
        toast.success("Thank you! We'll contact you soon.", {
          description: "Our team will get back to you shortly.",
          duration: 5000,
        })

        // Reset form after successful submission
        setName("")
        setPhone("")
        setEmail("")
        setMessage("")
      } else {
        throw new Error(response.message || "Failed to submit")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast.error("Failed to submit. Please try again.", {
        description: error instanceof Error ? error.message : "Please try again later.",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }


  return (
    <section className="bg-background py-16 lg:py-24 px-4 flex justify-center">
      <div className="w-full max-w-[1336px] mx-auto">
        
        {/* Form and Location - Optimized */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left: Get In Touch Form - Optimized */}
            <motion.div 
              className="p-6 sm:p-8 rounded-3xl bg-card border border-brand-secondary shadow-lg relative overflow-hidden"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground border-b-2 border-brand-secondary pb-3">Get In Touch</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-secondary" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all duration-300 bg-background text-foreground border-brand-secondary/30"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-secondary" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all duration-300 bg-background text-foreground border-brand-secondary/30"
                      placeholder="+971 XX XXX XXXX"
                      required
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address (Optional)</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-secondary" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all duration-300 bg-background text-foreground border-brand-secondary/30"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message (Optional)</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-brand-secondary" />
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all duration-300 bg-background text-foreground border-brand-secondary/30 min-h-[100px] resize-none"
                      placeholder="Tell us more about your car's condition, mileage, etc."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold px-12 py-4 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>

                {/* WhatsApp Alternative */}
                <div className="text-center text-sm text-muted-foreground mt-2">
                  Prefer WhatsApp? <a href="https://wa.me/971551988348" target="_blank" rel="noopener noreferrer" className="text-brand-secondary hover:underline font-medium">Chat with us</a>
                </div>
              </form>
            </motion.div>

            {/* Right: Our Location - Optimized */}
            <motion.div 
              className="relative group rounded-3xl overflow-hidden"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-secondary/20 via-brand-secondary/5 to-transparent rounded-3xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-500 -z-10" />
              <div className="absolute inset-0 rounded-3xl border border-brand-secondary/20 group-hover:border-brand-secondary/40 transition-all duration-300 -z-10" />
              <div className="bg-card border border-brand-secondary rounded-3xl overflow-hidden shadow-lg h-full flex flex-col">
                <div className="p-6 border-b-2 border-brand-secondary/20">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground border-b-2 border-brand-secondary pb-2">Our Location</h3>
                </div>
                <div className="relative flex-1">
                  <div className="w-full h-full">
                    <iframe
                      title="Dubai, UAE"
                      className="w-full h-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28960.52298093807!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b8c9f0f3b1f%3A0x4a1e88f4c2eab6e3!2sDubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1710012345678"
                    />
                  </div>
                  {/* Overlay marker card - Optimized */}
                  <motion.div 
                    className="absolute left-4 top-4 bg-background/95 backdrop-blur-sm border border-brand-secondary rounded-xl p-3 sm:p-4 shadow-lg group-hover:shadow-xl transition-shadow"
                    whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="h-5 w-5 text-brand-secondary flex-shrink-0" />
                      <span className="font-semibold text-sm sm:text-base text-foreground">DUBAI, UAE</span>
                    </div>
                    <Button className="w-full text-xs sm:text-sm bg-brand-primary hover:bg-brand-primary/90 text-white font-medium rounded-lg">Get Directions</Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}