import { blocknativeNetworks } from '$constants/networks';

export function getNetworkAliasByChainId(chainId: string | number) {
	const network = blocknativeNetworks.find((n) => Number(n.id) === Number(chainId));
	return network ? network.alias : 'unknown';
}

export function setNetworkAliasInQueryParams(alias: string) {
	let changed = false;
	const newUrl = window.location.href.replace(/network=\w*/g, () => {
		changed = true;
		return alias ? `network=${alias}` : '';
	});
	const queryExists = !!newUrl.match(/\?/);
	history.replaceState(
		null,
		'',
		`${
			changed
				? newUrl
				: queryExists
				? `${window.location.href}&` + (alias ? `network=${alias}` : '')
				: `${window.location.href}?` + (alias ? `network=${alias}` : '')
		}`
	);
}
