import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import type { PluginOptions } from 'vuetify3-dialog'

// Module options TypeScript interface definition
export interface ModuleOptions extends Omit<PluginOptions, 'vuetify'> {
	debug?: boolean
	verbose?: boolean
}

declare module '@nuxt/schema' {
	// eslint-disable-next-line no-unused-vars
	interface NuxtConfig {
		vuetify3Dialog?: ModuleOptions
	}
	// eslint-disable-next-line no-unused-vars
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
	setup(options, nuxt) {
		const debug = (message: string) =>
			options.debug && console.log(`nuxt-vuetify3-dialog: ${message}`, new Date())
		debug('setup started')

		nuxt.options.runtimeConfig.public.vuetify3Dialog = options
		if (nuxt.options.ssr) {
			nuxt.options.build.transpile.push('vuetify3-dialog')
			debug('add vuetify3-dialog to transpile')
		}

		if (options.verbose) {
			console.log('nuxt-vuetify3-dialog options:', options)
		}

		const resolver = createResolver(import.meta.url)
		addPlugin(resolver.resolve('./runtime/plugin'))
		debug(`vuetify3 dialog plugin added`)
	},
})
