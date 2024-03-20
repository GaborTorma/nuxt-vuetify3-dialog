export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '../src/module',
    [
      'vuetify-nuxt-module',
      {
        /* vuetifyOptions: {
          labComponents: ['VBottomSheet'],
        }, */
      },
    ],
  ],

  eslint: {
    checker: {
      configType: 'flat', // workaround for https://github.com/nuxt/eslint/issues/338
    },
    config: {
      standalone: false,
    },
  },

  vuetify3Dialog: {
    debug: true,
    verbose: true,
  },

  devtools: { enabled: false },
})
