import { Metadata } from "next"
import { Header } from "../../components/layout/header"
import { Footer } from "../../components/layout/footer"
import { ScrollToTop } from "../../components/common/scroll-to-top"
import ServicesHeroSection from '../../components/sections/services/services-hero-section'
import CoreServicesSection from '../../components/sections/services/core-services-section'
import HowItWorksSection from '../../components/sections/services/how-it-works-section'
import VehiclesWeBuySection from '../../components/sections/services/vehicles-we-buy-section'
import AdditionalServicesSection from '../../components/sections/services/additional-services-section'
import ReadyToStartSection from '../../components/sections/services/ready-to-start-section'
import { ServicesContactFormSection } from '../../components/sections/services/services-contact-form-section'

export const metadata: Metadata = {
  title: "Car Scrapping Services in Dubai & UAE | ScrapYourCar",
  description: "Professional car scrapping and vehicle buying services across Dubai and UAE. Free valuation, instant payment, eco-friendly disposal, and free pickup. Licensed and insured.",
  keywords: [
    "car scrapping services Dubai",
    "car buyers UAE",
    "scrap car Dubai",
    "vehicle recycling UAE",
    "car valuation Dubai",
    "instant car payment UAE",
    "free car pickup Dubai"
  ],
  openGraph: {
    title: "Car Scrapping Services in Dubai & UAE | ScrapYourCar",
    description: "Professional car scrapping and vehicle buying services across Dubai and UAE. Free valuation, instant payment, and eco-friendly disposal.",
    type: "website",
    locale: "en_AE",
    siteName: "ScrapYourCar",
    url: "https://scrapanycar.ae/services"
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Scrapping Services in Dubai & UAE | ScrapYourCar",
    description: "Professional car scrapping and vehicle buying services across Dubai and UAE. Free valuation, instant payment, and eco-friendly disposal."
  },
  alternates: {
    canonical: "https://scrapanycar.ae/services"
  }
}

export default function ServicesPage() {
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
        <ServicesHeroSection />
        <HowItWorksSection />
        <CoreServicesSection />
        <ServicesContactFormSection />
        <VehiclesWeBuySection />
        <AdditionalServicesSection />
        <ReadyToStartSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}