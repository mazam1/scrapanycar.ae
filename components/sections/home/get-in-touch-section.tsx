"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Car, MessageSquare, DollarSign, Users, Award } from "lucide-react"
import { UaeDirhamIcon } from "@/components/icons/uae-dirham-icon"

export function GetInTouchSection() {
  const shouldReduceMotion = useReducedMotion()
  const [name, setName] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [message, setMessage] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Quick contact submitted", { name, phone, email, message })
    alert("Thanks! We'll reach out shortly.")
    setName("")
    setPhone("")
    setEmail("")
    setMessage("")
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Title and highlights - Optimized */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
              <span className="text-sm font-medium text-brand-secondary uppercase tracking-wider">Contact Us</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Scrap Your <span className="text-brand-secondary relative">
                Car Today
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-secondary/60 to-brand-secondary/20 rounded-full" />
              </span>
              <span className="block text-brand-dark">Get Instant Cash!</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8">
              Join thousands of satisfied customers who trust our fair, fast, and professional car valuation & instant buying service across UAE.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex p-3 rounded-lg bg-background border text-brand-secondary">
                  <UaeDirhamIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Premium Market Valuation</h3>
                  <p className="text-muted-foreground text-sm">Get up to 15% more than competitors</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="inline-flex p-3 rounded-lg bg-background border text-brand-secondary">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Trusted by 50,000+</div>
                  <div className="text-xs text-muted-foreground">UAE customers with 5-star ratings</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="inline-flex p-3 rounded-lg bg-background border text-brand-secondary">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">White-Glove Service</div>
                  <div className="text-xs text-muted-foreground">Hassle-free paperwork & same-day payment</div>
                </div>
              </div>
            </div>


          </motion.div>

          {/* Right: Quick contact card - Optimized */}
          <div className="w-full relative">
            <motion.div
              className="w-full bg-card rounded-3xl p-6 sm:p-8 relative border border-brand-secondary"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              suppressHydrationWarning
            >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-foreground">Get in Touch</h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all duration-300 bg-background text-foreground border-border"
                    placeholder="Enter your name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all duration-300 bg-background text-foreground border-border"
                    placeholder="+971 XX XXX XXXX"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all duration-300 bg-background text-foreground border-border"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message (Optional)</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all duration-300 bg-background text-foreground border-border min-h-[100px] resize-none"
                    placeholder="Tell us more about your car's condition, mileage, etc."
                  ></textarea>
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold px-12 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full"
                >
                  Submit
                </Button>
              </div>

              <div className="text-center text-sm text-muted-foreground mt-2">
                Prefer WhatsApp? <a href="https://wa.me/971551988348" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Chat with us</a>
              </div>
            </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}