export function coinbaseWallet({ darkMode = false } = {}) {
	return () => ({
		label: 'Coinbase',
		getIcon:
			async () => `<svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
		  <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#1652F0"/>
		  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.45508 20.0006C5.45508 28.0338 11.9673 34.546 20.0006 34.546C28.0338 34.546 34.546 28.0338 34.546 20.0006C34.546 11.9673 28.0338 5.45508 20.0006 5.45508C11.9673 5.45508 5.45508 11.9673 5.45508 20.0006ZM17.3137 15.3145C16.2091 15.3145 15.3137 16.2099 15.3137 17.3145V22.6882C15.3137 23.7928 16.2091 24.6882 17.3137 24.6882H22.6874C23.792 24.6882 24.6874 23.7928 24.6874 22.6882V17.3145C24.6874 16.2099 23.792 15.3145 22.6874 15.3145H17.3137Z" fill="white"/>
		</svg>`,
		getInterface: async ({ chains, appMetadata }) => {
			const [chain] = chains;
			const { name, icon } = appMetadata || {};
			const { CoinbaseWalletSDK } = await import('@coinbase/wallet-sdk');
			const base64 = window.btoa(icon || '');
			const appLogoUrl = `data:image/svg+xml;base64,${base64}`;
			const instance = new CoinbaseWalletSDK({
				appName: name || '',
				appLogoUrl,
				darkMode
			});
			const coinbaseWalletProvider = instance.makeWeb3Provider(chain.rpcUrl, parseInt(chain.id));
			// patch the chainChanged event
			const on = coinbaseWalletProvider.on.bind(coinbaseWalletProvider);
			coinbaseWalletProvider.on = (event, listener) => {
				on(event, (val) => {
					if (event === 'chainChanged') {
						listener(`0x${val.toString(16)}`);
						return;
					}
					listener(val);
				});
				return coinbaseWalletProvider;
			};
			return {
				provider: coinbaseWalletProvider,
				instance
			};
		}
	});
}

export function gnosis(options) {
	const { whitelistedDomains = [/gnosis-safe.io/] } = options || {};
	return () => {
		// const loadedInIframe = window.self !== window.top;
		return {
			label: 'Gnosis Safe',
			getIcon:
				async () => `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 440 440">
					<path d="M220,9.82C103.92,9.82,9.82,103.92,9.82,220S103.92,430.18,220,430.18,430.18,336.08,430.18,220,336.08,9.82,220,9.82ZM373.83,231.47H276.3a59.41,59.41,0,1,1,.45-20.67h97.08a10.34,10.34,0,1,1,0,20.67Z"/>
				</svg>`,
			getInterface: async () => {
				const { default: SafeAppsSDK } = await import('@gnosis.pm/safe-apps-sdk');
				const { SafeAppProvider } = await import('@gnosis.pm/safe-apps-provider');
				const { createEIP1193Provider } = await import('@web3-onboard/common');
				const sdk = SafeAppsSDK;
				const SafeAppProviderConstructor: typeof SafeAppsSDK = sdk.default || sdk;
				const opts = {
					allowedDomains: whitelistedDomains
				};
				const appsSdk = new SafeAppProviderConstructor(opts);
				const safe = await Promise.race([
					appsSdk.safe.getInfo(),
					new Promise((resolve) => setTimeout(resolve, 200))
				]);
				if (!safe) {
					throw new Error(
						`App must be loaded in a Safe App context, head to <a href="https://gnosis-safe.io/app">the Gnosis Safe App<a/> and open this website as an app.`
					);
				}
				const provider = new SafeAppProvider(safe, appsSdk);
				const patchedProvider = createEIP1193Provider(provider, {
					eth_requestAccounts: () => Promise.resolve([safe.safeAddress])
				});
				return {
					provider: patchedProvider,
					instance: appsSdk
				};
			}
		};
	};
}
