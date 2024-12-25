export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ffffff',
          dark: '#000000',
        },
        secondary: {
          light: '#f8f8f8',
          dark: '#1a1a1a',
        },
        accent: {
          light: '#ff0000',
          dark: '#646cff',
        },
        highlight: {
          light: '#ffd700',
          dark: '#61dafb',
        }
      },
      backgroundImage: {
        'gradient-pattern': {
          light: 'linear-gradient(to right, rgba(255, 0, 0, 0.1), rgba(255, 215, 0, 0.1))',
          dark: 'linear-gradient(to right, rgba(100, 108, 255, 0.1), rgba(97, 218, 251, 0.1))',
        }
      }
    },
  },
  plugins: [],
}