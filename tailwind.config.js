/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '720px',
        // => @media (min-width: 720px) { ... }
  
        'ipadair': '992px',
        // => @media (min-width: 992px) { ... }
  
        'ipadmini': '768px',
        // => @media (min-width: 768px) { ... }
        'laptop': '1200px',
        // => @media (min-width: 1200px) { ... }
      },
    },
  },
  plugins: [],
}

