"use client"

import { Suspense, useEffect } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/common/scroll-to-top"
import { HeroSection } from "@/components/sections/home/hero-section"
import { FormSection } from "@/components/sections/home/form-section"
import { FeaturesSection } from "@/components/sections/home/features-section"
import { HowItWorksSection } from "@/components/sections/home/how-it-works-section"
import { TestimonialsSection } from "@/components/sections/home/testimonials-section"
import { GetInTouchSection } from "@/components/sections/home/get-in-touch-section"
import { useSearchParams } from "next/navigation"

// Component that uses searchParams wrapped in Suspense
function ScrollHandler() {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // Check if we should scroll to the form
    if (searchParams.get('scrollToForm') === 'true') {
      // Small delay to ensure the page is fully loaded
      setTimeout(() => {
        const formSection = document.getElementById('valuation-form');
        if (formSection) {
          // Smooth scroll to the form section
          formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          
          // After scrolling, find and focus the name input field
          setTimeout(() => {
            // Look for the name input within the form section
            const nameInput = formSection.querySelector('input[type="text"][placeholder="Your full name"]');
            if (nameInput) {
              // Focus the name input field
              nameInput.focus();
            }
          }, 800); // Delay to allow smooth scrolling to complete
        }
      }, 300);
    }
  }, [searchParams]);
  
  return null;
}

export default function HomePage() {

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        
        <FormSection />
        <FeaturesSection />
        <HowItWorksSection />
        {/* New section inserted just before footer to mirror styling */}
        <GetInTouchSection />
      </main>
      <Suspense fallback={null}>
        <Footer />
        <ScrollHandler />
      </Suspense>
      <ScrollToTop />
    </div>
  )
}
