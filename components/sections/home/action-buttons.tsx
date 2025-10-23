"use client"

import Link from "next/link"
import { Phone } from "lucide-react"

// Pixel-perfect action buttons matching the provided reference
// WhatsApp button: bright orange with white WhatsApp glyph
// Call button: dark translucent background with subtle border
export default function ActionButtons() {
  return (
    <div
      className="flex flex-col sm:flex-row justify-center items-center gap-[20px]"
      aria-label="Primary contact actions"
    >
      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/971568559762"
        aria-label="Open WhatsApp chat with customer support"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center justify-center select-none rounded-[12px] bg-[#FFA800] hover:bg-[#E69500] active:scale-95 transition-all duration-200 text-white font-poppins font-semibold tracking-normal h-12 sm:h-14 min-h-[48px] px-6 sm:px-8 shadow-md"
        style={{ letterSpacing: "0.2px" }}
      >
        {/* WhatsApp brand glyph (inline SVG for performance, no layout shift) */}
        <svg
          aria-hidden="true"
          className="mr-2 h-5 w-5 sm:h-6 sm:w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.26 2 11.5c0 1.96.57 3.8 1.56 5.37L2 22l5.3-1.39c1.5.82 3.21 1.27 4.7 1.27 5.52 0 10-4.26 10-9.5S17.52 2 12 2zm5.88 14.06c-.26.74-1.53 1.4-2.09 1.49-.56.1-1.26.14-2.04-.13-.47-.16-1.07-.35-1.85-.69-3.27-1.42-5.39-4.72-5.55-4.94-.16-.22-1.32-1.76-1.32-3.36s.83-2.38 1.13-2.7c.3-.32.65-.41.86-.41.21 0 .43 0 .62.01.2.01.47-.08.73.56.26.64.88 2.2.96 2.36.08.16.13.35.02.57-.11.22-.17.35-.33.54-.16.19-.34.43-.48.58-.16.17-.33.35-.14.67.19.32.84 1.38 1.8 2.24 1.24 1.11 2.29 1.46 2.62 1.62.33.16.53.14.73-.08.2-.22.84-.98 1.07-1.31.23-.33.45-.28.75-.17.3.11 1.89.89 2.22 1.05.33.16.55.24.63.37.08.13.08.77-.18 1.51z" />
        </svg>
        <span className="text-[16px] sm:text-[18px] leading-none">WhatsApp</span>
      </Link>

      {/* Call Now Button */}
      <Link
        href="tel:00971568558762"
        aria-label="Call customer support directly"
        className="group inline-flex items-center justify-center select-none rounded-[12px] bg-white/10 hover:bg-white/15 active:scale-95 transition-all duration-200 text-white font-poppins font-semibold tracking-normal h-12 sm:h-14 min-h-[48px] px-6 sm:px-8 border border-white/20 backdrop-blur-[2px]"
        style={{ letterSpacing: "0.2px" }}
      >
        <Phone aria-hidden="true" className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
        <span className="text-[16px] sm:text-[18px] leading-none">Call now</span>
      </Link>
    </div>
  )
}