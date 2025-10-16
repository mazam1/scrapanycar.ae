'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const categories = [
  { id: 'all', name: 'All Articles', count: 24 },
  { id: 'guides', name: 'Guides', count: 8 },
  { id: 'market-insights', name: 'Market Insights', count: 6 },
  { id: 'tips', name: 'Tips & Tricks', count: 5 },
  { id: 'news', name: 'Industry News', count: 3 },
  { id: 'legal', name: 'Legal & Documentation', count: 2 }
]

interface BlogCategoriesProps {
  onCategoryChange?: (category: string) => void
  activeCategory?: string
}

export default function BlogCategories({ 
  onCategoryChange, 
  activeCategory = 'all' 
}: BlogCategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState(activeCategory)

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId)
    onCategoryChange?.(categoryId)
  }

  return (
    <div className="w-full lg:w-auto">
      <h3 className="text-lg font-semibold text-foreground mb-4 lg:mb-0 lg:mr-6 lg:inline-block">
        Categories:
      </h3>
      
      <div className="flex flex-wrap gap-2 lg:inline-flex">
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            onClick={() => handleCategoryClick(category.id)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${selectedCategory === category.id
                ? 'bg-accent text-accent-foreground shadow-md'
                : 'bg-card text-muted-foreground hover:bg-accent/10 hover:text-foreground'
              }
            `}
          >
            {category.name}
            <span className="ml-2 text-xs opacity-70">
              ({category.count})
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  )
}