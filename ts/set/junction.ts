/**
 * @param a a Set.
 * @param b another Set.
 * @returns the set intersection between two Set objects.
 */
export function intersect<T>(a: Set<T>, b: Set<T>) {
	return new Set([...a].filter((value) => b.has(value)));
}

/**
 * @param a a Set.
 * @param b another Set.
 * @returns the set union of the two Set objects.
 */
export function union<T, U = T>(a: Set<T>, b: Set<U>): Set<T | U> {
	return new Set([...a, ...b]);
}
