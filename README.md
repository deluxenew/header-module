# Header Module 
## The module components are based on TailwindCss and are created for the Nuxt 3 framework

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

🤯 I apologize for the general availability of this module, this project is used as an experimental one. In the future I will try to make it really necessary and useful. Once again, I apologize for the lost time to study this miracle.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [🏀 Online playground](https://stackblitz.com/github/deluxenew/header-module?file=playground%2Fapp.vue) 
- [📖 &nbsp;Documentation GitHub](https://github.com/deluxenew/header-module) 

## Features

- ⛰ &nbsp;A simple header component for a website on next 3 with auto-import.
- 🚠 &nbsp;4 slots for connecting other components
- 🌲 &nbsp;Adaptive layout

## Quick Setup

1. Add `header-module` dependency to your project

```bash
# Using pnpm
pnpm add -D header-module

# Using yarn
yarn add --dev header-module

# Using npm
npm install --save-dev header-module
```

2. Add `header-module` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'header-module'
  ]
})
```

3. Connecting a component to a project

```html
<header-component>
  <template #logo />
  <template #menu />
  <template #contacts />
  <template #burger />
</header-component>

```

Api for component:
```ts
props: {
  headerClasses: {
      type: String,
      default: "", 
      required: false
  }
}
```

That's it! You can now use My Module in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/header-module/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/header-module

[npm-downloads-src]: https://img.shields.io/npm/dm/header-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/header-module

[license-src]: https://img.shields.io/npm/l/header-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/header-module

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
