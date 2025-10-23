"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  Phone,
  Mail,
  Clock,
  MapPin
} from "lucide-react"

export function ContactHeroSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Contact <span className="text-brand-gold">ScrapYourCar</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground">
            Ready to sell your car or have questions about our services? Our expert team is here to help
            you every step of the way. Get in touch today for personalized assistance and fast responses.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* WhatsApp */}
          <a 
            href="https://wa.me/971568558762"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow cursor-pointer block"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="h-12 w-12 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center">
                <Phone className="h-6 w-6 text-brand-gold" />
              </div>
            </div>
            <div className="text-center">
              <div className="font-semibold">WhatsApp Us</div>
              <div className="mt-2 text-brand-slate font-medium">+971568558762</div>
              <div className="mt-2 text-xs text-muted-foreground">Available 24/7 for immediate assistance</div>
            </div>
          </a>

          {/* Email */}
          <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
            <div className="flex items-center justify-center mb-4">
              <div className="h-12 w-12 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center">
                <Mail className="h-6 w-6 text-brand-gold" />
              </div>
            </div>
            <div className="text-center">
              <div className="font-semibold">Email Us</div>
              <div className="mt-2 text-brand-slate font-medium">info@scrapyourcar.com</div>
              <div className="mt-2 text-xs text-muted-foreground">We respond within 2 hours</div>
            </div>
          </div>

          {/* Visit Us */}
          <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
            <div className="flex items-center justify-center mb-4">
              <div className="h-12 w-12 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-brand-gold" />
              </div>
            </div>
            <div className="text-center">
              <div className="font-semibold">Visit Us</div>
              <div className="mt-2 text-brand-slate font-medium">Dubai, UAE</div>
              <div className="mt-2 text-xs text-muted-foreground">10:00 AM - 10:00 PM, Everyday</div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
            <div className="flex items-center justify-center mb-4">
              <div className="h-12 w-12 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center">
                <Clock className="h-6 w-6 text-brand-gold" />
              </div>
            </div>
            <div className="text-center">
              <div className="font-semibold">Business Hours</div>
              <div className="mt-2 text-brand-slate font-medium">10:00 AM - 10:00 PM, Everyday</div>
              <div className="mt-2 text-xs text-muted-foreground">Emergency service available 24/7</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}