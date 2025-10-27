import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogPostContent from '@/components/sections/blog/blog-post-content'
import RelatedPosts from '@/components/sections/blog/related-posts'
import SocialShare from '@/components/sections/blog/social-share'

// Mock data for blog posts (in a real app, this would come from a CMS or database)
const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to Selling Your Car in UAE 2024",
    content: `
      <p>Selling your car in the UAE can be a straightforward process when you know the right steps to follow. This comprehensive guide will walk you through everything you need to know to get the best value for your vehicle.</p>
      
      <h2>Understanding the UAE Car Market</h2>
      <p>The UAE automotive market is unique, with specific preferences and regulations that affect car values. Understanding these factors is crucial for a successful sale.</p>
      
      <h3>Market Trends in 2024</h3>
      <p>The current market shows strong demand for SUVs and electric vehicles, while luxury sedans maintain their appeal among premium buyers.</p>
      
      <h2>Preparing Your Car for Sale</h2>
      <p>Proper preparation can significantly increase your car's value. Here's what you need to do:</p>
      
      <ul>
        <li>Complete a thorough cleaning, both interior and exterior</li>
        <li>Address any minor mechanical issues</li>
        <li>Gather all necessary documentation</li>
        <li>Take high-quality photos from multiple angles</li>
      </ul>
      
      <h2>Documentation Requirements</h2>
      <p>Ensure you have all required documents ready:</p>
      
      <ul>
        <li>Original registration card (Mulkiya)</li>
        <li>Valid insurance certificate</li>
        <li>Emirates ID copy</li>
        <li>Passport copy with valid visa</li>
        <li>No Objection Certificate (if applicable)</li>
      </ul>
      
      <h2>Pricing Your Vehicle</h2>
      <p>Research current market prices using multiple sources to ensure competitive pricing while maximizing your return.</p>
    `,
    excerpt: "Everything you need to know about selling your car in the UAE, from documentation to getting the best price.",
    image: "/blog/featured-1.jpg",
    category: "Guides",
    readTime: "8 min read",
    publishDate: "2024-01-15",
    slug: "complete-guide-selling-car-uae-2024",
    author: {
      name: "Sarah Ahmed",
      bio: "Automotive expert with 10+ years in the UAE car market",
      avatar: "/authors/sarah-ahmed.jpg"
    },
    tags: ["selling", "guide", "uae", "documentation"],
    featured: true
  },
  {
    id: 2,
    title: "UAE Car Market Trends: What's Hot in 2024",
    content: `
      <p>The UAE automotive market continues to evolve, with new trends shaping buyer preferences and vehicle values. Understanding these trends is essential for both buyers and sellers.</p>
      
      <h2>Electric Vehicle Adoption</h2>
      <p>Electric vehicles are gaining significant traction in the UAE, supported by government initiatives and expanding charging infrastructure.</p>
      
      <h2>Popular Vehicle Categories</h2>
      <p>SUVs remain the most popular choice among UAE consumers, followed by luxury sedans and pickup trucks.</p>
    `,
    excerpt: "Discover the latest trends in the UAE automotive market and which car models are in highest demand.",
    image: "/blog/featured-2.jpg",
    category: "Market Insights",
    readTime: "6 min read",
    publishDate: "2024-01-12",
    slug: "uae-car-market-trends-2024",
    author: {
      name: "Mohammed Al-Rashid",
      bio: "Market analyst specializing in Middle East automotive trends",
      avatar: "/authors/mohammed-al-rashid.jpg"
    },
    tags: ["market", "trends", "2024", "demand"],
    featured: true
  },
  {
    id: 3,
    title: "3-Common Myths About Scrapping Your Car",
    content: `
      <p>When it comes to vehicle recycling, there are many misconceptions that can lead car owners to make uninformed decisions. Let's address some of the most common myths about scrapping your car and provide the factual information you need.</p>
      
      <h2>Myth 1: Scrap Value Is Based Only on Weight</h2>
      <p>Many people believe that scrap yards calculate your car's value solely based on its weight. In reality, modern vehicle recycling is much more sophisticated.</p>
      
      <p>The truth is that while weight is a factor, scrap value calculations also consider:</p>
      <ul>
        <li>The current market value of various metals in your vehicle</li>
        <li>Condition and resale potential of salvageable parts</li>
        <li>Make and model demand in the parts market</li>
        <li>Age and rarity of the vehicle</li>
      </ul>
      
      <p>Professional recyclers perform a comprehensive assessment that goes far beyond simply weighing your car.</p>
      
      <h2>Myth 2: All Car Parts End Up in a Landfill</h2>
      <p>A common misconception is that scrapped cars are simply crushed with most parts ending up in landfills. This couldn't be further from the truth.</p>
      
      <p>The reality of modern vehicle recycling:</p>
      <ul>
        <li>Up to 80% of a typical vehicle can be recycled or reused</li>
        <li>Valuable components like catalytic converters, batteries, and electronics are carefully removed</li>
        <li>Fluids are properly drained and recycled or disposed of safely</li>
        <li>Metals are separated and processed for reuse in manufacturing</li>
        <li>Many parts are refurbished and sold in the second-hand market</li>
      </ul>
      
      <h2>Myth 3: Vehicle Recycling Harms the Environment</h2>
      <p>Some believe that scrapping vehicles creates more pollution than keeping old cars running. However, proper vehicle disposal is actually beneficial for the environment.</p>
      
      <p>Environmental benefits of professional car recycling:</p>
      <ul>
        <li>Prevents hazardous materials from contaminating soil and water</li>
        <li>Reduces the need for new raw material extraction</li>
        <li>Saves energy compared to producing new parts from scratch</li>
        <li>Reduces carbon emissions by removing inefficient vehicles from roads</li>
        <li>Modern recycling processes are designed to minimize environmental impact</li>
      </ul>
      
      <h2>The Reality of Modern Recycling Processes</h2>
      <p>Today's vehicle recycling industry employs sophisticated technology to maximize material recovery:</p>
      <ul>
        <li>Advanced shredding systems separate different types of metals</li>
        <li>Specialized equipment captures and processes automotive fluids</li>
        <li>Computer systems track parts inventory for optimal reuse</li>
        <li>Certified facilities ensure environmental compliance</li>
      </ul>
      
      <p>By understanding the truth behind these common myths, you can make more informed decisions when it's time to scrap your vehicle.</p>
    `,
    excerpt: "Addressing widespread misconceptions about vehicle recycling with factual information about scrap value calculations, parts recycling, and environmental impact.",
    image: "/images/blog/myths-car-scrapping.svg",
    category: "Guides",
    readTime: "5 min read",
    publishDate: "2024-01-03",
    slug: "3-common-myths-about-scrapping-your-car",
    author: {
      name: "Fatima Hassan",
      bio: "Environmental specialist with expertise in automotive recycling",
      avatar: "/authors/fatima.jpg"
    },
    tags: ["recycling", "myths", "environment", "scrap value"],
    featured: false
  },
  {
    id: 4,
    title: "5-Scrapped Car Selling: Best Times to Maximize Your Profit",
    content: `
      <p>Timing can significantly impact the value you receive when selling your scrap vehicle. This detailed market analysis will help you identify the optimal moments to sell your end-of-life vehicle for maximum returns.</p>
      
      <h2>1. Seasonal Price Fluctuations in Scrap Metal Markets</h2>
      <p>The scrap metal industry experiences predictable seasonal patterns that directly affect how much you'll get for your vehicle:</p>
      
      <h3>Spring (March-May)</h3>
      <p>Spring typically brings increased construction activity and manufacturing, driving up demand for recycled metals. Statistics show scrap prices can rise 10-15% during this period compared to winter lows.</p>
      
      <h3>Summer (June-August)</h3>
      <p>Summer often maintains strong pricing, though extreme heat can sometimes slow demolition projects, causing slight market fluctuations. Prices typically remain 5-10% above annual averages.</p>
      
      <h3>Fall (September-November)</h3>
      <p>Early fall can be an excellent time to sell as businesses rush to complete projects before winter. However, late fall typically sees declining prices as construction slows.</p>
      
      <h3>Winter (December-February)</h3>
      <p>Winter generally brings the year's lowest scrap prices due to reduced construction and manufacturing activity. Prices can drop 15-20% below annual averages, making this the least favorable time to sell.</p>
      
      <h2>2. Global Commodity Prices and Local Scrap Values</h2>
      <p>Your local scrap yard's offering price is directly influenced by global metal markets:</p>
      <ul>
        <li>Steel prices fluctuate based on international production levels and tariff policies</li>
        <li>Aluminum, copper, and precious metals in your vehicle follow commodity market trends</li>
        <li>Currency exchange rates affect export markets for recycled metals</li>
        <li>Oil prices impact transportation costs throughout the recycling chain</li>
      </ul>
      
      <h2>3. Strategies for Monitoring Market Trends</h2>
      <p>To time your sale perfectly, consider these approaches:</p>
      <ul>
        <li>Track metal prices on commodity exchanges like the London Metal Exchange</li>
        <li>Use specialized apps that monitor scrap metal pricing trends</li>
        <li>Call multiple scrap yards weekly to compare current offering prices</li>
        <li>Follow industry news for insights on upcoming market shifts</li>
        <li>Consider economic indicators that signal manufacturing growth or contraction</li>
      </ul>
      
      <h2>4. When to Hold vs. When to Sell</h2>
      <p>Strategic decision-making can significantly impact your returns:</p>
      
      <h3>Consider Holding When:</h3>
      <ul>
        <li>Prices are at historical lows with clear indicators of upcoming increases</li>
        <li>You have secure, legal storage space that won't incur costs</li>
        <li>Your vehicle contains significant amounts of high-value metals like copper or aluminum</li>
        <li>Economic forecasts predict manufacturing growth in the coming quarter</li>
      </ul>
      
      <h3>Sell Immediately When:</h3>
      <ul>
        <li>Prices have been rising steadily and appear to be peaking</li>
        <li>Storage costs are eroding potential gains from waiting</li>
        <li>Vehicle condition is deteriorating, potentially reducing its value</li>
        <li>You need immediate cash rather than speculative future gains</li>
        <li>Economic indicators suggest upcoming market downturns</li>
      </ul>
      
      <h2>5. Additional Timing Factors to Consider</h2>
      <p>Beyond market conditions, these factors can affect your selling strategy:</p>
      <ul>
        <li>Local competition among scrap yards can drive up prices temporarily</li>
        <li>End-of-month quotas might make dealers more willing to offer premium prices</li>
        <li>Regulatory changes can suddenly impact vehicle recycling economics</li>
        <li>Transportation costs to distant yards with better prices must be calculated</li>
      </ul>
      
      <p>By strategically timing your scrap car sale and staying informed about market conditions, you can potentially increase your return by 15-25% compared to selling during unfavorable periods.</p>
    `,
    excerpt: "Detailed market analysis for optimal vehicle scrapping timing, including seasonal price fluctuations, global commodity impacts, and strategies for monitoring market trends.",
    image: "/images/blog/timing-scrap-car-sale.svg",
    category: "Market Insights",
    readTime: "5 min read",
    publishDate: "2024-01-03",
    slug: "5-scrapped-car-selling-best-times-maximize-profit",
    author: {
      name: "Fatima Hassan",
      bio: "Market analyst with expertise in metal recycling economics",
      avatar: "/authors/fatima.jpg"
    },
    tags: ["market timing", "scrap value", "metal prices", "selling strategy"],
    featured: false
  }
]

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found | Scrap Your Car Blog',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: `${post.title} | Scrap Your Car Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author.name],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

// Generate static params for static generation
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  return (
    <main className="min-h-screen bg-background">
      {/* Blog Post Content */}
      <BlogPostContent post={post} />
      
      {/* Social Share */}
      <SocialShare 
        title={post.title}
        url={`/blog/${post.slug}`}
        description={post.excerpt}
      />
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <RelatedPosts posts={relatedPosts} />
      )}
    </main>
  )
}