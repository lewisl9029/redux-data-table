import React from 'react';

let SearchBar = ({ updateFilter }) => (
	<div className="row">
		<div className="twelve columns">
			<input 
				type="text" 
				className="u-full-width" 
				placeholder="Search for an item..." 
				style={({
					marginBottom: '0.5em'
				})} 
				onChange={event => updateFilter(event.target.value)}
				/>
		</div>
	</div>
);

export default SearchBar;