export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How quickly can I get a valuation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our team provides professional valuations within 24 hours of receiving your complete information."
        }
      },
      {
        "@type": "Question",
        "name": "Do you charge for vehicle inspection?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, our comprehensive vehicle inspection service is completely free with no obligations."
        }
      },
      {
        "@type": "Question",
        "name": "What payment methods do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer cash, certified check, or instant bank transfer  whatever works best for you."
        }
      },
      {
        "@type": "Question",
        "name": "Do you buy cars in any condition?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we purchase vehicles in all conditions  from pristine classics to damaged cars."
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
