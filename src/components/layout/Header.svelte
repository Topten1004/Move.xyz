<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import ConnectButton from '../basics/ConnectButton.svelte';
	import type { RouteItem } from 'src/app';
	import { goto } from '$app/navigation';

	let theme: string;

	$: switchTheme = theme === 'dark' ? 'light' : 'dark';

	let historyPath: string[];
	$: if (browser) {
		setTimeout(() => (historyPath = JSON.parse(localStorage.getItem('history') as string)), 100);
	}

	export let data: RouteItem[];
	let current = data.find((item) => item.position === 0);
	$: {
		const slug = $page?.params.category;
		if (slug) {
			const item = data.find((item) => item.path === slug);
			if (item) {
				current = item;
			}
		} else {
			current = undefined;
		}
	}
	let buttonElement: HTMLElement;
	let dropdownOpened = false;

	function handleWindowClick(event: MouseEvent) {
		if (dropdownOpened) {
			const target = event.target as HTMLElement;
			if (!buttonElement?.contains(target)) {
				dropdownOpened = false;
			}
		}
	}
	let innerWidth = 0;
	const handleMenuClick = (index: number) => {
		goto(historyPath[index]);
	};
</script>

<svelte:window on:click={handleWindowClick} bind:innerWidth />

<header data-sveltekit-reload="off">
	<nav class="navbar navbar--fixed-top">
		<a href="/" class="navbar__brand">
			<div class="navbar__logo">
				<img
					class="navbar__logo-image"
					src="/images/daolabs/daolabs-logo-default.svg"
					alt="/images/daolabs/daolabs-logo-default.scg"
					width="100"
					height="100"
				/>
			</div>
			<b class="navbar__title text--truncate" />
		</a>
		<div class="navbar__inner">
			<div class="navbar__items">
				{#each data as item, index}
					<div
						class="navbar__item navbar__link"
						class:active={current?.position === item.position}
						on:click={() => handleMenuClick(index)}
						on:keydown
					>
						{item.label}
					</div>
				{/each}
			</div>
			<div class="right">
				<ConnectButton />
			</div>
		</div>
	</nav>
</header>

<style>
	header {
		position: sticky;
		width: 100%;
		z-index: 999;
		top: 0;
	}
	.navbar--fixed-top {
		position: sticky;
		top: 0px;
		z-index: 200;
	}

	.navbar {
		background-color: var(--background-brand-secondary);
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
		display: flex;
		height: 4.2rem;
		padding: 0.5rem 1rem;
	}
	.navbar__inner {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 100%;
	}
	.navbar__items {
		align-items: center;
		display: flex;
		min-width: 0;
	}
	.navbar__brand {
		align-items: center;
		color: var(--text-primary);
		display: flex;
		margin-right: 1rem;
		min-width: 0;
	}
	.navbar__logo {
		flex: 0 0 auto;
		height: 0rem;
		margin-right: 0.5rem;
	}

	.navbar__logo-image {
		width: 100px;
		margin-top: -34px;
	}

	.navbar__title {
		flex: 1 1 auto;
	}

	.text--truncate {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.navbar__link {
		color: var(--text-primary);
		font-weight: 500;
		text-decoration: none;
		transition: color 200ms cubic-bezier(0.08, 0.52, 0.52, 1);
		cursor: pointer;
	}
	.navbar__link.active {
		font-weight: bold;
		color: var(--text-header);
	}
	.navbar__item {
		display: inline-block;
		padding: 0.25rem 0.75rem;
	}

	.right {
		display: flex;
		flex-direction: row;
	}
	* {
		box-sizing: border-box;
	}
	@media screen and (max-width: 500px) {
		header {
			display: none !important;
		}
	}
</style>
