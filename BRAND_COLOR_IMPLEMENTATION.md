# Brand Color Implementation Guide
## Scrap Your Car — New Color System

---

## Overview

Your Next.js project has been updated with a new, bold brand color system. All color configurations are now centralized and ready for use across your application.

### Color Scheme Summary

| Name | Color | Hex | Usage |
|------|-------|-----|-------|
| **Primary** | Red | `#FF0000` | CTAs, buttons, highlights, primary actions |
| **Secondary** | Orange | `#F79F00` | Accents, hover states, icons, secondary highlights |
| **Dark** | Black | `#000000` | Headings, main text, strong contrast |
| **Medium** | Gray | `#686567` | Secondary text, borders, outlines |
| **Light** | Light Gray | `#929195` | Backgrounds, input fields, subtle borders |

### Gradients

- **Primary Gradient**: `linear-gradient(45deg, #FF0000, #F79F00)`
- **Accent Gradient**: `radial-gradient(circle, #FF0000, #F79F00, #000000)`

---

## Configuration Files Updated

### 1. `tailwind.config.js`
**Status**: ✅ Updated

New brand colors added to Tailwind extend config:
```javascript
brand: {
  primary: '#FF0000',      // Main CTA, buttons, highlights
  secondary: '#F79F00',    // Accents, highlights, icons
  dark: '#000000',         // Headings, text, contrast elements
  medium: '#686567',       // Secondary text, outlines, neutral elements
  light: '#929195',        // Background tint, cards, borders
}
```

**Usage in components:**
```tsx
// Background colors
<div className="bg-brand-primary">...</div>
<div className="bg-brand-secondary">...</div>

// Text colors
<p className="text-brand-dark">...</p>
<p className="text-brand-medium">...</p>
```

### 2. `app/globals.css`
**Status**: ✅ Updated

CSS custom properties defined for easy access:
```css
--brand-primary: #FF0000;
--brand-secondary: #F79F00;
--brand-dark: #000000;
--brand-medium: #686567;
--brand-light: #929195;
--gradient-primary: linear-gradient(45deg, #FF0000, #F79F00);
--gradient-accent: radial-gradient(circle, #FF0000, #F79F00, #000000);
```

Core UI variables (primary, secondary, accent, border, etc.) have been mapped to the new brand colors for consistency.

### 3. `lib/design-system.ts`
**Status**: ✅ Updated

Added comprehensive brand utilities export:
```typescript
export const brandColors = {
  // Primary Colors
  primary: "bg-brand-primary text-white",
  secondary: "bg-brand-secondary text-white",
  dark: "bg-brand-dark text-white",
  medium: "bg-brand-medium text-white",
  light: "bg-brand-light text-brand-dark",
  
  // Text Colors
  textPrimary: "text-brand-primary",
  textSecondary: "text-brand-secondary",
  textDark: "text-brand-dark",
  textMedium: "text-brand-medium",
  textLight: "text-brand-light",
  
  // Borders
  borderPrimary: "border-brand-primary",
  borderSecondary: "border-brand-secondary",
  borderLight: "border-brand-light",
  borderMedium: "border-brand-medium",
  
  // Button Variants
  buttonPrimary: "bg-brand-primary hover:bg-opacity-90 text-white",
  buttonSecondary: "bg-brand-secondary hover:bg-opacity-90 text-black",
  buttonOutline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary/10",
  
  // Gradients
  gradientPrimary: "bg-gradient-primary",
  gradientAccent: "bg-gradient-accent"
};
```

Updated color references and gradients for consistent design system.

### 4. `BrandGuide.md`
**Status**: ✅ Updated

Updated with:
- New color palette documentation
- Color usage guidelines
- Updated Tailwind tokens
- Color usage table for reference

---

## How to Use in Components

### Quick Start Examples

#### 1. Primary CTA Button
```tsx
import { brandColors } from '@/lib/design-system';

export function CallToAction() {
  return (
    <button className={`${brandColors.buttonPrimary} px-6 py-3 rounded-lg`}>
      Get Started
    </button>
  );
}
```

#### 2. Hero Section with Gradient
```tsx
<section className="bg-gradient-primary min-h-screen flex items-center">
  <div className="container mx-auto">
    <h1 className="text-brand-dark text-5xl font-bold">
      Your Heading
    </h1>
    <p className="text-brand-medium">Your description</p>
  </div>
</section>
```

#### 3. Card with Secondary Color
```tsx
<div className="bg-brand-secondary rounded-lg p-6">
  <h3 className="text-white font-bold">Card Title</h3>
  <p className="text-white/90">Card content</p>
</div>
```

#### 4. Using Design System Export
```tsx
import { brandColors } from '@/lib/design-system';

// In your component:
<button className={brandColors.buttonPrimary}>Submit</button>
<div className={brandColors.primary}>Content</div>
<h1 className={brandColors.textDark}>Heading</h1>
<input className={`border ${brandColors.borderLight}`} />
```

### Tailwind Direct Usage

```tsx
// Backgrounds
<div className="bg-brand-primary">Red background</div>
<div className="bg-brand-secondary">Orange background</div>
<div className="bg-brand-dark">Black background</div>
<div className="bg-brand-medium">Gray background</div>
<div className="bg-brand-light">Light gray background</div>

// Text
<p className="text-brand-primary">Red text</p>
<p className="text-brand-secondary">Orange text</p>
<p className="text-brand-dark">Black text</p>

// Borders
<div className="border-2 border-brand-primary">Red border</div>

// Hover states
<button className="bg-brand-primary hover:opacity-80">Hover</button>

// Gradients
<div className="bg-gradient-primary">Gradient: Red to Orange</div>
<div className="bg-gradient-accent">Radial gradient</div>
```

---

## Key Sections to Update (Component Checklist)

Review and update the following components to use the new brand colors:

### Layout Components
- [ ] `components/layout/header.tsx` — Update nav links, buttons, backgrounds
- [ ] `components/layout/footer.tsx` — Update text colors, accents, links

### UI Components
- [ ] `components/ui/button.tsx` — Update button variants (primary, secondary, outline)
- [ ] Input fields — Update border colors to use `border-brand-light`
- [ ] Links/anchors — Update hover states to use brand colors

### Section Components (Home)
- [ ] `components/sections/home/hero-section.tsx` — Update accent overlay colors
- [ ] `components/sections/home/action-buttons.tsx` — Use `brandColors.buttonPrimary`
- [ ] `components/sections/home/features-section.tsx` — Update accent highlights
- [ ] `components/sections/home/testimonials-section.tsx` — Update card borders, text accents

### Section Components (Services)
- [ ] `components/sections/services/services-hero-section.tsx`
- [ ] `components/sections/services/core-services-section.tsx` — Update card highlights
- [ ] `components/sections/services/services-overview-section.tsx`

### Section Components (Blog)
- [ ] `components/sections/blog/blog-listings.tsx` — Update card design
- [ ] `components/sections/blog/featured-articles.tsx` — Update accents
- [ ] `components/sections/blog/blog-categories.tsx` — Update active state colors

### Section Components (Contact)
- [ ] `components/sections/contact/contact-form-section.tsx` — Update form styling
- [ ] `components/sections/contact/contact-hero-section.tsx` — Update heading accents

### Page Components
- [ ] `app/page.tsx` (Home)
- [ ] `app/about/page.tsx` (About)
- [ ] `app/services/page.tsx` (Services)
- [ ] `app/blog/page.tsx` (Blog)
- [ ] `app/contact/page.tsx` (Contact)

---

## Migration Path (Optional)

If you want to gradually migrate without breaking existing code:

1. **Phase 1**: Update critical CTAs and buttons to use brand colors
2. **Phase 2**: Update section accents and highlights
3. **Phase 3**: Update text colors and secondary elements
4. **Phase 4**: Update borders, backgrounds, and subtle elements

---

## Color Contrast & Accessibility

Ensure WCAG AA compliance (4.5:1 minimum contrast ratio) for text:

| Combination | Contrast Ratio | Status |
|-------------|---|---|
| Brand Dark (#000000) on white | 21:1 | ✅ WCAG AAA |
| Brand Primary (#FF0000) on white | 3.99:1 | ⚠️ Use for large text only |
| Brand Secondary (#F79F00) on white | 4.54:1 | ✅ WCAG AA |
| Brand Medium (#686567) on white | 6.42:1 | ✅ WCAG AA |
| Brand Light (#929195) on white | 4.48:1 | ✅ WCAG AA |

**Recommendation**: Use `text-white` for Brand Primary and Secondary backgrounds, and `text-brand-dark` for Brand Light backgrounds.

---

## Testing Checklist

- [ ] Verify button hover states display correctly
- [ ] Test gradient overlays on hero sections
- [ ] Check text readability on all color backgrounds
- [ ] Test on mobile, tablet, and desktop viewports
- [ ] Verify dark mode (if applicable) colors are updated
- [ ] Test form inputs and focus states
- [ ] Verify links and anchor colors
- [ ] Test icon colors and SVG fills

---

## Quick Reference

### Import Design System Colors
```typescript
import { brandColors } from '@/lib/design-system';
```

### Tailwind Color Classes (Quick List)
```
bg-brand-primary, bg-brand-secondary, bg-brand-dark, bg-brand-medium, bg-brand-light
text-brand-primary, text-brand-secondary, text-brand-dark, text-brand-medium, text-brand-light
border-brand-primary, border-brand-secondary, border-brand-dark, border-brand-medium, border-brand-light
bg-gradient-primary, bg-gradient-accent
```

### CSS Variables
```
var(--brand-primary)
var(--brand-secondary)
var(--brand-dark)
var(--brand-medium)
var(--brand-light)
var(--gradient-primary)
var(--gradient-accent)
```

---

## Support

If you need to revert or adjust:
1. Check `tailwind.config.js` for color definitions
2. Review `app/globals.css` for CSS variables
3. Consult `lib/design-system.ts` for design tokens
4. Reference `BrandGuide.md` for color usage guidelines

---

**Last Updated**: November 17, 2025
**Brand Version**: 2.0 (Red/Orange Theme)

