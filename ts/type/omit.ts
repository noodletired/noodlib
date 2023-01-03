/**
 * Omits keys from a Record by deleting them.
 * @param record the Record to omit keys from.
 * @param props list of keys to omit.
 * @returns a new object with omitted keys.
 */
export const Omit = <T extends Record<string | symbol, unknown>, K extends (keyof T)[]>(
	record: Readonly<T>,
	props: Readonly<K>
) => {
	const ret = {} as T;
	const keys = Reflect.ownKeys(record) as (keyof T)[];
	keys.forEach((key) => {
		if (!props.includes(key)) {
			ret[key] = record[key];
		}
	});
	return ret as Omit<T, K[number]>;
};
