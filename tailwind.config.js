/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary': '#00B207',
        'primary-hard': '#2C742F',
        'primary-soft': '#84D187',
        'pr-gray': {
          '50': '#EDF2EE',
          '100': '#DAE5DA',
          '200': '#B4CCB4',
          '300': '#96B297',
          '400': '#7A997C',
          '500': '#618062',
          '600': '#406B42',
          '700': '#2B572E',
          '800': '#173B1A',
          '900': '#002603',
        },
        'sc-gray': {
          '50': '#F2F2F2',
          '100': '#E6E6E6',
          '200': '#CCCCCC',
          '300': '#B3B3B3',
          '400': '#999999',
          '500': '#808080',
          '600': '#666666',
          '700': '#4D4D4D',
          '800': '#333333',
          '900': '#1A1A1A',
        },
      },
    },
  },
  plugins: [],
};
