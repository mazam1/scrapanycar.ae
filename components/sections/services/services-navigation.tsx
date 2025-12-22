'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { typography, spacing } from '../../../lib/design-system'
import { throttle } from 'lodash'

export default function ServicesNavigation() {
  const [activeSection, setActiveSection] = useState('core-services')
  
  // Service categories for navigation
  const serviceCategories = [
    { id: 'core-services', label: 'Core Services' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'vehicles-we-buy', label: 'Vehicles We Buy' },
    { id: 'additional-services', label: 'Additional Services' }
  ]
  
  // Handle scroll to section
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      const yOffset = -100 // Offset for header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }
  
  // Update active section based on scroll position with throttling for performance
  useEffect(() => {
    const handleScroll = throttle(() => {
      const sections = serviceCategories.map(cat => document.getElementById(cat.id))
      const scrollPosition = window.scrollY + 150
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(serviceCategories[i].id)
          break
        }
      }
    }, 200)
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [serviceCategories])
  
  return (
    <div className="sticky top-20 z-10 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex overflow-x-auto py-3 hide-scrollbar" aria-label="Service categories">
          <ul className="flex space-x-4 sm:space-x-8 w-full justify-between sm:justify-start">
            {serviceCategories.map((category) => (
              <li key={category.id}>
                <button
                  onClick={() => scrollToSection(category.id)}
                  className={`whitespace-nowrap px-1 py-2 text-xs sm:text-sm font-medium relative ${
                    activeSection === category.id
                      ? 'text-brand-gold'
                      : 'text-foreground/70 hover:text-foreground'
                  } focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:ring-offset-1 rounded`}
                  aria-current={activeSection === category.id ? 'page' : undefined}
                  aria-label={`Navigate to ${category.label} section`}
                >
                  {category.label}
                  {activeSection === category.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}