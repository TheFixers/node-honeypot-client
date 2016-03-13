import React from 'react'
import itemCreator from '../scripts/item-object-creator.js'

export default React.createClass({
	displayName: 'Data Table Component',
	
	render() {
		let item = null
		try {
			item = itemCreator(JSON.parse(this.props.data))
			console.log(item)
			
		} catch (e) {
			console.error(e.message)
			return (<h4>There was an error</h4>)
		}

		return (
			<table className='table center'>
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
			</table>
		)

		
	
	}
})


/*{displayValues.map((item, index) => {
	let th = "no item found"
	let td = "no item found"
	try {
		th = item
	} catch (e) {
		console.error("no item found...")
	}
	try {
		td = item[index]
	} catch (e) {
		console.error("no item found...")
	}
	return (
		<div>
		<h4>{th}</h4>
		<h4>{td}</h4>
		</div>
	)
})}*/