module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        synapse: {
          DEFAULT: '#6BA7AC', // main blue/teal from logo
          light: '#B7D6D9',  // lighter tint
          dark: '#3B6B6E',   // darker shade
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
