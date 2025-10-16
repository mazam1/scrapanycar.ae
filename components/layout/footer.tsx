import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { ImageWithFallback } from "@/components/ui/image-with-fallback"

// Navigation links matching the main menu
const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "LinkedIn", href: "#", icon: Linkedin },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#c49a36' }}>
      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-black/80" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Logo with Brand Name and Description */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex flex-col items-start">
                <Link href="/" className="group block mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <ImageWithFallback
                        src="/logo.png"
                        alt="Scrap Your Car Logo"
                        className="h-14 w-auto object-contain brightness-110 contrast-110 drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-poppins font-bold text-3xl text-white drop-shadow-sm">
                      Scrap Your Car
                    </h3>
                  </div>
                </Link>
              </div>
              <p className="text-white/90 leading-relaxed text-lg max-w-lg font-medium">
                Premium car valuation and instant buying service in the UAE. 
                Get accurate, market-based valuations and sell your car with confidence.
              </p>
              
              {/* Call to action */}
              <div className="pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg transition-all duration-300 group border border-white/20 hover:border-white/40"
                >
                  <span className="font-medium">Get Your Quote Today</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-6">
              <h3 className="font-poppins font-bold text-xl text-white mb-6 relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-white/40 rounded-full" />
              </h3>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center space-x-2 text-white/80 hover:text-white transition-all duration-300 text-base font-medium"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="font-poppins font-bold text-xl text-white mb-6 relative">
                Contact Info
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-white/40 rounded-full" />
              </h3>
              <div className="space-y-4">
                <div className="group flex items-center space-x-4 text-white/90 hover:text-white transition-colors duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="text-base font-medium">+971 4 123 4567</span>
                </div>
                <div className="group flex items-center space-x-4 text-white/90 hover:text-white transition-colors duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="text-base font-medium">hello@scrapanycar.ae</span>
                </div>
                <div className="group flex items-center space-x-4 text-white/90 hover:text-white transition-colors duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="text-base font-medium">Dubai, United Arab Emirates</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              <p className="text-white/70 text-base font-medium">
                © 2024 Scrap Your Car. All rights reserved.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-white/70 text-sm font-medium mr-2">Follow us:</span>
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="group w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5 text-white/70 group-hover:text-white transition-colors duration-300" />
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}