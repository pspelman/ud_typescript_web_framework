import {User} from "../models/User";

type Callback = () => void;

export class UserForm {
	constructor(
		public parent: Element,
		public model: User
	) {
	}

	eventsMap(): {[key: string]: Callback} {
		return {
			'click:button': this.onButtonClick,
			'mouseover:h1': this.onHeaderHover
		}
	}

	onHeaderHover = () => {
		console.log(`you went over the header!`, )

	}

	onButtonClick = () => {
		console.log(`button was clicked`, )
	}

	template(): string {
		return `
			<div>
			<h1>User Form</h1>
			<div>Name: ${this.model.get('name')}</div>
			<div>Age: ${this.model.get('age')}</div>
			<br/>
			<input/>
			<button>Click me</button>
		</div>
	`
	}

	bindEvents(fragment: DocumentFragment): void {
		const eventsMap = this.eventsMap()
		for (let eventKey in eventsMap) {
			const [eventName, selector] = eventKey.split(':')
			fragment.querySelectorAll(selector).forEach(element => {
				element.addEventListener(eventName, eventsMap[eventKey])
			})
		}

	}


	render(): void {
		// have to take the string and convert it into HTML
		const templateElement = document.createElement('template')
		templateElement.innerHTML = this.template()
		this.bindEvents(templateElement.content)
		this.parent.append(templateElement.content)
	}
}