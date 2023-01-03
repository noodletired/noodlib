/**
 * Base class representing a duration of time.
 * The minimum resolution is milliseconds.
 * Can be cast to a primitive similar to Date, returning the duration in milliseconds.
 */
export class Duration {
	protected milliseconds: number;

	constructor(duration: Duration | number) {
		this.milliseconds = +duration;
	}

	[Symbol.toPrimitive]() {
		return this.milliseconds;
	}

	add(duration: Duration | number) {
		this.milliseconds += +duration;
	}

	subtract(duration: Duration | number) {
		this.milliseconds -= +duration;
	}

	multiply(factor: number) {
		this.milliseconds *= factor;
	}

	divide(factor: number) {
		if (factor === 0) {
			throw new RangeError("Cannot divide by zero");
		}
		this.milliseconds /= factor;
	}
}

/**
 * Duration helper for milliseconds.
 */
export const Milliseconds = Duration;

/**
 * Duration helper for seconds.
 */
export class Seconds extends Duration {
	constructor(duration: number) {
		super(duration * 1000);
	}
}

/**
 * Duration helper for minutes.
 */
export class Minutes extends Duration {
	constructor(duration: number) {
		super(duration * 1000 * 60);
	}
}

/**
 * Duration helper for hours.
 */
export class Hours extends Duration {
	constructor(duration: number) {
		super(duration * 1000 * 60 * 60);
	}
}

/**
 * Duration helper for days.
 */
export class Days extends Duration {
	constructor(duration: number) {
		super(duration * 1000 * 60 * 60 * 24);
	}
}

/**
 * Duration helper for weeks.
 */
export class Weeks extends Duration {
	constructor(duration: number) {
		super(duration * 1000 * 60 * 60 * 24 * 7);
	}
}
