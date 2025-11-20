import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/common/scroll-to-top"
import CoreServicesSection from '@/components/sections/services/core-services-section'
import HowItWorksSection from '@/components/sections/services/how-it-works-section'
import VehiclesWeBuySection from '@/components/sections/services/vehicles-we-buy-section'
import AdditionalServicesSection from '@/components/sections/services/additional-services-section'
import ReadyToStartSection from '@/components/sections/services/ready-to-start-section'

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
        <HowItWorksSection />
        <CoreServicesSection />
        <VehiclesWeBuySection />
        <AdditionalServicesSection />
        <ReadyToStartSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}