<script lang="ts">
	import { onMount } from 'svelte';
	import { initialize } from '$functions/web3';
	onMount(() => void initialize());
</script>

<slot />
