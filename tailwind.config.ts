import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        // MeetingMasters brand palette
        primary:      "#2D2D2D",   // Charcoal — headings & dark backgrounds (no blue)
        "mm-yellow":  "#EEBE3D",   // MM Geel — primary brand marker
        banana:       "#FFEEC1",   // Banana — warm section background
        aqua:         "#28A8AA",   // Aqua — secondary accent, labels
        "aqua-dark":  "#1F8688",   // Aqua dark — hover
        ice:          "#C3DED6",   // Ice — cool section tint
        rose:         "#C64A60",   // Rose — CTAs, signals (primary interactive)
        "rose-dark":  "#A33850",   // Rose dark — hover
        mint:         "#F9FFED",   // Mint — cool section background
        pistachio:    "#D7DDD0",   // Pistachio
        seaweed:      "#696758",   // Seaweed
        "dark-grey":  "#545454",   // MM Dark Grey — primary text
        "mid-grey":   "#898989",   // Mid grey
        "light-grey": "#C8C8C8",   // Light grey
        "white-grey": "#EBEBEB",   // White grey — borders

        // Semantic aliases (used throughout existing pages)
        accent:       "#C64A60",   // → rose
        "accent-dark":"#A33850",   // → rose-dark
        "bg-dark":    "#545454",   // → dark-grey
      },
      fontFamily: {
        sans: ["var(--font-rajdhani)", '"Helvetica Neue"', "Arial", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
