interface UserProps {
	name?: string;
	age?: number;
}

export enum UserFields {
	name="name",
	age="age"
}

type Callback = () => void

export class User {
	events: {[key: string]: Callback[]} = {}

	constructor(private data: UserProps) {
	}

	get(propName: string): number | string {
		return this.data[propName]
	}

	set(update: UserProps): void {
		Object.assign(this.data, update)
	}

	on(eventName: string, callback: Callback): void {
		const handlers = this.events[eventName] || [];
		handlers.push(callback)
		this.events[eventName] = handlers
	}

	trigger(eventName: string): void {
		// check if we have an event of this name
		const handlers = this.events[eventName]
		if (!handlers || handlers.length === 0) {
			// no handlers
			return
		}
		handlers.forEach(callback => callback())
	}


}