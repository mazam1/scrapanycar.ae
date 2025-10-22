"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Star, Quote, User } from "lucide-react"

const testimonials = [
  {
    name: "Ahmed Alrashidi",
    title: "Planning Consultant",
    ratingText: "5/5",
    review:
      "I was skeptical about selling my 2019 BMW X5 online, but Scrap Your Car made it incredibly easy. The valuation was spot-on with market rates, and they handled all the paperwork. Got AED 185,000 for my car—exactly what I was hoping for!",
    vehicle: "2019 BMW X5 xDrive40i",
    amount: "AED 185,000"
  },
  {
    name: "Priya Sharma",
    title: "Marketing Specialist",
    ratingText: "4.5/5",
    review:
      "Moving back to India meant I had to sell my Toyota Camry quickly. Scrap Your Car not only gave me a fair price but also completed the transaction in just 2 days. Their team was professional and transparent throughout the process.",
    vehicle: "2020 Toyota Camry SE",
    amount: "AED 72,000"
  },
  {
    name: "Michael Johnson",
    title: "Automotive Design Professional",
    ratingText: "5/5",
    review:
      "After my Audi A4 had some engine issues, I thought I’d get a terrible price for it. Scrap Your Car surprised me by offering AED 88,000 even with the mechanical problems. They truly buy cars in any condition!",
    vehicle: "2018 Audi A4 Quattro",
    amount: "AED 88,000"
  },
  {
    name: "Fatima Al-Zahra",
    title: "Teacher",
    ratingText: "4/5",
    review:
      "As a single mother, I needed to sell my Honda CR-V to upgrade to a larger family car. The team was understanding and patient, explaining every step. The whole process took less than a week!",
    vehicle: "2017 Honda CR-V EX",
    amount: "AED 62,000"
  },
  {
    name: "Raj Patel",
    title: "IT Consultant",
    ratingText: "5/5",
    review:
      "I’ve sold cars before through classifieds and it was always a hassle. Scrap Your Car made it so simple—just filled out their form, got an instant quote, and had the money in my account the next day. Highly recommend!",
    vehicle: "2021 Nissan Altima SV",
    amount: "AED 78,000"
  },
  {
    name: "Elena Petrov",
    title: "Graphic Designer",
    ratingText: "4.5/5",
    review:
      "My Mercedes C-Class was involved in a minor accident and I was worried about its resale value. Scrap Your Car gave me a fair assessment and offered AED 125,000. The inspection was thorough and the staff was very knowledgeable.",
    vehicle: "2019 Mercedes-Benz C300",
    amount: "AED 125,000"
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden" aria-label="Customer testimonials">
      {/* Subtle background accents for pixel-perfect depth */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 to-transparent" />
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
            <h2 className="tracking-tight text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              What Our <span className="text-brand-gold">Customers</span> Say
            </h2>
            <p className="mt-4 max-w-3xl text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Real stories from car owners who sold with us. Transparent process, fair prices, fast payout.
            </p>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="mx-auto mb-12 lg:mb-16 max-w-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-3 items-center rounded-xl border border-border bg-muted/30 text-center">
            <div className="py-6">
              <div className="text-2xl lg:text-3xl font-bold text-brand-gold">4.9/5</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="py-6 border-x border-border">
              <div className="text-2xl lg:text-3xl font-bold text-brand-gold">10,000+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="py-6">
              <div className="text-2xl lg:text-3xl font-bold text-brand-gold">100%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((t, index) => (
            <motion.article
              key={t.name}
              className="group h-full rounded-2xl bg-card border border-border/60 p-6 sm:p-7 lg:p-8 hover:border-brand-gold/60 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
            >
              {/* decorative quote */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-10 w-10 text-brand-gold" />
              </div>

              {/* header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-muted/30 border border-border/60 flex items-center justify-center">
                  <User className="h-5 w-5 text-brand-gold" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm sm:text-base font-semibold text-foreground truncate">{t.name}</div>
                  <div className="text-xs text-muted-foreground truncate">{t.title}</div>
                </div>
              </div>

              {/* rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{t.ratingText}</span>
              </div>

              {/* review */}
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                “{t.review}”
              </p>

              {/* vehicle & amount */}
              <div className="mt-6 rounded-lg border border-border/60 bg-muted/40 p-3">
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-muted-foreground">{t.vehicle}</span>
                  <span className="font-semibold text-brand-gold">{t.amount}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}