/**
 * @param string string to format.
 * @returns string formatted as "Title case".
 */
export const titleCase = (string: string): string =>
	string.charAt(0).toUpperCase() + string.slice(1);
