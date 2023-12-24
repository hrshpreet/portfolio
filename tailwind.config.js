/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sequel: ['Sequel100', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'black': '#121212',
        'white': '#FAFAFA',
        'aes-blue': '#8DD1DC',
        'aes-blue-50': 'rgba(141, 209, 220, 0.5)', // 50% opacity
        'aes-res': '#F87373',
        'aes-res-50': 'rgba(248, 115, 115, 0.5)', // 50% opacity
        'aes-green': '#6BC547',
        'aes-green-50': 'rgba(107, 197, 71, 0.5)', // 50% opacity
        'aes-orange': '#F8B34C',
        'aes-orange-50': 'rgba(248, 179, 76, 0.5)', // 50% opacity
        'aes-yellow': '#F8E6CC',
        'aes-yellow-50': 'rgba(248, 230, 204, 0.5)', // 50% opacity
      }
    },
  },
  plugins: [],
}

