import {User, UserProps} from "./User";
import {Eventing} from "./Eventing";
import axios, {AxiosResponse} from "axios";

export class Collection {
	events: Eventing = new Eventing()
	models: User[] = []

	constructor(public rootUrl: string) {
	}

	get on() {
		return this.events.on
	}

	get trigger() {
		return this.events.trigger
	}

	fetch(): void {
		console.log(`getting data from ${this.rootUrl}`)
		axios.get(this.rootUrl)
			.then((response: AxiosResponse) => {
				// create the users with response.data
				console.log("Response: ", response)
				response.data.forEach((props: UserProps) => {
					this.models.push(User.newUser(props))
				})
				this.trigger('change')  // make sure the app knows
			})
	}

}