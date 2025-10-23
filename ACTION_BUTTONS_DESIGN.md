# Home Action Buttons – Design, Implementation, and Testing

## Overview
Two interactive action buttons are implemented on the home page to match the provided reference image:
- WhatsApp button (bright orange with WhatsApp icon)
- Call Now button (dark translucent with border and phone icon)

## Visual Specs
- Font family: `Poppins`
- Font weight: `600` (semibold)
- Letter spacing: `0.2px`
- Text size: `16px` (mobile), `18px` (tablet/desktop)
- Border radius: `12px` for both buttons
- Spacing between buttons: `20px`
- Alignment: Centered within container, vertically aligned with surrounding elements

### Colors
- WhatsApp button background: `#FFA800` (reference-match bright orange)
- WhatsApp hover background (10% darker): `#E69500`
- WhatsApp text/icon color: `#FFFFFF`
- Call Now background: `rgba(255, 255, 255, 0.10)` (on dark overlay)
- Call Now hover background: `rgba(255, 255, 255, 0.15)`
- Call Now border: `rgba(255, 255, 255, 0.20)`
- Call Now text/icon: `#FFFFFF`

### Dimensions
- Minimum touch target: `48x48px` (enforced via `h-12 min-h-[48px]`)
- Padding: `px-6` (mobile) and `px-8` (tablet/desktop)

### Interaction
- Hover: Background darkens by ~10%
- Active: Scale to `95%`
- Transition: `200ms` for color and transform

## Accessibility
- WhatsApp ARIA label: `Open WhatsApp chat with customer support`
- Call Now ARIA label: `Call customer support directly`
- Icons are marked `aria-hidden` and paired with descriptive text
- Buttons are anchors using proper `href`s for expected platform behavior
- High-contrast text on backgrounds to maintain legibility

## Implementation Details
- Component: `components/sections/home/action-buttons.tsx`
- Integration: Inserted in `HeroSection` under primary CTA
- Deep links:
  - WhatsApp: `https://wa.me/971568559762`
  - Phone: `tel:00971568558762`
- Inline SVG for WhatsApp glyph to avoid external fetches and prevent CLS

## Responsive Behavior
- Stack vertically on narrow viewports: `flex-col sm:flex-row`
- Fluid typography and padding across breakpoints
- Touch targets meet mobile accessibility minimums

## Performance Considerations
- No external icon network requests (inline SVG)
- Fixed sizes to avoid layout shifts
- Efficient Tailwind classes and transitions only
- Verified in dev with no new warnings in Next.js logs

## Cross-Browser & Device Testing Guidance
- Desktop browsers: Test in Chrome, Edge, Safari, and Firefox
- Mobile devices:
  - iOS Safari and Chrome (WhatsApp deep link opens app if installed)
  - Android Chrome (WhatsApp deep link and `tel:` URI open native apps)
- Confirm hover and active states on devices that support them
- Validate font rendering (Poppins) and letter spacing

## Accessibility Validation Steps
- Screen readers: NVDA (Windows) and VoiceOver (macOS/iOS)
- Navigate with keyboard (Tab/Shift+Tab) to ensure focus states and activation
- Verify ARIA labels read correctly and without redundancy

## Verification Checklist
- Buttons match pixel specs (colors, radius, spacing, typography)
- Hover darkens by 10% and active scales to 95%
- Center-aligned with 20px spacing in all breakpoints
- WhatsApp opens chat with `+971568559762`
- Call opens dialer with `00971568558762`
- No layout shifts (CLS) observed

## Notes
- Colors selected to match the reference screenshot as closely as possible (`#FFA800` for the WhatsApp button). If precise brand color values are provided, they can be substituted easily.