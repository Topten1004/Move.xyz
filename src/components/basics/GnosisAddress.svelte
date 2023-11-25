<script lang="ts">
	import axios from 'axios';

	export let address: string;

	interface ApiResponse {
		address: string;
		fallbackHandler: string;
		guard: string;
		masterCopy: string;
		modules: [];
		nonce: number;
		owners: string[];
		length: number;
		threshold: number;
		version: string;
	}

	let isGnosis = false;
	let gnosisAddress: string;
	let owners: string[];
	let threshold: number;
	let mastercopy: string;
	let pendingTransactions: any[] = [];

	const CACHE_KEY = 'gnosis_check';

	// eslint-disable-next-line no-undef
	function setGet(data?: any): Record<string, ApiResponse> {
		const version = '1';
		if (data) {
			localStorage.setItem(CACHE_KEY, JSON.stringify({ ...data, _version: version }));
		}
		const result = JSON.parse(localStorage.getItem(CACHE_KEY) || '{}');
		if (result._version === version) {
			// eslint-disable-next-line no-undef
			return result as Record<string, ApiResponse>;
		}
		localStorage.removeItem(CACHE_KEY);
		return {};
	}

	async function getGnosisData() {
		const { data, status } = await axios.get(
			`${import.meta.env.VITE_FIREBASE_FUNCTIONS_URL as string}/app/gnosis/check/${address}`,
			{
				headers: {
					apikey: import.meta.env.VITE_API_KEY as string
				}
			}
		);

		const { data: data2 } = await axios.get(
			`${import.meta.env.VITE_FIREBASE_FUNCTIONS_URL as string}/app/gnosis/txns/${address}/pending`,
			{
				headers: {
					apikey: import.meta.env.VITE_API_KEY as string
				}
			}
		);
		return {
			data: { ...data, pendingTransactions: data2.pendingTransactions },
			status
		};
	}

	async function checkAddressInfo(_address: string) {
		const cachedResult = setGet()[_address?.toLowerCase()];
		const { data, status }: { data: any; status: number } =
			typeof cachedResult === 'object'
				? { data: cachedResult, status: 200 }
				: await getGnosisData();
		if (status < 400) {
			isGnosis = true;
			gnosisAddress = _address;
			mastercopy = data.masterCopy;
			owners = data.owners;
			threshold = data.threshold;
			pendingTransactions = data?.pendingTransactions || [];
			if (typeof cachedResult !== 'object') {
				setGet({ ...setGet(), [_address?.toLowerCase()]: data });
			}
		} else {
			setGet({ ...setGet(), [_address?.toLowerCase()]: {} });
		}
	}

	$: {
		if (address) {
			checkAddressInfo(address).catch((e) => console.log(e));
		}
	}
</script>

<slot {gnosisAddress} {owners} {threshold} {mastercopy} {pendingTransactions} {isGnosis} />
{#if isGnosis}
	<slot name="gnosis" {gnosisAddress} {owners} {threshold} {mastercopy} {pendingTransactions} />
{:else}
	<slot name="not-gnosis" />
{/if}
