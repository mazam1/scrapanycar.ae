import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/common/scroll-to-top"
import ServicesHeroSection from '@/components/sections/services/services-hero-section'
import CoreServicesSection from '@/components/sections/services/core-services-section'
import HowItWorksSection from '@/components/sections/services/how-it-works-section'
import VehiclesWeBuySection from '@/components/sections/services/vehicles-we-buy-section'
import AdditionalServicesSection from '@/components/sections/services/additional-services-section'
import ReadyToStartSection from '@/components/sections/services/ready-to-start-section'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ServicesHeroSection />
        <CoreServicesSection />
        <HowItWorksSection />
        <VehiclesWeBuySection />
        <AdditionalServicesSection />
        <ReadyToStartSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}