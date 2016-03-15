import React from 'react'
import SearchDropdown from './search-dropdown-component.js'
import SearchInput from './search-input-component.js'
import SearchButton from './search-button-component.js'

export default React.createClass({

	displayName: 'Search Area Component',

	componentDidMount() {
		console.log("Search Area mounted...")
	},

	componentWillUnmount() {
		console.log("Search Area un-mounted...")
	},

	render() {
		return (
			<div>
				<form>
				    <SearchDropdown />
					<SearchInput 
					    placeholder={this.props.placeholder}
					    value={this.props.value}
					    updateSearch={this.props.updateSearch} />
					<SearchButton />
				</form>
			</div>
		)
	}
})
