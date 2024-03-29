# Nuxt Vuetify3 Dialog module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]
[![code style][code-style-src]][code-style-href]

Nuxt module for implementing [vuetify3-dialog](https://github.com/ThomasLeconte/vuetify3-dialog)

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [🏀 Online playground](https://stackblitz.com/github/gabortorma/nuxt-vuetify3-dialog)

## Features

Lite module working with Vuetify, allowing you to show dialogs or snackbars programatically.

See the original plugin [vuetify3-dialog](https://github.com/ThomasLeconte/vuetify3-dialog)

## Quick Setup

1. Add `nuxt-veutify3-dialog` dependency to your project

```bash
# Using pnpm
pnpm add -D @gabortorma/nuxt-vuetify3-dialog

# Using yarn
yarn add --dev @gabortorma/nuxt-vuetify3-dialog

# Using npm
npm install --save-dev @gabortorma/nuxt-vuetify3-dialog
```

2. Add `@gabortorma/nuxt-vuetify3-dialog` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ['@gabortorma/nuxt-vuetify3-dialog', 'vuetify-nuxt-module'],
  vuetifyDialog: {
    defaults: {
      // You can pass default options for dialogs, dialog's card, snackbars or bottom-sheets here
    },
    debug: true, // default: false
    verbose: true, // default: false
  },
})
```

That's it! You can now use Vuetify3 Dialog Module in your Nuxt app ✨

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

[npm-version-src]: https://img.shields.io/npm/v/@gabortorma/nuxt-vuetify3-dialog/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@gabortorma/nuxt-vuetify3-dialog
[npm-downloads-src]: https://img.shields.io/npm/dm/@gabortorma/nuxt-vuetify3-dialog.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@gabortorma/nuxt-vuetify3-dialog
[license-src]: https://img.shields.io/npm/l/@gabortorma/nuxt-vuetify3-dialog.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@gabortorma/nuxt-vuetify3-dialog
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
[code-style-src]: https://antfu.me/badge-code-style.svg
[code-style-href]: https://github.com/antfu/eslint-config
