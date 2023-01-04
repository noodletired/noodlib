/**
 * @param a a Set.
 * @param b another Set.
 * @returns the set intersection between two Set objects.
 */
export const intersect = <T>(a: Set<T>, b: Set<T>) =>
	new Set([...a].filter((value) => b.has(value)));

/**
 * @param a a Set.
 * @param b another Set.
 * @returns the set union of the two Set objects.
 */
export const union = <T, U = T>(a: Set<T>, b: Set<U>): Set<T | U> => new Set([...a, ...b]);
