import { defineNuxtPlugin } from '#app'
import headerComponent from "./components/HeaderComponent.vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("header-component", headerComponent)
})
