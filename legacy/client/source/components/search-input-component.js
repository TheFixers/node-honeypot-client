import React from 'react'

export default React.createClass({

	displayName: 'Search Input Component',

	propTypes: {
		placeholder: React.PropTypes.string.isRequired,
		searchTerm: React.PropTypes.string.isRequired,
		updateSearchTerm: React.PropTypes.func.isRequired
	},

	componentDidMount() {
		//console.log("Search Input mounted...")
	},

	componentWillUnmount() {
		//console.log("Search Input un-mounted...")
	},

	render() {
        return (
            <div className='react-search-input-component'>
                {this._renderLayout(this.props.children)}
            </div>
        )
    },

	_renderLayout() {
		return (
			<input
				className="search-input"
				type="text"
				placeholder={this.props.placeholder}
				searchTerm={this.props.searchTerm}
				onChange={this.props.updateSearchTerm} />
		)
	}
})