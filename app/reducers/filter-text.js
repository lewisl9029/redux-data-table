import { UPDATE_FILTER } from '../actions/actions';

let initialState = '';

let filterText = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_FILTER:
			return action.filterText;
		default:
			return state;
	}
};

export default filterText;