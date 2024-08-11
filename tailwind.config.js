const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
        flowbite.content(),

  ],
  theme: {
    extend: {

      colors: {

          'neutral':'#e5e5e5',
              //  'slate':'#e2e8f0',
        'lime': '#84cc16',
        'secondary': '#4caf4f',
        'primary':'#f5f7fa',
      }
    },
  },
  plugins: [
    flowbite.plugin(),

  ],
};
