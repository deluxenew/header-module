import { defineNuxtModule, addPlugin, createResolver, addComponent } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'header-module',
    configKey: 'headerModule'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup (options, nuxt) {

    const resolver = createResolver(import.meta.url)
    addComponent({
      name: 'HeaderComponent', // name of the component to be used in vue templates
      export: 'HeaderComponent', // (optional) if the component is a named (rather than default) export
      filePath: resolver.resolve('runtime/components/HeaderComponent.vue')
    })
    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
  }
})
