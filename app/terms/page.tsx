import { Suspense } from "react"
import { Metadata } from "next"
import { Header } from "../../components/layout/header"
import { Footer } from "../../components/layout/footer"
import { ScrollToTop } from "../../components/common/scroll-to-top"
import { TermsContentSection } from "../../components/sections/terms/terms-content-section"

export const metadata: Metadata = {
  title: "Terms and Conditions - ScrapYourCar | Service Agreement",
  description: "Read ScrapYourCar's terms and conditions to understand the rules and regulations governing the use of our car valuation and buying services in UAE.",
  keywords: [
    "terms and conditions",
    "service agreement",
    "ScrapYourCar terms",
    "UAE car buying terms",
    "legal agreement",
    "user terms"
  ],
  openGraph: {
    title: "Terms and Conditions - ScrapYourCar",
    description: "Read ScrapYourCar's terms and conditions to understand the rules and regulations governing our services.",
    type: "website",
    locale: "en_AE",
    siteName: "ScrapYourCar",
    url: "https://scrapanycar.ae/terms"
  },
  twitter: {
    card: "summary",
    title: "Terms and Conditions - ScrapYourCar",
    description: "Read ScrapYourCar's terms and conditions to understand the rules and regulations governing our services."
  },
  alternates: {
    canonical: "https://scrapanycar.ae/terms"
  }
}

export default function TermsPage() {
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
        <TermsContentSection />
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <ScrollToTop />
    </div>
  )
}
