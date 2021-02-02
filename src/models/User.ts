import {Eventing} from "./Eventing";
import {Sync} from "./Sync";
import {Attributes} from "./Attributes";

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



	// constructor(private data: UserProps) {}
	//
	// get(propName: string): number | string {
	// 	return this.data[propName]
	// }
	//
	// set(update: UserProps): void {
	// 	Object.assign(this.data, update)
	// }


}