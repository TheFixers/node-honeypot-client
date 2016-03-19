import React from 'react'
import TableRow from './data-table-row-component.js'
import DataItemCreator from '../modules/data-item-object-creator.js'

export default React.createClass({

	displayName: 'Data Table Component',

	propTypes: {
		searchType: React.PropTypes.string.isRequired,
		searchTerm: React.PropTypes.string.isRequired,
		index: React.PropTypes.string.isRequired,
		ip: React.PropTypes.string.isRequired,
		id: React.PropTypes.string.isRequired,
		username: React.PropTypes.string.isRequired,
		userkey: React.PropTypes.string.isRequired,
		passwords: React.PropTypes.string.isRequired,
		data: React.PropTypes.string.isRequired,
		time: React.PropTypes.string.isRequired,
		port: React.PropTypes.string.isRequired,
		socket: React.PropTypes.string.isRequired
	},

	componentDidMount() {
		//console.log("Table mounted...")
	},

	componentWillUnmount() {
		//console.log("Table un-mounted...")
	},

	render() {
        return (
            <div className='react-data-table-component'>
                {this._renderLayout(this.props.children)}
            </div>
        )
    },

	_renderLayout() {
		
		let rows = [
			{name: "index",     type: "INDEX",     value: this.props.index},
			{name: "id",        type: "ID",        value: this.props.id},
			{name: "ip" ,       type: "IP",        value: this.props.ip},
			{name: "username",  type: "USERNAME",  value: this.props.username},
			{name: "passwords", type: "PASSWORDS", value: this.props.passwords},
			{name: "data",      type: "DATA",      value: this.props.data},
			{name: "key",       type: "KEY",       value: this.props.userkey},
			{name: "time",      type: "TIME",      value: this.props.time},
			{name: "port",      type: "PORT",      value: this.props.port},
			{name: "socket",    type: "SOCKET",    value: this.props.socket}
		]

		return ( 
			
			<table className='table center'>
				<tbody> 
					{rows.map((item, index) => {
						//console.log(item.name, item.value)
						return (
							<TableRow
								key={index}
							    searchType={this.props.searchType}
							    searchTerm={this.props.searchTerm}
							    type={item.type}
								th={item.name}
								td={item.value} />
						)
					})}
				</tbody> 
			</table>
		)
	}
})

