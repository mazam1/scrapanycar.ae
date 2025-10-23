import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin, Music, Ghost } from "lucide-react"
import { ImageWithFallback } from "@/components/ui/image-with-fallback"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialPlatforms = [
    { name: "Facebook", href: "#", icon: Facebook, subtitle: "Follow us" },
    { name: "Instagram", href: "#", icon: Instagram, subtitle: "@scrapanycar" },
    { name: "TikTok", href: "#", icon: Music, subtitle: "@scrapanycar" },
    { name: "Snapchat", href: "#", icon: Ghost, subtitle: "scrapanycar" },
  ]

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-brand-slate to-brand-charcoal">
      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-black/60" />
      {/* Decorative top hairline */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Top grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Brand & Description */}
            <div className="space-y-6">
              <Link href="/" className="group block mb-6">
                <div className="flex items-center space-x-4">
                  <ImageWithFallback
                    src="/logo.png"
                    alt="Scrap Your Car Logo"
                    width={120}
                    height={40}
                    className="h-14 w-auto object-contain brightness-110 contrast-110 drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>
              <p className="text-white/90 leading-relaxed text-lg max-w-xl font-medium">
                Your trusted partner for professional car buying services. We provide fair, fast,
                and transparent vehicle valuations with market-leading prices.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="font-poppins font-bold text-xl text-white mb-6 relative">
                Contact Information
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-white/40 rounded-full" />
              </h3>
              <div className="space-y-4">
                <div className="group flex items-center space-x-4 text-white/90 hover:text-white transition-colors duration-300">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-gold/15 transition-colors duration-300">
                    <Phone className="h-5 w-5" />
                  </div>
                  <a href="tel:+97141234567" className="text-base font-medium">+971 4 123 4567</a>
                </div>
                <div className="group flex items-center space-x-4 text-white/90 hover:text-white transition-colors duration-300">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-gold/15 transition-colors duration-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <a href="mailto:hello@scrapanycar.ae" className="text-base font-medium">hello@scrapanycar.ae</a>
                </div>
                <div className="group flex items-center space-x-4 text-white/90 hover:text-white transition-colors duration-300">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-gold/15 transition-colors duration-300">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <a
                    href="https://maps.google.com/?q=Dubai%2C%20United%20Arab%20Emirates"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium"
                  >
                    Dubai, United Arab Emirates
                  </a>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div className="space-y-6">
              <h3 className="font-poppins font-bold text-xl text-white mb-6 relative">
                Follow Us
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-white/40 rounded-full" />
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialPlatforms.map((social) => {
                  const Icon = social.icon
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-4 flex items-center gap-3"
                      aria-label={social.name}
                    >
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-white/90" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white text-sm font-semibold">{social.name}</span>
                        <span className="text-white/70 text-xs">{social.subtitle}</span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              <p className="text-white/70 text-base font-medium">
                © {currentYear} Scrap Your Car. All rights reserved.
              </p>

              {/* Trust badges */}
              <div className="flex items-center gap-6">
                <div className="text-white/70 text-sm font-medium">Trusted by 50,000+ customers</div>
                <div className="flex items-center gap-2 text-white/70 text-sm font-medium">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
                  <span>Available 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}