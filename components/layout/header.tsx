"use client"

import * as React from "react"
import Link from "next/link"
import { ImageWithFallback } from "@/components/ui/image-with-fallback"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
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

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <motion.header
        className="fixed top-0 inset-x-0 z-50 w-screen overflow-x-hidden"
        style={{
          backgroundColor: `#000000`,
          backdropFilter: 'blur(12px)',
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex items-center justify-between gap-2"
            initial={{ height: '80px' }}
            animate={{ height: isScrolled ? '60px' : '80px' }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              <motion.div 
                className="relative flex items-center justify-center"
                initial={{ width: '72px', height: '50px' }}
                animate={{
                  width: isScrolled ? '56px' : '72px',
                  height: isScrolled ? '40px' : '50px'
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <ImageWithFallback
                  src="/logo.png"
                  alt="Scrap Your Car Logo"
                  width={140}
                  height={50}
                  className="object-contain w-full h-full text-foreground brightness-125 contrast-125 drop-shadow-lg"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center flex-grow justify-center">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-all duration-200 px-4 py-2 relative",
                      isActive
                        ? "text-brand-primary"
                        : "text-white hover:text-brand-primary"
                    )}
                  >
                    {item.name}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary rounded-full" />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center flex-shrink-0">
              <Button
                size="sm"
                className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold"
                onClick={() => {
                  if (pathname !== '/') {
                    window.location.href = '/?scrollToForm=true'
                  } else {
                    const formSection = document.getElementById('valuation-form')
                    if (formSection) {
                      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      setTimeout(() => {
                        const nameInput = formSection.querySelector('input[type="text"][placeholder="Your full name"]')
                        if (nameInput) {
                          (nameInput as HTMLInputElement).focus()
                        }
                      }, 800)
                    }
                  }
                }}
              >
                Get Evaluation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden ml-auto p-2 rounded-md text-white hover:text-brand-primary hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </motion.div>
        </div>
      </motion.header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/40 lg:hidden z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ top: isScrolled ? '60px' : '80px' }}
            />
            
            {/* Menu */}
            <motion.div
              className="fixed left-0 right-0 w-screen lg:hidden z-40 overflow-x-hidden"
              style={{ top: isScrolled ? '60px' : '80px' }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
            >
              <div className="bg-black/95 backdrop-blur-sm border-b border-white/10">
                <div className="w-full px-4 sm:px-6 py-4 space-y-1">
                  <nav className="space-y-2">
                    {navigation.map((item) => {
                      const isActive = pathname === item.href
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={cn(
                            "block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200",
                            isActive
                              ? "bg-brand-primary/20 text-brand-primary"
                              : "text-white hover:bg-white/10 hover:text-brand-primary"
                          )}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )
                    })}
                  </nav>
                  
                  <div className="pt-4 border-t border-white/10">
                    <Button
                      size="sm"
                      className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold"
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        if (pathname !== '/') {
                          window.location.href = '/?scrollToForm=true'
                        } else {
                          const formSection = document.getElementById('valuation-form')
                          if (formSection) {
                            formSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                            setTimeout(() => {
                              const nameInput = formSection.querySelector('input[type="text"][placeholder="Your full name"]')
                              if (nameInput) {
                                (nameInput as HTMLInputElement).focus()
                              }
                            }, 800)
                          }
                        }
                      }}
                    >
                      Get Evaluation
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}