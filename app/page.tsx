import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/common/scroll-to-top"
import { HeroSection } from "@/components/sections/home/hero-section"
import { FormSection } from "@/components/sections/home/form-section"
import { FeaturesSection } from "@/components/sections/home/features-section"
import { HowItWorksSection } from "@/components/sections/home/how-it-works-section"
import { TestimonialsSection } from "@/components/sections/home/testimonials-section"
import { CTASection } from "@/components/sections/home/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FormSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
