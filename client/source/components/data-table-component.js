import React from 'react'
import DataItemCreator from '../scripts/data-item-object-creator.js'
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

	_mapObject(object, callback) {
		return Object.keys(object).map((key, index) => {
			return callback(key, object[key], index)
		})
	},

	render() {
        return (
            <div className='react-data-table-component'>
                {this._renderLayout(this.props.children)}
            </div>
        )
    },

	_renderLayout() {
		let item = null
		try {
			item = DataItemCreator(
				JSON.parse(this.props.data), 
				this.props.index
			)
		} catch (e) {
			console.error(e.message)
		}
		if (item) {
			return ( 
				<table className='table center'>
					<tbody> 
						{this._mapObject(item, (key, value, index) => {
							if (value !== null) {
								return ( 
									<TableRow 
										key={index}
										th={key.toString()}
										td={value.toString()} />
								)
							}
						})}
					</tbody> 
				</table>
			)
		}

	}
})

