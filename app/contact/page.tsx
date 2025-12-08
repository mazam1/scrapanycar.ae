import * as React from "react"
import { Suspense } from "react"
import { Metadata } from "next"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/common/scroll-to-top"
import { ContactHeroSection } from "@/components/sections/contact/contact-hero-section"
import { ContactFormSection } from "@/components/sections/contact/contact-form-section"
import { ContactFAQSection } from "@/components/sections/contact/contact-faq-section"
import LocalBusinessSchema from "@/components/seo/local-business-schema"
import FAQSchema from "@/components/seo/faq-schema"

export const metadata: Metadata = {
  title: "Contact Us - ScrapYourCar | Get Your Free Quote Today",
  description: "Contact ScrapYourCar for instant scrap car quotes, pickup scheduling, and customer support. Call +971 4 123 4567 or fill out our online form for immediate assistance.",
  keywords: [
    "contact ScrapYourCar",
    "scrap car quote",
    "car pickup scheduling",
    "customer support",
    "Dubai car recycling contact",
    "UAE car buyers contact",
    "sell car contact form"
  ],
  openGraph: {
    title: "Contact ScrapYourCar - Get Your Free Quote Today",
    description: "Contact ScrapYourCar for instant scrap car quotes and pickup scheduling. Professional customer support available 24/7.",
    type: "website",
    locale: "en_AE",
    siteName: "ScrapYourCar"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact ScrapYourCar - Get Your Free Quote Today",
    description: "Contact ScrapYourCar for instant scrap car quotes and pickup scheduling. Professional customer support available 24/7."
  },
  alternates: {
    canonical: "https://scrapanycar.ae/contact"
  }
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <LocalBusinessSchema />
      <FAQSchema />
      <Header />
      <main>
        <ContactHeroSection />
        <ContactFormSection />
        <ContactFAQSection />
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <ScrollToTop />
    </div>
  )
}