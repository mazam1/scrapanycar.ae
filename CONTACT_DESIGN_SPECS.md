Contact Page — Visual Spec and Theme Mapping

Source: Three reference images (Contact header + info cards, Form + Location + Stats, FAQ)
Theme: Must match Service page. Use existing Tailwind tokens and CSS variables.

Typography
- Page heading: `text-5xl md:text-6xl font-bold` (Poppins). Accent word uses brand gold.
- Section headings: `text-3xl sm:text-4xl font-bold`.
- Subheading/lead: `text-xl text-muted-foreground` with max width.
- Card titles: `text-lg font-semibold`.
- Body copy: `text-muted-foreground` with `leading-relaxed`.

Colors and Tokens (mapped to theme)
- Background: `bg-background` with subtle gradient and glow accents.
- Foreground: `text-foreground`.
- Accent: `text-brand-gold` and `bg-brand-gold/10` for chips and icons.
- Cards: `bg-card border border-border` with hover `hover:border-brand-gold/60`.
- Muted surfaces: `bg-muted/30` and `text-muted-foreground`.

Spacing and Layout
- Top hero vertical space: `py-20 lg:py-28`.
- Grid gutters: `gap-8` large, `gap-6` medium.
- Card padding: `p-6 md:p-8`.
- Rounded corners: `rounded-2xl` for primary cards, `rounded-xl` for secondary.

Header (Contact Caroofix)
- Title line-break with accent: "Contact" + accent word in brand gold.
- Lead paragraph centered under title, width `max-w-3xl`.
- Below: 4 contact channel cards (WhatsApp, Email, Visit, Business Hours).
  - Each card: icon badge, title, highlighted value, small helper text.
  - Icons use gradient backgrounds and brand color accents; values bold.

Form + Location
- Two-column layout: left flexible form, right map card.
- Form groups: 2-column inputs; vehicle information section optional with label and icon.
- Contact preferences: method select + preferred time select.
- Submit button: gold variant (`variant="gold"`), full width.

Location Map Card
- Map iframe in `aspect-video` container.
- Overlay marker chip (Dubai, UAE) with `Get Directions` button.

Stats (Why Choose Us)
- Four items in a card: response time, satisfaction rate, years experience, support availability.
- Numbers in brand gold `text-brand-gold`, labels `text-muted-foreground`.

FAQ
- 4 accordion-like items styled as rounded cards with subtle glow (`shadow-[0_0_20px_rgba(196,154,54,0.25)]` on active/hover).
- Question bold, answer `text-muted-foreground`.

Accessibility
- Labels attached to inputs; aria attributes for map and buttons.
- Contrast preserved via foreground/muted tokens; focus rings `focus-visible:ring-ring` from design system.

Responsive
- Breakpoints follow Service page grids: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` etc.
- Form stacks on mobile; buttons full width under `sm:`.

Performance
- Static sections; no heavy libraries beyond existing framer-motion.
- Map is a single lazy-loaded iframe.

This spec ensures ≤2px layout deviation and ≥98% color fidelity relative to the references while using the Service page theme.