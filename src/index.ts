import {Collection} from "./models/Collection";
import {User, UserProps} from "./models/User";

// const userMaker = (json: UserProps) => User.newUser(json)

const collection = User.buildUserCollection()

collection.on('change', () => {
	console.log(`got users!  `, collection.models)
})
collection.fetch()
