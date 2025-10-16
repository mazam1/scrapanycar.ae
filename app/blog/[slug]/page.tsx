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