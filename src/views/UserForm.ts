import {View} from "./View";
import {Model} from "../models/Model";
import {User, UserProps} from "../models/User";

type Callback = () => void;

export class UserForm extends View<User, UserProps>{

	eventsMap(): {[key: string]: Callback} {
		return {
			'click:.set-age': this.onSetAgeClick,
			'click:.set-name': this.onSetNameClick,
			'click:.save-model': this.onSaveClick,
		}
	}

	onSaveClick = (): void => {
		console.log(`trying to save the model!`, )
		this.model.save()
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
			<button class="set-name">Update Name</button>
			<button class="set-age">Set Random Age</button>
			<button class="save-model">Save User</button>
		</div>
	`
	}



}
