/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'base': {
          deep: '#1F2228',
          semideep: '#323741',
          normal: '#3A3F4B',
          semilight: '#8B8D8F',
          light: '#BABCBF'
        },
        'primary': {
          deep: '#061C46',
          normal: '#185BE2',
          semideep: '#0E3584',
        },
      },
    },
  },
  extend: {}
}