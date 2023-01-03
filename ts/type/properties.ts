import { isNullish } from "./guards";
import type { NullishPartial } from "./record";

/**
 * Checks if any in a list of given props are falsy (== false).
 * @param record the Record to check.
 * @param props optional list of keys to check; if unspecified, all enumerable keys are checked.
 * @returns true if any props are falsy.
 */
export function hasFalsyProps<T extends Record<string, unknown>>(
	record: Readonly<T>,
	props: (keyof T)[] = Object.keys(record)
) {
	return props.some((prop) => !record[prop]);
}

/**
 * Deletes nullish (but NOT falsy) properties from a Record.
 * Useful for trimming serializable objects for transfer, or preparing data for database insert.
 * @param record the Record to trim.
 * @returns a new Record with only non-nullish properties.
 */
export const pruneNullishProps = <T extends Record<string | symbol, unknown>>(obj: Readonly<T>) => {
	const ret = {} as NullishPartial<T>;
	const keys = Reflect.ownKeys(obj) as (keyof T)[];
	keys.forEach((key) => {
		const val = obj[key];
		if (!isNullish(val)) {
			ret[key] = val;
		}
	});
	return ret;
};
