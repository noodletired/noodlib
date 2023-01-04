declare type Rejection = (reason?: unknown) => void;

declare type CancellablePromiseExecutor<T = unknown> = (
	resolve: (value: T | PromiseLike<T>) => void,
	reject: Rejection,
	cancel: Rejection
) => void;

/**
 * Extension of the Promise type to support cancellation.
 * @throws rejection if "cancel" is called; any code awaiting this Promise will throw.
 */
export class CancellablePromise<T = unknown> extends Promise<T> {
	public cancel: Rejection;

	constructor(executor: CancellablePromiseExecutor<T>) {
		let cancel: Rejection = () => null;
		super((resolve, reject) => {
			cancel = reject;
			executor(resolve, reject, cancel);
		});

		this.cancel = cancel;
	}

	// Required to return a Promise for then/catch/finally
	static get [Symbol.species](): PromiseConstructor {
		return Promise;
	}

	get [Symbol.toStringTag](): string {
		return "CancellablePromise";
	}
}
