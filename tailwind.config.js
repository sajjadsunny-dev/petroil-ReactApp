/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F40404',
        'overlay': '#00000099',
        'borderColor': '#FFB800'
      },
      maxWidth: {
        'container': '1144px',
      },
      fontFamily: {
        'pops': ['Poppins', 'sans-serif']
      },
      transitionTimingFunction: {
        'myTrans': 'all liner .4s'
      },
      backgroundImage: {
        'bannerImage': "url('./images/banner.jpg')",
        'servicesImage': "url('./images/services1.jpg')",
        'servicesImage2': "url('./images/services2.jpg')",
        'servicesImage3': "url('./images/services3.jpg')",
        'company': "url('./images/company.jpg')",
        'blog1': "url('./images/blog1.jpg')",
        'blog2': "url('./images/blog2.jpg')",
        'blog3': "url('./images/blog3.jpg')",
      }
    },
  },
  plugins: [],
}