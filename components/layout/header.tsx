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
        backgroundColor: `rgba(0, 0, 0, 0.90)`,
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
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundColor: '#c49a36'
        }}
      />
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
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <motion.div 
              className="relative"
              initial={{
                width: '64px',
                height: '42px'
              }}
              animate={{
                width: isScrolled ? '48px' : '64px',
                height: isScrolled ? '32px' : '42px'
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <ImageWithFallback
                src="/logo.png"
                alt="Scrap Your Car Logo"
                width={120}
                height={42}
                className="object-contain w-full h-full text-foreground brightness-110 contrast-110 drop-shadow-sm"
              />
            </motion.div>
            <motion.span 
              className="font-poppins font-bold text-white hidden sm:block"
              initial={{
                fontSize: '20px'
              }}
              animate={{
                fontSize: isScrolled ? '18px' : '20px'
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              Scrap Your Car
            </motion.span>
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
                    ? "text-[#c49a36]"
                    : "text-[#fdfcfa] hover:text-[#c49a36]"
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
              variant="gold"
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
              className="text-white hover:text-[#c49a36] hover:bg-white/10"
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
              backgroundColor: `rgba(38, 38, 38, 0.98)`,
              backdropFilter: 'blur(12px)'
            }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundColor: '#c49a36'
              }}
            />
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
                        ? "text-[#c49a36]"
                        : "text-[#fdfcfa] hover:text-[#c49a36]"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-white/20">
                  <Button
                    variant="gold"
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