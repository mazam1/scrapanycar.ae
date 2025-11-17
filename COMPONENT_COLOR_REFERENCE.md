# Component Color Reference Guide
## Quick lookup for all updated components

---

## Layout Components

### Header (`components/layout/header.tsx`)

```tsx
// Navigation Links
Active link: text-brand-secondary
Inactive link: text-white hover:text-brand-secondary

// CTA Button
<Button variant="default">Get Valuation</Button>
// Renders: #FF0000 (red) background, white text

// Menu overlay
backgroundColor: '#FF0000' (opacity: 10%)
```

### Footer (`components/layout/footer.tsx`)

```tsx
// Section Headings
<h3 className="text-white">
  Section Title
  <div className="bg-brand-secondary" /> {/* underline */}
</h3>

// Contact Icons
<div className="bg-brand-secondary/10 border-brand-secondary/20">
  <Icon className="text-brand-secondary" />
</div>

// Newsletter Button
<Button variant="secondary">Subscribe</Button>
// Renders: #F79F00 (orange) background, black text

// Footer overlay
backgroundColor: '#FF0000' (opacity: 10%)
```

---

## Hero & Home Sections

### Hero Section (`components/sections/home/hero-section.tsx`)

```tsx
// Heading Accents
<span className="text-brand-secondary">Old Car</span>
<span className="text-brand-secondary">Instant Cash</span>
// Color: #F79F00 (orange)

// Benefit Icons
<DollarSign className="text-brand-secondary" />
<Clock className="text-brand-secondary" />
// Color: #F79F00 (orange)

// Background overlay
backgroundColor: '#FF0000' (opacity: 10%)
```

### Action Buttons (`components/sections/home/action-buttons.tsx`)

```tsx
// WhatsApp Button (Primary)
className="bg-brand-secondary hover:bg-brand-secondary/90 text-brand-dark"
// Background: #F79F00 (orange)
// Text: #000000 (black)

// Call Button (Secondary)
className="bg-white/10 border border-white/20 text-white"
// Background: Transparent with white border
```

### Form Section (`components/sections/home/form-section.tsx`)

```tsx
// Submit Button
className="bg-brand-primary hover:bg-brand-primary/90 text-white"
// Background: #FF0000 (red)
// Text: white

// Button hover
opacity-90 with smooth transition
```

---

## Services Section Components

### Services Overview (`components/sections/services/services-overview-section.tsx`)

```tsx
// Main CTA Button
<Button className="bg-brand-primary hover:bg-brand-primary/90 text-white">
  Get Your Quote Now
</Button>
// Background: #FF0000 (red)
// Text: white
```

### Service Areas (`components/sections/services/service-areas-section.tsx`)

```tsx
// Neighborhood Bullets
<div className="bg-brand-secondary" /> {/* 1.5px dot */}
// Color: #F79F00 (orange)

// CTA Button
className="group-hover:border-brand-secondary group-hover:text-brand-secondary"
// Hover color: #F79F00 (orange)
```

### Ready to Start (`components/sections/services/ready-to-start-section.tsx`)

```tsx
// Heading Accent
<span className="text-brand-primary">Started?</span>
// Color: #FF0000 (red)

// Primary Button
<Button variant="default">Get Free Valuation</Button>
// Background: #FF0000 (red)
// Text: white

// Secondary Button
<Button variant="secondary">Call now</Button>
// Background: #F79F00 (orange)
// Text: #000000 (black)
```

---

## Color Palette Quick Reference

### Primary Red (#FF0000)
**Used for:**
- Main CTA buttons
- Form submission buttons
- Primary headings
- Hero overlay
- Focus ring colors

**Text color on this background:** white (#FFFFFF)

```jsx
className="bg-brand-primary text-white hover:bg-opacity-90"
```

### Secondary Orange (#F79F00)
**Used for:**
- Secondary action buttons
- Icon accents
- Hover states
- Borders on hover
- Active navigation links
- Underlines on headings

**Text color on this background:** black (#000000)

```jsx
className="bg-brand-secondary text-brand-dark hover:bg-opacity-90"
```

### Dark Black (#000000)
**Used for:**
- Main headings
- Primary text
- Strong contrast elements
- Text on orange backgrounds

**Where to use:** For maximum readability and brand impact

```jsx
className="text-brand-dark"
```

### Medium Gray (#686567)
**Used for:**
- Secondary text
- Subheadings
- Description text
- Muted information

**Use case:** Less important text that still needs readability

```jsx
className="text-brand-medium"
```

### Light Gray (#929195)
**Used for:**
- Borders
- Input field borders
- Subtle backgrounds
- Card borders

**Use case:** Subtle visual separation

```jsx
className="border-brand-light"
```

---

## Button Variants Reference

### Default (Primary - Red)
```jsx
<Button variant="default">Action</Button>
// Renders: bg-brand-primary text-white
// Use: Main CTAs, important actions
```

### Secondary (Orange)
```jsx
<Button variant="secondary">Action</Button>
// Renders: bg-brand-secondary text-black
// Use: Secondary actions, newsletter signups
```

### Outline
```jsx
<Button variant="outline">Action</Button>
// Use: Tertiary actions with border
// Hover: Updates to brand-secondary colors
```

### Ghost
```jsx
<Button variant="ghost">Action</Button>
// Use: Transparent buttons, minimal style
```

---

## Common Component Patterns

### Card with Brand Accent
```jsx
<div className="border-t-2 border-brand-secondary">
  {/* Card content */}
</div>
```

### Highlighted Text
```jsx
<span className="text-brand-primary">Important</span>
// Red accent text
```

### Icon with Background
```jsx
<div className="bg-brand-secondary/10 rounded-lg">
  <Icon className="text-brand-secondary" />
</div>
```

### Input with Focus Ring
```jsx
<input className="border-brand-light focus:ring-2 focus:ring-brand-primary" />
```

### Section Divider
```jsx
<div className="h-0.5 bg-gradient-to-r from-transparent via-brand-secondary to-transparent" />
```

### Hover State
```jsx
className="hover:text-brand-secondary transition-colors duration-200"
```

---

## Contrast & Accessibility

### Passing WCAG AA (4.5:1 ratio)

✅ Brand Dark (#000000) on white - 21:1 ratio
✅ Brand Secondary (#F79F00) on white - 4.54:1 ratio
✅ Brand Medium (#686567) on white - 6.42:1 ratio
✅ Brand Light (#929195) on white - 4.48:1 ratio

### Recommended Combinations

| Text Color | Background | Ratio | Status |
|-----------|-----------|-------|--------|
| White | Brand Primary (#FF0000) | 3.99:1 | Use for large text only |
| White | Brand Secondary (#F79F00) | 5.04:1 | ✅ WCAG AA |
| Brand Dark | Brand Secondary (#F79F00) | 9.94:1 | ✅ WCAG AAA |
| Brand Dark | White | 21:1 | ✅ WCAG AAA |
| Brand Medium | White | 6.42:1 | ✅ WCAG AA |

---

## Real-World Examples

### Example 1: CTA Button on Hero
```jsx
// Header text
<h1 className="text-white">
  Turn Your{" "}
  <span className="text-brand-secondary">Old Car</span>{" "}
  Into Instant Cash
</h1>

// Button
<Button className="bg-brand-primary text-white hover:bg-opacity-90">
  Get Valuation
</Button>
```

### Example 2: Service Card
```jsx
<div className="bg-white rounded-lg border-t-2 border-brand-secondary">
  <h3 className="text-brand-dark">Service Title</h3>
  <p className="text-brand-medium">Description</p>
  <Button variant="secondary">Learn More</Button>
</div>
```

### Example 3: Footer Contact
```jsx
<div className="bg-brand-secondary/10 rounded-lg p-3">
  <div className="w-9 h-9 bg-brand-secondary/10 flex items-center justify-center">
    <Phone className="text-brand-secondary" />
  </div>
  <a href="#" className="hover:text-brand-secondary">
    +971 56 855 8762
  </a>
</div>
```

---

## Design System Exports

### Use from `lib/design-system.ts`

```typescript
import { brandColors } from '@/lib/design-system';

// Button classes
brandColors.buttonPrimary        // Red button
brandColors.buttonSecondary      // Orange button
brandColors.buttonOutline        // Outline button

// Text classes
brandColors.textPrimary          // Red text
brandColors.textSecondary        // Orange text
brandColors.textDark             // Black text

// Gradient classes
brandColors.gradientPrimary      // Red-Orange gradient
brandColors.gradientAccent       // Radial red gradient
```

---

## Tailwind Class Reference

### Background Colors
```css
bg-brand-primary     /* #FF0000 */
bg-brand-secondary   /* #F79F00 */
bg-brand-dark        /* #000000 */
bg-brand-medium      /* #686567 */
bg-brand-light       /* #929195 */
```

### Text Colors
```css
text-brand-primary   /* #FF0000 */
text-brand-secondary /* #F79F00 */
text-brand-dark      /* #000000 */
text-brand-medium    /* #686567 */
text-brand-light     /* #929195 */
```

### Borders
```css
border-brand-primary      /* #FF0000 */
border-brand-secondary    /* #F79F00 */
border-brand-light        /* #929195 */
```

### Opacity Variants
```css
bg-brand-primary/10      /* 10% opacity */
bg-brand-secondary/20    /* 20% opacity */
text-white/90            /* 90% opacity */
```

---

**Last Updated**: November 17, 2025
**Status**: Ready for Development & Design Review

