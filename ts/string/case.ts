/**
 * @param string string to format.
 * @returns string formatted as "Title case".
 */
export function titleCase(string: string): string {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
