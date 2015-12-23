import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import DataTable from '../components/data-table';

let App = ({ 
	dispatch, 
	currentPage, 
	filename, 
	filterText, 
	itemsPerPage, 
	items, 
	itemProperties,
	sortingProperty
}) => (
	<div className="container" style={({
		marginTop: '1em'
	})}>
		<h1>Redux Data Table Demo</h1>
		<DataTable 
			currentPage={currentPage} 
			filterText={filterText} 
			items={items} 
			itemsPerPage={itemsPerPage} 
			itemProperties={itemProperties}
			removeItem={itemId => dispatch(actions.removeItem(itemId))}
			reverseItems={() => dispatch(actions.reverseItems())}
			sortingProperty={sortingProperty}
			sortItems={sortingProperty => dispatch(actions.sortItems(sortingProperty))}
			switchPage={page => dispatch(actions.switchPage(page))}
			updateFilter={filterText => dispatch(actions.updateFilter(filterText))} />
	</div>
);

export default connect(state => ({ 
	currentPage: state.get('currentPage'),
	filterText: state.get('filterText'),
	itemProperties: state.get('itemProperties'),
	items: state.get('items'),
	itemsPerPage: state.get('itemsPerPage'),
	sortingProperty: state.get('sortingProperty')
}))(App);