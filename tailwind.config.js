/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beauty-beige': '#F5F5DC', // Tu beige
        'beauty-pink': '#FFD1DC',  // Rosa suave
        'gold-accent': '#D4AF37',  // Dorado
        'lily-blue': '#E6E6FA',    // Azul suave tipo lirio
        'luxury-cream': '#FFFDD0',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}