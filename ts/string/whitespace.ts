/**
 * @param string string to test.
 * @returns true if whitespace or empty.
 */
export const isWhitespaceOrEmpty = (string: string): boolean => !string.trim().length;
