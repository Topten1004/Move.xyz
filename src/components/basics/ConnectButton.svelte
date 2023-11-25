<script lang="ts">
	import Button from './Button.svelte';
	import {
		connectedAccount,
		web3Connect,
		web3Disconnect,
		getSupportedNetworks,
		switchNetwork,
		chainId,
		readNetwork,
		alchemyProvider
	} from '$functions/web3';
	import Icon from './Icon.svelte';
	import EnsOrAddress from './EnsOrAddress.svelte';
	import EthAmount from './ETHAmount.svelte';
	import type { BigNumber } from 'ethers';
	import { goto } from '$app/navigation';

	let buttonElement: HTMLElement;
	let opened = false;
	let selectingNetwork = false;
	let address: string;
	let ethBalancePromise: Promise<BigNumber> | undefined;

	connectedAccount.subscribe((account) => {
		address = account;
	});

	function windowClick(event: MouseEvent) {
		const target = event.target as HTMLElement;
		if (!buttonElement?.contains(target)) {
			opened = false;
		}
	}

	$: if ($readNetwork && address) {
		ethBalancePromise = alchemyProvider()?.getBalance(address);
	}

	$: showNetworks = opened ? selectingNetwork : false;
</script>

<svelte:window on:click={windowClick} />

{#if address}
	<div bind:this={buttonElement} style="position: relative;">
		<div
			style="height: 45px; border-radius: 2px; padding: 4px 19px 7px; display: flex; flex-direction: column; align-items: center; background: var(--background-l2);  user-select:none;cursor: pointer"
			on:click={() => {
				opened = !opened;
			}}
			on:keydown
		>
			<span style="line-height: 22px;">
				<EnsOrAddress {address} showTooltip={false} />
			</span>
			<div style="vertical-align: middle; line-height: 1; color: var(--text-tertiary);">
				{#await ethBalancePromise}
					<Icon name="loading" spin />
				{:then amount}
					<EthAmount {amount} precision={2} />
				{/await}
			</div>
		</div>
		{#if opened}
			<div style="position: absolute; top: 50px; left: 0px; width: 100%; user-select: none;">
				<div class="ant-dropdown" style="padding: 0px; min-width: 164px; left: 0; top: 0;">
					<ul class="ant-dropdown-menu" role="menu" tabindex="0" data-menu-list="true">
						<li
							class="ant-dropdown-menu-item"
							role="menuitem"
							tabindex="-1"
							data-menu-id="rc-menu-uuid-56979-2-0"
							style="padding: 10px 15px;"
						>
							<span class="ant-dropdown-menu-title-content">
								<a
									class="hover-action"
									href="https://etherscan.io/address/{address}"
									target="_blank"
									rel="noopener noreferrer"
									style="font-weight: 400;">{address.slice(0, 6)}...{address.slice(-4)}</a
								>
								<span role="img" aria-label="copy" tabindex="-1" style="padding-left: 14px;">
									<Icon name="copy" />
								</span>
							</span>
						</li>
						{#if address}
							<li
								class="ant-dropdown-menu-item"
								role="menuitem"
								tabindex="-1"
								data-menu-id="rc-menu-uuid-56979-2-1"
								style="padding: 10px 15px; color: var(--text-primary) display: flex; justify-content: space-between;"
							>
								<a
									href="/history"
									class="ant-dropdown-menu-title-content my-projects-link"
									rel="external"
									on:click|preventDefault={() => {
										opened = false;
										goto('/history');
									}}
								>
									My Documents
									<span role="img" aria-label="logout" style="padding-left: 5px;">
										<Icon name="book" viewBox="0 0 512 512" />
									</span>
								</a>
							</li>
						{/if}
						<li
							class="ant-dropdown-menu-item"
							role="menuitem"
							tabindex="-1"
							data-menu-id="rc-menu-uuid-56979-2-1"
							style="padding: 10px 15px; color: var(--text-primary) display: flex; justify-content: space-between;{selectingNetwork
								? 'opacity: 0.5;'
								: ''}"
						>
							<span
								class="ant-dropdown-menu-title-content"
								on:click={() => {
									selectingNetwork = !selectingNetwork;
								}}
								on:keydown
							>
								Switch Network
								<span role="img" aria-label="logout" style="padding-left: 6px;">
									<!-- <Icon name="chain" /> -->
								</span>
							</span>
						</li>
						{#if showNetworks}
							{#await getSupportedNetworks() || [] then networks}
								{#each networks as net}
									<li
										class="ant-dropdown-menu-item"
										role="menuitem"
										tabindex="-1"
										data-menu-id="rc-menu-uuid-56979-2-1"
										style="padding: 10px 15px; color: var(--text-primary) display: flex; justify-content: space-between;"
										title={net.label}
									>
										<span
											class="ant-dropdown-menu-title-content"
											style={$chainId === Number(net.id) ? 'font-weight: bold;' : ''}
											on:click={async () => {
												await switchNetwork(Number(net.id));
												opened = false;
											}}
											on:keydown
										>
											{#await net.label.replace('Ethereum ', '') then label}
												{label.length > 16 ? `${label.slice(0, 16)}...` : label}
											{/await}
										</span>
									</li>
								{/each}
							{/await}
						{/if}
						<li
							class="ant-dropdown-menu-item"
							role="menuitem"
							tabindex="-1"
							data-menu-id="rc-menu-uuid-56979-2-1"
							style="padding: 10px 15px; color: var(--text-primary) display: flex; justify-content: space-between;"
						>
							<span
								class="ant-dropdown-menu-title-content"
								on:click={() => {
									opened = false;
									void web3Disconnect();
								}}
								on:keydown
							>
								Disconnect
								<span role="img" aria-label="logout" style="padding-left: 40px;">
									<Icon name="logout" />
								</span>
							</span>
						</li>
					</ul>
					<div aria-hidden="true" style="display: none;" />
				</div>
			</div>
		{/if}
	</div>
{:else}
	<Button on:click={web3Connect}>Connect Wallet</Button>
{/if}

<style>
	/* Legacy styles that we want to get rid of at some point */
	.ant-dropdown {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		color: var(--text-primary);
		font-size: 14px;
		font-variant: tabular-nums;
		line-height: 1.5715;
		list-style: none;
		font-feature-settings: 'tnum';
		position: absolute;
		top: -9999px;
		left: -9999px;
		z-index: 1050;
		display: block;
	}
	.ant-dropdown::before {
		position: absolute;
		top: -4px;
		right: 0;
		bottom: -4px;
		left: -7px;
		z-index: -9999;
		opacity: 0.0001;
		content: ' ';
	}

	.ant-dropdown-menu {
		position: relative;
		margin: 0;
		padding: 4px 0;
		text-align: left;
		list-style-type: none;
		background-color: var(--background-l0);
		background-clip: padding-box;
		border-radius: 2px;
		outline: none;
		box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
			0 9px 28px 8px rgba(0, 0, 0, 0.05);
	}

	.ant-dropdown-menu-item {
		clear: both;
		margin: 0;
		padding: 5px 12px;
		color: var(--text-primary);
		font-weight: normal;
		font-size: 14px;
		line-height: 22px;
		white-space: nowrap;
		cursor: pointer;
		transition: all 0.3s;
	}

	.ant-dropdown-menu-item {
		position: relative;
		display: flex;
		align-items: center;
	}

	.ant-dropdown-menu-title-content {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	.ant-dropdown-menu-title-content > a {
		color: inherit;
		transition: all 0.3s;
	}
	.ant-dropdown-menu-title-content > a:hover {
		color: inherit;
	}
	.ant-dropdown-menu-title-content > a::after {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		content: '';
	}
	.my-projects-link {
		color: var(--text-primary);
	}
</style>
