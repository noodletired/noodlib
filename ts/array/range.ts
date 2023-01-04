/**
 * @param end inclusive end value.
 * @returns an integer-stepped array from [0, end], e.g. Range(3) = [0, 1, 2, 3];
 */
export function range(end: number): number[];

/**
 * @param start inclusive start value.
 * @param end inclusive end value.
 * @returns an integer-stepped array from [start, end], e.g. Range(1, -2) = [1, 0, -1, -2];
 */
export function range(start: number, end: number): number[];

/**
 * @param start inclusive start value.
 * @param end inclusive end value.
 * @returns an integer-stepped array from [start, end], e.g. Range(1, -2) = [1, 0, -1, -2];
 */
export function range(start: number, end: number): number[];

// Implementation
export function range(...args: [number] | [number, number]): number[] {
	let start: number, end: number;
	if (args.length === 1) {
		start = 0;
		[end] = args;
	} else {
		[start, end] = args;
	}

	if (start % 1 !== 0 || end % 1 !== 0) {
		throw new RangeError("Decimals are not supported");
	}

	const length = Math.abs(end - start) + 1;
	const min = Math.min(start, end);
	return Array.from({ length }, (v, i) => min + i);
}
