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
        montserrat: ['Montserrat','sans-serif'],
      },
      colors: {
        'black': '#121212',
        'white': '#FAFAFA',
        'aes-blue': '#8DD1DC',
        'aes-res': '#F87373',
        'aes-green': '#6BC547',
        'aes-orange': '#F8B34C',
        'aes-yellow': '#F8E6CC',
      }
    },
  },
  plugins: [],
}

