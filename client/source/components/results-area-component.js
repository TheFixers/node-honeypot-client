import React from 'react'
import ClientDataTable from './data-table-component.js'

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

    // Decide how to render based on sort now...

	_renderLayout() {
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