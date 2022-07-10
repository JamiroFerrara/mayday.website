module.exports = {
  mode: 'jit',
  darkMode: false,
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  variants: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ]
}