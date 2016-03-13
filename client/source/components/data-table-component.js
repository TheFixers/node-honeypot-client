import React from 'react'
import itemCreator from '../scripts/item-object-creator.js'

export default React.createClass({

	displayName: 'Data Table Component',

	render() {
		let item = null
		try {
			item = itemCreator(JSON.parse(this.props.data), this.props.index)
		} catch (e) {
			console.error(e.message)
			return (<h4>There was an error</h4>)
		}

		return (
			<table className='table center'>
				<tbody>
					<tr>
						<th>Server Item</th>
						<td>{item.index}</td>
					</tr>
					<tr>
						<th>IP Adress</th>
						<td>{item.ip}</td>
					</tr>
					<tr>
						<th>Username</th>
						<td>{item.username}</td>
					</tr>
					<tr>
						<th>Passwords</th>
						<td>{item.passwords}</td>
					</tr>
					<tr>
						<th>ID</th>
						<td>{item.id}</td>
					</tr>
					<tr>
						<th>Key</th>
						<td>{item.key}</td>
					</tr>
					<tr>
						<th>Time</th>
						<td>{item.time}</td>
					</tr>
					<tr>
						<th>Port</th>
						<td>{item.port}</td>
					</tr>
					<tr>
						<th>Socket</th>
						<td>{item.socket}</td>
					</tr>
				</tbody>
			</table>
		)
	}
})