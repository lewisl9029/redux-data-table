import { combineReducers } from 'redux-immutablejs';
import { Map } from 'immutable';

import currentPage from './current-page';
import filterText from './filter-text';
import itemProperties from './item-properties';
import items from './items';
import itemsPerPage from './items-per-page';
import sortingProperty from './sorting-property';

export default combineReducers({
	currentPage,
	filterText,
	itemProperties,
	items,
	itemsPerPage,
	sortingProperty
});