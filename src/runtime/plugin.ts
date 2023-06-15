import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  console.log(nuxtApp, 'Plugin injected by header-module!')
})
