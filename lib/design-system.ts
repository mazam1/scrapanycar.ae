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
  // Colors
  color: {
    primary: "text-foreground",
    secondary: "text-muted-foreground",
    accent: "text-brand-gold"
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
  // Gradients
  gradient: {
    brand: "bg-gradient-to-br from-muted/20 via-muted/30 to-muted/20",
    gold: "bg-gradient-to-r from-brand-gold/60 to-brand-gold/20"
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