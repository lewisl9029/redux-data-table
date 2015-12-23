import { Range, Map, OrderedMap } from 'immutable';
import faker from 'faker';

import { 
	SORT_ITEMS, 
	REMOVE_ITEM, 
	REVERSE_ITEMS,
	UPDATE_ITEMS
} from '../actions/actions';

//TODO: refactor as props on the exported component for external use
let fakeItems = Range(0, 1000)
  .map(id => [id, Map({ 
    id, 
    name: faker.name.findName(), 
    job: faker.name.jobTitle(),
    salary: faker.random.number()
  })]);

let initialState = OrderedMap(fakeItems);

let items = (state = initialState, action) => {
	switch (action.type) {
		case SORT_ITEMS:
			return state.sortBy(item => item.get(action.sortingProperty));
		case REVERSE_ITEMS:
			return state.reverse();
		case REMOVE_ITEM:
			return state.remove(action.itemId);
    //TODO: support updates to individual items eventually
		case UPDATE_ITEMS:
			return action.items;
		default:
			return state;
	}
};

export default items;