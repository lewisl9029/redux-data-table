import { SORT_ITEMS } from '../actions/actions';

let initialState = 'id';

let sortingProperty = (state = initialState, action) => {
	switch (action.type) {
		case SORT_ITEMS:
			return action.sortingProperty;
		default:
			return state;
	}
};

export default sortingProperty;