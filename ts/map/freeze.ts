/**
 * @param map structure to be made immutable.
 * @returns frozen map.
 */
export const freeze = <T extends Map<K, V>, K, V>(map: T): T => {
	map.set = (key: unknown) => {
		throw new TypeError(`Can't set property ${key}, map is frozen.`);
	};
	map.delete = (key: unknown) => {
		throw new TypeError(`Can't delete property ${key}, map is frozen.`);
	};
	map.clear = () => {
		throw new TypeError(`Can't clear map, map is frozen.`);
	};

	Object.freeze(map);
	return map;
};
