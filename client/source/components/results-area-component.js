import React from 'react'
import ClientDataTable from './data-table-component.js'

export default React.createClass({
	displayName: 'Results Area',

	propTypes: {
		data: React.PropTypes.array.isRequired
	},

	componentDidMount() {
		console.log("Results mounted...")
	},

	componentWillUnmount() {
		console.log("Results un-mounted...")
	},

	render() {
		let data = this.props.data
		return (
			<div>
				{Object.keys(data).map((key, index) => {
					return (
						<ClientDataTable
							key={index}
							index={index}
							data={data[key]} />
					)
				})}
			</div>
		)
	}
})