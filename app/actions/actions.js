import { Seq, Map, OrderedMap } from 'immutable';

export const UPDATE_FILTER = 'UPDATE_FILTER';
export function updateFilter(filterText) {
  return { type: UPDATE_FILTER, filterText };
}

export const SWITCH_PAGE = 'SWITCH_PAGE';
export function switchPage(page) {
  return { type: SWITCH_PAGE, page };
}

export const SORT_ITEMS = 'SORT_ITEMS';
export function sortItems(sortingProperty) {
  return { type: SORT_ITEMS, sortingProperty };
}

export const REMOVE_ITEM = 'REMOVE_ITEM';
export function removeItem(itemId) {
  return { type: REMOVE_ITEM, itemId };
}

export const REVERSE_ITEMS = 'REVERSE_ITEMS';
export function reverseItems() {
  return { type: REVERSE_ITEMS };
}

export const UPDATE_ITEMS = 'UPDATE_ITEMS';
export function updateItems(items) {
  return { type: UPDATE_ITEMS, items };
}