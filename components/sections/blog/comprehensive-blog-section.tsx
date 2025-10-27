'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ChevronRight } from 'lucide-react'

// Mock data for blog posts - merged from existing components
const featuredPost = {
  id: 1,
  title: "The Ultimate Guide to Selling Your Car in 2025",
  excerpt: "Everything you need to know about getting the best value for your vehicle in today's market, from preparation tips to maximizing returns.",
  image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  category: "Guides",
  readTime: "8 min read",
  publishDate: "January 15, 2024",
  slug: "ultimate-guide-selling-car-2025",
  author: {
    name: "Sarah Johnson",
    avatar: "/authors/sarah.jpg"
  },
  featured: true
}

const latestArticles = [
  {
    id: 2,
    title: "How Market Trends Affect Your Scrap Car Value",
    excerpt: "Understand how economic factors and metal prices influence what your end-of-life vehicle is worth in today's recycling market.",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Market Insights",
    readTime: "6 min read",
    publishDate: "January 12, 2024",
    slug: "market-trends-scrap-car-value",
    author: {
      name: "Michael Rodriguez",
      avatar: "/authors/michael.jpg"
    }
  },
  {
    id: 3,
    title: "Electric Vehicles: What You Need to Know When Scrapping",
    excerpt: "Special considerations for recycling electric vehicles, from battery handling to valuable components worth extracting.",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Tips",
    readTime: "5 min read",
    publishDate: "January 10, 2024",
    slug: "scrapping-electric-vehicles-guide",
    author: {
      name: "Emma Wilson",
      avatar: "/authors/emma.jpg"
    }
  },
  {
    id: 4,
    title: "3 Common Myths About Scrapping Your Car",
    excerpt: "Debunk the misconceptions about vehicle recycling and learn the truth about what happens when you scrap your car.",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Guides",
    readTime: "7 min read",
    publishDate: "January 8, 2024",
    slug: "common-myths-car-scrapping",
    author: {
      name: "Sarah Ahmed",
      avatar: "/authors/sarah-ahmed.jpg"
    }
  },
  {
    id: 5,
    title: "The Impact of Mileage on Your Scrap Car Value",
    excerpt: "How vehicle mileage impacts scrap value and which other factors matter more when recycling your end-of-life vehicle.",
    image: "https://images.unsplash.com/photo-1558980664-3a031cf67ea8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Market Insights",
    readTime: "6 min read",
    publishDate: "January 5, 2024",
    slug: "mileage-impact-scrap-value",
    author: {
      name: "Mohammed Al-Rashid",
      avatar: "/authors/mohammed.jpg"
    }
  },
  {
    id: 6,
    title: "Scrapped Car Selling: Best Times to Maximize Your Profit",
    excerpt: "Discover the optimal timing for scrapping your vehicle to get the highest possible return based on market fluctuations.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Market Insights",
    readTime: "5 min read",
    publishDate: "January 3, 2024",
    slug: "best-times-scrap-car-selling",
    author: {
      name: "Fatima Hassan",
      avatar: "/authors/fatima.jpg"
    }
  },
  {
    id: 7,
    title: "Documentation Checklist: Papers You Need to Sell Your Scrap Car",
    excerpt: "Complete guide to all the paperwork and documentation required when selling your vehicle for scrap legally and efficiently.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Legal & Documentation",
    readTime: "8 min read",
    publishDate: "January 1, 2024",
    slug: "documentation-scrap-car-selling",
    author: {
      name: "Ahmed Al-Mansoori",
      avatar: "/authors/ahmed.jpg"
    }
  },
  {
    id: 8,
    title: "Environmental Benefits of Proper Vehicle Recycling",
    excerpt: "Learn how responsible car scrapping contributes to environmental sustainability and reduces your carbon footprint.",
    image: "https://images.unsplash.com/photo-1550434280-b71d22e67711?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Tips & Tricks",
    readTime: "6 min read",
    publishDate: "December 28, 2023",
    slug: "environmental-benefits-vehicle-recycling",
    author: {
      name: "Layla Ibrahim",
      avatar: "/authors/layla.jpg"
    }
  },
  {
    id: 9,
    title: "Salvageable Parts: What's Still Valuable in Your Old Car",
    excerpt: "Identify which components in your end-of-life vehicle might have significant value before scrapping the entire car.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Tips & Tricks",
    readTime: "5 min read",
    publishDate: "December 25, 2023",
    slug: "valuable-parts-old-car-scrapping",
    author: {
      name: "Omar Khalil",
      avatar: "/authors/omar.jpg"
    }
  }
]

const categories = [
  { name: "All Articles", count: 24 },
  { name: "Vehicle Recycling", count: 8 },
  { name: "Market Insights", count: 6 },
  { name: "Tips & Tricks", count: 5 },
  { name: "Legal & Documentation", count: 3 },
  { name: "Environmental Impact", count: 2 }
]

const recentPosts = [
  "The Ultimate Guide to Selling Your Car in 2025",
  "How Market Trends Affect Your Scrap Car Value",
  "Common Myths About Scrapping Your Car",
  "Environmental Benefits of Proper Vehicle Recycling"
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-background overflow-hidden flex items-center justify-center min-h-screen">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
          <div className="w-full max-w-[1280px] mx-auto">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Scrap Your Car
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-gold mb-6">
                Blog & Resources
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground/90 mb-8 leading-relaxed max-w-4xl mx-auto">
                Expert insights, recycling market trends, and practical advice to help you get maximum value for your 
                end-of-life vehicle. Stay informed with the latest in automotive recycling and environmentally responsible disposal.
              </p>
            </motion.div>

            {/* Featured Article */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-[1280px] mx-auto"
            >
              <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                <div className="flex flex-col lg:flex-row">
                  {/* Article Image */}
                  <div className="lg:w-1/2 relative">
                    <div className="aspect-[4/3] lg:aspect-auto lg:h-full bg-muted relative overflow-hidden">
                      {/* Placeholder for car image */}
                      <div className="absolute inset-0 bg-muted flex items-center justify-center">
                        <Image 
                          src={featuredPost.image} 
                          alt={featuredPost.title}
                          width={800}
                          height={600}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Featured Badge */}
                      <div className="absolute top-6 left-6">
                        <span className="bg-brand-gold text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Article Content */}
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    {/* Article Meta */}
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center">
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
                      className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 group w-fit"
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
      <section className="py-12 lg:py-20 bg-background flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center">
          <div className="w-full max-w-[1280px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-10 lg:mb-12"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Latest Articles
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                Expert advice on vehicle recycling, scrap car values, and environmentally responsible disposal
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Articles Grid */}
              <div className="w-full lg:w-3/4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 lg:mb-12">
                  {latestArticles.slice(0, visibleArticles).map((article, index) => (
                    <motion.article
                      key={article.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group h-full"
                    >
                      <Link href={`/blog/${article.slug}`} className="block h-full">
                        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                          {/* Article Image */}
                          <div className="relative aspect-[16/9] overflow-hidden">
                            <div className="absolute inset-0 bg-muted">
                              <Image 
                                src={article.image} 
                                alt={article.title}
                                width={400}
                                height={225}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="absolute top-4 left-4 z-10">
                              <span className="bg-brand-gold text-white px-3 py-1 rounded-full text-xs font-medium">
                                {article.category}
                              </span>
                            </div>
                          </div>
                          
                          {/* Article Content */}
                          <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-brand-gold transition-colors line-clamp-2">
                              {article.title}
                            </h3>
                            
                            <p className="text-muted-foreground mb-4 text-sm line-clamp-2 flex-grow">
                              {article.excerpt}
                            </p>
                            
                            {/* Article Meta */}
                            <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs font-semibold">
                                    {article.author.name.charAt(0)}
                                  </span>
                                </div>
                                <span className="font-medium">{article.author.name}</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <span>{article.publishDate}</span>
                                <span>{article.readTime}</span>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-2 text-brand-gold font-medium text-sm group-hover:gap-3 transition-all">
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
                      className="bg-brand-gold hover:bg-brand-gold/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                    >
                      Load More Articles
                    </button>
                  </motion.div>
                )}
              </div>

              {/* Sidebar */}
              <div className="w-full lg:w-1/4">
                <div className="space-y-6">
                  {/* Categories */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-card border border-border rounded-xl p-5"
                  >
                    <h3 className="text-lg font-bold text-foreground mb-4">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category, index) => (
                        <Link
                          key={index}
                          href={`/blog?category=${category.name.toLowerCase().replace(' ', '-')}`}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                              {category.name}
                            </span>
                          </div>
                          <span className="text-muted-foreground text-sm bg-muted px-2 py-1 rounded">
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
                    className="bg-card border border-border rounded-xl p-5"
                  >
                    <h3 className="text-lg font-bold text-foreground mb-4">Recent Posts</h3>
                    <div className="space-y-2">
                      {recentPosts.map((post, index) => (
                        <Link
                          key={index}
                          href={`/blog/${post.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block p-2 rounded-lg hover:bg-muted transition-colors"
                        >
                          <p className="text-sm font-medium text-foreground hover:text-brand-gold transition-colors line-clamp-2">
                            {post}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </motion.div>

                  {/* Newsletter */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-card border border-border rounded-xl p-5"
                  >
                    <h3 className="text-lg font-bold text-foreground mb-4">Stay Updated</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get the latest car selling tips and market insights delivered to your inbox.
                    </p>
                    <form onSubmit={handleSubscribe} className="space-y-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/30 text-sm"
                        required
                      />
                      <button
                        type="submit"
                        className="w-full bg-brand-gold hover:bg-brand-gold/90 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200"
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
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-6">
            Want to see more articles? We have a wealth of knowledge to share.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
          >
            Load More Articles
          </Link>
        </div>
      </section>
    </div>
  )
}