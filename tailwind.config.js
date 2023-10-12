/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      '2xl':{'max':'1920px'},
      'xl':{'max':'1440px'},
      'lg':{'max':'1260px'},
      'md':{'max':'810px'},
      'sm':{'max':'425px'},
    },
    flex: {
        '2': '2 2 0%'
      },
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}