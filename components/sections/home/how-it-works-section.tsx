"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

// Branded inline SVG icons
const PhoneIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92a16 16 0 0 1-7.92-7.92L6.09 2 2 6.09l3.91 3.91a11 11 0 0 0 7.92 7.92L22 22z" />
  </svg>
)
const PickupIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="8" width="15" height="8" rx="2" />
    <path d="M16 8l4 4v4" />
    <circle cx="6" cy="18" r="2" />
    <circle cx="18" cy="18" r="2" />
  </svg>
)
const CashIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="10" rx="2" />
    <circle cx="12" cy="12" r="3" />
    <path d="M6 10h0M18 10h0" />
  </svg>
)

const steps = [
  {
    step: "01",
    icon: PhoneIcon,
    title: "Get Your Quote",
    description: "Call us or fill out our online form with your vehicle details. Get an instant, no-obligation quote based on current market rates.",
    details: [
      "Instant online quote",
      "No hidden fees",
      "Valid for 7 days"
    ]
  },
  {
    step: "02",
    icon: PickupIcon,
    title: "Schedule Pickup",
    description: "Choose a convenient time for our team to come to you. We provide free towing and handle all the paperwork on the spot.",
    details: [
      "Free towing service",
      "Flexible scheduling",
      "All paperwork handled"
    ]
  },
  {
    step: "03",
    icon: CashIcon,
    title: "Get Paid Instantly",
    description: "Receive payment immediately when we pick up your vehicle. Choose cash or instant bank transfer - it's that simple!",
    details: [
      "Same-day payment",
      "Cash or bank transfer",
      "No waiting period"
    ]
  }
]

export function HowItWorksSection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-muted/20 via-muted/30 to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
            <span className="text-sm font-medium text-brand-secondary uppercase tracking-wider">Process</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            How It <span className="text-brand-secondary relative">
              Works
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-secondary/60 to-brand-secondary/20 rounded-full" />
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Selling your scrap car has never been easier. Our streamlined 3-step process 
            <span className="text-foreground font-medium"> gets you cash fast</span>.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              className="relative"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20 lg:mb-24 ${
                step.step === "02" ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Step Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="relative mb-8">
                    <div className="inline-flex items-center justify-center lg:justify-start mb-6">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-brand-secondary to-brand-secondary/80 flex items-center justify-center shadow-lg">
                        <span className="text-2xl lg:text-3xl font-black text-white">
                          {step.step}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-3 text-left">
                        <div className="w-2 h-2 rounded-full bg-brand-secondary mt-3 flex-shrink-0" />
                        <span className="text-lg text-foreground leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step Visual */}
                <div className="flex-1 flex justify-center">
                  <div className="relative w-full max-w-lg">
                    <div className="relative group">
                      {/* Background decoration */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-brand-secondary/20 via-brand-secondary/10 to-transparent rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                      
                      {/* Main image container */}
                      <div className="relative bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-2xl border border-white/20 group-hover:shadow-3xl transition-all duration-500 group-hover:scale-[1.02]">
                        <div className="aspect-square relative overflow-hidden rounded-xl">
                          {step.step === "01" && (
                            <Image 
                              src="/how_it_work_get_quote.png" 
                              alt="Get Your Quote"
                              width={400}
                              height={400}
                              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                          )}
                          {step.step === "02" && (
                            <Image 
                              src="/how_it_work_schedule_pickup.png" 
                              alt="Schedule Pickup"
                              width={400}
                              height={400}
                              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                          )}
                          {step.step === "03" && (
                            <Image 
                              src="/how_it_work_get_paid.png" 
                              alt="Get Paid Instantly"
                              width={400}
                              height={400}
                              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                          )}
                          {!["01", "02", "03"].includes(step.step) && (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-secondary/10 to-brand-secondary/5 rounded-xl border border-brand-secondary/20">
                              <step.icon className="h-24 w-24 text-brand-secondary" />
                            </div>
                          )}
                        </div>
                        
                        {/* Decorative elements */}
                        <div className="absolute top-4 right-4 w-3 h-3 bg-brand-secondary rounded-full opacity-60" />
                        <div className="absolute bottom-4 left-4 w-2 h-2 bg-brand-secondary/60 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow Connector */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-12 lg:my-16">
                  <motion.div
                    className="relative flex items-center justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent rounded-full blur-lg" />
                    
                    {/* Main arrow container */}
                    <div className="relative flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-brand-secondary/10 via-brand-secondary/20 to-brand-secondary/10 rounded-full border border-brand-secondary/30 backdrop-blur-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
                        <div className="w-12 h-0.5 bg-gradient-to-r from-brand-secondary via-brand-secondary/80 to-brand-secondary/40 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse" />
                        </div>
                        <div className="w-0 h-0 border-l-[10px] border-l-brand-secondary border-y-[6px] border-y-transparent drop-shadow-sm" />
                        <div className="w-12 h-0.5 bg-gradient-to-r from-brand-secondary/40 via-brand-secondary/20 to-transparent relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                        </div>
                        <div className="w-2 h-2 rounded-full bg-brand-secondary/60 animate-pulse" style={{ animationDelay: '0.5s' }} />
                      </div>
                    </div>
                    
                    {/* Side decorations */}
                    <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-brand-secondary/40 rounded-full" />
                    <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-brand-secondary/40 rounded-full" />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}