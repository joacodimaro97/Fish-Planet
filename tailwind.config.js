/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
      './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
      extend: {}
  },
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'Arial', 'sans-serif'],
      'serif': ['Georgia', 'serif'],
      'mono': ['Monaco', 'monospace'],
      'open' : [ 'Open Sans', 'sans-serif']
    }
  },
  variants: {},
  plugins: []
}


