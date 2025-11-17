"use client"

import * as React from "react"
import { Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Facebook, Instagram, Mail, Phone, MapPin, Twitter, Youtube } from "lucide-react"
import { ImageWithFallback } from "@/components/ui/image-with-fallback"
import { Button } from "@/components/ui/button"

type FooterVariant = "classic" | "compact" | "split"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
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
            Your trusted partner for professional car buying services. We provide fair, fast,
            and transparent vehicle valuations with market-leading prices.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="font-poppins font-bold text-lg sm:text-xl text-white mb-6 relative">
            Contact Information
            <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-brand-primary rounded-full" />
          </h3>
          <div className="space-y-4">
            <div className="group flex items-center space-x-4 text-white/90 hover:text-brand-secondary transition-colors duration-200">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 flex items-center justify-center group-hover:bg-brand-secondary/15 transition-colors duration-200">
                <Phone className="h-5 w-5 text-brand-secondary" />
              </div>
              <a href="tel:+971568558762" className="text-sm sm:text-base font-medium">+971 56 855 8762</a>
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
            <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-brand-primary rounded-full" />
          </h3>
          <p className="text-white/80 leading-relaxed mb-6">
            Stay connected with us on social media for the latest updates, car tips, and exclusive offers.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:gap-4 md:gap-4">
            {socialPlatforms.map((social) => {
              const Icon = social.icon
              return (
                <Link 
                  key={social.name} 
                  href={social.href} 
                  className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-200 p-3 flex items-center gap-3 min-h-[72px] w-full" 
                  aria-label={`Visit our ${social.name} page`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/15 transition-colors duration-200">
                    <Icon className="h-5 w-5 text-white/90 group-hover:text-white transition-colors duration-200" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col justify-center min-w-0 flex-1 overflow-hidden">
                    <span className="text-white text-sm font-semibold whitespace-normal">{social.name}</span>
                    <span className="text-white/70 text-xs whitespace-normal">{social.subtitle}</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-white/20">
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
              <a href="tel:+971568558762" className="text-sm sm:text-base font-medium">+971 56 855 8762</a>
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
            <div className="grid grid-cols-4 gap-3">
              {socialPlatforms.map((social) => {
                const Icon = social.icon
                return (
                  <Link key={social.name} href={social.href} aria-label={`Visit our ${social.name} page`} target="_blank" rel="noopener noreferrer" className="group rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-3 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-white/90 group-hover:text-white transition-colors duration-200" aria-hidden="true" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-white/20">
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
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {socialPlatforms.map((social) => {
                  const Icon = social.icon
                  return (
                    <Link 
                      key={social.name} 
                      href={social.href} 
                      aria-label={`Visit our ${social.name} page`} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-200 p-3 flex items-center justify-center min-h-[56px] w-full"
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <Icon className="h-5 w-5 text-white/90 group-hover:text-white transition-colors duration-200" aria-hidden="true" />
                      </div>
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
                <a href="tel:+971568558762" className="text-sm sm:text-base font-medium">+971 56 855 8762</a>
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

        <div className="mt-6 pt-8 border-t border-white/20">
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