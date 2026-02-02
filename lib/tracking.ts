// Google Analytics & Google Ads conversion tracking utilities

// Extend the Window interface to include gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Form types
export type FormType = 'car_evaluation' | 'get_in_touch'

// Conversion configuration
const CONVERSION_CONFIG = {
  car_evaluation: {
    conversionLabel: 'AW-17831642270/TrmHCNnvkfEbEJ6J5bZC',
    value: 50,
    currency: 'AED',
  },
  get_in_touch: {
    conversionLabel: 'AW-17831642270/YOtRCK2ykvEbEJ6J5bZC',
    value: 30,
    currency: 'AED',
  },
}

/**
 * Track form submission with both GA4 and Google Ads conversion events
 *
 * @param formType - Type of form submitted ('car_evaluation' | 'get_in_touch')
 * @param additionalData - Optional additional data to send with GA4 event
 * @returns Promise that resolves when tracking is complete
 */
export function trackFormSubmission(
  formType: FormType,
  additionalData?: Record<string, any>
): Promise<void> {
  return new Promise((resolve) => {
    // Check if gtag is available
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
      console.warn('gtag is not available')
      resolve()
      return
    }

    const config = CONVERSION_CONFIG[formType]
    let resolved = false

    const callback = () => {
      if (!resolved) {
        resolved = true
        console.log(`✅ Conversion tracked: ${formType}`)
        resolve()
      }
    }

    try {
      // Send GA4 'generate_lead' event
      window.gtag('event', 'generate_lead', {
        event_category: 'engagement',
        event_label: formType,
        value: config.value,
        currency: config.currency,
        ...additionalData,
      })

      // Send Google Ads conversion event
      window.gtag('event', 'conversion', {
        send_to: config.conversionLabel,
        value: config.value,
        currency: config.currency,
        event_callback: callback,
        event_timeout: 2000,
      })

      // Fallback timeout in case callback never fires
      setTimeout(() => {
        if (!resolved) {
          resolved = true
          console.log(`✅ Conversion tracked: ${formType} (timeout)`)
          resolve()
        }
      }, 2100)
    } catch (error) {
      console.error('Error tracking form submission:', error)
      resolve()
    }
  })
}

/**
 * Track car evaluation form submission
 *
 * @param data - Car evaluation data (city, make, model, condition)
 */
export function trackCarEvaluationSubmission(data?: {
  city?: string
  make?: string
  model?: string
  condition?: string
}): Promise<void> {
  return trackFormSubmission('car_evaluation', data)
}

/**
 * Track contact/get-in-touch form submission
 *
 * @param data - Optional contact form data
 */
export function trackContactFormSubmission(data?: Record<string, any>): Promise<void> {
  return trackFormSubmission('get_in_touch', data)
}
