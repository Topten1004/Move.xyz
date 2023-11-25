import { getDefaultProvider, readNetwork } from '$stores/web3';
import { ethers, type ContractInterface } from 'ethers';
import { parseCachedData, parseContractResponse } from '../cache';
import Tiles from '$deployments/Tiles';

export const contracts = {
	Tiles
};

export async function readContractByAddress(
	contractAddress: string,
	ABI: ContractInterface,
	functionName: string,
	args = [],
	verbose = true
) {
	if (verbose) {
		console.log(readNetwork.get().alias?.toUpperCase(), contractAddress, functionName, args);
	}
	const network = getDefaultProvider();
	const contract = new ethers.Contract(
		contractAddress,
		ABI,
		new ethers.providers.JsonRpcProvider(network.rpcUrl)
	);

	if (args.length == 0) {
		return await contract[functionName]();
	}
	return await contract[functionName](...args);
}

export async function readContract(
	contractName: keyof typeof contracts,
	functionName: string,
	args = [],
	cached = false
) {
	console.log(contractName, functionName, args);
	const cache = await caches.open('CONTRACT_RESPONSE');

	if (contracts[contractName][readNetwork.get().alias]) {
		const contractAddress = contracts[contractName][readNetwork.get().alias];
		const abi = contracts[contractName].abi;
		const id = btoa(
			JSON.stringify({
				chainId: readNetwork.get().id,
				contractAddress,
				functionName,
				args
			})
		);
		if (cached) {
			const response = await cache.match(id);
			if (response) {
				const result = await response.text();
				const data = parseCachedData(JSON.parse(result));
				if (typeof data !== 'undefined' && data !== null) {
					return data;
				}
			} else console.log('ContractReader: cache miss');
		}

		const response = parseContractResponse(
			await readContractByAddress(contractAddress, abi, functionName, args, false)
		);
		await cache.put(id, new Response(JSON.stringify(response)));
		return response;
	} else {
		throw Error(`${contractName}: deployment not found on ${readNetwork.get().alias}`);
	}
}
