// Google Analytics gtag utilities

// Extend the Window interface to include gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

/**
 * Send a conversion event to Google Analytics
 * This function tracks form submissions and can optionally redirect after tracking
 *
 * @param url - Optional URL to redirect to after sending the event
 * @returns false to prevent default form submission behavior
 */
export function gtagSendEvent(url?: string): boolean {
  // Check if gtag is available
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    console.warn('gtag is not available');

    // If URL is provided, redirect anyway
    if (url && typeof url === 'string') {
      window.location.href = url;
    }

    return false;
  }

  const callback = function () {
    if (typeof url === 'string' && url) {
      window.location.href = url;
    }
  };

  try {
    window.gtag('event', 'ads_conversion_Contact_Us_1', {
      'event_callback': callback,
      'event_timeout': 2000,
    });
  } catch (error) {
    console.error('Error sending gtag event:', error);

    // Still execute callback even if gtag fails
    if (url && typeof url === 'string') {
      callback();
    }
  }

  return false;
}

/**
 * Helper function to send conversion event asynchronously
 * This is useful for async form submissions where you don't want to block the UI
 *
 * @returns Promise that resolves when the event has been sent (or timeout reached)
 */
export function sendConversionEvent(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
      console.warn('gtag is not available');
      resolve();
      return;
    }

    let resolved = false;

    const callback = () => {
      if (!resolved) {
        resolved = true;
        resolve();
      }
    };

    try {
      window.gtag('event', 'ads_conversion_Contact_Us_1', {
        'event_callback': callback,
        'event_timeout': 2000,
      });

      // Fallback timeout in case callback never fires
      setTimeout(() => {
        if (!resolved) {
          resolved = true;
          resolve();
        }
      }, 2100);
    } catch (error) {
      console.error('Error sending gtag event:', error);
      resolve();
    }
  });
}
