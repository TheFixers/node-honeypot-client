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

/*for (var key in data) {
// skip loop if the property is from prototype
    if (!data.hasOwnProperty(key)) continue;

    console.log(key + " = " + JSON.parse(data[key])._id.$oid);

   
}*/