import {Collection} from "./models/Collection";
import {User, UserProps} from "./models/User";

// const userMaker = (json: UserProps) => User.newUser(json)

const collection = new Collection<User, UserProps>(
	'http://localhost:3000/users',
	(json: UserProps) => User.newUser(json))

collection.on('change', () => {
	console.log(`got users!  `, collection.models)
})
collection.fetch()
