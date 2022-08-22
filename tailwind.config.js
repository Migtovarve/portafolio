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
      colors: {
        'white': '#ffffff',
        'primary': '#000080',
        'secondary': '#62c9da',
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
        'dm-white': 'hsl(0,0%,90%)',
        'dm-black': 'hsl(0,0%,31%)',
        'bg-card-color': 'hsl(0,0%,98%)',
        'bg-card-color-dark': 'hsl(0,0%,20%)',
        
        'az': "#000080",
        'am': "#F8FF00",
        've': "#357D28",
        'ro': "#EC3D22",

        'text-color-lm': '#4f4f4f',
        'bg-color-lm': '#e6e6e6',
        'bg-card-lm': '#fafafa',

        'text-color-dm': '#d4d4d4',
        'bg-color-dm': '#262626',
        'bg-card-dm': 'hsl(0,0%,20%)',
        
      },
      maxWidth: {
        '10': '10rem',
        '18': '18rem',
        '25': '25rem',
      },
      minWidth: {
        '16': '16rem',
        '14': '14rem'
      },
      maxHeight: {
        '25': '25rem',
        '18': '18rem'
      },
      minHeight: {
        '16': '16rem',
        '14': '14rem'
      },
    },
  },
  plugins: [],
}
