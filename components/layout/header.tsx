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
      className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-200 ease-in-out"
      style={{
        backgroundColor: `#000000`,
        backdropFilter: 'blur(12px)',
        borderBottom: 'none'
      }}
      initial={{ 
        y: -100
      }}
      animate={{ 
        y: 0
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div 
          className="flex items-center justify-between h-16 md:h-20 lg:h-20"
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {/* Logo - Prominent */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <div className="relative flex items-center justify-center w-14 h-10 md:w-16 md:h-12">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-lg blur-lg opacity-50" />
              <ImageWithFallback
                src="/logo.png"
                alt="Scrap Your Car Logo"
                width={140}
                height={50}
                className="object-contain w-full h-full text-foreground brightness-125 contrast-125 drop-shadow-lg relative z-10"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-8 flex-1 justify-center ml-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-xs md:text-sm lg:text-sm font-medium transition-colors duration-200 whitespace-nowrap",
                  pathname === item.href
                    ? "text-brand-primary"
                    : "text-white hover:text-brand-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center flex-shrink-0 ml-4 lg:ml-8">
            <Button
              size="sm"
              className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2"
              onClick={() => {
                if (pathname !== '/') {
                  window.location.href = '/?scrollToForm=true';
                } else {
                  const formSection = document.getElementById('valuation-form')
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    setTimeout(() => {
                      const nameInput = formSection.querySelector('input[type="text"][placeholder="Your full name"]')
                      if (nameInput) {
                        nameInput.focus()
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
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-brand-primary hover:bg-white/10 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed top-16 left-0 right-0 w-full z-40"
            style={{
              backgroundColor: `#000000`,
              backdropFilter: 'blur(12px)'
            }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 py-4 w-full">
              <nav className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors duration-200 py-2 px-2",
                      pathname === item.href
                        ? "text-brand-primary"
                        : "text-white hover:text-brand-primary"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-3 border-t border-white/20">
                  <Button
                    size="sm"
                    className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold text-sm"
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      if (pathname !== '/') {
                        window.location.href = '/?scrollToForm=true';
                      } else {
                        const formSection = document.getElementById('valuation-form')
                        if (formSection) {
                          formSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                          setTimeout(() => {
                            const nameInput = formSection.querySelector('input[type="text"][placeholder="Your full name"]')
                            if (nameInput) {
                              nameInput.focus()
                            }
                          }, 800)
                        }
                      }
                    }}
                  >
                    Get Evaluation
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