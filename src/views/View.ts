import {User} from "../models/User";
type Callback = () => void
export abstract class View {
	constructor(
		public parent: Element,
		public model: User
	) {
		this.bindModel()
	}

	private bindModel() {
		this.model.on('change', () => {
			this.render()
		})
	}

	abstract eventsMap(): {[key: string]: Callback}
	abstract template(): string

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
		this.parent.innerHTML = ''
		// have to take the string and convert it into HTML
		const templateElement = document.createElement('template')
		templateElement.innerHTML = this.template()
		this.bindEvents(templateElement.content)
		this.parent.append(templateElement.content)
	}

}