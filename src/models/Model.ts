import {AxiosPromise, AxiosResponse} from "axios";

type Callback = () => void

interface ModelAttributes<T> {
	// we need a generic interface b/c we aren't sure about the type
	set(value: T): void

	getAll(): T

	get<K extends keyof T>(key: K): T[K]
}

interface Sync<T> {
	fetch(id: number): AxiosPromise

	save(data: T): AxiosPromise  // save will only accept something typed to the defined T
}


interface Events {
	on(eventName: string, callback: Callback): void

	trigger(eventName: string): void
}

interface HasId {
	id?: number
}

export class Model<T extends HasId> {
	constructor(
		private attributes: ModelAttributes<T>,
		private events: Events,
		private sync: Sync<T>
	) {
	}

	get on() {
		// return (event, callback) => this.events.on(event, callback)
		return this.events.on
	}

	get trigger() {
		return this.events.trigger
	}

	get get() {
		// return (key) => this.attributes.get(key)
		return this.attributes.get
	}

	set(update: T): void {
		this.attributes.set(update)
		this.events.trigger('change')
	}

	fetch(): void {
		const id = this.attributes.get('id')
		if (typeof id !== 'number') {
			throw new Error('Cannot fetch User without an ID')
		}
		this.sync.fetch(id)
			.then((response: AxiosResponse): void => {
				// this.attributes.set(response.data)
				this.set(response.data)
			})
	}

	save() {
		this.sync.save(this.attributes.getAll())
			.then((response: AxiosResponse): void => {
				console.log(`Success`,)
				this.trigger('save')
			}).catch(() => {
			this.trigger('error')
		})
	}


}