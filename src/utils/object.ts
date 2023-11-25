export const deepCopy = <T>(obj: T): T => {
	if (obj === null || typeof obj !== 'object') return obj;
	if (obj instanceof Date) {
		const copy = new Date();
		copy.setTime(obj.getTime());
		return copy as T;
	}
	if (obj instanceof Array) {
		const copy = [];
		for (let i = 0, len = obj.length; i < len; i++) {
			copy.push(deepCopy(obj[i]));
		}
		return copy as T;
	}
	if (obj instanceof Object) {
		let copy = {};
		for (const attr in obj) {
			if (Object.prototype.hasOwnProperty.call(obj, attr))
				copy = { ...copy, [attr]: deepCopy(obj[attr]) };
		}
		return copy as T;
	}
	throw new Error('Unable to copy object.');
};

export const lastOfArray = <T>(array: T[]): T => array[array.length - 1];
