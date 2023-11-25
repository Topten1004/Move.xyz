import { BigNumber, type BigNumberish, utils } from 'ethers';

type FormatConfig = {
	empty?: string;
	thousandsSeparator?: string;
	decimalSeparator?: string;
	precision?: number;
	padEnd?: boolean;
	decimals?: number;
};

const decimalSeparator = '.';
const thousandsSeparator = ',';
const DECIMALS = 18;

/**
 * Returns a Wad representation of a given [value], parsed with 18 digits.
 *
 * A wad is a decimal number with 18 digits of precision.
 * Wad: 1e-18
 * Ref: https://github.com/dapphub/ds-math
 *
 * @example
 * // returns 1000000000000000000
 * parseWad(1);
 *
 */
export const parseWad = (value?: BigNumberish) =>
	utils.parseUnits(value?.toString() || '0', DECIMALS);

/**
 * Returns a string representation of a given [wadValue] with [decimials] digits.
 *
 * A wad is a decimal number with 18 digits of precision.
 * Wad: 1e-18
 * Ref: https://github.com/dapphub/ds-math
 *
 * @example
 * // returns 1
 * fromWad(1000000000000000000);
 *
 */
export const fromWad = (wadValue?: BigNumberish, decimals: number = DECIMALS) => {
	const result = utils.formatUnits(wadValue ?? '0', decimals);
	return result.substring(result.length - 2) === '.0'
		? result.substring(0, result.length - 2)
		: result;
};

const separateThousands = (str?: string, separator = thousandsSeparator) => {
	if (!str?.trim().length) return;

	return str.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};

export const formattedNum = (num: BigNumberish | undefined, config?: FormatConfig) => {
	const empty = config?.empty ?? '0';

	if (num === undefined || num === '') return empty;

	const currentThousandsSeparator = config?.thousandsSeparator ?? thousandsSeparator;
	const currentDecimalSeparator = config?.decimalSeparator ?? decimalSeparator;

	let str = num.toString();

	// Trim leading zeros
	while (str.length && str[0] === '0') {
		str = str.substring(1);
	}

	if (!str.length) return empty;

	// Return ~0 for >0 numbers trimmed to only zeros
	function formatNearZero(formatted: string) {
		if (
			num?.toString().trim() &&
			formatted
				?.split('')
				.filter((char) => char !== currentDecimalSeparator && char !== currentThousandsSeparator)
				.every((char) => char === '0')
		) {
			return `~${formatted}`;
		}

		return formatted;
	}

	if (str.includes(currentDecimalSeparator)) {
		const [pre, post] = str.split(currentDecimalSeparator);

		// Formatted preDecimal
		const formattedPre = separateThousands(pre, currentThousandsSeparator) || '0';

		if (post === '0') return formatNearZero(pre);

		const formattedPost = post
			.substring(0, config?.precision ?? DECIMALS)
			.padEnd(config?.padEnd ? config?.precision ?? 0 : 0, '0');

		// If we can ignore postDecimal
		if (!formattedPost || config?.precision === 0) {
			return formatNearZero(formattedPre);
		}

		// Return entire preDecimal + postDecimal
		return formatNearZero([formattedPre, formattedPost].join(currentDecimalSeparator));
	}

	const formatted = separateThousands(str, currentThousandsSeparator);

	return formatted;
};

/**
 * Returns a formatted string of given [wadValue], formatted according to the given [formatConfig].
 *
 * A wad is a decimal number with 18 digits of precision.
 * Wad: 1e-18
 * Ref: https://github.com/dapphub/ds-math
 *
 * @example
 * // returns 1,000
 * formatWad(1000000000000000000000, { thousandsSeparator: ',' });
 *
 */
export const formatWad = (wadValue?: BigNumberish, formatConfig?: FormatConfig) => {
	if (wadValue === undefined && wadValue === null && wadValue === '') return;

	let value = wadValue;
	if (value?.toString().includes('.')) {
		value = value.toString().split('.')[0];
	}

	return formattedNum(fromWad(value, formatConfig?.decimals), formatConfig);
};

/**
 * Scale a given [percentValue] to the permyriad unit by multiplying it by 100.
 *
 * Permyriad: x/10000
 *
 * Ref: https://math.fandom.com/wiki/Permyriad
 */
export const percentToPermyriad = (percentValue?: string | number) =>
	BigNumber.from(percentValue ? Math.floor(parseFloat(percentValue.toString()) * 100) : 0);

/**
 * Scale a given [permyriadValue] to the percent unit by dividing it by 100.
 *
 * Permyriad: x/10000
 *
 * Ref: https://math.fandom.com/wiki/Permyriad
 */
export const permyriadToPercent = (permyriadValue?: BigNumberish) =>
	permyriadValue ? (BigNumber.from(permyriadValue).toNumber() / 100).toString() : '0';

/**
 * Scale a given [percentValue] to the permille unit by multiplying it by 10.
 *
 * Permille: x/1000
 *
 * Ref: https://math.fandom.com/wiki/Permille
 */
export const percentToPermille = (percentValue?: string | number) =>
	BigNumber.from(percentValue ? Math.floor(parseFloat(percentValue.toString()) * 10) : 0);

/**
 * Scale a given [permilleValue] to the percent unit by dividing it by 10.
 *
 * Permille: x/1000
 *
 * Ref: https://math.fandom.com/wiki/Permille
 */
export const permilleToPercent = (permilleValue?: BigNumberish) =>
	permilleValue ? (BigNumber.from(permilleValue).toNumber() / 10).toString() : '0';

/**
 * Scale a given [percentValue] to the perbicent unit by multiplying it by 2.
 *
 * Perbicent: x/200
 */
export const percentToPerbicent = (percentValue?: string | number) =>
	BigNumber.from(percentValue ? Math.floor(parseFloat(percentValue.toString()) * 2) : 0);

/**
 * Scale a given [perbicentValue] to the percent unit by dividing it by 2.
 *
 * Perbicent: x/200
 */
export const perbicentToPercent = (perbicentValue?: BigNumberish) =>
	perbicentValue ? (BigNumber.from(perbicentValue).toNumber() / 2).toString() : '0';

export const fracDiv = (quotient: string, dividend: string) =>
	parseFloat(quotient) / parseFloat(dividend);

// Strips string of all commas
export const stripCommas = (string: string) => string.replace(/,/g, '');

export const toUint256 = (num: BigNumber) =>
	`0x${(num?.toHexString().split('x')[1] ?? '').padStart(64, '0')}`;

export const formatPercent = (
	numerator: BigNumber | undefined,
	divisor: BigNumber | undefined
): string => {
	if (!divisor?.gt(0) || !numerator) return '';

	// Multiply by 10,000 for 4 significant figures
	const sharePct = numerator?.mul(10000).div(divisor);

	if (sharePct?.toString() === '0' && numerator?.gt(0)) {
		return '<0.01';
	}
	return (sharePct?.toNumber() / 100).toString();
};

export const formatNumberToPercent = (num: number): string => {
	return new Intl.NumberFormat('en-US', {
		style: 'percent',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).format(num);
};

export const formatNumberToUSD = (num: number): string => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		currencyDisplay: 'narrowSymbol'
	}).format(num);
};
