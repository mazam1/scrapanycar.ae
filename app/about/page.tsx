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