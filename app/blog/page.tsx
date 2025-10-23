import { Metadata } from 'next'
import { Suspense } from 'react'
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/common/scroll-to-top"
// import BlogHero from '@/components/sections/blog/blog-hero'
import ComprehensiveBlogSection from '@/components/sections/blog/comprehensive-blog-section'

export const metadata: Metadata = {
  title: 'Blog | Scrap Your Car - Car Selling Tips & Market Insights',
  description: 'Stay updated with the latest car selling tips, market insights, and automotive news in the UAE. Expert advice from Scrap Your Car.',
  keywords: 'car selling tips, UAE car market, automotive news, car valuation, vehicle selling guide',
  openGraph: {
    title: 'Blog | Scrap Your Car - Car Selling Tips & Market Insights',
    description: 'Stay updated with the latest car selling tips, market insights, and automotive news in the UAE.',
    type: 'website',
  },
}

export default function BlogPage() {
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
        {/* Removed redundant BlogHero to avoid empty space and duplication */}
        <ComprehensiveBlogSection />
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <ScrollToTop />
    </div>
  )
}