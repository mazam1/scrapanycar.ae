"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin,
  MessageSquare,
  Headphones,
  Star,
  CheckCircle
} from "lucide-react"

import { Button } from "@/components/ui/button"

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us Now",
    description: "Speak directly with our experts",
    value: "+971 4 123 4567",
    action: "tel:+97141234567",
    available: "24/7 Available",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Get detailed responses",
    value: "info@scrapanycar.ae",
    action: "mailto:info@scrapanycar.ae",
    available: "Response within 1 hour",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Instant online assistance",
    value: "Start Chat",
    action: "#",
    available: "Available 9 AM - 9 PM",
    color: "from-purple-500 to-purple-600"
  }
]

const quickStats = [
  {
    icon: Clock,
    number: "< 5 min",
    label: "Average Response Time"
  },
  {
    icon: Star,
    number: "4.9/5",
    label: "Customer Satisfaction"
  },
  {
    icon: Headphones,
    number: "24/7",
    label: "Support Available"
  },
  {
    icon: CheckCircle,
    number: "98%",
    label: "Issues Resolved"
  }
]

export function ContactHeroSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-background to-muted/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold font-medium text-sm mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Headphones className="h-4 w-4" />
                Expert Support Team
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Get Your <span className="text-brand-gold">Free Quote</span> Today
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Ready to sell your scrap car? Our expert team is here to help you get the best 
              value with hassle-free service. Contact us now for an instant quote and same-day pickup.
            </p>

            {/* Quick Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                "Instant quotes in 5 minutes",
                "Free pickup anywhere",
                "Same-day service available",
                "Licensed & insured team"
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Primary CTA */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button 
                size="lg" 
                className="bg-brand-gold hover:bg-brand-gold/90 text-brand-charcoal font-semibold text-lg px-8"
                asChild
              >
                <a href="tel:+97141234567">
                  <Phone className="h-5 w-5 mr-2" />
                  Call +971 4 123 4567
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <MessageSquare className="h-5 w-5 mr-2" />
                Start Live Chat
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Contact Methods */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-brand-gold/50 transition-all duration-300 hover:shadow-lg cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => {
                  if (method.action.startsWith('tel:') || method.action.startsWith('mailto:')) {
                    window.location.href = method.action
                  }
                }}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${method.color} group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground group-hover:text-brand-gold transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-1">{method.description}</p>
                    <p className="font-medium text-foreground">{method.value}</p>
                    <p className="text-xs text-green-600 font-medium">{method.available}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {quickStats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-card/50 border border-border/50"
            >
              <div className="inline-flex p-3 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-3">
                <stat.icon className="h-5 w-5 text-brand-gold" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Emergency Contact */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-600">
            <Clock className="h-4 w-4" />
            <span className="text-sm font-medium">
              Need immediate pickup? Call our emergency line: (555) 911-SCRAP
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}