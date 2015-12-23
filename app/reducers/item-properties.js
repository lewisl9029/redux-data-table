import { Map, OrderedMap } from 'immutable';

//TODO: refactor as props on the exported component for external use
let initialState = Map({});

let itemProperties = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default itemProperties;