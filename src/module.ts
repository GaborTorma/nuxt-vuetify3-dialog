import { addPlugin, createResolver, defineNuxtModule, hasNuxtModule, installModule } from '@nuxt/kit'
import type { PluginOptions } from 'vuetify3-dialog'

// Module options TypeScript interface definition
export interface ModuleOptions extends Omit<PluginOptions, 'vuetify'> {
  debug?: boolean
  verbose?: boolean
}

declare module '@nuxt/schema' {

  interface NuxtConfig {
    vuetify3Dialog?: ModuleOptions
  }

  interface PublicRuntimeConfig {
    vuetify3Dialog: Partial<ModuleOptions>
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-vuetify3-dialog',
    configKey: 'vuetify3Dialog',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {
    debug: false,
  },
  async setup(options, nuxt) {
    const debug = (message: string) =>
      options.debug && console.log(`nuxt-vuetify3-dialog: ${message}`, new Date())
    debug('setup started')
    // check module dependencies
    if (!hasNuxtModule('vuetify-nuxt-module')) {
      if (nuxt.options._prepare)
        await installModule('vuetify-nuxt-module')
      else
        throw new Error('vuetify-nuxt-module module is missing.\n Please use it at the modules section in nuxt.config.ts.')
    }

    nuxt.options.runtimeConfig.public.vuetify3Dialog = options
    if (nuxt.options.ssr) {
      nuxt.options.build.transpile.push('vuetify3-dialog')
      debug('add vuetify3-dialog to transpile')
    }

    if (options.verbose)
      console.log('nuxt-vuetify3-dialog options:', options)

    const resolver = createResolver(import.meta.url)
    addPlugin(resolver.resolve('./runtime/plugin'))
    debug(`vuetify3 dialog plugin added`)
  },
})
