module.exports = {
  mode: 'jit',
  darkMode: false,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  variants: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ]
}