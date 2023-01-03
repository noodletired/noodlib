/**
 * Helper to convert a constraint into an assertion.
 * @param constraint function to constrain a value.
 * @returns an assertion function, which throws if the constraint fails.
 */
export const constraintToAssertion =
	<T>(constraint: (value: T) => boolean | string) =>
	(value: T) => {
		const response = constraint(value);
		if (response !== true) throw new Error(response || "Constraint failed");
	};

// Constrain a string to only lowercase
export const lowercaseConstraint = (s: string) =>
	s.toLowerCase() === s || "Value must be lowercase";

// Constrain a string to only uppercase
export const uppercaseConstraint = (s: string) =>
	s.toUpperCase() === s || "Value must be uppercase";

// Constrain a string to a-z, 0-9, -
export const kebabcaseConstraint = (s: string) =>
	/^[a-z0-9-]*$/.test(s) || "Value must only contain a-z, 0-9, and hyphens";

// Constrain a string to A-Z, 0-9, _
export const macrocaseConstraint = (s: string) =>
	/^[A-Z0-9_]*$/.test(s) || "Value must only contain A-Z, 0-9, and underscores";

// Constrain a string to a-z, A-Z, 0-9
export const alphanumericConstraint = (s: string) =>
	/^[a-zA-Z0-9]*$/.test(s) || "Value must be alphanumeric only";

// Constrain a string to a-z, A-Z, -, _
export const alphanumericDashedConstraint = (s: string) =>
	/^[\w\d_-]*$/.test(s) ||
	"Value must only contain aplhanumeric characters, dashes, and underscores";

// Constrain a string to a-z, A-Z, -, ., _
export const alphanumericDotDashedConstraint = (s: string) =>
	/^[\w\d\._-]*$/.test(s) ||
	"Value must only contain aplhanumeric characters, dots, dashes, and underscores";
