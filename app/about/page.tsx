import { Suspense } from "react"
import { Metadata } from "next"
import { Header } from "../../components/layout/header"
import { Footer } from "../../components/layout/footer"
import { ScrollToTop } from "../../components/common/scroll-to-top"
import { AboutHeroSection } from "../../components/sections/about/about-hero-section"
import { AboutStorySection } from "../../components/sections/about/about-story-section"

import { AboutValuesSection } from "../../components/sections/about/about-values-section"

export const metadata: Metadata = {
  title: "About ScrapYourCar - Leading Car Buyers in Dubai & UAE",
  description: "Learn about ScrapYourCar's mission to provide hassle-free car scrapping services across Dubai and UAE. 15+ years experience, 50K+ satisfied customers, and 100% secure process.",
  keywords: [
    "about ScrapYourCar",
    "car buyers Dubai",
    "car scrapping UAE",
    "Dubai car recycling",
    "UAE car valuation company",
    "trusted car buyers UAE"
  ],
  openGraph: {
    title: "About ScrapYourCar - Leading Car Buyers in Dubai & UAE",
    description: "Learn about ScrapYourCar's mission to provide hassle-free car scrapping services across Dubai and UAE. 15+ years experience, 50K+ satisfied customers.",
    type: "website",
    locale: "en_AE",
    siteName: "ScrapYourCar",
    url: "https://scrapanycar.ae/about"
  },
  twitter: {
    card: "summary_large_image",
    title: "About ScrapYourCar - Leading Car Buyers in Dubai & UAE",
    description: "Learn about ScrapYourCar's mission to provide hassle-free car scrapping services across Dubai and UAE. 15+ years experience, 50K+ satisfied customers."
  },
  alternates: {
    canonical: "https://scrapanycar.ae/about"
  }
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Header spacing for visual consistency */}
      <div 
        className="w-full relative"
        style={{
          height: '20px',
          backgroundColor: 'rgba(0, 0, 0, 0.90)',
          backdropFilter: 'blur(12px)'
        }}
      >
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundColor: '#c49a36'
          }}
        />
      </div>
      <main>
        <AboutHeroSection />
        <AboutStorySection />
        <AboutValuesSection />

      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <ScrollToTop />
    </div>
  )
}