import {Collection} from "../models/Collection";

export abstract class CollectionView<T, K> {
	// take in a collection of models
	constructor(
		public parent: Element,
		public collection: Collection<T, K>) {
	}
	// each child must have a renderItem method
	abstract renderItem(model: T, itemParent: Element): void

	render(): void {
		// iterate over the collection
		// for every model inside the collection call render Item
		this.parent.innerHTML = ''

		const templateElement = document.createElement('template')

		for (let model of this.collection.models) {
			const itemParent = document.createElement('div')
			this.renderItem(model, itemParent)
			templateElement.content.append(itemParent)  // this is building up the HTML for items in the collection
		}
		// now append it all to the collection parent
		this.parent.append(templateElement.content)
	}
}
