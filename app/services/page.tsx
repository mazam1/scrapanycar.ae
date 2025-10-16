import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/common/scroll-to-top"
import { ServicesHeroSection } from "@/components/sections/services/services-hero-section"
import { ServicesOverviewSection } from "@/components/sections/services/services-overview-section"
import { ServiceProcessSection } from "@/components/sections/services/service-process-section"
import { ServiceAreasSection } from "@/components/sections/services/service-areas-section"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ServicesHeroSection />
        <ServicesOverviewSection />
        <ServiceProcessSection />
        <ServiceAreasSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}