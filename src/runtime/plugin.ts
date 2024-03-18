import { Vuetify3Dialog } from 'vuetify3-dialog'
import { defineNuxtPlugin, useNuxtApp } from '#app'

export default defineNuxtPlugin({
  name: 'nuxt-vuetify3-dialog-plugin',
  hooks: {
    'vuetify:ready'(vuetify) {
      const nuxtApp = useNuxtApp()
      const config = nuxtApp.$config.public?.vuetify3Dialog

      const Vuetify3DialogOptions = {
        vuetify,
        ...config,
      }
      delete Vuetify3DialogOptions.debug
      delete Vuetify3DialogOptions.verbose
      nuxtApp.vueApp.use(Vuetify3Dialog, Vuetify3DialogOptions)
    },
  },
})
