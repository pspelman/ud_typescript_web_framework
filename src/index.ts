import {User, UserFields} from "./models/User";

const user = new User({name: "Phil", age: 20})

const name = user.get(UserFields.name)
const age = user.get(UserFields.age)

console.log(`name: `, name)
console.log(`age: `, age)

user.set({'name': 'John'})

