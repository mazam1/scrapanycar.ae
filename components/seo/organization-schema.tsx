export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ScrapYourCar",
    "alternateName": "Scrap Any Car UAE",
    "url": "https://scrapanycar.ae",
    "logo": "https://scrapanycar.ae/logo.png",
    "description": "Leading car scrapping and vehicle buying service in Dubai and UAE. We offer instant valuations, free pickup, and same-day payment.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971551988348",
      "contactType": "Customer Service",
      "areaServed": "AE",
      "availableLanguage": ["English", "Arabic"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "sameAs": [
      "https://facebook.com/scrapanycar",
      "https://instagram.com/scrapanycar",
      "https://twitter.com/scrapanycar",
      "https://youtube.com/scrapanycar"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
