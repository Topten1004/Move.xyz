<script lang="ts">
	import Icon from './Icon.svelte';
	import { browser } from '$app/environment';
	import ClipboardTooltip from './ClipboardTooltip.svelte';
	import Popover from './Popover.svelte';

	// Why can't I import this from app.d.ts?
	// import type { DeepDaoData } from 'src/app';
	// I just get errors when trying to access values.
	type DeepDaoData = {
		isActive: boolean;
		isSmartContract: boolean;
		score: number;
		votes: number;
		proposals: number;
		rank: number;
		relativeScore: number;
	};

	export let address: string;
	export let token: { symbol: string; decimals: number; image: string };
	export let deepdao: DeepDaoData;

	export let ourPlatform = true;

	const hasMetamask = browser ? window.ethereum : false;

	const addToMetamask = async () => {
		const provider: import('ethers').providers.ExternalProvider = window.ethereum;
		if (provider) {
			try {
				const wasAdded = await provider.request({
					method: 'wallet_watchAsset',
					params: {
						type: 'ERC20',
						options: {
							address,
							symbol: token.symbol,
							decimals: token.decimals,
							image: token.image
						}
					}
				});

				if (wasAdded) {
					console.info('Added to MetaMask');
				} else {
					console.warn('Not added to MetaMask');
				}
			} catch (error) {
				console.error(error);
			}
		}
	};
</script>

<Popover maxWidth="250px" placement="top">
	<div slot="content" class="tooltip">
		<span>
			{#if ourPlatform}
				<Popover placement="top">
					<div slot="content" class="tooltip">Go to user's page</div>
					<a class="link" href={`/user/${address}`}>
						{address}
					</a>
				</Popover>
			{:else}
				{address}
			{/if}
			<Popover placement="top">
				<div slot="content" class="tooltip">Go to Etherscan</div>
				<a
					class="link"
					target="_blank"
					href={`https://etherscan.io/address/${address}`}
					rel="noreferrer"
				>
					<Icon name="etherscan" style="transition: unset" />
				</a>
			</Popover>
			<span class="copy">
				<ClipboardTooltip target={address} />
			</span>
			<a
				href="https://deepdao.io/user/{address}/verified_dao_experience"
				target="_blank"
				style="cursor: pointer; width: 1rem; display: inline-flex; transform: translate(-1px, 1px)"
				rel="noreferrer"
			>
				<Icon name="yinyang" style="transition: unset" />
			</a>
			{#if token && hasMetamask}
				<Popover placement="top">
					<div slot="content" class="tooltip">Add to MetaMask</div>
					<span class="copy" on:click|stopPropagation={addToMetamask} on:keydown>
						<Icon name="metamask" style="transition: unset" />
					</span>
				</Popover>
			{/if}
		</span>
		{#if deepdao?.score && deepdao?.score >= 85}
			<div>
				<div>
					<b>DeepDAO Stats:</b>
				</div>
				<div>&nbsp; Active: {deepdao?.isActive ? 'Yes' : 'No'}</div>
				<div>&nbsp; Score: {deepdao?.score || 0}</div>
				{#if deepdao?.isSmartContract}
					<div>&nbsp; Is Smart Contract: {deepdao?.isSmartContract || 'No'}</div>
				{/if}
				{#if deepdao?.votes}
					<div>&nbsp; Votes: {deepdao?.votes || 0}</div>
				{/if}
				{#if deepdao?.proposals}
					<div>&nbsp; Proposals: {deepdao?.proposals || 0}</div>
				{/if}
				{#if deepdao?.rank}
					<div>&nbsp; Rank: {deepdao?.rank || 0}</div>
				{/if}
				{#if deepdao?.relativeScore}
					<div>&nbsp; Relative score: {deepdao?.relativeScore || 0}</div>
				{/if}
			</div>
		{/if}
	</div>
	<slot />
</Popover>

<style lang="scss">
	.tooltip {
		font-weight: 300;
		font-size: 14px;
		word-wrap: break-word;
		color: var(--text-primary);
		text-align: start;
		span {
			.tooltip {
				white-space: nowrap;
			}
		}
	}
	.link {
		font-weight: 300;
		font-size: 14px;
		&:hover {
			color: var(--text-action-primary);
		}
	}
	.copy {
		cursor: pointer;
		font-size: 14px;
		color: var(--text-action-primary);
	}

	.copy:hover {
		color: var(--text-action-secondary);
	}
</style>
