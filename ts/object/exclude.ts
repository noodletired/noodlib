import { difference } from "../array/setOperators";

/**
 * Removes specified keys from a Record and places them into a new Record.
 * Does not mutate the existing Record.
 * @param obj The Record to pick properties from.
 * @param keys A list of Record keys to exclude.
 * @returns a new Record with only the selected props.
 */
export const exclude = <T extends Record<K, V>, K extends string | number | symbol, V>(
	obj: T,
	keys: K[]
): Omit<T, K> => {
	const ret = {} as Omit<T, K>;
	const allKeys = Reflect.ownKeys(obj) as (keyof T)[];
	(difference(allKeys, keys) as (keyof Omit<T, K>)[]).forEach((key) => (ret[key] = obj[key]));
	return ret;
};
