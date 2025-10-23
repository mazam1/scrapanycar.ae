'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, ChevronRight } from 'lucide-react'

// Mock data for blog posts - merged from existing components
const featuredPost = {
  id: 1,
  title: "Complete Guide to Selling Your Car in UAE 2024",
  excerpt: "Everything you need to know about selling your car in the UAE, from documentation to getting the best price.",
  image: "/blog/featured-1.jpg",
  category: "Guides",
  readTime: "8 min read",
  publishDate: "January 15, 2024",
  slug: "complete-guide-selling-car-uae-2024",
  author: {
    name: "Sarah Johnson",
    avatar: "/authors/sarah.jpg"
  },
  featured: true
}

const latestArticles = [
  {
    id: 2,
    title: "UAE Car Market Trends: What&apos;s Hot in 2024",
    excerpt: "Discover the latest trends in the UAE automotive market and which car models are in highest demand.",
    image: "/blog/featured-2.jpg",
    category: "Market Insights",
    readTime: "6 min read",
    publishDate: "January 12, 2024",
    slug: "uae-car-market-trends-2024",
    author: {
      name: "Michael Rodriguez",
      avatar: "/authors/michael.jpg"
    }
  },
  {
    id: 3,
    title: "Maximizing Your Car&apos;s Resale Value: Expert Tips",
    excerpt: "Learn professional strategies to increase your car&apos;s value before selling, from maintenance to presentation.",
    image: "/blog/featured-3.jpg",
    category: "Tips",
    readTime: "5 min read",
    publishDate: "January 10, 2024",
    slug: "maximizing-car-resale-value-tips",
    author: {
      name: "Emma Wilson",
      avatar: "/authors/emma.jpg"
    }
  },
  {
    id: 4,
    title: "How to Prepare Your Car for Sale: A Step-by-Step Checklist",
    excerpt: "Follow our comprehensive checklist to ensure your car is in perfect condition for sale and attracts the best offers.",
    image: "/blog/post-1.jpg",
    category: "Guides",
    readTime: "7 min read",
    publishDate: "January 8, 2024",
    slug: "prepare-car-for-sale-checklist",
    author: {
      name: "Sarah Ahmed",
      avatar: "/authors/sarah-ahmed.jpg"
    }
  },
  {
    id: 5,
    title: "Understanding Car Depreciation in the UAE Market",
    excerpt: "Learn how depreciation affects your car&apos;s value and which factors influence resale prices in the UAE.",
    image: "/blog/post-2.jpg",
    category: "Market Insights",
    readTime: "6 min read",
    publishDate: "January 5, 2024",
    slug: "car-depreciation-uae-market",
    author: {
      name: "Mohammed Al-Rashid",
      avatar: "/authors/mohammed.jpg"
    }
  },
  {
    id: 6,
    title: "Top 10 Most Sought-After Car Brands in UAE 2024",
    excerpt: "Discover which car brands are in highest demand and command the best resale values in the UAE market.",
    image: "/blog/post-3.jpg",
    category: "Market Insights",
    readTime: "5 min read",
    publishDate: "January 3, 2024",
    slug: "top-car-brands-uae-2024",
    author: {
      name: "Fatima Hassan",
      avatar: "/authors/fatima.jpg"
    }
  },
  {
    id: 7,
    title: "Legal Requirements for Selling Your Car in UAE",
    excerpt: "Navigate the legal aspects of car selling in the UAE, from documentation to transfer procedures.",
    image: "/blog/post-4.jpg",
    category: "Legal & Documentation",
    readTime: "8 min read",
    publishDate: "January 1, 2024",
    slug: "legal-requirements-selling-car-uae",
    author: {
      name: "Ahmed Al-Mansoori",
      avatar: "/authors/ahmed.jpg"
    }
  },
  {
    id: 8,
    title: "Common Mistakes to Avoid When Selling Your Car",
    excerpt: "Learn from others&apos; mistakes and avoid common pitfalls that could cost you money when selling your vehicle.",
    image: "/blog/post-5.jpg",
    category: "Tips & Tricks",
    readTime: "6 min read",
    publishDate: "December 28, 2023",
    slug: "common-mistakes-selling-car",
    author: {
      name: "Layla Ibrahim",
      avatar: "/authors/layla.jpg"
    }
  },
  {
    id: 9,
    title: "The Impact of Mileage on Your Car&apos;s Resale Value",
    excerpt: "Understand how mileage affects your car&apos;s worth and strategies to maintain value despite high kilometers.",
    image: "/blog/post-6.jpg",
    category: "Tips & Tricks",
    readTime: "5 min read",
    publishDate: "December 25, 2023",
    slug: "mileage-impact-resale-value",
    author: {
      name: "Omar Khalil",
      avatar: "/authors/omar.jpg"
    }
  }
]

const categories = [
  { name: "All Articles", count: 24 },
  { name: "Guides", count: 8 },
  { name: "Market Insights", count: 6 },
  { name: "Tips & Tricks", count: 5 },
  { name: "Legal & Documentation", count: 3 },
  { name: "Valuation", count: 2 }
]

const recentPosts = [
  "Complete Guide to Selling Your Car in UAE 2024",
  "UAE Car Market Trends: What&apos;s Hot in 2024",
  "How to Prepare Your Car for Sale: A Step-by-Step Checklist",
  "Understanding Car Depreciation in the UAE Market"
]

export default function ComprehensiveBlogSection() {
  const [visibleArticles, setVisibleArticles] = useState(6)
  const [email, setEmail] = useState('')

  const loadMoreArticles = () => {
    setVisibleArticles(prev => Math.min(prev + 3, latestArticles.length))
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Subscribe:', email)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Car Selling
                <span className="block text-orange-500">Blog & Insights</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Expert insights, market trends, and practical tips to help you get the best value for your 
                vehicle. Stay informed with the latest in automotive buying and selling.
              </p>
            </motion.div>

            {/* Featured Article */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex flex-col lg:flex-row">
                  {/* Article Image */}
                  <div className="lg:w-1/2 relative">
                    <div className="aspect-[4/3] lg:aspect-auto lg:h-full bg-gradient-to-br from-gray-600 to-gray-800 relative overflow-hidden">
                      {/* Placeholder for car image */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center">
                        <div className="w-32 h-20 bg-gray-400 rounded-lg opacity-50"></div>
                      </div>
                      
                      {/* Featured Badge */}
                      <div className="absolute top-6 left-6">
                        <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Article Content */}
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    {/* Article Meta */}
                    <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-semibold">
                            {featuredPost.author.name.charAt(0)}
                          </span>
                        </div>
                        <span>{featuredPost.author.name}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredPost.publishDate}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    
                    {/* Read More Button */}
                    <Link 
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 group w-fit"
                    >
                      Read More
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-16 lg:py-24 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Latest Articles
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Stay updated with the latest trends and insights in car selling
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-12">
              {/* Articles Grid */}
              <div className="lg:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {latestArticles.slice(0, visibleArticles).map((article, index) => (
                    <motion.article
                      key={article.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <Link href={`/blog/${article.slug}`} className="block">
                        <div className="bg-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                          {/* Article Image */}
                          <div className="relative h-48 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                              <div className="w-20 h-12 bg-gray-500 rounded opacity-50"></div>
                            </div>
                            <div className="absolute top-4 left-4 z-10">
                              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                {article.category}
                              </span>
                            </div>
                          </div>
                          
                          {/* Article Content */}
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors line-clamp-2">
                              {article.title}
                            </h3>
                            
                            <p className="text-gray-300 mb-4 line-clamp-3">
                              {article.excerpt}
                            </p>
                            
                            {/* Article Meta */}
                            <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs font-semibold">
                                    {article.author.name.charAt(0)}
                                  </span>
                                </div>
                                <span className="font-medium">{article.author.name}</span>
                              </div>
                              <div className="flex items-center gap-4">
                                <span>{article.publishDate}</span>
                                <span>{article.readTime}</span>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-2 text-orange-400 font-medium group-hover:gap-3 transition-all">
                              Read More
                              <ChevronRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>

                {/* Load More Button */}
                {visibleArticles < latestArticles.length && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <button
                      onClick={loadMoreArticles}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                    >
                      Load More Articles
                    </button>
                  </motion.div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:w-1/3">
                <div className="space-y-8">
                  {/* Categories */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-slate-700 rounded-2xl p-6"
                  >
                    <h3 className="text-xl font-bold text-white mb-6">Categories</h3>
                    <div className="space-y-3">
                      {categories.map((category, index) => (
                        <Link
                          key={index}
                          href={`/blog?category=${category.name.toLowerCase().replace(' ', '-')}`}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-600 transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <span className="text-gray-300 group-hover:text-white transition-colors">
                              {category.name}
                            </span>
                          </div>
                          <span className="text-gray-400 text-sm bg-slate-600 px-2 py-1 rounded">
                            {category.count}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>

                  {/* Recent Posts */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-slate-700 rounded-2xl p-6"
                  >
                    <h3 className="text-xl font-bold text-white mb-6">Recent Posts</h3>
                    <div className="space-y-4">
                      {recentPosts.map((post, index) => (
                        <Link
                          key={index}
                          href="#"
                          className="block p-3 rounded-lg hover:bg-slate-600 transition-colors group"
                        >
                          <span className="text-gray-300 group-hover:text-white transition-colors line-clamp-2">
                            {post}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>

                  {/* Newsletter Subscription */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-slate-700 rounded-2xl p-6"
                  >
                    <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
                    <p className="text-gray-300 mb-6 text-sm">
                      Get the latest car selling tips and market insights delivered to your inbox.
                    </p>
                    <form onSubmit={handleSubscribe} className="space-y-4">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 bg-slate-600 text-white rounded-lg border border-slate-500 focus:border-orange-500 focus:outline-none transition-colors"
                        required
                      />
                      <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
                      >
                        Subscribe
                      </button>
                    </form>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Want to see more articles section */}
      <section className="py-12 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-6">
            Want to see more articles? We have a wealth of knowledge to share.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
          >
            Load More Articles
          </Link>
        </div>
      </section>
    </div>
  )
}