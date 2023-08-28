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
        'bannerImage': "url('./assets/images/banner.jpg')",
        'servicesImage': "url('./assets/images/services1.jpg')",
        'servicesImage2': "url('./assets/images/services2.jpg')",
        'servicesImage3': "url('./assets/images/services3.jpg')",
        'company': "url('./assets/images/company.jpg')",
        'blog1': "url('./assets/images/blog1.jpg')",
        'blog2': "url('./assets/images/blog2.jpg')",
        'blog3': "url('./assets/images/blog3.jpg')",
      }
    },
  },
  plugins: [],
}