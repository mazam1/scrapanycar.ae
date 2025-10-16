'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

// Mock data for featured articles
const featuredArticles = [
  {
    id: 1,
    title: "Complete Guide to Selling Your Car in UAE 2024",
    excerpt: "Everything you need to know about selling your car in the UAE, from documentation to getting the best price.",
    image: "/blog/featured-1.jpg",
    category: "Guides",
    readTime: "8 min read",
    publishDate: "2024-01-15",
    slug: "complete-guide-selling-car-uae-2024",
    featured: true
  },
  {
    id: 2,
    title: "UAE Car Market Trends: What's Hot in 2024",
    excerpt: "Discover the latest trends in the UAE automotive market and which car models are in highest demand.",
    image: "/blog/featured-2.jpg",
    category: "Market Insights",
    readTime: "6 min read",
    publishDate: "2024-01-12",
    slug: "uae-car-market-trends-2024",
    featured: true
  },
  {
    id: 3,
    title: "Maximizing Your Car's Resale Value: Expert Tips",
    excerpt: "Learn professional strategies to increase your car's value before selling, from maintenance to presentation.",
    image: "/blog/featured-3.jpg",
    category: "Tips",
    readTime: "5 min read",
    publishDate: "2024-01-10",
    slug: "maximizing-car-resale-value-tips",
    featured: true
  }
]

export default function FeaturedArticles() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Articles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular and insightful articles about car selling, 
            market trends, and expert advice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Featured Article */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link href={`/blog/${featuredArticles[0].slug}`} className="group block">
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {featuredArticles[0].category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                    {featuredArticles[0].title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredArticles[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{featuredArticles[0].readTime}</span>
                    <span>{new Date(featuredArticles[0].publishDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Secondary Featured Articles */}
          <div className="space-y-6">
            {featuredArticles.slice(1).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/blog/${article.slug}`} className="group block">
                  <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                      <div className="absolute top-3 left-3 z-10">
                        <span className="bg-accent/90 text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {article.title}
                      </h4>
                      
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{article.readTime}</span>
                        <span>{new Date(article.publishDate).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}