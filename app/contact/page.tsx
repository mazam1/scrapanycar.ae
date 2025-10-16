import * as React from "react"
import { Metadata } from "next"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/common/scroll-to-top"
import { ContactHeroSection } from "@/components/sections/contact/contact-hero-section"
import { ContactFormSection } from "@/components/sections/contact/contact-form-section"
import { ContactInfoSection } from "@/components/sections/contact/contact-info-section"
import { ContactMapSection } from "@/components/sections/contact/contact-map-section"

export const metadata: Metadata = {
  title: "Contact Us - Scrap Your Car | Get Your Free Quote Today",
  description: "Contact Scrap Your Car for instant scrap car quotes, pickup scheduling, and customer support. Call +971 4 123 4567 or fill out our online form for immediate assistance.",
  keywords: [
    "contact Scrap Your Car",
    "scrap car quote",
    "car pickup scheduling",
    "customer support",
    "Denver car recycling contact",
    "sell car contact form"
  ],
  openGraph: {
    title: "Contact Scrap Your Car - Get Your Free Quote Today",
    description: "Contact Scrap Your Car for instant scrap car quotes and pickup scheduling. Professional customer support available 24/7.",
    type: "website",
    locale: "en_AE",
    siteName: "Scrap Your Car"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Scrap Your Car - Get Your Free Quote Today",
    description: "Contact Scrap Your Car for instant scrap car quotes and pickup scheduling. Professional customer support available 24/7."
  }
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ContactHeroSection />
        <ContactFormSection />
        <ContactInfoSection />
        <ContactMapSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}