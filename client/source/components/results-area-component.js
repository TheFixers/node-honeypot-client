import React from 'react'
import ClientDataTable from './data-table-component.js'

export default React.createClass({
	displayName: 'Results Area',
	
	render() {
		let data = this.props.data
		return (
			<div>
				{Object.keys(data).map(function(key, index) {
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