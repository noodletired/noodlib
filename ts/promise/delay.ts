import { type Duration } from "../time/duration";

/**
 * Delay for a given amount of time.
 * @param duration length of time to delay.
 * @returns a Promise which will resolve after the specified amount of time.
 */
export const delay = (duration: number | Duration) =>
	new Promise((resolve) => setTimeout(resolve, +duration));
