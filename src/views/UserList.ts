import {CollectionView} from "./CollectionView";
import {User, UserProps} from "../models/User";
import {UserShow} from "./UserShow";

// create one view for every user that we fetch from the JSON endpoint
export class UserList extends CollectionView<User, UserProps> {
	renderItem(model: User, itemParent: Element): void {
		// now create a VIEW -- we can re-use the UserShow view
		return new UserShow(itemParent, model).render()
	}
}

