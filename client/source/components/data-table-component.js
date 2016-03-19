import React from 'react'
import DataItemCreator from '../modules/data-item-object-creator.js'

export default React.createClass({

	displayName: 'Data Table Component',

	propTypes: {
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
		return ( 
			<table className='table center' align="right">
				<tbody> 
					<tr>
						<th>Index</th>
						<td>{this.props.index}</td>
					</tr>
					<tr>
						<th>ID</th>
						<td>{this.props.id}</td>
					</tr>
					<tr>
						<th>IP</th>
						<td>{this.props.ip}</td>
					</tr>
					<tr>
						<th>Username</th>
						<td>{this.props.username}</td>
					</tr>
					<tr>
						<th>Passwords</th>
						<td>{this.props.passwords}</td>
					</tr>
					<tr>
						<th>Data</th>
						<td>{this.props.data}</td>
					</tr>
					<tr>
						<th>Key</th>
						<td>{this.props.userkey}</td>
					</tr>
					<tr>
						<th>Time</th>
						<td>{this.props.time}</td>
					</tr>
					<tr>
						<th>Port</th>
						<td>{this.props.port}</td>
					</tr>
					<tr>
						<th>Socket</th>
						<td>{this.props.socket}</td>
					</tr>
				</tbody> 
			</table>
		)
	}
})

