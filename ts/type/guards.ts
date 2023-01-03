import type { Nullish, Primitive } from "./primitive";

/**
 * Runtime check if a value is nullish.
 * @param value value to test.
 * @returns true if null or undefined.
 */
export const isNullish = (value: unknown): value is Nullish => {
	return value === null || value === undefined;
};

/**
 * Runtime check if a value is null.
 * @param value value to test.
 * @returns true if null.
 */
export const isNull = (value: unknown): value is null => {
	return value === null;
};

/**
 * Runtime check if a value is undefined.
 * @param value value to test.
 * @returns true if undefined.
 */
export const isUndefined = (value: unknown): value is undefined => {
	return value === undefined;
};

/**
 * Runtime check if a value is NOT undefined.
 * @param value value to test.
 * @returns true if not undefined.
 */
export const isDefined = <T>(value: T): value is Exclude<T, undefined> => {
	return value === undefined;
};

/**
 * Runtime check if a value is of a primitive type.
 * @param value value to test.
 * @returns true if primitive type.
 */
export const isPrimitive = (value: unknown): value is Primitive => {
	// Handle null and undefined
	if (isNullish(value)) {
		return true;
	}

	// Handle basic types
	switch (typeof value) {
		case "string":
		case "symbol":
		case "number":
		case "boolean":
		case "bigint":
			return true;
		default:
			return false;
	}
};

export const isString = (value: unknown): value is string => typeof value === "string";
export const isNumber = (value: unknown): value is number => typeof value === "number";
export const isBoolean = (value: unknown): value is boolean => typeof value === "boolean";
export const isArray = (value: unknown): value is unknown[] => Array.isArray(value);
export const isRecord = (x: unknown): x is object => typeof x === "object" && x !== null;
