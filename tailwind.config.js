/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
       'primary':'#fe5337',
        'secondary': '#ffbb1a',
      },

      fontFamily: {
        'poppins':['Poppins', 'sans-serif']
      }

    },
  },
  plugins: [],
}

