/**
 * Remove duplicates from an array by shallow comparison.
 * @param array an array to make unique.
 * @returns a new array with duplicates removed.
 */
export function shallowUnique<T>(array: T[]): T[] {
	return [...new Set<T>(array)];
}
