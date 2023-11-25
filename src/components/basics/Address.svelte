<script context="module" lang="ts">
	export function getTruncatedAddress(address: string, a = 6, b = 6) {
		return address && address.startsWith('0x')
			? `${address.slice(0, a)}...${address.slice(-b)}`
			: address;
	}
</script>

<script lang="ts">
	let data: HTMLElement;
	$: if (data) {
		data.innerText = getTruncatedAddress(data?.innerText);
	}
</script>

<div bind:this={data}><slot /></div>
