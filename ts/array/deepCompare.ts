import type { Primitive } from "../type/primitive";

/**
 * Only works for primitives; enables O(n) average time.
 * Adapted from https://stackoverflow.com/a/55614659
 * @param a1 A primitive array.
 * @param a2 A primitive array.
 */
export const deepCompare = (a1: Primitive[], a2: Primitive[]): boolean => {
	// Length test
	if (a1.length !== a2.length) {
		return false;
	}

	const superSet: Record<string, 1 | 2> = {};
	for (const i of a1) {
		const e = String(i) + typeof i;
		superSet[e] = 1;
	}

	for (const i of a2) {
		const e = String(i) + typeof i;
		if (!superSet[e]) {
			return false;
		}
		superSet[e] = 2;
	}

	for (const e in superSet) {
		if (superSet[e] === 1) {
			return false;
		}
	}

	return true;
};
