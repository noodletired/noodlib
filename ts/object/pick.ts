/**
 * Picks specified keys from a Record into a new Record.
 * Does not mutate the existing Record.
 * @param obj The Record to pick properties from.
 * @param keys A list of keys to pick.
 * @returns a new Record with only the selected props.
 */
export const pick = <T extends Record<K, V>, K extends string | number | symbol, V>(
	obj: T,
	keys: K[]
): Pick<T, K> => {
	const ret = {} as Pick<T, K>;
	keys.forEach((key) => (ret[key] = obj[key]));
	return ret;
};
