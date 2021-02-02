import {Eventing} from "./Eventing";
import {Sync} from "./Sync";
import {Attributes} from "./Attributes";
import {AxiosResponse} from "axios";

export interface UserProps {
	id?: number
	name?: string
	age?: number
}

export enum UserFields {
	name="name",
	age="age"
}


export class User {

	public events: Eventing = new Eventing()
	public sync: Sync<UserProps> = new Sync<UserProps>("http://localhost:3000")
	public attributes: Attributes<UserProps>

	constructor(attrs: UserProps) {
		this.attributes = new Attributes<UserProps>(attrs)
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

	set(update: UserProps): void {
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
				console.log(`Success`, )
				this.trigger('save')
			}).catch(() => {
				this.trigger('error')
		})
	}

}