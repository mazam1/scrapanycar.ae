'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface BlogSearchProps {
  onSearch?: (query: string) => void
  placeholder?: string
}

export default function BlogSearch({ 
  onSearch, 
  placeholder = "Search articles..." 
}: BlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch?.(searchQuery)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    
    // Debounced search - you can implement debouncing here if needed
    onSearch?.(value)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full lg:w-auto"
    >
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder={placeholder}
            className="
              w-full lg:w-80 px-4 py-3 pl-12 pr-4
              bg-card border border-border rounded-xl
              text-foreground placeholder-muted-foreground
              focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent
              transition-all duration-200
            "
          />
          
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <svg 
              className="w-5 h-5 text-muted-foreground" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </div>
          
          {searchQuery && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('')
                onSearch?.('')
              }}
              className="
                absolute right-3 top-1/2 transform -translate-y-1/2
                text-muted-foreground hover:text-foreground
                transition-colors duration-200
              "
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        
        {/* Search suggestions or recent searches could go here */}
        {searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-lg z-10 p-2"
          >
            <div className="text-sm text-muted-foreground p-2">
              Press Enter to search for &ldquo;{searchQuery}&rdquo;
            </div>
          </motion.div>
        )}
      </form>
    </motion.div>
  )
}