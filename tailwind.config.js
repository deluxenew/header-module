module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/*.vue",
    "./pages/**/*.vue",
    "./widgets/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{ts,js}",
  ],
  theme: {
    extend: {

    },
  },
  plugins: [
    require('flowbite'),
  ],
}
