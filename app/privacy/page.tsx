import { Suspense } from "react"
import { Metadata } from "next"
import { Header } from "../../components/layout/header"
import { Footer } from "../../components/layout/footer"
import { ScrollToTop } from "../../components/common/scroll-to-top"
import { PrivacyContentSection } from "../../components/sections/privacy/privacy-content-section"

export const metadata: Metadata = {
  title: "Privacy Policy - ScrapYourCar | Data Protection & Privacy",
  description: "Read ScrapYourCar's privacy policy to understand how we collect, use, and protect your personal information when you use our car valuation and buying services in UAE.",
  keywords: [
    "privacy policy",
    "data protection",
    "ScrapYourCar privacy",
    "personal information",
    "UAE privacy laws",
    "GDPR compliance"
  ],
  openGraph: {
    title: "Privacy Policy - ScrapYourCar",
    description: "Read ScrapYourCar's privacy policy to understand how we collect, use, and protect your personal information.",
    type: "website",
    locale: "en_AE",
    siteName: "ScrapYourCar",
    url: "https://scrapanycar.ae/privacy"
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy - ScrapYourCar",
    description: "Read ScrapYourCar's privacy policy to understand how we collect, use, and protect your personal information."
  },
  alternates: {
    canonical: "https://scrapanycar.ae/privacy"
  }
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div
        className="w-full relative"
        style={{
          height: '20px',
          backgroundColor: 'rgba(0, 0, 0, 0.90)',
          backdropFilter: 'blur(12px)'
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundColor: '#c49a36'
          }}
        />
      </div>
      <main>
        <PrivacyContentSection />
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <ScrollToTop />
    </div>
  )
}
