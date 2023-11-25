<script lang="ts">
	import LeftSidebar from '$components/layout/LeftSidebar.svelte';
	import type { RouteItem } from 'src/app';
	export let data: { docs: RouteItem[] };
</script>

<div class="row">
	<LeftSidebar data={data.docs} />
	<slot />
</div>

<style>
	.row {
		display: flex;
		flex-direction: row;
	}
</style>
