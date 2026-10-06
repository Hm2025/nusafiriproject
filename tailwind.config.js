/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nusafiri-cream': '#FAF8F5',
        'nusafiri-warm': '#F5F0EB',
        'nusafiri-charcoal': '#1A1A1A',
        'nusafiri-gold': '#C9A96E',
        'nusafiri-gold-light': '#D4B87A',
        'nusafiri-muted': '#8A8A8A',
        'nusafiri-border': '#E5E0DA',
      },
      fontFamily: {
        'display': ['"Bricolage Grotesque"', 'sans-serif'],
        'script': ['"Allura"', 'cursive'],
        'hero': ['"Birthstone Bounce"', 'cursive'],
        'hero-script': ['"Great Vibes"', 'cursive'],
        'body': ['"Montserrat"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
        'widest-2xl': '0.35em',
      },
    },
  },
  plugins: [],
}
