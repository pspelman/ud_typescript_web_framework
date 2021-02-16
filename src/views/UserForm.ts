import {View} from "./View";
import {Model} from "../models/Model";
import {User, UserProps} from "../models/User";

type Callback = () => void;

export class UserForm extends View<User, UserProps>{

	eventsMap(): {[key: string]: Callback} {
		return {
			'click:.set-age': this.onSetAgeClick,
			'click:.set-name': this.onSetNameClick,
		}
	}

	onSetNameClick = (): void => {
		const input = this.parent.querySelector('input')
		let newName = input.value;
		console.log(`current name: `, newName)
		this.model.set({name: newName})

	}

	onSetAgeClick = (): void => {
		console.log(`setting the age`, )
		this.model.setRandomAge()

	}

	template(): string {
		return `
			<div>
			<h1>User Form</h1>
			<div>Name: ${this.model.get('name')}</div>
			<div>Age: ${this.model.get('age')}</div>
			<br/>
			<input/>
			<button class="set-name">Save name</button>
			<button class="set-age">Set Random Age</button>
		</div>
	`
	}



}
