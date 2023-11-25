import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import mdPreprocess from './remark.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: {}
		}),
		mdPreprocess()
	],

	kit: {
		adapter: adapter({
			target: 'esnext',
			minify: true,
			logLevel: 'error',
			fallback: '404.html'
		}),
		prerender: {
			enabled: true
		},
		trailingSlash: 'never'
	}
};

export default config;
