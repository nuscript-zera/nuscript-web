/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: "#F7F8F3",
        ink: "#0D1B1E",
        plasma: "#4CC9F0",
        sage: "#A5A58D",
        background: "var(--bone)",
        foreground: "var(--ink)",
        border: "#E6E7E0",
        input: "#E6E7E0",
        ring: "#4CC9F0",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "ui-serif", "Georgia", "serif"],
        body: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        ui: ["var(--font-ui)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      // Reading/UI text sizes are 1px larger than Tailwind's defaults for readability.
      // Headings (text-2xl and up) keep the default scale.
      fontSize: {
        xs: ["0.8125rem", { lineHeight: "1.125rem" }],  // 13px (default 12)
        sm: ["0.9375rem", { lineHeight: "1.375rem" }],  // 15px (default 14)
        base: ["1.0625rem", { lineHeight: "1.625rem" }], // 17px (default 16)
        lg: ["1.1875rem", { lineHeight: "1.75rem" }],    // 19px (default 18)
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 1px)",
        sm: "calc(var(--radius) - 2px)",
      },
    },
  },
  plugins: [],
};
