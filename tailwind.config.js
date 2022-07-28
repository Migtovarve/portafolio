/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        'DS': ['Dancing Script', 'sans-serif']
      },
      scale: {
        '102': '1.02',
      },
    },
    colors: {
      'white': '#ffffff',
      'primary': '#000080',
      'secondary': '#7f7fbf',
      'tertiary':'#e0dfef',
      'html': '#D84924',
      'css': '#006AB1',
      'js': '#ead41c',
      'react': '#5ccfee',
      'redux': '#7046b2',
      'node': '#83ba00',
      'express': '#ffffff',
      'sequelize': '#4ea7db',
      'postgre': '#2e5c8b',
      'bootstrap': '#5a3a7b',
      'tailwind': '#38bdf8',
      'sass': '#c76494',

    },
    maxWidth: {
      '16': '16rem',
    }
  },
  plugins: [],
}
