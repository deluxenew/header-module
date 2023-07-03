export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '../src/module'
  ],
  headerModule: {
    test: 1
  },
  tailwindcss: {
    cssPath: '../src/runtime/main.css'
  },
})
