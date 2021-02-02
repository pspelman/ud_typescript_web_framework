export class UserForm {
	constructor(public parent: Element) {
	}

	template(): string {
		return `
			<div>
			<h1>User Form</h1>
			<input/>
		</div>
	`
	}

	render(): void {
		// have to take the string and convert it into HTML
		const templateElement = document.createElement('template')
		templateElement.innerHTML = this.template()
		this.parent.append(templateElement.content)
	}
}