import React from 'react'
import Highlight from 'react-highlighter'

export default React.createClass({

	displayName: 'Table Row Component',

	propTypes: {
		searchTerm: React.PropTypes.string.isRequired,
		searchType: React.PropTypes.string.isRequired,
		th: React.PropTypes.string.isRequired,
		td: React.PropTypes.string.isRequired
	},

	componentDidMount() {
		//console.log("Table Row mounted...")
	},

	componentWillUnmount() {
		//console.log("Table Row un-mounted...")
	},

	_capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1)
	},

	render() {
		let th = this._capitalizeFirstLetter(this.props.th)
		let td = this.props.td
		let searchType = th.toUpperCase()

		if (this.props.searchType === searchType && this.props.searchTerm !== "") {
			return (
				<tr>
					<th>{th}</th>
					<td>
						<Highlight 
							className="highlight" 
							search={this.props.searchTerm}>
						{td}
						</Highlight>
					</td>
				</tr>
			) 
		} else {
			return ( 
				<tr>
					<th>{th}</th>
					<td>{td}</td>
				</tr>
			)
		}
		
		
	}
})