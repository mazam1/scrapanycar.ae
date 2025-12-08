# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 landing page for scrapanycar.ae, a car valuation and scrapping service. The project uses the App Router with TypeScript, Tailwind CSS, and Radix UI components.

## Development Commands

### Start Development Server
```bash
npm run dev
```
Runs on http://localhost:3000 with hot reload enabled.

### Build for Production
```bash
npm run build
```
Creates optimized production build in `.next/` directory.

### Run Production Server
```bash
npm start
```
Serves the production build (must run `npm run build` first).

### Lint Code
```bash
npm run lint
```
Runs ESLint with Next.js configuration.

### Validate Environment
```bash
npm run validate
```
Validates environment variables using `scripts/validate-environment.js`.

## Architecture

### Component Organization Pattern

Components follow a **layered, feature-based architecture**:

```
components/
├── ui/           # Base UI components (Radix UI + CVA variants)
├── layout/       # Global layout components (Header, Footer)
├── sections/     # Page-specific sections organized by route
│   ├── home/
│   ├── about/
│   ├── services/
│   └── contact/
├── common/       # Shared utilities (ScrollToTop, ThemeToggle)
├── icons/        # Custom icon components
└── providers/    # React context providers
```

**Key Pattern**: Pages are composition-based containers that orchestrate section components. Pages should NOT contain inline content - they import and render sections in sequence.

Example:
```tsx
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FormSection />
      <FeaturesSection />
    </main>
  )
}
```

### Path Alias

All imports use the `@/` alias mapping to the root directory:
```tsx
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
```

### UI Component Library

Built on **Radix UI** with **Class Variance Authority (CVA)** for type-safe variant styling:

- Components in `components/ui/` wrap Radix primitives with custom styling
- Use CVA's `cva()` function to define component variants
- Example: Button supports variants: `default|destructive|outline|secondary|ghost|link|gold` and sizes: `default|sm|lg|icon`

### State Management

No global state library. State is managed through:

1. **Local component state** (`useState`) for UI and form state
2. **URL-based state** (`useSearchParams`) for shareable page behavior:
   - `?scrollToForm=true` - Triggers scroll to form on load
   - `?footer=classic|compact|split` - Selects footer variant
3. **Browser events** for global interactions (scroll detection, custom events)

**Important**: Components using `useSearchParams()` must be wrapped in `<Suspense>` boundary with a fallback.

### API Routes

Single API endpoint at `/app/api/images/route.ts`:

```
POST /api/images          # Save image with metadata
GET /api/images?id=...    # Retrieve images
DELETE /api/images?id=... # Delete image
```

**Database Layer**: Uses mock in-memory storage (`lib/db.ts`) with async patterns. Designed for easy migration to real database - look for comments indicating integration points.

### Data Fetching

Three patterns used:

1. **Mock DB** (`lib/db.ts`) - In-memory CRUD operations for demo
2. **External API** (`lib/unsplash.ts`) - Unsplash integration for images
3. **Form submissions** - Currently console logging only, ready for backend integration

## Styling System

### Tailwind CSS + Custom CSS

Primary styling uses Tailwind utility classes with custom brand colors:

```javascript
// Brand colors integrated in tailwind.config.js
brand: {
  primary: '#F44013',    // Main CTAs
  secondary: '#F79F00',  // Accents
  dark: '#000000',       // Headings
  medium: '#686567',     // Secondary text
  light: '#929195'       // Backgrounds
}
```

### Design System

`lib/design-system.ts` contains design tokens and standards (non-executable documentation):
- Typography scales
- Color system
- Spacing values
- Responsive breakpoints
- Accessibility standards (WCAG 2.1 AA compliance)

**Reference this file when creating new components to maintain consistency.**

### Helper Utilities

`lib/utils.ts` exports `cn()` function - combines Tailwind classes safely using `clsx` + `tailwind-merge`. Use this for all conditional styling:

```tsx
<div className={cn("base-class", condition && "conditional-class", className)} />
```

## Animations

Uses **Framer Motion** for animations:

- Entrance animations on sections with `initial`, `whileInView`, `animate` props
- Scroll-triggered animations
- Respects `prefers-reduced-motion` accessibility setting
- Mobile menu animations with `AnimatePresence`

Pattern:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
```

## Form Handling

React Hook Form is installed but current forms use basic React patterns with `useState`:

- Client-side validation only
- Alert-based user feedback
- Look for `// TODO` comments indicating backend integration points

## Special Features

### Header Component

- Fixed position with scroll-based size animation
- Mobile menu with hamburger toggle
- Navigation highlights based on current route (`usePathname()`)
- Scroll-to-form functionality triggered by navigation clicks or URL params

### Footer Variants

Footer supports runtime variant selection via URL parameter:
- `?footer=classic` - Traditional footer layout
- `?footer=compact` - Minimal footer
- `?footer=split` - Two-column layout

### Image Handling

`ImageWithFallback` component (`components/ui/image-with-fallback.tsx`) provides automatic fallback to placeholder SVG on image load errors.

## Environment Variables

Required for full functionality:

```
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_key_here
```

Run `npm run validate` to check environment configuration.

## Important Notes

- **Theme Provider is disabled** in root layout - project enforces light mode only
- **In-memory database resets on server restart** - this is intentional for demo purposes
- **Form submissions don't persist** - backend integration required for production
- **Accessibility**: Components respect `prefers-reduced-motion` and use semantic HTML
- **TypeScript strict mode enabled** - all new code must be properly typed

## Code Style

- Use TypeScript for all new files
- Prefer function components with hooks over class components
- Use `const` for components and functions
- Keep sections focused and single-purpose
- Avoid prop drilling - use composition instead
- Don't add unnecessary abstractions - three similar lines is better than premature abstraction
