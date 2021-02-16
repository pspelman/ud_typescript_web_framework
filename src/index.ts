import {UserForm} from "./views/UserForm";
import {User} from "./models/User";
import {UserEdit} from "./views/UserEdit";

const user = User.newUser({name: "Will", age: 20})

const root = document.getElementById('root')

if (root) {
	const userEdit = new UserEdit(
		document.getElementById('root'),
		user
	);

	userEdit.render()
	console.log('user edit: ', userEdit)

} else {
	throw new Error("Root element not found")
}
