/**
 * Helper type to extract string keys.
 * Useful for Array.includes and other string-based key comparisons
 * where some type-narrowing is helpful.
 */
export type StringKeys<T> = Extract<keyof T, string>;

/**
 * Partial<T>, but with some user-defined mandatory keys.
 */
export type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>;

/**
 * Gets all nullable properties of a type.
 * @see https://stackoverflow.com/a/54713912
 */
export type NullablePropertyOf<T> = {
	[K in keyof T]: null extends T[K] ? K : never;
}[keyof T];

/**
 * Partial<T>, but only for nullable fields of T.
 * @see https://stackoverflow.com/a/54713912
 */
export type NullablePartial<T> = Partial<T> & Omit<T, NullablePropertyOf<T>>;

/**
 * Gets all undefinable properties of a type.
 */
export type UndefinablePropertyOf<T> = {
	[K in keyof T]: undefined extends T[K] ? K : never;
}[keyof T];

/**
 * Partial<T>, but only for undefinable fields of T.
 */
export type UndefinablePartial<T> = Partial<T> & Omit<T, UndefinablePropertyOf<T>>;

/**
 * Partial<T>, but only for Nullish fields of T.
 */
export type NullishPartial<T> = Partial<T> &
	Omit<T, UndefinablePropertyOf<T> | NullablePropertyOf<T>>;

/**
 * T with readonly properties removed.
 */
export type Writable<T> = { -readonly [P in keyof T]: T[P] };
