import React from 'react';
import { Map, Range } from 'immutable';

export function getNumberOfPages(numberOfItems, itemsPerPage) {
	// Ensure there is at least 1 page even when there are 0 visible items
	return Math.max(1, Math.ceil(numberOfItems / itemsPerPage));
}

let PageNavigator = ({itemsPerPage, filteredItems, currentPage, switchPage}) => {
	let numberOfPages = getNumberOfPages(filteredItems.size, itemsPerPage);
	// Range is inclusive for begin, non-inclusive for end
	let pages = Range(1, numberOfPages + 1);
	return (
		<div className="row">
			<div className="four columns">
				<button 
					type="button" 
					className="u-full-width" 
					style={({
						marginBottom: '0.5em'
					})}
					onClick={() => switchPage(currentPage - 1)}
					disabled={currentPage <= 1}
				>
					Previous
				</button>
			</div>
			<div className="four columns">
				<select 
					className="u-full-width" 
					value={currentPage.toString()} 
					style={({
						marginBottom: '0.5em'
					})} 
					onChange={event => switchPage(parseInt(event.target.value))}
				>
					{
						pages.map(page => (
							<option key={page} value={page}>
								{page} / {numberOfPages}
							</option>
						))
					}
				</select>
			</div>
			<div className="four columns">
				<button 
					type="button" 
					className="u-full-width" 
					style={({
						marginBottom: '0.5em'
					})}
					onClick={() => switchPage(currentPage + 1)}
					disabled={currentPage >= numberOfPages}
				>
					Next
				</button>
			</div>
		</div>
	); 	
};

export default PageNavigator;