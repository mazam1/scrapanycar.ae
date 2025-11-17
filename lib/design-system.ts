// Design System Variables

// Typography
export const typography = {
  // Font sizes
  font_size: {
    heading: "text-3xl md:text-4xl lg:text-5xl",
    subheading: "text-xl md:text-2xl lg:text-3xl",
    body: "text-base md:text-lg",
    small: "text-sm md:text-base"
  },
  // Font weights
  font_weight: {
    regular: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold"
  },
  // Colors (aligned with brand color system)
  color: {
    primary: "text-brand-dark",           // Brand Dark - headings, main text
    secondary: "text-brand-medium",       // Brand Medium - secondary text
    accent: "text-brand-primary",         // Brand Primary - accents, highlights
    highlight: "text-brand-secondary"     // Brand Secondary - secondary highlights
  },
  // Line heights
  line_height: {
    tight: "leading-tight",
    normal: "leading-normal",
    relaxed: "leading-relaxed"
  }
};

// Layout and Spacing
export const spacing = {
  // Padding
  padding: {
    vertical: {
      small: "py-6",
      medium: "py-12",
      large: "py-16 md:py-20",
      xlarge: "py-20 md:py-24 lg:py-32"
    },
    horizontal: {
      small: "px-4",
      medium: "px-6",
      large: "px-8"
    }
  },
  // Margins
  margin: {
    section: "mb-16 md:mb-20 lg:mb-24",
    element: "mb-6 md:mb-8"
  },
  // Gutters
  gutter: {
    small: "gap-4",
    medium: "gap-6",
    large: "gap-8"
  }
};

// Responsive Breakpoints
export const breakpoints = {
  small: "640px", // sm
  medium: "768px", // md
  large: "1024px", // lg
  xlarge: "1280px" // xl
};

// Scaling Factor
export const scaling = {
  factor: "scale-100 md:scale-105 lg:scale-110"
};

// Theme Implementation
export const theme = {
  // Gradients (new brand color system)
  gradient: {
    primary: "bg-gradient-primary",       // Linear gradient: Red to Orange (45deg)
    accent: "bg-gradient-accent",         // Radial gradient: Red, Orange, Black
    brandPrimary: "from-brand-primary to-brand-secondary",  // Utility-friendly
    subtle: "bg-gradient-to-br from-brand-light/20 via-brand-light/30 to-brand-light/20"
  },
  // Shadows
  shadow: {
    small: "shadow-sm",
    medium: "shadow-md",
    large: "shadow-lg"
  },
  // Transitions
  transition: {
    hover: "transition-all duration-300 ease-in-out",
    fast: "transition-all duration-200 ease-in-out"
  },
  // Contrast
  contrast: {
    ratio: "text-foreground bg-background" // Ensures WCAG AA compliance
  }
};

// Quality Assurance
export const qa = {
  browsers: ["Chrome", "Firefox", "Safari", "Edge"],
  accessibility: "WCAG 2.1 AA",
  cls_threshold: 0.1 // Cumulative Layout Shift threshold
};

// Styling Method
export const styling = {
  preferred_method: "Tailwind CSS with class-variance-authority"
};

// Brand Color Utilities
export const brandColors = {
  // Primary Colors
  primary: "bg-brand-primary text-white",           // Main CTAs, buttons
  secondary: "bg-brand-secondary text-white",       // Section highlights
  dark: "bg-brand-dark text-white",                 // Contrast backgrounds
  medium: "bg-brand-medium text-white",             // Neutral elements
  light: "bg-brand-light text-brand-dark",          // Background tints
  
  // Text Colors
  textPrimary: "text-brand-primary",                // Headings, CTA text
  textSecondary: "text-brand-secondary",            // Accent text
  textDark: "text-brand-dark",                      // Main text
  textMedium: "text-brand-medium",                  // Secondary text
  textLight: "text-brand-light",                    // Subtle text
  
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