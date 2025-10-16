import { Metadata } from 'next'
import BlogHero from '@/components/sections/blog/blog-hero'
import FeaturedArticles from '@/components/sections/blog/featured-articles'
import BlogListings from '@/components/sections/blog/blog-listings'
import BlogCategories from '@/components/sections/blog/blog-categories'
import BlogSearch from '@/components/sections/blog/blog-search'

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
    <main className="min-h-screen bg-background">
      {/* Blog Hero Section */}
      <BlogHero />
      
      {/* Featured Articles */}
      <FeaturedArticles />
      
      {/* Blog Categories & Search */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <BlogCategories />
            <BlogSearch />
          </div>
        </div>
      </section>
      
      {/* Blog Listings */}
      <BlogListings />
    </main>
  )
}