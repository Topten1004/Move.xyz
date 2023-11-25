import { getTruncatedAddress } from '$utils/getTruncatedAddress';
import { getProvider } from '$functions/web3';
import { browser } from '$app/environment';

export async function ensFromAddress(address: string, truncate = false) {
	if (browser) {
		try {
			const provider = getProvider();
			if (!provider) {
				return truncate ? getTruncatedAddress(address) : address;
			}
			const ens = await provider.lookupAddress(address);
			return ens || (truncate ? getTruncatedAddress(address) : address);
		} catch (error) {
			return truncate ? getTruncatedAddress(address) : address;
		}
	}
}

export async function addressFromEns(ens: string) {
	const provider = getProvider();
	if (!provider) {
		return null;
	}
	try {
		const address = await provider.resolveName(ens);
		return address;
	} catch (error) {
		// Do nothing
	}
}
