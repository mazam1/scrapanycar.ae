"use client"

import * as React from "react"
import { Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Facebook, Instagram, Mail, Phone, MapPin, Twitter, Youtube } from "lucide-react"
import { ImageWithFallback } from "../ui/image-with-fallback"
import { Button } from "../ui/button"

type FooterVariant = "classic" | "compact" | "split"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
]

// Legal links removed as requested
const legalLinks = []

function NewsletterForm() {
  const [email, setEmail] = React.useState("")
  const [status, setStatus] = React.useState<"idle" | "success" | "error">("idle")

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const isValid = /.+@.+\..+/.test(email)
    setStatus(isValid ? "success" : "error")
  }

  return (
    <form onSubmit={onSubmit} aria-label="Newsletter subscription" className="space-y-3">
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          aria-invalid={status === "error"}
          aria-describedby="newsletter-hint"
          className="w-full rounded-md border border-brand-light bg-white/5 px-4 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-brand-primary"
        />
        <Button type="submit" variant="secondary" size="sm" aria-label="Subscribe to newsletter">
          Subscribe
        </Button>
      </div>
      <p id="newsletter-hint" className="text-xs text-white/70">
        We respect your privacy. Unsubscribe anytime.
      </p>
      <div aria-live="polite" className="text-sm">
        {status === "success" && (
          <span className="text-green-500">Thanks for subscribing!</span>
        )}
        {status === "error" && (
          <span className="text-red-500">Please enter a valid email.</span>
        )}
      </div>
    </form>
  )
}

function ClassicLayout({ currentYear, socialPlatforms }: { currentYear: number; socialPlatforms: any[] }) {
  return (
    <div className="container mx-auto px-2 sm:px-4 lg:px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <div className="space-y-6">
          <Link href="/" className="group block mb-6" aria-label="Go to home">
            <div className="flex items-center relative">
              <div className="absolute " />
              <ImageWithFallback
                src="/logo.png"
                alt="Scrap Your Car Logo"
                width={160}
                height={56}
                className="h-20 w-auto object-contain brightness-125 contrast-125 relative z-10"
              />
            </div>
          </Link>
          <p className="text-white/90 leading-relaxed text-lg font-medium">
            Your trusted partner for professional car buying services. We provide fair, fast,
            and transparent vehicle valuations with market-leading prices.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="font-poppins font-bold text-lg sm:text-xl text-white mb-6 relative">
            Contact Information
            <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-brand-secondary rounded-full" />
          </h3>
          <div className="space-y-4">
            <div className="group flex items-center space-x-4 text-white/90 hover:text-brand-secondary transition-colors duration-200">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 flex items-center justify-center group-hover:bg-brand-secondary/15 transition-colors duration-200">
                <Phone className="h-5 w-5 text-brand-secondary" />
              </div>
              <a href="tel:00971551988348" className="text-sm sm:text-base font-medium">+971 55 198 8348</a>
            </div>
            <div className="group flex items-center space-x-4 text-white/90 hover:text-brand-secondary transition-colors duration-200">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 flex items-center justify-center group-hover:bg-brand-secondary/15 transition-colors duration-200">
                <Mail className="h-5 w-5 text-brand-secondary" />
              </div>
              <a href="mailto:hello@scrapanycar.ae" className="text-sm sm:text-base font-medium">hello@scrapanycar.ae</a>
            </div>
            <div className="group flex items-center space-x-4 text-white/90 hover:text-brand-secondary transition-colors duration-200">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 flex items-center justify-center group-hover:bg-brand-secondary/15 transition-colors duration-200">
                <MapPin className="h-5 w-5 text-brand-secondary" />
              </div>
              <a href="https://maps.google.com/?q=Dubai%2C%20United%20Arab%20Emirates" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base font-medium">
                Dubai, United Arab Emirates
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-poppins font-bold text-lg sm:text-xl text-white mb-6 relative">
            Follow Us
            <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-brand-secondary rounded-full" />
          </h3>
          <p className="text-white/80 leading-relaxed mb-6">
            Stay connected with us on social media for the latest updates, car tips, and exclusive offers.
          </p>
          <div className="flex items-center gap-3">
            {socialPlatforms.map((social) => {
              const Icon = social.icon
              return (
                <Link 
                  key={social.name} 
                  href={social.href} 
                  className="group hover:text-brand-secondary transition-colors duration-200"
                  aria-label={`Visit our ${social.name} page`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-6 w-6 text-white/80 group-hover:text-white transition-colors duration-200" aria-hidden="true" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-brand-secondary">
        <div className="flex justify-center items-center">
          <p className="text-white/70 text-sm sm:text-base font-medium text-center">© 2025 Scrap Your Car. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

function CompactLayout({ currentYear, socialPlatforms }: { currentYear: number; socialPlatforms: any[] }) {
  return (
    <div className="container mx-auto px-2 sm:px-4 lg:px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-6">
          <Link href="/" className="group block mb-6" aria-label="Go to home">
            <div className="flex items-center relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <ImageWithFallback
                src="/logo.png"
                alt="Scrap Your Car Logo"
                width={160}
                height={56}
                className="h-20 w-auto object-contain brightness-125 contrast-125 drop-shadow-xl transition-transform duration-300 group-hover:scale-110 relative z-10"
              />
            </div>
          </Link>
          <p className="text-white/90 leading-relaxed text-lg font-medium">
            Premium car valuation and instant buying across UAE.
          </p>

          <div className="mt-6">
            <h3 className="font-poppins font-bold text-lg sm:text-xl text-white mb-3">Subscribe</h3>
            <NewsletterForm />
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-poppins font-bold text-lg sm:text-xl text-white mb-6 relative">
            Get in Touch
            <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-white/40 rounded-full" />
          </h3>
          <div className="space-y-4">
            <div className="group flex items-center space-x-4 text-white/90 hover:text-brand-secondary transition-colors duration-200">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-brand-secondary/10 border border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-secondary/15 transition-colors duration-200">
                <Phone className="h-5 w-5" />
              </div>
              <a href="tel:00971551988348" className="text-sm sm:text-base font-medium">+971 55 198 8348</a>
            </div>
            <div className="group flex items-center space-x-4 text-white/90 hover:text-brand-secondary transition-colors duration-200">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-brand-secondary/10 border border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-secondary/15 transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </div>
              <a href="mailto:hello@scrapanycar.ae" className="text-sm sm:text-base font-medium">hello@scrapanycar.ae</a>
            </div>
            <div className="group flex items-center space-x-4 text-white/90 hover:text-brand-secondary transition-colors duration-200">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-brand-secondary/10 border border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-secondary/15 transition-colors duration-200">
                <MapPin className="h-5 w-5" />
              </div>
              <a href="https://maps.google.com/?q=Dubai%2C%20United%20Arab%20Emirates" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base font-medium">
                Dubai, United Arab Emirates
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-poppins font-bold text-lg sm:text-xl text-white mb-6 relative">
            Follow Us
            <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-white/40 rounded-full" />
          </h3>
          <p className="text-white/80 leading-relaxed mb-4">
            Stay connected with us on social media for the latest updates, car tips, and exclusive offers.
          </p>
          <div className="pt-4">
            <div className="flex items-center gap-3">
              {socialPlatforms.map((social) => {
                const Icon = social.icon
                return (
                  <Link key={social.name} href={social.href} aria-label={`Visit our ${social.name} page`} target="_blank" rel="noopener noreferrer" className="group hover:text-brand-secondary transition-colors duration-200">
                    <Icon className="h-5 w-5 text-white/90 group-hover:text-white transition-colors duration-200" aria-hidden="true" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-brand-secondary">
        <div className="flex justify-center items-center">
          <p className="text-white/70 text-sm sm:text-base font-medium text-center">© 2025 Scrap Your Car. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

function SplitLayout({ currentYear, socialPlatforms }: { currentYear: number; socialPlatforms: any[] }) {
  return (
    <div className="container mx-auto px-2 sm:px-4 lg:px-6 py-16">
      <div className="grid grid-cols-1 gap-12">
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 justify-center" aria-label="Footer navigation">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium text-white hover:text-brand-secondary transition-colors duration-200">
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <Link href="/" className="group block mb-6" aria-label="Go to home">
              <div className="flex items-center relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <ImageWithFallback
                  src="/logo.png"
                  alt="Scrap Your Car Logo"
                  width={160}
                  height={56}
                  className="h-20 w-auto object-contain brightness-125 contrast-125 drop-shadow-xl transition-transform duration-300 group-hover:scale-110 relative z-10"
                />
              </div>
            </Link>
            <p className="text-white/90 leading-relaxed text-lg font-medium">
              Trusted by thousands. Accurate valuations, fast turnaround.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="font-poppins font-bold text-lg sm:text-xl text-white mb-3">Subscribe</h3>
            <NewsletterForm />
            <div className="pt-2">
              <h4 className="font-poppins font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex items-center gap-3">
                {socialPlatforms.map((social) => {
                  const Icon = social.icon
                  return (
                    <Link 
                      key={social.name} 
                      href={social.href} 
                      aria-label={`Visit our ${social.name} page`} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group hover:text-brand-secondary transition-colors duration-200"
                    >
                      <Icon className="h-5 w-5 text-white/90 group-hover:text-white transition-colors duration-200" aria-hidden="true" />
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-poppins font-bold text-lg sm:text-xl text-white mb-6 relative">
              Contact
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-white/40 rounded-full" />
            </h3>
            <div className="space-y-4">
              <div className="group flex items-center space-x-4 text-white/90 hover:text-brand-secondary transition-colors duration-200">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-brand-secondary/10 border border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-secondary/15 transition-colors duration-200">
                  <Phone className="h-5 w-5" />
                </div>
                <a href="tel:00971551988348" className="text-sm sm:text-base font-medium">+971 55 198 8348</a>
              </div>
              <div className="group flex items-center space-x-4 text-white/90 hover:text-brand-secondary transition-colors duration-200">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-brand-secondary/10 border border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-secondary/15 transition-colors duration-200">
                  <Mail className="h-5 w-5" />
                </div>
                <a href="mailto:hello@scrapanycar.ae" className="text-sm sm:text-base font-medium">hello@scrapanycar.ae</a>
              </div>
              <div className="group flex items-center space-x-4 text-white/90 hover:text-brand-secondary transition-colors duration-200">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-brand-secondary/10 border border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-secondary/15 transition-colors duration-200">
                  <MapPin className="h-5 w-5" />
                </div>
                <a href="https://maps.google.com/?q=Dubai%2C%20United%20Arab%20Emirates" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base font-medium">
                  Dubai, United Arab Emirates
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-8 border-t border-brand-secondary">
          <div className="flex justify-center items-center">
            <p className="text-white/70 text-sm sm:text-base font-medium text-center">© 2025 Scrap Your Car. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function FooterWithSearchParams({ variant: propVariant }: { variant?: FooterVariant }) {
  const currentYear = new Date().getFullYear()
  const searchParams = useSearchParams()
  const variantParam = searchParams?.get("footer") as FooterVariant | null
  const variant = propVariant ?? variantParam ?? "classic"

  const socialPlatforms = [
    { name: "Facebook", href: "https://www.facebook.com/scrapanycar", icon: Facebook, subtitle: "Follow us" },
    { name: "Instagram", href: "https://www.instagram.com/scrapanycar", icon: Instagram, subtitle: "@scrapanycar" },
    { name: "Twitter", href: "https://twitter.com/scrapanycar", icon: Twitter, subtitle: "@scrapanycar" },
    { name: "YouTube", href: "https://www.youtube.com/scrapanycar", icon: Youtube, subtitle: "scrapanycar" },
  ]

  return (
    <footer role="contentinfo" aria-label="Site footer" className="relative overflow-hidden" style={{ backgroundColor: `#000000`, backdropFilter: 'blur(12px)', borderTop: 'none' }}>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-secondary to-transparent" />

      <div className="relative z-10">
        {variant === "classic" && <ClassicLayout currentYear={currentYear} socialPlatforms={socialPlatforms} />}
        {variant === "compact" && <CompactLayout currentYear={currentYear} socialPlatforms={socialPlatforms} />}
        {variant === "split" && <SplitLayout currentYear={currentYear} socialPlatforms={socialPlatforms} />}
      </div>
    </footer>
  )
}

export function Footer({ variant: propVariant }: { variant?: FooterVariant }) {
  return (
    <Suspense fallback={<div className="bg-gray-900 text-white py-8">Loading...</div>}>
      <FooterWithSearchParams variant={propVariant} />
    </Suspense>
  )
}