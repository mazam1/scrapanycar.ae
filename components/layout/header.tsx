"use client"

import * as React from "react"
import Link from "next/link"
import { ImageWithFallback } from "@/components/ui/image-with-fallback"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
// ThemeToggle removed to enforce light theme only

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-in-out"
      style={{
        backgroundColor: `#000000`,
        backdropFilter: 'blur(12px)',
        borderBottom: 'none'
      }}
      initial={{ 
        y: -100,
        height: '80px'
      }}
      animate={{ 
        y: 0,
        height: isScrolled ? '60px' : '80px'
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <div className="container mx-auto relative z-10" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
        <motion.div 
          className="flex items-center justify-between"
          initial={{
            height: '80px',
            paddingTop: '0px',
            paddingBottom: '0px'
          }}
          animate={{ 
            height: isScrolled ? '60px' : '80px',
            paddingTop: '0px',
            paddingBottom: '0px'
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {/* Logo - Prominent */}
          <Link href="/" className="flex items-center">
            <motion.div 
              className="relative flex items-center justify-center"
              initial={{
                width: '72px',
                height: '50px'
              }}
              animate={{
                width: isScrolled ? '56px' : '72px',
                height: isScrolled ? '40px' : '50px'
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-lg blur-lg opacity-50" />
              <ImageWithFallback
                src="/logo.png"
                alt="Scrap Your Car Logo"
                width={140}
                height={50}
                className="object-contain w-full h-full text-foreground brightness-125 contrast-125 drop-shadow-lg relative z-10"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  pathname === item.href
                    ? "text-brand-primary"
                    : "text-white hover:text-brand-primary"
                )}
                style={{
                  marginLeft: index === 0 ? '0px' : '40px',
                  padding: '0px',
                  margin: index === 0 ? '0px' : '0px 0px 0px 40px'
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center" style={{ marginLeft: '48px', padding: '0px' }}>
            <Button
              variant="default"
              size="sm"
              onClick={() => {
                // Check if we're already on the home page
                if (pathname !== '/') {
                  // If not on home page, navigate to home page with a query parameter
                  window.location.href = '/?scrollToForm=true';
                } else {
                  // If already on home page, scroll to form
                  const formSection = document.getElementById('valuation-form')
                  if (formSection) {
                    // Smooth scroll to the form section
                    formSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    
                    // After scrolling, find and focus the name input field
                    setTimeout(() => {
                      // Look for the name input within the form section
                      const nameInput = formSection.querySelector('input[type="text"][placeholder="Your full name"]')
                      if (nameInput) {
                        // Focus the name input field
                        nameInput.focus()
                      } else {
                        console.error("Name input field not found in the form")
                      }
                    }, 800) // Delay to allow smooth scrolling to complete
                  } else {
                    console.error("Valuation form not found on the page")
                  }
                }
              }}
            >
              Get Valuation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-brand-primary hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden relative z-50"
            style={{
              backgroundColor: `#000000`,
              backdropFilter: 'blur(12px)'
            }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Overlay backdrop */}
            <div
              className="fixed inset-0 bg-black/30"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="container mx-auto px-4 py-4 relative z-10">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors duration-200 py-2",
                      pathname === item.href
                        ? "text-brand-primary"
                        : "text-white hover:text-brand-primary"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-white/20">
                  <Button
                    variant="default"
                    size="sm"
                    className="w-full"
                    onClick={() => {
                      // First close the mobile menu
                      setIsMobileMenuOpen(false)
                      
                      // Check if we're already on the home page
                      if (pathname !== '/') {
                        // If not on home page, navigate to home page with a query parameter
                        window.location.href = '/?scrollToForm=true';
                      } else {
                        // If already on home page, scroll to form
                        const formSection = document.getElementById('valuation-form')
                        if (formSection) {
                          // Smooth scroll to the form section
                          formSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                          
                          // After scrolling, find and focus the name input field
                          setTimeout(() => {
                            // Look for the name input within the form section
                            const nameInput = formSection.querySelector('input[type="text"][placeholder="Your full name"]')
                            if (nameInput) {
                              // Focus the name input field
                              nameInput.focus()
                            } else {
                              console.error("Name input field not found in the form")
                            }
                          }, 800) // Delay to allow smooth scrolling to complete
                        } else {
                          console.error("Valuation form not found on the page")
                        }
                      }
                    }}
                  >
                    Get Valuation
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}