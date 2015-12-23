import { Map, OrderedMap } from 'immutable';

//TODO: refactor as props on the exported component for external use
let initialState = OrderedMap({
	'name': Map({ id: 'name', description: 'Name'}),
	'job': Map({ id: 'job', description: 'Job Title'}),
	'salary': Map({ id: 'salary', description: 'Salary'})
});

let itemProperties = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default itemProperties;