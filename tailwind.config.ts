import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // mapped to the design-system CSS variables in globals.css
        bg: "var(--bg)",
        primary: "var(--primary)",
        blue: "var(--blue)",
        cyan: "var(--cyan)",
        good: "var(--good)",
        bad: "var(--bad)",
        text: "var(--text)",
        muted: "var(--muted)",
        "muted-2": "var(--muted-2)",
        card: "var(--card)",
        "card-2": "var(--card-2)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
      },
      borderRadius: {
        card: "var(--r-card)",
        pill: "var(--r-pill)",
      },
      fontFamily: {
        display: ['"Clash Display"', '"Space Grotesk"', "sans-serif"],
        grotesk: ['"Space Grotesk"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
        ikob: ['"Happy Times at the IKOB"', '"Space Grotesk"', "serif"],
      },
    },
  },
  // The existing design system ships its own CSS reset; disable Tailwind's
  // preflight so the visual baseline is preserved 1:1.
  corePlugins: { preflight: false },
  plugins: [],
};

export default config;
