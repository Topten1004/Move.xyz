export const getTruncatedAddress = (address: string): string => {
	return address && address.startsWith('0x')
		? `${address.slice(0, 6)}...${address.slice(-6)}`
		: address;
};
