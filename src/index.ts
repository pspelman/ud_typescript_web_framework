// import {UserForm} from "./views/UserForm";
// import {User} from "./models/User";
// import {UserEdit} from "./views/UserEdit";
//
// const user = User.newUser({name: "Will", age: 20})
//
// const root = document.getElementById('root')
//
// if (root) {
// 	const userEdit = new UserEdit(
// 		document.getElementById('root'),
// 		user
// 	);
//
// 	userEdit.render()
// 	console.log('user edit: ', userEdit)
//
// } else {
// 	throw new Error("Root element not found")
// }

// Note: using UserList

import {Collection} from "./models/Collection";
import {User, UserProps} from "./models/User";
import {UserList} from "./views/UserList";

const users = new Collection(
	'http://localhost:3000/users',
	(json: UserProps) => {
		return User.newUser(json)
	})

// listen for the change event
users.on('change', () => {
	const root = document.getElementById('root')
	if (root) {
		new UserList(root, users).render()
	}
})

users.fetch() // try to get all the stuff
