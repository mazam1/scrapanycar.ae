export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "name": "ScrapYourCar",
    "description": "Professional car scrapping and vehicle buying services across Dubai and UAE. Get instant, accurate valuations and fast, secure transactions.",
    "url": "https://scrapanycar.ae",
    "telephone": "+971551988348",
    "email": "info@scrapyourcar.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Dubai"
      },
      {
        "@type": "City",
        "name": "Abu Dhabi"
      },
      {
        "@type": "City",
        "name": "Sharjah"
      },
      {
        "@type": "City",
        "name": "Ajman"
      },
      {
        "@type": "City",
        "name": "Al Ain"
      },
      {
        "@type": "City",
        "name": "Ras Al Khaimah"
      },
      {
        "@type": "City",
        "name": "Fujairah"
      },
      {
        "@type": "City",
        "name": "Umm Al Quwain"
      }
    ],
    "priceRange": "AED",
    "paymentAccepted": ["Cash", "Bank Transfer"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "22:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50000"
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
