/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
        'sans': ['var(--font-playfair-display)']
    },
    extend: {
      fontFamily: {
        'playfair-display': ['var(--font-playfair-display)']
      }
    },
  },
  plugins: [],
}

