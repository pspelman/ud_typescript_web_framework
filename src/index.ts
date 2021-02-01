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
user.set({name: "A new man", age: 27})
user.save()

user.fetch()
setTimeout(() => {
	console.log(user)
}, 1000)

// const user2 = new User({name: 'john', age: 32})
// user2.save()
