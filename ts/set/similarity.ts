/**
 * @param a a Set.
 * @param b another Set.
 * @returns true if both Sets contain equal contents.
 */
export function isEqual<T>(a: Set<T>, b: Set<T>) {
	if (a !== b) {
		if (a.size !== b.size) {
			return false;
		}

		for (const value of a) {
			if (!b.has(value)) {
				return false;
			}
		}
	}

	return true;
}

/**
 * @param a a Set.
 * @param b another, larger Set.
 * @returns true if Set A is completely contained in Set B.
 */
export function isProperSubset<T, U extends T>(a: Set<U>, b: Set<T>) {
	if (a.size > b.size) {
		return false;
	}

	for (const value of a) {
		if (!b.has(value)) {
			return false;
		}
	}

	return true;
}

/**
 * Note set difference is non-commutative.
 * @param a a Set.
 * @param b another Set.
 * @returns all elements in A not in B (A - B).
 */
export function difference<T>(a: Set<T>, b: Set<T>) {
	const difference = new Set<T>();

	for (const value of a) {
		if (!b.has(value)) {
			difference.add(value);
		}
	}

	return difference;
}
