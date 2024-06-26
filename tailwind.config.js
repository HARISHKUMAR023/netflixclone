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
        'netflix': '#000',
        'btn-primary':'#E50914',
        'border-primary':'rgba(128,128,128,0.7)'
      },
    },
  },
  plugins: [],
};
