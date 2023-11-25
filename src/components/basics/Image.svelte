<script lang="ts">
	import ImageViewer from './ImageViewer.svelte';

	export let src: string;
	export let alt = 'An image';

	let displayViewer = false;
</script>

<!-- TODO: Image preview -->

<div>
	<img {src} {alt} />
	<div class="overlay" on:click={() => (displayViewer = true)} on:keydown>
		<span> 👁 Preview </span>
	</div>
</div>

{#if displayViewer}
	<ImageViewer {src} close={() => (displayViewer = false)} />
{/if}
