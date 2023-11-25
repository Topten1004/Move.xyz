import { writable, type Subscriber, type Unsubscriber, type Updater, get } from 'svelte/store';

/* eslint-disable  @typescript-eslint/no-explicit-any */
export default class Store<T = any> {
	set: (this: void, value: T) => void;
	subscribe: (this: void, run: Subscriber<T>, invalidate?: unknown) => Unsubscriber;
	update: (this: void, updater: Updater<T>) => void;
	constructor(value: T = undefined) {
		const { set, subscribe, update } = writable(value);
		this.set = set;
		this.subscribe = subscribe;
		this.update = update;
	}
	get() {
		return get(this);
	}
}
