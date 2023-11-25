<script context="module">
	// A good website to find new icons with copy-to-clipboard svg is https://tabler-icons.io/
	import svgs from '$constants/svg';
	export const iconOptions = Object.keys(svgs);
	export const directions = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'];
</script>

<script lang="ts">
	import type { SvgPathType } from 'src/app';
	export let name: keyof typeof svgs;
	export let direction = 'n';
	export let spin = false;
	export let style = '';
	export let viewBox = '64 64 896 896';

	let paths: SvgPathType | undefined = undefined;

	$: {
		paths = svgs[name];
	}
	$: rotation = directions.indexOf(direction) * 45;

	// Aforementioned https://tabler-icons.io adhere to the props below, so do https://feathericons.com/
	const sensibleProps = {
		fill: 'none',
		viewBox: '0 0 24 24',
		stroke: 'currentColor',
		'stroke-width': '2',
		'stroke-linecap': 'round',
		'stroke-linejoin': 'round'
	};
</script>

{#if Array.isArray(paths)}
	<svg
		{...$$restProps}
		class="antd"
		on:click
		class:spin
		width="1em"
		height="1em"
		{viewBox}
		focusable="false"
		aria-hidden="true"
		style="{rotation !== 0 ? `transform: rotate(${rotation}deg);` : ''}{style}"
	>
		>
		{#each paths as path}
			<path d={path} />
		{/each}</svg
	>
{:else if typeof paths === 'object'}
	<svg
		width="1em"
		height="1em"
		{...paths.sensible ? sensibleProps : {}}
		{...paths.svg || {}}
		{...$$restProps}
		style="{paths.svg.style || ''} {style}"
		xmlns="http://www.w3.org/2000/svg"
	>
		{#if paths.markup}
			<g>
				{@html paths.markup}
			</g>
		{:else if paths.paths}
			{#each paths.paths as path}
				<path d={path} />
			{/each}
		{/if}
	</svg>
{/if}

<style>
	svg {
		z-index: 0;
		fill: currentColor;
		transition: all 0.3s ease-out;
		overflow: visible;
	}

	/* A class that spins the icon */
	.spin {
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.antd {
		margin-right: 2px;
	}
</style>
