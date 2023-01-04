import { Duration } from "../time/duration";
import { delay } from "./delay";

/**
 * Limit the minimum duration of Promise.
 * @param minimumDelay delay in milliseconds.
 * @returns a Promise with its minimum duration set.
 */
export const rateLimit = <T>(promise: Promise<T>, minimumDelay: number | Duration): Promise<T> => {
	const delayPromise = delay(minimumDelay);
	return Promise.all([promise, delayPromise]).then(([result]) => result);
};
