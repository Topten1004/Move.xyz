<script lang="ts">
	import type { RouteItem } from 'src/app';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	export let item: RouteItem | string;
	export let path: string;

	let isActive = false;

	function getPresentable(str: string) {
		return str
			.replace(/\.[^.]+$/, '')
			.replaceAll('-', ' ')
			.replace(/^\w/, (c) => c.toUpperCase());
	}

	function isDateNumber(str: string) {
		const re = /[0-9-_\/,]{8,10}/gm;
		return str.replace(/\.[^.]+$/, '').match(re);
	}

	$: if (item.leaf && !item.label && isDateNumber(item.leaf)) {
		const title = getPresentable(item.leaf);
		const label = title.match(/^\d+$/)
			? new Date(title.slice(0, 4), title.slice(4, 6) - 1, title.slice(6, 8)).toLocaleDateString(
					'default',
					{ year: 'numeric', month: 'long', day: 'numeric' }
			  )
			: new Date(title.slice(0, 4), title.slice(5, 7) - 1, title.slice(8, 10)).toLocaleDateString(
					'default',
					{ year: 'numeric', month: 'long', day: 'numeric' }
			  );
		item.label = label;
	}

	$: {
		isActive = `${$page.params.category}/${$page.params.catchall}` === `${path}/${item.leaf}`;
	}

	$: children = [...(item.items || []), ...(item.leaves || [])].sort(
		(a, b) => Number(a.position) - Number(b.position)
	);
</script>

{#if item.leaf === 'README.md' || item.leaf?.endsWith('.info.md')}
	<!-- do nothing -->
{:else if item.leaf}
	<a
		class="leaf"
		href="/{path}/{item.leaf}"
		class:active={isActive}
		on:click={() => (isActive = true)}>{item.label ? item.label : getPresentable(item.leaf)}</a
	>
{:else}
	<details open={$page.params.catchall.includes(item.path)}>
		<summary class:active={$page.params.catchall.includes(item.path)}>
			{#if item.hasRootDoc}
				<a
					href="/{path}/{item.path}/README.md"
					on:click|stopPropagation|preventDefault={() => goto(`/${path}/${item.path}/README.md`)}
				>
					{item.label}
				</a>
			{:else}
				<div on:click|stopPropagation on:keydown>{item.label}</div>
			{/if}
			<span class="icon">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					transform="rotate(270)"
				>
					<path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" fill="#979798" />
					<path d="M0-.75h24v24H0z" fill="none" />
				</svg>
			</span>
		</summary>
		{#each children as child}
			<svelte:self item={child} path="{path}/{item.path}" />
		{/each}
	</details>
{/if}

<style>
	details {
		user-select: none;
		display: flex;
		margin-bottom: 1rem;
	}

	details > summary span.icon {
		width: 24px;
		height: 24px;
		transition: all 0.3s;
		margin-left: auto;
		color: white;
	}

	details[open] > summary span.icon {
		transform: rotate(90deg);
	}

	:global(details details) {
		margin-left: 1rem;
		margin-bottom: 0 !important;
	}

	/* details[open] only direct summary descendent */

	summary {
		display: flex;
		cursor: pointer;
	}

	summary::-webkit-details-marker {
		display: none;
	}

	a {
		text-decoration: none;
	}

	a.leaf {
		margin-left: 1rem;
		padding: 5px;
	}

	.active {
		font-weight: 700;
		color: var(--text-header);
	}
	a.active,
	a:hover {
		background-color: var(--background-l1);
		border-radius: 5px;
	}
</style>
