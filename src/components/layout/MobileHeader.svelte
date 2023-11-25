<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import ConnectButton from '../basics/ConnectButton.svelte';
	import Icon from '../basics/Icon.svelte';
	import type { RouteItem } from 'src/app';
	import { goto } from '$app/navigation';
	import clickOutsideDirective from '$utils/clickOutside';

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
		showMenu = false;
		goto(historyPath[index]);
	};

	let showMenu = false;

	const closeMenu = () => {
		showMenu = false;
	};
</script>

<svelte:window on:click={handleWindowClick} bind:innerWidth />

<header data-sveltekit-reload="off">
	<div class="navbar--fixed-top">
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
		{#if !showMenu}
			<span
				role="img"
				aria-label="menu"
				on:click={() => {
					showMenu = !showMenu;
				}}
				on:keydown
			>
				<Icon name="hamburger" />
			</span>
		{:else}
			<span role="img" aria-label="menu">
				<Icon name="close" />
			</span>
		{/if}
	</div>

	{#if showMenu}
		<div class="dropdown" use:clickOutsideDirective on:clickOutside={closeMenu}>
			<nav>
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
			</nav>
			<div class="wallet">
				<ConnectButton />
			</div>
		</div>
	{/if}
</header>

<style>
	a {
		cursor: pointer;
		font-weight: 600;
		color: var(--text-primary);
	}

	header {
		z-index: 1;
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: space-between;
		background-color: var(--background-brand-secondary);
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
		width: 100vw;
		position: fixed;
		top: 0;
	}

	nav {
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding-top: 14px;
	}

	span[role='img'] {
		color: var(--text-primary);
		font-size: 20px;
		padding-top: 8px;
		padding-left: 18px;
		margin-top: 1px;
	}

	.navbar--fixed-top {
		position: sticky;
		top: 0px;
		width: 100%;
		z-index: 200;
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: space-between;
		background-color: var(--background-brand-secondary);
		padding: 10px 20px;
	}

	.dropdown {
		position: absolute;
		top: 54px;
		left: 0;
		z-index: 2;
		background-color: var(--background-brand-secondary);
		width: 100%;
		border-bottom: 1px solid var(--stroke-secondary);
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
		margin-top: -24px;
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
		text-align: right;
	}
	.wallet {
		display: flex;
		justify-content: center;
	}

	@media (min-width: 501px) {
		header {
			display: none !important;
		}
	}
</style>
