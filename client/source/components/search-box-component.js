import React from 'react'
import Dropdown from './search-dropdown-component.js'

export default React.createClass({

	displayName: 'Search Box Component',

	componentDidMount() {
		console.log("Search Box mounted...")
	},

	componentWillUnmount() {
		console.log("Search Box un-mounted...")
	},

	render() {
		return (
			<div>
				<form>
				    <Dropdown />
					<input
						className="search-input"
						type="text"
						placeholder={this.props.placeholder}
						value={this.props.value}
						onChange={this.props.updateSearch} />
				</form>
			</div>
		)
	}
})

const colours = [
    {name: "Red",   hex: "#F21B1B"}, 
    {name: "Blue",  hex: "#1B66F2"}, 
    {name: "Green", hex: "#07BA16"}
]