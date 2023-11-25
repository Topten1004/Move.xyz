<script lang="ts">
	import Icon from './Icon.svelte';

	export let onClick: () => void;
	export let info = 'Copied';

	let show = false;

	function handleClick() {
		onClick();
		show = true;
		setTimeout(() => {
			show = false;
		}, 1500);
	}
</script>

<span on:click={handleClick} on:keydown>
	{#if show}
		<span class="slide-top">
			<Icon name="copy" />
			{info}
		</span>
	{/if}
	<span class:clicked={show}>
		<slot />
	</span>
</span>

<style>
	.slide-top {
		font-size: 12px;
		position: absolute;
		animation: slide-top 0.8s linear both;
	}

	.clicked {
		fill-opacity: 0.8;
		transform: scale(0.9);
	}

	@keyframes slide-top {
		0% {
			transform: translateY(-20px);
		}
		100% {
			transform: translateY(-80px);
			opacity: 0;
		}
	}
</style>
