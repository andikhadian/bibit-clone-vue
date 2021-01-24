const colors = {
  'gray': '#F9F9F9',
  'gray-darker': '#949494',
  'gray-lighter': '#EDEDED',
  'gray-lightest': '#515151',
  'green': '#00AB6A',
  'black': '#000000',
  'black-lighter': '#333333',
  'white': '#FFFFFF',
}
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fonts: {
      'sans': 'Inter UI'
    },
    colors,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
