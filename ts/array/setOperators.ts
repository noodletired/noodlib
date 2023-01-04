/**
 * @returns a new array containing all shallow-unique elements in a1 and a2.
 */
export const union = <T, U = T>(a1: T[], a2: U[]): (T | U)[] => {
	return [...new Set([...a1, ...a2])];
};

/**
 * @returns a new array containing all elements in a1 that were also in a2.
 */
export const intersect = <T>(a1: T[], a2: T[]): T[] => {
	return a1.filter((x) => a2.includes(x));
};

/**
 * @returns a new array containing all elements in a1 that were not in a2.
 */
export const difference = <T>(a1: T[], a2: T[]): T[] => {
	return a1.filter((x) => !a2.includes(x));
};
