import { Suspense } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/common/scroll-to-top"
import { AboutHeroSection } from "@/components/sections/about/about-hero-section"
import { AboutStorySection } from "@/components/sections/about/about-story-section"

import { AboutValuesSection } from "@/components/sections/about/about-values-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
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