"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Star, Quote, User } from "lucide-react"

const testimonials = [
  {
    name: "Noor Al Mansoori",
    title: "Product Manager",
    ratingText: "5/5",
    review:
      "Sold my Lexus RX within 24 hours. The team handled everything and transferred funds instantly. Couldn’t be happier.",
    vehicle: "2020 Lexus RX 350",
    amount: "AED 145,000"
  },
  {
    name: "Daniel Reyes",
    title: "Finance Analyst",
    ratingText: "4.5/5",
    review:
      "Transparent valuation and no last-minute surprises. Pickup was on time and the process was super efficient.",
    vehicle: "2018 Honda Accord Touring",
    amount: "AED 68,000"
  },
  {
    name: "Layla Hussein",
    title: "Interior Designer",
    ratingText: "5/5",
    review:
      "I had minor body damage on my Mini Cooper. Still got a great price and the staff were polite and professional.",
    vehicle: "2019 Mini Cooper S",
    amount: "AED 78,500"
  },
  {
    name: "Omar Khaled",
    title: "Operations Lead",
    ratingText: "5/5",
    review:
      "Instant quote matched the final offer. Documents were handled for me and payment hit my account the same day.",
    vehicle: "2017 Ford Explorer Limited",
    amount: "AED 57,000"
  },
  {
    name: "Sofia Martins",
    title: "Software Engineer",
    ratingText: "4/5",
    review:
      "Needed to sell quickly before moving. They scheduled pickup next morning and wrapped up in under an hour.",
    vehicle: "2021 Mazda CX-5 Grand Touring",
    amount: "AED 95,000"
  },
  {
    name: "Arjun Mehta",
    title: "Entrepreneur",
    ratingText: "5/5",
    review:
      "Fair market price, zero hassle. This is the easiest car sale I’ve ever done.",
    vehicle: "2018 Mercedes-Benz E300",
    amount: "AED 115,000"
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden" aria-label="Customer testimonials">
      {/* Subtle background accents for pixel-perfect depth */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 to-transparent" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 20%, rgba(255,255,255,0.9) 1px, transparent 1px), radial-gradient(circle at 75% 80%, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
            backgroundPosition: "0 0, 21px 21px"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-14 lg:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
              <span className="text-sm font-medium text-brand-secondary uppercase tracking-wider">Testimonials</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-container-center">
              What Our <span className="text-brand-secondary relative">
                Customers
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-secondary/60 to-brand-secondary/20 rounded-full" />
              </span> Say
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-container-center">
              Real stories from car owners who sold with us. Transparent process, fair prices, fast payout.
            </p>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="mx-auto mb-12 lg:mb-16 max-w-4xl group relative bg-white bg-opacity-50 rounded-3xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-secondary/20 via-brand-secondary/10 to-transparent rounded-xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-500 -z-10" />
          <div className="grid grid-cols-3 items-center rounded-xl bg-muted/30 text-center relative border border-brand-secondary/20 group-hover:border-brand-secondary/50 transition-all duration-300">
            <div className="py-6">
              <div className="responsive-text-lg font-bold text-brand-secondary">4.9/5</div>
              <div className="responsive-text-sm text-muted-foreground text-truncate">Average Rating</div>
            </div>
            <div className="py-6 border-x border-border">
              <div className="responsive-text-lg font-bold text-brand-secondary">10,000+</div>
              <div className="responsive-text-sm text-muted-foreground text-truncate">Happy Customers</div>
            </div>
            <div className="py-6">
              <div className="responsive-text-lg font-bold text-brand-secondary">100%</div>
              <div className="responsive-text-sm text-muted-foreground text-truncate">Satisfaction Rate</div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((t, index) => (
            <div key={t.name} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-secondary/20 via-brand-secondary/5 to-transparent rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-500 -z-10" />
              <div className="absolute bg-white inset-0 rounded-2xl border border-brand-secondary/20 group-hover:border-brand-secondary/50 transition-all duration-300 -z-10" />
              <motion.article
                className="h-full rounded-2xl bg-card p-6 sm:p-7 lg:p-8 relative overflow-hidden min-h-[320px] flex flex-col"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
                suppressHydrationWarning
              >
              {/* decorative quote */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-10 w-10 text-brand-secondary" />
              </div>

              {/* header */}
              <div className="flex items-center gap-4 mb-4 flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-muted/30 border border-border/60 flex items-center justify-center flex-shrink-0">
                  <User className="h-5 w-5 text-brand-secondary" />
                </div>
                <div className="min-w-0 flex-grow">
                  <div className="responsive-text-base font-semibold text-foreground text-truncate">{t.name}</div>
                  <div className="responsive-text-sm text-muted-foreground text-truncate">{t.title}</div>
                </div>
              </div>

              {/* rating */}
              <div className="flex items-center gap-2 mb-3 flex-shrink-0">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-secondary" />
                  ))}
                </div>
                <span className="responsive-text-sm text-muted-foreground">{t.ratingText}</span>
              </div>

              {/* review */}
              <p className="responsive-text-sm text-muted-foreground leading-relaxed card-text flex-grow mb-4 max-h-[120px] overflow-y-auto">
                "{t.review}"
              </p>

              {/* vehicle & amount */}
              <div className="mt-auto rounded-lg border border-border/60 bg-muted/40 p-3 flex-shrink-0">
                <div className="flex justify-between items-center responsive-text-sm gap-2">
                  <span className="text-muted-foreground text-truncate flex-grow">{t.vehicle}</span>
                  <span className="font-semibold text-brand-primary whitespace-nowrap">{t.amount}</span>
                </div>
              </div>
              </motion.article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}