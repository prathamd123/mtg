/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // ✅ Include all relevant file types
  ],
  theme: {
    extend: {
      colors: {
        gold1: '#D4AF37',
        gold2: '#F4E4BC',
        gold3: '#B8860B',
        gold4: ' #FFFFFF',
        gold5: '#BDB151',
        gold6: ' #FFFFFF ',
        
      },
      
    },
    fontFamily: {
      cinzel: ['Cinzel', 'serif'],
      antic: ['"Antic Didone"', 'serif'],
      bellefair: ['Bellefair', 'serif'],
    },
  },
  plugins: [],
}


