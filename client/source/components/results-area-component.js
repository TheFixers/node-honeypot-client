import React from 'react'
import DataTable from './data-table-component.js'
import filter from '../modules/data-filter.js'

export default React.createClass({
	
	displayName: 'Results Area',

	propTypes: {
		data: React.PropTypes.array.isRequired,
		searchTerm: React.PropTypes.string.isRequired,
		searchType: React.PropTypes.string.isRequired
	},

	componentDidMount() {
		console.log("Results Area mounted...")
	},

	componentWillUnmount() {
		console.log("Results Area un-mounted...")
	},

	render() {
        return (
            <div className='react-results-area-component'>
                {this._renderLayout(this.props.children)}
            </div>
        )
    },

	_renderLayout() {

		var moment = require('moment');
		console.log(moment.locale()); // en

		
		let data = this.props.data

		let searchTerm = this.props.searchTerm
		let searchType = this.props.searchType

		var filteredData = filter(data, searchType, searchTerm)

		let len = filteredData.length

		let results = (len === 1) ? (len + " result found") : (len + " results found")

		return (
			<div>
				<h4>{results}</h4>	
				{Object.keys(filteredData).map((item, index) => {
					
					let dataItem = filteredData[item]

					let values = {
						index: dataItem.index.toString(),
						id: dataItem.id.toString(),
						type: dataItem.type.toString(),
						ip: dataItem.ip.toString(),
						username: dataItem.username.toString(),
						passwords: dataItem.passwords.toString(),
						data: dataItem.data.toString(),
						key: dataItem.key.toString(),
						time: moment.unix(dataItem.time).toString(),
						port: dataItem.port.toString(),
						socket: dataItem.socket.toString()
					}

					return (
						<DataTable
							searchTerm={this.props.searchTerm}
							searchType={this.props.searchType}
							key={index}
							index={values.index}
							type={values.type}
							id={values.id}
							ip={values.ip}
							username={values.username}
							passwords={values.passwords}
							userkey={values.key}
							data={values.data}
							time={values.time}
							port={values.port}
							socket={values.socket} />
					)

				})}
			</div>
		)

	}
})