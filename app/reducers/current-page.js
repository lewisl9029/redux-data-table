import { SWITCH_PAGE, UPDATE_FILTER, UPDATE_ITEMS } from '../actions/actions';

let initialState = 1;

let currentPage = (state = initialState, action) => {
	switch (action.type) {
		case SWITCH_PAGE:
			return action.page;
		// Reset to first page when filtering to avoid out of bounds pages
		case UPDATE_FILTER:
			return initialState;
		// Reset to first page when updating data to avoid out of bounds pages
		case UPDATE_ITEMS:
			return initialState;
		default:
			return state;
	}
};

export default currentPage;