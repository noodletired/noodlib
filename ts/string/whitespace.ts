/**
 * @param string string to test.
 * @returns true if whitespace or empty.
 */
export function isWhitespaceOrEmpty(string: string): boolean {
	return !string.trim().length;
}
