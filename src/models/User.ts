import {Model} from "./Model";
import {Attributes} from "./Attributes";
import {Eventing} from "./Eventing";
import {ApiSync} from "./ApiSync";
import {Collection} from "./Collection";

export interface UserProps {
	id?: number
	name?: string
	age?: number
}

const rootUrl = 'http://localhost:3000/users'

export class User extends Model<UserProps> {
	static newUser(attrs: UserProps): User {
		return new User(
			new Attributes<UserProps>(attrs),
			new Eventing(),
			new ApiSync(rootUrl)
		)
	}

	static buildUserCollection(): Collection<User, UserProps> {
		// const makeUser = (json: UserProps): User => User.newUser(json)
		return new Collection<User, UserProps>(
			`${rootUrl}`,
			(json: UserProps) => User.newUser(json)
		)
	}
}