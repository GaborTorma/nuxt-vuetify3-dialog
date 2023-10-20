export default defineNuxtConfig({
	modules: [
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

	vuetify3Dialog: {
		debug: true,
		verbose: true,
	},

	devtools: { enabled: false },
})
