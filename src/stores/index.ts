import { browser } from '$app/environment';
import Store from '$utils/Store';
import { derived } from 'svelte/store';

export const darkMode = new Store(browser ? localStorage.getItem('DARK_MODE') === 'true' : false);
export const modal = new Store();

if (browser) {
	darkMode.subscribe((value: string) => localStorage.setItem('DARK_MODE', JSON.stringify(value)));
}

export const pageReady = new Store<Record<string, boolean>>({
	web3: false
});

export const isPageReady = derived(pageReady, ($pageReady) => {
	let ready = true;
	for (const key in $pageReady) {
		ready = ready && !!$pageReady[key];
	}
	return ready;
});

export function whenPageReady() {
	return new Promise((r) => {
		const unsub = isPageReady.subscribe((state) => {
			if (state) {
				r(true);
				unsub();
			}
		});
	});
}
