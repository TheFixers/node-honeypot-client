import React from 'react'

export default React.createClass({

	displayName: 'Table Row Component',

	propTypes: {
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
		return ( 
			<tr>
				<th>{th}</th>
				<td>{td}</td>
			</tr>
		)
	}
})