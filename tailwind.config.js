/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ['./(app|src)/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['var(--font-space-grotesk)'],
      },
    },
  },
  plugins: [],
};
