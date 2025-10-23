"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { PhoneCall, Mail, MapPin, Clock } from "lucide-react"

export function ContactChannelsSection() {
  const channels = [
    {
      icon: PhoneCall,
      title: "WhatsApp Us",
      value: "0568558762",
      helper: "Available 24/7 for immediate assistance",
      badge: "WhatsApp",
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "info@caroofix.com",
      helper: "We respond within 2 hours",
      badge: "Email",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Dubai, UAE",
      helper: "Get Directions",
      badge: "Location",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "10:00 AM - 10:00 PM, Everyday",
      helper: "Emergency service available 24/7",
      badge: "Hours",
    },
  ]

  return (
    <section className="bg-background py-12 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((c, i) => (
            <motion.div
              key={c.title}
              className="rounded-2xl bg-card border border-border p-6 md:p-8 shadow-sm hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-gold/15 border border-brand-gold/20 flex items-center justify-center mb-4">
                <c.icon className="w-7 h-7 text-brand-gold" />
              </div>
              <div className="text-sm font-semibold text-foreground/90 mb-2">{c.title}</div>
              <div className="text-brand-gold font-bold">{c.value}</div>
              <div className="mt-3 text-xs text-muted-foreground">{c.helper}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}