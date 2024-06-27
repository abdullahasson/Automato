/** @type {import('tailwindcss').Config} */
// import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        c: {
          1: "#b3202c", /*--Primary: #b3202c;*/
          2: "#32965d", /* --Accent: #32965d;*/
          3: "#22181c", /* --Dark-Neutral: #22181c;*/
          4: "#f6e8ea", /* --Light-Neutral: #f6e8ea;*/
          5: "#3d3b8e", /* --Secondary-one: #3d3b8e;*/
          6: "#279af1", /* --Secondary-two: #279af1;*/
        },
        stroke: {
          1: "#26242C",
        },
        n: {
          1: "#b3202c", /*--Primary: #b3202c;*/
          2: "#32965d", /* --Accent: #32965d;*/
          3: "#22181c", /* --Dark-Neutral: #22181c;*/
          4: "#f6e8ea", /* --Light-Neutral: #f6e8ea;*/
          5: "#3d3b8e", /* --Secondary-one: #3d3b8e;*/
          6: "#279af1", /* --Secondary-two: #279af1;*/
        },
      },
      fontFamily: {
        sans: ['Cairo', 'Poppins', 'sans-serif'],
      },
      letterSpacing: {
        tagline: ".15em",
      },

    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents }) {
      addBase({});
      addComponents({
        "*": {
          "@apply box-border no-underline m-0 p-0 border-[none]": {},
        },

        "html": {
          "@apply scroll-smooth text-[62.5%]": {},
        },

        "::-webkit-scrollbar": {
          "@apply bg-n-1 w-2": {},
        },

        "::-webkit-scrollbar-thumb": {
          "@apply bg-n-4": {},
        },

        "body": {
          "@apply bg-gradient-to-tl from-n-1 to-n-3 overflow-x-hidden": {},
        },

        ".container": {
          "@apply mx-auto px-[15px] md:w-[750px] min-[992px]:w-[970px] min-[1200px]:w-[1170px]":
            {},
        },

        ".activeLink": {
          "@apply border-b-2 border-n-4": {},
        }
      });
    }),
  ],
  important: true,
};