import { ethers, providers, utils } from 'ethers';
import injectedModule from '@web3-onboard/injected-wallets';
import walletConnectModule from '@web3-onboard/walletconnect';
import ledgerModule from '@web3-onboard/ledger';
import trezorModule from '@web3-onboard/trezor';
import { blocknativeNetworks } from '$constants/networks';
import blockedAddresses from '$constants/blocklist';
import { getNetworkAliasByChainId, setNetworkAliasInQueryParams } from '$utils/web3/networkName';
import { browser } from '$app/environment';
import Store from '$utils/Store';
import type { OnboardAPI, WalletState } from '@web3-onboard/core';

export function getDefaultProvider() {
	if (browser) {
		const defaultNetworkAlias = new URLSearchParams(location.search).get('network');
		return (
			blocknativeNetworks.find((net) => net.alias === defaultNetworkAlias) || blocknativeNetworks[0]
		);
	}
	return blocknativeNetworks[0];
}

export const connectedAccount = new Store('');
export const web3Onboard = new Store<OnboardAPI>();
export const chainId = new Store<number>(Number(getDefaultProvider().id));
export const readNetwork = new Store(getDefaultProvider());
export const web3Provider = new Store<providers.Web3Provider>();

function prepare(wallets: WalletState[]) {
	const activeWallet = wallets[0];
	if (browser) {
		localStorage.setItem('connectedWallets', JSON.stringify(wallets.map((w) => w.label)));
	}
	if (activeWallet) {
		const activeAccount = activeWallet.accounts?.[0];
		const activeChain = activeWallet.chains?.[0];
		if (activeAccount) {
			if (activeChain) {
				connectedAccount.set(activeAccount.address);
				chainId.set(Number(activeChain.id));
				const networkAlias = getNetworkAliasByChainId(activeChain.id);
				setNetworkAliasInQueryParams(networkAlias);
				web3Provider.set(new providers.Web3Provider(activeWallet.provider));
			} else {
				console.error('no active chain');
				connectedAccount.set('');
			}
		} else {
			console.error('no active account');
			connectedAccount.set('');
		}
	} else {
		console.error('no active wallet');
		connectedAccount.set('');
	}
}

export async function initialize() {
	const Onboard = (await import('@web3-onboard/core')).default;
	const chains = blocknativeNetworks.map((network) => {
		const { alias, ...chain } = network;
		return { ...chain };
	});
	const injected = injectedModule();
	const walletConnect = walletConnectModule({
		bridge: 'https://bridge.walletconnect.org/',
		qrcodeModalOptions: {
			mobileLinks: ['rainbow', 'metamask', 'argent', 'trust', 'imtoken', 'pillar']
		}
	});
	const ledger = ledgerModule();
	const trezor = trezorModule({
		email: '<EMAIL_CONTACT>',
		appUrl: './'
	});
	const onboard = Onboard({
		accountCenter: {
			desktop: {
				enabled: false
			},
			mobile: {
				enabled: false
			}
		},
		wallets: [injected, walletConnect, ledger, trezor],
		chains,
		appMetadata: {
			name: 'Juicebox',
			icon: '/favicon.svg',
			logo: '/favicon.svg',
			description: 'Community funding for people and projects',
			recommendedInjectedWallets: [
				{ name: 'Coinbase', url: 'https://wallet.coinbase.com/' },
				{ name: 'MetaMask', url: 'https://metamask.io' }
			]
		}
	});

	if (browser) {
		const previouslyConnectedWallets = JSON.parse(
			localStorage.getItem('connectedWallets') || '[]'
		) as string[];

		if (previouslyConnectedWallets.length) {
			const wallets = await onboard.connectWallet({
				autoSelect: { label: previouslyConnectedWallets[0], disableModals: true }
			});
			prepare(wallets);
		}
	}
	web3Onboard.set(onboard);
}

if (browser) {
	connectedAccount.subscribe((_address: string) => {
		if (!_address) return;
		const address = utils.getAddress(_address);
		if (blockedAddresses.includes(address)) {
			console.log(`${address} was found in blocklist`);
			void web3Disconnect();
		}
	});

	if (window.ethereum !== undefined) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		window.ethereum.on('accountsChanged', (accounts: string[]) => {
			connectedAccount.set(accounts[0]);
		});
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		window.ethereum.on('chainChanged', async (_chainId: string) => {
			await switchNetwork(_chainId);
		});
	}
}

export async function web3Connect() {
	if (browser) {
		const onboard = web3Onboard.get();
		const wallets = await onboard.connectWallet();
		prepare(wallets);
		// await authWithWallet(wallets[0].accounts[0].address);
	}
}

export async function web3Disconnect() {
	const onboard = web3Onboard.get();
	if (!onboard) throw Error('web3Onboard is not set');
	await onboard.disconnectWallet({
		label: onboard?.state?.get().wallets[0].label
	});
	console.log('disconnected');
	connectedAccount.set('');
	localStorage.setItem('connectedWallets', JSON.stringify([]));
}

export async function switchNetwork(_chainId: number | string) {
	const onboard = web3Onboard.get();
	if (!onboard) return;
	const netId = `0x${Number(_chainId).toString(16)}`;
	await onboard.setChain({
		chainId: netId
	});
	chainId.set(Number(_chainId));
	const network = blocknativeNetworks.find((net) => net.id === netId);
	location.replace(`?network=${network?.alias}`);
}

export function getSupportedNetworks() {
	const onboard = web3Onboard.get();
	if (!onboard) return [];
	return onboard.state.get().chains;
}

export function getProvider() {
	if (browser) {
		if (window.ethereum) {
			return new ethers.providers.Web3Provider(window.ethereum);
		}
		return web3Provider.get();
	}
}

export function alchemyProvider() {
	if (browser) {
		if (window.ethereum) {
			return new ethers.providers.Web3Provider(window.ethereum);
		}
		return new ethers.providers.AlchemyProvider(
			chainId.get(),
			String(import.meta.env.VITE_ALCHEMY_MAINNET_API_KEY)
		);
	}
}
