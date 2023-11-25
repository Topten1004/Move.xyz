<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$components/layout/Header.svelte';
	import MobileHeader from '$components/layout/MobileHeader.svelte';
	import OnboardProvider from '$providers/OnboardProvider.svelte';
	import type { RouteItem } from 'src/app';

	export let data: { docs: RouteItem[] };

	onMount(() => {
		const historyPath = localStorage.getItem('history');
		if (!historyPath && data.docs.length > 0) {
			const historyPathList: string[] = [];
			data.docs.map((doc: RouteItem) => {
				historyPathList.push('/' + doc.path + '/intro/README.md');
			});
			localStorage.setItem('history', JSON.stringify(historyPathList));
		}
	});
</script>

<svelte:head>
	<!-- twitter card tags additive with the og: tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="DAOLABS LEGAL-TOOL" />
	<meta name="twitter:domain" content="daolabs.wtf" />
	<meta
		name="twitter:description"
		content="High-level feature overview for Juicebox.wtf and documentation for DAOLABS extensions, applications and unique features."
	/>
	<meta
		name="twitter:image"
		content="https://jbx.mypinata.cloud/ipfs/QmQYomY5sFvG96FKy3BKFU7mmcSiJsRjSHURmJSMPHrALJ"
	/>
	<meta name="twitter:url" content="https://daolabs.wtf/" />
</svelte:head>

<OnboardProvider>
	<Header data={data.docs} />
	<slot />
	<MobileHeader data={data.docs} />
</OnboardProvider>
