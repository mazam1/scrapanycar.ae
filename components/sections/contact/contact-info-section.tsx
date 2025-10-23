"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MessageSquare, Clock, MapPin, Shield } from "lucide-react"

export function ContactInfoSection() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="responsive-text-xl font-bold tracking-tight mb-4 text-container-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Contact Information
          </motion.h2>
          <motion.p
            className="text-muted-foreground mb-10 max-w-2xl mx-auto responsive-text-base text-container-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Reach us via phone, email, or live chat. We respond quickly and can schedule same-day pickups in most areas.
          </motion.p>
        </div>

        {/* Contact Methods */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm min-h-[140px] flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <Phone className="h-6 w-6 text-brand-gold flex-shrink-0" />
              <h3 className="font-semibold card-text">Call Us</h3>
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-muted-foreground responsive-text-sm card-text">+971 4 123 4567</p>
              <p className="text-muted-foreground responsive-text-sm card-text">Mon–Sun: 7:00 AM – 9:00 PM</p>
            </div>
          </div>

          <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm min-h-[140px] flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <Mail className="h-6 w-6 text-brand-gold flex-shrink-0" />
              <h3 className="font-semibold card-text">Email</h3>
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-muted-foreground responsive-text-sm card-text break-all">support@scrapanycar.ae</p>
              <p className="text-muted-foreground responsive-text-sm card-text">We reply within 2–4 hours</p>
            </div>
          </div>

          <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm min-h-[140px] flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <MessageSquare className="h-6 w-6 text-brand-gold flex-shrink-0" />
              <h3 className="font-semibold card-text">Live Chat</h3>
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-muted-foreground responsive-text-sm card-text">Available daily, 8:00 AM – 8:00 PM</p>
              <p className="text-muted-foreground responsive-text-sm card-text">Instant answers for quotes and scheduling</p>
            </div>
          </div>
        </motion.div>

        {/* Location & Hours */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm min-h-[120px] flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="h-6 w-6 text-brand-gold flex-shrink-0" />
              <h3 className="font-semibold card-text">Service Area</h3>
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-muted-foreground responsive-text-sm card-text">Denver Metro, CO</p>
              <p className="text-muted-foreground responsive-text-sm card-text">Same-day pickups in most locations</p>
            </div>
          </div>

          <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm min-h-[120px] flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="h-6 w-6 text-brand-gold flex-shrink-0" />
              <h3 className="font-semibold card-text">Support Hours</h3>
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-muted-foreground responsive-text-sm card-text">Customer Support: 7:00 AM – 9:00 PM</p>
              <p className="text-muted-foreground responsive-text-sm card-text">Pickup Scheduling: 8:00 AM – 8:00 PM</p>
            </div>
          </div>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="p-6 rounded-xl border bg-muted/50">
            <div className="flex items-center justify-center gap-2 responsive-text-sm text-muted-foreground text-container-center">
              <Shield className="h-4 w-4 text-brand-gold flex-shrink-0" />
              <span className="card-text">Licensed & insured. We handle paperwork and provide instant payment on pickup.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}