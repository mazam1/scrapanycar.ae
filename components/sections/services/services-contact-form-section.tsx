'use client'

import * as React from "react"
import { motion } from "framer-motion"
import { useReducedMotion } from "framer-motion"
import { Send, Phone, Mail, MessageSquare } from "lucide-react"
import { Button } from "../../ui/button"
import { toast } from "sonner"
import { submitGetInTouch } from "../../../lib/vehicle-api"
import { sendConversionEvent } from "../../../lib/gtag"

export function ServicesContactFormSection() {
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
        // Send Google Analytics conversion event
        await sendConversionEvent()

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
    <section className="bg-background py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
            <span className="text-sm font-medium text-brand-secondary uppercase tracking-wider">Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Ready to Scrap Your <span className="text-brand-secondary relative">
              Car?
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-secondary/60 to-brand-secondary/20 rounded-full" />
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Fill out the form below and our team will contact you with a free valuation and service details.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Background glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-secondary/20 via-brand-secondary/5 to-transparent rounded-3xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-500 -z-10" />

          <div className="bg-card border border-brand-secondary/20 group-hover:border-brand-secondary/40 rounded-3xl p-8 lg:p-12 shadow-lg transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name *
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-secondary/60" />
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all duration-300 bg-background text-foreground"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-secondary/60" />
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all duration-300 bg-background text-foreground"
                    placeholder="+971 XX XXX XXXX"
                    required
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address (Optional)
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-secondary/60" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all duration-300 bg-background text-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-brand-secondary/60" />
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all duration-300 bg-background text-foreground min-h-[120px] resize-none"
                    placeholder="Tell us about your vehicle, preferred time for pickup, or any questions..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold px-12 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-5 h-5" />
                  </span>
                </Button>
              </div>

              {/* WhatsApp Alternative */}
              <div className="text-center text-sm text-muted-foreground pt-2">
                Prefer WhatsApp?{" "}
                <a
                  href="https://wa.me/971551988348"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-secondary hover:underline font-medium transition-colors"
                >
                  Chat with us instantly
                </a>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
