/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"  // <--- ESTO DEBE SER EXACTO
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#3b82f6',
          dark: '#1a1a1a',
          card: '#262626',
        }
      },
    },
  },
  plugins: [],
}