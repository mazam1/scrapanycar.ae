"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

export function ContactMapSection() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Service Area Map
          </motion.h2>
          <motion.p
            className="text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We operate across the Denver Metro area and surrounding locations.
          </motion.p>
        </div>

        <motion.div
          className="rounded-xl overflow-hidden border bg-card mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ width: "1024px", height: "924px" }}
        >
          <div className="w-full h-full">
            {/* Simple embeddable Google Map centered on Denver, CO */}
            <iframe
              title="Service Area Map"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96747.46930656628!2d-105.0097129!3d39.7392364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78d3d0a8f5a1%3A0x1b1fd7f7fa2aaf64!2sDenver%2C%20CO!5e0!3m2!1sen!2sus!4v1710012345678"
            />
          </div>
        </motion.div>

        <motion.div
          className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <MapPin className="h-4 w-4 text-brand-gold" />
          <span>Expanding coverage to nearby cities based on demand.</span>
        </motion.div>
      </div>
    </section>
  )
}