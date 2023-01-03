import { delay } from "./delay";
import { type Duration, Seconds } from "../time/duration";

/**
 * Attempt to retry an asynchronous function call if it fails.
 * Useful for external API requests which may throw unexpectedly,
 * particularly where a short delay could resolve the issue - e.g. GitLab Commits API.
 * @param request function to retry on throw.
 * @param times attempts at retrying, defaults to 1.
 * @param delay in milliseconds, defaults to 1000.
 * @returns the result of the request on success.
 * @throws on failure after maximum attempts.
 */
export const autoRetry = async <T>(
	request: () => Promise<T>,
	times = 1,
	delayTime: Duration | number = new Seconds(1)
) => {
	if (times < 1) {
		throw new Error("Do not use AutoRetry with < 1 attempts");
	}

	let attempts = 0;
	while (true) {
		try {
			const response = await request();
			return response;
		} catch (error) {
			console.debug(new Error(`Failed an async request. Retries left: ${times - attempts}`).stack);

			if (++attempts > times) {
				throw error;
			} else {
				await delay(delayTime);
			}
		}
	}
};
