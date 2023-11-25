<script lang="ts">
	import type { RouteItem } from 'src/app';
	import DockItem from './DockItem.svelte';
	import { page } from '$app/stores';
	import Icon from '../basics/Icon.svelte';
	import { sidebarCollapsed } from '../../store';

	export let data: RouteItem[];
	let current = data.find((item) => item.position === 1) as RouteItem;

	$: {
		const slug = $page?.params.category;
		if (slug) {
			const item = data.find((item) => item.path === slug);
			if (item) {
				current = item;
			}
		}
	}

	$: items =
		(current?.items?.sort(
			(a: RouteItem, b: RouteItem) => a.position - b.position
		) as RouteItem[]) || [];

	let innerWidth = 0;
	let innerHeight = 0;

	$: if (current) {
		if (innerWidth < 1200 && innerWidth > 0) {
			$sidebarCollapsed = true;
		} else {
			$sidebarCollapsed = false;
		}
	}
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="wrapper" class:hidden={$sidebarCollapsed}>
	<nav class="side">
		<ul>
			<li>
				{#each items as item}
					<DockItem {item} path={current?.path || ''} />
				{/each}
			</li>
		</ul>
	</nav>
	<div class="drawer-icons">
		{#if $sidebarCollapsed}
			<div
				class="side-drawer"
				on:click={() => {
					$sidebarCollapsed = !$sidebarCollapsed;
				}}
				on:keydown
			>
				<Icon name="square-list" />
			</div>
		{:else}
			<div
				class="side-drawer"
				on:click={() => {
					$sidebarCollapsed = !$sidebarCollapsed;
				}}
				on:keydown
			>
				<Icon name="arrow" style="rotate: 90deg;" />
			</div>
		{/if}
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: row;
		transition: all 0.5s;
	}
	.wrapper:first-of-type.hidden {
		margin-left: -332px;
	}
	.side-drawer {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 72px;
		width: 36px;
		font-size: 18pt;
		color: var(--text-header);
		border-radius: 0 36px 36px 0;
		background-color: rgb(254, 255, 254);
		box-shadow: 0 0 2px 2px rgb(221, 221, 221);
	}
	.drawer-icons {
		position: relative;
		top: 2rem;
		height: 50vh;
		gap: 1rem;
		z-index: 3 !important;
	}
	nav.side {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding: 0.5rem 1rem;
		width: 300px;
		border-right: 1px solid #eaeaea;
		position: sticky;
		top: 70px;
		align-self: start;
		height: calc(100vh - 5rem);
		background: var(--background-l0);
		z-index: 4 !important;
		overflow-y: scroll;
	}
	nav.side::-webkit-scrollbar {
		display: none;
	}

	nav.side ul {
		list-style-type: none;
		padding-inline-start: 0px;
	}

	nav.side li {
		margin: 1rem 0;
	}
	@media (max-width: 1200px) {
		.wrapper {
			position: absolute !important;
			width: 100%;
		}
		.wrapper:first-of-type.hidden {
			margin-left: -100%;
		}
		.drawer-icons {
			position: fixed !important;
			top: 6rem;
			right: 1rem;
			z-index: 5 !important;
		}
		.side-drawer {
			width: 48px !important;
			height: 48px !important;
			border-radius: 100% !important;
			box-shadow: 0 0 2px 2px rgb(221, 221, 221);
		}
		nav.side {
			width: 100% !important;
		}
	}
</style>
