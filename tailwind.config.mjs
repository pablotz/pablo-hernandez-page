const defaultTheme = require("tailwindcss/defaultTheme");
// /** @type {import('tailwindcss').Config} */
// export default {
// 	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
// 	theme: {
// 		extend: {},
// 	},
// 	plugins: [],
// }

// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  // ...
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist Sans", ...defaultTheme.fontFamily.mono],
        mono: ["Geist Mono", ...defaultTheme.fontFamily.mono],
      },
      screens: {
        'sm': '390px',
        
      },
      colors: {
        red: "#E84856"
      }
    },
  },
  // ...
};
