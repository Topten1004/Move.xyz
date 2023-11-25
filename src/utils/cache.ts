import { BigNumber } from 'ethers';

export function parseContractResponse(data) {
	if (['string', 'boolean', 'number'].includes(typeof data)) {
		return data;
	} else if (Array.isArray(data)) {
		const isObject = Object.keys(data).find((key) => key.match(/[^\d]/));
		if (isObject) {
			return parseContractResponse({ ...data });
		}
		return data.map(parseContractResponse);
	} else if (data instanceof BigNumber) {
		return data;
	} else if (typeof data === 'object') {
		return Object.keys(data).reduce((acc, key) => {
			acc[key] = parseContractResponse(data[key]);
			return acc;
		}, {});
	}
	return data;
}

export function parseCachedData(data) {
	if (['string', 'boolean', 'number'].includes(typeof data)) {
		return data;
	} else if (Array.isArray(data)) {
		return data.map(parseCachedData);
	} else if (typeof data === 'object') {
		const result: Record<string, unknown> = {};
		if (data.type === 'BigNumber' && data.hex) {
			return BigNumber.from(data.hex);
		}
		for (const key of Object.keys(data)) {
			result[key] = parseCachedData(data[key]);
		}
		return result;
	}
	return data;
}
