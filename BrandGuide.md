# Scrap Your Car — Brand Guide

> **Positioning:** Premium · Trustworthy · Efficient — car valuation & instant buying across UAE.

---

## 1. Brand Essence

**Mission:** Make selling a car in the UAE simple, fast, and trustworthy — letting owners convert vehicles to cash from their home or office with market-accurate offers.

**Vision:** To be the UAE's most trusted digital partner for vehicle resale and valuation — recognized for fairness, speed, and white-glove service.

**Core Values:**
- **Trust:** Transparent price estimates and secure transactions.
- **Speed:** Minimal friction — same-day valuations and fast payouts.
- **Professionalism:** Polished service, knowledgeable valuers, and consistent experiences.
- **Local Expertise:** UAE market-savvy, regulatory-aware, and culturally aligned.

---

## 2. Target Market & Positioning

**Primary Audience:** UAE car owners aged 28–55 who value convenience and trust — expatriates and nationals selling privately or through brokers.

**Secondary Audience:** Dealers and fleet managers seeking quick, honest valuations.

**Market Positioning Statement:**
> Scrap Your Car is the premium, digital-first vehicle buyer in the UAE — combining on-demand convenience with institution-grade trust and clear pricing.

**Competitive Differentiators:**
- Full digital-first valuation flow with optional in-person inspection.
- Transparent market-pricing engine and documented breakdowns.
- White-glove pickup and paperwork handling for a premium experience.

---

## 3. Visual Identity

### Logo
- **Primary mark:** Horizontal lockup with wordmark and monogram (CF / stylized car silhouette inside a shield-like badge).
- **Variants:** Horizontal (primary), stacked (badge above wordmark), and monogram only for favicons and app icons.
- **Clear space:** Maintain a minimum clear space equal to the height of the badge around the logo.
- **Minimum Size:** 40px (monogram), 120px (horizontal lockup) for legibility in digital contexts.
- **Colors:** Use full-color logo on light backgrounds, white logo on dark backgrounds, and single-color (charcoal or gold) for monochrome use.

**Do not:** Stretch, rotate, recolor the monogram outside approved palette, or put the logo over busy imagery without a protective overlay.

### Imagery & Photography
- **Style:** Crisp, high-resolution photography — daylight, natural locations (UAE roads, city skyline), professional car close-ups (3/4 angle), and human elements (valuers, handshakes, keys exchange).
- **Mood:** Confident, calm, professional. Avoid gimmicky or overly playful filters.
- **Palette influence:** Use muted backgrounds with subject in natural colors; apply subtle warm-gold accents to reinforce the premium feel.

### Iconography & Motion
- **Icons:** Minimal geometric line-icons with 2px stroke for general UI; filled + rounded for primary actions. Use consistent stroke widths.
- **Motion:** Subtle micro-interactions — 120–200ms ease-in-out for hover/focus, gentle elevation changes on press, and a tasteful 300–500ms reveal for onboarding modals.

---

## 4. Color System (New Brand Palette)

Design uses a bold, dynamic palette: vibrant red for primary CTAs, warm orange for secondary highlights, pure black for strong contrast, with neutral grays for secondary text and backgrounds.

### Core Colors (hex)
- **Primary (Red):** `#F44013` — Main CTAs, buttons, primary highlights
- **Secondary (Orange):** `#F79F00` — Accents, highlights, icons, hover states
- **Dark (Black):** `#000000` — Headings, main text, strong contrast elements
- **Medium (Gray):** `#686567` — Secondary text, outlines, neutral elements
- **Light (Light Gray):** `#929195` — Background tints, cards, borders

### Extended Colors
- **Success:** `#1E9E6F`
- **Warning:** `#E08A00`
- **Danger/Error:** `#F44013` (aligned with primary)

### Background & Surface
- **Light background:** `#F7F8FA` (page background)
- **Card surface (light):** `#FFFFFF`
- **Text primary (light):** `#0B1320`
- **Text secondary (light):** `#4B5563`

- **Dark background:** `#0A0F14` (page background)
- **Card surface (dark):** `#0F1720`
- **Text primary (dark):** `#E6EEF6`
- **Text secondary (dark):** `#A8B3C3`

### Neutral Scale (use for UI elements)
- `#F7F8FA` (100)
- `#E6EDF5` (200)
- `#CBD7E3` (300)
- `#94A6BC` (400)
- `#4B5563` (500)
- `#233040` (600)
- `#0B1320` (700)

**Accessibility note:** Ensure minimum contrast ratios: text-on-background >= 4.5:1 for body text. Use tools to verify WCAG AA/AAA compliance for combinations.

---

## 5. Typography

**Primary Typeface (UI / Headings):** *Poppins* — modern, geometric, slightly condensed for confident headers.
- **Fallback stack:** `Poppins, Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`.

**Secondary Typeface (Long-form / Tone):** *Inter* — excellent readability for body copy and UI labels.
- **Fallback stack:** `Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`.

**Hierarchy (recommended sizes / weights):**
- `H1` 48px / 600 (Poppins)
- `H2` 32px / 600 (Poppins)
- `H3` 24px / 600 (Poppins)
- `H4` 18px / 600 (Poppins)
- `Body` 16px / 400 (Inter)
- `Small` 14px / 400 (Inter)
- `Micro` 12px / 400 (Inter)

Line-height: 1.3–1.6 depending on context. Use tighter leading for large headings and more generous for paragraphs.

---

## 6. Brand Color Tokens (Tailwind-ready)

```css
:root {
  /* Brand Color System */
  --brand-primary: #F44013;     /* Main CTA, buttons, highlights */
  --brand-secondary: #F79F00;   /* Accents, highlights, icons */
  --brand-dark: #000000;        /* Headings, text, contrast elements */
  --brand-medium: #686567;      /* Secondary text, outlines, neutral elements */
  --brand-light: #929195;       /* Background tint, cards, borders */
  
  /* Gradients */
  --gradient-primary: linear-gradient(45deg, #F44013, #F79F00);
  --gradient-accent: radial-gradient(circle, #F44013, #F79F00, #000000);
  
  /* Legacy UI Variables (mapped to new brand) */
  --bg: #fdfcfa;
  --surface: #FFFFFF;
  --text-primary: #000000;       /* Using brand-dark */
  --text-secondary: #686567;     /* Using brand-medium */
  --brand: #F44013;              /* Using brand-primary */
  --accent: #F79F00;             /* Using brand-secondary */
  --muted: #929195;              /* Using brand-light */
  --success: #1E9E6F;
  --warning: #E08A00;
  --danger: #F44013;             /* Using brand-primary */
}
```

### Color Usage Guide

| Element | Color | Hex | Usage |
|---------|-------|-----|-------|
| Primary CTA Button | Brand Primary | `#F44013` | Main action buttons, key highlights |
| Secondary CTA | Brand Secondary | `#F79F00` | Hover states, accent buttons, icons |
| Headings & Main Text | Brand Dark | `#000000` | H1-H6 tags, important content |
| Secondary Text | Brand Medium | `#686567` | Subheadings, descriptions, meta text |
| Borders & Backgrounds | Brand Light | `#929195` | Input fields, borders, subtle backgrounds |
| Gradient Primary | Linear 45deg | Red → Orange | Hero sections, featured areas |
| Gradient Accent | Radial | Red, Orange, Black | Special highlights, focus areas |

---

*(Content continues as in the BrandGuide.md document you created earlier)*
