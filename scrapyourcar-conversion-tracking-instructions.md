# Claude Code Instructions: Implement Google Ads Form Conversion Tracking

## Project Context
- **Website**: https://scrapyourcar.ae
- **Framework**: Next.js
- **Forms**: Two AJAX forms with toast notifications on success
- **Current Analytics**: GA4 (`G-FMW810Y38J`) in head section

---

## Objective
Implement Google Ads conversion tracking for two forms:
1. **Car Evaluation Form** - "Request Free Valuation & Inspection" button
2. **Get in Touch Form** - "Submit" button in contact section

---

## Conversion Tracking Details

| Form | Conversion ID | Conversion Label | Full send_to Value |
|------|---------------|------------------|-------------------|
| Car Evaluation | AW-17831642270 | TrmHCNnvkfEbEJ6J5bZC | `AW-17831642270/TrmHCNnvkfEbEJ6J5bZC` |
| Get in Touch | AW-17831642270 | YOtRCK2ykvEbEJ6J5bZC | `AW-17831642270/YOtRCK2ykvEbEJ6J5bZC` |

---

## Implementation Tasks

### Task 1: Update gtag Configuration

Find the existing gtag configuration in the head section (likely in `_app.tsx`, `_app.js`, `layout.tsx`, or a custom `Head` component). 

**Current code looks like:**
```jsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-FMW810Y38J"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-FMW810Y38J');
  `}
</Script>
```

**Update to:**
```jsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-FMW810Y38J"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-FMW810Y38J');
    gtag('config', 'AW-17831642270');
  `}
</Script>
```

---

### Task 2: Create Tracking Utility

Create a new file `lib/tracking.ts` (or `utils/tracking.ts`) with the following content:

```typescript
// lib/tracking.ts

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

type FormType = 'car_evaluation' | 'get_in_touch';

interface FormTrackingConfig {
  eventLabel: string;
  conversionLabel: string;
  conversionValue: number;
}

const FORM_TRACKING_CONFIG: Record<FormType, FormTrackingConfig> = {
  car_evaluation: {
    eventLabel: 'Car Evaluation Form',
    conversionLabel: 'AW-17831642270/TrmHCNnvkfEbEJ6J5bZC',
    conversionValue: 50,
  },
  get_in_touch: {
    eventLabel: 'Get in Touch Form',
    conversionLabel: 'AW-17831642270/YOtRCK2ykvEbEJ6J5bZC',
    conversionValue: 30,
  },
};

/**
 * Track form submission for both GA4 and Google Ads
 * @param formType - The type of form being submitted
 * @param additionalData - Optional additional data to include in GA4 event
 */
export const trackFormSubmission = (
  formType: FormType,
  additionalData?: Record<string, string | number | boolean>
): void => {
  if (typeof window === 'undefined') return;

  const config = FORM_TRACKING_CONFIG[formType];

  // Ensure gtag is available
  if (typeof window.gtag !== 'function') {
    console.warn('gtag not available for tracking');
    return;
  }

  try {
    // Track GA4 Event (for analytics reporting)
    window.gtag('event', 'generate_lead', {
      event_category: 'Form Submission',
      event_label: config.eventLabel,
      form_name: formType,
      value: config.conversionValue,
      currency: 'AED',
      ...additionalData,
    });

    // Track Google Ads Conversion (for campaign optimization)
    window.gtag('event', 'conversion', {
      send_to: config.conversionLabel,
      value: config.conversionValue,
      currency: 'AED',
    });

    console.log(`✅ Conversion tracked: ${config.eventLabel}`);
  } catch (error) {
    console.error('Error tracking form submission:', error);
  }
};

/**
 * Track Car Evaluation form submission
 * @param formData - Optional form data for enhanced tracking
 */
export const trackCarEvaluationSubmission = (
  formData?: {
    city?: string;
    make?: string;
    model?: string;
    condition?: string;
  }
): void => {
  trackFormSubmission('car_evaluation', {
    city: formData?.city || '',
    car_make: formData?.make || '',
    car_model: formData?.model || '',
    car_condition: formData?.condition || '',
  });
};

/**
 * Track Get in Touch form submission
 */
export const trackContactFormSubmission = (): void => {
  trackFormSubmission('get_in_touch');
};
```

---

### Task 3: Find and Update Car Evaluation Form Handler

Search for the Car Evaluation form component. Look for:
- Form with fields: phone, city, make, model, condition
- Button text: "Request Free Valuation & Inspection"
- Likely in: `components/CarEvaluationForm.tsx`, `components/ValuationForm.tsx`, `app/page.tsx`, or similar

**Add the tracking call AFTER successful form submission (after the success toast):**

```typescript
import { trackCarEvaluationSubmission } from '@/lib/tracking';

// Inside the form submit handler, after successful API response:
// Example location - find the actual success handler

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/api/...', { ... });
    
    if (response.ok) {
      // Existing success toast
      toast.success('Request submitted successfully!');
      
      // ADD THIS: Track conversion
      trackCarEvaluationSubmission({
        city: formData.city,      // Use actual state variable names
        make: formData.make,
        model: formData.model,
        condition: formData.condition,
      });
      
      // Reset form or redirect...
    }
  } catch (error) {
    toast.error('Something went wrong');
  }
};
```

---

### Task 4: Find and Update Get in Touch Form Handler

Search for the Get in Touch / Contact form component. Look for:
- Form with fields: name, phone, email (optional), message (optional)
- Button text: "Submit"
- Likely in: `components/ContactForm.tsx`, `components/GetInTouchForm.tsx`, or in the home page component

**Add the tracking call AFTER successful form submission:**

```typescript
import { trackContactFormSubmission } from '@/lib/tracking';

// Inside the form submit handler, after successful API response:

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/api/...', { ... });
    
    if (response.ok) {
      // Existing success toast
      toast.success('Message sent successfully!');
      
      // ADD THIS: Track conversion
      trackContactFormSubmission();
      
      // Reset form...
    }
  } catch (error) {
    toast.error('Something went wrong');
  }
};
```

---

## Important Notes

1. **Track ONLY on successful submission** - The tracking should fire only after the API returns a successful response, not on form submit button click.

2. **Preserve existing functionality** - Don't modify any existing form logic, validation, or toast messages. Only add the tracking calls.

3. **Handle both .ts and .js files** - The project might use either TypeScript or JavaScript. Adapt the imports accordingly.

4. **Check for existing tracking** - If there's already any tracking code, integrate with it rather than duplicating.

5. **Test the implementation** - After implementing, the tracking can be verified using:
   - Browser console should show "✅ Conversion tracked: [form name]"
   - Google Tag Assistant Chrome extension
   - GA4 DebugView (Realtime > Events)

---

## File Search Hints

To find the form components, search for:
- `Request Free Valuation`
- `toast.success`
- `onSubmit`
- `handleSubmit`
- `CarEvaluation`
- `ContactForm`
- `GetInTouch`

---

## Summary Checklist

- [ ] Updated gtag config to include `AW-17831642270`
- [ ] Created `lib/tracking.ts` utility file
- [ ] Added `trackCarEvaluationSubmission()` to Car Evaluation form success handler
- [ ] Added `trackContactFormSubmission()` to Get in Touch form success handler
- [ ] Verified no TypeScript/ESLint errors
- [ ] Tested forms still work correctly
