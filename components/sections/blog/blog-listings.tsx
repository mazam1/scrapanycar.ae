'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Mock data for blog posts
const blogPosts = [
  {
    id: 4,
    title: "How to Prepare Your Car for Sale: A Step-by-Step Checklist",
    excerpt: "Follow our comprehensive checklist to ensure your car is in perfect condition for sale and attracts the best offers.",
    image: "/blog/post-1.jpg",
    category: "Guides",
    readTime: "7 min read",
    publishDate: "2024-01-08",
    slug: "prepare-car-for-sale-checklist",
    author: "Sarah Ahmed",
    tags: ["preparation", "checklist", "selling"]
  },
  {
    id: 5,
    title: "Understanding Car Depreciation in the UAE Market",
    excerpt: "Learn how depreciation affects your car's value and which factors influence resale prices in the UAE.",
    image: "/blog/post-2.jpg",
    category: "Market Insights",
    readTime: "6 min read",
    publishDate: "2024-01-05",
    slug: "car-depreciation-uae-market",
    author: "Mohammed Al-Rashid",
    tags: ["depreciation", "market", "valuation"]
  },
  {
    id: 6,
    title: "Top 10 Most Sought-After Car Brands in UAE 2024",
    excerpt: "Discover which car brands are in highest demand and command the best resale values in the UAE market.",
    image: "/blog/post-3.jpg",
    category: "Market Insights",
    readTime: "5 min read",
    publishDate: "2024-01-03",
    slug: "top-car-brands-uae-2024",
    author: "Fatima Hassan",
    tags: ["brands", "demand", "market-trends"]
  },
  {
    id: 7,
    title: "Legal Requirements for Selling Your Car in UAE",
    excerpt: "Navigate the legal aspects of car selling in the UAE, from documentation to transfer procedures.",
    image: "/blog/post-4.jpg",
    category: "Legal & Documentation",
    readTime: "8 min read",
    publishDate: "2024-01-01",
    slug: "legal-requirements-selling-car-uae",
    author: "Ahmed Al-Mansoori",
    tags: ["legal", "documentation", "requirements"]
  },
  {
    id: 8,
    title: "Common Mistakes to Avoid When Selling Your Car",
    excerpt: "Learn from others&apos; mistakes and avoid common pitfalls that could cost you money when selling your vehicle.",
    image: "/blog/post-5.jpg",
    category: "Tips & Tricks",
    readTime: "6 min read",
    publishDate: "2023-12-28",
    slug: "common-mistakes-selling-car",
    author: "Layla Ibrahim",
    tags: ["mistakes", "tips", "selling"]
  },
  {
    id: 9,
    title: "The Impact of Mileage on Your Car's Resale Value",
    excerpt: "Understand how mileage affects your car's worth and strategies to maintain value despite high kilometers.",
    image: "/blog/post-6.jpg",
    category: "Tips & Tricks",
    readTime: "5 min read",
    publishDate: "2023-12-25",
    slug: "mileage-impact-resale-value",
    author: "Omar Khalil",
    tags: ["mileage", "value", "maintenance"]
  }
]

export default function BlogListings() {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6
  const totalPages = Math.ceil(blogPosts.length / postsPerPage)
  
  const startIndex = (currentPage - 1) * postsPerPage
  const currentPosts = blogPosts.slice(startIndex, startIndex + postsPerPage)

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
            Latest Articles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our latest insights, tips, and market analysis 
            to make informed decisions about your car.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                  {/* Post Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Post Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    {/* Post Meta */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span className="font-medium">{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Read More */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {new Date(post.publishDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                      
                      <div className="flex items-center text-accent group-hover:text-accent/80 transition-colors">
                        <span className="text-sm font-medium mr-2">Read More</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center items-center space-x-2"
          >
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              Previous
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  currentPage === page
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-card text-muted-foreground hover:bg-accent/10 hover:text-foreground'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              Next
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}