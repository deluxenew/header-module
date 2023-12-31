import { defineNuxtModule, addPlugin, createResolver, addComponent } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'header-module',
    configKey: 'headerModule'
  },
  defaults: {},
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)
    addPlugin(resolver.resolve('./runtime/plugin'))
    nuxt.options.css.push(resolver.resolve('./runtime/main.css'))
    addComponent({
      name: 'HeaderComponent', // name of the component to be used in vue templates
      // export: 'header-component', // (optional) if the component is a named (rather than default) export
      filePath: resolver.resolve('runtime/components/HeaderComponent.vue')
    })

  }
})
