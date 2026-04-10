import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        border: "hsl(var(--border) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
          subtle: "hsl(var(--accent-subtle) / <alpha-value>)",
        },
        surface: {
          DEFAULT: "hsl(var(--surface) / <alpha-value>)",
          border: "hsl(var(--surface-border) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        logo: ["var(--font-logo)", "cursive"],
        /** Colophon — retro-future / digital display (Orbitron). */
        future: ["var(--font-future)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        /** Exhibition-scale title */
        "display-xl": ["clamp(2.25rem,5vw,3.75rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(1.75rem,3.5vw,2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        readable: "42rem",
        /** Catalogue width — room for two-column exhibition + script reader */
        exhibition: "82rem",
      },
      spacing: {
        section: "var(--space-section)",
        block: "var(--space-block)",
        tight: "var(--space-tight)",
      },
      borderRadius: {
        hairline: "var(--radius-hairline)",
        panel: "var(--radius-panel)",
      },
      transitionDuration: {
        subtle: "var(--duration-subtle)",
      },
      transitionTimingFunction: {
        exhibition: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        "frame-inset": "var(--shadow-frame-inset)",
        "frame-outer": "var(--shadow-frame-outer)",
      },
    },
  },
  plugins: [],
};

export default config;
