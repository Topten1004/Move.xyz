import { sveltekit } from '@sveltejs/kit/vite';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = ({ mode }) => {
	const development = mode === 'development';
	return {
		plugins: [
			sveltekit(),
			development &&
				nodePolyfills({
					include: ['node_modules/**/*.js', new RegExp('node_modules/.vite/.*js')],
					http: true,
					crypto: true
				})
		],
		resolve: {
			alias: {
				$components: path.resolve('./src/components'),
				$constants: path.resolve('./src/constants'),
				$deployments: path.resolve('./src/deployments'),
				$stores: path.resolve('./src/stores'),
				$providers: path.resolve('./src/providers'),
				$functions: path.resolve('./src/functions'),
				$utils: path.resolve('./src/utils'),
				$docs: path.resolve('./src/docs')
			}
		},
		ssr: {
			noExternal: ['@lingui/*', 'lingui-core/*']
		},
		build: {
			target: ['es2020'],
			rollupOptions: {
				plugins: [
					nodePolyfills({
						crypto: true,
						http: true
					})
				]
			},
			commonjsOptions: {
				transformMixedEsModules: true
			}
		}
	};
};

export default config;
