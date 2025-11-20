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
  const contactMethods = [
    {
      icon: Phone,
      title: "WhatsApp Us",
      detail: "+971568558762",
      link: "https://wa.me/971568558762"
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "info@scrapyourcar.com",
      link: "mailto:info@scrapyourcar.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      detail: "10:00 AM - 10:00 PM, Everyday",
      link: "#"
    }
  ]

  return (
    <section className="bg-background py-20 lg:py-28 px-4 flex justify-center">
      <div className="w-full max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
            <span className="text-sm font-medium text-brand-secondary uppercase tracking-wider">Get In Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Contact <span className="text-brand-secondary relative">
              ScrapYourCar
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-secondary/60 to-brand-secondary/20 rounded-full" />
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to sell your car or have questions about our services? Our expert team is here to help
            you every step of the way. Get in touch today for personalized assistance and fast responses.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {contactMethods.map((method, index) => (
            <div key={method.title} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-secondary/20 via-brand-secondary/5 to-transparent rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-500 -z-10" />
              <div className="absolute bg-white inset-0 rounded-2xl border border-brand-secondary/20 group-hover:border-brand-secondary/50 transition-all duration-300 -z-10" />
              
              <motion.a
                href={method.link}
                target={method.title === "WhatsApp Us" ? "_blank" : undefined}
                rel={method.title === "WhatsApp Us" ? "noopener noreferrer" : undefined}
                className="p-6 rounded-2xl bg-card relative overflow-hidden h-full flex flex-col cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="inline-flex p-4 rounded-xl bg-background border border-brand-secondary/30 group-hover:border-brand-secondary/60 transition-colors">
                    <method.icon className="h-6 w-6 text-brand-secondary" />
                  </div>
                </div>
                <div className="text-center flex-1 flex flex-col justify-between">
                  <div className="font-semibold text-foreground group-hover:text-brand-secondary transition-colors text-lg mb-2">
                    {method.title}
                  </div>
                  <div className="text-brand-secondary font-medium text-sm">{method.detail}</div>
                  <div className="mt-3 text-xs text-muted-foreground">
                    {method.title === "WhatsApp Us" && "Available 24/7 for immediate assistance"}
                    {method.title === "Email Us" && "We respond within 2 hours"}
                    {method.title === "Business Hours" && "Emergency service available 24/7"}
                  </div>
                </div>
              </motion.a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}