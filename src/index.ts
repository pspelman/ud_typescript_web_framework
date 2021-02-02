import {User} from "./models/User";
import axios from 'axios'

// axios.post('http://localhost:3000/users', {
// 	name: 'phil',
// 	age: 24
// })

// axios.get("http://localhost:3000/users/1").then(res => {
// 	console.log(`response: `, res)
// })


const user = new User({id: 1})


user.on('change', () => {
	console.log("User was changed | ", user)
})

user.fetch()

const user2 = new User({id: 1})
user2.get('name')

user2.set({name: "Jim"})
user2.on('save', () => {
	console.log(`user was saved successfully`, )
})
user2.save()

// user.trigger('change')

// user.set({'name': "new NAME"})
// user.attributes.set({name: 'Joe'})
// console.log(`user.get('name'): `, user.get('name'))


// const user2 = new User({name: 'john', age: 32})
// user2.save()
