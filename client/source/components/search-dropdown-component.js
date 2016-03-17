import React from 'react'

export default React.createClass({

    displayName: 'Search Dropdown Component',

    propTypes: {
        searchType: React.PropTypes.string.isRequired,
        updateSearchType: React.PropTypes.func.isRequired
    },

    componentDidMount() {
        console.log("Search Dropdown mounted...")
    },

    componentWillUnmount() {
        console.log("Search Dropdown un-mounted...")
    },

    render() {
        return (
            <div className='react-search-dropdown-component'>
                {this._renderLayout(this.props.children)}
            </div>
        )
    },

    _renderLayout() {
        return (
            <select 
                className="search-select" 
                defaultValue="title"
                searchType={this.props.searchType}
                onChange={this.props.updateSearchType}>

                <option className='select-header' value="title" disabled>Search By</option>
                <option className='select-option' value="all">Show All</option>
                <option className='select-option' value="index">Index</option>
                <option className='select-option' value="ip">IP Address</option>
                <option className='select-option' value="passwords">Passwords</option>
                <option className='select-option' value="id">ID</option>
                <option className='select-option' value="key">Key</option>
                <option className='select-option' value="time">Time</option>
                <option className='select-option' value="port">Port</option>
                <option className='select-option' value="socket">Socket</option>
            
            </select>
        )
    }
})