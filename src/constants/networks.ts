export enum NetworkName {
	localhost = 'localhost',
	mainnet = 'mainnet',
	kovan = 'kovan',
	rinkeby = 'rinkeby',
	goerli = 'goerli'
	/*
	xdai = 'xdai',
	matic = 'matic',
	mumbai = 'mumbai'
	*/
}

export type NetworkInfo = {
	name: NetworkName;
	color: string;
	chainId: number;
	blockExplorer: string;
	rpcUrl: string;
	faucet?: string;
	price?: number;
	gasPrice?: number;
};

export const blocknativeNetworks = [
	{
		id: '0x1', // chain ID must be in hexadecimel
		token: 'ETH', // main chain token
		label: 'Ethereum Mainnet',
		alias: NetworkName.mainnet,
		rpcUrl: `https://ethereum-mainnet-rpc.allthatnode.com/` // rpcURL required for wallet balances
	},
	{
		id: '0x5',
		token: 'gETH',
		label: 'Ethereum Goerli Testnet',
		alias: NetworkName.goerli,
		rpcUrl: `https://ethereum-goerli-rpc.allthatnode.com/`
	}
];

export const NETWORKS_BY_ALIAS = Object.values(blocknativeNetworks).reduce(
	(acc, curr) => ({
		...acc,
		[curr.alias]: curr
	}),
	{} as Record<NetworkName, NetworkInfo>
);
