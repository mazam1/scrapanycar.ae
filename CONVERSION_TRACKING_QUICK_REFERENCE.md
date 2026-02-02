# Google Ads Conversion Tracking - Quick Reference

## Configuration Summary

| Item | Value |
|------|-------|
| Google Ads ID | `AW-17831642270` |
| Car Evaluation Label | `AW-17831642270/TrmHCNnvkfEbEJ6J5bZC` |
| Get in Touch Label | `AW-17831642270/YOtRCK2ykvEbEJ6J5bZC` |
| Car Evaluation Value | 50 AED |
| Get in Touch Value | 30 AED |

## Form Locations

### Car Evaluation (Button: "Request Free Valuation & Inspection")
- Home page - Main valuation form section
- Home page - Legacy valuation form (if still in use)

### Get in Touch (Button: "Submit" or "Send Message")
- Contact page
- Services page (2 forms)
- Home page - Get in Touch section

## Testing Checklist

- [ ] Open browser developer console
- [ ] Navigate to form page
- [ ] Fill out and submit form
- [ ] Verify success toast appears
- [ ] Check console for: `✅ Conversion tracked: [form_name]`
- [ ] Check Network tab for gtag requests
- [ ] Verify conversion appears in Google Ads (24-48 hours)

## Common Issues

### No console log
- Check if gtag script loaded (Network tab)
- Verify Google Ads ID in layout.tsx
- Check browser ad blockers

### Console log but no conversions in Google Ads
- Wait 24-48 hours for data
- Verify conversion labels match exactly
- Check Google Ads account conversion settings
- Ensure conversion tracking is enabled in Google Ads

### Conversions tracked twice
- Check for duplicate form submissions
- Verify tracking only called in success block
- Check for multiple gtag scripts

## Code Snippets

### Import tracking utility
```typescript
import { trackCarEvaluationSubmission, trackContactFormSubmission } from '@/lib/tracking'
```

### Track car evaluation
```typescript
await trackCarEvaluationSubmission({
  city: 'Dubai',
  make: 'Toyota',
  model: 'Camry',
  condition: 'Good'
})
```

### Track contact form
```typescript
await trackContactFormSubmission()
```

## Support Resources

- [Google Ads Help: About conversion tracking](https://support.google.com/google-ads/answer/1722022)
- [Google Tag Assistant](https://tagassistant.google.com/)
- Project tracking utility: `lib/tracking.ts`
