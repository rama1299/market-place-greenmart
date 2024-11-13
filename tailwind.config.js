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
        'warning': '#FF8A00',
        'danger': '#EA4B48',
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
      fontSize: {
          'd1': '4.5rem',
          'h1': '3.5rem',
          'h2': '3rem',
          'h3': '2.5rem', 
          'h4': '2.25rem', 
          'h5': '2rem',  
          'xxl': '1.5rem',  
          'xl': '1.25rem', 
          'lg': '1.125rem',   
          'md': '1rem',   
          'sm': '0.875rem', 
          'xs': '0.75rem',
      },
      fontWeight: {
        400: 400,
        500: 500,
        600: 600,
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.d1-400': { fontSize: '4.5rem', fontWeight: '400' },
        '.d1-600': { fontSize: '4.5rem', fontWeight: '600' },
    
        '.h1-400': { fontSize: '3.5rem', fontWeight: '400' },
        '.h2-400': { fontSize: '3rem', fontWeight: '400' },
        '.h3-400': { fontSize: '2.5rem', fontWeight: '400' },
        '.h4-400': { fontSize: '2.25rem', fontWeight: '400' },
        '.h5-400': { fontSize: '2rem', fontWeight: '400' },
    
        '.h1-600': { fontSize: '3.5rem', fontWeight: '600' },
        '.h2-600': { fontSize: '3rem', fontWeight: '600' },
        '.h3-600': { fontSize: '2.5rem', fontWeight: '600' },
        '.h4-600': { fontSize: '2.25rem', fontWeight: '600' },
        '.h5-600': { fontSize: '2rem', fontWeight: '600' },
    
        '.xxl-400': { fontSize: '1.5rem', fontWeight: '400' },
        '.xl-400': { fontSize: '1.25rem', fontWeight: '400' },
        '.lg-400': { fontSize: '1.125rem', fontWeight: '400' },
        '.md-400': { fontSize: '1rem', fontWeight: '400' },
        '.sm-400': { fontSize: '0.875rem', fontWeight: '400' },
        '.xs-400': { fontSize: '0.75rem', fontWeight: '400' },
    
        '.xxl-500': { fontSize: '1.5rem', fontWeight: '500' },
        '.xl-500': { fontSize: '1.25rem', fontWeight: '500' },
        '.lg-500': { fontSize: '1.125rem', fontWeight: '500' },
        '.md-500': { fontSize: '1rem', fontWeight: '500' },
        '.sm-500': { fontSize: '0.875rem', fontWeight: '500' },
        '.xs-500': { fontSize: '0.75rem', fontWeight: '500' },
    
        '.xxl-600': { fontSize: '1.5rem', fontWeight: '600' },
        '.xl-600': { fontSize: '1.25rem', fontWeight: '600' },
        '.lg-600': { fontSize: '1.125rem', fontWeight: '600' },
        '.md-600': { fontSize: '1rem', fontWeight: '600' },
        '.sm-600': { fontSize: '0.875rem', fontWeight: '600' },
        '.xs-600': { fontSize: '0.75rem', fontWeight: '600' },
      });
    },
    
  ],
};
