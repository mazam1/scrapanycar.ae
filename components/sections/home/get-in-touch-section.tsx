"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Car, MessageSquare, DollarSign, Users, Award } from "lucide-react"
import { UaeDirhamIcon } from "@/components/icons/uae-dirham-icon"

export function GetInTouchSection() {
  const [phone, setPhone] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [model, setModel] = React.useState("")
  const [message, setMessage] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Lightweight client-side feedback; preserves existing functionality without side-effects
    console.log("Quick contact submitted", { phone, email, model, message })
    alert("Thanks! We\u2019ll reach out shortly.")
    setPhone("")
    setEmail("")
    setModel("")
    setMessage("")
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Title and highlights */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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

          {/* Right: Quick contact card */}
          <div className="w-full relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-primary/25 via-brand-secondary/10 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 -z-10" />
            <div className="absolute bg-white inset-0 rounded-3xl border border-brand-primary/30 group-hover:border-brand-primary/60 transition-all duration-300 -z-10" />
            <motion.div
              className="w-full bg-card/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              suppressHydrationWarning
            >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-foreground">Get in Touch</h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-300 bg-background text-foreground border-border"
                    placeholder="+971 XX XXX XXXX"
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
                    className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-300 bg-background text-foreground border-border"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Car Model</label>
                <div className="relative">
                  <Car className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-300 bg-background text-foreground border-border"
                    placeholder="Year, Make, Model (e.g., 2018 Toyota Camry)"
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
                    className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-300 bg-background text-foreground border-border min-h-[100px] resize-none"
                    placeholder="Tell us more about your car's condition, mileage, etc."
                  ></textarea>
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold px-12 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full"
                >
                  Get Your Free Quote
                </Button>
              </div>

              <div className="text-center text-sm text-muted-foreground mt-2">
                Prefer WhatsApp? <a href="https://wa.me/971568559762" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Chat with us</a>
              </div>
            </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}