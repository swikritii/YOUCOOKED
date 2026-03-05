/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary red
        red: {
          primary: '#E8351A',
          light: '#FFEDE9',
          mid: '#FF5733',
          100: '#FFEDE9',
          600: '#E8351A',
        },
        // Primary yellow
        yellow: {
          primary: '#FFB800',
          light: '#FFF8E1',
          mid: '#FFC933',
          100: '#FFF8E1',
          500: '#FFB800',
          600: '#FFC933',
        },
        // Background and text
        bg: {
          warm: '#FFFAF5',
        },
        text: {
          heading: '#1A0A00',
          body: '#5C2D00',
          muted: '#A07050',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
      backgroundColor: {
        primary: '#FFFAF5',
      },
    },
  },
  plugins: [],
}
