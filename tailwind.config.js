/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'backg': "url('./src/assets/Untitled design.png')",
      },
      clipPath: {
        'slant-right': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.clip-slant-right': {
          clipPath: 'polygon(4% 0, 100% 0, 100% 100%, 0 100%)',
        },
      };

      addUtilities(newUtilities);
    },
  ],
}