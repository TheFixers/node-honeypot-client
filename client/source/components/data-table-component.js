import React from 'react'
import itemCreator from '../scripts/item-object-creator.js'
import TableRow from './data-table-row-component.js'

export default React.createClass({

	displayName: 'Data Table Component',

	propTypes: {
  	    data: React.PropTypes.string.isRequired
    },

	componentDidMount() {
	    console.log("Table mounted...")
    },

    componentWillUnmount() {
	    console.log("Table un-mounted...")
    },

	render() {
		let item = null
		try {
			item = itemCreator(JSON.parse(this.props.data), this.props.index)
		} catch (e) {
			console.error(e.message)
		}
		if (item) {
			return (
		    	<table className='table center'>
		    		<tbody>
						{mapObject(item, function (key, value) {
						  return (
	    						<TableRow 
	    						    th={key.toString()} 
	    						    td={value.toString()} />
	    					)
						})}
		    		</tbody>
		    	</table>
		    )
		}
	    	
	}
})

function mapObject(object, callback) {
    return Object.keys(object).map(function (key) {
        return callback(key, object[key])
    })
}